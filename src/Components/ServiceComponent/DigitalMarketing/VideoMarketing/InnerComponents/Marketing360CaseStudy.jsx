import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiActivity, FiSearch } from 'react-icons/fi';
import './marketing360-dark.css';

const Marketing360CaseStudy = () => {
  return (
    <section className="mk360-casestudy-section py-5 position-relative border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="container position-relative z-2 py-5">
        <div className="text-center mb-5 pb-4 cust_padding">
          <h2 className="mk360-section-title mb-3 text-white">
            Results from Our <span className="mk360-title-gradient">360° Execution</span>
          </h2>
          <p className="mk360-text-muted mx-auto" style={{ maxWidth: '600px' }}>
            We don't measure success by clicks; we measure it by revenue.
          </p>
        </div>

        {/* Financial Dashboard Layout */}
        <div className="row g-4 justify-content-center">

          <div className="col-lg-4 col-md-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mk360-dashboard-widget"
            >
              <div className="widget-header">
                <FiTrendingUp className="text-success widget-icon" />
                <span className="small text-uppercase">Revenue Growth</span>
              </div>
              <div className="widget-body mt-3">
                <h3 className="display-4 fw-bolder text-white m-0">
                  <span className="text-success fs-5">₹50K ➔</span> ₹35L
                </h3>
                <p className="text-success small mt-2">+6,900% ROI in 6 Months</p>

                {/* SVG Trend Line */}
                <svg viewBox="0 0 100 30" className="widget-trend-svg mt-3">
                  <path d="M0,30 L20,20 L40,25 L60,10 L80,15 L100,0" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" />
                  <path d="M0,30 L20,20 L40,25 L60,10 L80,15 L100,0 L100,30 L0,30 Z" fill="url(#successGradient)" opacity="0.2" />
                  <defs>
                    <linearGradient id="successGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#28a745" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-4 col-md-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mk360-dashboard-widget"
            >
              <div className="widget-header">
                <FiActivity className="text-info widget-icon" />
                <span className="small text-uppercase">Lead Generation</span>
              </div>
              <div className="widget-body mt-3">
                <h3 className="display-4 fw-bolder text-white m-0">
                  <span className="text-info fs-5">20 ➔</span> 450+
                </h3>
                <p className="text-info small mt-2">Qualified Monthly Leads</p>

                {/* SVG Bar Chart */}
                <div className="widget-bars-container mt-3">
                  <div className="widget-bar" style={{ height: '30%', background: '#17a2b8' }}></div>
                  <div className="widget-bar" style={{ height: '50%', background: '#17a2b8' }}></div>
                  <div className="widget-bar" style={{ height: '40%', background: '#17a2b8' }}></div>
                  <div className="widget-bar" style={{ height: '70%', background: '#17a2b8' }}></div>
                  <div className="widget-bar" style={{ height: '100%', background: '#17a2b8', boxShadow: '0 0 10px #17a2b8' }}></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-4 col-md-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mk360-dashboard-widget"
            >
              <div className="widget-header">
                <FiSearch className="text-warning widget-icon" />
                <span className="small text-uppercase">SEO Dominance</span>
              </div>
              <div className="widget-body mt-3">
                <h3 className="display-4 fw-bolder text-white m-0">
                  <span className="text-warning fs-5">#34 ➔</span> #1
                </h3>
                <p className="text-warning small mt-2">Ranking for 50+ Keywords</p>

                {/* SVG Rank Line */}
                <svg viewBox="0 0 100 30" className="widget-trend-svg mt-3">
                  <path d="M0,30 L20,30 L40,20 L60,10 L80,0 L100,0" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="80" cy="0" r="3" fill="#ffc107" />
                  <circle cx="100" cy="0" r="3" fill="#ffc107" />
                </svg>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Marketing360CaseStudy;
