import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ExploreCourses from './components/ExploreCourses/ExploreCourses';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Testimonials from './components/Testimonials/Testimonials';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';
import GoogleSignInPage from './pages/googlesignin/GoogleSignInPage';
import PasswordEntry from './pages/password/PasswordEntry';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import SignupModal from './components/SignupModal/SignupModal';
import LoginModal from './components/LoginModal/LoginModal';
import GoogleChooseAccount from './pages/googlechooseaccount/GoogleChooseAccount';
import GoogleConfirm from './pages/googleconfirm/GoogleConfirm';
import EditProfilePage from './pages/EditProfile/EditProfilePage';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import MyCourses from './pages/MyCourses/MyCourses';
import MyCart from './pages/MyCart/MyCart';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import NotificationsPage from './components/Notifications/NotificationsPage';
import { NotificationProvider } from './context/NotificationsContext';
import MessagesPage from './pages/messages/MessagesPage';
import ProfilePage from './pages/profile/ProfilePage';
import SettingsPage from './pages/settings/SettingsPage';
import ChooseInstrument from './pages/ChooseInstrument/ChooseInstrument';
import ChooseLevel from './pages/ChooseLevel/ChooseLevel';
import CourseVideos from './pages/CourseVideos/CourseVideos';
import BrowseCourses from "./pages/BrowseCourses/BrowseCourses";





function HomePage({ onSignupClick, onLoginClick }) {
  return (
    <>
      <Header onSignupClick={onSignupClick} onLoginClick={onLoginClick} />
      <HeroSection />
      <ExploreCourses />
      <WhyChoose />
      <Testimonials />
      <FAQSection />
      <Footer />
    </>
  );
}

function App() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      setShowLoginModal(true);
    } else {
      setShowLoginModal(false);
    }
  }, [location.pathname]);

  const handleSignupSuccess = (userData) => {
    login(userData);
    setShowSignupModal(false);
    navigate('/');
  };

  const handleLoginSuccess = (userData) => {
    login(userData);
    setShowLoginModal(false);
    navigate('/');
  };

  return (
    <>
    <NotificationProvider>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onSignupClick={() => setShowSignupModal(true)}
              onLoginClick={() => setShowLoginModal(true)}
            />
          }
        />
        <Route path="/google-signin" element={<GoogleSignInPage />} />
        <Route path="/password" element={<PasswordEntry />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/googlesignin" element={<GoogleChooseAccount />} />
        <Route path="/googleconfirm/:name/:email" element={<GoogleConfirm />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/mylearning" element={<MyCourses />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/choose-instrument" element={<ChooseInstrument />} />
        <Route path="/chooseLevel" element={<ChooseLevel />} /> 
        <Route path="/CourseVideos" element={<CourseVideos />} />
        <Route path="/BrowseCourses" element={<BrowseCourses />} />
        


        <Route
          path="/help-center"
          element={<HelpCenter openLoginModal={() => setShowLoginModal(true)} />}
        />
      </Routes>
      </NotificationProvider>

      {showSignupModal && (
        <SignupModal
          onClose={() => setShowSignupModal(false)}
          onSignupSuccess={handleSignupSuccess}
          onSwitchToLogin={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      )}

      {showLoginModal && (
        <LoginModal
          onClose={() => {
            setShowLoginModal(false);
            navigate('/');
          }}
          onSwitchToSignup={() => {
            setShowLoginModal(false);
            setShowSignupModal(true);
          }}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}

export default App;
