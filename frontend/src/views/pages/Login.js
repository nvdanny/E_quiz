import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { login } from "../../api/AuthApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Vui lòng nhập một địa chỉ email hợp lệ.");
      return;
    }
    if (password.length < 5) {
      setErrorMessage("Vui lòng nhập mật khẩu hơp lệ.");
      return;
    }
    try {
      const response = await login(email, password);
      const { data, accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(data));

      if (data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/welcome");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        if (error.response.data.msg === "Invalid password") {
          setErrorMessage("Tài khoản hoặc mật khẩu sai. Vui lòng nhập lại!.");
        } else if (error.response.data.msg === "Email not found") {
          setErrorMessage("Email không tồn tại hoặc chưa đăng ký.");
        }
      } else {
        setErrorMessage("Đăng nhập thất bại. Vui lòng thử lại.");
      }
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo?.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/welcome");
      }
    }
  }, [navigate]);

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Đăng nhập</h1>
                    <p className="text-body-secondary">
                      Đăng nhập vào tài khoản của bạn
                    </p>
                    {errorMessage && (
                      <CAlert color="danger">{errorMessage}</CAlert>
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-2">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6} className="text-left">
                        <Link to="/register">
                          <CButton color="link" active tabIndex={-1}>
                            Đăng ký tại đây
                          </CButton>
                        </Link>
                      </CCol>
                      <CCol xs={6} className="text-right text-end">
                        <Link to="/resetPassword">
                          <CButton color="link" active tabIndex={-1}>
                            Quên mật khẩu?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                    <CRow className="justify-content-md-center">
                      <CCol xs={4} className="text-right mt-4">
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={handleLogin}
                        >
                          Đăng nhập
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
