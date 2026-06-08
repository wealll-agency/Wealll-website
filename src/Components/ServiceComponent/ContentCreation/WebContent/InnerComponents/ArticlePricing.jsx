import React from 'react';
import { motion } from 'framer-motion';
// Utilizing EXACT logo pricing framework to mirror the 360 Marketing page packages/addons
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const ArticlePricing = () => {
    const packages = [
        {
            title: "Basic Article",
            subtitle: "Starting With",
            price: "₹2,000",
            features: [
                "500–800 words",
                "Clean structure + formatting",
                "1 revision included",
                "Delivery: 24–48 hours",
                "Topic Research"
            ],
            btnText: "ORDER BASIC",
            featured: false,
            badge: ""
        },
        {
            title: "Standard Article",
            subtitle: "Starting With",
            price: "₹4,000",
            features: [
                "1000–1500 words",
                "Research-based writing",
                "2 revisions included",
                "Delivery: 2–3 days",
                "SEO Optimization"
            ],
            btnText: "ORDER STANDARD",
            featured: true,
            badge: "MOST POPULAR"
        },
        {
            title: "Premium Article",
            subtitle: "Starting With",
            price: "₹7,500",
            features: [
                "2000+ words",
                "Deep research + structured writing",
                "References included (if requested)",
                "3 revisions included",
                "Priority Delivery"
            ],
            btnText: "ORDER PREMIUM",
            featured: false,
            badge: ""
        }
    ];

    const addons = [
        {
            title: "SEO Optimization",
            desc: "Advanced keyword research and implementation.",
            icon: "🚀",
            price: "₹8,000"
        },
        {
            title: "Meta Data Pack",
            desc: "Compelling meta titles and descriptions for high CTR.",
            icon: "🏷️",
            price: "₹10,000"
        },
        {
            title: "Reference Links",
            desc: "Properly formatted citations (APA, MLA, etc.).",
            icon: "🔗",
            price: "₹15,000"
        },
        {
            title: "Editing Service",
            desc: "Professional editing and rewriting of existing content.",
            icon: "✍️",
            price: "₹20,000"
        }
    ];

    return (
        <section className="logo-pricing-section pt-0 pb-5 pt-lg-5 position-relative border-top" style={{ backgroundColor: '#0d0f1b', borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="pricing-header text-center">
                    <h2>Article Writing <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose the perfect article package based on your word count and requirements.</p>
                </div>

                <div className="row justify-content-center align-items-center mb-5 pb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}
                            >
                                {pkg.badge && <div className="popular-badge">{pkg.badge}</div>}

                                <div className="pricing-title-area">
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                        <span style={{ fontSize: '1rem', color: pkg.featured ? '#8b9bb4' : '#666', fontWeight: 'normal' }}>/mo</span>
                                    </div>

                                </div>

                                <div className="pricing-features-list">
                                    <ul className="list-unstyled">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="check-icon">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pricing-btn-area">
                                    <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`} style={pkg.featured ? { background: 'linear-gradient(90deg, #00f2fe, #4facfe)', borderColor: 'transparent' } : { borderColor: '#00f2fe', color: '#fff' }}>
                                        {pkg.btnText}
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Optional Add-ons using exactly the 360 Marketing Addon layout */}
                <div className="logo-addons-area mt-5 pt-4">
                    <div className="addons-header">
                        <h3>Power-Up <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
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
                                <div className="addon-icon-box" style={{ background: 'rgba(253, 185, 20, 0.1)', color: '#fdb914' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                    <strong style={{ color: '#fdb914', fontSize: '0.9rem' }}>{addon.price}</strong>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticlePricing;
