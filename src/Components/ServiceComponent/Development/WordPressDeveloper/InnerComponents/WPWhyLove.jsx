import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './wordpress-masterclass.css';

const WPWhyLove = () => {
   // Interactive Constellation Data Nodes
   const nodes = [
      { id: 1, title: 'Easy Management', desc: 'Manage your entire site workflow smoothly without needing developer expertise.', icon: '⚙️', x: '15%', y: '20%', cx: 15, cy: 20, color: '#a855f7' },
      { id: 2, title: 'SEO Optimized', desc: 'Out-of-the-box structural advantages for ranking high on search algorithms.', icon: '🔍', x: '85%', y: '20%', cx: 85, cy: 20, color: '#3b82f6' },
      { id: 3, title: 'Cost Efficient', desc: 'Minimize your recurring costs heavily while building robust platforms.', icon: '💰', x: '15%', y: '80%', cx: 15, cy: 80, color: '#22c55e' },
      { id: 4, title: 'Multilingual', desc: 'Break geographical boundaries by easily injecting global language packs.', icon: '🌍', x: '85%', y: '80%', cx: 85, cy: 80, color: '#ec4899' }
   ];

   const [hoveredNode, setHoveredNode] = useState(null);

   return (
      <section className="py-5 why_love_wp" style={{ background: '#0a0a14', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

         <div className="container why_love_wp_container py-5 text-center position-relative z-2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <h2 className="display-3 fw-bold text-white mb-3">Why <span style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Love WordPress</span></h2>
               <p className="text-secondary fs-5 mt-3">An interactive constellation mapping the exact capabilities of the platform.</p>
            </motion.div>
         </div>

         {/* Desktop SVG Constellation Map */}
         <div className="constellation-wrapper d-none d-lg-block mt-4">
            <svg className="constellation-svg">
               <defs>
                  {/* Create glowing gradients for the lasers */}
                  {nodes.map(n => (
                     <linearGradient id={`grad-${n.id}`} x1="50%" y1="50%" x2={`${n.cx}%`} y2={`${n.cy}%`} key={n.id}>
                        <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                        <stop offset="100%" stopColor={n.color} />
                     </linearGradient>
                  ))}
               </defs>

               {nodes.map(n => (
                  <motion.line
                     key={n.id}
                     x1="50%" y1="50%"
                     x2={`${n.cx}%`} y2={`${n.cy}%`}
                     stroke={`url(#grad-${n.id})`}
                     strokeWidth={hoveredNode === n.id ? "4" : "2"}
                     className={`c-line ${hoveredNode === n.id ? 'target-1' : ''}`}
                     style={{
                        filter: hoveredNode === n.id ? `drop-shadow(0 0 15px ${n.color})` : 'none',
                        strokeDasharray: hoveredNode === n.id ? 'none' : '8, 12'
                     }}
                  />
               ))}
            </svg>

            {/* Center Origin Node */}
            <div className="c-node c-center" style={{ left: '50%', top: '50%' }}>
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="fs-1">💎</motion.div>
            </div>

            {/* The Interactive Edge Nodes */}
            {nodes.map((n) => (
               <div
                  key={n.id}
                  className="c-node c-feature"
                  style={{ left: n.x, top: n.y, '--n-color': n.color }}
                  onMouseEnter={() => setHoveredNode(n.id)}
                  onMouseLeave={() => setHoveredNode(null)}
               >
                  <div className="c-icon">{n.icon}</div>
                  <div className="c-content">
                     <h4 className="fw-bold mb-1" style={{ color: n.color }}>{n.title}</h4>
                     <p className="text-light m-0 text-wrap fs-6 lh-lg" style={{ width: '250px' }}>{n.desc}</p>
                  </div>
               </div>
            ))}
         </div>

         {/* Fallback Premium Grid for Mobile/Tablet */}
         <div className="container d-block d-lg-none mt-5">
            <div className="row g-4 justify-content-center">
               {nodes.map(n => (
                  <div className="col-md-6" key={n.id}>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="p-4 rounded-4 shadow-lg text-center" style={{ background: '#11131a', border: `1px solid ${n.color}` }}
                     >
                        <div className="fs-1 mb-3 d-inline-block rounded-circle p-3 shadow" style={{ background: 'rgba(255,255,255,0.05)' }}>{n.icon}</div>
                        <h4 className="fw-bold" style={{ color: n.color }}>{n.title}</h4>
                        <p className="text-secondary mt-3 lh-lg">{n.desc}</p>
                     </motion.div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default WPWhyLove;
