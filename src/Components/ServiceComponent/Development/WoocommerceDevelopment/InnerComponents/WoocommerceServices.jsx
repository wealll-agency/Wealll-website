import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiLayout, FiZap, FiRefreshCcw, FiTool } from 'react-icons/fi';
import './woocommerce-dark.css';

const services = [
  { icon: <FiCode />, title: "Custom Plugin Development", desc: "We help businesses stay updated with customer demands by building tailored WooCommerce plugins. From features to functionality, we customize it all." },
  { icon: <FiSmartphone />, title: "PWA Development Services", desc: "Create online experiences that keep visitors engaged and drive them to buy. With eye-catching design and PWAs features that convert." },
  { icon: <FiLayout />, title: "Template Development", desc: "Craft visually appealing, mobile-responsive themes that attract traffic and boost engagement from countless designs to match your vision." },
  { icon: <FiZap />, title: "Optimization Services", desc: "Fine-tune your site for faster loading, better rankings, and higher traffic. We make sure Google finds you and customers stay longer." },
  { icon: <FiRefreshCcw />, title: "Migration Services", desc: "Moving platforms? We handle the entire migration process quickly and without interruptions. No downtime, no data loss, just a clean switch." },
  { icon: <FiTool />, title: "Maintenance and Support", desc: "Whether it's a glitch or an upgrade, our custom services offer quick fixes and proactive maintenance. Your store stays online and selling 24/7." }
];

const WoocommerceServices = () => {
  return (
    <section className="woo-dark-section py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="display-4 fw-bolder mb-4"
            >
              Custom WooCommerce <br />
              <span className="woo-title-gradient">Development Services</span>
            </motion.h2>
            <p className="text-secondary fs-5 lh-lg">
              We have created a fully customised WooCommerce platform that perfectly aligns with your brand image and projects your message to shoppers.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div 
                className="woo-glow-card p-5 h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="woo-expert-icon mb-4" style={{ filter: 'drop-shadow(0 0 10px var(--woo-accent-glow))' }}>
                  {service.icon}
                </div>
                <h4 className="fw-bold mb-3">{service.title}</h4>
                <p className="text-secondary small lh-lg mb-0">
                  {service.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoocommerceServices;
