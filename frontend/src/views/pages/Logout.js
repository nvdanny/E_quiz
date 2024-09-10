import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('timeLeft');
      localStorage.removeItem('timeFinish');
      localStorage.removeItem('selectedAnswers');
      navigate('/login');
    };
    handleLogout();
  }, [navigate]);

  return (
    <div>
      Đang đăng xuất...
    </div>
  );
};

export default Logout;
