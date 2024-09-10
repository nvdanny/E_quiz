import { Background } from '@cloudinary/url-gen/qualifiers';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
const ExamWelcomePage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    navigate('/logout');
  }

  const startExam = () => {
    window.location.href = '/exam';
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 welcomePage" style={{background: "url('/landing-page/images/blndt-2024-no-text.png'"}}>
      <div className="content text-center bg-white p-5 rounded shadow">
        <h3>Chào mừng bạn đến với vòng thi Test Online</h3>
        <h4 className='mt-3'>CUỘC THI BẢN LĨNH NHÀ ĐẦU TƯ 2024</h4>

        <p className='text-left mt-5'>Thể lệ Bài thi gồm 20 câu trắc nghiệm A-B-C-D về các lĩnh vực Kinh tế, Tài chính, IQ... Ở mỗi câu hỏi, các thí sinh chỉ được lựa chọn 01 đáp án duy nhất.</p>
        <div className='text-left '> <strong>Tổng điểm bài thi:</strong> 20 điểm</div>
        <p className='text-left '><strong>Thời gian làm bài:</strong> 20 phút.</p>
        <p className='text-left '>Chúc bạn hoàn thành tốt bài thi của mình!</p>

        <Button variant="primary" onClick={handleShow} className="mt-3 ">
          VÀO THI
        </Button>
      </div>
      <Button 
            variant="secondary" 
            onClick={handleLogout} 
            className="position-absolute top-0 end-0 m-3"
        >
            Đăng xuất
        </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn bắt đầu bài thi không? Bài thi chỉ được thực hiện một lần duy nhất trong thời gian quy đinh.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={startExam}>
            Bắt đầu thi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExamWelcomePage;
