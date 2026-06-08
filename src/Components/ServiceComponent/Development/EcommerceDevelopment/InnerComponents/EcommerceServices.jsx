import React from 'react';
import { motion } from 'framer-motion';
import './ecommerce-dark.css';

const services = [
  {
    id: 1,
    title: "E-commerce Consulting",
    desc: "Get our consulting services that guide your business for result-oriented and highly functional ecommerce sites with delightful customer experiences.",
    icon: "💡",
    color: "#c084fc",
    delay: 0.1
  },
  {
    id: 2,
    title: "Hosting & Infrastructure",
    desc: "Secure and optimise your server with the best ecommerce hosting services and ensure peak performance with infrastructure management.",
    icon: "☁️",
    color: "#38bdf8",
    delay: 0.3
  },
  {
    id: 3,
    title: "Manage & Maintain",
    desc: "We manage and maintain applications across multiple channels to maximise opportunities with professional ecommerce development services.",
    icon: "⚙️",
    color: "#10b981",
    delay: 0.5
  }
];

const EcommerceServices = () => {
  return (
    <section className="ecom-services-section">
      <div className="ecom-grid-bg"></div>
      
      {/* Ambient background glows */}
      <div className="ecom-ambient-orb" style={{ top: '-10%', left: '10%', width: '400px', height: '400px', background: 'var(--ecom-accent-1)' }}></div>
      <div className="ecom-ambient-orb" style={{ bottom: '-10%', right: '5%', width: '500px', height: '500px', background: 'var(--ecom-accent-2)', animationDelay: '-5s' }}></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center text-center mb-5 pb-4">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-inline-flex border border-secondary rounded-pill px-4 py-2 mb-4" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)' }}>
                <span className="text-uppercase fw-bold" style={{ color: 'var(--ecom-accent-2)', letterSpacing: '2px', fontSize: '13px' }}>Our Services</span>
              </div>
              
              <h2 className="display-4 fw-bolder text-white mb-4">
                Ecommerce Development <br />
                <span className="ecom-title-gradient">Services</span>
              </h2>
              
              <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                We adopt a rapid and reliable approach with the best E-commerce services for organisations to achieve their business goals. Eager to know what our expertise can contribute to your business? Here we go!
              </p>
            </motion.div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: service.delay, type: 'spring', bounce: 0.4 }}
                className="h-100"
              >
                <div 
                  className="ecom-service-card" 
                  style={{ '--card-glow': service.color }}
                >
                  <div className="ecom-service-icon">
                    {service.icon}
                  </div>
                  <div className="ecom-card-content">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
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

export default EcommerceServices;
