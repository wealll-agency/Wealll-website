import React from 'react';
import { motion } from 'framer-motion';
import './fb-recovery-dark.css';

const FbRecoveryTimelineWho = () => {
    return (
        <section className="fb-dark-bg fb-section-py-80 fb-section-pb-150">
            <div className="container">
                <div className="row g-4">
                    {/* Left Column: Timeline Bento */}
                    <div className="col-lg-5">
                        <motion.div 
                            className="fb-bento-timeline"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="fb-section-label fb-label-accent" style={{ width: 'fit-content' }}>
                                TIMELINE
                            </span>
                            <h3 className="fb-section-title-lg">
                                Fast & Transparent <br/>Delivery
                            </h3>
                            
                            <div className="mb-4">
                                <h4 style={{ color: 'var(--fb-electric)', fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>STANDARD CASES</h4>
                                <p className="fb-timeline-value">3–7 <span className="fb-timeline-unit">working days</span></p>
                            </div>
                            
                            <div className="mb-5">
                                <h4 style={{ color: 'var(--fb-safe)', fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>COMPLEX CASES</h4>
                                <p className="fb-timeline-value">Up to 10 <span className="fb-timeline-unit">working days</span></p>
                            </div>

                            <p style={{ color: '#9090a0', fontSize: '1.05rem', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: 'auto' }}>
                                Timeline depends heavily on issue severity & Meta's internal response time.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Audience Bento Grid */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            <div className="col-12">
                                <span className="fb-section-label" style={{ background: 'rgba(255,255,255,0.02)' }}>WHO IS THIS FOR?</span>
                                <h2 className="fb-section-title-md" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', marginBottom: '10px' }}>
                                    This service is ideal for:
                                </h2>
                            </div>

                            {[
                                { title: "Businesses Running Ads", desc: "Your ads stop = your revenue stops. We get you back online fast.", icon: <i className="fa-solid fa-chart-line"></i> },
                                { title: "Influencers & Creators", desc: "Your audience & brand depend on your page. Protect your legacy.", icon: <i className="fa-solid fa-users"></i> },
                                { title: "Agencies", desc: "Client page issues can damage your reputation. Let experts handle it.", icon: <i className="fa-solid fa-building"></i> },
                                { title: "E-commerce Stores", desc: "Protect your sales funnel and pixel data from unauthorized access.", icon: <i className="fa-solid fa-cart-shopping"></i> }
                            ].map((item, idx) => (
                                <div className="col-md-6" key={idx}>
                                    <motion.div 
                                        className="fb-bento-target" 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="fb-bento-icon-box">{item.icon}</div>
                                        <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '15px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '1.05rem', color: '#a0a0b0', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
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

export default FbRecoveryTimelineWho;
