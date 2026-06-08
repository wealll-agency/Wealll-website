import React from 'react';
import './presentation.css';

const PresentationPricing = () => {
    const packages = [
        {
            title: "Starter Package",
            subtitle: "Best for small presentations",
            price: "5–8 slides",
            features: [
                "Professional slide design",
                "Basic layout & formatting",
                "1 revision included",
                "Delivery: 2–3 days"
            ],
            btnText: "Order Starter",
            featured: false
        },
        {
            title: "Standard Pitch Deck",
            subtitle: "Best for sales & business",
            price: "10–15 slides",
            features: [
                "Structured storytelling",
                "Content refinement",
                "Custom icons & clean visuals",
                "Charts & simple infographics",
                "2–3 revisions included",
                "Delivery: 3–5 days"
            ],
            btnText: "Order Standard",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Business",
            subtitle: "Investors & high-level pitches",
            price: "20+ slides",
            features: [
                "Full strategic storytelling",
                "Advanced data visualization",
                "Custom graphics & infographics",
                "Brand-focused design system",
                "Speaker notes included",
                "Unlimited revisions",
                "Delivery: 5–8 days"
            ],
            btnText: "Order Premium",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Elevator Pitch Script Writing",
            desc: "Short powerful pitch 30-90s",
            icon: "🎙️"
        },
        {
            title: "Sales Pitch Script Development",
            desc: "Conversion-focused sales",
            icon: "📈"
        },
        {
            title: "Marketing Pitch Content",
            desc: "Campaigns and partnerships",
            icon: "🎯"
        },
        {
            title: "Investor Pitch Deck Consultation",
            desc: "High-impact investor pitches",
            icon: "🤝"
        },
        {
            title: "Canva Editable Version",
            desc: "Easy to edit layouts",
            icon: "🎨"
        },
        {
            title: "Urgent 24-Hour Delivery",
            desc: "Fast-tracked turnaround",
            icon: "⚡"
        }
    ];

    return (
        <section className="logo-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Presentation <span style={{ color: '#fdb914' }}>Packages</span> & Deliverables</h2>
                    <p>Choose a Package Based on Your Needs. We offer flexible presentation packages for businesses, startups, and professionals.</p>
                </div>

                {/* Packages Grid - Exact 1:1 Layout Clone */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price" style={{ fontSize: pkg.price.length > 10 ? '2.2rem' : '3rem' }}>
                                        {pkg.price}
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

                {/* Add-ons Grid - Exact 1:1 Layout Clone */}
                <div className="logo-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
                    </div>
                    <div className="row justify-content-center">
                        {addons.map((addon, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="addon-card-premium h-100" key={index}>
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
            {/* Added ambient glows for Presentation context */}
            <div className="presentation-bg-glow top-left"></div>
        </section>
    );
};

export default PresentationPricing;
