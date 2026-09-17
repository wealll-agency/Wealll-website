import React from 'react';
import { mediaUrl } from '../../config/media';

const agencyImg = mediaUrl('assets/images/cta_image.png');

const LandingAboutAgency = () => {
  return (
    <section className="wa-about-agency-section wa-section-py" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT COLUMN: HERO ILLUSTRATION */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <div className="wa-about-agency-image-wrap">
              <span className="wa-about-agency-badge">
                <i className="fa-solid fa-trophy" style={{ marginRight: '6px' }}></i> #1 Agency in Kolkata
              </span>
              <img
                src={agencyImg}
                alt="We Alll Digital Marketing Agency"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="col-lg-7 col-md-12">
            <div className="wa-about-agency-content">
              <h2 className="wa-section-title">
                <span className="wa-highlight">#1</span> Digital Marketing Company in Kolkata
              </h2>
              <p className="wa-about-agency-p">
                At <strong>We Alll</strong>, we take pride in being recognized as Kolkata’s premier full-service Digital Marketing Agency. Our veteran team of creative thinkers, performance media buyers, data analysts, and copywriters crafts custom digital marketing systems designed to elevate your brand from local visibility to national dominance.
              </p>
              <p className="wa-about-agency-p">
                We specialize in search engine optimization, pay-per-click advertising, organic social growth, high-production video storytelling, programmatic media buying, and conversion rate optimization (CRO). As a trusted digital marketing partner in Kolkata, every campaign we execute is measured against actual business growth, qualified pipeline, and revenue return.
              </p>
              <p className="wa-about-agency-p">
                We leverage modern generative workflows, audience heatmapping, and granular attribution modeling to keep you ahead of algorithm shifts and rising advertising costs, ensuring remarkable leads and sales velocity every quarter.
              </p>

              {/* Feature Pills */}
              <div className="wa-feature-pill-list">
                <span className="wa-feature-pill">
                  <i className="fa-solid fa-check-circle"></i> Customer Acquisition
                </span>
                <span className="wa-feature-pill">
                  <i className="fa-solid fa-check-circle"></i> Lead Nurturing
                </span>
                <span className="wa-feature-pill">
                  <i className="fa-solid fa-check-circle"></i> LTV Maximization
                </span>
                <span className="wa-feature-pill">
                  <i className="fa-solid fa-check-circle"></i> Backend Upselling
                </span>
                <span className="wa-feature-pill">
                  <i className="fa-solid fa-check-circle"></i> Multi-Touch Attribution
                </span>
              </div>

              <p className="wa-about-agency-p">
                At <strong>We Alll</strong>, we are deeply committed to client success through radical transparency, clear monthly roadmaps, and proactive communication.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#lead-form" className="wa-btn wa-btn-primary">
                  <i className="fa-regular fa-calendar-check"></i> Book A Free Consultation
                </a>
                <a
                  href="https://wa.me/918240858613?text=Hi%20We%20Alll,%20I'd%20like%20to%20consult%20with%20your%20digital%20marketing%20experts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-btn wa-btn-whatsapp"
                >
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAboutAgency;
