import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Reusing established structural layout CSS

const MernPricing = () => {
    const packages = [
        {
            title: "MERN MVP App",
            subtitle: "Best for startups & validting ideas",
            price: "80,000",
            features: [
                "Core Feature Implementation",
                "React Frontend UI",
                "Node/Express Basic API",
                "MongoDB Integration",
                "Basic User Authentication",
                "1 Month Tech Support",
                "Delivery: 3-4 Weeks"
            ],
            btnText: "Order MVP Plan",
            featured: false
        },
        {
            title: "Full-Scale Web App",
            subtitle: "Best for growing businesses & SaaS",
            price: "1,50,000",
            features: [
                "Advanced Custom Features",
                "Complex State Management (Redux)",
                "Robust REST/GraphQL API",
                "Scalable Database Architecture",
                "Third-party API Integrations",
                "3 Months Tech Support",
                "Delivery: 6-8 Weeks"
            ],
            btnText: "Order Full-Scale",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise Ecosystem",
            subtitle: "Best for large scale operations",
            price: "3,00,000+",
            features: [
                "Microservices Architecture",
                "Real-time Data (WebSockets)",
                "Advanced Security Protocols",
                "High Availability Setup",
                "Custom Admin Dashboards",
                "6 Months Tech Support",
                "Delivery: 10-12 Weeks"
            ],
            btnText: "Talk to Experts",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Cloud Infrastructure Setup",
            desc: "AWS/GCP/Azure architecture planning and deployment.",
            icon: "☁️"
        },
        {
            title: "Performance Optimization",
            desc: "Deep React rendering and Node execution optimization.",
            icon: "⚡"
        },
        {
            title: "PWA Implementation",
            desc: "Convert your app to a Progressive Web App.",
            icon: "📱"
        },
        {
            title: "Maintenance SLA",
            desc: "Guaranteed uptime, security patching, and scaling.",
            icon: "🛡️"
        },
        {
            title: "Data Migration",
            desc: "Securely migrate legacy data into MongoDB schemas.",
            icon: "🔄"
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: '#0d0f1b' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>MERN Stack Development <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose a specialized MERN package based on your project scope. Custom architectures available.</p>
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

export default MernPricing;
