import React from 'react';
import { motion } from 'framer-motion';
// Utilizing EXACT logo pricing framework to mirror the 360 Marketing page packages
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const ContentMarketingPackages = () => {
    const packages = [
        {
            title: "Starter Content",
            subtitle: "Best for early stage brands",
            price: "15,000",
            features: [
                "4 SEO Blog Posts/Month (800 words)",
                "Basic Keyword Strategy",
                "12 Social Media Graphics + Copy",
                "1 Monthly Email Newsletter",
                "Quarterly Performance Report",
                "Dedicated Account Manager"
            ],
            btnText: "GET STARTED",
            featured: false
        },
        {
            title: "Pro Content",
            subtitle: "Best for aggressive organic growth",
            price: "35,000",
            features: [
                "8 SEO Blog Posts/Month (1200 words)",
                "Advanced Keyword & Competitor Gap Analysis",
                "20 Social Media Graphics + Reel Scripts",
                "4 Email Newsletters/Drip Sequences",
                "1 Press Release / Guest Post",
                "Monthly Performance Reporting"
            ],
            btnText: "CHOOSE PRO",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise Ecosystem",
            subtitle: "Best for absolute market dominance",
            price: "75,000",
            features: [
                "15+ SEO Blog Posts (Long-form Authority)",
                "Full Website Content Revamp & Strategy",
                "Omnichannel Social Media Management",
                "Advanced Email Marketing Automations",
                "3 Digital PR Campaigns / High-DR Backlinks",
                "Bi-Weekly Strategy Consultation"
            ],
            btnText: "GET ENTERPRISE",
            featured: false
        }
    ];

    return (
        <section className="logo-pricing-section pt-0 pb-5 pt-lg-5 position-relative border-top" style={{ backgroundColor: '#0d0f1b', borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="container position-relative z-2">
                <div className="pricing-header">
                    <h2>Content Marketing <span style={{ color: '#00f2fe' }}>Packages</span></h2>
                    <p>
                        Transparent, scalable content pricing designed to fuel your organic acquisition engine.
                    </p>
                </div>

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
                                        <span style={{ fontSize: '1rem', color: pkg.featured ? '#8b9bb4' : '#666', fontWeight: 'normal' }}>/mo</span>
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

export default ContentMarketingPackages;
