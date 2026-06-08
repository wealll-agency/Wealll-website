import React from 'react';
import { motion } from 'framer-motion';
import './marketing360-dark.css';

const frameworkSteps = [
  { step: "01", name: "Discover", title: "Audience & Market Insight", color: "#00f2fe", position: "top" },
  { step: "02", name: "Strategize", title: "Unified Channel Planning", color: "#4facfe", position: "bottom" },
  { step: "03", name: "Execute", title: "Deployment & Creative", color: "#b026ff", position: "top" },
  { step: "04", name: "Optimize", title: "Data-Driven Iteration", color: "#ff4b4b", position: "bottom" },
  { step: "05", name: "Scale", title: "Budget Expansion & ROI", color: "#00f2fe", position: "top" }
];

const Marketing360Framework = () => {
  return (
    <section className="mk360-framework-section py-5 my-5 position-relative">
      <div className="container position-relative z-2 py-5">
        <div className="text-center mb-5 pb-5 cust_padding">
          <h2 className="mk360-section-title mb-3 text-white">
            Our <span className="mk360-title-gradient">Life 360°</span> Growth Framework
          </h2>
          <p className="mk360-text-muted mx-auto" style={{ maxWidth: '600px' }}>
            A proprietary sequential methodology that guarantees scalable, long-term brand dominance.
          </p>
        </div>

        {/* Horizontal Glowing Timeline Ribbon */}
        <div className="mk360-timeline-ribbon-container pb-5">
          {/* The glowing track */}
          <div className="ribbon-track"></div>

          <div className="row cust_row g-0 position-relative w-100">
            {frameworkSteps.map((item, idx) => (
              <div className="col ribbon-col text-center" key={idx}>
                {/* Connecting Node */}
                <div className="ribbon-node" style={{ backgroundColor: item.color, boxShadow: `0 0 20px ${item.color}` }}>
                  <span className="node-number">{item.step}</span>
                </div>

                {/* Alternating Content Cards */}
                <motion.div
                  initial={{ opacity: 0, y: item.position === 'top' ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className={`ribbon-card card-${item.position}`}
                  style={{ borderTopColor: item.position === 'top' ? item.color : 'transparent', borderBottomColor: item.position === 'bottom' ? item.color : 'transparent' }}
                >
                  <h5 className="ribbon-name">{item.name}</h5>
                  <p className="ribbon-title">{item.title}</p>
                </motion.div>

                {/* Stem connector */}
                <div className={`ribbon-stem stem-${item.position}`}></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Marketing360Framework;
