import React, { useState } from 'react';
import './SignupModal.css';
import { useAuth } from '../../context/AuthContext';

const SignupModal = ({ onClose, onSignupSuccess, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleBackgroundClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const handleCreateAccount = () => {
    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    const userData = { firstName, lastName, email };
    login(userData);
    onSignupSuccess(userData);
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="signup-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="signup-title">Create Account</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="name-row">
          <input type="text" placeholder="First Name" className="input half" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last Name" className="input half" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <input type="email" placeholder="Email address" className="input full" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div className="password-container">
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input full" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span className="eye-icon" onClick={togglePassword}>{showPassword ? '🙈' : '👁️'}</span>
        </div>

        <button className="create-account-btn" onClick={handleCreateAccount}>
          Create Account
        </button>

        <p className="login-text">
          Already have an account? <span className="login-link" onClick={onSwitchToLogin}>Login</span>
        </p>

        <div className="or-text">or</div>

        <button className="social-btn google-btn" onClick={() => window.location.href = '/google-signin'}>
          <img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-128.png" alt="Google" />
          <span>Sign up with Google</span>
        </button>

        <button className="social-btn facebook-btn">
          <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-128.png" alt="Facebook" />
          <span>Sign up with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
