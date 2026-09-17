import React from 'react';
import { mediaUrl } from '../../config/media';

const wealllLogo = mediaUrl('assets/images/Wealll_new.png');

const LandingHeader = () => {
  return (
    <header className="wa-header">
      <div className="container">
        <div className="wa-header-inner">
          <a href="/" className="wa-header-logo" aria-label="We Alll Homepage">
            <img src={wealllLogo} alt="We Alll - Digital Marketing Agency" />
          </a>
          <div className="wa-header-cta">
            <a href="tel:+918240858613" className="wa-header-phone">
              <span className="wa-header-phone-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <span>+91 82408 58613</span>
            </a>
            <a href="#lead-form" className="wa-btn wa-btn-primary">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
