import React from 'react';
import { motion } from 'framer-motion';

const benefitPillars = [
    {
        title: "Trust Architecture",
        desc: "Convert skeptical buyers into loyal advocates with authentic human connection.",
        icon: "fa-shield-halved",
        color: "#ba68c8"
    },
    {
        title: "Performance Velocity",
        desc: "Slash production costs while increasing ad engagement by up to 400%.",
        icon: "fa-gauge-high",
        color: "#4fc3f7"
    },
    {
        title: "Platform Mastery",
        desc: "Native-first content designed specifically for TikTok, Reels, and YouTube Shorts.",
        icon: "fa-mobile-screen-button",
        color: "#81c784"
    }
];

const UGCBenefits = () => {
    return (
        <section className="ugc-benefits-section" style={{ padding: '150px 0', background: '#06070d' }}>
            <div className="container">
                <div className="text-center benifit_title" style={{ marginBottom: '100px' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900 }}>Strategic <span className="ugc-gradient-text">Outcomes</span></h2>
                    <p style={{ color: '#a0a5b5', fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto 0' }}>
                        Transforming creator creativity into measurable business growth.
                    </p>
                </div>

                <div className="ugc-benefit-pillars" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '40px'
                }}>
                    {benefitPillars.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="benefit-pillar"
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                padding: '50px 40px',
                                borderRadius: '30px',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div className="pillar-glow" style={{
                                position: 'absolute',
                                top: '-50%', left: '-50%',
                                width: '200%', height: '200%',
                                background: `radial-gradient(circle at center, ${benefit.color}08 0%, transparent 50%)`,
                                pointerEvents: 'none'
                            }}></div>

                            <i className={`fa-solid ${benefit.icon}`} style={{
                                fontSize: '3.5rem',
                                marginBottom: '30px',
                                color: benefit.color,
                                filter: `drop-shadow(0 0 15px ${benefit.color}44)`
                            }}></i>

                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px' }}>{benefit.title}</h3>
                            <p style={{ color: '#a0a5b5', fontSize: '1.1rem', lineHeight: '1.7' }}>{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UGCBenefits;
