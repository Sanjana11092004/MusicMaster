import React from "react";
import { useNavigate, useLocation  } from "react-router-dom"; // Import useNavigate
import "./ChooseLevel.css";

const levels = [
  {
    name: "Beginner",
    description: "Start your journey from the basics.",
  },
  {
    name: "Intermediate",
    description: "Already know the basics? Level up now.",
  },
  {
    name: "Advanced",
    description: "Refine your skills and play like a pro.",
  },
];

const ChooseLevel = () => {
  const navigate = useNavigate(); // Initialize navigate
  const location = useLocation();
  const instrument = location.state?.instrument || "Singing";

  const handleChoose = (level) => {
    // Navigate to the next page, e.g. course videos
    navigate("/CourseVideos", { state: { instrument, level } }); // Pass selected level if needed
  };

  return (
    <div className="chooselevel-bg">
      <div className="chooselevel-container">
        <h2 className="chooselevel-title">
          Choose your <span className="chooselevel-highlight">current level</span>
        </h2>
        <p className="chooselevel-subtitle">
          We'll get you on the right track
        </p>
        <div className="chooselevel-options">
          {levels.map((lvl) => (
            <div className="chooselevel-card" key={lvl.name}>
              <span className="chooselevel-name">{lvl.name}</span>
              <span className="chooselevel-desc">{lvl.description}</span>
              <button
                className="chooselevel-btn"
                onClick={() => handleChoose(lvl.name)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="chooselevel-dots">
          <span className="chooselevel-dot" />
          <span className="chooselevel-dot" />
          <span className="chooselevel-dot" />
        </div>
      </div>
    </div>
  );
};

export default ChooseLevel;
