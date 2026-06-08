import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const AffiliatePricing = () => {
    const packages = [
        {
            title: "Launch",
            subtitle: "Perfect for brands starting out",
            price: "15,000",
            duration: "/month",
            features: [
                "Basic Affiliate Platform Setup",
                "Text & Banner Creatives",
                "Up to 20 Affiliate Approvals",
                "Standard Commission Structuring",
                "Monthly Performance Report"
            ],
            btnText: "Choose Launch",
            featured: false
        },
        {
            title: "Performance",
            subtitle: "For active scale & growth",
            price: "35,000",
            duration: "/month",
            features: [
                "Advanced Tracking Integration",
                "Premium Creator Sourcing",
                "Up to 100 Active Partners",
                "Custom Dynamic Commissioning",
                "Bi-Weekly Strategy Calls",
                "Fraud Monitoring Setup"
            ],
            btnText: "Choose Performance",
            featured: true,
            badge: "SCALING PARTNERSHIP"
        },
        {
            title: "Enterprise",
            subtitle: "High-volume affiliate programs",
            price: "50,000",
            duration: "/month",
            features: [
                "Dedicated Affiliate Manager",
                "Global Publisher Outreach",
                "Unlimited Affiliate Network",
                "Multi-Tiered Payout Structures",
                "Real-Time API Reporting",
                "24/7 Priority Support"
            ],
            btnText: "Choose Enterprise",
            featured: false
        }
    ];

    return (
        <section className="logo-pricing-section affiliate-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Transparent <span className="highlight-influencer" style={{ WebkitTextFillColor: 'unset' }}>Packages</span></h2>
                    <p>Invest in scalable performance, without the bloat.</p>
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
                            >
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        {pkg.price !== "Custom" && <span className="pricing-currency">₹</span>}
                                        {pkg.price}
                                        {pkg.duration && <span style={{ fontSize: '1rem', fontWeight: 'normal', color: pkg.featured ? '#8a8f9c' : '#666' }}>{pkg.duration}</span>}
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
            </div>
        </section>
    );
};

export default AffiliatePricing;
