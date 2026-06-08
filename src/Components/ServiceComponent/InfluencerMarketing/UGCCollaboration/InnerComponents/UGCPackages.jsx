import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const UGCPackages = () => {
    const packages = [
        {
            title: "Starter UGC",
            subtitle: "Best for immediate content volume",
            price: "20,000",
            features: [
                "10-15 Micro-Creators",
                "Discovery & Vetting",
                "Basic Creative Briefs",
                "Raw Video Content Delivery",
                "Perpetual Usage Rights",
                "Delivery: 2-3 Weeks"
            ],
            btnText: "Start Campaign",
            featured: false
        },
        {
            title: "Performance UGC",
            subtitle: "Best for ad scaling & conversion",
            price: "45,000",
            features: [
                "25-40 Quality Creators",
                "Whitelisted Content Strategy",
                "Advanced Directing & Hooks",
                "Professional Video Editing",
                "A/B Testing Framework",
                "Monthly Performance Insights"
            ],
            btnText: "Scale Performance",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "UGC Engine",
            subtitle: "Best for enterprise content domination",
            price: "85,000+",
            features: [
                "75+ Diverse Creators",
                "Cross-Platform Output Strategy",
                "Macro-Influencer Integration",
                "Dedicated Campaign Manager",
                "Custom Dashboard Analytics",
                "Continuous Optimization Loop"
            ],
            btnText: "Deploy Engine",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Ad Account Whitelisting",
            desc: "Run paid ads directly from the creator's official social media handles.",
            icon: "🎯"
        },
        {
            title: "Trend Strategy Pack",
            desc: "Weekly high-converting TikTok & Reel trend blueprints for your brand.",
            icon: "📈"
        },
        {
            title: "Dedicated Strategist",
            desc: "1-on-1 expert managing your entire creator pipeline.",
            icon: "🕴️"
        },
        {
            title: "Multi-Format Editing",
            desc: "Repurpose every raw video into 3x formats (Stories, Feed, Shorts).",
            icon: "🎬"
        }
    ];

    return (
        <section className="logo-pricing-section barter-pricing-section" style={{ background: '#04050a' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>UGC Collaboration <span className="highlight-influencer" style={{ WebkitTextFillColor: 'unset' }}>Packages</span></h2>
                    <p>Choose a transparent UGC package to rapidly scale your authentic content production.</p>
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

export default UGCPackages;
