import React from 'react';
import { motion } from 'framer-motion';
// Utilizing EXACT logo pricing framework to mirror the 360 Marketing page addons
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const ContentMarketingAddons = () => {
    const addons = [
        {
            title: "Long-Form Whitepapers",
            desc: "Per 3000-word authoritative guide.",
            price: "₹8,000",
            icon: "📚"
        },
        {
            title: "Product Descriptions",
            desc: "Per batch of 10 SEO-optimized products.",
            price: "₹1,500",
            icon: "📦"
        },
        {
            title: "Explainer Video Scripts",
            desc: "Per 2-minute high-converting script.",
            price: "₹4,000",
            icon: "🎬"
        },
        {
            title: "LinkedIn Thought Leadership",
            desc: "4 premium executive ghostwritten posts.",
            price: "₹10,000",
            icon: "💼"
        }
    ];

    return (
        <section className="logo-pricing-section pt-0 pb-5" style={{ backgroundColor: '#0d0f1b' }}>
            <div className="container">
                <div className="logo-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: '#00f2fe' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="addon-card-premium"
                                key={index}
                            >
                                <div className="addon-icon-box" style={{ background: 'rgba(0,242,254,0.1)', color: '#00f2fe' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                    <strong style={{ color: '#00f2fe', fontSize: '0.9rem' }}>{addon.price}</strong>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentMarketingAddons;
