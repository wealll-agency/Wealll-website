import React from 'react';
import { motion } from 'framer-motion';

const AuthorityCard = ({ icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="authority-card"
    >
        <div className="pillar-icon">
            <i className={`fa-solid ${icon}`}></i>
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px' }}>{title}</h3>
        <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6' }}>{desc}</p>
    </motion.div>
);

const PodcastWhy = () => {
    return (
        <section className="podcast-why-section" style={{ padding: '100px 0', background: '#0d0f1b' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="pricing-title"
                        style={{ fontSize: '3rem' }}
                    >
                        Why Podcast Marketing Is <span style={{ color: '#ba68c8' }}>So Effective</span>
                    </motion.h2>
                </div>

                <div className="authority-pillar-grid">
                    <AuthorityCard
                        icon="fa-microphone-lines"
                        title="Long-form Trust"
                        desc="Build an intimate relationship with listeners through deep-dive conversations that ads simply can't buy."
                        delay={0.1}
                    />
                    <AuthorityCard
                        icon="fa-users-rays"
                        title="Niche Precision"
                        desc="Reach a highly engaged audience that is already invested in your industry's niche knowledge."
                        delay={0.2}
                    />
                    <AuthorityCard
                        icon="fa-crown"
                        title="Instant Authority"
                        desc="Position your brand alongside top voices, instantly absorbing the host's credibility and trust."
                        delay={0.3}
                    />
                    <AuthorityCard
                        icon="fa-chart-line"
                        title="Compounding ROI"
                        desc="Podcasts are evergreen. Your guest spot continues to generate leads and trust years after the live date."
                        delay={0.4}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-5 pt-4"
                >
                    <p style={{ fontSize: '1.4rem', fontWeight: '500', color: '#ba68c8', fontStyle: 'italic' }}>
                        "People don't just see your brand — they listen, understand, and trust it."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PodcastWhy;
