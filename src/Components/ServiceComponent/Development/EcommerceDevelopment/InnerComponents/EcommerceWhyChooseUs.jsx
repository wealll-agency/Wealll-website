import React from 'react';
import { motion } from 'framer-motion';
import './ecommerce-dark.css';

const EcommerceWhyChooseUs = () => {
  return (
    <section className="ecom-why-us-section py-5" style={{ backgroundColor: '#070913' }}>
      <div className="container position-relative z-1 pt-5 pb-5">
        <div className="row align-items-center">
          
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-inline-flex border border-secondary rounded-pill px-4 py-2 mb-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <span className="text-uppercase tracking-widest fw-semibold" style={{ color: '#10b981', letterSpacing: '2px', fontSize: '12px' }}>Why Us</span>
              </div>
              <h2 className="display-4 fw-bolder text-white mb-4">
                Why Choose Us for <span className="ecom-title-gradient">Ecommerce Development Services?</span>
              </h2>
              <p className="text-secondary fs-5 mb-5 lh-lg pe-lg-5">
                Are you on the verge of choosing a reliable digital partner to trigger your ecommerce development process? Let us tell you what makes us the best ecommerce development company in India, and why you should consider choosing us.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-md-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-100"
                >
                  <div className="p-4 border rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.05) !important' }}>
                    <div className="ecom-service-icon mb-4" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#c084fc' }}>
                      🏆
                    </div>
                    <h4 className="text-white fw-bold mb-3">Certified Experts</h4>
                    <p className="text-secondary fs-6">
                      Our team consists of industry-certified developers and designers who build world-class reliable eCommerce infrastructures.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="col-md-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-100 mt-md-5"
                >
                  <div className="p-4 border rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.05) !important' }}>
                    <div className="ecom-service-icon mb-4" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                      📈
                    </div>
                    <h4 className="text-white fw-bold mb-3">Boost Conversions</h4>
                    <p className="text-secondary fs-6">
                      Ensure a flawless eCommerce experience with conversion-optimized UI/UX that drives engagement and sales growth.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcommerceWhyChooseUs;
