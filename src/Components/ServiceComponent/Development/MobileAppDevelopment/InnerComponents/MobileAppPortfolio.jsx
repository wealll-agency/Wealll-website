import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './mobile-dark.css';

// Importing generated images
import port1 from '../../../../../assets/images/mobile_port1.png';
import port2 from '../../../../../assets/images/mobile_port2.png';
import port3 from '../../../../../assets/images/mobile_port3.png';
import port4 from '../../../../../assets/images/mobile_port4.png';

const categories = ["All", "iOS App", "Android App", "Hybrid App", "UI/UX Design"];

const portfolioData = [
  { id: 1, title: 'FitnessTrack Pro', category: 'iOS App', img: port1 },
  { id: 2, title: 'Luxury Sneaker App', category: 'Android App', img: port2 },
  { id: 3, title: 'Global Food Delivery', category: 'Hybrid App', img: port3 },
  { id: 4, title: 'SmartInvest Fintech', category: 'UI/UX Design', img: port4 },
  { id: 5, title: 'HealthMonitor IoT', category: 'iOS App', img: port1 },
  { id: 6, title: 'QuickCart Grocery', category: 'Android App', img: port2 },
  { id: 7, title: 'SecureWallet Pay', category: 'UI/UX Design', img: port3 },
  { id: 8, title: 'SocialConnect Platform', category: 'Hybrid App', img: port4 },
];

const MobileAppPortfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <section className="mobile-dark-section py-5 position-relative border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#050710' }}>
      <div className="container-fluid px-4 position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 pb-3"
        >
          <span className="mobile-section-badge">Case Studies</span>
          <h2 className="display-4 fw-bold mb-3 text-white">
            Our Mobile App Development <span className="mobile-title-gradient">Portfolio</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 mb-2" style={{ maxWidth: '800px' }}>
            Transforming Ideas into Interactive Realities
          </p>
          <p className="text-light fs-6 mx-auto opacity-75" style={{ maxWidth: '900px'}}>
            Discover how We Alll has helped businesses across the globe dominate the mobile market with feature-rich, high-performance applications.
          </p>
        </motion.div>

        {/* Custom Neon Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`mobile-port-tab-btn ${activeTab === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - 4 Columns */}
        <motion.div layout className="row gy-5 mx-0 w-100">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="col-12 col-md-6 col-lg-4 col-xl-3"
              >
                <div className="mobile-port-item group">
                  {/* The Image Window with Hover Scroll */}
                  <div className="mobile-port-scroll-container">
                    <img src={item.img} alt={item.title} className="mobile-port-scroll-img" />
                    
                    {/* View Project Overlay */}
                    <div className="mobile-port-overlay">
                        <span className="btn text-white rounded-pill px-4 py-2" style={{ background: 'var(--mobile-accent-primary)', fontWeight: '600', boxShadow: '0 0 15px var(--mobile-accent-primary)' }}>View Project</span>
                    </div>
                  </div>
                  
                  {/* Text Details */}
                  <div className="px-2">
                    <span className="fw-semibold text-uppercase d-block mb-1" style={{ color: 'var(--mobile-accent-glow)', fontSize: '13px', letterSpacing: '1px' }}>{item.category}</span>
                    <h3 className="fs-5 fw-bold text-white mb-0">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppPortfolio;
