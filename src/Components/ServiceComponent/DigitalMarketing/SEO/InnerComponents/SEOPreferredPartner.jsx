import React from 'react';
import { motion } from 'framer-motion';
import './seo-dark.css';

// Import correct downloaded assets from reference site
import iconExpert from '../../../../../assets/images/seo-expert-near-me.webp';
import iconMarketing from '../../../../../assets/images/seo-marketing-company.webp';
import iconNearMe from '../../../../../assets/images/seo-near-me.webp';
import mainIllustration from '../../../../../assets/images/seo-kolkata.webp';
import bgShape1 from '../../../../../assets/images/seo-service-company.webp';

const SEOPreferredPartner = () => {
  const partnerPoints = [
    { title: "Trusted Google Partner", icon: iconExpert },
    { title: "Google Certified Team", icon: iconMarketing },
    { title: "Seamless Communication", icon: iconMarketing },
    { title: "55+ Creative Brains", icon: iconNearMe },
    { title: "Global Exposure", icon: iconNearMe },
    { title: "ROI Driven Company", icon: iconNearMe },
  ];

  return (
    <section className="seo-ref-clone-section pt-5 pb-5 position-relative" style={{ backgroundColor: '#1d193a' }}>
      <div className="container position-relative z-2 pt-4 pb-4">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="seo-ref-clone-title text-white fw-bold mb-5 pb-3"
        >
          Why We Alll Would Be Your Preferred Marketing Partner?
        </motion.h2>

        <div className="row align-items-center position-relative">
          {/* Left: 6-Pill Grid */}
          <div className="col-lg-6 mb-5 mb-lg-0 z-2">
            <div className="seo-ref-pill-grid">
              {partnerPoints.map((point, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="seo-ref-pill"
                  key={idx}
                >
                  <div className="ref-pill-icon-box">
                    <img src={point.icon} alt={point.title} className="ref-pill-img" />
                  </div>
                  <h3 className="ref-pill-title m-0 text-white">{point.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Reference Illustration (Absolute positioned on desktop per reference) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-lg-6"
          >
            <img
              src={mainIllustration}
              alt="We Alll SEO Partner"
              className="seo-ref-main-img img-fluid"
            />
          </motion.div>

        </div>
      </div>

      {/* Background decorative shapes */}
      <img src={bgShape1} alt="Shape" className="seo-ref-shape-plane position-absolute" style={{ bottom: '5%', left: '8%', width: '120px', opacity: 0.6 }} />
      <div className="seo-ref-shape-triangle position-absolute" style={{ bottom: '15%', left: '4%', width: '0', height: '0', borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '25px solid transparent', borderBottomColor: 'rgba(255, 165, 0, 0.4)' }}></div>
    </section>
  );
};

export default SEOPreferredPartner;

