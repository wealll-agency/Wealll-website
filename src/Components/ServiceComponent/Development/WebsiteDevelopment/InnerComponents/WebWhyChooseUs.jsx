import React from 'react';
import { motion } from 'framer-motion';
import './website-dev-dark.css';

const features = [
  { id: 1, title: 'Top-rated Design Experts', icon: '👨‍🎨', color: '#3b82f6', delay: 0 },
  { id: 2, title: 'Improve Conversion Rates', icon: '📈', color: '#8b5cf6', delay: 0.1 },
  { id: 3, title: 'Modern and Updated Technology', icon: '💡', color: '#ec4899', delay: 0.2 },
  { id: 4, title: 'Dedicated Support Team', icon: '🤝', color: '#f43f5e', delay: 0.3 },
];

const WebWhyChooseUs = () => {
  return (
    <section className="web-dev-dark-bg py-5 position-relative border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#0a0a14' }}>
      {/* Decorative glows */}
      <div className="position-absolute top-50 start-50 translate-middle rounded-circle" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }}></div>
      
      <div className="container position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 pb-4"
        >
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)'}}>
             <span className="text-uppercase fw-bold" style={{ color: '#ec4899', fontSize: '12px', letterSpacing: '2px' }}>Why Us</span>
          </div>
          <h2 className="display-4 fw-bold mb-3 text-white">
            Custom Web Development <span className="web-dev-gradient-text" style={{ background: 'linear-gradient(135deg, #3b82f6, #ec4899)', WebkitBackgroundClip: 'text' }}>for your Business</span>
          </h2>
          <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '800px' }}>
            Our custom web development services are backed by a skilled team dedicated to delivering innovative, tailormade solutions. Experience the difference of a truly premium partnership.
          </p>
        </motion.div>

        {/* 4 Square Grid - Exact match for reference #3 */}
        <div className="wcu-square-grid">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="wcu-square-card"
            >
              <div 
                className="wcu-square-icon" 
                style={{ color: feature.color, textShadow: `0 0 20px ${feature.color}50` }}
              >
                {feature.icon}
              </div>
              <h3 className="wcu-square-title mb-2">{feature.title}</h3>
              <p className="text-secondary small mt-2 m-0" style={{ maxWidth: '250px' }}>Industry-leading solutions tailored to your brand.</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebWhyChooseUs;
