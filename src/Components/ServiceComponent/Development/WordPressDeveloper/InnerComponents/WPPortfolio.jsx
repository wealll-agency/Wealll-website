import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './wordpress-dev-dark.css';

// Using dummy images
import port1 from '../../../../../assets/images/portfolio_website1.jpeg';
import port2 from '../../../../../assets/images/portfolio_website2.jpeg';
import port3 from '../../../../../assets/images/portfolio_website3.jpeg';
import port4 from '../../../../../assets/images/portfolio_website4.jpeg';

const categories = ["All", "eCommerce", "Corporate", "Blog", "Custom CMS"];

const portfolioData = [
  { id: 1, title: 'Fashion Hub Pro', category: 'eCommerce', img: port1 },
  { id: 2, title: 'TechNova Corporate', category: 'Corporate', img: port2 },
  { id: 3, title: 'Daily Travel Diaries', category: 'Blog', img: port3 },
  { id: 4, title: 'Medical Dashboard', category: 'Custom CMS', img: port4 },
  { id: 5, title: 'Fintech Solutions', category: 'Corporate', img: port1 },
  { id: 6, title: 'Organic Market', category: 'eCommerce', img: port2 },
  { id: 7, title: 'Foodie Review', category: 'Blog', img: port3 },
  { id: 8, title: 'EduLearn Portal', category: 'Custom CMS', img: port4 },
];

const WPPortfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All"
    ? portfolioData
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <section className="wp-dark-bg wp_portfolio py-5 position-relative border-top mb-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="wp_portfolio_container container-fluid px-4 position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 pb-3"
        >
          <h2 className="display-4 fw-bold mb-3 text-white">
            Our WordPress <span className="wp-gradient-text" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text' }}>Portfolio</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 mb-2" style={{ maxWidth: '800px', color: '#c084fc' }}>
            Showcasing Digital Excellence
          </p>
          <p className="text-light fs-6 mx-auto opacity-75" style={{ maxWidth: '900px' }}>
            Explore our Kolkata-based WordPress Development portfolio featuring our best e-commerce setups and custom CMS builds.
          </p>
        </motion.div>

        {/* Custom Dark Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`btn rounded-pill px-4 py-2 text-white fw-medium shadow-sm transition-all`}
              style={{
                background: activeTab === cat ? 'linear-gradient(135deg, #38bdf8, #8b5cf6)' : 'rgba(255,255,255,0.05)',
                border: activeTab === cat ? 'none' : '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Grid with Scroll Hover */}
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
                <div className="wp-portfolio-item d-flex flex-column h-100 gap-3 group" style={{ cursor: 'pointer' }}>

                  {/* The Image Window with Hover Scroll programmed in CSS */}
                  <div className="wp-portfolio-scroll-container">
                    <img src={item.img} alt={item.title} className="wp-portfolio-scroll-img" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(56, 189, 248, 0.4)', transition: 'opacity 0.3s ease', opacity: 0 }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0'} >
                      <span className="btn text-white rounded-pill px-4 py-2 fw-bold" style={{ background: '#3b82f6', border: '1px solid #fff' }}>Live Demo</span>
                    </div>
                  </div>

                  {/* Neon White/Blue Details */}
                  <div className="px-2">
                    <span className="fw-semibold text-uppercase d-block mb-1" style={{ color: '#38bdf8', fontSize: '13px', letterSpacing: '1px' }}>{item.category}</span>
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

export default WPPortfolio;
