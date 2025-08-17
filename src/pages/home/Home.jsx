// src/pages/Home.jsx
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import ExploreCourses from '../components/ExploreCourses/ExploreCourses';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQSection from '../components/FAQSection/FAQSection';
import Footer from '../components/Footer/Footer';
import SignupModal from '../components/SignupModal/SignupModal';

const Home = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <Header onSignupClick={() => setIsSignupOpen(true)} />

      <HeroSection />
      <ExploreCourses />
      <WhyChoose />
      <Testimonials />
      <FAQSection />
      <Footer />

      {isSignupOpen && <SignupModal onClose={() => setIsSignupOpen(false)} />}
    </>
  );
};

export default Home;
