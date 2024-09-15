import React, { useState,useRef } from 'react';
import { signUp } from '../../api/AuthApi'; 
import { useNavigate } from "react-router-dom";
import { 
  CModal, CModalBody, CCloseButton, 
  CButton, CToast, CToastBody, 
  CToaster, CToastHeader, CModalFooter
} from '@coreui/react';

const RegisterModal = ({ visible, toggle }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
    phoneNumber: '',
    birthday: '',
    region: '',
    identityCard: '',
    university: '',
    major: '',
    year: '',
    studentId: '',
    linkFb: '',
    otherUniversity: '',
  });
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const toaster = useRef();
  const [selectedUniversity, setSelectedUniversity] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
    setFormData({
      ...formData,
      university: e.target.value === 'other' ? '' : e.target.selectedOptions[0].innerText,
    });
    console.log(e.target.selectedOptions[0].innerText)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const phoneNumberPattern = /^[0-9]{10,11}$/;
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      setToast(
        <CToast autohide={true} visible={true} color="danger">
          <CToastHeader closeButton>
            <svg className="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
              <rect width="100%" height="100%" fill="#dc3545"></rect>
            </svg>
            <div className="fw-bold me-auto">Lỗi</div>
          </CToastHeader>
          <CToastBody>Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại có 10 hoặc 11 chữ số.</CToastBody>
        </CToast>
      );
      return;
    }
  
    const fbPattern = /^https:\/\/www\.facebook\.com\//;
    if (!fbPattern.test(formData.linkFb)) {
      setToast(
        <CToast autohide={true} visible={true} color="danger">
          <CToastHeader closeButton>
            <svg className="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
              <rect width="100%" height="100%" fill="#dc3545"></rect>
            </svg>
            <div className="fw-bold me-auto">Lỗi</div>
          </CToastHeader>
          <CToastBody>Link Facebook không hợp lệ. Vui lòng nhập đúng đường dẫn Facebook.</CToastBody>
        </CToast>
      );
      return;
    }
  
    const identityCardPattern = /^[0-9]{12}$/;
    if (!identityCardPattern.test(formData.identityCard)) {
      setToast(
        <CToast autohide={true} visible={true} color="danger">
          <CToastHeader closeButton>
            <svg className="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
              <rect width="100%" height="100%" fill="#dc3545"></rect>
            </svg>
            <div className="fw-bold me-auto">Lỗi</div>
          </CToastHeader>
          <CToastBody>Số căn cước công dân phải có đúng 12 chữ số.</CToastBody>
        </CToast>
      );
      return;
    }
  
    const birthYear = new Date(formData.birthday).getFullYear();
    if (birthYear > 2010) {
      setToast(
        <CToast autohide={true} visible={true} color="danger">
          <CToastHeader closeButton>
            <svg className="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
              <rect width="100%" height="100%" fill="#dc3545"></rect>
            </svg>
            <div className="fw-bold me-auto">Lỗi</div>
          </CToastHeader>
          <CToastBody>Ngày sinh không hợp lệ</CToastBody>
        </CToast>
      );
      return;
    }
  
    try {
      const response = await signUp(
        formData.username,
        formData.email,
        formData.password,
        formData.displayName,
        formData.phoneNumber,
        formData.birthday,
        formData.university !== '' ? formData.university : formData.otherUniversity,
        formData.major,
        formData.year,
        formData.studentId,
        formData.linkFb,
        formData.region
      );
      if (response.status === 200 && response.data.accessToken != null) {
        const { data, accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setToast(
          <CToast autohide={true} visible={true} color="success">
            <CToastHeader closeButton>
              <svg className="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                <rect width="100%" height="100%" fill="#28a745"></rect>
              </svg>
              <div className="fw-bold me-auto">Thông báo</div>
            </CToastHeader>
            <CToastBody>Đăng ký thành công!</CToastBody>
          </CToast>
        );
        navigate("/welcome");
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.msg === "User already exists") {
        setToast(
          <CToast autohide={true} visible={true} color="danger">
            <CToastHeader closeButton>
              <svg className="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                <rect width="100%" height="100%" fill="#dc3545"></rect>
              </svg>
              <div className="fw-bold me-auto">Lỗi</div>
            </CToastHeader>
            <CToastBody>Số điện thoại hoặc Email đã tồn tại</CToastBody>
          </CToast>
        );
      } else {
        setToast(
          <CToast autohide={true} visible={true} color="danger">
            <CToastHeader closeButton>
              <svg className="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                <rect width="100%" height="100%" fill="#dc3545"></rect>
              </svg>
              <div className="fw-bold me-auto">Lỗi</div>
            </CToastHeader>
            <CToastBody>Đăng ký thất bại. Vui lòng kiểm tra thông tin và thử lại.</CToastBody>
          </CToast>
        );
      }
    }
  };
  

  return (
    <CModal
      alignment="center"
      visible={visible}
      onClose={toggle}
      aria-labelledby="VerticallyCenteredExample"
      size="lg"
      className="custom-modal"
    >
      <CModalBody className="text-white modal-body modal-content">
        <div className="d-flex justify-content-end custom-close-button">
          <CCloseButton onClick={toggle} />
        </div>
        <h2 className="text-center" style={{ marginBottom: "30px" }}>Đăng Ký</h2>
        <form id="signUpForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="displayName">Họ và tên</label>
              <input
                type="text"
                className="form-control"
                id="displayName"
                placeholder="Họ và tên"
                value={formData.displayName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
           
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="phoneNumber">Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Số điện thoại"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="birthday">Ngày sinh</label>
              <input
                type="date"
                className="form-control"
                id="birthday"
                value={formData.birthday}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="region">Khu vực</label>
              <select
                className="form-control"
                id="region"
                value={formData.region}
                onChange={handleChange}
                required
              >
                <option value="">Chọn khu vực...</option>
                <option value="Miền Bắc">Miền Bắc</option>
                <option value="Miền Trung">Miền Trung</option>
                <option value="Miền Nam">Miền Nam</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="identityCard">Căn cước công dân</label>
              <input
                type="text"
                className="form-control"
                id="identityCard"
                placeholder="Căn cước công dân"
                value={formData.identityCard}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="university">Bạn là sinh viên trường nào?</label>
              <select
                className="form-control"
                id="university"
                value={selectedUniversity}
                onChange={handleUniversityChange}
                required
              >
                 <option value="">Chọn trường...</option>
                <option value="BA">BA - Học viện Ngân hàng</option>
                <option value="FTU">FTU - Đại học Ngoại thương</option>
                <option value="NEU">NEU - Đại học Kinh tế Quốc Dân</option>
                <option value="AOF">AOF - Học viện Tài chính</option>
                <option value="UEB">UEB - Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội</option>
                <option value="TMU">TMU - Đại học Thương mại</option>
                <option value="FTU2">FTU2 - Trường Đại học Ngoại Thương cơ sở II</option>
                <option value="UEH">UEH - Trường Đại học Kinh tế TP.HCM</option>
                <option value="HUB">HUB - Trường Đại học Ngân hàng TP.HCM</option>
                <option value="UEL">UEL - Trường Đại học Kinh tế - Luật - Đại học Quốc gia TP.HCM</option>
                <option value="UEF">UEF - Trường Đại học Kinh tế - Tài chính TP.HCM</option>
                <option value="RMIT">RMIT - Trường Đại học RMIT</option>
                <option value="other">Trường khác</option>
              </select>
            </div>
              <div className="form-group col-md-6">
              <label htmlFor="otherUniversity">Tên trường khác</label>
              <input
                type="text"
                className="form-control"
                id="otherUniversity"
                placeholder="Điền tên trường"
                value={formData.otherUniversity}
                onChange={handleChange}
                required={selectedUniversity === 'other'}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="major">Chuyên ngành</label>
              <input
                type="text"
                className="form-control"
                id="major"
                placeholder="Chuyên ngành"
                value={formData.major}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="year">Năm học</label>
              <input
                type="number"
                className="form-control"
                id="year"
                placeholder="Sinh viên năm mấy"
                value={formData.year}
                onChange={handleChange}
                min={1}
                max={6}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="studentId">Mã sinh viên</label>
              <input
                type="text"
                className="form-control"
                id="studentId"
                placeholder="Điền mã sinh viên nếu là sinh viên Học viện Ngân hàng"
                value={formData.studentId}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="linkFb">Link Facebook</label>
              <input
                type="text"
                className="form-control"
                id="linkFb"
                placeholder="Link Facebook"
                value={formData.linkFb}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="login-link-container">
            <span>Đã có tài khoản? <a href="/login">Đăng nhập</a></span>
          </div>
          <div className='custom-button-container'>
            <button type="submit" className="btn btn-light btn-block custom-register">Đăng ký ngay</button>
          </div>
        </form>
      </CModalBody>
      <CModalFooter>
        <CToaster placement="top-end" push={toast} ref={toaster} />
      </CModalFooter>
    </CModal>
  );
};

export default RegisterModal;
