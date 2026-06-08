import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiPackage, FiRefreshCw, FiShoppingCart, FiCloud, FiUsers, FiLayout, FiLink, FiLifeBuoy } from 'react-icons/fi';
import './laravel-dark.css';

const services = [
  { icon: <FiMonitor />, title: "Web App Development", desc: "Build enterprise-grade web applications with dynamic user interfaces and scalable Laravel backends." },
  { icon: <FiPackage />, title: "3rd-Party Plugins", desc: "Seamlessly integrate and develop custom third-party plugins to meet any complex business requirement." },
  { icon: <FiRefreshCw />, title: "Migration Services", desc: "Smoothly migrate existing databases to Laravel without data loss, upgrading features effortlessly." },
  { icon: <FiShoppingCart />, title: "Ecommerce Solutions", desc: "Develop secure and high-converting Laravel eCommerce platforms tailored for modern businesses." },
  { icon: <FiCloud />, title: "Cloud Development", desc: "Deploy and manage cloud-based Laravel architectures for unparalleled performance and scalability." },
  { icon: <FiUsers />, title: "Social Networking", desc: "Create engaging, secure, and fast social networking platforms using Laravel's robust framework." },
  { icon: <FiLayout />, title: "Theme Development", desc: "Craft stunning front-end themes perfectly integrated with a powerful Laravel backend." },
  { icon: <FiLink />, title: "Extension Development", desc: "Expand the core capabilities of your application with custom-built Laravel extensions." },
  { icon: <FiLifeBuoy />, title: "Support & Maintenance", desc: "Dedicated ongoing support ensuring your Laravel application remains secure, updated, and flawless." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const LaravelServices = () => {
  return (
    <section className="lar-dark-section py-5">
      <div className="container py-5">
        <div className="text-center mb-5 pb-3">
          <motion.h4 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-danger fw-bold text-uppercase mb-3" 
            style={{ letterSpacing: '2px', fontSize: '14px' }}
          >
            Capabilities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="display-4 fw-bolder text-white mb-4"
          >
            Our Laravel Development <br />
            <span className="lar-title-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary mx-auto fs-5" 
            style={{ maxWidth: '800px' }}
          >
            Being a leading Laravel Web Development company, we offer a comprehensive range of services designed to satisfy the unique requirements of any business.
          </motion.p>
        </div>

        <motion.div 
          className="lar-matrix-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="lar-matrix-card">
                <div className="lar-matrix-icon-wrapper">
                  <span className="lar-matrix-icon">{service.icon}</span>
                </div>
                <h5 className="text-white fw-bold mb-3">{service.title}</h5>
                <p className="text-secondary small lh-base mb-0 opacity-75 flex-grow-1">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-5 pt-4">
            <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="btn btn-outline-danger btn-lg px-5 py-3 rounded-pill fw-bold text-uppercase lar-btn-glow"
                style={{ letterSpacing: '2px', fontSize: '14px' }}
            >
                Get a Free Quote
            </motion.button>
        </div>
      </div>
    </section>
  );
};

export default LaravelServices;
