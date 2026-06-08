import React from 'react';
import { motion } from 'framer-motion';
import './fb-recovery-dark.css';

const matrixData = [
    { title: "Proven Workflows", desc: "Proprietary recovery sequences verified over thousands of successful restorations.", icon: <i className="fa-solid fa-rotate"></i> },
    { title: "Enterprise Systems", desc: "Expertise in managing complex Business Manager & Ad Account structures.", icon: <i className="fa-solid fa-server"></i> },
    { title: "Meta Partnerships", desc: "Direct path to Meta internal escalation channels for high-priority cases.", icon: <i className="fa-solid fa-handshake"></i> },
    { title: "Security First", desc: "We don't just recover; we harden your security settings to prevent future breaches.", icon: <i className="fa-solid fa-lock"></i> },
    { title: "Shield Guarantee", desc: "Advanced protection protocols applied to every recovered asset.", icon: <i className="fa-solid fa-shield-halved"></i> },
    { title: "Forensic Auditing", desc: "Deep-dive analysis of account history to identify the exact point of breach.", icon: <i className="fa-solid fa-magnifying-glass-chart"></i> }
];

const FbRecoveryWhyUs = () => {
    return (
        <section className="fb-dark-bg fb-section-py-100 fb-relative fb-overflow-hidden">
            <div className="fb-shield-glow"></div>

            <div className="container fb-z-2">
                <div className="row g-5 align-items-center">
                    {/* Left Side: Dynamic Text Content */}
                    <div className="col-lg-5">
                        <div className="fb-security-badge">
                            <span style={{ animation: 'fbPulseSlow 2s infinite' }}>●</span> SECURE RESTORATION VERIFIED
                        </div>
                        <h2 className="fb-section-title-md" style={{ marginBottom: '25px', lineHeight: 1.1 }}>
                            We Don't Just Recover <br /> <span className="fb-gradient-text-safe">We Secure.</span>
                        </h2>
                        <p className="fb-subtext" style={{ lineHeight: 1.8, marginBottom: '40px' }}>
                            Restoring your access is only step one. We build a digital fortress around your assets so you never lose control again. Powered by Facebook-native security architecture.
                        </p>

                        <motion.div
                            style={{ background: 'rgba(24, 119, 242, 0.05)', borderLeft: '4px solid var(--fb-safe)', padding: '30px', borderRadius: '0 20px 20px 0' }}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 style={{ color: '#fff', fontWeight: 800, marginBottom: '10px' }}>Total Ownership Restoration</h4>
                            <p style={{ color: '#808090', margin: 0 }}>Every case includes a comprehensive security audit to detach unauthorized apps and rogue admins permanently.</p>
                        </motion.div>
                    </div>

                    {/* Right Side: Security Matrix Grid */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {matrixData.map((item, idx) => (
                                <div className="col-md-6" key={idx}>
                                    <motion.div
                                        className="fb-matrix-node"
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="fb-matrix-icon">{item.icon}</div>
                                        <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '15px' }}>{item.title}</h4>
                                        <p style={{ color: '#a0a0b0', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
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

export default FbRecoveryWhyUs;
