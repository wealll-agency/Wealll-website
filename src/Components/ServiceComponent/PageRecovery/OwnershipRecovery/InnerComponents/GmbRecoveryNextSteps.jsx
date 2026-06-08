import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoveryNextSteps = () => {
    return (
        <section className="gmb-dark-bg gmb-section-pb-100" style={{ paddingTop: '50px' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <motion.div
                            className="gmb-vault-container"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="badge gmb-badge-yellow">
                                <i className="fa-solid fa-bolt me-2"></i> NEXT STEP
                            </span>
                            <h2 className="gmb-section-title-md">
                                Recommended Scale Strategy
                            </h2>
                            <p className="gmb-subtext" style={{ margin: '0 0 30px 0', textAlign: 'left' }}>
                                Once ownership is fully recovered, we recommend scaling this service through the following proven funnel:
                            </p>

                            <div className="row g-4">
                                {[
                                    { title: "Location-Based Pages", desc: "Target city-wise leads for maximum local SEO visibility.", icon: "map-location-dot", color: "var(--gmb-blue)" },
                                    { title: "Google Ads Campaigns", desc: "Run high-intent keywords capturing immediate distress searches.", icon: "bullseye", color: "var(--gmb-red)" },
                                    { title: "Add Proof & Logic", desc: "Build out Case Studies and Video Proof for social credibility.", icon: "video", color: "var(--gmb-green)" },
                                    { title: "Build Recovery Funnel", desc: "Systematize GMB recovery leads through an automated CRM funnel.", icon: "filter-circle-dollar", color: "var(--gmb-yellow)" }
                                ].map((step, idx) => (
                                    <div className="col-md-3" key={idx}>
                                        <div className="gmb-audience-card d-block" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px' }}>
                                            <div className="gmb-icon-box-lg" style={{ padding: '15px', background: `${step.color}22`, borderRadius: '15px', width: 'auto', height: 'auto', justifyContent: 'flex-start', marginBottom: 0, fontSize: '1.5rem', border: 'none' }}>
                                                <i className={`fa-solid fa-${step.icon}`} style={{ color: step.color }}></i>
                                            </div>
                                            <div>
                                                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 5px 0' }}>{step.title}</h4>
                                                <p style={{ color: '#a0a0b0', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>{step.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GmbRecoveryNextSteps;
