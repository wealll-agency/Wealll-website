import React from 'react';
import { motion } from 'framer-motion';
import './seo-dark.css';

const SEOAddons = () => {
  const addons = [
    { title: "Article Content Writing", price: "Custom", desc: "Professionally researched and SEO-optimized blogs." },
    { title: "E-Commerce Integrations", price: "Custom", desc: "Advanced product schema & category optimization." },
    { title: "App Store Optimization", price: "Custom", desc: "Rank your mobile applications higher in app stores." }
  ];

  return (
    <section className="seo-addons-section pb-5 pt-3 mb-5">
      <div className="container position-relative z-2">
        <h3 className="text-center text-white mb-5 fw-bold"><span className="seo-title-gradient">Optional Addons</span></h3>
        
        <div className="row g-4 justify-content-center">
          {addons.map((addon, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="seo-addon-card text-center"
              >
                <h5 className="addon-title text-white fw-bold mb-3">{addon.title}</h5>
                <p className="seo-normal-text mb-4" style={{ fontSize: '0.95rem' }}>{addon.desc}</p>
                <div className="addon-price fw-bolder" style={{ color: 'var(--seo-accent-primary)' }}>
                  {addon.price} Quote
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOAddons;
