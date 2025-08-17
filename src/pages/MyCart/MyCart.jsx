import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NotificationPopup from '../../components/Notifications/NotificationPopup';
import './MyCart.css';

const MyCart = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleBellClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleExploreCourses = () => {
    navigate('/BrowseCourses');
  };

  return (
    <>
      <Header showDropShadow={true} onBellClick={handleBellClick} />
      {showNotifications && <NotificationPopup />}
      <div className="my-cart-container">
        <h2 className="cart-title">My Cart</h2>
        <p className="cart-subtitle">You haven’t added any courses yet.</p>
        <div className="empty-cart-box">
          <img
            src="https://cdn.dribbble.com/userupload/21728094/file/original-3c8a60e4876921a88a66db79bf923c10.png?format=webp&resize=400x300&vertical=center"
            alt="Empty cart"
            className="empty-cart-img"
          />
          <p className="empty-cart-text">
            Looks like your cart is empty. Start exploring to find your next favorite course!
          </p>
          <button className="explore-btn" onClick={handleExploreCourses}>
            Explore Courses
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCart;
