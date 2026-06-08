import React from 'react';
/* Reusing presentation pricing styles for exact match */
import '../../Presentation/InnerComponents/presentation.css';

const EventPackages = () => {
    const packages = [
        {
            title: "Starter Event Branding",
            subtitle: "Best for small seminars & single-day events",
            price: "Starter",
            features: [
                "Stage backdrop design",
                "3–5 social media creatives",
                "Event banner / standee design",
                "Basic presentation template",
                "1 revision per asset",
                "Print-ready + digital files",
                "Delivery: 4–6 days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth Event Branding",
            subtitle: "Best for exhibitions & multi-session seminars",
            price: "Growth",
            features: [
                "Complete stage & venue branding",
                "Booth branding (if applicable)",
                "8–12 social media creatives",
                "Presentation deck theme design",
                "Event brochure / flyer design",
                "QR lead capture design",
                "Email invite template",
                "3–4 revisions included",
                "Print-ready + source files",
                "Delivery: 6–10 days"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium 360° System",
            subtitle: "Large exhibitions & corporate events",
            price: "Premium",
            features: [
                "Complete visual identity system",
                "Event logo & theme development",
                "Full venue environmental branding",
                "15+ digital campaign creatives",
                "Paid ad creative design",
                "Landing page banner design",
                "Registration funnel visuals",
                "Sponsor branding integration",
                "Digital + print asset system",
                "Unlimited revisions (within scope)",
                "Delivery: 10–15 days"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        { title: "Event Website Design", desc: "Custom designed event portals", icon: "🌐" },
        { title: "Registration Funnel Setup", desc: "End-to-end ticketing conversion", icon: "🎫" },
        { title: "Email Marketing Automation", desc: "Automated drip sequences", icon: "📧" },
        { title: "Social Management", desc: "Live event social coverage", icon: "📱" },
        { title: "Sponsor Branding Kit", desc: "Premium sponsor prospectuses", icon: "🤝" },
        { title: "Video Editing & Highlights", desc: "Cinematic event recaps", icon: "🎥" },
        { title: "On-Site Photography", desc: "Professional event coverage", icon: "📸" },
        { title: "Influencer Support", desc: "Event influencer coordination", icon: "⭐" },
        { title: "Print Vendor Coordination", desc: "Seamless print management", icon: "🖨️" },
        { title: "Post-Event Analytics", desc: "Comprehensive performance reports", icon: "📊" }
    ];

    return (
        <section className="logo-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Event Branding <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Flexible Packages for Exhibitions, Seminars & Events based on your size, marketing goals, and brand requirements.</p>
                </div>

                {/* Packages Grid - Exact 1:1 Layout Clone */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3 style={{ fontSize: '1.5rem' }}>{pkg.title}</h3>
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

                {/* Add-ons Grid - Exact 1:1 Layout Clone */}
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
                                    <h4 style={{ fontSize: '1.1rem' }}>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Added ambient glows for Presentation context */}
            <div className="presentation-bg-glow top-left"></div>
        </section>
    );
};

export default EventPackages;
