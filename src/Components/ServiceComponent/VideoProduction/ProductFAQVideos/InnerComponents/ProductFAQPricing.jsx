import React from 'react';
import './product-faq-pricing.css';

const ProductFAQPricing = () => {
    const packages = [
        {
            title: "Starter FAQ Video Package",
            subtitle: "Best for answering a few key product questions",
            features: [
                "3–5 short FAQ videos",
                "(30–60 seconds each)",
                "Scriptwriting support",
                "Screen recording / demo",
                "Pro editing & bg music",
                "2 revisions included",
                "Delivery: 7–10 working days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth FAQ Video Library",
            subtitle: "Ideal for product education & support",
            features: [
                "8–12 FAQ videos",
                "Structured script & storyboard",
                "Product & UI walkthroughs",
                "Motion graphics integration",
                "Professional voiceover",
                "3–4 revisions included",
                "Delivery: 10–15 working days"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium FAQ Video System",
            subtitle: "Best for complex platforms",
            features: [
                "15–20 structured FAQ videos",
                "Full content strategy",
                "Advanced motion graphics",
                "Multi-format versions",
                "Knowledge base integration help",
                "Unlimited revisions (within scope)",
                "Delivery: 15–25 working days"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        { title: "Multi-language voiceovers", desc: "Translate your videos into multiple languages.", icon: "🌍" },
        { title: "Subtitle & localization", desc: "Add professional closed captions.", icon: "📝" },
        { title: "Additional feature tutorials", desc: "Extra tutorials for minor features.", icon: "➕" },
        { title: "Interactive video formats", desc: "Clickable hotspots for learning.", icon: "🔘" },
        { title: "YouTube SEO optimization", desc: "Rank higher on search engines.", icon: "🔍" },
        { title: "Paid ad campaign setup", desc: "Use FAQ videos for retargeting.", icon: "💰" },
        { title: "Landing page integration", desc: "Embed videos perfectly on your site.", icon: "💻" },
        { title: "Custom thumbnail design", desc: "High CTR cover images.", icon: "🖼️" },
        { title: "Analytics & tracking", desc: "Measure viewer drop-off and engagement.", icon: "📊" },
        { title: "Help center integration", desc: "Organize videos in a branded hub.", icon: "🛠️" },
        { title: "Social media short-form", desc: "Reel/TikTok optimized cuts.", icon: "📱" }
    ];

    return (
        <section className="faq-pricing-section" id="packages">
            <div className="container">
                <div className="faq-pricing-header">
                    <h2>PRODUCT FAQ VIDEO <span style={{ color: '#fdb914' }}>PACKAGES</span></h2>
                    <p>Select the perfect package to build your product's video knowledge base.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`faq-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="faq-pricing-title-area">
                                    {pkg.badge && <span className="faq-popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    {/* <div style={{ height: '30px' }}></div>  */}
                                    {/* Spacer in place of price */}
                                </div>
                                <ul className="faq-pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="faq-check-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`faq-pricing-btn ${pkg.featured ? 'filled' : 'outline'}`}>
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="faq-addons-area mt-5">
                    <div className="faq-addons-header">
                        <h3>Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
                    </div>
                    <div className="faq-addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="faq-addon-card-premium" key={index}>
                                <div className="faq-addon-icon-box">
                                    {addon.icon}
                                </div>
                                <div className="faq-addon-content">
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

export default ProductFAQPricing;
