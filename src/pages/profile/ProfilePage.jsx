// src/pages/profile/ProfilePage.jsx
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ProfilePage.css';
import { useNavigate  } from 'react-router-dom';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const navigate = useNavigate();

  const user = {
    name: 'Selva Kumar',
    email: 'selva@example.com',
    avatar: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg',
    enrolled: 3,
    completed: 2,
    totalHours: 15,
  };

  const courses = [
    {
      title: 'Piano Basics',
      description: 'Learn the foundation of piano playing step-by-step.',
      progress: 65,
      image: 'https://cdn-icons-png.flaticon.com/128/1973/1973888.png',
    },
    {
      title: 'Guitar Mastery',
      description: 'Master the chords, strumming and solos.',
      progress: 80,
      image: 'https://cdn-icons-png.flaticon.com/512/8090/8090403.png',
    },
    {
      title: 'Singing Skills',
      description: 'Enhance your vocal range and control.',
      progress: 45,
      image: 'https://cdn-icons-png.flaticon.com/512/3937/3937752.png',
    },
  ];

  const achievements = [
    {
      image: 'https://cdn-icons-png.flaticon.com/128/7910/7910629.png',
      title: 'Vocal Training',
      description: 'Improve your pitch, rhythm, and chord recognition.',
      progress: 100,
    },
    {
      title: 'Digital Production',
      description: 'Produce music digitally using modern tools.',
      progress: 100,
      image: 'https://cdn-icons-png.flaticon.com/128/3927/3927967.png',
    },
  ];

  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-sidebar">
          <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>
          <button
            className="edit-profile-btn"
            onClick={() => navigate('/edit-profile')}
          >
            Edit Profile
          </button>

          <div className="quick-stats">
            <h4>Quick Stats</h4>
            <ul>
              <li>🎓 Enrolled: {user.enrolled}</li>
              <li>✅ Completed: {user.completed}</li>
              <li>⏱️ Total Hours: {user.totalHours}</li>
            </ul>
          </div>
        </div>

        <div className="profile-content">
          <div className="tabs">
            {['Overview', 'Courses', 'Achievements', 'Settings'].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'Overview' && (
              <div>
                <h3>Welcome back, {user.name} 👋</h3>
                <p>You’re making great progress. Let’s keep the momentum going!</p>
                <ul className="overview-highlights">
                  <li>📚 You’re currently enrolled in <strong>{user.enrolled}</strong> courses.</li>
                  <li>🏆 You’ve completed <strong>{user.completed}</strong> courses successfully.</li>
                  <li>⏳ Total learning time: <strong>{user.totalHours} hours</strong>.</li>
                </ul>
              </div>
            )}

            {activeTab === 'Courses' && (
              <div>
                <p>You are enrolled in {user.enrolled} courses.</p>
                <div className="card-row">
                  {courses.map((course, index) => (
                    <div key={index} className="course-card">
                      <img src={course.image} alt={course.title} />
                      <h4>{course.title}</h4>
                      <p>{course.description}</p>
                      <p className="progress-text">Progress: {course.progress}%</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Achievements' && (
              <div>
                <p>You’ve completed {user.completed} courses so far. Great job!</p>
                <div className="card-row">
                  {achievements.map((item, index) => (
                    <div key={index} className="course-card">
                      <img src={item.image} alt={item.title} />
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p className="progress-text">Progress: {item.progress}%</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Settings' && (
              <div>
                <h4>Profile Settings</h4>
                <p>Customize your learning experience. You can update preferences, change password, and configure notifications.</p>
                <button onClick={() => navigate('/settings')} className="settings-btn"> Go to Settings</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
