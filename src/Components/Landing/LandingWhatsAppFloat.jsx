import React, { useState } from 'react';

const LandingWhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wa-floating-widget">
      {isOpen && (
        <div className="wa-chat-box">
          <div className="wa-chat-header">
            <div>
              <p className="wa-chat-header-title">We Alll Support</p>
              <p className="wa-chat-header-sub">Typically replies within an hour</p>
            </div>
            <button
              className="wa-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="wa-chat-body">
            <div className="wa-chat-msg">
              Hello 👋 Welcome to <strong>We Alll</strong>!<br />
              <br />
              Looking to scale your revenue and acquire more customers online? Share your goals with us, and let’s craft a custom growth strategy for you.
            </div>
          </div>
          <div className="wa-chat-action">
            <a
              href="https://wa.me/918240858613?text=Hi%20We%20Alll!%20I'd%20like%20to%20know%20more%20about%20your%20digital%20marketing%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" style={{ marginRight: '6px', color: '#fff' }}></i>
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        className="wa-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Support"
      >
        <span className="wa-chat-badge">1</span>
        <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-brands fa-whatsapp'} style={{ color: '#ffffff' }}></i>
      </button>
    </div>
  );
};

export default LandingWhatsAppFloat;
