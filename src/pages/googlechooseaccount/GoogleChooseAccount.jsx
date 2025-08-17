import { useNavigate } from 'react-router-dom';

const GoogleChooseAccount = () => {
  const navigate = useNavigate();

  const mockAccounts = [
    {
      name: 'Sanjana Damarla',
      email: 'sanjanadamarla2004@gmail.com',
      initial: 'S',
    },
    {
      name: 'Damarla Sanjana',
      email: 'damarlasanjana0411@gmail.com',
      initial: 'D',
    },
  ];

  const handleAccountClick = (account) => {
    const encodedName = encodeURIComponent(account.name);
    const encodedEmail = encodeURIComponent(account.email);
    navigate(`/googleconfirm/${encodedName}/${encodedEmail}`);
  };

  return (
    <div className="google-choose-container">
      <div className="google-card">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
          alt="Google logo"
          className="google-logo"
        />
        <h2 className="signin-text">Sign in with Google</h2>
        <div className="app-logo-section">
          <img
            src="https://cdn0.iconfinder.com/data/icons/48_px_web_icons/48/Music_Note_Pink.png"
            alt="App logo"
            className="app-logo"
          />
          <p className="choose-text">
            Choose an account <br /> to continue to <b>MusicMaster</b>
          </p>
        </div>

        <div className="account-list">
          {mockAccounts.map((acc, idx) => (
            <div
              key={idx}
              className="account-item"
              onClick={() => handleAccountClick(acc)}
              style={{ cursor: 'pointer' }}
            >
              <div className="account-icon">{acc.initial}</div>
              <div>
                <div className="account-name">{acc.name}</div>
                <div className="account-email">{acc.email}</div>
              </div>
            </div>
          ))}

          <div className="account-item">
            <div className="account-icon">+</div>
            <div>
              <div className="account-name">Use another account</div>
            </div>
          </div>
        </div>

        <p className="footer-text">
          Before using this app, you can review MusicMaster’s{' '}
          <a href="/privacy">privacy policy</a> and <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default GoogleChooseAccount;


// import { useNavigate } from 'react-router-dom';

// const GoogleChooseAccount = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/googleconfirm/Sanjana%20Damarla/sanjana@example.com');
//   };

//   return (
//     <div>
//       <h2>Choose an account</h2>
//       <button onClick={handleClick}>Click to Select Account</button>
//     </div>
//   );
// };

// export default GoogleChooseAccount;
