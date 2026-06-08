import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';
import '../../../Development/LaravelDeveloper/InnerComponents/laravel-dark.css';

const FbRecoveryPricing = () => {
    const packages = [
        {
            title: "Basic Recovery",
            subtitle: "Ideal for individual creators or small pages facing minor reputation issues.",
            price: "8,000",
            features: [
                "Basic account audit and diagnosis",
                "Documentation preparation support",
                "Standard escalation channel access",
                "Basic recovery timeline (7-14 days)",
                "Email support only"
            ],
            btnText: "Order Basic",
            featured: false
        },
        {
            title: "Advanced Recovery",
            subtitle: "Best for businesses facing hijacked pages or removed admin access.",
            price: "15,000",
            features: [
                "Deep forensic account audit",
                "Priority documentation handling",
                "Direct Meta escalation (Faster response)",
                "Expedited recovery timeline (3-7 days)",
                "Dedicated Business Manager fix",
                "1-on-1 strategy call"
            ],
            btnText: "Order Advanced",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise Protection",
            subtitle: "Designed for high-revenue business managers facing complete lockdown.",
            price: "25,000",
            features: [
                "Immediate 24-hour priority audit",
                "C-level Meta partner escalation",
                "Complex rogue admin removal",
                "Complete security restructuring",
                "24/7 dedicated support agent",
                "Future protection guarantee"
            ],
            btnText: "Order Enterprise",
            featured: false
        }
    ];

    return (
        <section className="logo-pricing-section fb-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Facebook Page Recovery <span className="fb-accent-text">Packages</span></h2>
                    <p>Flexible Pricing Based on Case Complexity. Final quote generated after initial deep audit.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag fb-popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                        {index === 0 && <span className="fb-price-plus">+</span>}
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
                                <a
                                    href="#contact"
                                    className={`pricing-btn ${pkg.featured ? 'filled lar-btn-glow fb-pricing-btn-filled' : 'outline fb-pricing-btn-outline'}`}
                                >
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FbRecoveryPricing;
