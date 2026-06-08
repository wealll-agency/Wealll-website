import React from 'react';
import { motion } from 'framer-motion';

const GmbSuspExpertiseTimeline = () => {
    return (
        <section className="gmb-susp-dark-bg gmb-expertise-section">
            <div className="container">
                <div className="text-center">
                    <span className="gmb-susp-section-label">Our Key Expertise</span>
                    <h2 className="gmb-susp-title-lg">
                        Why We Get It <br/> <span className="gmb-gradient-text-blue">Right Every Time</span>
                    </h2>
                </div>

                <div className="gmb-bento-grid mt-5">
                    
                    {/* Fail Side */}
                    <motion.div 
                        className="gmb-bento-item gmb-bento-fail"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '25px', color: 'var(--gmb-alert)'}}>
                            Why Most Reinstatement Requests Fail
                        </h4>
                        <p className="gmb-susp-desc mb-4">Because they:</p>
                        <ul className="gmb-comparison-list fail">
                            <li><i className="fa-solid fa-xmark"></i> Don’t understand Google policies</li>
                            <li><i className="fa-solid fa-xmark"></i> Submit weak appeals</li>
                            <li><i className="fa-solid fa-xmark"></i> Ignore root cause</li>
                        </ul>
                    </motion.div>

                    {/* Success Side */}
                    <motion.div 
                        className="gmb-bento-item gmb-bento-success"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '25px', color: 'var(--gmb-blue)'}}>
                            What We Do Differently
                        </h4>
                        <ul className="gmb-comparison-list success">
                            <li><i className="fa-solid fa-check-circle"></i> Deep understanding of Google guidelines</li>
                            <li><i className="fa-solid fa-check-circle"></i> Strong reinstatement strategy</li>
                            <li><i className="fa-solid fa-check-circle"></i> Complete spam cleanup</li>
                            <li><i className="fa-solid fa-check-circle"></i> Proper documentation alignment</li>
                        </ul>
                        <div className="mt-4 pt-3" style={{borderTop: '1px solid rgba(255,255,255,0.05)'}}>
                            <p style={{fontSize: '1.1rem', color: '#fff', fontWeight: 600, margin: 0}}>
                                👉 We fix the root cause, not just the symptom.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Neon Circular Progress Dashboard */}
                <div className="gmb-neon-dashboard mt-5">
                    
                    {/* Card 1: Standard Cases */}
                    <motion.div 
                        className="gmb-neon-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="gmb-progress-ring-container">
                            <div className="gmb-progress-glow"></div>
                            <div className="gmb-progress-ring-bg"></div>
                            <div className="gmb-progress-ring"></div>
                            <div className="gmb-progress-inner">
                                <span className="gmb-progress-num">3-7</span>
                                <span className="gmb-progress-label">Days</span>
                            </div>
                        </div>
                        <h4>Standard Cases</h4>
                        <p>Fast automated processing and standard documentation review loops.</p>
                    </motion.div>

                    {/* Card 2: Complex Cases */}
                    <motion.div 
                        className="gmb-neon-card alert"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="gmb-progress-ring-container">
                            <div className="gmb-progress-glow"></div>
                            <div className="gmb-progress-ring-bg"></div>
                            <div className="gmb-progress-ring"></div>
                            <div className="gmb-progress-inner">
                                <span className="gmb-progress-num">15+</span>
                                <span className="gmb-progress-label">Days</span>
                            </div>
                        </div>
                        <h4>Complex Cases</h4>
                        <p>Advanced manual reviews, severe guideline violations, or escalation cases.</p>
                    </motion.div>

                </div>

                <div className="text-center mt-4">
                    <p className="gmb-susp-desc m-0" style={{fontSize: '1.1rem'}}>
                        <i className="fa-solid fa-clock text-warning mr-2"></i> Fast & Transparent Recovery — Depends on severity & Google response.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GmbSuspExpertiseTimeline;
