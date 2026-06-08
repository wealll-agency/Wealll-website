import React from 'react';
import { motion } from 'framer-motion';
import './ecommerce-dark.css';

const platforms = [
  {
    id: 1,
    name: "Adobe Commerce",
    desc: "Provide a reliable and personalised shopping experience with the composable e-commerce platform.",
    icon: "A", /* Will use text or img for icon */
    color: "#EB1000",
    delay: 0.1
  },
  {
    id: 2,
    name: "Commercetools",
    desc: "Build and run exceptional storefronts with remarkable simplicity, high speed, and boundless scalability.",
    icon: "C",
    color: "#0064FF",
    delay: 0.2
  },
  {
    id: 3,
    name: "SAP Hybris",
    desc: "Ensure effective customer data management and personalised customer experiences with the CRM tool.",
    icon: "S",
    color: "#008FD3",
    delay: 0.3
  },
  {
    id: 4,
    name: "Shopify",
    desc: "Launch comprehensive and customisable eCommerce stores designed for high-growth and massive scale.",
    icon: "🛍️",
    color: "#95BF47",
    delay: 0.4
  },
  {
    id: 5,
    name: "Salesforce",
    desc: "Unify your customer journey and unlock the power of seamless multi-channel commerce functionality.",
    icon: "☁️",
    color: "#00A1E0",
    delay: 0.5
  },
  {
    id: 6,
    name: "BigCommerce",
    desc: "Enterprise scale eCommerce platform powering thousands of fast-growing B2C and B2B businesses offline.",
    icon: "B",
    color: "#121118",
    delay: 0.6
  }
];

const EcommercePlatforms = () => {
  return (
    <section className="ecom-platforms-section py-5">
      <div className="container position-relative z-1 pt-5 pb-5">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center top_info mb-5 pb-4"
        >
          <div className="d-inline-flex border border-secondary rounded-pill px-4 py-2 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <span className="text-uppercase tracking-widest fw-semibold" style={{ color: '#c084fc', letterSpacing: '2px', fontSize: '12px' }}>Platform Expertise</span>
          </div>
          <h2 className="display-4 fw-bolder text-white mb-3">
            Ecommerce Development <br />
            <span className="ecom-title-gradient">Platforms</span>
          </h2>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {platforms.map((platform) => (
            <div className="col-lg-4 col-md-6" key={platform.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: platform.delay }}
                className="h-100"
              >
                {/* Advanced Animated Glass Card */}
                <div className="ecom-platform-card" style={{ '--platform-color': platform.color }}>
                  <div className="ecom-platform-border"></div>

                  <div className="ecom-platform-inner">
                    <div className="ecom-platform-icon-box" style={{ background: platform.color }}>
                      {platform.icon}
                    </div>

                    <h3 className="text-white fs-4 fw-bold mt-4 mb-3">{platform.name}</h3>
                    <p className="text-secondary fs-6 lh-lg mb-4 flex-grow-1">
                      {platform.desc}
                    </p>

                    <a href="#contact" className="ecom-platform-link mt-auto">
                      Learn more
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-2 ecom-arrow-icon">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommercePlatforms;
