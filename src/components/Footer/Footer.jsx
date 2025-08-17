// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer  id="footer" className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>MusicMaster</h3>
          <p>Where Passion meets Practice...</p>

          <h4>Address:</h4>
          <p>
            Creative Avenue, Indiranagar<br />
            Bangalore, Karnataka - 560038<br />
            India
          </p>

          <h4>Contact:</h4>
          <p>
            080 4000 1234<br />
            1800 123 4567<br />
            support@musicmaster.com
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Musical Skills</h4>
          <ul>
            <li>Piano</li>
            <li>Guitar</li>
            <li>Vocals</li>
            <li>Music Theory</li>
            <li>Violin</li>
            <li>Flute</li>
            <li>Music Composition</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Tools & Technologies</h4>
          <ul>
            <li>Virtual Piano</li>
            <li>Ear Training Tools</li>
            <li>Metronome</li>
            <li>Web Audio API</li>
            <li>AI Feedback</li>
            <li>Pitch Detection</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4>Platform</h4>
          <ul>
            <li>About</li>
            <li>Instructors</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>

          <div className="footer-icons">
            <FaInstagram className="icon" />
            <FaFacebookF className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025, MusicMaster.inc
      </div>
    </footer>
  );
};

export default Footer;
