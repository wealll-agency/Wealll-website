import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiLock, FiClock, FiActivity, FiHeart, FiPieChart } from 'react-icons/fi';
import './laravel-dark.css';

const LaravelWhyUs = () => {
    const nodes = [
       { id: 1, title: 'Wizards', desc: 'Expert Laravel developers capable of bringing imagination into life.', icon: <FiUsers />, x: '20%', y: '15%', cx: 20, cy: 15, color: '#f55247' },
       { id: 2, title: 'Security', desc: 'Total product security with strict NDA agreements.', icon: <FiLock />, x: '80%', y: '15%', cx: 80, cy: 15, color: '#ff6b6b' },
       { id: 3, title: 'Deadlines', desc: 'Top priority on delivering within the promised timeframe.', icon: <FiClock />, x: '10%', y: '50%', cx: 10, cy: 50, color: '#ff8a65' },
       { id: 4, title: 'Updated', desc: 'Adapting to state-of-the-art technological advancements.', icon: <FiActivity />, x: '90%', y: '50%', cx: 90, cy: 50, color: '#ff5252' },
       { id: 5, title: 'Support', desc: 'A caring team for every urgency post-delivery.', icon: <FiHeart />, x: '25%', y: '85%', cx: 25, cy: 85, color: '#ef5350' },
       { id: 6, title: 'Efficient', desc: 'Lucrative budget focusing on the best financial fit.', icon: <FiPieChart />, x: '75%', y: '85%', cx: 75, cy: 85, color: '#e53935' }
    ];

    const [hoveredNode, setHoveredNode] = useState(null);

    return (
       <section className="lar-dark-section py-5 position-relative border-top" style={{ borderColor: 'rgba(255,255,255,0.05)', minHeight: '100vh', overflow: 'hidden' }}>
          
          <div className="container py-5 text-center position-relative z-2">
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="d-flex justify-content-center mb-3">
                  <span className="badge bg-danger bg-opacity-25 text-danger rounded-pill px-3 py-2 fw-bold border border-danger border-opacity-50 text-uppercase" style={{ letterSpacing: '1px' }}>
                    Why Us
                  </span>
                </div>
                <h2 className="display-4 fw-bolder text-white mb-4 lh-sm">
                  Why <span className="lar-title-gradient">We Alll</span> Is The Best <br/>Laravel Web Development Company In India
                </h2>
                <p className="text-secondary fs-5 lh-lg mx-auto" style={{ maxWidth: '900px' }}>
                  We are a premium Laravel Development Agency with years of experience. Our wide range of solutions, deep technical expertise, and unwavering commitment to client success guide you in every step.
                </p>
             </motion.div>
          </div>

          {/* Desktop Interactive Network Map */}
          <div className="lar-map-wrapper d-none d-lg-block mt-4">
             <svg className="lar-map-svg">
                <defs>
                   {nodes.map(n => (
                      <linearGradient id={`lar-grad-${n.id}`} x1="50%" y1="50%" x2={`${n.cx}%`} y2={`${n.cy}%`} key={n.id}>
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
                      stroke={`url(#lar-grad-${n.id})`} 
                      strokeWidth={hoveredNode === n.id ? "4" : "2"} 
                      className={`lar-map-line ${hoveredNode === n.id ? 'target-active' : ''}`}
                      style={{ 
                         filter: hoveredNode === n.id ? `drop-shadow(0 0 15px ${n.color})` : 'none',
                         strokeDasharray: hoveredNode === n.id ? 'none' : '8, 12'
                      }}
                   />
                ))}
             </svg>
             
             {/* Center Origin Node (Laravel Core) */}
             <div className="lar-map-node lar-map-center" style={{ left: '50%', top: '50%' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="fs-1 text-danger">
                  <FiActivity />
                </motion.div>
             </div>

             {/* The Interactive Edge Nodes */}
             {nodes.map((n) => (
                <div 
                   key={n.id} 
                   className="lar-map-node lar-map-feature" 
                   style={{ left: n.x, top: n.y, '--n-color': n.color }}
                   onMouseEnter={() => setHoveredNode(n.id)}
                   onMouseLeave={() => setHoveredNode(null)}
                >
                   <div className="lar-map-icon">{n.icon}</div>
                   <div className="lar-map-content">
                      <h5 className="fw-bold mb-1" style={{ color: n.color }}>{n.title}</h5>
                      <p className="text-light m-0 text-wrap fs-6 lh-lg" style={{ width: '250px' }}>{n.desc}</p>
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
                          className="p-4 rounded-4 shadow-lg text-center h-100" style={{ background: '#0a0d17', border: `1px solid rgba(245, 82, 71, 0.3)` }}
                       >
                          <div className="fs-1 mb-3 d-inline-block rounded-circle p-3 shadow" style={{ background: 'rgba(245, 82, 71, 0.1)', color: n.color }}>
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

export default LaravelWhyUs;
