import React from 'react';
import { motion } from 'framer-motion';
import './fb-recovery-dark.css';

const FbRecoveryProcess = () => {
    return (
        <section className="fb-dark-bg fb-section-py-50 fb-section-pb-100 fb-overflow-hidden">
            <div className="container">
                <div className="text-center mb-5 pb-4 top_info">
                    <span className="fb-section-label">Our Recovery Process</span>
                    <h2 className="fb-section-title-md">
                        Step-by-Step <span className="fb-gradient-text-safe">Professional Approach</span>
                    </h2>
                </div>

                {/* Neural Network Layout */}
                <div className="fb-neural-wrapper">
                    {/* SVG background connections */}
                    <svg className="fb-neural-svg d-none d-lg-block">
                        {/* Lines from left column to center */}
                        <line x1="20%" y1="15%" x2="50%" y2="50%" className="fb-neural-line" />
                        <line x1="15%" y1="50%" x2="50%" y2="50%" className="fb-neural-line" />
                        <line x1="20%" y1="85%" x2="50%" y2="50%" className="fb-neural-line" />
                        
                        {/* Lines from right column to center */}
                        <line x1="80%" y1="15%" x2="50%" y2="50%" className="fb-neural-line" />
                        <line x1="85%" y1="50%" x2="50%" y2="50%" className="fb-neural-line" />
                        <line x1="80%" y1="85%" x2="50%" y2="50%" className="fb-neural-line" />
                    </svg>

                    <div className="row align-items-center h-100">
                        {/* Left Column (Steps 1, 2, 3) */}
                        <div className="col-12 col-lg-4 fb-neural-col mb-5 mb-lg-0">
                            {[ 
                                { num: "01", title: "Account Audit", desc: "We analyze the issue and plot the fastest recovery path." },
                                { num: "02", title: "Documentation Support", desc: "We prepare you with all required ownership proofs for Meta." },
                                { num: "03", title: "Direct Escalation", desc: "We connect directly with Meta support for faster resolution." }
                            ].map((step, idx) => (
                                <motion.div className="fb-neural-node" key={`left-${idx}`} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
                                    <span className="fb-n-num">{step.num}</span>
                                    <h4 className="fb-n-title">{step.title}</h4>
                                    <p className="fb-n-desc">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center Column (Pulsar) */}
                        <div className="col-12 col-lg-4 fb-neural-center d-none d-lg-flex">
                            <motion.div className="fb-core-pulsar" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }} viewport={{ once: true }}>
                                <span className="fb-core-icon"><i className="fa-solid fa-shield-halved"></i></span>
                            </motion.div>
                        </div>

                        {/* Right Column (Steps 4, 5, 6) */}
                        <div className="col-12 col-lg-4 fb-neural-col">
                            {[ 
                                { num: "04", title: "Business Manager Fix", desc: "We restructure access & permissions to eliminate rogue access." },
                                { num: "05", title: "Access Restoration", desc: "Ensure full control is restored to the rightful owner exclusively." },
                                { num: "06", title: "Security Hardening", desc: "Implement 2FA setup and role-based protection against hacks." }
                            ].map((step, idx) => (
                                <motion.div className="fb-neural-node" key={`right-${idx}`} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
                                    <span className="fb-n-num">{step.num}</span>
                                    <h4 className="fb-n-title">{step.title}</h4>
                                    <p className="fb-n-desc">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FbRecoveryProcess;
