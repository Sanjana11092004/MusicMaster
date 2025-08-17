import React, { useState } from "react";
import "./CourseVideos.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaBars, FaHeart, FaRegHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

// Expanded video data for all instrument/level combos
const videoData = [
  // Singing
  { id: 1, instrument: "Singing", level: "Beginner", title: "Breathing Basics", description: "Learn foundational breathing for singing.", img: "https://cdn-icons-png.flaticon.com/256/15374/15374850.png", duration: "10 min" },
  { id: 2, instrument: "Singing", level: "Beginner", title: "Introduction to Pitch", description: "Practice finding notes with your voice.", img: "https://cdn-icons-png.flaticon.com/256/15133/15133246.png", duration: "14 min" },
  { id: 3, instrument: "Singing", level: "Beginner", title: "Vocal Warmups", description: "Prepare your voice for practice.", img: "https://cdn-icons-png.flaticon.com/256/10292/10292073.png", duration: "8 min" },
  { id: 4, instrument: "Singing", level: "Beginner", title: "Pitch Matching Exercises", description: "Exercises for finding notes accurately.", img: "https://cdn-icons-png.flaticon.com/256/6917/6917434.png", duration: "11 min" },
  { id: 5, instrument: "Singing", level: "Beginner", title: "Simple Songs", description: "Start with songs to build confidence.", img: "https://cdn-icons-png.flaticon.com/256/6663/6663869.png", duration: "13 min" },

  { id: 6, instrument: "Singing", level: "Intermediate", title: "Vocal Range Expansion", description: "Expand your vocal range safely.", img: "https://cdn-icons-png.flaticon.com/256/10294/10294689.png", duration: "18 min" },
  { id: 7, instrument: "Singing", level: "Intermediate", title: "Harmony Practice", description: "Learn to harmonize with others.", img: "https://cdn-icons-png.flaticon.com/256/11106/11106077.png", duration: "15 min" },
  { id: 8, instrument: "Singing", level: "Intermediate", title: "Expressive Techniques", description: "Bring emotion into your vocals.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", duration: "16 min" },

  { id: 9, instrument: "Singing", level: "Advanced", title: "Stage Presence Mastery", description: "Train your voice for live performance.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", duration: "22 min" },
  { id: 10, instrument: "Singing", level: "Advanced", title: "Fast Riffs & Runs", description: "Master quick vocal passages.", img: "https://cdn-icons-png.flaticon.com/256/11106/11106077.png", duration: "14 min" },
  { id: 11, instrument: "Singing", level: "Advanced", title: "Recording Techniques", description: "Techniques for studio singing.", img: "https://cdn-icons-png.flaticon.com/256/10292/10292043.png", duration: "18 min" },

  // Piano
  { id: 12, instrument: "Piano", level: "Beginner", title: "Hand Positioning", description: "Proper hand positions for easy piano.", img: "https://i.pinimg.com/736x/23/aa/79/23aa79953e17a87dd78358dcbccc2f27.jpg", duration: "11 min" },
  { id: 13, instrument: "Piano", level: "Beginner", title: "First Scales", description: "Play simple scales with two hands.", img: "https://i.pinimg.com/1200x/fe/de/b4/fedeb45ff4120c174ad1ad0ad77b9977.jpg", duration: "9 min" },
  { id: 14, instrument: "Piano", level: "Beginner", title: "Learning C Major", description: "Your first pieces in C major.", img: "https://i.pinimg.com/736x/a1/cb/d5/a1cbd558c0f186ce3bbcf7e6e087377d.jpg", duration: "14 min" },
  { id: 15, instrument: "Piano", level: "Beginner", title: "Reading Sheet Music", description: "Understand notes and rhythm.", img: "https://i.pinimg.com/736x/f5/91/98/f59198948c582c190bdb1146f5906341.jpg", duration: "10 min" },
  
  { id: 16, instrument: "Piano", level: "Intermediate", title: "Arpeggios in Practice", description: "Take your scales and chords further.", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", duration: "16 min" },
  { id: 17, instrument: "Piano", level: "Intermediate", title: "Sight Reading Skills", description: "Tips to read complex music faster.", img: "https://i.pinimg.com/1200x/77/6b/47/776b470a8055558ff6d6366d72ee636e.jpg", duration: "11 min" },
  { id: 18, instrument: "Piano", level: "Intermediate", title: "Playing with Expression", description: "Make your pieces sound alive.", img: "https://i.pinimg.com/736x/ca/be/e5/cabee513139a65e1be8007c4e4f466e2.jpg   ", duration: "15 min" },

  { id: 19, instrument: "Piano", level: "Advanced", title: "Jazz Improv", description: "Explore improvisation in jazz piano.", img: "https://i.pinimg.com/736x/ca/be/e5/cabee513139a65e1be8007c4e4f466e2.jpg", duration: "24 min" },
  { id: 20, instrument: "Piano", level: "Advanced", title: "Two-Hand Independence", description: "Play advanced pieces with ease.", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", duration: "20 min" },
  { id: 21, instrument: "Piano", level: "Advanced", title: "Classical Repertoire", description: "Challenge yourself with famous works.", img: "https://i.pinimg.com/1200x/9a/35/0b/9a350ba2ee2f5ffb9cc58226d852e30a.jpg", duration: "28 min" },
  
  // Guitar
  { id: 22, instrument: "Guitar", level: "Beginner", title: "Basic Chords", description: "Get started with simple guitar chords.", img: "https://cdn-icons-png.flaticon.com/256/8359/8359866.png", duration: "12 min" },
  { id: 23, instrument: "Guitar", level: "Beginner", title: "Strumming Basics", description: "Learn strumming patterns.", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", duration: "9 min" },
  { id: 24, instrument: "Guitar", level: "Beginner", title: "Easy Songs", description: "Play your first guitar songs.", img: "https://i.pinimg.com/736x/83/33/be/8333beeaed9ab42f0fc590e26f2b6986.jpg", duration: "13 min" },
  { id: 25, instrument: "Guitar", level: "Beginner", title: "Changing Chords Fast", description: "Tips for quick changes.", img: "https://cdn-icons-png.flaticon.com/256/6639/6639823.png", duration: "11 min" },
  
  { id: 26, instrument: "Guitar", level: "Intermediate", title: "Fingerstyle Tricks", description: "Intermediate fingerstyle guitar.", img: "https://cdn-icons-png.flaticon.com/256/10294/10294676.png", duration: "18 min" },
  { id: 27, instrument: "Guitar", level: "Intermediate", title: "Barre Chords", description: "Master the barre chord technique.", img: "https://cdn-icons-png.flaticon.com/256/5844/5844877.png", duration: "15 min" },
  { id: 28, instrument: "Guitar", level: "Intermediate", title: "Melodic Improv", description: "Start improvising melodies.", img: "https://i.pinimg.com/736x/62/2d/fe/622dfeac4bd18446d559988947160055.jpg", duration: "17 min" },

  { id: 29, instrument: "Guitar", level: "Advanced", title: "Solo Techniques", description: "Become a pro at fast solos.", img: "https://i.pinimg.com/736x/64/79/17/647917f141ed060961f262946d5de3c8.jpg", duration: "20 min" },
  { id: 30, instrument: "Guitar", level: "Advanced", title: "Jazz Chord Progressions", description: "Learn complex jazz harmonies.", img: "https://i.pinimg.com/1200x/0b/97/fc/0b97fcde109f6507889e01cbc02ce2dc.jpg", duration: "23 min" },
  { id: 31, instrument: "Guitar", level: "Advanced", title: "Speed Building", description: "Exercises for speed and accuracy.", img: "https://i.pinimg.com/736x/dc/9a/b1/dc9ab1d415e05dd9f0c0130cdfd0634b.jpg", duration: "15 min" },
  
  // Flute
  { id: 32, instrument: "Flute", level: "Beginner", title: "Produce Your First Note", description: "Learn to make your flute sound.", img: "https://i.pinimg.com/736x/a3/46/bc/a346bcb7a535b6aac1646b4af1c0cbff.jpg", duration: "9 min" },
  { id: 33, instrument: "Flute", level: "Beginner", title: "Finger Placement", description: "Get finger patterns right.", img: "https://i.pinimg.com/736x/ee/e0/87/eee087c0106a6b59d3c2a588d9603d42.jpg", duration: "11 min" },
  { id: 34, instrument: "Flute", level: "Beginner", title: "Simple Songs", description: "Start playing beginner songs.", img: "https://i.pinimg.com/736x/c5/6d/49/c56d4947b1586017c6d72aa3b2ad5e3e.jpg", duration: "12 min" },
  
  { id: 35, instrument: "Flute", level: "Intermediate", title: "Vibrato Techniques", description: "Add vibrato for a professional sound.", img: "https://cdn-icons-png.flaticon.com/128/2907/2907253.png", duration: "15 min" },
  { id: 36, instrument: "Flute", level: "Intermediate", title: "Improvisation For Flute", description: "Start improvising simple tunes.", img: "https://cdn-icons-png.flaticon.com/128/17630/17630280.png", duration: "13 min" },

  { id: 37, instrument: "Flute", level: "Advanced", title: "Solo Performance", description: "Perfect your technique for solos.", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", duration: "20 min" },
  { id: 38, instrument: "Flute", level: "Advanced", title: "Double Tonguing", description: "Advanced articulation skills.", img: "https://cdn-icons-png.flaticon.com/256/11790/11790869.png", duration: "16 min" },

  // Violin
  { id: 39, instrument: "Violin", level: "Beginner", title: "Holding the Bow", description: "Correct bow grip for violinists.", img: "https://i.pinimg.com/736x/08/b6/5b/08b65b8456b9e25985cb37702b951fbe.jpg", duration: "10 min" },
  { id: 40, instrument: "Violin", level: "Beginner", title: "Beginner Scales", description: "Play simple scales with good intonation.", img: "https://i.pinimg.com/originals/49/aa/0f/49aa0fbee07815a422ab7d7399365d6b.png", duration: "13 min" },
  { id: 41, instrument: "Violin", level: "Beginner", title: "Easy Pieces", description: "Play your first violin pieces.", img: "https://i.pinimg.com/736x/ae/26/53/ae2653f87142e80afd76fc05a4816c5e.jpg", duration: "14 min" },
  
  { id: 42, instrument: "Violin", level: "Intermediate", title: "Vibrato for Violin", description: "Learn intermediate vibrato.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", duration: "15 min" },
  { id: 43, instrument: "Violin", level: "Intermediate", title: "Sight Reading for Strings", description: "Develop reading skills for orchestra.", img: "https://i.pinimg.com/736x/fb/a0/a7/fba0a79309d0bc6368fee87d99fca689.jpg", duration: "11 min" },

  { id: 44, instrument: "Violin", level: "Advanced", title: "Bow Articulation", description: "Advance your bowing skills for solo work.", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", duration: "20 min" },
  { id: 45, instrument: "Violin", level: "Advanced", title: "Soloist Repertoire", description: "Famous violin solos.", img: "https://i.pinimg.com/736x/6c/d9/87/6cd987e13e552dc16b7705e7d1424b52.jpg", duration: "18 min" }
];

const allInstruments = ["Singing", "Flute", "Piano", "Guitar", "Violin"];
const allLevels = ["Beginner", "Intermediate", "Advanced"];

const CourseVideos = () => {
  const location = useLocation();
  // Read initial state from navigation, or default
  const passedInstrument = location.state?.instrument;
  const passedLevel = location.state?.level;

  const [instrument, setInstrument] = useState(passedInstrument || "Singing");
  const [level, setLevel] = useState(passedLevel || "Beginner");

  const [menuOpen, setMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Cards for selected instrument and level
  const filteredVideos = videoData.filter((v) => v.instrument === instrument && v.level === level);

//   useEffect(() => {
//     // When filter menu changes instrument/level, update title live
//     setInstrument(passedInstrument || instrument);
//     setLevel(passedLevel || level);
//   }, [passedInstrument, passedLevel]);

  return (
    <>
      <Header />
      <div className="coursevideos-bg">
        <div className="coursevideos-headerbar">
          <h2 className="coursevideos-title">
            {instrument} - {level} Lessons
          </h2>
          <button className="cv-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
          {menuOpen && (
            <div className="cv-menu-popup">
              <div className="cv-menu-group">
                <span className="cv-menu-label">Instrument</span>
                {allInstruments.map((inst) => (
                  <button
                    key={inst}
                    className={instrument === inst ? "active" : ""}
                    onClick={() => { setInstrument(inst); setMenuOpen(false); }}
                  >
                    {inst}
                  </button>
                ))}
              </div>
              <div className="cv-menu-group">
                <span className="cv-menu-label">Level</span>
                {allLevels.map((lvl) => (
                  <button
                    key={lvl}
                    className={level === lvl ? "active" : ""}
                    onClick={() => { setLevel(lvl); setMenuOpen(false); }}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              <button className="cv-menu-close" onClick={() => setMenuOpen(false)}>
                Close
              </button>
            </div>
          )}
        </div>
        <div className="coursevideos-grid">
          {filteredVideos.length === 0 ? (
            <p className="cv-empty">No videos found for this instrument and level.</p>
          ) : (
            filteredVideos.map((video) => (
              <div className="cv-card" key={video.id}>
                <img src={video.img} alt={video.title} className="cv-img" />
                <h3 className="cv-name">{video.title}</h3>
                <p className="cv-desc">{video.description}</p>
                <div className="cv-meta">
                  <span className="cv-level">{level}</span>
                  <span className="cv-duration">⏱ {video.duration}</span>
                  <span className="cv-heart" onClick={() => toggleFavorite(video.id)}>
                    {favorites[video.id] ? (
                      <FaHeart color="#e71d36" />
                    ) : (
                      <FaRegHeart color="#a673e3" />
                    )}
                  </span>
                </div>
                <div className="cv-actions">
                  <button className="cv-btn cart-btn">Add to Cart</button>
                  <button className="cv-btn learn-btn">Start Learning</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseVideos;
