import React from 'react';
const HeroImage = mediaUrl("assets/images/ROI-Focussed-Email-Marketing-Agency-min.png.webp");
import { mediaUrl } from "../../../../../config/media";

const EmailHeroSection = () => {
  return (
    <div className="email-hero-container container">
      <div className="row align-items-center">
        {/* Left Column: Specific Requested Image */}
        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
          <div className="position-relative d-inline-block">
            <img
              src={HeroImage}
              alt="Email Marketing System"
              className="img-fluid rounded-4 shadow-lg"
              style={{ border: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#fff' }}
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="col-lg-6 text-start">
          <h2 className="email-hero-title" style={{ textAlign: 'left', fontSize: '3rem' }}>
            Top <span className="email-gradient-text">Email Marketing</span><br />Service Provider in India
          </h2>

          <div style={{ padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong>We Alll</strong> provides a lot of time-saving tools that assist you throughout the campaign. Our chosen products will save your time on any task. List management tools, Email Design, Professional layouts, marketing automation, and drag-and-drop email editors make the process with complex elements trouble-free. Additionally, an Email Marketing Service Provider can automatically let out those processes, which take a lot of time.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '20px' }}>
              You can save your precious hours if you are generating ads on a vast scale. The key objective of an Email Marketing Agency in India is to run fully productive campaigns with minimum effort.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '0' }}>
              Let's go over the Important Features of Email Marketing Services in India to figure out which tools and products will provide you with the best bang for your buck.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailHeroSection;
