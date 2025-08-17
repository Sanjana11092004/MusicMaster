import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom'; // ✅ added import

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ added navigate hook

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Where Passion Meets Practice</span>

        <h1>
          Learn Music. <span className="highlight">Practice Smart.</span> Perform Confidently.
        </h1>

        <p className="hero-description">
          Explore interactive lessons, practice with smart tools, and receive real-time feedback — all designed to help you learn instruments, music theory, and performance at your own pace.
        </p>

        <div className="hero-buttons">
          <button
            className="btn primary"
            onClick={() => navigate('/choose-instrument')} // ✅ added navigation
          >
            Start Learning
          </button>
          <button 
           onClick={() => navigate("/BrowseCourses")}
           className="btn oneprimary">Explore Courses</button>
        </div>

        <p className="inspired-text">Inspired by the Best in Music & Tech</p>

        <div className="partner-logos">
          <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/google-128.png" alt="Google" />
          <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/567/Spotify_Logo_RGB_Green-128.png" alt="Spotify" />
          <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-128.png" alt="YouTube" />
          <img src="https://img.icons8.com/?size=160&id=KwD0ShR8btRR&format=png" alt="Coursera" />
          <img src="https://img.icons8.com/?size=160&id=uCUr45IJh8vV&format=png" alt="Udemy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
