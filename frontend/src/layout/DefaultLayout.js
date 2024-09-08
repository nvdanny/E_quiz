import React, { useEffect } from 'react';
import AppSidebar from '../components/AppSidebar';
import AppContent from '../components/AppContent';
import AppHeader from '../components/AppHeader';
import { useNavigate } from 'react-router-dom';
import UnAuthorized from '../views/pages/UnAuthorized';

const DefaultLayout = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('userInfo');

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  if (!userInfo) {
    return null; 
  }

  const userRole = JSON.parse(userInfo).role;

  if (userRole === 'admin') {
    return (
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 ml-2">
          <AppHeader />
          <div className="body flex-grow-1">
            <AppContent />
          </div>
        </div>
      </div>
    );
  } else {
    return <UnAuthorized />;
  }
};

export default DefaultLayout;
