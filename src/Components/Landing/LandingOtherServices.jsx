import React from 'react';

const LandingOtherServices = () => {
  return (
    <section className="wa-other-services-section wa-section-py">
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            Our Other <span className="wa-highlight">Services</span>
          </h2>
          <p className="wa-section-subtitle">
            Beyond everyday digital marketing, our specialized digital authority and engineering teams help your business build long-term reputational equity and high-performance digital real estate.
          </p>
        </div>

        <div className="wa-other-services-grid">
          {/* Service Card 1: Wikipedia Page Creation */}
          <div className="wa-other-card">
            <div className="wa-other-icon-wrap">
              <i className="fa-brands fa-wikipedia-w"></i>
            </div>
            <div className="wa-other-content">
              <h3>Wikipedia Page Creation & Authority</h3>
              <p>
                Wikipedia page creation helps brands and executives cement undisputed online credibility, search visibility, and knowledge graph authority. Our specialists navigate rigorous notability criteria, verified citations, neutral-point-of-view drafting, and policy-compliant editorial structuring to build an enduring public digital legacy.
              </p>
            </div>
          </div>

          {/* Service Card 2: Web Design & Development */}
          <div className="wa-other-card">
            <div className="wa-other-icon-wrap">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="wa-other-content">
              <h3>Innovative Web Design & Development</h3>
              <p>
                Your website is the central command of your digital marketing ecosystem. We design and build ultra-fast, mobile-responsive, conversion-optimized web applications and eCommerce storefronts. Featuring intuitive user journeys, clean code architecture, and robust technical SEO fundamentals that convert clicks into customers.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#lead-form" className="wa-btn wa-btn-primary">
            <i className="fa-regular fa-calendar-check"></i> Book A Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingOtherServices;
