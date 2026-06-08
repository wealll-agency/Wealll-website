import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiShield, FiZap, FiCode } from 'react-icons/fi';
import './mobile-dark.css';

const MobileAppHero = () => {
  return (
    <section className="mobile-dark-section">
      {/* Background Ambient Glows */}
      <div className="mobile-ambient-glow glow-top-right"></div>
      <div className="mobile-ambient-glow glow-bottom-left"></div>

      <div className="container mobile-hero-container">
        <div className="row align-items-center w-100 m-0">
          
          {/* Left Content Area */}
          <div className="col-lg-6 col-md-12 mobile-hero-content mb-5 mb-lg-0 pe-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="mobile-section-badge">Welcome to We Alll</span>
              <h1 className="display-4 fw-bolder mb-4 lh-sm">
                Promising Tech Partner for <br />
                <span className="mobile-title-gradient">Next-gen Mobile App</span> <br />
                Development in Kolkata
              </h1>
              
              <p className="text-secondary fs-5 lh-lg mb-4 pe-lg-4">
                Get incredible mobile apps that attract and engage audiences and make them conversion-ready. As a company with a global presence, we create inspirational designs and provide innovative solutions for mobile application development.
              </p>
              
              <p className="text-secondary fs-5 lh-lg mb-5 pe-lg-4">
                We are committed to delivering superior solutions. Our passionate developers work with a complete sense of ownership to build functional, one-of-a-kind, intriguing apps that reflect your brand’s uniqueness.
              </p>

              <div className="d-flex gap-3">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary px-5 py-3 rounded-pill fw-bold"
                  style={{ background: 'var(--mobile-gradient-text)', border: 'none' }}
                >
                  Start Project
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Holographic App UI Area */}
          <div className="col-lg-6 col-md-12 position-relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="holo-device-wrapper"
            >
              {/* Floating Element 1 */}
              <div className="holo-floating-element holo-float-1">
                <div className="holo-icon-box"><FiShield /></div>
                <div className="holo-text">
                  <span>Security</span>
                  <strong>AES-256</strong>
                </div>
              </div>

              {/* Holographic Device Body */}
              <div className="holo-device">
                <div className="holo-notch mt-3"></div>
                
                <div className="holo-screen-content">
                  {/* Fake UI Header */}
                  <div className="holo-ui-header">
                    <div className="holo-ui-header-text"></div>
                  </div>

                  {/* Fake UI Cards */}
                  <div className="holo-ui-card-row">
                    <div className="holo-ui-card"></div>
                    <div className="holo-ui-card"></div>
                  </div>

                  {/* Fake UI List Items */}
                  <div className="holo-ui-list">
                    <div className="holo-list-item d-flex align-items-center px-2 text-white-50"><FiSmartphone className="me-2"/> App Analytics</div>
                    <div className="holo-list-item d-flex align-items-center px-2 text-white-50"><FiZap className="me-2"/> Performance</div>
                    <div className="holo-list-item d-flex align-items-center px-2 text-white-50"><FiCode className="me-2"/> Source Code</div>
                    <div className="holo-list-item"></div>
                    <div className="holo-list-item"></div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="holo-floating-element holo-float-2">
                <div className="holo-icon-box" style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#ec4899', borderColor: 'rgba(236, 72, 153, 0.4)' }}><FiZap /></div>
                <div className="holo-text">
                  <span>Performance</span>
                  <strong>99.9% Uptime</strong>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppHero;
