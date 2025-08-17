import { useParams, useNavigate } from 'react-router-dom';
import './GoogleConfirm.css';

const GoogleConfirm = () => {
  const { name, email } = useParams();
  const navigate = useNavigate();

  const decodedName = decodeURIComponent(name);
  const decodedEmail = decodeURIComponent(email);
  const initial = decodedEmail.charAt(0).toUpperCase();

  const handleContinue = () => {
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/googlesignin');
  };

  return (
    <div className="google-confirm-container">
      <div className="google-confirm-card">
        <div className="google-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="google-logo"
          />
          <h2>Sign in with Google</h2>
        </div>

        <div className="app-title">
          <span className="app-icon">U</span>
          <h3>Sign in to MusicMaster</h3>
        </div>

        <div className="user-email-row">
          <span className="email-badge">{initial}</span>
          <span className="email-text">{decodedEmail}</span>
        </div>

        <div className="info-box">
          <p><strong>Google will allow MusicMaster to access this info about you</strong></p>
          <ul>
            <li>👤 {decodedName} – Name and profile picture</li>
            <li>📧 {decodedEmail} – Email address</li>
          </ul>
          <p className="policy-text">
            Review MusicMaster’s <a href="/privacy">privacy policy</a> and <a href="/terms">Terms of Service</a>.
          </p>
        </div>

        <div className="button-row">
          <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          <button onClick={handleContinue} className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default GoogleConfirm;



// import { useParams } from 'react-router-dom';

// const GoogleConfirm = () => {
//   const { name, email } = useParams();

//   return (
//     <div>
//       <h2>Confirm Page</h2>
//       <p>Name: {decodeURIComponent(name)}</p>
//       <p>Email: {decodeURIComponent(email)}</p>
//     </div>
//   );
// };

// export default GoogleConfirm;
