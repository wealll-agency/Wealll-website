import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiTarget, FiLayers, FiEdit3, FiCheckCircle, FiSearch as FiSeo, FiLifeBuoy } from 'react-icons/fi';
import './woocommerce-dark.css';

const steps = [
  { id: 1, icon: <FiSearch />, label: "Discover", desc: "Gain understanding of your goals and vision for your E-commerce business by examining needed functionalities." },
  { id: 2, icon: <FiTarget />, label: "Strategise", desc: "Devise a strategy for accomplishing goals, breaking down objectives into feasible tasks and timelines." },
  { id: 3, icon: <FiLayers />, label: "Structure", desc: "Work with the team to determine project scope, define requirements, and create a detailed development plan." },
  { id: 4, icon: <FiEdit3 />, label: "Create", desc: "Transform your envisioned E-commerce Store into a tangible reality with precision development." },
  { id: 5, icon: <FiCheckCircle />, label: "QA", desc: "Promise quality across all stages ensuring a dependable, bug-free, and high-performance online store." },
  { id: 6, icon: <FiSeo />, label: "SEO", desc: "Strategically enhance your presence attracting increased organic traffic to your e-commerce site." },
  { id: 7, icon: <FiLifeBuoy />, label: "Support", desc: "Continue to provide comprehensive support services even after store launch, as and when required." }
];

const WoocommerceApproach = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="woo-dark-section py-5">
      <div className="container py-5">
        <div className="text-center mb-5 pb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-4 fw-bolder"
          >
            Our <span className="woo-title-gradient">Approach</span>
          </motion.h2>
        </div>

        <div className="woo-process-stepper mb-5">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="d-flex flex-column align-items-center"
              style={{ width: '100px', cursor: 'pointer' }}
              onClick={() => setActiveTab(step.id)}
            >
              <div className={`woo-step-dot ${activeTab === step.id ? 'active' : ''}`}>
                <span style={{ fontSize: '1.2rem', color: activeTab === step.id ? '#fff' : '#8b9bb4' }}>
                  {step.icon}
                </span>
              </div>
              <span className={`mt-3 small fw-bold ${activeTab === step.id ? 'text-white' : 'text-secondary'}`}>
                {step.label}
              </span>
            </div>
          ))}
          {/* Connector Line */}
          <div className="position-absolute w-100" style={{ height: '2px', background: 'var(--woo-glass-border)', top: '20px', left: '0', zIndex: -1 }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="woo-glow-card p-5 text-center"
              >
                <h3 className="fw-bold mb-4">{steps.find(s => s.id === activeTab).label} Phase</h3>
                <p className="text-secondary fs-5 lh-lg mb-0">
                  {steps.find(s => s.id === activeTab).desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoocommerceApproach;
