import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiShoppingCart, FiRepeat } from 'react-icons/fi';
import './marketing360-dark.css';

const Marketing360Solution = () => {
  return (
    <section className="mk360-solution-section" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container position-relative z-2">
        <div className="text-center mb-5 pb-2">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mk360-section-title mb-4"
          >
            Our <span className="mk360-title-gradient">360° Marketing</span> Approach
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mk360-text-muted mx-auto" 
            style={{ maxWidth: '800px', fontSize: '1.2rem' }}
          >
            <strong>We don’t just offer services.</strong> We build a complete, self-sustaining marketing ecosystem where every channel seamlessly feeds into another to dominate your market.
          </motion.p>
        </div>

        {/* 3D Holographic Ecosystem Core */}
        <div className="mk360-ecosystem-hologram mt-5">
          
          {/* SVG Data Streams connecting nodes to core */}
          <svg className="hologram-lines" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            <path className="data-stream stream-1" d="M 500 300 Q 250 150 200 150" />
            <path className="data-stream stream-2" d="M 500 300 Q 750 150 800 150" />
            <path className="data-stream stream-3" d="M 500 300 Q 250 450 200 450" />
            <path className="data-stream stream-4" d="M 500 300 Q 750 450 800 450" />
          </svg>

          {/* Central 3D Core */}
          <div className="hologram-center">
            <div className="core-ring core-ring-1"></div>
            <div className="core-ring core-ring-2"></div>
            <div className="core-ring core-ring-3"></div>
            <div className="core-content">
              <h3 className="fw-bolder m-0 text-white" style={{ fontSize: '2.5rem', textShadow: '0 0 15px rgba(0,242,254,0.8)' }}>360°</h3>
              <span className="text-uppercase text-info fw-bold mt-1" style={{ letterSpacing: '4px', fontSize: '0.8rem' }}>Ecosystem</span>
            </div>
          </div>

          {/* Rich Holographic Data Nodes */}
          <div className="holo-node node-tl">
            <div className="holo-icon"><FiTarget /></div>
            <div className="holo-text">
              <h4>Traffic</h4>
              <p>SEO + Ads Targetting</p>
            </div>
          </div>
          
          <div className="holo-node node-tr">
            <div className="holo-icon"><FiHeart /></div>
            <div className="holo-text">
              <h4>Engagement</h4>
              <p>Social + Native Content</p>
            </div>
          </div>
          
          <div className="holo-node node-bl">
            <div className="holo-icon"><FiRepeat /></div>
            <div className="holo-text">
              <h4>Retention</h4>
              <p>Remarketing + Auto Loops</p>
            </div>
          </div>
          
          <div className="holo-node node-br">
            <div className="holo-icon"><FiShoppingCart /></div>
            <div className="holo-text">
              <h4>Conversion</h4>
              <p>Funnels + Global CRO</p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Marketing360Solution;
