import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const YouTubeAddons = () => {
    const addons = [
        {
            title: "Creator Whitelisting",
            desc: "Run Meta Ads directly from the influencer's profile for 10x trust.",
            icon: "📜"
        },
        {
            title: "Reel High-End Edit",
            desc: "Professional agency-grade editing of influencer raw clips.",
            icon: "🎞️"
        },
        {
            title: "Dedicated Manager",
            desc: "1-on-1 strategic manager for large scale multi-influencer campaigns.",
            icon: "🕴️"
        },
        {
            title: "Engagement Booster",
            desc: "Strategic community management on collaboration posts.",
            icon: "🔥"
        }
    ];

    return (
        <section className="logo-pricing-section youtube-dark-bg" style={{ paddingTop: 0, paddingBottom: 100 }}>
            <div className="container">
                <div className="logo-addons-area" style={{ marginTop: 0 }}>
                    <div className="addons-header">
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff' }}>
                            Optional <span className="youtube-gradient-text">Add-ons</span>
                        </h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="addon-card-premium"
                                key={index}
                                style={{ borderColor: 'rgba(255, 0, 0, 0.1)' }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ff0000'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 0, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <div className="addon-icon-box" style={{ background: 'rgba(255, 0, 0, 0.1)', color: '#ff0000' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4 style={{ color: '#fff' }}>{addon.title}</h4>
                                    <p style={{ color: '#7070a0' }}>{addon.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YouTubeAddons;
