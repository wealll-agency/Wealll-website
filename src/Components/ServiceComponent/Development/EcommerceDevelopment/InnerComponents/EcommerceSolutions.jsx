import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiGlobe, FiShoppingCart, FiSmartphone, FiZap, FiUser, FiMonitor, FiDatabase, FiSettings } from 'react-icons/fi';
import './ecommerce-dark.css';

const solutions = [
  {
    icon: <FiCpu />,
    title: "Micro-services-based Ecommerce",
    desc: "Create ecommerce applications as an integration of separate components, microservices, or connected with REST APIs."
  },
  {
    icon: <FiGlobe />,
    title: "Ecommerce portals",
    desc: "Engage in buyer-seller trading transactions and streamline the buying process. Transit shoppers to an online channel."
  },
  {
    icon: <FiShoppingCart />,
    title: "Marketplaces",
    desc: "A platform to create and operate marketplaces and connect securely with other organisations."
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile ecommerce apps",
    desc: "Shop online, browse catalogues, add wishlists, and finish purchases easily. Streamlines payment processing."
  },
  {
    icon: <FiZap />,
    title: "Headless commerce",
    desc: "Architecture that separates the front-end (user experience) and back-end (business logic), allowing freedom in choosing tools."
  },
  {
    icon: <FiUser />,
    title: "B2C ecommerce",
    desc: "A model where businesses provide goods and services directly to consumers with no middlemen, focusing on individual buyer experiences."
  },
  {
    icon: <FiMonitor />,
    title: "POS",
    desc: "A Point of Sale system to process transactions, manage inventory, and handle customer data effectively while simplifying checkout."
  },
  {
    icon: <FiDatabase />,
    title: "Ecommerce CRM",
    desc: "Automate and manage customer data and interactions for increased sales and loyalty. Personalises the shopping experience."
  },
  {
    icon: <FiSettings />,
    title: "Ecommerce ERP",
    desc: "Manage and integrate core processes like inventory, order processing, and accounting for accuracy across all channels."
  }
];

const EcommerceSolutions = () => {
  return (
    <section className="ecom-solutions-v2-section py-5 z-1">
      <div className="container py-5 mt-4">
        
        <div className="row">
          {/* Left Column: Title & Description */}
          <div className="col-lg-4 mb-5 mb-lg-0 pe-lg-5">
            <div className="ecom-sticky-container">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="display-4 fw-bolder text-white mb-4">
                  Ecommerce <br /> Development <br />
                  <span className="ecom-title-gradient">Solutions We Offer</span>
                </h2>
                <p className="fs-5 text-secondary lh-lg mb-5" style={{ fontWeight: '400' }}>
                  We deliver advanced ecommerce development solutions to optimise sales, improve conversions, and boost revenue. Our highly flexible solutions fit businesses of all sizes.
                </p>
                <a href="#contact" className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold ecom-glow-btn">
                   Let's Talk <span className="ms-2">→</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Beautifully Refined Grid (Stable) */}
          <div className="col-lg-8">
            <div className="row g-4">
              {solutions.map((item, index) => (
                <div className="col-xl-4 col-md-6 mb-2" key={index}>
                  <div className="ecom-solution-premium-card">
                    <div className="ecom-card-icon-glow mb-4">
                      {item.icon}
                    </div>
                    <h5 className="fw-bold mb-3 text-white">{item.title}</h5>
                    <p className="text-secondary mb-0 lh-base" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcommerceSolutions;
