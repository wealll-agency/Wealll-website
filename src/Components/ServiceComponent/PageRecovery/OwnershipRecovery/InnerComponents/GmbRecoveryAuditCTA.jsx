import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoveryAuditCTA = () => {
    return (
        <section className="gmb-dark-bg gmb-section-py-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <motion.div
                            className="gmb-vault-container"
                            style={{ 
                                background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.1), rgba(66, 133, 244, 0.05))',
                                border: '1px solid rgba(52, 168, 83, 0.2)',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: '40px'
                            }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ position: 'absolute', right: '-50px', bottom: '-50px', fontSize: '15rem', color: 'rgba(52, 168, 83, 0.05)', zIndex: 0, pointerEvents: 'none' }}>
                                <i className="fa-solid fa-magnifying-glass-chart"></i>
                            </div>

                            <div style={{ flex: '1 1 500px', position: 'relative', zIndex: 1 }}>
                                <span className="badge gmb-badge-green">
                                    <i className="fa-solid fa-magnet me-2"></i> Free Audit
                                </span>
                                <h2 className="gmb-section-title-md">
                                    Get a Free GMB <br /><span style={{ color: 'var(--gmb-blue)' }}>Ownership Recovery Audit</span>
                                </h2>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <li style={{ fontSize: '1.1rem', color: '#e0e0e0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <i className="fa-solid fa-check-circle" style={{ color: 'var(--gmb-green)', fontSize: '1.3rem' }}></i> Ownership Status Check
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#e0e0e0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <i className="fa-solid fa-check-circle" style={{ color: 'var(--gmb-green)', fontSize: '1.3rem' }}></i> Custom Recovery Plan
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#e0e0e0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <i className="fa-solid fa-check-circle" style={{ color: 'var(--gmb-green)', fontSize: '1.3rem' }}></i> Required Documents Checklist
                                    </li>
                                </ul>
                                <p style={{ color: '#a0a0b0', fontStyle: 'italic', margin: 0 }}>👉 Contact Now via Call, WhatsApp, or Form to book your slot.</p>
                            </div>

                            <div className='audit_cta_button' style={{ flex: '1 1 300px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <a href="tel:+918013374221" className="btn" style={{ background: 'var(--gmb-blue)', color: '#fff', padding: '15px 30px', fontSize: '1.1rem', fontWeight: 700, borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 10px 20px var(--gmb-blue-glow)' }}>
                                    <i className="fa-solid fa-phone-volume"></i> Call Now
                                </a>
                                <a href="https://wa.me/918013374221" className="btn" style={{ background: 'var(--gmb-green)', color: '#fff', padding: '15px 30px', fontSize: '1.1rem', fontWeight: 700, borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 10px 20px var(--gmb-green-glow)' }}>
                                    <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
                                </a>
                                <a href="#contact" className="btn" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '15px 30px', fontSize: '1.1rem', fontWeight: 700, borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    <i className="fa-solid fa-envelope"></i> Fill the Form
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GmbRecoveryAuditCTA;
