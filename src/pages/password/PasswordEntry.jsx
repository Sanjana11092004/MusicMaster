// src/pages/googlesignin/PasswordEntry.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../googlesignin/GoogleSignIn.css'; // You can reuse same CSS

const googleLogo = 'https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-128.png';

const PasswordEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};
  const username = email ? email.split('@')[0] : '';

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => {
    if (password.trim() === '') {
      alert('Please enter your password');
      return;
    }
    // Continue to home page
    navigate('/');
  };

  return (
    <div className="google-signin-fullpage">
      <div className="google-signin-container">
        <div className="google-logo-left">
          <img src={googleLogo} alt="Google Logo" />
        </div>

        <h2 className="signin-title">Hi {username}</h2>
        <p className="signin-subtitle">Enter your password</p>

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          className="google-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="show-password-container">
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            /> Show password
          </label>
        </div>

        <p className="forgot-email" onClick={() => navigate('/forgotpassword')}>Forgot password?</p>

        <div className="signin-footer">
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordEntry;
