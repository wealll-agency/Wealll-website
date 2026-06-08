import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const matrixData = [
    { title: "Proven GMB Workflows", desc: "Proprietary sequences mapped specifically to Google's recovery mechanics.", icon: <i className="fa-solid fa-code-branch"></i>, color: "var(--gmb-blue)" },
    { title: "Policy Expertise", desc: "Deep understanding of Google Business Profile guidelines and TOS.", icon: <i className="fa-solid fa-book-open"></i>, color: "var(--gmb-green)" },
    { title: "Fast Escalation", desc: "Direct paths to escalate priority cases for significantly faster response times.", icon: <i className="fa-solid fa-bolt"></i>, color: "var(--gmb-yellow)" },
    { title: "High Success Rate", desc: "Successfully resolved hundreds of complex ownership disputes and hacks.", icon: <i className="fa-solid fa-chart-line"></i>, color: "var(--gmb-green)" },
    { title: "Transparent Communication", desc: "You are kept fully updated at every stage of the recovery operation.", icon: <i className="fa-solid fa-comments"></i>, color: "var(--gmb-blue)" },
    { title: "Continuous Protection", desc: "Post-recovery auditing to secure your listing against future attacks.", icon: <i className="fa-solid fa-shield-halved"></i>, color: "var(--gmb-red)" }
];

const GmbRecoveryWhyUs = () => {
    return (
        <section className="gmb-dark-bg gmb-section-py-100 gmb-relative gmb-overflow-hidden">
            <div className="gmb-pulse-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px' }}></div>

            <div className="container gmb-relative gmb-z-2">
                <div className="row g-5 align-items-center">
                    {/* Left Side: Dynamic Text Content */}
                    <div className="col-lg-5">
                        <div className="gmb-section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gmb-green)', border: '1px solid rgba(52, 168, 83, 0.2)', background: 'rgba(52, 168, 83, 0.1)' }}>
                            <span style={{ animation: 'fbPulseSlow 2s infinite' }}>●</span> SECURE RESTORATION VERIFIED
                        </div>
                        <h2 className="gmb-section-title-lg">
                            We Don’t Just Recover <br /> <span className="gmb-gradient-text-primary">We Secure.</span>
                        </h2>
                        <p className="gmb-desc-text">
                            Restoring your access is only step one. We focus on restoring your business control & visibility while locking out unauthorized parties permanently.
                        </p>

                        <motion.div
                            className="gmb-security-guarantee"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 style={{ color: '#fff', fontWeight: 800, marginBottom: '10px' }}>Local Visibility Guarantee</h4>
                            <p style={{ color: '#808090', margin: 0 }}>Every recovery ends with a deep security audit to protect your most valuable local lead source.</p>
                        </motion.div>
                    </div>

                    {/* Right Side: Security Matrix Grid */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {matrixData.map((item, idx) => (
                                <div className="col-md-6" key={idx}>
                                    <motion.div
                                        className="gmb-audience-card d-block"
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5, borderColor: item.color, background: 'rgba(66, 133, 244, 0.02)' }}
                                    >
                                        <div className="gmb-icon-box-lg" style={{ width: '50px', height: '50px', borderRadius: '12px', fontSize: '1.5rem', color: item.color, marginBottom: '20px' }}>
                                            {item.icon}
                                        </div>
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

export default GmbRecoveryWhyUs;
