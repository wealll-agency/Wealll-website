import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoveryTimelineWho = () => {
    return (
        <section className="gmb-dark-bg" style={{ padding: '80px 0 150px 0' }}>
            <div className="container">
                <div className="row g-4">
                    {/* Left Column: Timeline Bento */}
                    <div className="col-lg-5">
                        <motion.div 
                            className="gmb-timeline-bento"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="gmb-section-label" style={{ color: 'var(--gmb-blue)', borderColor: 'var(--gmb-blue-glow)', width: 'fit-content' }}>
                                TIMELINE
                            </span>
                            <h3 className="gmb-timeline-title">
                                Fast & Transparent <br/><span className="gmb-gradient-text-blue">Process</span>
                            </h3>
                            
                            <div className="gmb-timeline-group">
                                <h4 className="gmb-timeline-label" style={{ color: 'var(--gmb-blue)' }}>STANDARD CASES</h4>
                                <p className="gmb-timeline-value">5–8 <span className="gmb-timeline-unit">working days</span></p>
                            </div>
                            
                            <div className="gmb-timeline-group" style={{ marginBottom: '40px' }}>
                                <h4 className="gmb-timeline-label" style={{ color: 'var(--gmb-yellow)' }}>COMPLEX CASES</h4>
                                <p className="gmb-timeline-value">Up to 12 <span className="gmb-timeline-unit">working days</span></p>
                            </div>

                            <p style={{ color: '#9090a0', fontSize: '1.05rem', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: 'auto' }}>
                                👉 Timeline depends on Google verification & response time.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Audience Bento Grid */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            <div className="col-12">
                                <span className="gmb-section-label" style={{ background: 'rgba(255,255,255,0.02)' }}>WHO IS THIS FOR?</span>
                                <h2 className="gmb-section-title-md" style={{ marginBottom: '10px' }}>
                                    This service is ideal for:
                                </h2>
                            </div>

                            {[
                                { title: "Local Businesses", desc: "Stay visible and control your listing.", icon: <i className="fa-solid fa-store"></i>, color: "var(--gmb-blue)" },
                                { title: "Clinics, Spas & Salons", desc: "Customer trust depends on your presence.", icon: <i className="fa-solid fa-house-medical"></i>, color: "var(--gmb-green)" },
                                { title: "Retail & Service Providers", desc: "Missed control = missed leads.", icon: <i className="fa-solid fa-basket-shopping"></i>, color: "var(--gmb-yellow)" },
                                { title: "Multi-Location Chains", desc: "Unified control over your entire network.", icon: <i className="fa-solid fa-network-wired"></i>, color: "var(--gmb-red)" }
                            ].map((item, idx) => (
                                <div className="col-md-6" key={idx}>
                                    <motion.div 
                                        className="gmb-audience-card d-block"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5, background: `rgba(255,255,255,0.03)` }}
                                    >
                                        <div className="gmb-icon-box-lg" style={{ color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '15px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '1.05rem', color: '#a0a0b0', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GmbRecoveryTimelineWho;
