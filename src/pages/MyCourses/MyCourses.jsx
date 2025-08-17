// src/pages/MyCourses/MyCourses.jsx

import React, { useState } from 'react';
import './MyCourses.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NotificationPopup from '../../components/Notifications/NotificationPopup';
import { FaBars } from 'react-icons/fa'; // npm i react-icons if not present

// Enhanced courses array
const coursesData = [
  {
    title: 'Piano Basics',
    description: 'Learn the foundation of piano playing step-by-step.',
    progress: 65,
    duration: 15, // minutes
    level: 'Beginner',
    image: 'https://cdn-icons-png.flaticon.com/128/1973/1973888.png',
  },
  {
    title: 'Guitar Mastery',
    description: 'Master the chords, strumming and solos.',
    progress: 80,
    duration: 30,
    level: 'Intermediate',
    image: 'https://cdn-icons-png.flaticon.com/512/8090/8090403.png',
  },
  {
    title: 'Singing Skills',
    description: 'Enhance your vocal range and control.',
    progress: 45,
    duration: 25,
    level: 'Beginner',
    image: 'https://cdn-icons-png.flaticon.com/512/3937/3937752.png',
  },
  {
    title: 'Music Theory',
    description: 'Understand how music works behind the scenes.',
    progress: 30,
    duration: 20,
    level: 'Advanced',
    image: 'https://cdn-icons-png.flaticon.com/128/2995/2995101.png',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/128/7910/7910629.png',
    title: 'Vocal Training',
    description: 'Improve your pitch, rhythm, and chord recognition.',
    progress: 50,
    duration: 18,
    level: 'Intermediate',
  },
  {
    title: 'Digital Production',
    description: 'Produce music digitally using modern tools.',
    progress: 55,
    duration: 40,
    level: 'Advanced',
    image: 'https://cdn-icons-png.flaticon.com/128/3927/3927967.png',
  },
];

const MyCourses = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Filtering/Sorting states
  const [sort, setSort] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [filterDuration, setFilterDuration] = useState('');

  const handleBellClick = () => {
    setShowNotifications(prev => !prev);
  };

  // Filter/sort logic
  let filteredCourses = [...coursesData];
  if (filterLevel) {
    filteredCourses = filteredCourses.filter(c => c.level === filterLevel);
  }
  if (filterDuration) {
    if (filterDuration === 'Short') filteredCourses = filteredCourses.filter(c => c.duration <= 20);
    if (filterDuration === 'Medium') filteredCourses = filteredCourses.filter(c => c.duration > 20 && c.duration <= 30);
    if (filterDuration === 'Long') filteredCourses = filteredCourses.filter(c => c.duration > 30);
  }
  if (sort === 'progress') {
    filteredCourses.sort((a, b) => b.progress - a.progress);
  }
  if (sort === 'duration') {
    filteredCourses.sort((a, b) => a.duration - b.duration);
  }

  // For "active" button styling
  const isActive = (val, match) => (val === match ? 'active' : '');

  return (
    <>
      <Header showDropShadow={true} onBellClick={handleBellClick} />
      {showNotifications && <NotificationPopup />}

      <div className="my-courses-container">
        <div className="courses-header">
          <h2 className="my-courses-title">My Courses</h2>
          <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
          {menuOpen && (
            <div className="menu-popup" onMouseLeave={() => setMenuOpen(false)}>
              <div className="menu-group">
                <span className="menu-label">Level</span>
                {['', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                  <button
                    key={level}
                    className={isActive(filterLevel, level)}
                    onClick={() => setFilterLevel(level)}
                  >
                    {level === '' ? 'All' : level}
                  </button>
                ))}
              </div>
              <div className="menu-group">
                <span className="menu-label">Duration</span>
                {['', 'Short', 'Medium', 'Long'].map(duration => (
                  <button
                    key={duration}
                    className={isActive(filterDuration, duration)}
                    onClick={() => setFilterDuration(duration)}
                  >
                    {duration === '' ? 'All' : duration}
                  </button>
                ))}
              </div>
              <div className="menu-group">
                <span className="menu-label">Sort by</span>
                <button
                  className={isActive(sort, 'progress')}
                  onClick={() => setSort('progress')}
                >
                  Highest Progress
                </button>
                <button
                  className={isActive(sort, 'duration')}
                  onClick={() => setSort('duration')}
                >
                  Shortest Duration
                </button>
                <button
                  className={isActive(sort, '')}
                  onClick={() => setSort('')}
                >
                  None
                </button>
              </div>
              <button className="menu-close" onClick={() => setMenuOpen(false)}>
                Close
              </button>
            </div>
          )}
        </div>

        <div className="streak-box">
          <div className="streak-left">
            <span role="img" aria-label="flame" className="flame-icon">
              🔥
            </span>
            <div>
              <h3>Start your daily streak</h3>
              <p>Keep learning every day to build your music habit!</p>
            </div>
          </div>
          <div className="streak-count">
            <span className="count-number">7</span>
            <span className="count-label">days</span>
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.length === 0 ? (
            <p className="empty">No courses match this filter.</p>
          ) : (
            filteredCourses.map((course, index) => (
              <div
                className={`course-card${hoveredIndex === index ? ' hovered' : ''}${hoveredIndex !== null && hoveredIndex !== index ? ' faded' : ''}`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={course.image} alt={course.title} className="course-image" />
                <h4 className="course-title">{course.title}</h4>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <span className="course-level">{course.level}</span>
                  <span className="course-duration">⏱ {course.duration} min</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                </div>
                <p className="progress-text">{course.progress}% Completed</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCourses;
