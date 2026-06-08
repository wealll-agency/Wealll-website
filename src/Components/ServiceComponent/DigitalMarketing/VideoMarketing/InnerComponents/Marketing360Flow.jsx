import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiMousePointer, FiInstagram, FiVideo, FiCheckCircle, FiRefreshCw } from 'react-icons/fi';
import './marketing360-dark.css';

const flowSteps = [
  { icon: <FiMonitor />, label: "User Sees Ad", desc: "Targeted PPC outreach" },
  { icon: <FiMousePointer />, label: "Visits Website", desc: "Optimized landing experience" },
  { icon: <FiInstagram />, label: "Retargeted on IG", desc: "Cross-platform tracking" },
  { icon: <FiVideo />, label: "Engages with Reels", desc: "High-retention creative" },
  { icon: <FiCheckCircle />, label: "Converts", desc: "Frictionless checkout" },
  { icon: <FiRefreshCw />, label: "Remarketed", desc: "Loyalty & retention loops" }
];

const Marketing360Flow = () => {
  return (
    <section className="mk360-flow-section py-5 my-4 position-relative border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      {/* Background animated grid */}
      <div className="mk360-flow-bg-grid"></div>

      <div className="container position-relative z-2 py-5">
        <h2 className="mk360-section-title text-center mb-5 pb-4">
          How Our <span className="mk360-title-gradient">Omni-Channel Strategy</span> Works
        </h2>

        {/* Infinite Loop Timeline */}
        <div className="mk360-timeline-wrapper">
          <div className="mk360-timeline-line"></div>

          <div className="row g-4 position-relative">
            {flowSteps.map((step, idx) => (
              <div className="col-lg-2 col-md-4 col-sm-6 text-center mk360-flow-node-wrapper" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="mk360-flow-node"
                >
                  <div className="node-icon-wrapper">
                    {step.icon}
                  </div>
                  <h6 className="node-label text-white mt-3 fw-bold">{step.label}</h6>
                  <p className="node-desc small mb-0">{step.desc}</p>
                </motion.div>
                {/* Visual connector for desktop */}
                {idx < flowSteps.length - 1 && <div className="flow-connector d-none d-lg-block"></div>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Marketing360Flow;
