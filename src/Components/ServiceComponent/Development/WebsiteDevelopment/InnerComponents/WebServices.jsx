import React from 'react';
import { motion } from 'framer-motion';
import './website-dev-dark.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const servicesData = [
  {
    id: 1,
    category: "Design",
    desc: "We are a premium website design company specialising in uniquely crafted websites for leading brands. Every pixel is purposely engineered.",
    skills: ["UI/UX Design", "Graphic Design", "Logo and Branding", "Figma Design"],
    color: "#a855f7",
    icon: "🎨",
    delay: 0.1
  },
  {
    id: 2,
    category: "Web Development",
    desc: "Our web development company specializes in creating robust, dynamic websites for Kolkata businesses utilizing industry-leading frameworks.",
    skills: ["Static Websites", "Dynamic Websites", "eCommerce", "React, Node.js"],
    color: "#ec4899",
    icon: "💻",
    delay: 0.3
  },
  {
    id: 3,
    category: "Maintenance",
    desc: "Ensure your digital presence is flawless with round-the-clock technical support, bug testing, and proactive optimization.",
    skills: ["Performance Boost", "Security Audits", "Feature Upgrades", "24/7 Monitoring"],
    color: "#3b82f6",
    icon: "⚙️",
    delay: 0.5
  }
];

const WebServices = () => {
  return (
    <section className="py-5 position-relative what_we_do" style={{ backgroundColor: '#0d0f1b', overflow: 'hidden' }}>
      {/* Immersive background decoration */}
      <BannerComponent />
      <div className="position-absolute top-0 start-0 translate-middle" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 60%)', zIndex: 0 }}></div>
      <div className="position-absolute bottom-0 end-0 translate-middle" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 60%)', zIndex: 0 }}></div>

      <div className="container position-relative z-1 pt-5 pb-5">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5 pb-4"
        >
          <div className="d-inline-flex border border-secondary rounded-pill px-4 py-2 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <span className="text-uppercase tracking-widest fw-semibold" style={{ color: '#c084fc', letterSpacing: '2px', fontSize: '12px' }}>What We Do</span>
          </div>
          <h2 className="fw-bolder mb-3 display-4 text-white">
            Our <span className="web-dev-gradient-text" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text' }}>Web Development</span> Services
          </h2>
          <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '800px', lineHeight: '1.7' }}>
            Launch your custom website today with our expert web development team, blending aesthetic design with robust engineering to create digital masterpieces.
          </p>
        </motion.div>

        {/* Brand New Premium 3D Hover Architecture */}
        <div className="row g-5 justify-content-center premium-service-wrapper">
          {servicesData.map((service) => (
            <div className="col-lg-4 col-md-6 mb-4" key={service.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: service.delay, type: 'spring' }}
                className="h-100"
              >
                <div
                  className="premium-service-card-new d-flex flex-column h-100"
                  style={{ '--glow-color': service.color }}
                >
                  <div className="service-icon-new text-white">
                    {service.icon}
                  </div>

                  <h3 className="fw-bolder mb-3 text-white fs-2 position-relative z-2">{service.category}</h3>
                  <p className="text-secondary mb-5 fs-6 lh-lg position-relative z-2">
                    {service.desc}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mt-auto position-relative z-2">
                    {service.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="service-skill-badge shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
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

export default WebServices;
