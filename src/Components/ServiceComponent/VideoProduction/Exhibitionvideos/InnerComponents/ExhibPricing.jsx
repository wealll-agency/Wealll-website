import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Utilizing standard setup

const ExhibPricing = () => {
    const packages = [
        {
            title: "Starter Package",
            subtitle: "Ideal for small exhibitions and documentation",
            price: "15,000",
            features: [
                "2–3 minute exhibition highlight video",
                "Booth & product coverage",
                "Professional editing with background music",
                "2 short social media clips",
                "2 revisions included",
                "Delivery: 5–7 working days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth Package",
            subtitle: "Designed for lead-focused event marketing",
            price: "25,000",
            features: [
                "3–5 minute professionally edited highlight film",
                "Product demo coverage",
                "2–3 interview recordings",
                "4–6 short social media videos",
                "Cinematic editing + color grading",
                "3–4 revisions included",
                "Delivery: 7–12 working days"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Package",
            subtitle: "Best for major exhibitions & large brand presence",
            price: "45,000",
            features: [
                "5–8 minute cinematic exhibition film",
                "Multi-camera coverage",
                "Client testimonials & executive interviews",
                "Drone footage (where permitted)",
                "8–12 short-form social cuts",
                "Pre-event + post-event promotional edits",
                "Paid campaign-ready video versions",
                "Unlimited revisions",
                "Delivery: 12–18 working days"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        { title: "Drone Videography", desc: "Aerial capture of large venue spaces.", icon: "🚁" },
        { title: "Live Streaming Support", desc: "Broadcast your event globally.", icon: "📡" },
        { title: "Professional Host", desc: "Engaging anchor for booth interviews.", icon: "🎙️" },
        { title: "Same-Day Edit", desc: "Instant rapid delivery for daily posting.", icon: "⚡" },
        { title: "Extra Short Reels", desc: "Bulk package for Tiktok & Shorts.", icon: "📱" },
        { title: "Multi-Language Subtitles", desc: "Cater to an international audience.", icon: "🌍" },
        { title: "YouTube SEO", desc: "Rank high for post-event queries.", icon: "🔍" },
        { title: "LinkedIn Ad Setup", desc: "Direct B2B targeting campaigns.", icon: "💼" },
        { title: "Landing Page Design", desc: "Custom destination to catch event leads.", icon: "🖥️" },
        { title: "Paid Ad Management", desc: "End-to-end ad oversight.", icon: "📈" },
        { title: "Event Photography", desc: "High-res stills alongside video.", icon: "📸" },
        { title: "Influencer Collabs", desc: "Coordinate creators at your booth.", icon: "🤝" }
    ];

    return (
        <section className="logo-pricing-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Exhibition Video <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose a package based on your requirements. Custom packages available.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4 style={{ minHeight: '40px' }}>{pkg.subtitle}</h4>
                                    <div className="pricing-price" style={{ fontSize: '2.5rem' }}>
                                        <span className="pricing-currency">₹</span> {pkg.price}
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

export default ExhibPricing;
