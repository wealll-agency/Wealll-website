import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';
import SEO from '../SEO';
import './Landing.css';

const LandingThankYou = () => {
  useEffect(() => {
    document.title = 'Thank You | We Alll - Digital Marketing Agency';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wa-landing-page wa-thankyou-page">
      <SEO
        title="Thank You | We Alll - Digital Marketing Agency"
        description="Thank you for requesting a consultation with We Alll. Our senior growth strategist will connect with you within 2 business hours."
        canonicalPath="/thank-you"
      />

      {/* Header */}
      <LandingHeader />

      {/* Main Thank You Section */}
      <section className="wa-thankyou-section">
        <div className="wa-hero-glow-1"></div>
        <div className="wa-hero-glow-2"></div>

        <div className="container">
          <div className="wa-thankyou-card">
            {/* Animated Success Icon */}
            <div className="wa-thankyou-icon-box">
              <div className="wa-thankyou-ripple"></div>
              <div className="wa-thankyou-icon-inner">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>

            {/* Status Badge */}
            <div className="wa-thankyou-badge">
              <span className="wa-thankyou-pulse-dot"></span>
              CONSULTATION REQUEST CONFIRMED
            </div>

            {/* Heading */}
            <h1 className="wa-thankyou-title">
              Thank You! We’ve Received <br />
              <span className="wa-highlight">Your Request</span>
            </h1>

            {/* Subtext */}
            <p className="wa-thankyou-subtitle">
              Thank you for choosing <strong>We Alll</strong> as your digital growth partner. 
              Our senior digital marketing strategist is reviewing your business goals and will reach out to you within <strong>2 business hours</strong>.
            </p>

            {/* "What to Expect Next" Steps */}
            <div className="wa-thankyou-steps-container">
              <h3 className="wa-thankyou-steps-title">What Happens Next?</h3>
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="wa-thankyou-step-card">
                    <div className="wa-step-number">01</div>
                    <div className="wa-step-icon">
                      <i className="fa-solid fa-chart-pie"></i>
                    </div>
                    <h4>Digital Brand Audit</h4>
                    <p>We analyze your website, competitor landscape, and growth roadblocks to pinpoint high-ROI opportunities.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="wa-thankyou-step-card">
                    <div className="wa-step-number">02</div>
                    <div className="wa-step-icon">
                      <i className="fa-solid fa-headset"></i>
                    </div>
                    <h4>1-on-1 Strategy Call</h4>
                    <p>A dedicated growth strategist will connect via call/WhatsApp to discuss your milestones and budget allocations.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="wa-thankyou-step-card">
                    <div className="wa-step-number">03</div>
                    <div className="wa-step-icon">
                      <i className="fa-solid fa-rocket"></i>
                    </div>
                    <h4>Tailored Growth Plan</h4>
                    <p>You receive an actionable execution roadmap designed to scale conversions, leads, and measurable revenue.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Immediate Assistance Box */}
            <div className="wa-thankyou-direct-box">
              <h4>Need Immediate Assistance?</h4>
              <p>Prefer to speak with our strategist right now? Feel free to call or WhatsApp us directly:</p>
              <div className="wa-thankyou-actions">
                <a
                  href="https://wa.me/918240858613?text=Hi%20We%20Alll,%20I%20just%20submitted%20a%20consultation%20request%20on%20your%20website%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-btn-whatsapp-direct"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  Chat on WhatsApp
                </a>
                <a href="tel:+918240858613" className="wa-btn-call-direct">
                  <i className="fa-solid fa-phone"></i>
                  +91 82408 58613
                </a>
                <Link to="/" className="wa-btn-back-home">
                  <i className="fa-solid fa-arrow-left"></i>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default LandingThankYou;
