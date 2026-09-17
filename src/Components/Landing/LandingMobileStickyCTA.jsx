import React from 'react';

const LandingMobileStickyCTA = () => {
  const scrollToForm = (e) => {
    e.preventDefault();
    const target = document.getElementById('lead-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = target.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500);
      }
    }
  };

  return (
    <div className="wa-mobile-sticky-bar">
      <a
        href="#lead-form"
        className="wa-mobile-sticky-btn"
        onClick={scrollToForm}
      >
        <i className="fa-regular fa-calendar-check"></i> Book A Free Consultation
      </a>
    </div>
  );
};

export default LandingMobileStickyCTA;
