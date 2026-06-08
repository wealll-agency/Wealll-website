import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './woocommerce-dark.css';

const benefits = [
  "Multi-currency Handling",
  "Promotional Tools",
  "Scalable Hosting",
  "Price Calculators",
  "Payment Gateways",
  "Omnichannel Sync",
  "Smart Reorder Sync",
  "Modular Architecture",
  "Deep Analytics",
  "Multi-site Control",
  "User Segmentation",
  "Advanced Filtering"
];

const WoocommerceBenefits = () => {
  return (
    <section className="woo-dark-section capability_section py-5">
      <div className="woo_capabality_container container py-5">
        <div className="top_info text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px' }}>Capabilities</h6>
          <h2 className="display-4 fw-bolder text-white">
            Supercharge your store <br />
            <span className="woo-title-gradient">with WooCommerce</span>
          </h2>
        </div>

        <div className="row woo_capability_row g-4 justify-content-center mx-0">
          {benefits.map((benefit, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 px-2 mb-4" key={index}>
              <div className="woo-prism-card p-4 h-100 position-relative" style={{ background: '#0f121d', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="d-flex align-items-center justify-content-between h-100">
                  <div className="d-flex align-items-start mb-0">
                    <div className="woo-dot mt-2 me-3 flex-shrink-0"></div>
                    <span className="text-white fw-bold small lh-base">{benefit}</span>
                  </div>
                  <div className="d-flex justify-content-end">
                    <FiArrowRight className="text-primary opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoocommerceBenefits;
