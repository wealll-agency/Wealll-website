import React from 'react';
import { mediaUrl } from '../../config/media';

const googleReview = mediaUrl('assets/images/f-google-review_result.webp');
const clutchReview = mediaUrl('assets/images/f-clutch-review_result.webp');
const ambitionBox = mediaUrl('assets/images/ambitionbox.png');

const LandingStatsBadges = () => {
  return (
    <section className="wa-stats-section wa-section-py-sm">
      <div className="container">
        <div className="wa-stats-grid">
          {/* Badge 1: MSME Registered */}
          <div className="wa-badge-item text-center">
            <div style={{ fontWeight: '800', color: '#1e293b', fontSize: '18px' }}>
              <i className="fa-solid fa-certificate" style={{ color: '#05a85c', marginRight: '6px' }}></i>
              MSME
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>
                Govt. of India Registered
              </div>
            </div>
          </div>

          {/* Counter 1: Total Projects */}
          <div className="wa-counter-box">
            <div className="wa-counter-number">200+</div>
            <div className="wa-counter-title">Completed Projects</div>
          </div>

          {/* Badge 2: Google Partner / Reviews */}
          <div className="wa-badge-item">
            <img src={googleReview} alt="Google Verified Reviews" loading="lazy" />
          </div>

          {/* Counter 2: Team Members */}
          <div className="wa-counter-box">
            <div className="wa-counter-number">25+</div>
            <div className="wa-counter-title">Specialist Marketers</div>
          </div>

          {/* Badge 3: Clutch / Industry Rating */}
          <div className="wa-badge-item">
            <img src={clutchReview} alt="Top Rated Agency on Clutch" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingStatsBadges;
