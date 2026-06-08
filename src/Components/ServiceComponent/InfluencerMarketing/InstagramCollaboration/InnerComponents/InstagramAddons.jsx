import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';
import './instagram-dark.css';

const InstagramAddons = () => {
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
        <section className="logo-pricing-section instagram-dark-bg" style={{ paddingTop: 0, paddingBottom: 100, backgroundColor: '#050505' }}>
            <div className="container">
                <div className="logo-addons-area" style={{ marginTop: 0 }}>
                    <div className="addons-header">
                        <h3>Optional <span className="instagram-gradient-text" style={{ WebkitTextFillColor: 'unset' }}>Add-ons</span></h3>
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
                                style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#dc2743'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <div className="addon-icon-box" style={{ background: 'rgba(220, 39, 67, 0.1)', color: '#dc2743' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4 style={{ color: '#fff' }}>{addon.title}</h4>
                                    <p style={{ color: '#a0a0b0' }}>{addon.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramAddons;
