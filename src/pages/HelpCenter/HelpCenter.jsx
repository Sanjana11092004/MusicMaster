import React, { useRef } from 'react';
import './HelpCenter.css';
import Footer from '../../components/Footer/Footer';
// import { useNavigate } from 'react-router-dom';

const HelpCenter = ({ openLoginModal }) => {
  const contactRef = useRef(null);
//   const navigate = useNavigate();

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="help-center-container">
      <header className="help-header">
        <div className="logo-left">
          <img
            src="https://cdn0.iconfinder.com/data/icons/48_px_web_icons/48/Music_Note_Pink.png"
            alt="Logo"
            className="logo"
          />
          <span className="brand-name">
            <span className="black">Music</span><span className="purple">Master</span>
          </span>
        </div>

        <div className="header-actions">
          <button className="link-btn" onClick={handleScrollToContact}>
            Submit a request
          </button>
          <button className="link-btn" onClick={openLoginModal}>
            Sign in
          </button>
        </div>
      </header>

      <div className="help-content">
        <h2>Help Center</h2>
        <p className="subheading">What we may help you with?</p>

        <div className="search-bar-section">
          <input
            type="text"
            className="search-input"
            placeholder="e.g. How do I start a course?"
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="contact-section" ref={contactRef}>
        <h3>Contact us</h3>
        <form className="contact-form">
          <label>Your Name *</label>
          <input type="text" placeholder="Enter Your Name" required />

          <label>Email address *</label>
          <input type="email" placeholder="Enter your email address" required />

          <label>Phone Number *</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Message *</label>
          <textarea placeholder="Type your message" required></textarea>

          <div className="terms">
            <input type="checkbox" required />
            <span>By sending this form you agree to our Terms and Privacy policy</span>
          </div>

          <button className="send-btn" type="submit">Send Message</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
