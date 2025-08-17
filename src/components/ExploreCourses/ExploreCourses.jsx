import React from 'react';
import './ExploreCourses.css';

const videos = [
  {
    id: 1,
    title: 'Piano Tutorial',
    thumbnail: 'https://img.youtube.com/vi/gvqT2Rft9dk/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=gvqT2Rft9dk'
  },
  {
    id: 2,
    title: 'Guitar Tutorial',
    thumbnail: 'https://img.youtube.com/vi/suicntLcnko/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=suicntLcnko'
  },
  {
    id: 3,
    title: 'Music Production',
    thumbnail: 'https://img.youtube.com/vi/osCVLWeXFpo/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=osCVLWeXFpo'
  }
];

const ExploreCourses = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const carouselRef = React.useRef(null);

  return (
    <div className="music-courses-container">
      <h2 className="music-courses-heading">Explore Our Music Courses</h2>
      <p className="music-courses-subheading">
        Choose a course and start learning at your own pace.
      </p>

      <div className="carousel-wrapper">
        <div
  className="carousel"
  ref={carouselRef}
  onScroll={(e) => {
    const scrollLeft = e.target.scrollLeft;
    const index = Math.round(scrollLeft / 300);
    setActiveIndex(index);
  }}
>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`video-card ${index === activeIndex ? 'highlight' : ''}`}
            >
              <div className="thumbnail-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                  alt="YouTube Logo"
                  className="youtube-logo"
                />
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail"
                />
              </div>
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>

        {/* Dots below carousel */}
        <div className="carousel-dots">
          {videos.map((_, index) => (
           <span
  key={index}
  className={`dot ${index === activeIndex ? 'active' : ''}`}
  onClick={() => {
    const scrollTo = index * 300; // 280px card + 20px gap
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }}
/>

          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
