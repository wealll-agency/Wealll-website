import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Utilizing shared structure exactly as requested

const WPPackages = () => {
    const packages = [
        {
            title: "Basic Flyer",
            subtitle: "Best for simple presentation",
            price: "4,500",
            features: [
                "1 Page WP Site",
                "Premium Theme Setup",
                "Mobile Responsive",
                "Contact Form",
                "Delivery: 3-5 Days"
            ],
            btnText: "Order Basic",
            featured: false
        },
        {
            title: "Pro Business",
            subtitle: "Best for growing companies",
            price: "15,000",
            features: [
                "Up to 8 Pages",
                "Custom Theme Design",
                "SEO Setup Included",
                "Social Media Integration",
                "Blog Setup Included",
                "Delivery: 7-10 Days"
            ],
            btnText: "Order Pro",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "eCommerce Start",
            subtitle: "Best for selling online",
            price: "35,000",
            features: [
                "Full WooCommerce Setup",
                "Unlimited Products Capability",
                "Payment Gateway Integration",
                "Advanced Security Setup",
                "Inventory Management Tools",
                "Custom Cart & Checkout",
                "Delivery: 15-20 Days"
            ],
            btnText: "Order eCommerce",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Speed Optimization",
            desc: "Achieve 90+ score on Core Web Vitals.",
            icon: "⚡"
        },
        {
            title: "Monthly Maintenance",
            desc: "Updates, backups, and security scans.",
            icon: "🛠️"
        },
        {
            title: "Custom Plugin",
            desc: "Tailormade plugin for unique functionality.",
            icon: "🔌"
        },
        {
            title: "Multilingual Setup",
            desc: "WPML setup for global reach.",
            icon: "🌍"
        },
        {
            title: "Migration Services",
            desc: "Zero-downtime hosting transfer.",
            icon: "🚀"
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: '#0b0c10' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>WordPress Development <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose a web development package based on your requirements. Custom packages available.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
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
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="logo-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span className="text-info">Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="addon-card-premium" key={index}>
                                <div className="addon-icon-box">
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WPPackages;
