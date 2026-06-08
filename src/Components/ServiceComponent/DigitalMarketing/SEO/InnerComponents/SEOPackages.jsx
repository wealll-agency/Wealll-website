import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Reusing exactly to guarantee identical structure

const SEOPackages = () => {
    const packages = [
        {
            title: "Basic SEO",
            subtitle: "Best for startups & local businesses",
            price: "15,000",
            duration: "/month",
            features: [
                "Up to 15 Keywords Targeted",
                "Website Audit & Analysis",
                "On-Page Optimization",
                "Local Search Optimization",
                "Basic Link Building",
                "Monthly Progress Report"
            ],
            btnText: "Get Started",
            featured: false
        },
        {
            title: "Advanced SEO",
            subtitle: "Best for growing businesses",
            price: "25,000",
            duration: "/month",
            features: [
                "Up to 35 Keywords Targeted",
                "Advanced Competitor Analysis",
                "Technical SEO Fixes",
                "Content Marketing Strategy",
                "High-Quality Backlink Outreach",
                "Bi-Weekly Strategy Calls"
            ],
            btnText: "Get Started",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium SEO",
            subtitle: "Best for scale & dominance",
            price: "45,000",
            duration: "/month",
            features: [
                "Up to 70 Keywords Targeted",
                "Enterprise-level SEO Strategy",
                "E-Commerce / Custom Optimization",
                "Conversion Rate Optimization (CRO)",
                "Premium Publisher Placements",
                "Dedicated Account Manager"
            ],
            btnText: "Get Started",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Article Content Writing",
            desc: "Professionally researched and SEO-optimized blogs.",
            icon: "✍️"
        },
        {
            title: "E-Commerce Integrations",
            desc: "Advanced product schema & category optimization.",
            icon: "🛒"
        },
        {
            title: "App Store Optimization",
            desc: "Rank your mobile applications higher in app stores.",
            icon: "📱"
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: '#0d0f1b' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Choose Your <span style={{ color: '#00f2fe' }}>SEO Plan</span></h2>
                    <p>Transparent pricing tailored for businesses of all sizes. Scale your organic traffic and dominate search results.</p>
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
                                    {pkg.duration && <div style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px'}}>{pkg.duration}</div>}
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
                        <h3>Optional <span style={{ color: '#00f2fe' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern" style={{justifyContent: 'center'}}>
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

export default SEOPackages;
