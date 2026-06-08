import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiStar, FiImage, FiFilter, FiMapPin } from 'react-icons/fi';
import './marketing360-dark.css';

const stackData = [
  {
    id: 1,
    icon: <FiTrendingUp />,
    title: "Traffic Generation",
    items: ["SEO (Technical + Local)", "Google Ads / PPC", "Marketplace Ads"]
  },
  {
    id: 2,
    icon: <FiStar />,
    title: "Brand Building",
    items: ["Social Media Management", "Influencer Marketing", "Content Strategy"]
  },
  {
    id: 3,
    icon: <FiImage />,
    title: "Creative Engine",
    items: ["Ad Creatives", "Reels / Shorts", "Product Shoots"]
  },
  {
    id: 4,
    icon: <FiFilter />,
    title: "Conversion System",
    items: ["Landing Pages", "Funnel Design", "CRO Optimization"]
  },
  {
    id: 5,
    icon: <FiMapPin />,
    title: "Offline Integration",
    items: ["Print Campaigns", "Outdoor Ads", "Event Marketing"]
  }
];

const Marketing360Stack = () => {
  return (
    <section className="mk360-stack-section py-5 position-relative">
      <div className="container position-relative z-2 py-5">
        <div className="text-center mb-5 pb-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mk360-section-title mb-3"
          >
            What’s Included in Our <span className="mk360-title-gradient">360° Services</span>
          </motion.h2>
          <p className="mk360-text-muted mx-auto" style={{ maxWidth: '700px' }}>
            A strategically layered approach orchestrating every facet of your brand's growth journey.
          </p>
        </div>

        {/* Multi-Layered Cybernetic Pillars */}
        <div className="mk360-pillars-container d-flex flex-column flex-lg-row gap-4 justify-content-center">
          {stackData.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mk360-cyber-pillar"
            >
              <div className="pillar-header">
                <div className="pillar-icon">{pillar.icon}</div>
                <h4 className="pillar-title">{pillar.title}</h4>
              </div>
              <div className="pillar-body">
                <ul className="list-unstyled p-0 m-0 pillar-list">
                  {pillar.items.map((item, idx) => (
                    <li key={idx}><span></span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pillar-glow-base"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing360Stack;
