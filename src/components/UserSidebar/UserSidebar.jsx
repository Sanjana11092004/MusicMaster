// src/components/Sidebar/UserSidebar.jsx
import React, { useState, useEffect } from 'react';
import './UserSidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LanguageModal from '../LanguageModal/LanguageModal';

const UserSidebar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Close modal with ESC key
  useEffect(() => {
    if (!isLanguagePopupOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') setLanguagePopupOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isLanguagePopupOpen]);

  return (
    <>
      <div className="user-sidebar">
        <div className="user-header">
          <div className="sidebar-initial">{user.firstName.charAt(0)}</div>
          <div className="user-details">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="user-content scrollable">
          <Link to="/mylearning" className="sidebar-section">
            <img src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/book_audio_run-128.png" alt="My Courses" />
            <span>My Courses</span>
          </Link>

          <Link to="/cart" className="sidebar-section">
            <img src="https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/shopping-cart-simple-fill-128.png" alt="My Cart" />
            <span>My Cart</span>
          </Link>

          <Link to="/wishlist" className="sidebar-section">
            <img src="https://cdn2.iconfinder.com/data/icons/thick-outlines-online-project-basics/128/20-blue_favorite-heart-love-wishlist-128.png" alt="Wishlist" />
            <span>Wishlist</span>
          </Link>

          <Link to="/notifications" className="sidebar-section">
            <img src="https://cdn1.iconfinder.com/data/icons/ui-22/24/391-128.png" alt="Notifications" />
            <span>Notifications</span>
            <span className="badge">8</span>
          </Link>

          <div className="sidebar-section" onClick={() => navigate('/help-center')}>
            <img src="https://cdn1.iconfinder.com/data/icons/shopping-26/48/info-128.png" alt="Help and Support" />
            <span>Help and Support</span>
          </div>

          <Link to="/messages" className="sidebar-section">
            <img src="https://cdn2.iconfinder.com/data/icons/cute-tech-icon-set-1/512/Message-128.png" alt="Messages" />
            <span>Messages</span>
            <span className="badge purple">3</span>
          </Link>

          <Link to="/profile" className="sidebar-section">
            <img src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-128.png" alt="Profile" />
            <span>Profile</span>
          </Link>

          <Link to="/edit-profile" className="sidebar-section">
            <img src="https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-2/128/write-compose-2-128.png" alt="Edit Profile" />
            <span>Edit Profile</span>
          </Link>

          {/* Language Selector */}
          <div 
            className="sidebar-section split" 
            onClick={() => setLanguagePopupOpen(true)}
            style={{cursor: 'pointer'}}
          >
            <span>Language</span>
            <span>{selectedLanguage} 🌐</span>
          </div>

          <Link to="/settings" className="sidebar-section">
            <img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_settings_48px-128.png" alt="Settings" />
            <span>Settings</span>
          </Link>

          <div className="sidebar-section">
            <img src="https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-11-128.png" alt="Logout" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Language Modal */}
      {isLanguagePopupOpen && (
        <LanguageModal 
          isOpen={isLanguagePopupOpen}
          selectedLanguage={selectedLanguage}
          onSelectLanguage={(lang) => {
            setSelectedLanguage(lang);
            setLanguagePopupOpen(false);
          }}
          onClose={() => setLanguagePopupOpen(false)}
        />
      )}
    </>
  );
};

export default UserSidebar;
