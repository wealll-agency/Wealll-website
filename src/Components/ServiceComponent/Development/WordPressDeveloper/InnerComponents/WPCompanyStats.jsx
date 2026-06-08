import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiShield, FiPackage } from 'react-icons/fi';
import './wordpress-masterclass.css';

const WPCompanyStats = () => {
  // Monolith Card Data based on user screenshot
  const monolithData = [
    {
      id: 1,
      icon: <FiCode size={36} strokeWidth={1.5} />,
      text: 'Experienced Coders with Topnotch Expertise in WordPress Technologies',
      color: '#38bdf8', // Light Blue
      delay: 0.2
    },
    {
      id: 2,
      icon: <FiLayers size={36} strokeWidth={1.5} />,
      text: 'Knowledge and Availability of the Custom Themes and Feature-Rich Plugins',
      color: '#eab308', // Yellow
      delay: 0.4
    },
    {
      id: 3,
      icon: <FiShield size={36} strokeWidth={1.5} />,
      text: 'A Dedicated Testing Team Ensures Every WordPress Website Is Perfect',
      color: '#22c55e', // Green
      delay: 0.6
    },
    {
      id: 4,
      icon: <FiPackage size={36} strokeWidth={1.5} />,
      text: 'Top Packages for Each of the WordPress Design and Development Needs',
      color: '#ec4899', // Pink
      delay: 0.8
    }
  ];

  return (
    <section className="monolith-section py-5 overflow-hidden position-relative">
        
        {/* Deep Gradient Background & Glowing WordPress Watermark */}
        <div className="monolith-bg position-absolute w-100 h-100 top-0 start-0 z-0"></div>
        <motion.div 
           initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
           whileInView={{ opacity: 0.03, rotate: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="wp-watermark position-absolute z-0"
        >
           {/* Huge Abstract WP Logo */}
           <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,0C22.4,0,0,22.4,0,50c0,27.6,22.4,50,50,50s50-22.4,50-50C100,22.4,77.6,0,50,0z M90.4,50 c0,15.5-8.8,29-21.7,35.6l23.5-64.4C91.6,28.6,90.4,32,90.4,50z M10.4,50c0-10.3,4-19.7,10.6-26.6l-18.4,50.4 C11.3,67,10.4,58.8,10.4,50z M50,91.8c-11.6,0-22.1-4.8-29.6-12.6l28.6-78.4L78.6,77C70.9,86.2,50,91.8,50,91.8z M50,8.2 c10.3,0,19.7,3.8,26.8,10.2L50,91.8L23.2,18.4C30.3,12,39.7,8.2,50,8.2z"/>
           </svg>
        </motion.div>

        <div className="container position-relative z-1 py-5 my-lg-5">
           <div className="row align-items-center justify-content-between">
              
              {/* Left Column: Text Content */}
              <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
                 <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="pe-lg-4"
                 >
                    <h2 className="display-4 fw-black text-white lh-sm mb-4" style={{ letterSpacing: '-1px' }}>
                       A Complete WordPress Website Development Company In <span className="text-gradient-wp">Kolkata</span>
                    </h2>
                    <p className="fs-5 text-secondary lh-lg mb-0" style={{ fontWeight: 300 }}>
                       <strong className="text-white fw-bold">We Alll</strong> is acknowledged as the top WordPress Website Designing agency in Kolkata due to its outstanding services offered to the users in need of a dynamic and functional website. Our WordPress development process is powered with every necessity required to nurture a complete website that sells.
                    </p>
                 </motion.div>
              </div>

              {/* Right Column: Asymmetric Monoliths Grid */}
              <div className="col-lg-6">
                 <div className="monolith-grid">
                    {monolithData.map((node, index) => (
                       <motion.div 
                          key={node.id}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: node.delay, type: 'spring', stiffness: 70 }}
                          className={`monolith-card-wrapper wrapper-${index + 1}`}
                       >
                          <div className="monolith-card h-100 d-flex flex-column justify-content-center">
                             
                             {/* Neon Top Border specific to exact card color */}
                             <div className="monolith-top-accent" style={{ background: `linear-gradient(90deg, ${node.color}, transparent)` }}></div>
                             
                             <div className="monolith-card-content position-relative z-2">
                                <div className="monolith-icon-box mb-4" style={{ '--icon-color': node.color }}>
                                    {node.icon}
                                    <div className="icon-glow" style={{ background: node.color }}></div>
                                </div>
                                <p className="monolith-text fs-5 m-0 lh-base text-white fw-medium">
                                   {node.text}
                                </p>
                             </div>

                             {/* Abstract Decorative Background elements inside card */}
                             <div className="monolith-deco-bg"></div>

                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>

           </div>
        </div>
    </section>
  );
};

export default WPCompanyStats;

