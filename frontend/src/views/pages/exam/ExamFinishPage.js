import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const ExamFinish = () => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isSlotSelected, setIsSlotSelected] = useState(false); // State để kiểm soát hiển thị

  const handleSlotChange = (e) => {
    setSelectedSlot(e.target.value);
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  const handleSubmit = () => {
    if (!selectedSlot) {
      alert('Vui lòng chọn ca thi!');
      return;
    }
    localStorage.setItem('selectedSlot', selectedSlot);
    setIsSlotSelected(true); // Ẩn phần chọn ca thi và hiển thị thông báo
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 examFinishPage">
      <Button 
          variant="secondary" 
          onClick={handleLogout} 
          className="position-absolute top-0 end-0 m-3"
      >
          Đăng xuất
      </Button>
      <div className="content text-center bg-white p-5 rounded shadow">
        <h3 className='text-left'>Chúc mừng bạn đã hoàn thành bài thi của <strong>Vòng 1 - Test Online</strong></h3>
        <h4 className="text-center mt-3">CUỘC THI BẢN LĨNH NHÀ ĐẦU TƯ 2024.</h4>
        <div className="text-left mt-5">Kết quả của bạn sẽ được BTC cập nhật sớm nhất qua email của bạn.</div>
        <p className="text-left">Hẹn gặp lại bạn ở <strong>VÒNG 2: Test sơ loại Cuộc thi Bản lĩnh nhà đầu tư 2024!</strong></p>

        {/* Hiển thị phần chọn ca thi hoặc thông báo dựa trên state */}
        {!isSlotSelected ? (
          <>
            <h5 className="text-left">BẠN VUI LÒNG CHỌN CA THI VÒNG 2</h5>
            <Form>
              <Form.Group controlId="formBasicSelect">
                <Form.Control as="select" value={selectedSlot} onChange={handleSlotChange}>
                  <option value="">Chọn ca thi</option>
                  <option value="CA 1">CA 1: 08h00 - 09h00 ngày 06/10/2024</option>
                  <option value="CA 2">CA 2: 09h45 - 10h45 ngày 06/10/2024</option>
                  <option value="CA 3">CA 3: 14h00 - 15h00 ngày 06/10/2024</option>
                  <option value="CA 4">CA 4: 15h45 - 16h45 ngày 06/10/2024</option>
                </Form.Control>
              </Form.Group>

              <div className="text-center mt-4">
                <Button variant="danger" className='text-white' onClick={handleSubmit}>HOÀN THÀNH</Button>
              </div>
            </Form>
          </>
        ) : (
          // Thông báo sau khi đã chọn ca thi
          <p className="text-left mt-4" style={{color:"red",fontSize:"18px"}}>
            Cảm ơn bạn đã quan tâm đến cuộc thi, vui lòng để ý Email để nhận được kết quả tham gia vòng 2!
            <p style={{marginTop:"30px"}}> <a href='/' style={{textDecoration:"none"}}>Quay lại trang chính </a></p>
          </p>
        )}
      </div>
    </div>
  );
};

export default ExamFinish;
