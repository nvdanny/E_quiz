import React, { useState, useEffect } from 'react';
import RegisterModal from './RegisterModal';

const LandingPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'openSignupModal') {
        setModalVisible(true);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const toggleModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <iframe
        src="/landing-page/index.html"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Landing Page"
      />
      <RegisterModal visible={isModalVisible} toggle={toggleModal} />
    </div>
  );
};

export default LandingPage;
