import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Reusing exactly to guarantee identical structure

const SMM_Packages = () => {
    const packages = [
        {
            title: "Starter Plan",
            subtitle: "Best for small businesses",
            price: "12,500", // Added placeholder prices to match WebDev layout
            features: [
                "12 posts per month",
                "4 reels ideas per month",
                "Captions + hashtags included",
                "Basic profile optimization",
                "Monthly report",
                "Delivery: Monthly Management"
            ],
            btnText: "GET STARTER PLAN",
            featured: false
        },
        {
            title: "Standard Growth Plan",
            subtitle: "Best for consistent growth",
            price: "25,000",
            features: [
                "20 posts per month",
                "8 reels ideas per month",
                "Stories content support",
                "Hashtag strategy + content calendar",
                "Engagement support (basic)",
                "Monthly analytics report",
                "Delivery: Monthly Management"
            ],
            btnText: "GET STANDARD PLAN",
            featured: true,
            badge: "MOST POPULAR"
        },
        {
            title: "Premium Marketing Plan",
            subtitle: "Best for brand building + leads",
            price: "45,000",
            features: [
                "30 posts per month",
                "12 reels ideas per month",
                "Full content calendar planning",
                "Advanced engagement strategy",
                "Paid Ads Management (FB/Insta)",
                "Lead generation campaigns",
                "Monthly report + optimization",
                "Delivery: Monthly Management"
            ],
            btnText: "GET PREMIUM PLAN",
            featured: false
        }
    ];

    const addons = [
        { title: "Facebook/Instagram Ads Setup", desc: "Expert campaign setup and testing.", icon: "📈" },
        { title: "Full Reels Script Writing", desc: "Viral-ready scripts for every month.", icon: "🎬" },
        { title: "Influencer Collaboration", desc: "Connecting your brand with key creators.", icon: "🤝" },
        { title: "Landing Page for Ads", desc: "High-converting design for your campaigns.", icon: "🎯" },
        { title: "WhatsApp Marketing", desc: "Direct customer outreach and automation.", icon: "💬" },
        { title: "Creative Direction", desc: "Expert guidance for your content shoots.", icon: "💡" }
    ];

    return (
        <section className="logo-pricing-section smm-packages-page" style={{ backgroundColor: '#0d0f1b' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Our Social Media <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>High-performance strategies designed for dominance across the digital universe.</p>
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

export default SMM_Packages;
