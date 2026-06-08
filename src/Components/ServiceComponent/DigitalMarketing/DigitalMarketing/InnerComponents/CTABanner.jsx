import React from "react";
import logo from "../../../../../assets/images/We _Alll_black.png"; // Assuming this is correct or similar path

const CTABanner = () => {
  return (
    <section className="cta-section-wrapper h-auto">
      <div className="container">
        <div className="cta-bg-text">Grow Together</div>
        <div className="cta-border-box">
          <div className="cta-circle-container">
            <div className="cta-circle-content">
              <div className="dashed-border"></div>
              <div className="logo-inner">
                <img src={logo} alt="We Alll Logo" />
              </div>
            </div>
          </div>

          <div className="cta-content-inner text-center">
            <h2>
              Leverage Digital Metrics To Tap Into The Future of Your Digital
              Prowess
            </h2>
            <a href="#" className="cta-btn-custom">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
