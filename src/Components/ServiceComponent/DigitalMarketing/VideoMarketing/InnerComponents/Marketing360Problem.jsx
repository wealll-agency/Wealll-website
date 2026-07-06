import React from 'react';
import { motion } from 'framer-motion';
import { FiShuffle, FiUserX, FiEyeOff, FiTrendingDown } from 'react-icons/fi';
import './marketing360-dark.css';

const Marketing360Problem = () => {
  return (
    <section className="mk360-problem-section py-5">
      <div className="container position-relative z-2 py-5">
        <div className="row align-items-center g-5">
          
          {/* Left: Dummy Image Wrapper */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mk360-image-wrapper"
            >
              <div className="mk360-image-glow"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Marketing Dashboard Visualization" 
                className="img-fluid mk360-premium-img" 
              loading="lazy" />
              
              {/* Floating decorative badge */}
              <div className="mk360-floating-badge top-right">
                <FiTrendingDown className="text-danger me-2" />
                <span className="small fw-bold">High Acquisition Costs</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Premium Staggered Content & Cards */}
          <div className="col-lg-7 pl-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mk360-section-title mb-4" style={{ fontSize: '3.5rem' }}>
                Why Most Marketing <br/>
                <span className="mk360-title-gradient" style={{ backgroundImage: 'linear-gradient(135deg, #ff4b4b, #ff7e5f)' }}>Fails Today</span>
              </h2>
              <p className="mk360-text-muted mb-5 lead" style={{ fontSize: '1.15rem' }}>
                When marketing channels operate in silos, you lose the compound effect of a unified digital presence. This is what most agencies miss limitlessly burning budgets.
              </p>

              <div className="mk360-problem-cards-stack">
                <div className="mk360-enhanced-card card-1">
                  <div className="icon-box"><FiShuffle /></div>
                  <div className="card-content">
                    <h5>Disjointed Strategy</h5>
                    <p>SEO team works completely separately from your Ads team.</p>
                  </div>
                </div>

                <div className="mk360-enhanced-card card-2">
                  <div className="icon-box"><FiEyeOff /></div>
                  <div className="card-content">
                    <h5>Creative Mismatch</h5>
                    <p>Creatives don’t align with landing pages resulting in deep friction.</p>
                  </div>
                </div>

                <div className="mk360-enhanced-card card-3">
                  <div className="icon-box"><FiUserX /></div>
                  <div className="card-content">
                    <h5>No Unified Vision</h5>
                    <p>The lack of a unified strategy causes severe audience drop-off.</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Marketing360Problem;
