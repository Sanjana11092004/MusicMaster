import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationsContext';
import UserSidebar from '../UserSidebar/UserSidebar';
import NotificationPopup from '../Notifications/NotificationPopup';

const logoURL = 'https://cdn0.iconfinder.com/data/icons/48_px_web_icons/48/Music_Note_Pink.png';

const Header = ({ onSignupClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const { user } = useAuth();
  const { notifications, showPopup, togglePopup } = useNotifications();
  const [showUserSidebar, setShowUserSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const initialRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !event.target.closest('.notification-icon')
      ) {
        togglePopup(false);
      }
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !initialRef.current.contains(event.target)
      ) {
        setShowUserSidebar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [togglePopup]);

  const handleInitialClick = () => {
    setShowUserSidebar((prev) => !prev);
  };

  // Scroll smoothly to footer when Contact clicked
  const scrollToFooter = (event) => {
    event.preventDefault(); // prevent navigation
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to MyCart page on cart icon click
  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logoURL} alt="Logo" className="logo" />
        <h1 className="brand-title">
          <span className="black-text">Music</span>
          <span className="purple-text">Master</span>
        </h1>
        <input type="text" className="search-bar" placeholder="Search courses" />
      </div>

      <nav className="nav-links">
        <Link to="/" className={isHome ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
        <Link to="/mylearning" className="nav-link">
          My Learning
        </Link>
        <Link to="/contact" className="nav-link" onClick={scrollToFooter}>
          Contact
        </Link>
      </nav>

      {user ? (
        <div className="post-login-icons">
          <Link to="/wishlist">
            <img
              src="https://cdn2.iconfinder.com/data/icons/thick-outlines-online-project-basics/128/20-blue_favorite-heart-love-wishlist-128.png"
              alt="wishlist"
              className="icon"
            />
          </Link>
          <button type="button" onClick={goToCart} className="icon-button">
            <img
              src="https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/shopping-cart-simple-fill-128.png"
              alt="cart"
              className="icon"
            />
          </button>
          <div className="notification-icon" onClick={togglePopup}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/ui-22/24/391-128.png"
              alt="notification"
              className="icon"
              style={{ cursor: 'pointer' }}
            />
            {notifications.some((n) => !n.isRead) && <span className="unread-dot"></span>}
          </div>
          {showPopup && (
            <div ref={popupRef}>
              <NotificationPopup />
            </div>
          )}
          <div className="user-initial" onClick={handleInitialClick} ref={initialRef}>
            {user.firstName.charAt(0)}
          </div>
          {showUserSidebar && (
            <div ref={sidebarRef}>
              <UserSidebar />
            </div>
          )}
        </div>
      ) : (
        <div className="auth-buttons">
          <Link to="/login" className="auth-button">
            Login
          </Link>
          <button className="auth-button" onClick={onSignupClick}>
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
