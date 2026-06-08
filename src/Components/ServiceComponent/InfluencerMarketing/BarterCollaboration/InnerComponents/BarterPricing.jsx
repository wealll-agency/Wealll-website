import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const BarterPricing = () => {
    const packages = [
        {
            title: "Nano Pilot",
            subtitle: "Best for niche product testing",
            price: "15,000",
            features: [
                "10-15 Micro-Influencers",
                "Discovery & Outreach",
                "Negotiation Management",
                "Content Guidelines",
                "Basic Performance Tracking",
                "Delivery: 2-3 Weeks"
            ],
            btnText: "Start Pilot",
            featured: false
        },
        {
            title: "Brand Booster",
            subtitle: "Best for market awareness",
            price: "35,000",
            features: [
                "25-40 Quality Creators",
                "Verified Niche Alignment",
                "Advanced Strategy Design",
                "Detailed Content Briefing",
                "Priority Negotiation",
                "Monthly Growth Insights"
            ],
            btnText: "Boost Brand",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Viral Ecosystem",
            subtitle: "Best for mass dominance",
            price: "75,000+",
            features: [
                "75+ Diverse Creators",
                "Cross-Platform Presence",
                "High-End Barter Negotiation",
                "Whitelisting Consultation",
                "Comprehensive Data Analytics",
                "Dedicated Campaign Manager"
            ],
            btnText: "Deploy Viral",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Content Whitelisting",
            desc: "Legal usage rights for influencer content in ads.",
            icon: "📜"
        },
        {
            title: "UGC Production",
            desc: "Professional editing of raw influencer clips.",
            icon: "🎞️"
        },
        {
            title: "Campaign Manager",
            desc: "1-on-1 dedicated strategist for your campaign.",
            icon: "🕴️"
        },
        {
            title: "Dashboard Access",
            desc: "Real-time tracking for every influencer link.",
            icon: "🖥️"
        }
    ];

    return (
        <section className="logo-pricing-section barter-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Barter Collaboration <span className="highlight-influencer" style={{ WebkitTextFillColor: 'unset' }}>Packages</span></h2>
                    <p>Choose a barter collaboration package to scale your brand with authentic creator voices.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}
                            >
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`}>
                                    {pkg.btnText}
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="logo-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span className="highlight-influencer" style={{ WebkitTextFillColor: 'unset' }}>Add-ons</span></h3>
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

export default BarterPricing;
