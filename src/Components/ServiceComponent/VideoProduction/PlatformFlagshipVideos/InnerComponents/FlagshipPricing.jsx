import React from 'react';
import './flagship-pricing.css'; // Reusing exact classes and CSS from LogoPricing

const FlagshipPricing = () => {
    const packages = [
        {
            title: "Starter Flagship Video",
            subtitle: "Ideal for early-stage platforms & products",
            price: "Enquire", // As per reference if price isn't explicitly requested as a number, or just the word since no price was in prompt
            features: [
                "60–90 second flagship video",
                "Scriptwriting support",
                "Platform UI simulation",
                "Professional editing & BGM",
                "Delivery: 7–10 days",
                "2 revisions included"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth Launch Video",
            subtitle: "Best for SaaS launches & campaigns",
            price: "Enquire",
            features: [
                "90–120 second cinematic video",
                "Full script & storyboard",
                "Advanced UI & feature animations",
                "Professional VO recording",
                "Multi-format versions for ads",
                "Delivery: 10–15 days",
                "3–4 revisions included"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Campaign Film",
            subtitle: "Designed for large product launches",
            price: "Enquire",
            features: [
                "2–3 minute cinematic flagship film",
                "Full narrative strategy & concept",
                "Advanced motion graphics & UI",
                "Pro voiceover & sound design",
                "Multiple platform-ready versions",
                "Campaign integration support",
                "Delivery: 15–25 days",
                "Unlimited revisions (within scope)"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Multi-language VO",
            desc: "Reach global audiences with native voiceovers.",
            icon: "🌍"
        },
        {
            title: "Subtitle & Localization",
            desc: "Accurate captions and region-specific versions.",
            icon: "📝"
        },
        {
            title: "Short-form Social Cuts",
            desc: "Bite-sized clips optimized for Reels & TikTok.",
            icon: "📱"
        },
        {
            title: "Landing Page Integration",
            desc: "Seamless setup of hero video on your site.",
            icon: "💻"
        },
        {
            title: "YouTube SEO Optimization",
            desc: "Keywords, tags & description for max visibility.",
            icon: "🔍"
        },
        {
            title: "Paid Ad Campaign Setup",
            desc: "Strategic deployment of your video in ads.",
            icon: "📈"
        },
        {
            title: "Interactive Video Versions",
            desc: "Clickable video elements for high engagement.",
            icon: "🖱️"
        },
        {
            title: "Custom Thumbnail Design",
            desc: "High-CTR graphics designed for your video.",
            icon: "🖼️"
        },
        {
            title: "A/B Testing Variations",
            desc: "Multiple intros to test which performs best.",
            icon: "🔬"
        },
        {
            title: "Advanced UI Upgrade",
            desc: "Hyper-realistic 3D user interface animations.",
            icon: "✨"
        },
        {
            title: "Product Photography",
            desc: "High-end stills captured during production.",
            icon: "📸"
        }
    ];

    return (
        <section className="flagship-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Platform Flagship Video <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose a flagship package based on your launch requirements and scale.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`flagship-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price" style={pkg.price === 'Enquire' ? { fontSize: '2rem' } : {}}>
                                        {pkg.price !== 'Enquire' && <span className="pricing-currency">₹</span>}
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
                <div className="flagship-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
                        <p className="text-muted mt-2">Enhance your flagship video with additional services</p>
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

export default FlagshipPricing;
