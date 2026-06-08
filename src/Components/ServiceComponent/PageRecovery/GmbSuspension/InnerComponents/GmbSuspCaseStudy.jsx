import React from 'react';
import { motion } from 'framer-motion';

const GmbSuspCaseStudy = () => {
    return (
        <section className="gmb-susp-dark-bg gmb-case-section" style={{position: 'relative', zIndex: 1}}>
            {/* Glowing Background Orbs */}
            <div className="gmb-glow-orb gmb-orb-alert"></div>
            
            <div className="container">
                <motion.div 
                    className="gmb-glass-panel"
                    style={{padding: '60px'}}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-5">
                        <span className="gmb-susp-section-label">Real Client Recovery Story</span>
                        <h2 className="gmb-susp-title-md">
                            Watch How We Reinstated <br/> <span className="gmb-gradient-text-alert">a Suspended Listing</span>
                        </h2>
                        <p className="gmb-susp-desc mx-auto" style={{maxWidth: '600px'}}>
                            From “Not Eligible” to fully live — real business recovery.
                        </p>
                    </div>

                    <div className="gmb-case-premium-grid">
                        
                        {/* Left: Challenge & Solution */}
                        <div>
                            <h4 style={{fontSize: '1.3rem', fontWeight: 700, color: '#fff'}}>🎯 The Challenge</h4>
                            <ul className="gmb-case-feature-list">
                                <li>
                                    <i className="fa-solid fa-circle-xmark" style={{color: 'var(--gmb-alert)'}}></i>
                                    Listing suspended due to guideline violation
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-xmark" style={{color: 'var(--gmb-alert)'}}></i>
                                    Business lost all leads and visibility
                                </li>
                            </ul>
                            
                            <motion.div 
                                className="gmb-case-success-banner"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{delay: 0.2}}
                                viewport={{ once: true }}
                            >
                                <i className="fa-solid fa-check"></i>
                                <div>
                                    <h5 style={{color: '#fff', margin: 0, fontSize: '1.1rem', fontWeight: 700}}>Result Delivered</h5>
                                    <p style={{color: '#d0d0e0', margin: 0, fontSize: '0.9rem'}}>We Alll reinstated profile successfully</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Glass Statistics Grid */}
                        <div>
                            <h4 style={{fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '30px'}}>📊 Recovery Snapshot</h4>
                            <div className="gmb-stat-masonry">
                                <motion.div className="gmb-stat-glass-card highlight-blue" whileHover={{scale: 1.05}}>
                                    <span className="gmb-stat-label">Recovery Time</span>
                                    <p className="gmb-stat-value">6 Days</p>
                                </motion.div>
                                
                                <motion.div className="gmb-stat-glass-card highlight-alert" whileHover={{scale: 1.05}}>
                                    <span className="gmb-stat-label">Issue</span>
                                    <p className="gmb-stat-value" style={{fontSize: '1.3rem', color: 'var(--gmb-alert)'}}>Suspension</p>
                                    <p style={{fontSize: '0.8rem', color: '#ffcccc', margin: 0}}>(Policy Violation)</p>
                                </motion.div>
                                
                                <motion.div className="gmb-stat-glass-card" whileHover={{scale: 1.05}}>
                                    <span className="gmb-stat-label">Platform</span>
                                    <p className="gmb-stat-value" style={{fontSize: '1.4rem'}}>Google</p>
                                    <p style={{fontSize: '0.8rem', color: '#a0a0b0', margin: 0}}>Business Profile</p>
                                </motion.div>

                                <motion.div className="gmb-stat-glass-card highlight-green" whileHover={{scale: 1.05}}>
                                    <span className="gmb-stat-label">Result</span>
                                    <p className="gmb-stat-value" style={{fontSize: '1.2rem', color: '#00e676'}}>Reinstated</p>
                                    <p style={{fontSize: '0.9rem', color: '#00e676', margin: 0}}>+ Optimized</p>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GmbSuspCaseStudy;
