import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiLayout, FiLayers, FiTruck, FiGlobe } from 'react-icons/fi';
import './mobile-dark.css';

const services = [
  { icon: <FiSmartphone />, name: "Android App Development", desc: "High-performing bespoke Android apps built using cutting-edge technologies and best strategy integration." },
  { icon: <FiLayout />, name: "iOS App Development", desc: "Stunning iOS apps building reflecting user-centric features and providing a premium experience that exceeds demands." },
  { icon: <FiLayers />, name: "Hybrid App Development", desc: "Highly intuitive hybrid apps providing seamless experiences and boosting engagement across multiple platforms." },
  { icon: <FiTruck />, name: "On-Demand App Development", desc: "Expert development for food delivery, cab booking, logistics, grocery, fashion, and medicine delivery applications." },
  { icon: <FiGlobe />, name: "Progressive App Development", desc: "Progressive web apps with beautiful interfaces, rich features, and smooth browsing experiences without heavy installs." }
];

const MobileAppServices = () => {
  return (
    <section className="mobile-dark-section py-5 position-relative">
      <div className="container position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <span className="mobile-section-badge">Our Suite</span>
          <h2 className="display-4 fw-bolder text-white mb-4 lh-sm">
            Mobile App Development <br/> 
            <span className="mobile-title-gradient">Services We Deliver</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 lh-lg" style={{ maxWidth: '800px' }}>
            We, as a premier Android and iPhone application development agency, have earned the trust of esteemed clients by serving them with top-notch, robust, user-centered solutions.
          </p>
        </motion.div>

        {/* Premium Bootstrap 3-Column Grid */}
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="col-12 col-md-6 col-lg-4 d-flex"
            >
              <div className="mobile-service-card w-100">
                <div className="mobile-service-icon">{service.icon}</div>
                <h4 className="mobile-service-title">{service.name}</h4>
                <p className="mobile-service-desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppServices;
