import React from 'react';
import { motion } from 'framer-motion';

const AffiliateContext = () => {
    const points = [
        { title: "Pay for Performance", desc: "A low-risk, high-reward model where you only pay when an actual sale or lead is generated.", icon: "fa-bullseye" },
        { title: "Scalable Revenue", desc: "Build an infinite sales force. The more affiliates you onboard, the larger your revenue channel grows.", icon: "fa-arrow-trend-up" },
        { title: "New Audiences", desc: "Tap into niche communities and audiences that traditional advertising channels struggle to reach.", icon: "fa-globe" },
        { title: "Continuous Sales", desc: "Generate passive, continuous sales pipelines through long-term creator and publisher partnerships.", icon: "fa-infinity" }
    ];

    return (
        <section className="affiliate-context-section affiliate-dark-bg">
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left: Punchline */}
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(0,176,255,0.1)', border: '1px solid rgba(0,176,255,0.3)', borderRadius: '30px', color: '#00b0ff', fontSize: '0.8rem', marginBottom: '20px', letterSpacing: '2px', fontFamily: 'monospace' }}>
                                // BUSINESS CONTEXT
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', color: '#fff', letterSpacing: '-1px' }}>
                                Why Affiliate Marketing Is a  <br/>
                                <span className="affiliate-gradient-text">Powerful Growth Channel</span>
                            </h2>
                            <div style={{ marginTop: '40px', paddingLeft: '20px', borderLeft: '4px solid #00e676' }}>
                                <p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 600, margin: 0, fontStyle: 'italic' }}>
                                    "You don’t spend first — <br/>
                                    <span style={{ color: '#00e676' }}>you grow as you earn."</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Crystal Grid */}
                    <div className="col-lg-6 offset-lg-1">
                        <div className="affiliate-crystal-grid">
                            {points.map((point, index) => (
                                <motion.div 
                                    className="aff-crystal-card"
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="aff-icon-wrapper">
                                        <i className={`fa-solid ${point.icon}`}></i>
                                    </div>
                                    <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>{point.title}</h4>
                                    <p style={{ color: '#8a8f9c', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AffiliateContext;
