import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoveryCaseStudy = () => {
    return (
        <section className="gmb-dark-bg" style={{ padding: '50px 0', borderTop: '1px solid var(--gmb-border)' }}>
            <div className="container">
                <div className="row g-5 align-items-center">
                    
                    {/* Left: Client Story & Snapshot */}
                    <div className="col-lg-6">
                        <motion.span 
                            className="gmb-section-label"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Real Client Recovery Story
                        </motion.span>
                        <h2 className="gmb-section-title-md">
                            From Zero Access to <br/><span className="gmb-gradient-text-primary">Full Ownership</span>
                        </h2>
                        <p className="gmb-desc-text">
                            A local business lost access to their primary revenue source due to a previous agency locking them out. 
                            The listing was active, receiving reviews, but completely uncontrollable. 
                            <strong style={{ color: '#fff' }}> We Alll successfully recovered full admin control.</strong>
                        </p>

                        <div className="row g-3">
                            {[
                                { label: "Recovery Time", value: "7 Days", icon: "clock", color: "var(--gmb-yellow)" },
                                { label: "Issue Type", value: "Ownership Conflict", icon: "lock", color: "var(--gmb-red)" },
                                { label: "Platform", value: "Google Business", icon: "google", type: "brands", color: "var(--gmb-blue)" },
                                { label: "Result", value: "Ownership Restored", icon: "check-circle", color: "var(--gmb-green)" }
                            ].map((stat, idx) => (
                                <div className="col-sm-6" key={idx}>
                                    <div className="gmb-stat-box">
                                        <i className={`fa-${stat.type || "solid"} fa-${stat.icon} mb-3`} style={{ fontSize: '1.8rem', color: stat.color }}></i>
                                        <h5 className="gmb-stat-label">{stat.label}</h5>
                                        <p className="gmb-stat-value">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Documents Required Vault UI */}
                    <div className="col-lg-6">
                        <motion.div 
                            className="gmb-vault-container"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="gmb-vault-badge">
                                <i className="fa-solid fa-file-shield me-2"></i> VAULT
                            </div>

                            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Documents Required</h3>
                            <p style={{ color: '#a0a0b0', marginBottom: '30px' }}>To ensure smooth and verified recovery, you may need:</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { title: "Business Registration", icon: "file-contract" },
                                    { title: "GST / Trade License", icon: "receipt" },
                                    { title: "Utility Bill (Address Proof)", icon: "bolt" },
                                    { title: "Storefront Video", icon: "video", note: "(If required by Google)" }
                                ].map((doc, idx) => (
                                    <li key={idx} className="gmb-doc-item">
                                        <div className="gmb-doc-icon-box">
                                            <i className={`fa-solid fa-${doc.icon}`}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{doc.title}</h4>
                                            {doc.note && <span style={{ color: 'var(--gmb-yellow)', fontSize: '0.85rem' }}>{doc.note}</span>}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 text-center">
                                <p style={{ color: 'var(--gmb-blue)', fontWeight: 600, margin: 0, fontSize: '1.05rem' }}>
                                    👉 Don’t worry — we guide you at every step.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GmbRecoveryCaseStudy;
