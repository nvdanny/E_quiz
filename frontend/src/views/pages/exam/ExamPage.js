import React, { useEffect, useState, useCallback } from 'react';
import './ExamPage.css';
import { Modal, Button, Toast, ToastContainer } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getActiveExam, submitExam, getExamById } from '../../../api/ExamApi';

const ExamPage = () => {
  const navigate = useNavigate();

  const [exam, setExam] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeFinish, setTimeFinish] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirmSubmit = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const token = localStorage.getItem('accessToken');
    const examId = localStorage.getItem('examId');
    const user = JSON.parse(localStorage.getItem('userInfo'));
    try {
      if (examId) {
        const response = await submitExam(token, examId, selectedAnswers, user);
        if (response.data.success) {
          localStorage.removeItem('timeFinish');
          localStorage.removeItem('selectedAnswers');
          localStorage.removeItem('examId');
          localStorage.setItem("submitted", "true");
          navigate('/exam/finish');
        } else {
          throw new Error('Submission failed');
        }
      }
    } catch (err) {
      console.error(err);
      if (err.response?.data?.success == false) {
        alert(err.response.data.error);
        navigate('/exam/finish');
      } else {
        navigate('/exam/error', { state: { error: err.message } });
      }
    } finally {
      setIsSubmitting(false);
      setShowModal(false);
    }
  }, [navigate, selectedAnswers, isSubmitting]);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login');
      return;
    }

    const submitted = localStorage.getItem('submitted');
    if (submitted === "true") {
      navigate('/exam/finish');
      return;
    }

    const fetchExam = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const examId = localStorage.getItem('examId');
        let examData;

        if (examId) {
          const response = await getExamById(examId, token);
          examData = response.data.msg.foundExam;
        } else {
          const response = await getActiveExam(token);
          examData = response.data.exam;
        }

        if (examData) {
          setExam(examData);
          localStorage.setItem("examId", examData._id);

          const savedTimeFinish = localStorage.getItem('timeFinish');
          if (!savedTimeFinish) {
            const currentTime = Math.floor(Date.now() / 1000);
            const finishTime = currentTime + examData.duration * 60;
            setTimeFinish(finishTime);
            localStorage.setItem('timeFinish', finishTime.toString());
          } else {
            setTimeFinish(parseInt(savedTimeFinish));
          }
        } else {
          navigate('/exam/error', { state: { error: 'No active exam found' } });
        }
      } catch (error) {
        console.error('Error fetching exam:', error);
        navigate('/exam/error', { state: { error: error.message } });
      }
    };

    fetchExam();

    const savedAnswers = JSON.parse(localStorage.getItem('selectedAnswers') || '{}');
    setSelectedAnswers(savedAnswers);
  }, [navigate]);

  useEffect(() => {
    if (!timeFinish) return;

    const timerId = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000);
      const updatedTimeLeft = Math.max(timeFinish - currentTime, 0);
      setTimeLeft(updatedTimeLeft);

      if (updatedTimeLeft <= 0) {
        clearInterval(timerId);
        handleConfirmSubmit();
      } else if (updatedTimeLeft === 60) {
        setShowToast(true);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeFinish, handleConfirmSubmit]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newSelectedAnswers = { ...selectedAnswers, [questionIndex]: optionIndex };
    setSelectedAnswers(newSelectedAnswers);
    localStorage.setItem('selectedAnswers', JSON.stringify(newSelectedAnswers));
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const renderQuestions = () => {
    return exam?.questions.map((q, index) => (
      <div key={q._id} className="question">
        <h5>Câu {index + 1}: {q.description}</h5>
  
        {q.imageUrl && q.imageUrl !== "/0" && (
          <div className="question-image">
            <img src={q.imageUrl} alt={`Hình ảnh cho câu hỏi ${index + 1}`} />
          </div>
        )}
  
        {q.options.map((option, i) => (
          <div key={option._id} className="option">
            <label>
              <div><input
                type="radio"
                name={`q${index}`}
                value={option._id}
                checked={selectedAnswers[index] === i}
                onChange={() => handleAnswerChange(index, i)}
              /></div>
              {option.text}
            </label>
  
            {option.imageUrl && (
              <div className="option-image">
                <img src={option.imageUrl} alt={`Hình ảnh cho tùy chọn`} />
              </div>
            )}
          </div>
        ))}
        <br />
      </div>
    ));
  };

  const scrollToQuestion = (index) => {
    document.querySelectorAll('.question')[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderQuestionNumbers = () => {
    return exam?.questions.map((q, index) => (
      <div 
        key={q._id} 
        className={`question-number ${selectedAnswers[index] !== undefined ? 'answered' : ''}`} 
        onClick={() => scrollToQuestion(index)}
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && scrollToQuestion(index)}
        role="button"
        aria-label={`Go to question ${index + 1}`}
      >
        {index + 1}
      </div>
    ));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div id="questions" className="col-12 col-lg-8">
          <div id="container">
            {exam && <h1>{exam.description}</h1>}
            <div id="question-container">
              {renderQuestions()}
            </div>
          </div>
        </div>
        <div id="sidebar" className="col-12 col-lg-4">
          <div id="sidebar-content">
            <div id="timer">
              <div id="timer-text">Thời gian còn lại:</div>
              <div id="timer-time">{`${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`}</div>
            </div>
            <hr />
            <div id="saveButton" onClick={handleSubmit}>NỘP BÀI</div>
            <div className="note">
              *Lưu ý: Bạn chỉ được hoàn thành bài thi của mình trong thời gian cho phép, quá thời gian quy định hệ thống sẽ dùng bài làm của bạn và nộp bài
            </div>
            <div id="question-list">
              {renderQuestionNumbers()}
            </div>
          </div>
        </div>
      </div>
      <button id="scrollToBottomBtn" title="Cuộn xuống cuối trang" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
        NỘP BÀI ↓
      </button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Xác Nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn nộp bài không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleConfirmSubmit}>
            Xác Nhận
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={5000} autohide>
          <Toast.Body>Sắp Hết giờ! Bạn nên nộp bài ngay.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ExamPage;