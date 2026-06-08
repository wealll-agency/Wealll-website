import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiStar, FiRefreshCw, FiTrendingUp, FiCheckCircle, FiLifeBuoy, FiSmartphone } from 'react-icons/fi';
import './mobile-dark.css';

const MobileAppWhyUs = () => {
    // We Alll Custom Color Palette for Mobile Constellation
    const nodes = [
       { id: 1, title: 'End-to-end Services', desc: 'Full-cycle services from concept ideation to app launch, ensuring seamless journeys.', icon: <FiTarget />, x: '20%', y: '15%', cx: 20, cy: 15, color: '#3b82f6' }, // Blue
       { id: 2, title: 'Skilled Developers', desc: 'Handpicked experts with solid technical expertise in Android, iOS, and Hybrid.', icon: <FiStar />, x: '80%', y: '15%', cx: 80, cy: 15, color: '#8b5cf6' }, // Purple
       { id: 3, title: 'Agile Methodology', desc: 'Agile project management for on-time delivery with extreme efficiency.', icon: <FiRefreshCw />, x: '10%', y: '50%', cx: 10, cy: 50, color: '#ec4899' }, // Pink
       { id: 4, title: 'Result-Oriented', desc: 'Focusing on delivering results that achieve your goals and reach wider audiences.', icon: <FiTrendingUp />, x: '90%', y: '50%', cx: 90, cy: 50, color: '#06b6d4' }, // Cyan
       { id: 5, title: 'Quality Assurance', desc: 'Stringent QA processes ensuring bug-free mobile apps and smooth UX.', icon: <FiCheckCircle />, x: '25%', y: '85%', cx: 25, cy: 85, color: '#10b981' }, // Emerald
       { id: 6, title: '24x7 Support', desc: 'Maintenance services to ensure your mobile apps are always up and running.', icon: <FiLifeBuoy />, x: '75%', y: '85%', cx: 75, cy: 85, color: '#f59e0b' } // Amber
    ];

    const [hoveredNode, setHoveredNode] = useState(null);

    return (
       <section className="mobile-dark-section py-5">
          <div className="container py-5 text-center position-relative z-2">
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="mobile-section-badge">Our Edge</span>
                <h2 className="display-4 fw-bolder text-white mb-4 lh-sm">
                  Why We are your #1 Choice as <br/>
                  <span className="mobile-title-gradient">Mobile App</span> Development Company
                </h2>
                <p className="text-secondary fs-5 lh-lg mx-auto" style={{ maxWidth: '800px' }}>
                  An interactive look at the core principles that drive our success. We bring unparalleled expertise and dedication to every project.
                </p>
             </motion.div>
          </div>

          {/* Desktop Interactive Network Map */}
          <div className="mobile-map-wrapper d-none d-lg-block mt-4">
             <svg className="mobile-map-svg">
                <defs>
                   {nodes.map(n => (
                      <linearGradient id={`mobile-grad-${n.id}`} x1="50%" y1="50%" x2={`${n.cx}%`} y2={`${n.cy}%`} key={n.id}>
                         <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                         <stop offset="100%" stopColor={n.color} />
                      </linearGradient>
                   ))}
                </defs>

                {nodes.map(n => (
                   <motion.line 
                      key={n.id} 
                      x1="50%" y1="50%" 
                      x2={`${n.cx}%`} y2={`${n.cy}%`} 
                      stroke={`url(#mobile-grad-${n.id})`} 
                      strokeWidth={hoveredNode === n.id ? "4" : "2"} 
                      className={`mobile-map-line ${hoveredNode === n.id ? 'target-active' : ''}`}
                      style={{ 
                         filter: hoveredNode === n.id ? `drop-shadow(0 0 15px ${n.color})` : 'none',
                         strokeDasharray: hoveredNode === n.id ? 'none' : '8, 12'
                      }}
                   />
                ))}
             </svg>
             
             {/* Center Origin Node */}
             <div className="mobile-map-node mobile-map-center" style={{ left: '50%', top: '50%' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="fs-1" style={{ color: '#8b5cf6' }}>
                  <FiSmartphone />
                </motion.div>
             </div>

             {/* The Interactive Edge Nodes */}
             {nodes.map((n) => (
                <div 
                   key={n.id} 
                   className="mobile-map-node mobile-map-feature" 
                   style={{ left: n.x, top: n.y, '--n-color': n.color }}
                   onMouseEnter={() => setHoveredNode(n.id)}
                   onMouseLeave={() => setHoveredNode(null)}
                >
                   <div className="mobile-map-icon">{n.icon}</div>
                   <div className="mobile-map-content">
                      <h5 className="fw-bold mb-1" style={{ color: n.color }}>{n.title}</h5>
                      <p className="text-light m-0 text-wrap fs-6 lh-base" style={{ width: '250px' }}>{n.desc}</p>
                   </div>
                </div>
             ))}
          </div>

          {/* Fallback Premium Grid for Mobile/Tablet */}
          <div className="container d-block d-lg-none mt-5">
             <div className="row g-4 justify-content-center">
                 {nodes.map(n => (
                    <div className="col-md-6 col-sm-12" key={n.id}>
                       <motion.div 
                          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          className="p-4 rounded-4 shadow-lg h-100" style={{ background: 'var(--mobile-bg-card)', border: `1px solid ${n.color}40` }}
                       >
                          <div className="fs-2 mb-3 d-inline-block rounded-circle p-3 shadow" style={{ background: `${n.color}20`, color: n.color }}>
                            {n.icon}
                          </div>
                          <h4 className="fw-bold text-white">{n.title}</h4>
                          <p className="text-secondary mt-3 lh-lg">{n.desc}</p>
                       </motion.div>
                    </div>
                 ))}
             </div>
          </div>
       </section>
    );
};

export default MobileAppWhyUs;
