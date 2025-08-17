import React, { useState } from 'react';
import './LoginModal.css';
import { useNavigate } from 'react-router-dom';

const eyeOpenURL = "https://cdn4.iconfinder.com/data/icons/symbol-blue-set-1/100/Untitled-2-33-128.png";
const eyeCloseURL = "https://cdn4.iconfinder.com/data/icons/symbol-blue-set-1/100/Untitled-2-34-128.png";

const LoginModal = ({ onClose, onSwitchToSignup, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username/email and password.');
      return;
    }

    // Clear error before login
    setError('');

    const userData = {
      firstName: username.split(' ')[0] || username,
      email: username,
    };
    onLoginSuccess(userData);
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="login-modal">
        <h2>Welcome Back</h2>

        {error && <div className="error-message">{error}</div>}

        <input
          type="text"
          className="login-input"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={showPassword ? eyeOpenURL : eyeCloseURL}
            alt="toggle visibility"
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button className="forgot-password" onClick={() => navigate('/forgotpassword')}>
          Forgot Password?
        </button>

        <div className="login-actions">
          <button className="login-button" onClick={handleLogin}>Login</button>
          <button className="signup-button" onClick={onSwitchToSignup}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
