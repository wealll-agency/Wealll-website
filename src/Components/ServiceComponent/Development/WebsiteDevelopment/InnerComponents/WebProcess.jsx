import React from 'react';
import { motion } from 'framer-motion';
import './website-dev-dark.css';

const processSteps = [
  { id: 1, title: 'Research', icon: '🔍', color: '#3b82f6' },
  { id: 2, title: 'Create', icon: '✏️', color: '#8b5cf6' },
  { id: 3, title: 'Analyze', icon: '📊', color: '#a855f7' },
  { id: 4, title: 'Optimize', icon: '⚙️', color: '#ec4899' },
  { id: 5, title: 'Run', icon: '🚀', color: '#f43f5e' },
];

const WebProcess = () => {
  return (
    <section className="web-dev-dark-bg py-5 position-relative border-top" style={{ borderColor: 'rgba(255,255,255,0.05)'}}>
      <div className="container position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 pb-4"
        >
          <h2 className="display-4 fw-bold mb-3 text-white">
            Our Website <span className="web-dev-gradient-text">Development Process</span>
          </h2>
          <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '800px' }}>
            Our expert web developers deliver flawless coding and ensure your website's functionality and responsiveness from start to finish.
          </p>
        </motion.div>

        {/* Stunning Process Timeline */}
        <div className="process-timeline-wrapper mx-auto" style={{ maxWidth: '1000px' }}>
          
          <div className="process-line-track">
             <div className="process-line-progress"></div>
          </div>
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.15 + 0.2
              }}
              className="process-step-item"
              style={{ '--step-color': step.color }}
            >
              <div 
                className="process-icon-circle"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <div className="process-ripple"></div>
                <span style={{ filter: `drop-shadow(0 0 10px ${step.color})` }}>
                  {step.icon}
                </span>
              </div>
              <h3 className="process-title">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProcess;
