import React, { useEffect, useState } from 'react';
import './ExamPage.css';
import { Modal, Button, Toast, ToastContainer } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { listExams } from '../../../api/ExamApi';

const ExamPage = () => {
  const navigate = useNavigate();

  const [exams, setExams] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeFinish, setTimeFinish] = useState(() => {
    const savedTimeFinish = localStorage.getItem('timeFinish');
    return savedTimeFinish ? parseInt(savedTimeFinish) : null;
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTimeFinish = localStorage.getItem('timeFinish');
    if(savedTimeFinish){
      return parseInt(savedTimeFinish) - Math.floor(Date.now() / 1000) > 0 ? parseInt(savedTimeFinish) - Math.floor(Date.now() / 1000) : 0;
    }
    return 0;
  });
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('accessToken') == null) {
      navigate('/login');
      return;
    }
    if (timeLeft===0 && timeFinish){
      navigate('/exam/finish');
    }
    const fetchExams = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await listExams(token);
        setExams(response.data.msg.exams);
        if (response.data.msg.exams.length > 0) {
          const exam = response.data.msg.exams[0];
          setQuestions(exam.questions);
          
          if (!timeFinish) {
            const currentTime = Math.floor(Date.now() / 1000);
            const finishTime = currentTime + exam.duration - 60;
            setTimeFinish(finishTime);
            localStorage.setItem('timeFinish', finishTime);
          }
        }
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    fetchExams();

    const savedAnswers = JSON.parse(localStorage.getItem('selectedAnswers') || '{}');
    setSelectedAnswers(savedAnswers);

    const timerId = setInterval(async () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const updatedTimeLeft = (timeFinish && timeFinish > currentTime) ? timeFinish - currentTime : 0;
      setTimeLeft(updatedTimeLeft);
  
      if (updatedTimeLeft > 0) {
        if (updatedTimeLeft === 60) {
          setShowToast(true);
        }
      } else {
        clearInterval(timerId);
        setShowToast(true);
        try {
          // const token = localStorage.getItem('accessToken');
          // await submitExam(token, selectedAnswers); // Gọi API để nộp bài thi
          navigate('/exam/finish'); // Chuyển hướng đến trang kết quả
        } catch (error) {
          console.error('Error submitting exam:', error);
        }
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [navigate, timeFinish]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newSelectedAnswers = {
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    };
    setSelectedAnswers(newSelectedAnswers);
    localStorage.setItem('selectedAnswers', JSON.stringify(newSelectedAnswers));
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowModal(false);
    navigate('/exam/finish');
  };

  const handleCloseModal = () => setShowModal(false);

  const renderQuestions = () => {
    return questions.map((q, index) => (
      <div key={index} className="question">
        <h5>Câu {index + 1}: {q.description}</h5>
        {q.options.map((option, i) => (
          <label key={i}>
            <input
              type="radio"
              name={`q${index}`}
              value={option._id}
              checked={selectedAnswers[index] === i}
              onChange={() => handleAnswerChange(index, i)}
            />
            {String.fromCharCode(65 + i)}: {option.text}
          </label>
        ))}
        <br />
      </div>
    ));
  };

  const scrollToQuestion = (index) => {
    document.querySelectorAll('.question')[index].scrollIntoView({ behavior: 'smooth' });
  };

  const renderQuestionNumbers = () => {
    return questions.map((_, index) => (
      <div key={index} className={`question-number ${selectedAnswers[index] !== undefined ? 'answered' : ''}`} onClick={() => scrollToQuestion(index)}>
        {index + 1}
      </div>
    ));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div id="questions" className="col-12 col-lg-8">
          <div id="container">
            <h1>Bài Thi</h1>
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

      <Modal show={showModal} onHide={handleCloseModal} >
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

      <ToastContainer position="top-end" className="p-3" itemType='info'>
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={5000} autohide>
          <Toast.Body>Sắp Hết giờ! Bạn nên nộp bài ngay.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ExamPage;
