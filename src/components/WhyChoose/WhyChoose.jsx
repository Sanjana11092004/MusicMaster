import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <h2 className="why-choose-title">
        Why Choose <span>MusicMaster?</span>
      </h2>

      <div className="why-choose-features">
        <div className="feature-card">
          <img src="https://cdn4.iconfinder.com/data/icons/multimedia-controls-solid/30/interface-solid-multimedia-play-button-1-128.png" alt="Video Lessons" />
          <h3>Video Lessons</h3>
          <p>Step-by-step tutorials created by experienced musicians.</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn2.iconfinder.com/data/icons/sound-and-music-minimalist-icon-set/256/waves-128.png" alt="Practice Tools" />
          <h3>Practice Tools</h3>
          <p>Interactive tools like virtual piano and rhythm exercises.</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn4.iconfinder.com/data/icons/finance-16/48/profit-up-128.png" alt="Progress Tracker" />
          <h3>Progress Tracker</h3>
          <p>Track your learning milestones and course completion.</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn3.iconfinder.com/data/icons/ink-social-media/35/android-128.png" alt="Smart Feedback" />
          <h3>Smart Feedback</h3>
          <p>AI-powered feedback on pitch, rhythm, and performance.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
