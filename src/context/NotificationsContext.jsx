// src/context/NotificationContext.jsx
import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

const initialNotifications = [
  {
    id: 1,
    message: 'Your Piano Basics course is 65% completed. Keep it up!',
    isRead: false,
    userImage: 'https://cdn-icons-png.flaticon.com/128/1973/1973888.png'
  },
  {
    id: 2,
    message: 'New course "Jazz Improvisation" just launched!',
    isRead: false,
    userImage: 'https://cdn-icons-png.flaticon.com/128/2995/2995101.png'
  },
  {
    id: 3,
    message: 'Your friend Aisha started the Guitar Mastery course.',
    isRead: false,
    userImage: 'https://cdn-icons-png.flaticon.com/128/2922/2922656.png'
  },
  {
    id: 4,
    message: '🎉 Congratulations! You earned a 7-day streak badge!',
    isRead: false,
    userImage: 'https://cdn-icons-png.flaticon.com/128/9798/9798089.png'
  },
  {
    id: 5,
    message: 'Course update: New vocal exercises added to Singing Skills.',
    isRead: false,
    userImage: 'https://cdn-icons-png.flaticon.com/128/3937/3937752.png'
  },
  {
    id: 6,
    message: 'Digital Production course now has downloadable project files.',
    isRead: false,
    userImage: 'https://cdn-icons-png.flaticon.com/128/3927/3927967.png'
  },
  {
    id: 7,
    message: 'Reminder: Finish your Music Theory quiz by today!',
    isRead: false,
    userImage: 'https://cdn-icons-png.flaticon.com/128/7910/7910629.png'
  },
  {
    id: 8,
    message: 'New message from your vocal instructor.',
    isRead: false,
    userImage: 'https://cdn-icons-png.flaticon.com/128/2922/2922510.png'
  }
];

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showPopup, setShowPopup] = useState(false);
  const [modalNotification, setModalNotification] = useState(null);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => n.id === id ? { ...n, isRead: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  const openModal = (notification) => {
    markAsRead(notification.id);
    setModalNotification(notification);
  };

  const closeModal = () => {
    setModalNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        showPopup,
        modalNotification,
        markAsRead,
        markAllAsRead,
        togglePopup,
        openModal,
        closeModal
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
