import React, { useState, useEffect } from 'react';
import './EditProfilePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NotificationPopup from '../../components/Notifications/NotificationPopup';
import { useAuth } from '../../context/AuthContext';

const EditProfilePage = () => {
  const { user } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [headline, setHeadline] = useState('');
  const [bio, setBio] = useState('');
  const [language, setLanguage] = useState('English (US)');
  const [showNotifications, setShowNotifications] = useState(false);

  const handleBellClick = () => {
    setShowNotifications((prev) => !prev);
  };

  useEffect(() => {
    if (user) {
      const nameParts = user.firstName.split(' ');
      setFirstName(nameParts[0]);
      setLastName(nameParts[1] || '');
    }
  }, [user]);

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  return (
    <>
      <Header showDropShadow={true} onBellClick={handleBellClick} />
      {showNotifications && <NotificationPopup />}

      <div className="edit-profile-container">
        <h2 className="edit-profile-title">Edit Profile</h2>

        <div className="section">
          <label>First Name</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="section">
          <label>Last Name</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="section">
          <label>Headline</label>
          <input placeholder="Eg: Music Instructor" value={headline} onChange={(e) => setHeadline(e.target.value)} />
        </div>

        <div className="section">
          <label>Biography</label>
          <textarea placeholder="Write a few lines about yourself..." value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>

        <div className="section">
          <label>Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>English (US)</option>
            <option>English (UK)</option>
            <option>Hindi</option>
          </select>
        </div>

        <button className="save-button" onClick={handleSave}>Save Changes</button>
      </div>
      <Footer />
    </>
  );
};

export default EditProfilePage;
