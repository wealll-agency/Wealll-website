import React from 'react';
import './woocommerce-dark.css';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // EXACT structure reuse

const WoocommercePricing = () => {
    const packages = [
        {
            title: "Basic Store",
            subtitle: "Ideal for new vendors & boutiques",
            price: "25,000",
            features: [
                "WooCommerce Setup",
                "Up to 50 Products",
                "Payment Gateway Integration",
                "Standard Theme Setup",
                "Essential SEO",
                "1 Month Free Support"
            ],
            btnText: "Start Basic",
            featured: false
        },
        {
            title: "Advanced Store",
            subtitle: "Best for scaling brands",
            price: "55,000",
            features: [
                "Unlimited Products",
                "Custom UX Theme Design",
                "Multicurrency Support",
                "Advanced Inventory Sync",
                "Abandoned Cart Recovery",
                "3 Months Priority Support"
            ],
            btnText: "Go Advanced",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise eCommerce",
            subtitle: "Full-scale custom marketplaces",
            price: "95,000+",
            features: [
                "Multi-vendor Support",
                "ERP/CRM Integrations",
                "PWA & Mobile App Ready",
                "Headless Commerce Engine",
                "Premium Infrastructure",
                "Annual Dedicated Support"
            ],
            btnText: "Go Enterprise",
            featured: false
        }
    ];

    const addons = [
        { title: "Mobile App Hub", desc: "Native iOS & Android shopper apps.", icon: "📱" },
        { title: "Advanced Analytics", desc: "Heatmaps & deep sales insights.", icon: "📊" },
        { title: "Automated Marketing", desc: "Email sequences and promo tools.", icon: "✉️" },
        { title: "Speed Engine", desc: "Sub-second loading optimizations.", icon: "⚡" },
        { title: "Security Suite", desc: "Daily malware scans & firewall.", icon: "🛡️" }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: 'var(--woo-bg-dark)', padding: '100px 0' }}>
            <div className="container">
                <div className="pricing-header text-center mb-5">
                    <h2 className="display-4 fw-bold text-white">WooCommerce <span className="woo-title-gradient">Packages</span></h2>
                    <p className="text-secondary mt-3">Scale your online business with our hand-crafted WooCommerce tiers.</p>
                </div>

                {/* Packages Grid - Matching WebPricing structure */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`} style={{ background: 'rgba(255,255,255,0.02)', borderColor: pkg.featured ? 'var(--woo-accent)' : 'rgba(255,255,255,0.05)' }}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag" style={{ background: 'var(--woo-accent)' }}>{pkg.badge}</span>}
                                    <h3 className="text-white">{pkg.title}</h3>
                                    <h4 className="text-secondary">{pkg.subtitle}</h4>
                                    <div className="pricing-price text-white">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="text-secondary">
                                            <span className="check-icon" style={{ color: 'var(--woo-accent)' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`} style={{ backgroundColor: pkg.featured ? 'var(--woo-accent)' : 'transparent', borderColor: 'var(--woo-accent)', color: '#fff' }}>
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="logo-addons-area mt-5 pt-5">
                    <div className="addons-header text-center mb-5">
                        <h3 className="text-white">Premium <span className="woo-title-gradient">Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="addon-card-premium" key={index} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div className="addon-icon-box" style={{ background: 'rgba(0,124,186,0.1)', color: 'var(--woo-accent)' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4 className="text-white">{addon.title}</h4>
                                    <p className="text-secondary small">{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WoocommercePricing;
