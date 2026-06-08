import React from 'react';
import { motion } from 'framer-motion';
/* Reusing the established logo-pricing.css for global consistency */
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';
import './podcast-dark.css';

const PodcastPricing = () => {
    const packages = [
        {
            title: "Authority Starter",
            subtitle: "Best for niche credibility",
            price: "35,000",
            features: [
                "2 Podcast Guest Appearances",
                "1 Host-Read Sponsored Segment",
                "Basic Content Preparation",
                "Industry Relevance Strategy",
                "Basic Audio Repurposing",
                "Delivery: 3-4 Weeks"
            ],
            btnText: "Start Growth",
            featured: false
        },
        {
            title: "Professional Growth",
            subtitle: "Best for building expert authority",
            price: "75,000",
            features: [
                "5 High-Impact Guest Appearances",
                "3 Strategic Sponsored Segments",
                "Holistic Content Storytelling",
                "10 Social Media Video Clips",
                "Priority Host Outreach",
                "Dedicated Campaign Support"
            ],
            btnText: "Scale Status",
            featured: true,
            badge: "Most Effective"
        },
        {
            title: "Podcast Dominance",
            subtitle: "Best for market leaders",
            price: "1,50,000+",
            features: [
                "12+ Niche Guest Appearances",
                "Monthly Sponsorship Campaigns",
                "Global Podcast Network Access",
                "Comprehensive Video Repurposing",
                "Data-Driven Distribution Engine",
                "Dedicated Strategy Architect"
            ],
            btnText: "Claim Dominance",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Video Repurposing",
            desc: "Turning audio into dynamic, viral social media clips.",
            icon: "🏽"
        },
        {
            title: "PR Amplification",
            desc: "Press coverage for your major podcast appearances.",
            icon: "📰"
        },
        {
            title: "Media Kit Design",
            desc: "Professional pitch deck for podcast host outreach.",
            icon: "💼"
        },
        {
            title: "Niche Ad Retargeting",
            desc: "Targeted ads for podcast listeners in your industry.",
            icon: "🎯"
        }
    ];

    return (
        <section className="logo-pricing-section podcast-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Podcast Collaboration <span className="highlight-podcast">Packages</span>
                    </motion.h2>
                    <p>Choose a collaboration package to amplify your brand voice and build long-term authority.</p>
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
                                    {pkg.badge && <span className="popular-tag" style={{ background: '#ba68c8' }}>{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon" style={{ color: '#ba68c8' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`} 
                                    style={pkg.featured ? { background: '#ba68c8', borderColor: '#ba68c8' } : { borderColor: '#ba68c8', color: '#ba68c8' }}>
                                    {pkg.btnText}
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Area */}
                <div className="logo-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span className="highlight-podcast">Add-ons</span></h3>
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
                                <div className="addon-icon-box" style={{ background: 'rgba(186, 104, 200, 0.1)', color: '#ba68c8' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4 style={{ color: '#fff' }}>{addon.title}</h4>
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

export default PodcastPricing;
