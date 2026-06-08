import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './wordpress-masterclass.css';

const features = [
   { id: 1, title: 'Experienced Coders', desc: 'Immensely experienced and knowledgeable of the tricks and turns of WordPress, our developers build robust systems structured for performance at scale.', icon: '👨‍💻', color: '#38bdf8' },
   { id: 2, title: 'Cost-Efficiency', desc: 'We never demand a price that goes above the requirement, keeping our profit minimum while maximizing your ROI globally.', icon: '📉', color: '#22c55e' },
   { id: 3, title: 'Punctual Delivery', desc: 'We value time above everything. Missing a deadline is not an option in our highly strictly enforced production timeline.', icon: '⏱️', color: '#eab308' },
   { id: 4, title: 'Free Support', desc: 'Our dedicated support team is always active globally to instantly identify any system glitch and resolve it for free!', icon: '🎧', color: '#a855f7' }
];

const WPWhyUs = () => {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"]
   });
   const laserHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

   return (
      <section className="py-5 wp_why_us" style={{ background: '#0b0c10', overflow: 'hidden' }}>
         <div className="container py-5 text-center position-relative z-2">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div className="d-inline-flex border border-secondary rounded-pill px-4 py-2 mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <span className="text-uppercase tracking-widest fw-semibold text-primary" style={{ letterSpacing: '2px', fontSize: '12px' }}>Why Choose Intlum</span>
               </div>
               <h2 className="display-3 fw-bold text-white mb-4">
                  WordPress & Us: <span style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Perfect Match</span>
               </h2>
               <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '800px' }}>
                  Follow the path to see why we are acknowledged globally for our cutting-edge development standards.
               </p>
            </motion.div>
         </div>

         <div className="container laser-timeline" ref={containerRef}>
            {/* Vertical Laser Center Line */}
            <div className="laser-center-line">
               <motion.div
                  className="laser-beam"
                  style={{ height: laserHeight }}
               ></motion.div>
            </div>

            <div className="row gy-5 position-relative z-1 pt-5">
               {features.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                     <div key={item.id} className="col-12 w-100">
                        <div className="row justify-content-center">
                           {/* Left Spacer or Content */}
                           <div className="col-lg-5 col-md-10">
                              {isLeft && (
                                 <motion.div
                                    initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }}
                                    className="laser-card-wrapper left-side"
                                 >
                                    <div className="laser-card" style={{ '--l-color': item.color }}>
                                       <div className="laser-icon-wrapper" style={{ color: item.color }}>{item.icon}</div>
                                       <h3 className="text-white fw-bold mb-3 fs-3">{item.title}</h3>
                                       <p className="text-secondary fs-6 lh-lg mb-0">{item.desc}</p>
                                    </div>
                                    {/* This dot connects to the center laser */}
                                    <div className="laser-target-dot" style={{ '--l-color': item.color }}></div>
                                 </motion.div>
                              )}
                           </div>

                           {/* Center Spacer (Line goes through here on desktop) */}
                           <div className="col-lg-2 d-none d-lg-block"></div>

                           {/* Right Spacer or Content */}
                           <div className="col-lg-5 col-md-10">
                              {!isLeft && (
                                 <motion.div
                                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }}
                                    className="laser-card-wrapper right-side"
                                 >
                                    <div className="laser-card" style={{ '--l-color': item.color }}>
                                       <div className="laser-icon-wrapper" style={{ color: item.color }}>{item.icon}</div>
                                       <h3 className="text-white fw-bold mb-3 fs-3">{item.title}</h3>
                                       <p className="text-secondary fs-6 lh-lg mb-0">{item.desc}</p>
                                    </div>
                                    <div className="laser-target-dot" style={{ '--l-color': item.color }}></div>
                                 </motion.div>
                              )}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default WPWhyUs;
