import React, { useEffect, useState } from 'react';
import './ExamPage.css';
import { Modal, Button, Toast, ToastContainer } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
      "question": "Thủ đô của Việt Nam là gì?",
      "options": ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Huế"]
  },
  {
      "question": "Ai là người phát minh ra bóng đèn điện?",
      "options": ["Thomas Edison", "Albert Einstein", "Isaac Newton", "Nikola Tesla"]
  },
  {
      "question": "Nguyên tố hóa học nào có ký hiệu 'O'?",
      "options": ["Oxy", "Vàng", "Bạc", "Sắt"]
  },
  {
      "question": "Đội bóng nào đã vô địch World Cup 2018?",
      "options": ["Pháp", "Croatia", "Đức", "Brazil"]
  },
  {
      "question": "Sông nào dài nhất thế giới?",
      "options": ["Sông Nile", "Sông Amazon", "Sông Mississippi", "Sông Dương Tử"]
  },
  {
      "question": "Tác giả của tiểu thuyết 'Chiến tranh và hòa bình' là ai?",
      "options": ["Leo Tolstoy", "Fyodor Dostoevsky", "Mark Twain", "Charles Dickens"]
  },
  {
      "question": "Thành phố nào được gọi là 'Thành phố ánh sáng'?",
      "options": ["Paris", "New York", "London", "Tokyo"]
  },
  {
      "question": "Hành tinh nào gần Mặt Trời nhất?",
      "options": ["Sao Thủy", "Sao Kim", "Sao Hỏa", "Sao Mộc"]
  },
  {
      "question": "Ai là người sáng lập ra hãng Apple?",
      "options": ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"]
  },
  {
      "question": "Ngôn ngữ nào được sử dụng nhiều nhất trên thế giới?",
      "options": ["Tiếng Anh", "Tiếng Trung Quốc", "Tiếng Tây Ban Nha", "Tiếng Hindi"]
  },
  {
      "question": "Bộ phim nào đã giành giải Oscar cho Phim xuất sắc nhất năm 2020?",
      "options": ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"]
  },
  {
      "question": "Loài chim nào không biết bay?",
      "options": ["Đà điểu", "Chim ưng", "Chim sẻ", "Chim én"]
  },
  {
      "question": "Ngọn núi cao nhất thế giới là gì?",
      "options": ["Everest", "K2", "Kangchenjunga", "Lhotse"]
  },
  {
      "question": "Năm nhuận có bao nhiêu ngày?",
      "options": ["366", "365", "364", "367"]
  },
  {
      "question": "Ai là tác giả của bức tranh 'Mona Lisa'?",
      "options": ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"]
  },
  {
      "question": "Quốc gia nào có diện tích lớn nhất thế giới?",
      "options": ["Nga", "Canada", "Trung Quốc", "Mỹ"]
  },
  {
      "question": "Thể loại nhạc nào bắt nguồn từ Jamaica?",
      "options": ["Reggae", "Jazz", "Rock", "Pop"]
  },
  {
      "question": "Đơn vị đo cường độ dòng điện là gì?",
      "options": ["Ampe", "Vôn", "Oát", "Ôm"]
  },
  {
      "question": "Ai là tổng thống đầu tiên của Hoa Kỳ?",
      "options": ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"]
  },
  {
      "question": "Biển nào lớn nhất thế giới?",
      "options": ["Thái Bình Dương", "Đại Tây Dương", "Ấn Độ Dương", "Biển Đông"]
  }
];


const ExamPage = () => {
  const navigate = useNavigate()
  if (localStorage.getItem('accessToken')==null){
    navigate('/login')
  }
  const initialTimeLeft = () => {
    const savedTime = localStorage.getItem('timeLeft');
    return savedTime !== null ? parseInt(savedTime) : 20 * 60;
  };

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          const newTime = prevTime - 1;
          localStorage.setItem('timeLeft', newTime);
          if (newTime === 60) { // Thông báo khi còn 1 phút
            setShowToast(true);
          }
          return newTime;
        } else {
          clearInterval(timerId);
          setShowToast(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowModal(false);
    alert('Bạn đã nộp bài thành công!');
  };

  const handleCloseModal = () => setShowModal(false);

  const renderQuestions = () => {
    return questions.map((q, index) => (
      <div key={index} className="question">
        <h5>Câu {index + 1}: {q.question}</h5>
        {q.options.map((option, i) => (
          <label key={i}>
            <input type="radio" name={`q${index}`} value={`option${i}`} />
            {String.fromCharCode(65 + i)}: {option}
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
      <div key={index} className="question-number" onClick={() => scrollToQuestion(index)}>
        {index + 1}
      </div>
    ));
  };
  const checkAnswered = ()=> {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            const questionNumber = Math.floor(index / 4);
            const questionNumberElement = document.querySelectorAll('.question-number')[questionNumber];
            questionNumberElement.classList.add('answered');
        });
    });
}

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  checkAnswered();
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
              <div id="timer-time">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>
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

      {/* Modal xác nhận nộp bài */}
      <Modal show={showModal} onHide={handleCloseModal} >
        <Modal.Header closeButton>
          <Modal.Title>Xác Nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn nộp bài không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>+
          <Button variant="primary" onClick={handleConfirmSubmit}>
            Xác Nhận
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast thông báo */}
      <ToastContainer position="top-end" className="p-3" itemType='info'>
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={5000} autohide>
          <Toast.Body>Sắp Hết giờ! Bạn nên nộp bài ngay.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ExamPage;