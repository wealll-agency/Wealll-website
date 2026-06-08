import React from 'react';
import { motion } from 'framer-motion';
// Utilizing EXACT logo pricing framework to mirror the 360 Marketing page packages/addons
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const EmailPricing = () => {
    const packages = [
        {
            title: "Single Email",
            subtitle: "One-Time Blast",
            price: "₹2,500",
            features: [
                "1 Email Copy (Short/Long)",
                "Attention-Grabbing Subject Line",
                "1 Revision included",
                "Delivery: 24–48 Hours",
                "CTA Optimization"
            ],
            btnText: "ORDER SINGLE EMAIL",
            featured: false,
            badge: ""
        },
        {
            title: "3-Email Sequence",
            subtitle: "Most Popular",
            price: "₹6,500",
            features: [
                "3 Strategic Emails",
                "Subject Line Variations",
                "CTA & Hook Optimization",
                "2 Revisions included",
                "Delivery: 2–4 Days"
            ],
            btnText: "ORDER 3-EMAIL SEQUENCE",
            featured: true,
            badge: "BEST VALUE"
        },
        {
            title: "Campaign Bundle",
            subtitle: "Full Funnel",
            price: "₹10,000",
            features: [
                "5 Email Campaign Flow",
                "Full Campaign Structure",
                "A/B Testing Suggestions",
                "3 Revisions included",
                "Delivery: 4–7 Days"
            ],
            btnText: "ORDER CAMPAIGN",
            featured: false,
            badge: ""
        }
    ];

    const addons = [
        {
            title: "A/B Subject Lines",
            desc: "Get multiple subject line variations to test open rates.",
            icon: "🔀",
            price: "₹6,000"
        },
        {
            title: "Funnel Planning",
            desc: "Expert strategy on how to time and sequence your emails.",
            icon: "📈",
            price: "₹10,000"
        },
        {
            title: "Editing Service",
            desc: "Polishing your existing drafts for maximum impact.",
            icon: "✍️",
            price: "₹15,000"
        },
        {
            title: "Newsletter Plan",
            desc: "Monthly content calendar and topic strategy.",
            icon: "🗞️",
            price: "₹20,000"
        }
    ];

    return (
        <section className="logo-pricing-section pt-0 pb-5 pt-lg-5 position-relative border-top" style={{ backgroundColor: '#0d0f1b', borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="pricing-header text-center">
                    <h2>Email <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>High-converting copy packages tailored to your marketing needs.</p>
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
                        <h3>Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
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

export default EmailPricing;
