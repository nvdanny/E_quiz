import React from 'react';
import { Link } from 'react-router-dom';
import { CButton } from '@coreui/react';

const LandingPage = () => {
  const isLogin = localStorage.getItem("accessToken")
  return (
    <div>
        <Link to="/admin/dashboard">
          <CButton color="link" active tabIndex={-1}>
              Sang trang Admin
          </CButton>
        </Link>
       {!isLogin && 
        <>
          <Link to="/login">
            <CButton color="link" active tabIndex={-1}>
                Đăng nhập
            </CButton>
          </Link>
          <Link to="/register">
            <CButton color="link" active tabIndex={-1}>
                Đăng ký
            </CButton>
          </Link> 
          <Link to="/exam">
            <CButton color="link" active tabIndex={-1}>
                Làm bài thi
            </CButton>
          </Link>
        </>
        }       
        {isLogin && <Link to="/logout">
          <CButton color="link" active tabIndex={-1}>
              Đăng xuất
          </CButton>
        </Link>}
    </div>
  );
};

export default LandingPage;
