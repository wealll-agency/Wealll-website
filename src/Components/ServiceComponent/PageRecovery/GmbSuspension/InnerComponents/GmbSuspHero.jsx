import React from 'react';
import { motion } from 'framer-motion';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const GmbSuspHero = () => {
    return (
        <section className="gmb-susp-dark-bg gmb-susp-hero-section">
            <BannerComponent />
            <div className="container">
                <div className="gmb-susp-hero-grid">

                    {/* Left: Problem Statement */}
                    <motion.div
                        className="gmb-problem-box"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="gmb-susp-section-label">Warning</span>
                        <h2 className="gmb-susp-title-md" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--gmb-alert)' }}>
                            Is Your Business Facing This?
                        </h2>
                        <p className="gmb-susp-desc" style={{ color: '#ffb3b3' }}>
                            If yes, your leads are already dropping 👇
                        </p>

                        <ul className="gmb-problem-list">
                            {[
                                "Your GMB listing is suspended",
                                "Showing “Not eligible for display”",
                                "You can’t receive calls or direction requests",
                                "Your business disappeared from Google search & maps",
                                "Reviews and visibility are gone"
                            ].map((issue, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <i className="fa-solid fa-circle-xmark"></i> {issue}
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,77,77,0.2)' }}>
                            <p style={{ fontSize: '1.05rem', color: '#ffcccc', fontWeight: 600, margin: 0 }}>
                                👉 This directly impacts your revenue, credibility, and local ranking.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: What We Solve */}
                    <motion.div
                        className="gmb-solution-box"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gmb-susp-section-label blue">What We Solve</span>
                        <h2 className="gmb-susp-title-md" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>
                            Google Business <br /> <span className="gmb-gradient-text-blue">Suspension Recovery Experts</span>
                        </h2>
                        <p className="gmb-susp-desc mb-4">
                            We handle complex recovery cases to get your listing back online.
                        </p>

                        <div className="row g-3">
                            {[
                                { title: "Suspended business listings", icon: "fa-ban" },
                                { title: "“Not eligible for display” issues", icon: "fa-eye-slash" },
                                { title: "Keyword stuffing penalties", icon: "fa-tag" },
                                { title: "Address / category violations", icon: "fa-map-pin" },
                                { title: "Spam policy violations", icon: "fa-triangle-exclamation" }
                            ].map((item, idx) => (
                                <div className="col-12" key={idx}>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px', border: '1px solid rgba(66, 133, 244, 0.1)' }}>
                                        <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--gmb-blue)', fontSize: '1.2rem' }}></i>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#e0e0e0' }}>{item.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 p-4" style={{ background: 'linear-gradient(90deg, var(--gmb-blue-glow), transparent)', borderRadius: '15px', borderLeft: '4px solid var(--gmb-blue)' }}>
                            <p style={{ margin: 0, color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>
                                👉 We work strictly within <strong>Google Business Profile</strong> guidelines to ensure safe reinstatement.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GmbSuspHero;
