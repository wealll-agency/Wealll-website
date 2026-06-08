import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Reusing exactly to guarantee identical structure

const WebPricing = () => {
    const packages = [
        {
            title: "Basic Website",
            subtitle: "Best for personal brands & small businesses",
            price: "15,000",
            features: [
                "Up to 5 Pages",
                "Responsive Design",
                "Contact Form Integration",
                "Basic SEO Setup",
                "1 Month Support",
                "Delivery: 1-2 Weeks"
            ],
            btnText: "Order Basic",
            featured: false
        },
        {
            title: "Corporate Website",
            subtitle: "Best for growing businesses & agencies",
            price: "35,000",
            features: [
                "Up to 15 Pages",
                "Custom UI/UX Design",
                "CMS Integration (WordPress)",
                "Advanced SEO Setup",
                "Speed Optimization",
                "3 Months Support",
                "Delivery: 3-4 Weeks"
            ],
            btnText: "Order Corporate",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "eCommerce Store",
            subtitle: "Best for selling products online",
            price: "60,000+",
            features: [
                "Unlimited Products",
                "Payment Gateway Integration",
                "Inventory Management",
                "User Accounts & Dashboard",
                "Premium Theme/Custom Design",
                "6 Months Support",
                "Delivery: 5-8 Weeks"
            ],
            btnText: "Order eCommerce",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Domain & Hosting",
            desc: "1 year premium reliable cloud hosting setup.",
            icon: "☁️"
        },
        {
            title: "Copywriting",
            desc: "Professional SEO optimized website content.",
            icon: "✍️"
        },
        {
            title: "Custom Animations",
            desc: "Interactive Lottie & Framer Motion elements.",
            icon: "🚀"
        },
        {
            title: "Maintenance Plan",
            desc: "Monthly backups, security, & updates.",
            icon: "🛡️"
        },
        {
            title: "Blog Setup",
            desc: "Custom blog layout for content marketing.",
            icon: "📰"
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: '#0d0f1b' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Website Development <span style={{ color: '#fdb914' }}>Packages</span></h2>
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

export default WebPricing;
