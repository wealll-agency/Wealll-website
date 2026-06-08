import React from 'react';
import { motion } from 'framer-motion';
import '../../WebsiteDevelopment/InnerComponents/website-dev-dark.css';
import './mern-dark.css';

const processSteps = [
  { id: 1, title: 'Project Inception', desc: "At the project's inception, we engage in comprehensive discussions with our clients.", icon: '🔍', color: '#10b981' },
  { id: 2, title: 'Backend Development', desc: "Harnessing the power of Node.js and Express.js, our developers craft the server-side logic.", icon: '⚙️', color: '#3b82f6' },
  { id: 3, title: 'Database Integration', desc: "We sculpt the data schema and integrate MongoDB for optimal data management.", icon: '🗄️', color: '#8b5cf6' },
  { id: 4, title: 'Frontend Development', desc: "Our developers build reusable components and dynamic interfaces using React.", icon: '⚛️', color: '#a855f7' },
  { id: 5, title: 'AI Integration', desc: "We embed advanced AI models and machine learning features to enrich user interactions.", icon: '🤖', color: '#06b6d4' },
  { id: 6, title: 'Deployment', desc: "We optimize code, select hosting platforms, and initiate a smooth deployment process.", icon: '🚀', color: '#ec4899' },
  { id: 7, title: 'Maintenance', desc: "We implement CI/CD pipelines, monitor performance, and continuously optimize.", icon: '🛠️', color: '#f43f5e' },
];

const MernProcess = () => {
  return (
    <section className="web-dev-dark-bg py-5 position-relative border-top" style={{ backgroundColor: '#070913', borderColor: 'rgba(255,255,255,0.05)'}}>
      <div className="container position-relative z-1 py-5">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-5 pb-4"
        >
          <h2 className="display-4 fw-bold mb-3 text-white">
            MERN Stack <span className="web-dev-gradient-text" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Development Process</span>
          </h2>
          <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '800px' }}>
            Our expert web developers deliver flawless coding and ensure your website's functionality and responsiveness from start to finish.
          </p>
        </motion.div>

        {/* Stunning Process Timeline */}
        <div className="process-timeline-wrapper mx-auto gap-3" style={{ maxWidth: '1400px' }}>
          
          <div className="process-line-track">
             <div className="process-line-progress"></div>
          </div>
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.15 + 0.2
              }}
              className="process-step-item"
              style={{ '--step-color': step.color }}
            >
              <div 
                className="process-icon-circle"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <div className="process-ripple"></div>
                <span style={{ filter: `drop-shadow(0 0 10px ${step.color})` }}>
                  {step.icon}
                </span>
              </div>
              <h3 className="process-title text-center fs-5">
                {step.title}
              </h3>
              <p className="text-center text-secondary small px-2 mt-2" style={{lineHeight: '1.4', position: 'relative', zIndex: 10}}>
                 {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MernProcess;

