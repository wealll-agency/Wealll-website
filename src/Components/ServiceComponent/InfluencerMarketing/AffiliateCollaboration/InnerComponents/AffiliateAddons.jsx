import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const AffiliateAddons = () => {
    const addons = [
        {
            title: "Custom Network Whitelabeling",
            desc: "Create a fully branded affiliate portal for your partners with your company domain.",
            icon: "🛡️"
        },
        {
            title: "Advanced Fraud Protection",
            desc: "Integrate enterprise-grade pixel tracking and click-fraud prevention algorithms.",
            icon: "🕵️"
        },
        {
            title: "International Sourcing",
            desc: "Expand your affiliate footprint globally by recruiting publishers in US/EU markets.",
            icon: "🌍"
        },
        {
            title: "UGC Cross-Pollination",
            desc: "Equip your high-performing affiliates with native UGC shot by WEALLL creators.",
            icon: "🎬"
        }
    ];

    return (
        <section className="logo-pricing-section affiliate-pricing-section" style={{ paddingTop: 0, paddingBottom: 100 }}>
            <div className="container">
                <div className="logo-addons-area" style={{ marginTop: 0 }}>
                    <div className="addons-header">
                        <h3>Optional <span className="highlight-influencer" style={{ WebkitTextFillColor: 'unset' }}>Scale Boosters</span></h3>
                        <p style={{ color: '#aaa', marginTop: 10 }}>Add powerful enhancements to your affiliate program.</p>
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
                            >
                                <div className="addon-icon-box">
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliateAddons;
