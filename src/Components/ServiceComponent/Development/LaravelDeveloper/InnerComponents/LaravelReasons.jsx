import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiRepeat, FiShield, FiCheckSquare, FiLayers, FiDollarSign } from 'react-icons/fi';
import './laravel-dark.css';

const reasons = [
  {
    icon: <FiTrendingUp />,
    title: "Unmatched Performance",
    desc: "Boost your website's performance and garner huge traffic using this immensely efficient PHP framework.",
    delay: 0.1
  },
  {
    icon: <FiRepeat />,
    title: "Smooth Migration",
    desc: "Preserve information in proper seeds and seamlessly modify existing databases without recreation.",
    delay: 0.3
  },
  {
    icon: <FiShield />,
    title: "Unbreachable Security",
    desc: "Shielded against SQL Injection and CSRF. Uses a highly secure hashed and salted password system.",
    delay: 0.5
  },
  {
    icon: <FiCheckSquare />,
    title: "Automated Testing",
    desc: "Totally automated testing processes ensure a zero-error, bug-free, and high-performing end product.",
    delay: 0.2
  },
  {
    icon: <FiLayers />,
    title: "Custom Templates",
    desc: "Pre-made packages and easy third-party plugin integration make meeting business requirements incredibly fast.",
    delay: 0.4
  },
  {
    icon: <FiDollarSign />,
    title: "Pocket-Friendly",
    desc: "Reduced testing time and fewer maintenance needs lower overall expenditure, assuring high ROI.",
    delay: 0.6
  }
];

const LaravelReasons = () => {
  return (
    <section className="lar-dark-section py-5 position-relative">
      {/* Background Holographic Grid Effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{
        backgroundImage: 'linear-gradient(rgba(245, 82, 71, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 82, 71, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0
      }}></div>

      <div className="container py-5 position-relative z-1">
        <div className="row justify-content-center text-center mb-5 pb-4">
          <div className="col-lg-8">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-danger fw-bold text-uppercase mb-3" 
              style={{ letterSpacing: '2px', fontSize: '14px' }}
            >
              The Advantage
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-4 fw-bolder text-white mb-4"
            >
              Reasons For Choosing <br />
              <span className="lar-title-gradient">Laravel Framework</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-secondary fs-5 lh-lg"
            >
              Laravel is an MVC framework offering benefits beyond imagination. Discover why modern developers and businesses prioritize this robust PHP framework over any other.
            </motion.p>
          </div>
        </div>

        <div className="row g-4 m-0 p-0 justify-content-center">
          {reasons.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div 
                className="lar-prism-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="lar-prism-icon">
                  {item.icon}
                </div>
                <h4 className="text-white fw-bold mb-3 fs-5">{item.title}</h4>
                <p className="text-secondary small lh-lg mb-0">{item.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaravelReasons;
