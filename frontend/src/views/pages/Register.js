import React, { useState ,useRef} from 'react';
import { signUp } from '../../api/AuthApi'; 
import { useNavigate } from "react-router-dom";

import { CButton, CToaster, CToast, CToastBody, CToastHeader } from '@coreui/react';

const Register = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const toaster = useRef();

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
    linkFb: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signUp(
        formData.username,
        formData.email,
        formData.password,
        formData.displayName,
        formData.phoneNumber,
        formData.birthday,
        formData.university,
        formData.major,
        formData.year,
        formData.studentId,
        formData.linkFb
      );
      if (response.status==200 && response.data.accessToken!=null) {
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
    <div className="container" style={{maxWidth:"600px",marginTop: "50px"}}>
      <h2 className="text-center">Đăng Ký</h2>
      <form id="signUpForm" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Tên đăng nhập"
              value={formData.username}
              onChange={handleChange}
              minLength={6}
              required
            />
          </div>
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
              minLength={6}
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
              minLength={6}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="displayName">Tên hiển thị</label>
            <input
              type="text"
              className="form-control"
              id="displayName"
              placeholder="Tên hiển thị"
              value={formData.displayName}
              onChange={handleChange}
              minLength={3}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="Số điện thoại"
              value={formData.phoneNumber}
              onChange={handleChange}
              minLength={10}
              maxLength={11}
              required
            />
          </div>
        </div>
        <div className="form-row">
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
          <div className="form-group col-md-6">
            <label htmlFor="region">Khu vực</label>
            <input
              type="text"
              className="form-control"
              id="region"
              placeholder="Khu vực"
              value={formData.region}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="identityCard">Căn cước công dân</label>
            <input
              type="text"
              className="form-control"
              id="identityCard"
              placeholder="Căn cước công dân"
              value={formData.identityCard}
              onChange={handleChange}
              minLength={10}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="university">Trường đại học</label>
            <input
              type="text"
              className="form-control"
              id="university"
              placeholder="Trường đại học"
              value={formData.university}
              onChange={handleChange}
              minLength={4}
              required
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
              placeholder="Mã sinh viên"
              value={formData.studentId}
              onChange={handleChange}

              required
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
        <button type="submit" className="btn btn-primary btn-block">Đăng ký</button>
      </form>
      <CToaster ref={toaster} push={toast} placement="top-end" style={{marginRight:"20px",marginTop:"20px",color:"white"}}/>
    </div>
  );
};

export default Register;
