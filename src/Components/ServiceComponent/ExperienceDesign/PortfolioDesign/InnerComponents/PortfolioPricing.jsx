import React from 'react';
import './portfolio-pricing.css';

const PortfolioPricing = () => {
    const packages = [
        {
            title: "Starter Portfolio",
            subtitle: "Best for beginners & students",
            price: "2,500", // Placeholder price, user didn't specify exact prices so using similar range or placeholders
            features: [
                "One-page portfolio design",
                "Basic sections (About, Skills, Projects)",
                "Mobile responsive design",
                "2 revisions included",
                "Delivery: 2–4 days"
            ],
            btnText: "Order Starter",
            featured: false
        },
        {
            title: "Standard Portfolio",
            subtitle: "Best for freelancers & job seekers",
            price: "5,500",
            features: [
                "Multi-section professional portfolio",
                "Projects showcase with proper layout",
                "Resume download button",
                "Contact form integration",
                "4 revisions included",
                "Delivery: 4–7 days"
            ],
            btnText: "Order Standard",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Portfolio",
            subtitle: "Best for professionals & branding",
            price: "12,000",
            features: [
                "Multi-page portfolio design",
                "Case study pages included",
                "Custom UI styling + animations",
                "Advanced responsive layout",
                "SEO-friendly structure",
                "Unlimited revisions",
                "Delivery: 7–12 days"
            ],
            btnText: "Order Premium",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Resume / CV Design",
            desc: "Professional CV matching your portfolio.",
            icon: "📄"
        },
        {
            title: "LinkedIn Banner",
            desc: "Custom banner for your LinkedIn profile.",
            icon: "🤝"
        },
        {
            title: "Personal Branding Kit",
            desc: "Logo, colors, and font selection.",
            icon: "🎨"
        },
        {
            title: "Custom Domain Setup",
            desc: "Assistance with domain and hosting.",
            icon: "🌐"
        },
        {
            title: "Content Writing",
            desc: "Professional writing for your portfolio.",
            icon: "✍️"
        }
    ];

    return (
        <section className="logo-pricing-section"> {/* Reusing class for exact style match */}
            <div className="container">
                <div className="pricing-header">
                    <h2>Portfolio Design <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose the right portfolio package based on your requirements.</p>
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

export default PortfolioPricing;
