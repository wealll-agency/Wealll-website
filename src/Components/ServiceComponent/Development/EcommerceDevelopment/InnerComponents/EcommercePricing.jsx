import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Reusing exactly as requested

const EcommercePricing = () => {
    const packages = [
        {
            title: "Starter Store",
            subtitle: "Best for new brands online",
            price: "35,000",
            features: [
                "Up to 100 Products",
                "Mobile Responsive UI",
                "Payment Gateway Integration",
                "Basic Inventory Management",
                "1 Month Support",
                "Delivery: 2-3 Weeks"
            ],
            btnText: "Order Starter",
            featured: false
        },
        {
            title: "Professional Store",
            subtitle: "Best for growing businesses",
            price: "75,000",
            features: [
                "Up to 10,000 Products",
                "Custom Premium UI/UX",
                "Advanced Product Filtering",
                "Abandoned Cart Recovery",
                "Speed Optimization",
                "3 Months Support",
                "Delivery: 4-5 Weeks"
            ],
            btnText: "Order Professional",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise Platform",
            subtitle: "Best for large scale operations",
            price: "1,50,000+",
            features: [
                "Unlimited Products",
                "Multi-Vendor Marketplace",
                "ERP/CRM Integration",
                "AI Search & Recommendations",
                "Custom Mobile App Ready API",
                "6 Months Support",
                "Delivery: 8-10 Weeks"
            ],
            btnText: "Order Enterprise",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Managed Cloud Hosting",
            desc: "Highly scalable and secure servers for peak traffic.",
            icon: "☁️"
        },
        {
            title: "Advanced SEO Config",
            desc: "Comprehensive e-commerce SEO to rank products.",
            icon: "🚀"
        },
        {
            title: "Mobile App Development",
            desc: "Native iOS & Android apps for your store.",
            icon: "📱"
        },
        {
            title: "Ongoing Maintenance",
            desc: "Monthly backups, security, & feature updates.",
            icon: "🛡️"
        },
        {
            title: "Content & Cataloging",
            desc: "Professional product descriptions and imagery.",
            icon: "📦"
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: '#070913' }}>
            <div className="container pt-5">
                <div className="pricing-header">
                    <h2>E-Commerce Development <span style={{ color: '#c084fc' }}>Packages</span></h2>
                    <p style={{ color: '#8b9bb4' }}>Choose an e-commerce platform package based on your scale. Custom packages available.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag" style={{ background: '#c084fc' }}>{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon" style={{ color: pkg.featured ? '#fff' : '#c084fc' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`} style={{ 
                                    borderColor: pkg.featured ? 'transparent' : '#c084fc',
                                    color: pkg.featured ? '#fff' : '#c084fc',
                                    background: pkg.featured ? '#c084fc' : 'transparent'
                                }}>
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="logo-addons-area pt-4">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: '#c084fc' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="addon-card-premium" key={index} style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}>
                                <div className="addon-icon-box" style={{ background: 'rgba(192, 132, 252, 0.1)', color: '#c084fc' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4 className="text-white">{addon.title}</h4>
                                    <p style={{ color: '#8b9bb4' }}>{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcommercePricing;
