import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../WoocommerceDevelopment/InnerComponents/woocommerce-dark.css';

// Using existing assets
import port1 from '../../../../../assets/images/portfolio_website1.jpg';
import port2 from '../../../../../assets/images/portfolio_website2.jpg';
import port3 from '../../../../../assets/images/portfolio_website3.jpg';
import port4 from '../../../../../assets/images/portfolio_website4.jpg';

const categories = ["All", "B2B Store", "B2C Store", "Mobile App"];

const portfolioData = [
  { id: 1, title: 'Global Electronics Hub', category: 'B2B Store', img: port1 },
  { id: 2, title: 'Fresh Food Direct', category: 'B2C Store', img: port2 },
  { id: 3, title: 'Gadget Swipe App', category: 'Mobile App', img: port3 },
  { id: 4, title: 'Fashion Retail Pro', category: 'B2C Store', img: port4 },
  { id: 5, title: 'Industrial Supply Co', category: 'B2B Store', img: port1 },
  { id: 6, title: 'Healthy Bites', category: 'B2C Store', img: port2 },
  { id: 7, title: 'Trend Mobile Mart', category: 'Mobile App', img: port3 },
  { id: 8, title: 'Luxury Watches', category: 'B2C Store', img: port4 },
];

const EcommercePortfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <section className="woo-dark-section py-5 border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#070913' }}>
      <div className="container-fluid px-4 position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 pb-3"
        >
          <h2 className="display-4 fw-bold mb-3 text-white">
            Our E-commerce <span className="woo-title-gradient">Portfolio</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 mb-2" style={{ maxWidth: '800px' }}>
            Transforming Retail Ideas into Reality
          </p>
        </motion.div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`portfolio-tab-btn ${activeTab === cat ? 'active' : ''}`}
              style={{ padding: '10px 30px', borderRadius: '50px', border: '1px solid rgba(0,124,186,0.3)', background: activeTab === cat ? 'var(--woo-accent)' : 'transparent', color: '#fff', transition: '0.3s' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="row gy-5 mx-0 w-100">
          <AnimatePresence mode="popLayout">
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
                  <div className="portfolio-scroll-container rounded-4 overflow-hidden position-relative" style={{ height: '400px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src={item.img} alt={item.title} className="portfolio-scroll-img w-100" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-opacity" style={{ background: 'rgba(0, 124, 186, 0.4)', pointerEvents: 'none' }}>
                        <span className="btn text-white rounded-pill px-4 py-2" style={{ background: 'var(--woo-accent)', fontWeight: '600' }}>View Project</span>
                    </div>
                  </div>
                  <div className="px-2">
                    <span className="fw-semibold text-uppercase d-block mb-1" style={{ color: 'var(--woo-accent)', fontSize: '13px', letterSpacing: '1px' }}>{item.category}</span>
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

export default EcommercePortfolio;
