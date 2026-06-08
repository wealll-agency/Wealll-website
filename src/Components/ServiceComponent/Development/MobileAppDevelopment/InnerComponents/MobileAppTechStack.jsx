import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiSwift, 
  SiFlutter, 
  SiFirebase, 
  SiMongodb, 
  SiMysql,
  SiGooglecloud,
  SiVuedotjs,
  SiKotlin,
  SiReact
} from 'react-icons/si';
import { FaJava, FaApple, FaAws } from 'react-icons/fa';
import './mobile-dark.css';

const technologies = [
  { name: 'Swift (iOS)', icon: <SiSwift size={50} />, color: '#F05138' },
  { name: 'Kotlin (Android)', icon: <SiKotlin size={50} />, color: '#7F52FF' },
  { name: 'Flutter (Hybrid)', icon: <SiFlutter size={50} />, color: '#02569B' },
  { name: 'React Native', icon: <SiReact size={50} />, color: '#61DAFB' },
  { name: 'Java', icon: <FaJava size={50} />, color: '#f89820' },
  { name: 'AWS Cloud', icon: <FaAws size={50} />, color: '#FF9900' },
  { name: 'Firebase', icon: <SiFirebase size={50} />, color: '#FFCA28' },
  { name: 'MongoDB', icon: <SiMongodb size={50} />, color: '#47A248' }
];

const MobileAppTechStack = () => {
  return (
    <section className="mobile-dark-section py-5 position-relative border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="container position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <span className="mobile-section-badge">Technologies</span>
          <h2 className="display-4 fw-bolder text-white mb-4 lh-sm">
            Technologies We Use To <br/>
            <span className="mobile-title-gradient">Develop Your Mobile App</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 lh-lg" style={{ maxWidth: '900px' }}>
            We leverage a full suite of cutting-edge mobile technologies, cloud architectures, and databases to build world-class, custom mobile applications.
          </p>
        </motion.div>

        {/* 4x2 Dark Neon Bordered Grid */}
        <div className="mx-auto" style={{ maxWidth: '1100px' }}>
          <div className="mobile-tech-bordered-grid shadow-lg">
            {technologies.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="mobile-tech-grid-cell"
              >
                <div 
                  className="mobile-tech-grid-icon-lg fw-bolder d-flex align-items-center justify-content-center"
                  style={{ color: tech.color, textShadow: `0 0 20px ${tech.color}50` }}
                >
                  {tech.icon}
                </div>
                <h4 className="mobile-tech-grid-name">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileAppTechStack;
