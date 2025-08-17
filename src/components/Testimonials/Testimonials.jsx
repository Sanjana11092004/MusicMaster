import React from 'react';
import './Testimonials.css';
import { FaUser } from 'react-icons/fa';

const testimonials = [
  {
    name: "Anjali R",
    title: "The perfect platform for beginners!",
    message: "I never thought I could learn piano online, but MusicMaster made it so easy. The lessons are clear, and the virtual piano tool is so much fun!",
  },
  {
    name: "Rohan M",
    title: "I improved faster than I imagined.",
    message: "Practicing just 30 minutes a day helped me go from zero to confidently playing full songs in a few weeks. I love the progress tracker feature!",
  },
  {
    name: "Aditya V",
    title: "Smart feedback is a game changer.",
    message: "Unlike YouTube, MusicMaster gives you real-time feedback on pitch and rhythm. That made a huge difference in how I practice.",
  },
  {
    name: "Neha S",
    title: "Great for structured learning.",
    message: "MusicMaster gave me a clear path to follow. I finally feel like I'm making consistent progress with my vocal training.",
  },
  {
    name: "Karan D",
    title: "Love the interactive tools!",
    message: "The virtual piano and rhythm games make practice super engaging. I actually look forward to practicing every day!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>User testimonials</h2>
      <div className="carousel">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{item.title}</h3>
            <p className="message">{item.message}</p>
            <div className="user-info">
              <FaUser className="user-icon" />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
