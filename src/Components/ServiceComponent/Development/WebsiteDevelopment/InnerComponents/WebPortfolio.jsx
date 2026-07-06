import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './website-dev-dark.css';

// Importing dummy images from assets
const port1 = mediaUrl("assets/images/portfolio_website1.jpeg");
const port2 = mediaUrl("assets/images/portfolio_website2.jpeg");
const port3 = mediaUrl("assets/images/portfolio_website3.jpeg");
const port4 = mediaUrl("assets/images/portfolio_website4.jpeg");
import { mediaUrl } from "../../../../../config/media";

const categories = ["All", "UI/UX Design", "Graphic Design", "Logo Design"];

// Added dummy elements to fill out a 4-column layout properly for testing
const portfolioData = [
  { id: 1, title: 'Music That Moves You', category: 'UI/UX Design', img: port1 },
  { id: 2, title: 'Arena Animation', category: 'Graphic Design', img: port2 },
  { id: 3, title: 'Balloon Pro Creating Moments', category: 'Logo Design', img: port3 },
  { id: 4, title: 'Tech Startup Hub', category: 'UI/UX Design', img: port4 },
  { id: 5, title: 'Corporate Identity', category: 'Logo Design', img: port1 },
  { id: 6, title: 'Medical Dashboard', category: 'UI/UX Design', img: port2 },
  { id: 7, title: 'E-commerce Redesign', category: 'Graphic Design', img: port3 },
  { id: 8, title: 'Fitness App Platform', category: 'UI/UX Design', img: port4 },
];

const WebPortfolio = () => {
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
            Our Web Development <span className="web-dev-gradient-text">Portfolio</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 mb-2" style={{ maxWidth: '800px', color: '#c084fc' }}>
            Crafting Digital Excellence
          </p>
          <p className="text-light fs-6 mx-auto opacity-75" style={{ maxWidth: '900px'}}>
            Explore our Kolkata-based Website Development and Design portfolio, showcasing the expertise of our custom web development company.
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
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-opacity" style={{ background: 'rgba(147, 51, 234, 0.4)', transition: 'opacity 0.3s ease', opacity: 0 }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0'} >
                        <span className="btn text-white rounded-pill px-4 py-2" style={{ background: '#ec4899', fontWeight: '600' }}>View Project</span>
                    </div>
                  </div>
                  
                  {/* Text Details - Dark theme white text */}
                  <div className="px-2">
                    <span className="fw-semibold text-uppercase d-block mb-1" style={{ color: '#ec4899', fontSize: '13px', letterSpacing: '1px' }}>{item.category}</span>
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

export default WebPortfolio;
