import React from 'react';
import { motion } from 'framer-motion';
import './seo-dark.css';

const SEOBenefits = () => {
  return (
    <section className="seo-benefits-section position-relative">
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          
          {/* Left: Text Content & Testimonial */}
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <h2 className="seo-section-title mb-4">
              How Our SEO Services <br/>
              <span className="seo-title-gradient">Benefit Your Business</span>
            </h2>
            
            <p className="seo-normal-text mb-4">
              When our clients decide to update their digital strategy, they understand the critical need to invest in SEO. Many are pleasantly surprised when their organic traffic experiences massive year-over-year growth through our targeted approaches.
            </p>
            
            <p className="seo-normal-text mb-5">
              And that's not all! Seamless on-page and technical optimizations consistently help quadruple their conversions. In the end, partnering with <strong>We Alll</strong> for SEO is a solid, high-yield investment.
            </p>

            <div className="seo-testimonial-box">
              <div className="quote-mark">"</div>
              <p className="fst-italic text-light mb-0 position-relative z-2">
                Undoubtedly, SEO is one of the most important aspects of online marketing. It can help businesses improve their website ranking, generate more leads, and boost sales.
              </p>
            </div>
          </div>

          {/* Right: Neon Elevation Cards */}
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-sm-6">
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="seo-neon-card"
                >
                  <div className="neon-value val-primary">80%</div>
                  <div className="neon-label">Organic Traffic Increase</div>
                  <div className="neon-glow-bg bg-primary"></div>
                </motion.div>
              </div>
              
              <div className="col-sm-6 mt-lg-5">
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="seo-neon-card"
                >
                  <div className="neon-value val-secondary">4x</div>
                  <div className="neon-label">Conversion Boost</div>
                  <div className="neon-glow-bg bg-secondary"></div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOBenefits;
