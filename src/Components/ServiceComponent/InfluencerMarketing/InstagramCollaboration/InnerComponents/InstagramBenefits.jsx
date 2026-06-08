import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
    {
        num: "01",
        title: "Brand Visibility",
        desc: "Increased exposure through algorithm-friendly content and strategic storytelling that captures immediate attention."
    },
    {
        num: "02",
        title: "Deep Engagement",
        desc: "Higher audience interaction and community trust driven by authentic voices integrating your product seamlessly."
    },
    {
        num: "03",
        title: "Social Presence",
        desc: "Stronger digital identity and social proof that validates your brand to potential customers investigating your offering."
    },
    {
        num: "04",
        title: "Sustainable Growth",
        desc: "Consistent growth in followers and conversions, turning quick viral spikes into long-lasting brand value."
    },
    {
        num: "05",
        title: "Content Assets",
        desc: "High-performing video assets for lifecycle ads. Use influencer-generated content to supercharge your paid media campaigns."
    }
];

const InstagramBenefits = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="ig-benefits-section instagram-dark-bg">
            <div className="ig-glow-right"></div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row mb-5 justify-content-center">
                    <div className="col-lg-12 text-center">
                        <span className="ig-label">// The Outcome</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
                            What You Achieve <br />
                            <span className="instagram-gradient-text">with Instagram Collaborations</span>
                        </h2>
                    </div>
                    <div className="col-lg-12 text-center">
                        <p style={{ color: '#9090a0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Transforming digital signals into measurable brand dominance and sustainable growth.
                        </p>
                    </div>
                </div>

                <div className="row g-4 mt-4">
                    <div className="col-lg-8">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`ig-benefit-accordion ${activeIndex === index ? 'active' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <div className="ig-benefit-header" onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}>
                                    <span className="ig-benefit-num">[{item.num}]</span>
                                    <h4 className="ig-benefit-title">{item.title}</h4>
                                    <div className="ig-benefit-toggle">
                                        {activeIndex === index ? '−' : '+'}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            className="ig-benefit-body"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {item.desc}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <div className="col-lg-4">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(220, 39, 67, 0.1), rgba(188, 24, 136, 0.1))',
                                border: '1px solid rgba(220, 39, 67, 0.2)',
                                borderRadius: '30px',
                                padding: '40px',
                                textAlign: 'center',
                                position: 'sticky',
                                top: '100px'
                            }}
                        >
                            <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🚀</div>
                            <h4 style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', marginBottom: '15px' }}>
                                Ready to scale?
                            </h4>
                            <p style={{ color: '#a0a0b0', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '30px' }}>
                                Let us build an Instagram collaboration strategy that drives real trust, real reach, and real revenue.
                            </p>
                            <a href="#contact" className="ig-cta-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                                Start Your Campaign
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramBenefits;
