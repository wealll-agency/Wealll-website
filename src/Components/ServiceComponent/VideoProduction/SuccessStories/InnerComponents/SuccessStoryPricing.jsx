import React from 'react';
import './success-story-pricing.css';

const SuccessStoryPricing = () => {
    const packages = [
        {
            title: "Starter Case Study Package",
            subtitle: "Ideal for documenting a single business success story",
            features: [
                "1 professionally written case study",
                "Campaign overview and strategy summary",
                "Performance metrics presentation",
                "Basic infographic visualization",
                "2 revisions included",
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth Case Study System",
            subtitle: "Perfect for marketing websites and brand promotion",
            features: [
                "3 detailed case studies",
                "Campaign strategy breakdown",
                "Before–after performance visuals",
                "Case study graphics & layout",
                "Client testimonial integration",
                "3–4 revisions included"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Content System",
            subtitle: "Designed for agencies, startups, and scaling businesses",
            features: [
                "5–8 structured case studies",
                "Video testimonial integration",
                "Advanced performance infographics",
                "SEO-optimized case study pages",
                "Social media promotion assets",
                "Unlimited revisions (within scope)"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        { title: "Video case study production", desc: "Cinematic success story videos.", icon: "🎥" },
        { title: "Client testimonial interviews", desc: "Professional interview shoots.", icon: "🎤" },
        { title: "Infographic design", desc: "Custom data visualizations.", icon: "📊" },
        { title: "SEO optimization", desc: "Rank case studies on search engines.", icon: "🔍" },
        { title: "Landing page design", desc: "High-converting standalone pages.", icon: "💻" },
        { title: "Social media creatives", desc: "Promo assets for Instagram/Facebook.", icon: "📱" },
        { title: "LinkedIn campaigns", desc: "B2B outreach utilizing studies.", icon: "🔗" },
        { title: "Presentation deck version", desc: "Pitch decks of your success.", icon: "📑" },
        { title: "Blog article adaptation", desc: "Long-form written SEO content.", icon: "✍️" },
        { title: "Email campaign integration", desc: "Newsletters to feature case studies.", icon: "📧" }
    ];

    return (
        <section className="ss-pricing-section" id="packages">
            <div className="container">
                <div className="ss-pricing-header">
                    <h2>SUCCESS STORY <span style={{ color: '#e74c3c' }}>PACKAGES</span></h2>
                    <p>Select the perfect package to document and scale your business wins.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`ss-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="ss-pricing-title-area">
                                    {pkg.badge && <span className="ss-popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                </div>
                                <ul className="ss-pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="ss-check-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`ss-pricing-btn ${pkg.featured ? 'filled' : 'outline'}`}>
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="ss-addons-area mt-5">
                    <div className="ss-addons-header">
                        <h3>Optional <span style={{ color: '#e74c3c' }}>Add-ons</span></h3>
                    </div>
                    <div className="ss-addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="ss-addon-card-premium" key={index}>
                                <div className="ss-addon-icon-box">
                                    {addon.icon}
                                </div>
                                <div className="ss-addon-content">
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

export default SuccessStoryPricing;
