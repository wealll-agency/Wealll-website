import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './mern-dark.css';
import '../../WebsiteDevelopment/InnerComponents/website-dev-dark.css';

// Reusing portfolio images from the theme
const port1 = mediaUrl("assets/images/portfolio_website1.jpeg");
const port2 = mediaUrl("assets/images/portfolio_website2.jpeg");
const port3 = mediaUrl("assets/images/portfolio_website3.jpeg");
const port4 = mediaUrl("assets/images/portfolio_website4.jpeg");
import { mediaUrl } from "../../../../../config/media";

const categories = ["All", "Custom Web App", "Single Page App", "API Integration"];

const portfolioData = [
  { id: 1, title: 'Retail E-commerce SPA', category: 'Single Page App', img: port1 },
  { id: 2, title: 'Social Community Hub', category: 'Custom Web App', img: port2 },
  { id: 3, title: 'Real Estate Marketplace', category: 'Custom Web App', img: port3 },
  { id: 4, title: 'Healthcare Patient Portal', category: 'API Integration', img: port4 },
  { id: 5, title: 'Enterprise Dashboard', category: 'Single Page App', img: port1 },
  { id: 6, title: 'Education Platform', category: 'Custom Web App', img: port2 },
  { id: 7, title: 'Smart Farming IoT API', category: 'API Integration', img: port3 },
  { id: 8, title: 'On-Demand Delivery', category: 'Custom Web App', img: port4 },
];

const MernPortfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <section className="web-dev-dark-bg py-5 position-relative border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#0a0a14' }}>
      <div className="container-fluid px-4 position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 pb-3"
        >
          <h2 className="display-5 fw-bold mb-3 text-white">
            Our MERN Stack <span className="mern-gradient-text" style={{ textShadow: '0 0 15px rgba(97, 218, 251, 0.4)' }}>Portfolio</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 mb-2 fw-semibold" style={{ maxWidth: '800px', color: 'var(--mern-accent-blue) !important', letterSpacing: '1px' }}>
            Showcasing High-Performance Applications
          </p>
          <p className="text-light fs-6 mx-auto opacity-75" style={{ maxWidth: '900px'}}>
            Explore our curated selection of Custom Web Apps, SPAs, and API Integrations built with the MERN stack.
          </p>
        </motion.div>

        {/* Custom Neon Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`portfolio-tab-btn ${activeTab === cat ? 'active' : ''}`}
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
                <div className="portfolio-item d-flex flex-column h-100 gap-3 group">
                  {/* The Image Window with Hover Scroll */}
                  <div className="portfolio-scroll-container">
                    <img src={item.img} alt={item.title} className="portfolio-scroll-img" loading="lazy" />
                    
                    {/* View Project Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-opacity" style={{ background: 'rgba(97, 218, 251, 0.2)', transition: 'opacity 0.3s ease', opacity: 0 }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0'} >
                        <span className="btn text-black rounded-pill px-4 py-2" style={{ background: 'var(--mern-accent-green)', fontWeight: '600' }}>View App</span>
                    </div>
                  </div>
                  
                  {/* Text Details - Dark theme white text */}
                  <div className="px-2">
                    <span className="fw-semibold text-uppercase d-block mb-1" style={{ color: 'var(--mern-accent-blue)', fontSize: '13px', letterSpacing: '1px' }}>{item.category}</span>
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

export default MernPortfolio;
