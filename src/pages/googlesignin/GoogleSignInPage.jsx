// src/pages/googlesignin/GoogleSignInPage.jsx
import React from "react";
import "./GoogleSignIn.css";

const GoogleSignInPage = () => {
  return (
    <div className="google-signin-page">
      <div className="signin-container">
        <img
          src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-128.png"
          alt="Google logo"
          className="google-logo"
        />
        <h2 className="signin-title">Sign in with Google</h2>
        <p className="choose-account-text">Choose an account to continue to <b>MusicMaster</b></p>

        <div className="account-list">
          <div className="account-item">
            <div className="avatar">S</div>
            <div className="account-details">
              <div className="account-name">Sanjana Damarl</div>
              <div className="account-email">sanjanadamarl2004@gmail.com</div>
            </div>
          </div>
          <div className="account-item">
            <div className="avatar">D</div>
            <div className="account-details">
              <div className="account-name">Damarla Sanjana</div>
              <div className="account-email">damarlasanjana0411@gmail.com</div>
            </div>
          </div>
          <div className="account-item use-another">Use another account</div>
        </div>

        <div className="footer-text">
          Before using this app, you can review MusicMaster's <a href="/privacy-policy">privacy policy</a>
<a href="/terms">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignInPage;
