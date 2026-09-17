import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import './Landing.css';

const LandingThankYou = () => {
  useEffect(() => {
    document.title = 'Thank You | We Alll';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="wa-thankyou-clean-page">
      <SEO
        title="Thank You | We Alll"
        description="Your consultation request has been submitted successfully."
        canonicalPath="/thank-you"
      />

      <div className="wa-thankyou-box-wrapper">
        <div className="wa-thankyou-simple-card">
          {/* Success Checkmark Circle */}
          <div className="wa-thankyou-simple-icon">
            <i className="fa-solid fa-check"></i>
          </div>

          {/* Heading */}
          <h1 className="wa-thankyou-simple-title">Thank You!</h1>

          {/* Success Message from SweetAlert */}
          <p className="wa-thankyou-simple-msg">
            Your consultation request has been submitted successfully. Our growth strategist will connect with you within 2 business hours.
          </p>

          {/* Back Action */}
          <div className="wa-thankyou-simple-action">
            <Link to="/" className="wa-thankyou-home-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingThankYou;
