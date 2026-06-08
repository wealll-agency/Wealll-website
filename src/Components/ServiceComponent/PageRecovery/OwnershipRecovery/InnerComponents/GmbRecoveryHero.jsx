import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

// Import images
import problemImg from '../../../../../assets/images/gmb_ownership_problem.png';
import solutionImg from '../../../../../assets/images/gmb_ownership_solution.png';

const GmbRecoveryHero = () => {

    return (
        <section className="gmb-dark-bg gmb-section-py-80 gmb-relative gmb-overflow-hidden">
            <div className="container gmb-relative gmb-z-2">
                
                {/* Hero Headers */}
                <div className="row justify-content-center text-center mb-5 pb-3">
                    <div className="col-lg-10">
                        <motion.span 
                            className="gmb-section-label"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <i className="fa-brands fa-google me-2" style={{ color: 'var(--gmb-blue)' }}></i> GMB Recovery Experts
                        </motion.span>
                        <motion.h2 
                            className="gmb-hero-title"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            Regain Control of Your <br/> <span className="gmb-gradient-text-blue">Business Listing.</span>
                        </motion.h2>
                        <p className="gmb-subtext">
                            We help you reclaim full ownership and restore control of your business presence on Google — fast, secure, and compliant.
                        </p>
                        
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <span className="badge gmb-badge-green" style={{ background: 'rgba(52, 168, 83, 0.1)', color: 'var(--gmb-green)', border: '1px solid rgba(52, 168, 83, 0.2)', padding: '10px 15px', fontSize: '0.9rem', marginBottom: 0 }}>
                                <i className="fa-solid fa-check me-2"></i>Ownership Recovery
                            </span>
                            <span className="badge gmb-badge-green" style={{ background: 'rgba(52, 168, 83, 0.1)', color: 'var(--gmb-green)', border: '1px solid rgba(52, 168, 83, 0.2)', padding: '10px 15px', fontSize: '0.9rem', marginBottom: 0 }}>
                                <i className="fa-solid fa-headset me-2"></i>Google Escalation
                            </span>
                            <span className="badge gmb-badge-green" style={{ background: 'rgba(52, 168, 83, 0.1)', color: 'var(--gmb-green)', border: '1px solid rgba(52, 168, 83, 0.2)', padding: '10px 15px', fontSize: '0.9rem', marginBottom: 0 }}>
                                <i className="fa-regular fa-clock me-2"></i>Resolution in 5–12 Days
                            </span>
                        </div>
                    </div>
                </div>

                {/* Zigzag Section 1: Are you facing this */}
                <div className="row g-5 align-items-center mb-5 pb-5">
                    <div className="col-lg-6">
                        <motion.div 
                            className="gmb-hero-img-wrapper problem"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={problemImg} alt="GMB Access Problem" className="img-fluid rounded-4" />
                            <div className="gmb-img-glow"></div>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div 
                            className="gmb-hero-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ borderTop: '4px solid var(--gmb-red)' }}
                        >
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px', color: '#fff' }}>
                                Are You Facing This?
                            </h3>
                            <ul className="gmb-problem-list">
                                <li>
                                    <i className="fa-solid fa-xmark gmb-problem-icon"></i>
                                    You lost access to your GMB account
                                </li>
                                <li>
                                    <i className="fa-solid fa-xmark gmb-problem-icon"></i>
                                    A former agency or employee owns your listing
                                </li>
                                <li>
                                    <i className="fa-solid fa-xmark gmb-problem-icon"></i>
                                    Ownership conflicts with another user
                                </li>
                                <li>
                                    <i className="fa-solid fa-xmark gmb-problem-icon"></i>
                                    Duplicate listings creating confusion
                                </li>
                                <li>
                                    <i className="fa-solid fa-xmark gmb-problem-icon"></i>
                                    Cannot manage reviews, calls, or updates
                                </li>
                            </ul>
                            <div className="gmb-alert-box" style={{ background: 'rgba(234, 67, 53, 0.05)', borderColor: 'rgba(234, 67, 53, 0.15)' }}>
                                <div className="gmb-alert-icon" style={{ background: 'rgba(234, 67, 53, 0.1)' }}>
                                    <i className="fa-solid fa-triangle-exclamation" style={{ color: 'var(--gmb-red)' }}></i>
                                </div>
                                <p className="gmb-alert-text">
                                    Your business may still appear online — but you have no control over it. Every day without access is lost revenue.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Zigzag Section 2: What we solve */}
                <div className="row g-5 align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-6">
                        <motion.div 
                            className="gmb-hero-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ borderTop: '4px solid var(--gmb-blue)' }}
                        >
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px', color: '#fff' }}>
                                What We Solve
                            </h3>
                            <p style={{ color: '#a0a0b0', marginBottom: '25px', lineHeight: 1.6 }}>
                                We are <strong>Google Business Ownership Recovery Experts</strong>. We work directly inside the Google ecosystem to resolve absolute dead-ends natively.
                            </p>
                            <ul className="gmb-problem-list">
                                <li>
                                    <i className="fa-solid fa-key gmb-solve-icon" style={{ color: 'var(--gmb-blue)' }}></i>
                                    Lost access recovery
                                </li>
                                <li>
                                    <i className="fa-solid fa-scale-balanced gmb-solve-icon" style={{ color: 'var(--gmb-blue)' }}></i>
                                    Ownership disputes resolution
                                </li>
                                <li>
                                    <i className="fa-solid fa-user-shield gmb-solve-icon" style={{ color: 'var(--gmb-blue)' }}></i>
                                    Unauthorized account control issues
                                </li>
                                <li>
                                    <i className="fa-solid fa-eraser gmb-solve-icon" style={{ color: 'var(--gmb-blue)' }}></i>
                                    Duplicate listing cleanup
                                </li>
                                <li>
                                    <i className="fa-solid fa-location-dot gmb-solve-icon" style={{ color: 'var(--gmb-blue)' }}></i>
                                    Business listing control restoration
                                </li>
                            </ul>
                            <div className="gmb-alert-box" style={{ background: 'rgba(66, 133, 244, 0.05)', borderColor: 'rgba(66, 133, 244, 0.15)' }}>
                                <div className="gmb-alert-icon" style={{ background: 'rgba(66, 133, 244, 0.1)' }}>
                                    <i className="fa-solid fa-shield" style={{ color: 'var(--gmb-blue)' }}></i>
                                </div>
                                <p className="gmb-alert-text">
                                    We work directly within the Google Business Profile ecosystem to ensure safe and compliant recovery.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div 
                            className="gmb-hero-img-wrapper solution"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={solutionImg} alt="GMB Solution Recovery" className="img-fluid rounded-4" />
                            <div className="gmb-img-glow"></div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GmbRecoveryHero;
