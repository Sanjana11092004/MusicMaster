// src/pages/NotificationPage/NotificationPage.jsx
import React from 'react';
import './NotificationPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNotifications } from '../../context/NotificationsContext';

const NotificationPage = () => {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

  const handleClick = (id) => {
    markAsRead(id);
  };

  return (
    <>
      <Header showDropShadow={true} />
      <div className="notification-page-container">
        <div className="notification-page-header">
          <h2>All Notifications</h2>
          <span
       className="mark-read-text"
           onClick={markAllAsRead}>Mark all as read</span>
        </div>
        <div className="notification-page-list">
  {notifications.length === 0 ? (
    <p className="empty-message">You have no notifications.</p>
  ) : (
    notifications.map((notification) => (
      <div
        key={notification.id}
        className={`notification-card ${notification.isRead ? 'read' : 'unread'}`}
        onClick={() => handleClick(notification.id)}
      >
        <img
          className="notification-avatar"
          src={notification.userImage}
          alt="avatar"
        />
        <div className="notification-content">
          <p className="notification-message">{notification.message}</p>
          <p className="notification-date">2 days ago</p>
        </div>
        {!notification.isRead && <span className="unread-dot" />}
      </div>
    ))
  )}
</div>

      </div>
      <Footer />
    </>
  );
};

export default NotificationPage;
