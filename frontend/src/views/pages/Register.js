import React, { useState } from 'react';

const Register = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and send data to API
    console.log('Form data:', formData);
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
            <label htmlFor="displayName">Tên hiển thị</label>
            <input
              type="text"
              className="form-control"
              id="displayName"
              placeholder="Tên hiển thị"
              value={formData.displayName}
              onChange={handleChange}
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
              placeholder="Năm học"
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
    </div>
  );
};

export default Register;
