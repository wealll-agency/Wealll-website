import React from 'react';
import { motion } from 'framer-motion';
import { FiShare2, FiMousePointer, FiTrendingUp, FiEdit3, FiCode, FiCpu } from 'react-icons/fi';
import './seo-dark.css';

const SEOOtherServices = () => {
  const otherServices = [
    { title: "SMO", icon: <FiShare2 size={35} /> },
    { title: "Paid Ads", icon: <FiMousePointer size={35} /> },
    { title: "CRO", icon: <FiTrendingUp size={35} /> },
    { title: "Content", icon: <FiEdit3 size={35} /> },
    { title: "Web Development", icon: <FiCode size={35} /> },
    { title: "S/W Development", icon: <FiCpu size={35} /> },
  ];

  return (
    <section className="seo-other-services-section">
      <div className="container position-relative z-2">
        <div className="text-center mb-5 pb-2">
          <h2 className="seo-section-title text-white mb-4">
            <span className="seo-title-gradient">Other Services</span>
          </h2>
          <p className="seo-normal-text mx-auto" style={{ maxWidth: '900px' }}>
            Our prominent digital marketing verticals remain ready to offer flawless services to various organizations. We are one of the best and most trustworthy companies to offer incredible comprehensive digital solutions.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {otherServices.map((service, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="seo-glass-tile"
              >
                <div className="glass-tile-icon">
                  {service.icon}
                </div>
                <h4 className="glass-tile-title">{service.title}</h4>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background soft purple glow spot */}
      <div className="seo-ambient-light" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(176, 38, 255, 0.05)', width: '800px', height: '800px' }}></div>
    </section>
  );
};

export default SEOOtherServices;
