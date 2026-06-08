import React from 'react';
import './logo-pricing.css';

const LogoPricing = () => {
    const packages = [
        {
            title: "Basic Logo",
            subtitle: "Best for small businesses & startups",
            price: "2,500",
            features: [
                "1 Logo Concept",
                "2 Revisions Included",
                "PNG + JPG Files",
                "Transparent Background",
                "Delivery: 2–3 Days"
            ],
            btnText: "Order Basic",
            featured: false
        },
        {
            title: "Standard Logo",
            subtitle: "Best for professional branding",
            price: "5,500",
            features: [
                "2–3 Logo Concepts",
                "4 Revisions Included",
                "PNG + JPG + PDF Files",
                "Vector Source Files",
                "Color Variations Included",
                "Delivery: 3–5 Days"
            ],
            btnText: "Order Standard",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Logo",
            subtitle: "Best for complete brand identity",
            price: "12,000",
            features: [
                "4–5 Logo Concepts",
                "Unlimited Revisions",
                "PNG + JPG + PDF + SVG",
                "Brand Color Palette",
                "Typography Suggestions",
                "Social Media Kit",
                "Delivery: 5–7 Days"
            ],
            btnText: "Order Premium",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Business Card",
            desc: "Double-sided professional card design.",
            icon: "📇"
        },
        {
            title: "Letterhead Design",
            desc: "Official branded document templates.",
            icon: "📝"
        },
        {
            title: "Social Branding",
            desc: "Covers & profile images for all platforms.",
            icon: "📱"
        },
        {
            title: "Brand Guidelines",
            desc: "Full PDF guide on how to use your brand.",
            icon: "📘"
        },
        {
            title: "Logo Modernization",
            desc: "Refining an old logo to look modern.",
            icon: "✨"
        },
        {
            title: "Favicon Design",
            desc: "Custom browser & app icon versions.",
            icon: "🌐"
        }
    ];

    return (
        <section className="logo-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Logo Design <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose a logo package based on your requirements. Custom packages available.</p>
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
                        <h3>Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
                    </div>
                    <div className="row justify-content-center">
                        {addons.map((addon, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="addon-card-premium h-100">
                                    <div className="addon-icon-box">
                                        {addon.icon}
                                    </div>
                                    <div className="addon-content">
                                        <h4>{addon.title}</h4>
                                        <p>{addon.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoPricing;
