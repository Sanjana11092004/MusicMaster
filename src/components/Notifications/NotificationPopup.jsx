// src/components/Notifications/NotificationPopup.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotificationPopup.css';
import { useNotifications } from '../../context/NotificationsContext';

const NotificationPopup = () => {
  const { notifications, markAllAsRead, openModal } = useNotifications();
  const navigate = useNavigate();

  const topTwo = notifications.slice(0, 2);

  const handleSeeAll = () => {
    navigate('/notifications');
  };

  return (
    <div className="notification-popup-container">
      <div className="popup-header">
        <h3>Notifications</h3>
        <Link to="/settings" className="settings-link">Settings</Link>
      </div>

      <div className="popup-body">
        {topTwo.length === 0 ? (
          <p className="empty-message">No notifications</p>
        ) : (
          topTwo.map((n) => (
            <div
              key={n.id}
              className={`popup-notification-item ${n.isRead ? '' : 'unread'}`}
              onClick={() => openModal(n)}
            >
              <img src={n.userImage} alt="user" className="notification-avatar" />
              <div className="notification-text">
                <p>{n.message}</p>
                <span className="timestamp">{n.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="popup-footer">
        <span className="mark-read" onClick={markAllAsRead}>Mark all as read</span>
        <button className="see-all-btn" onClick={handleSeeAll}>See all</button>
      </div>
    </div>
  );
};

export default NotificationPopup;
