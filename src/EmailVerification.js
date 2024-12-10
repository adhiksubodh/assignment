import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'; // Import the CSS file
import logo from './images/logo-87.jpg'
const EmailVerification = () => {
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    navigate("/business-form");
  };

  return (
    <div className="email-verification-container">
      {/* Left Section */}
      <div className="left-section">
        <a href="#" className="back-link">
          ← Back
        </a>
        <h1 className="title">Layout Cards</h1>
        <div className="card-container">
          {/* Singapore */}
          <div className="card">
            <div className="card-header">
              <img
                src="https://flagcdn.com/w40/sg.png"
                alt="Singapore"
                className="flag-icon"
              />
              <h2 className="country-name">Singapore</h2>
            </div>
            <p className="location">Head Office</p>
            <p className="company-name">XYZ Pvt. Ltd.</p>
            <p className="address">Road to nowhere, 06-404, 500 Internal Error</p>
          </div>
          {/* Hong Kong */}
          <div className="card">
            <div className="card-header">
              <img
                src="https://flagcdn.com/w40/hk.png"
                alt="Hong Kong"
                className="flag-icon"
              />
              <h2 className="country-name">Hong Kong</h2>
            </div>
            <p className="location">Branches</p>
            <p className="company-name">XYZ Pte. Ltd.</p>
            <p className="address">The Infinite Loop Office, 404 Timeout Plaza</p>
          </div>
          {/* USA */}
          <div className="card">
            <div className="card-header">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="USA"
                className="flag-icon"
              />
              <h2 className="country-name">USA</h2>
            </div>
            <p className="location">Branches</p>
            <p className="company-name">XYZ Inc.</p>
            <p className="address">Nulltown, Bugglandia, 500 0xDEADBEE</p>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="right-section">
        <div className="form-container">
          <div className="form-header">
          <div className="logo-container">
  <img src={logo} alt="Logo" className="logo"/>
</div>
  </div>
          <h2 className="form-title">Verify your Email</h2>
          <p className="form-instruction">
            Please enter the 6 digit code we just sent to{" "}
            <span className="email-highlight">s**********a@xyz.com</span>
          </p>
          <form className="verification-form" onSubmit={handleVerify}>
            <div className="code-input-container">
              {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <input
                    type="text"
                    maxLength={1}
                    className="code-input"
                  />
                  {i === 2 && (
                    <span className="separator">-</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <button
              type="submit"
              className="verify-button"
            >
              Verify
            </button>
          </form>
          <p className="timer">
            Wait 1:39 seconds before requesting a new code.
          </p>
          <div className="last-section">
            <p className="agreement-text">
          By continuing, you’re agreeing to Nobody’s 
          <a href="#" className="terms-link">Terms of Service</a>, 
             <a href="#" className="privacy-link">Privacy Policy</a>,
             and  
             <a href="#" className="cookie-link">Cookie Policy</a>.
  </p>
</div>
        </div>
        
      </div>
      
    </div>
  );
};

export default EmailVerification;
