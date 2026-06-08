import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiPlusCircle, FiRepeat, FiSmartphone, FiShield, FiCode, FiArrowUpCircle, FiCornerRightUp, FiHeadphones } from 'react-icons/fi';
import './woocommerce-dark.css';

const expertise = [
  { icon: <FiLayout />, title: "Theme Development", desc: "Create a captivating user interface of your store front-end with custom themes." },
  { icon: <FiPlusCircle />, title: "Extensions Development", desc: "Extend functionality with custom WooCommerce extensions tailored to your needs." },
  { icon: <FiRepeat />, title: "Migration Services", desc: "Seamlessly switch your existing store from any platform to robust WooCommerce." },
  { icon: <FiSmartphone />, title: "Responsive Store", desc: "Serving mobile users faster with highly responsive WooCommerce storefronts." },
  { icon: <FiShield />, title: "Custom Development", desc: "Trust us for delivering high-performance custom WooCommerce online portals." },
  { icon: <FiCode />, title: "Module Development", desc: "Build custom modules that distinguish your store from all your competitors." },
  { icon: <FiArrowUpCircle />, title: "Version Upgrade", desc: "Upgrade to the latest version in minimum time with zero data loss or downtime." },
  { icon: <FiCornerRightUp />, title: "Store from Scratch", desc: "Begin your journey with a store built from the ground up for maximum scale." },
  { icon: <FiHeadphones />, title: "Support & Maintenance", desc: "Ensure smooth performance with our dedicated keeps-it-up maintenance services." }
];

const WoocommerceExpertise = () => {
  return (
    <section className="woo-dark-section py-5 pb-5">
      <div className="container py-5">
        <div className="text-center mb-5 pb-3">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="display-5 fw-bolder"
          >
            Our WooCommerce <span className="woo-title-gradient">Developers Expertise</span>
          </motion.h2>
          <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '700px' }}>
            Our excellent team of certified WooCommerce experts creates swift and secure online stores for multifaceted businesses.
          </p>
        </div>

        <div className="row g-4">
          {expertise.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div 
                className="woo-glow-card p-4 h-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="woo-expert-icon">
                  {item.icon}
                </div>
                <h4 className="fw-bold mb-3">{item.title}</h4>
                <p className="text-secondary small lh-lg">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoocommerceExpertise;
