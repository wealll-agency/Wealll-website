import React from 'react';
import { mediaUrl } from '../../config/media';

const footerLogo = mediaUrl('assets/images/Wealll_new.png');

const LandingFooter = () => {
  return (
    <footer className="wa-landing-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <div className="wa-footer-logo">
              <a href="/">
                <img src={footerLogo} alt="We Alll" />
              </a>
            </div>
            <div className="wa-footer-address">
              <i className="fa-solid fa-location-dot" style={{ color: '#05a85c', marginRight: '8px' }}></i>
              Unit 8A, 4th Floor, Tower 1, Globsyn Crystal, Salt Lake Electronics Complex, Street No. 17, EP Block, Sector V, Kolkata – 700091, West Bengal, India
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <ul className="wa-footer-contact-list justify-content-lg-end">
              <li>
                <a href="tel:+918240858613">
                  <i className="fa-solid fa-phone-volume" style={{ color: '#05a85c' }}></i>
                  <span>+91 82408 58613</span>
                </a>
              </li>
              <li>
                <a href="mailto:amit@wealll.com">
                  <i className="fa-regular fa-envelope" style={{ color: '#05a85c' }}></i>
                  <span>amit@wealll.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918240858613?text=Hi%20We%20Alll,%20I'm%20interested%20in%20digital%20marketing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25d366' }}></i>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="wa-footer-bottom">
          <p className="m-0">
            {new Date().getFullYear()} © We Alll. All Rights Reserved. Transforming Brands Through Strategic Digital Marketing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
