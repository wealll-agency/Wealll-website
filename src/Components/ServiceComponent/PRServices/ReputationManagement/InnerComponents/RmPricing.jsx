import React from 'react';
import './rm-pricing.css'; // Will be a deep copy of logo-pricing css

const RmPricing = () => {
    const packages = [
        {
            title: "Starter Package",
            subtitle: "Best for small businesses and startups",
            price: "15,000",
            features: [
                "Basic brand reputation monitoring",
                "Review tracking across major platforms",
                "Monthly reputation report",
                "Basic review response guidance"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth Package",
            subtitle: "Best for growing brands managing public perception",
            price: "35,000",
            features: [
                "Advanced reputation monitoring",
                "Online review management and responses",
                "Social media reputation management",
                "Positive content development",
                "Monthly reputation analysis report"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Protection",
            subtitle: "Best for brands seeking comprehensive control",
            price: "75,000",
            features: [
                "Full reputation monitoring and management",
                "Media and PR reputation support",
                "Crisis response support",
                "Brand storytelling and credibility campaigns",
                "Detailed reputation performance reports"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Press Release Distribution",
            desc: "Widespread media coverage for your positive brand news.",
            icon: "📰"
        },
        {
            title: "Influencer Outreach",
            desc: "Community campaigns leveraging trusted industry voices.",
            icon: "🤝"
        },
        {
            title: "Reputation SEO",
            desc: "Pushing negative search results down with optimized content.",
            icon: "🔍"
        },
        {
            title: "Thought Leadership",
            desc: "Article placements establishing your executive authority.",
            icon: "✍️"
        },
        {
            title: "Video Testimonials",
            desc: "High-quality case study production building instant trust.",
            icon: "🎥"
        },
        {
            title: "Media Interview Prep",
            desc: "Executive media training and interview coordination.",
            icon: "🎙️"
        },
        {
            title: "Sentiment Analytics",
            desc: "Real-time dashboard tracking public brand perception.",
            icon: "📊"
        },
        {
            title: "Feedback Surveys",
            desc: "Customer satisfaction analysis and proactive review generation.",
            icon: "📝"
        }
    ];

    return (
        <section className="rm-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Reputation Management <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose a reputation package based on your requirements. Custom PR campaigns also available.</p>
                </div>

                {/* Packages Grid (Exact structural replica of LogoPricing) */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`rm-pricing-card ${pkg.featured ? 'featured' : ''}`}>
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

                {/* Add-ons Grid (Exact structural replica of LogoPricing optional add-ons) */}
                <div className="rm-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
                        <p style={{ color: '#aaa', marginTop: '10px' }}>Enhance your reputation management strategy with additional services.</p>
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

export default RmPricing;
