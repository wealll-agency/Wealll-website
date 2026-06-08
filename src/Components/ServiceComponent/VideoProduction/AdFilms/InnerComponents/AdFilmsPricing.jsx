import React from 'react';
import './ad-films-pricing.css';

const AdFilmsPricing = () => {
    const packages = [
        {
            title: "Starter Promotional Film Package",
            subtitle: "Best for small businesses & social media promotions",
            price: "15,000",
            features: [
                "30–60 second ad film",
                "Scriptwriting support",
                "Single location shoot",
                "Professional editing",
                "1 platform-optimized version",
                "2 revisions included",
                "Delivery: 5–7 days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth Marketing Ad Film",
            subtitle: "Best for product launches & brand campaigns",
            price: "35,000",
            features: [
                "60–120 second promotional film",
                "Strategic script + storyboard",
                "Multi-scene shoot",
                "Cinematic editing + color grading",
                "Motion graphics integration",
                "3 platform-specific versions",
                "3–4 revisions included",
                "Delivery: 7–12 days"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Brand Film",
            subtitle: "Best for established brands & large campaigns",
            price: "60,000",
            features: [
                "2–3 minute cinematic brand film",
                "Full marketing strategy integration",
                "Advanced production setup",
                "Professional voiceover",
                "Motion graphics & animation",
                "Multi-platform ad versions",
                "Paid ad campaign integration",
                "Unlimited revisions",
                "Delivery: 12–18 days"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        { title: "Drone Shooting", desc: "Aerial footage for cinematic scale.", icon: "🚁" },
        { title: "Influencer Collaboration", desc: "Partner with industry creators.", icon: "🤝" },
        { title: "Professional Actor Casting", desc: "Expert talent for your film.", icon: "🎭" },
        { title: "Script Consultation Only", desc: "Enhance your existing story.", icon: "📝" },
        { title: "Product Photography Add-On", desc: "High-end stills of your product.", icon: "📸" },
        { title: "Additional Short-Form Reels", desc: "Extra cutdowns for social.", icon: "📱" },
        { title: "Multi-Language Voiceover", desc: "Expand your global reach.", icon: "🗣️" },
        { title: "Subtitles & Localization", desc: "Translated captions for accessibility.", icon: "🌍" },
        { title: "YouTube SEO Optimization", desc: "Rank higher on search results.", icon: "🔍" },
        { title: "Full Paid Ad Campaign Management", desc: "End-to-end ad distribution.", icon: "📊" },
        { title: "Thumbnail Design", desc: "Click-worthy custom thumbnails.", icon: "🖼️" },
        { title: "Landing Page Design", desc: "High-converting destination pages.", icon: "💻" }
    ];

    return (
        <section className="ad-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Ad Film <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Transparent pricing structured to deliver maximum production value and marketing ROI.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`ad-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4 className="text-uppercase" style={pkg.featured ? { color: '#fdb914', fontWeight: 'bold' } : { color: '#fdb914', fontWeight: 'bold' }}>{pkg.subtitle}</h4>
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
                <div className="ad-addons-area">
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

export default AdFilmsPricing;
