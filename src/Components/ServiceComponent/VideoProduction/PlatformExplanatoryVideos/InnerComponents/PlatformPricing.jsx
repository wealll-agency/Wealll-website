import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Utilizing standard setup

const PlatformPricing = () => {
    const packages = [
        {
            title: "Starter Explainer",
            subtitle: "Best for basic platform introduction",
            price: "Enquire",
            features: [
                "60–90 second explainer video",
                "Scriptwriting support",
                "Screen recording or basic animation",
                "Professional voiceover",
                "Background music",
                "2 revisions included",
                "Delivery: 7–10 working days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth SaaS",
            subtitle: "Ideal for growing SaaS & digital platforms",
            price: "Enquire",
            features: [
                "90–120 second strategic explainer",
                "Full script + storyboard",
                "Advanced UI simulation or animation",
                "Professional voiceover",
                "Motion graphics integration",
                "3–4 revisions included",
                "Delivery: 10–15 working days"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium System",
            subtitle: "Designed for established platforms & scaling businesses",
            price: "Enquire",
            features: [
                "2–3 minute cinematic explainer",
                "Full narrative strategy & concept development",
                "Multiple feature modules",
                "High-end motion graphics",
                "Multi-format versions (ads, landing page, social media)",
                "Funnel integration support",
                "Unlimited revisions (within scope)",
                "Delivery: 15–25 working days"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        { title: "Multi-language Voiceover", desc: "Speak directly to global markets.", icon: "🗣️" },
        { title: "Subtitle & Localization", desc: "Translated text for accessibility.", icon: "🔤" },
        { title: "Additional Feature Modules", desc: "Break out more tool specifics.", icon: "🧩" },
        { title: "Interactive Video Version", desc: "Clickable hotspots inside the video.", icon: "👆" },
        { title: "Landing Page Integration", desc: "Embed the video flawlessly.", icon: "💻" },
        { title: "YouTube SEO Optimization", desc: "Rank effectively on YouTube search.", icon: "🔍" },
        { title: "Paid Ad Campaign Setup", desc: "Run your video as an optimized ad.", icon: "📈" },
        { title: "A/B Testing Variations", desc: "Different hooks to test conversion.", icon: "⚖️" },
        { title: "Custom Thumbnail Design", desc: "Click-worthy custom graphics.", icon: "🖼️" },
        { title: "Email Automation Integration", desc: "Follow-up video sequences.", icon: "📧" },
        { title: "UI/UX Demo Upgrade", desc: "High-fidelity mockups for unbuilt tools.", icon: "✨" }
    ];

    return (
        <section className="logo-pricing-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Platform Explanatory Video <span style={{ color: '#fdb914' }}>Packages</span></h2>
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
                                        {pkg.price}
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

export default PlatformPricing;
