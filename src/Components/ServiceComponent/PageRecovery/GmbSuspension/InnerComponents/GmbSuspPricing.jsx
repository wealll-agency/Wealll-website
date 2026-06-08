import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const GmbSuspPricing = () => {
    const packages = [
        {
            title: "Starter Recovery",
            subtitle: "Best for single suspended listings",
            price: "15,000",
            features: [
                "1 Recovery Service",
                "Basic Support",
                "Standard Reinstatement Appeal",
                "Guideline Compliance Check"
            ],
            btnText: "Start Recovery",
            featured: false
        },
        {
            title: "Business Protection",
            subtitle: "Best for multi-location / complex cases",
            price: "30,000",
            features: [
                "2 Recovery Services",
                "Security Setup",
                "Consultation & Audit",
                "Priority Escalation",
                "Spam Policy Cleanup"
            ],
            btnText: "Protect Business",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Recovery & Growth",
            subtitle: "Best for full scale recovery & local dominance",
            price: "50,000+",
            features: [
                "All 3 Recovery Services",
                "GMB Optimization",
                "30-Day Support",
                "Local SEO Boost",
                "Ongoing Spam Monitoring"
            ],
            btnText: "Recover & Grow",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Monthly GMB Management",
            desc: "Continuous optimization and post updates to boost long-term local growth.",
            icon: "📍"
        },
        {
            title: "Reputation Management",
            desc: "Review generation strategy and negative review filtering.",
            icon: "⭐"
        },
        {
            title: "Local SEO Retainer",
            desc: "Ongoing off-page SEO and citations to protect rankings and visibility.",
            icon: "📈"
        }
    ];

    return (
        <section className="logo-pricing-section gmb-suspension-page">
            <div className="container">
                <div className="pricing-header">
                    <h2>Bundled <span style={{ color: 'var(--gmb-blue)' }}>Packages</span></h2>
                    <p>High-ticket recovery strategies designed for business continuity and long-term protection.</p>
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
                                            <span className="check-icon" style={{ color: 'var(--gmb-blue)' }}>✓</span>
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
                <div className="logo-addons-area gmb-susp-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: 'var(--gmb-blue)' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="addon-card-premium"
                                style={{ background: 'rgba(255,255,255,0.02)' }}
                                key={index}
                            >
                                <div className="addon-icon-box">
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4 style={{ color: '#fff' }}>{addon.title}</h4>
                                    <p style={{ color: 'var(--gmb-text-muted)' }}>{addon.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GmbSuspPricing;
