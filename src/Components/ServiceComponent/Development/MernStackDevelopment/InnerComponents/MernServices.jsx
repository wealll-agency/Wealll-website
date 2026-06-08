import React from 'react';
import { motion } from 'framer-motion';
import '../../WebsiteDevelopment/InnerComponents/website-dev-dark.css';
import './mern-dark.css';

const servicesData = [
  {
    id: 1,
    category: "Custom Application Development",
    desc: "Craft bespoke web and mobile applications with MERN stack, ensuring they are feature-rich, scalable, and tailored to specific client needs.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    color: "#3b82f6", // MERN Blue
    icon: "💻",
    delay: 0.1
  },
  {
    id: 2,
    category: "Enterprise-Grade Back-end Development",
    desc: "Build highly scalable, secure, and robust server-side architectures using Node.js and Express to drive complex enterprise applications.",
    skills: ["Node.js", "Express.js", "Microservices", "Security"],
    color: "#a855f7", // MERN Purple
    icon: "🏢",
    delay: 0.2
  },
  {
    id: 3,
    category: "API Development & Integration",
    desc: "Design and implement RESTful APIs, ensuring smooth communication between frontend and backend components, and seamless third-party API integration.",
    skills: ["RESTful APIs", "GraphQL", "Third-party APIs", "Postman"],
    color: "#ec4899", // MERN Pink
    icon: "🔗",
    delay: 0.3
  },
  {
    id: 4,
    category: "Database Design & Management",
    desc: "Efficiently design MongoDB databases, ensuring optimal data storage, retrieval, and management, in line with project requirements.",
    skills: ["MongoDB", "Mongoose", "Data Modeling", "Scalability"],
    color: "#10b981", // MERN Green
    icon: "🗄️",
    delay: 0.4
  }
];

const MernServices = () => {
  return (
    <section className="py-5 position-relative what_we_do" style={{ backgroundColor: '#070913', overflow: 'hidden' }}>
      {/* Immersive background decoration */}
      <div className="position-absolute top-0 start-0 translate-middle" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 60%)', zIndex: 0 }}></div>
      <div className="position-absolute bottom-0 end-0 translate-middle" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)', zIndex: 0 }}></div>

      <div className="container position-relative z-1 pt-5 pb-5">
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-5 pb-4"
        >
          <div className="d-inline-flex border border-secondary rounded-pill px-4 py-2 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <span className="text-uppercase tracking-widest fw-semibold" style={{ color: '#10b981', letterSpacing: '2px', fontSize: '12px' }}>What We Do</span>
          </div>
          <h2 className="fw-bolder mb-3 display-4 text-white">
            MERN Stack App <span className="web-dev-gradient-text" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Development Services</span>
          </h2>
          <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '800px', lineHeight: '1.7' }}>
            Launch your custom website today with our expert web development team, blending aesthetic design with robust engineering to create digital masterpieces.
          </p>
        </motion.div>

        {/* Brand New Premium 3D Hover Architecture */}
        <div className="row g-5 justify-content-center premium-service-wrapper">
          {servicesData.map((service) => (
            <div className="col-lg-6 col-xl-3 col-md-6 mb-4" key={service.id}>
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

                  <h3 className="fw-bolder mb-3 text-white fs-4 position-relative z-2">{service.category}</h3>
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

export default MernServices;

