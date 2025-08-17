// src/components/Notifications/NotificationModal.jsx
import React from 'react';
import './Notification.css';
import { useNotifications } from '../../context/NotificationContext';
import { Link } from 'react-router-dom';

const NotificationModal = ({ onClose }) => {
  const { notifications, markAsRead } = useNotifications();

  const handleNotificationClick = (id) => {
    markAsRead(id);
    onClose(); // close the modal after click
  };

  return (
    <div className="notification-modal-backdrop" onClick={onClose}>
      <div className="notification-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Notifications</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        {notifications.length === 0 ? (
          <p className="empty-message">No notifications</p>
        ) : (
          <ul className="notification-list">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                onClick={() => handleNotificationClick(notification.id)}
              >
                {notification.text}
              </li>
            ))}
          </ul>
        )}
        <Link to="/notifications" className="view-all-button" onClick={onClose}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default NotificationModal;
