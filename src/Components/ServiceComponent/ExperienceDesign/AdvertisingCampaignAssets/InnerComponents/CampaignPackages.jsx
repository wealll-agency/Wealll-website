import React from 'react';
// Importing styles directly from LogoPricing and PortfolioPackages to ensure 100% exact match
import '../../LogoDesign/InnerComponents/logo-pricing.css';
import '../../PortfolioDesign/InnerComponents/portfolio-packages.css';

const CampaignPackages = () => {
    const packages = [
        {
            title: "Starter Ad Creative",
            subtitle: "Best for small promotions",
            price: "Custom",
            features: [
                "3–5 ad creatives",
                "Single platform format",
                "Basic campaign theme",
                "1 revision included",
                "Delivery: 2–3 days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Standard Campaign",
            subtitle: "Best for multi-platform promotions",
            price: "Custom",
            features: [
                "8–12 ad creatives",
                "Multi-platform formats",
                "Campaign theme development",
                "2–3 revisions included",
                "Delivery: 3–5 days"
            ],
            btnText: "Get Standard Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Asset",
            subtitle: "Best for product launches & scaling",
            price: "Custom",
            features: [
                "15+ ad creatives",
                "Full campaign visual system",
                "Multi-size format variations",
                "A/B testing creative variations",
                "Brand guideline consistency",
                "Unlimited revisions",
                "Delivery: 5–8 days"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const deliverables = [
        { title: "High-Resolution Files", desc: "Top-quality ad creatives.", icon: "🖼️" },
        { title: "Platform-Optimized", desc: "Perfect dimensions for all.", icon: "📱" },
        { title: "Web-Ready Formats", desc: "JPG / PNG delivery.", icon: "⚡" },
        { title: "Editable Source File", desc: "If included in package.", icon: "📁" },
        { title: "Consistent Branding", desc: "Clean, unified layout.", icon: "🎨" },
        { title: "Organized Delivery", desc: "Structured file handoff.", icon: "📦" },
        { title: "Copyright Transfer", desc: "Full ownership rights.", icon: "©️" },
        { title: "Performance Testing", desc: "Basic A/B variations.", icon: "⚖️" },
        { title: "Strategy Consultation", desc: "Custom campaign planning.", icon: "🧠" }
    ];

    const addons = [
        { title: "Ad Copywriting", desc: "High-converting ad texts.", icon: "✍️" },
        { title: "Landing Page Design", desc: "Optimized for ad traffic.", icon: "🌐" },
        { title: "Video Ad Creative", desc: "Engaging motion graphics.", icon: "🎥" },
        { title: "Campaign Strategy", desc: "1-on-1 expert consultation.", icon: "🧠" },
        { title: "Monthly Support", desc: "Ongoing creative resources.", icon: "🔄" },
        { title: "Urgent Delivery", desc: "24-Hour fast turnaround.", icon: "🚀" },
        { title: "Voiceover Setup", desc: "Professional AI/Human voice.", icon: "🎙️" },
        { title: "Ad Translation", desc: "Multilingual ad versions.", icon: "🌍" },
        { title: "Analytics Setup", desc: "Tracking & performance reporting.", icon: "📊" }
    ];

    return (
        <section className="logo-pricing-section pt-5 pb-5">
            <div className="container">
                <div className="pricing-header">
                    <h2>Advertising Campaign <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Flexible packages for every campaign size and marketing goal.</p>
                </div>

                {/* Packages Grid Exactly Like LogoPricing */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price" style={{ fontSize: '2.5rem', marginTop: '15px' }}>
                                        {pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list mt-4">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'} mt-4`}>
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* INCLUDED SECTION - Styled precisely like Portfolio Addons */}
                <div className="logo-addons-area mt-5 pt-4">
                    <div className="addons-header text-center mb-5">
                        <h3 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 700 }}>
                            Deliverables <span style={{ color: '#00a3ff' }}>Included</span>
                        </h3>
                    </div>
                    {/* Reusing exact inner-div structure */}
                    <div className="row justify-content-center">
                        {deliverables.map((item, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="addon-card-premium h-100">
                                    <div className="addon-icon-box" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '1.5rem' }}>
                                        {item.icon}
                                    </div>
                                    <div className="addon-content">
                                        <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>{item.title}</h4>
                                        <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* OPTIONAL ADDONS - Styled precisely like Portfolio Addons */}
                <div className="logo-addons-area mt-5 pt-4">
                    <div className="addons-header text-center mb-5">
                        <h3 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 700 }}>
                            Optional <span style={{ color: '#00a3ff' }}>Add-ons</span>
                        </h3>
                    </div>
                    <div className="row justify-content-center">
                        {addons.map((addon, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="addon-card-premium h-100">
                                    <div className="addon-icon-box" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '1.5rem' }}>
                                        {addon.icon}
                                    </div>
                                    <div className="addon-content">
                                        <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>{addon.title}</h4>
                                        <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{addon.desc}</p>
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

export default CampaignPackages;
