import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiBookOpen, FiShoppingBag, FiTool, FiHome, FiTrendingUp } from 'react-icons/fi';
import './laravel-dark.css';

const industries = [
  { icon: <FiActivity />, name: "Healthcare" },
  { icon: <FiBookOpen />, name: "Education" },
  { icon: <FiShoppingBag />, name: "Retail" },
  { icon: <FiTool />, name: "Construction" },
  { icon: <FiHome />, name: "Real Estate" },
  { icon: <FiTrendingUp />, name: "Finance" },
  { icon: <FiActivity />, name: "Fitness" },
  { icon: <FiShoppingBag />, name: "Ecommerce" }
];

const LaravelIndustries = () => {
  return (
    <section className="lar-dark-section py-5 position-relative border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="container py-5">
        <div className="text-center mb-5 pb-4">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-danger fw-bold text-uppercase mb-3" 
            style={{ letterSpacing: '2px', fontSize: '14px' }}
          >
            Business Verticals
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="display-5 fw-bolder text-white mb-4"
          >
            Laravel Development Services <br />
            <span className="text-secondary fw-normal fs-3">for Various Industries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary mx-auto fs-5 lh-lg" 
            style={{ maxWidth: '900px' }}
          >
            <strong className="text-white">We Alll</strong> holds a high reputation as an advanced web application development company in India. Our team's agility, robust infrastructure, and on-time deliveries have made us the trusted choice across different sectors.
          </motion.p>
        </div>

        <div className="lar-hex-container">
          <div className="lar-hex-grid">
            {industries.map((ind, index) => (
              <div className="lar-hex-item-wrapper" key={index}>
                <motion.div 
                  className="lar-hex-item"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <div className="lar-hex-content">
                    <div className="lar-hex-icon">
                      {ind.icon}
                    </div>
                    <h4 className="lar-hex-title">{ind.name}</h4>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaravelIndustries;
