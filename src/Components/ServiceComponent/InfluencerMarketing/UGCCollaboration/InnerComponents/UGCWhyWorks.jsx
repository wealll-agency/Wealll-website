import React from 'react';
import { motion } from 'framer-motion';

const UGCWhyWorks = () => {
    const benefits = [
        { title: "Authentic Feel", desc: "Builds instant trust with your audience through real, unpolished human connection.", icon: "fa-heart", color: "#ba68c8" },
        { title: "10x Engagement", desc: "Significantly higher ROI compared to standard studio-produced branded commercials.", icon: "fa-bolt", color: "#4fc3f7" },
        { title: "Infinite Scalability", desc: "Generate massive volumes of creative assets without the overhead of film crews.", icon: "fa-layer-group", color: "#81c784" },
        { title: "Native Conversions", desc: "Content designed specifically to perform and convert natively on social algorithms.", icon: "fa-cart-shopping", color: "#ffb74d" },
    ];

    return (
        <section className="ugc-why-matrix" style={{ padding: '100px 0', background: '#0a0c1a', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            
            {/* Soft background glow */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: 'radial-gradient(circle at left, rgba(186,104,200,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>

            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left: Punchline */}
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ position: 'relative', zIndex: 2 }}>
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', color: '#a0a5b5', fontSize: '0.9rem', marginBottom: '20px', letterSpacing: '1px' }}>
                                THE UGC ADVANTAGE
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', color: '#fff', letterSpacing: '-1px' }}>
                                People trust people. <br/>
                                <span className="ugc-gradient-text">NOT ADS.</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#a0a5b5', lineHeight: '1.6' }}>
                                Modern consumers are blind to polished commercials. UGC injects raw authenticity into your marketing funnel, turning relatable content into high-converting performance engines.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Glass Bento Grid */}
                    <div className="col-lg-6 offset-lg-1" style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            {benefits.map((benefit, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="ugc-bento-glass"
                                >
                                    <div className="bento-icon-glow" style={{ background: `${benefit.color}20`, color: benefit.color }}>
                                        <i className={`fa-solid ${benefit.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '20px 0 10px', color: '#fff' }}>{benefit.title}</h4>
                                    <p style={{ color: '#8a8f9c', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UGCWhyWorks;
