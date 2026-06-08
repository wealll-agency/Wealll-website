import React from 'react';
import { motion } from 'framer-motion';
// IMPLICITLY IMPORTING THE EXACT SAME CSS FROM WEBSITE DEVELOPMENT / LOGO DESIGN
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const Marketing360Packages = () => {
    const packages = [
        {
            title: "Growth 360°",
            subtitle: "Best for early local acceleration",
            price: "35,000",
            features: [
                "Local & Technical SEO",
                "Google Search Ads Setup",
                "Basic Social Media Management",
                "Monthly Content Strategy",
                "Lead Funnel Architecture",
                "Monthly Growth Report"
            ],
            btnText: "Deploy Growth",
            featured: false
        },
        {
            title: "Accelerator 360°",
            subtitle: "Best for aggressive market capture",
            price: "65,000",
            features: [
                "Advanced Omni-Channel SEO",
                "Multi-Platform Ads (Google, Meta)",
                "Premium Video/Reels Content",
                "Conversion Rate Optimization",
                "Aggressive Remarketing Loops",
                "Bi-Weekly Strategy Calls"
            ],
            btnText: "Deploy Ecosystem",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise 360°",
            subtitle: "Best for national level dominance",
            price: "1,20,000",
            features: [
                "National/Global Market SEO",
                "Full-Scale Media Buying",
                "High-End Production Shoots",
                "Custom ERP/CRM Integrations",
                "Programmatic Advertising",
                "Dedicated Account Executive"
            ],
            btnText: "Deploy Enterprise",
            featured: false
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: '#0d0f1b' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>360 Marketing <span style={{ color: '#00f2fe' }}>Packages</span></h2>
                    <p>Choose a 360° ecosystem package based on your scaling velocity. Custom packages available.</p>
                </div>

                {/* Packages Grid Replica */}
                <div className="row justify-content-center align-items-center">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}
                            >
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag" style={{ background: 'linear-gradient(90deg, #00f2fe, #4facfe)' }}>{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                        <span style={{ fontSize: '1rem', color: '#8b9bb4', fontWeight: 'normal' }}>/mo</span>
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon" style={{ color: '#00f2fe' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`} style={pkg.featured ? { background: 'linear-gradient(90deg, #00f2fe, #4facfe)', borderColor: 'transparent' } : { borderColor: '#00f2fe', color: '#fff' }}>
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

export default Marketing360Packages;
