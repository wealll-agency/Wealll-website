import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoveryProcess = () => {
    return (
        <section className="gmb-dark-bg gmb-section-pb-100 gmb-overflow-hidden" style={{ paddingTop: '50px' }}>
            <div className="container">
                <div className="text-center mb-5 pb-4 top_info">
                    <span className="gmb-section-label">Our Recovery Process</span>
                    <h2 className="gmb-section-title-lg">
                        Step-by-Step <span className="gmb-gradient-text-blue">Professional Approach</span>
                    </h2>
                </div>

                {/* Vertical Process Layout */}
                <div className="row g-4 justify-content-center">
                    {[
                        { num: "01", title: "Account Audit & Diagnosis", desc: "We analyze ownership status and identify the optimal recovery path.", icon: "magnifying-glass-chart" },
                        { num: "02", title: "Ownership Claim Submission", desc: "We initiate the official, compliant claim process directly via Google.", icon: "bullhorn" },
                        { num: "03", title: "Documentation Prep", desc: "We help you legally prepare all required proofs (GST, License, Utility Bill).", icon: "file-signature" },
                        { num: "04", title: "Google Escalation", desc: "We escalate your case internally for significantly faster resolution.", icon: "bolt" },
                        { num: "05", title: "Video Verification Assist", desc: "We guide you step-by-step for successful Google Meet/Video verification.", icon: "video" },
                        { num: "06", title: "Ownership Transfer Complete", desc: "We ensure full primary ownership and admin access is restored to you exclusively.", icon: "check-double" }
                    ].map((step, idx) => (
                        <div className="col-12 col-md-6 col-lg-4" key={idx}>
                            <motion.div 
                                className="gmb-hero-card" 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ delay: idx * 0.1 }} 
                                viewport={{ once: true }}
                                style={{
                                    borderLeft: `4px solid ${idx < 3 ? 'var(--gmb-yellow)' : 'var(--gmb-green)'}`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <span className="gmb-n-num" style={{ color: 'var(--gmb-blue)', fontWeight: 900, fontSize: '1.2rem' }}>{step.num}</span>
                                        <div className="gmb-hero-icon" style={{ marginBottom: 0, width: '40px', height: '40px', background: 'transparent', border: 'none' }}>
                                            <i className={`fa-solid fa-${step.icon}`}></i>
                                        </div>
                                    </div>
                                    <h4 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 800, marginBottom: '15px' }}>{step.title}</h4>
                                    <p style={{ fontSize: '1rem', color: '#a0a0b0', margin: 0, lineHeight: 1.6 }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GmbRecoveryProcess;
