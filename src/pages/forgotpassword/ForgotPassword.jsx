// src/pages/forgotpassword/ForgotPassword.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const googleLogo = 'https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-128.png';

const ForgotPassword = () => {
  const email = localStorage.getItem('email');
  const initial = email ? email.charAt(0).toUpperCase() : '';
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/');
  };

  return (
    <div className="google-signin-fullpage">
      <div className="google-signin-container">
        {/* Centered Google Logo */}
        <div className="google-logo-top">
          <img src={googleLogo} alt="Google Logo" />
        </div>

        {/* Initial + Email centered */}
        <div className="user-info-row">
          <div className="profile-initial-circle">{initial}</div>
          <p className="user-email-display">{email}</p>
        </div>

        <h2 className="signin-title">Forgot password?</h2>
        <p className="signin-subtitle">Try to recover your account or reset your password.</p>

        {/* Centered Next button */}
        <div className="signin-footer">
          <button className="next-button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
