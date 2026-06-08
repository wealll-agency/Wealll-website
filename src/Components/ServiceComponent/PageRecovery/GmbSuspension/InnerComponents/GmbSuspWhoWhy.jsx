import React from 'react';
import { motion } from 'framer-motion';

const GmbSuspWhoWhy = () => {
    return (
        <section className="gmb-susp-dark-bg gmb-who-premium-wrapper" style={{padding: '100px 0'}}>
            {/* Glowing Orb Background */}
            <div className="gmb-glow-orb gmb-orb-blue" style={{opacity: 0.3}}></div>

            <div className="container">
                <div className="gmb-who-bento-grid">
                    
                    {/* Left: Who Is This For? (Stack of Cards) */}
                    <div>
                        <span className="gmb-susp-section-label">Who Is This For?</span>
                        <h2 className="gmb-susp-title-lg" style={{fontSize: 'clamp(2rem, 3.5vw, 3rem)'}}>
                            Businesses <br/> <span className="gmb-gradient-text-alert">Losing Leads</span>
                        </h2>
                        <p className="gmb-susp-desc mb-5" style={{color: '#ffcccc'}}>No listing = no customers.</p>

                        <div className="gmb-audience-stack">
                            <motion.div 
                                className="gmb-audience-card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="gmb-audience-icon">📊</div>
                                <div className="gmb-audience-content">
                                    <h4>SEO / Local SEO Clients</h4>
                                    <p>Protect rankings and visibility across Google's entire search ecosystem.</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="gmb-audience-card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="gmb-audience-icon">🏥</div>
                                <div className="gmb-audience-content">
                                    <h4>Service-Based Businesses</h4>
                                    <p>Maps visibility is critical. Don't lose your daily foot traffic and direct calls.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Why Choose We Alll? (Large Premium Box) */}
                    <div>
                        <motion.div 
                            className="gmb-why-premium-box"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="gmb-susp-section-label blue" style={{border: 'none'}}>Why Choose We Alll?</span>
                            <h3 className="gmb-susp-title-md">We Recover Your <br/> <span className="gmb-gradient-text-blue">Revenue Channel</span></h3>
                            
                            <div className="gmb-feature-pills">
                                <span className="gmb-feature-pill"><i className="fa-solid fa-rocket"></i> Proven reinstatement success</span>
                                <span className="gmb-feature-pill"><i className="fa-solid fa-book-open"></i> Google policy expertise</span>
                                <span className="gmb-feature-pill"><i className="fa-solid fa-bolt"></i> Fast escalation handling</span>
                                <span className="gmb-feature-pill"><i className="fa-solid fa-eye"></i> Transparent process</span>
                                <span className="gmb-feature-pill"><i className="fa-solid fa-bullseye"></i> Business-focused approach</span>
                            </div>

                            <div className="gmb-why-bottom-text">
                                👉 We don’t just sell a service — <br/>
                                <span className="gmb-gradient-text-blue">we restore your business continuity.</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GmbSuspWhoWhy;
