import React from 'react';
import { mediaUrl } from '../../config/media';

const leaderPhoto = mediaUrl('assets/images/Team-1.jpeg');

const LandingLeadership = () => {
  return (
    <section className="wa-leadership-section wa-section-py">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="wa-section-title">
            The Mind Behind Our Success <span className="wa-highlight">Our Leadership</span>
          </h2>
          <p className="wa-section-subtitle">
            We Alll is driven by a passionate vision to build a distinctive, future-ready digital solutions agency where creative brilliance meets data-driven performance.
          </p>
        </div>

        <div className="wa-leader-card">
          <div className="row g-0 align-items-center">
            <div className="col-lg-5 col-md-12 wa-leader-image-col">
              <img
                src={leaderPhoto}
                alt="Leadership at We Alll"
                loading="lazy"
              />
            </div>
            <div className="col-lg-7 col-md-12 wa-leader-info-col">
              <span className="wa-leader-role-badge">Founder & Managing Director</span>
              <h3 className="wa-leader-name">Amit Santra</h3>
              <div className="wa-leader-bio">
                <p>
                  <strong>Amit Santra</strong> spearheads the strategic vision and growth roadmap at <strong>We Alll</strong>. With a proven track record spanning sales strategy, performance marketing, technological innovation, and client success, he has guided emerging startups and mid-sized brands toward sustained market expansion and multi-crore revenue milestones.
                </p>
                <p>
                  Having collaborated closely with consumer brands, healthcare networks, corporate institutions, and retail chains, he brings deep domain expertise in designing omnichannel acquisition funnels that resolve core business bottlenecks rather than superficial metrics.
                </p>
                <p>
                  He champions an execution culture rooted in continuous experimentation, authentic client partnerships, and meticulous operational governance to deliver consistently superior customer experience.
                </p>
              </div>
              <div className="mt-4">
                <a href="#lead-form" className="wa-btn wa-btn-primary">
                  <i className="fa-regular fa-calendar-check"></i> Book A Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingLeadership;
