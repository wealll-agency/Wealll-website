import React from 'react';
import { motion } from 'framer-motion';
// Utilizing EXACT logo pricing framework to mirror the 360 Marketing page packages/addons
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const ScriptPricing = () => {
    const packages = [
        {
            title: "Basic Script",
            subtitle: "Starting With",
            price: "₹2,500",
            features: [
                "500–800 words",
                "1 Revision",
                "Delivery: 24–48 hrs",
                "Standard Formatting",
                "Topic Research"
            ],
            featured: false,
            badge: "",
            cta: "GET STARTED"
        },
        {
            title: "Standard Script",
            subtitle: "Starting With",
            price: "₹5,000",
            features: [
                "1000–1500 words",
                "2 Revisions",
                "Better storytelling + engagement",
                "Competitor Analysis",
                "Keyword Optimization"
            ],
            featured: true,
            badge: "MOST POPULAR",
            cta: "CHOOSE STANDARD"
        },
        {
            title: "Premium Script",
            subtitle: "Starting With",
            price: "₹8,500",
            features: [
                "2000+ words",
                "Advanced hook + retention strategy",
                "CTA + video flow guidance",
                "3 Revisions",
                "Deep-dive Research",
                "Priority Delivery"
            ],
            featured: false,
            badge: "",
            cta: "GO PREMIUM"
        }
    ];

    const addons = [
        {
            title: "SEO Keyword Integration",
            desc: "Optimize your video script with high-volume keywords to rank higher on YouTube and Google.",
            icon: "🚀",
            price: "8,000"
        },
        {
            title: "Thumbnail & Title Pack",
            desc: "Get 3 high-CTR thumbnail concepts and 5 viral title variations to maximize clicks.",
            icon: "🖼️",
            price: "1,500"
        },
        {
            title: "Hook Rewrite (3x)",
            desc: "We'll provide 3 alternative hooks (intros) so you can A/B test the start of your video.",
            icon: "🪝",
            price: "4,000"
        },
        {
            title: "Series Script Bundle",
            desc: "Planning a series? Get a cohesive narrative structure across multiple scripts at a discounted rate.",
            icon: "📚",
            price: "10,000"
        }
    ];

    return (
        <section className="logo-pricing-section pt-0 pb-5 pt-lg-5 position-relative border-top" style={{ backgroundColor: '#0d0f1b', borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="logo-pricing-header text-center">
                    <h2>Affordable <span style={{ color: '#fdb914' }}>Script</span> Plans</h2>
                    <p>Invest in scripts that pay for themselves through engagement and conversions.</p>
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

                                <div className="pricing-features-area">
                                    <ul className="pricing-features-list">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="check-icon">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pricing-btn-area">
                                    <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`} style={pkg.featured ? { background: 'linear-gradient(90deg, #00f2fe, #4facfe)', borderColor: 'transparent' } : { borderColor: '#00f2fe', color: '#fff' }}>
                                        {pkg.cta}
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
                                    <strong style={{ color: '#fdb914', fontSize: '0.9rem' }}>₹{addon.price}</strong>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScriptPricing;
