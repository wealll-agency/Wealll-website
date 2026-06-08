import React from 'react';
import { motion } from 'framer-motion';
import './shopify-dark.css';

const ShopifyStats = () => {
  const stats = [
    { number: "30+", label: "PROJECTS DELIVERED" },
    { number: "10+", label: "CERTIFIED DEVELOPERS" },
    { number: "3+", label: "YEARS OF EXCELLENCE" }
  ];

  return (
    <section className="shopify-dark-section py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-4 fw-bolder text-white"
          >
            Your Trusted <span className="shopify-title-gradient">Shopify Agency</span>
          </motion.h2>
          <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '800px' }}>
            We work on intelligent interfaces that trigger Human and Machine interactions to ease your operations in a digital environment.
            Investing in future technologies, We Alll explores new possibilities to serve customers better.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div
                className="shopify-stat-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="shopify-stat-number">{stat.number}</div>
                <div className="text-white fw-bold opacity-75" style={{ letterSpacing: '2px', fontSize: '14px' }}>
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStats;
