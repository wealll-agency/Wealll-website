import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';
import './instagram-dark.css';

const InstagramPricing = () => {
    const packages = [
        {
            title: "Micro Influence",
            subtitle: "Best for niche market awareness",
            price: "₹30,000",
            duration: "/campaign",
            features: [
                "5-8 Niche Micro-Influencers",
                "Reels & Story Integrations",
                "Campaign Strategy Design",
                "Content Quality Checks",
                "Basic Performance Tracking",
                "Creator Coordination"
            ],
            btnText: "Start Campaign",
            featured: false
        },
        {
            title: "Viral Momentum",
            subtitle: "Balanced mix for engagement & reach",
            price: "₹85,000",
            duration: "/campaign",
            features: [
                "15-20 Handpicked Influencers",
                "High-Impact Reel Collabs",
                "Algorithm Optimization Plan",
                "Strategic Content Direction",
                "Priority Support & Management",
                "Detailed Performance Report"
            ],
            btnText: "Boost Momentum",
            featured: true,
            badge: "MOST POPULAR"
        },
        {
            title: "Mega Reach",
            subtitle: "Massive scale and platform dominance",
            price: "1,50,000",
            duration: "/campaign",
            features: [
                "Top-Tier Creator Partnership",
                "Whitelisting Consultation",
                "Omnichannel Reach Plan",
                "24/7 Dedicated Account Manager",
                "Advanced ROI Analytics",
                "Next-Level Growth Strategy"
            ],
            btnText: "Scale Big",
            featured: false
        }
    ];

    return (
        <section className="logo-pricing-section instagram-pricing-section instagram-dark-bg" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Instagram Collaboration <span className="instagram-gradient-text" style={{ WebkitTextFillColor: 'unset' }}>Packages</span></h2>
                    <p>Choose an Instagram collaboration package to scale your brand with authentic voices.</p>
                </div>

                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}
                                style={pkg.featured ? { borderColor: '#dc2743', boxShadow: '0 10px 40px rgba(220, 39, 67, 0.2)' } : {}}
                            >
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag" style={{ background: 'linear-gradient(45deg, #f09433, #bc1888)' }}>{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price.replace('₹', '')}
                                        {pkg.duration && <span style={{ fontSize: '1rem', fontWeight: 'normal', color: pkg.featured ? '#ddd' : '#666' }}>{pkg.duration}</span>}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon" style={{ color: '#dc2743' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`} style={pkg.featured ? { background: 'linear-gradient(45deg, #f09433, #bc1888)', border: 'none' } : { borderColor: '#dc2743', color: '#dc2743' }}>
                                    {pkg.btnText}
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramPricing;
