import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoveryComboCTA = () => {
    return (
        <section className="gmb-dark-bg gmb-section-py-100 gmb-relative gmb-combo-cta-section">
            <div className="container">
                <div className="row g-4">
                    
                    {/* Left Column: Urgent Recovery CTA */}
                    <div className="col-lg-6">
                        <motion.div
                            className="gmb-cta-container"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            id="gmb-urgent-cta-card"
                        >
                            <div className="gmb-pulse-bg"></div>

                            <span className="badge gmb-badge-red" style={{ width: 'fit-content' }}>
                                <i className="fa-solid fa-bolt me-2"></i> URGENT
                            </span>

                            <h2 className="gmb-section-title-md">
                                Don't Let Someone Else <br /> <span style={{ color: 'var(--gmb-red)' }}>Control Your Business</span>
                            </h2>

                            <p className="gmb-desc-text">
                                Your Google listing is your <strong>#1 local lead source</strong>. Every day without access is revenue lost to your competitors.
                                <br /> <span style={{ color: '#fff', fontWeight: 600 }}>Take back control today.</span>
                            </p>

                            <motion.a
                                href="tel:+918013374221"
                                className='cta_button gmb-btn-glow-blue'
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '18px 40px',
                                    background: 'var(--gmb-blue)',
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    width: 'fit-content',
                                    zIndex: 2,
                                    position: 'relative'
                                }}
                                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(66, 133, 244, 0.6)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="fa-solid fa-phone"></i> Book Free Recovery Call
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Column: Free Audit CTA */}
                    <div className="col-lg-6">
                        <motion.div
                            className="gmb-vault-container"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            id="gmb-audit-cta-card"
                        >
                            <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', fontSize: '10rem', color: 'rgba(52, 168, 83, 0.03)', zIndex: 0, pointerEvents: 'none' }}>
                                <i className="fa-solid fa-magnifying-glass-chart"></i>
                            </div>

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <span className="badge gmb-badge-green">
                                    <i className="fa-solid fa-magnet me-2"></i> Free Audit
                                </span>
                                <h2 className="gmb-section-title-md">
                                    Free GMB <span style={{ color: 'var(--gmb-blue)' }}>Ownership <br/>Recovery Audit</span>
                                </h2>
                                <ul className="gmb-problem-list" style={{ marginBottom: '35px' }}>
                                    {[
                                        "Ownership Status Check",
                                        "Custom Recovery Plan",
                                        "Required Documents Checklist"
                                    ].map((item, i) => (
                                        <li key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '10px 0' }}>
                                            <i className="fa-solid fa-check-circle gmb-solve-icon"></i> {item}
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className='audit_cta_button' style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                    <a href="https://wa.me/918013374221" className="btn gmb-btn-glow-green" style={{ background: 'var(--gmb-green)', color: '#fff', padding: '12px 25px', fontSize: '1rem', fontWeight: 700, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
                                    </a>
                                    <a href="#contact" className="btn" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 25px', fontSize: '1rem', fontWeight: 700, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-envelope"></i> Fill the Form
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GmbRecoveryComboCTA;
