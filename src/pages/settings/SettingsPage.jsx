import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './SettingsPage.css';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: 'Selva Kumar',
    email: 'selva@example.com',
    password: '',
    courseUpdates: true,
    messageNotifications: true,
    newsletter: false,
    productTips: false,
    profileVisibility: true,
    instructorMessages: true,
    searchVisibility: false,
    darkMode: false,
    lightMode: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "darkMode" || name === "lightMode") {
      setFormData((prev) => ({
        ...prev,
        darkMode: name === "darkMode" ? true : false,
        lightMode: name === "lightMode" ? true : false,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
    // You can integrate backend call here later
  };

  return (
    <>
      <Header />
      <div className="settings-page">
        <h2>Settings</h2>

        {/* Account Info */}
        <div className="settings-section">
          <h3>Account Info</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Change Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="settings-section">
          <h3>Notifications</h3>
          <div className="form-toggle">
            <label>Course Updates</label>
            <input
              type="checkbox"
              name="courseUpdates"
              checked={formData.courseUpdates}
              onChange={handleChange}
            />
          </div>
          <div className="form-toggle">
            <label>Message Notifications</label>
            <input
              type="checkbox"
              name="messageNotifications"
              checked={formData.messageNotifications}
              onChange={handleChange}
            />
          </div>
          <div className="form-toggle">
            <label>Subscribe to Newsletter</label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
          </div>
          <div className="form-toggle">
            <label>Receive Product Tips & Updates</label>
            <input
              type="checkbox"
              name="productTips"
              checked={formData.productTips}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="settings-section">
          <h3>Privacy Settings</h3>
          <div className="form-toggle">
            <label>Profile Visibility (Public)</label>
            <input
              type="checkbox"
              name="profileVisibility"
              checked={formData.profileVisibility}
              onChange={handleChange}
            />
          </div>
          <div className="form-toggle">
            <label>Allow Messages from Instructors</label>
            <input
              type="checkbox"
              name="instructorMessages"
              checked={formData.instructorMessages}
              onChange={handleChange}
            />
          </div>
          <div className="form-toggle">
            <label>Show Profile in Search Results</label>
            <input
              type="checkbox"
              name="searchVisibility"
              checked={formData.searchVisibility}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Theme Mode */}
        <div className="settings-section">
          <h3>Theme Mode</h3>
          <div className="form-toggle">
            <label>
              <input
                type="radio"
                name="lightMode"
                checked={formData.lightMode}
                onChange={handleChange}
              />
              Light Mode
            </label>
          </div>
          <div className="form-toggle">
            <label>
              <input
                type="radio"
                name="darkMode"
                checked={formData.darkMode}
                onChange={handleChange}
              />
              Dark Mode
            </label>
          </div>
        </div>

        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
      <Footer />
    </>
  );
}
