import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NotificationPopup from '../../components/Notifications/NotificationPopup';
import './WishlistPage.css';

const WishlistPage = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleBellClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleBrowseCourses = () => {
    navigate('/BrowseCourses');
  };

  return (
    <>
      <Header showDropShadow={true} onBellClick={handleBellClick} />
      {showNotifications && <NotificationPopup />}
      <div className="wishlist-container">
        <h2 className="wishlist-title">Your Wishlist</h2>
        <div className="empty-wishlist">
          <img
            src="https://cdn3.iconfinder.com/data/icons/black-friday-5-flat-style-1/468/29-wishlist-128.png"
            alt="Empty Wishlist"
            className="wishlist-image"
          />
          <p className="wishlist-text">No courses in your wishlist yet!</p>
          <button className="browse-button" onClick={handleBrowseCourses}>
            Browse Courses
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishlistPage;
