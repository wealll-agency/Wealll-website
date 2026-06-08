import React from 'react';
import '../corporate-films.css';

const CorpPricing = () => {
    const packages = [
        {
            title: "Starter Package",
            subtitle: "Ideal for internal communication & basic profiling",
            price: "10,000", // As price is not hardcoded in the prompt for this
            features: [
                "2–3 minute corporate profile film",
                "Script development support",
                "Single-day professional shoot",
                "Executive interview coverage",
                "Professional editing & background music",
                "2 revisions included",
                "Delivery: 7–10 days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth Package",
            subtitle: "Best for brand positioning & marketing use",
            price: "20,000",
            features: [
                "4–6 minute corporate film",
                "Strategic storytelling & full scriptwriting",
                "Multi-location shoot",
                "Executive & team interviews",
                "Drone footage",
                "Motion graphics integration",
                "3–4 revisions included",
                "Delivery: 12–18 days"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Package",
            subtitle: "Designed for large brands & public image campaigns",
            price: "30,000",
            features: [
                "6–10 minute cinematic documentary",
                "Full narrative strategy & creative direction",
                "Multi-day production",
                "Advanced cinematography & lighting",
                "Professional voiceover & Data visualization",
                "Social media short versions (3–5 cuts)",
                "Digital campaign integration support",
                "Unlimited revisions (within scope)",
                "Delivery: 20–30 days"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        { title: "Additional Interview Sessions", desc: "Get more leadership perspectives.", icon: "🎙️" },
        { title: "Drone Cinematography", desc: "Upgrade with stunning aerial shots.", icon: "🚁" },
        { title: "Professional Presenter", desc: "Hire an actor/presenter for the film.", icon: "🤵" },
        { title: "Multi-Language Subtitles", desc: "Reach a global audience seamlessly.", icon: "💬" },
        { title: "International Voiceover", desc: "Premium voiceover artists in any accent.", icon: "🎧" },
        { title: "Documentary Teaser", desc: "A short teaser version for excitement.", icon: "⏱️" },
        { title: "Behind-the-Scenes Film", desc: "Fun BTS content for social media.", icon: "🎬" },
        { title: "YouTube SEO Optimization", desc: "Rank higher on video search.", icon: "📈" },
        { title: "LinkedIn Management", desc: "Campaign setup for corporate reach.", icon: "💼" },
        { title: "Investor Edit Version", desc: "Trimmed version for pitch decks.", icon: "📉" },
        { title: "Event Screening Version", desc: "Formatted specifically for big screens.", icon: "🖥️" },
        { title: "Media Kit Creation", desc: "Digital assets complementing the film.", icon: "📦" }
    ];

    return (
        <section className="logo-pricing-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Corporate Film <span style={{ color: '#fdb914' }}>Packages</span></h2>
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
                                        <span class="pricing-currency">₹</span> {pkg.price}
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

export default CorpPricing;
