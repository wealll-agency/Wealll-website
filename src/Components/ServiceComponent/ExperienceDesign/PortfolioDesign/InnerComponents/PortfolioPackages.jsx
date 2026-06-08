import React from 'react';
import './portfolio-packages.css';

const PortfolioPackages = () => {
    // Icons as inline SVGs for cleaner code
    const icons = {
        check: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    };

    const packages = [
        {
            title: "Starter Portfolio",
            subtitle: "Best for Startups",
            price: "15,000",
            features: [
                "1-Page Portfolio Design",
                "Basic Business Sections",
                "Mobile Responsive Layout",
                "Contact Form Integration",
                "2 Revisions included",
                "Delivery: 3–5 Days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Standard Business",
            subtitle: "Most Popular",
            price: "25,000",
            features: [
                "Multi-Section Portfolio",
                "Services + Projects + Gallery",
                "Modern UI + Pro Layout",
                "Contact + WhatsApp Integration",
                "4 Revisions included",
                "Delivery: 5–8 Days"
            ],
            btnText: "Get Standard Package",
            featured: true,
            badge: "Best Value"
        },
        {
            title: "Premium Industry",
            subtitle: "For High-Level Brands",
            price: "40,000",
            features: [
                "Full Multi-Page Website",
                "Industry-Based Premium UI/UX",
                "Projects + Case Studies + Testimonials",
                "SEO-Friendly Structure",
                "Unlimited Revisions",
                "Delivery: 8–15 Days"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    // Converted deliverables to objects with icons/desc to match the "Addon Card" style
    const deliverables = [
        { title: "Mobile Responsive", desc: "Optimized for all devices.", icon: "📱" },
        { title: "Modern UI Design", desc: "Premium layout & visuals.", icon: "🎨" },
        { title: "Fast Loading", desc: "Speed optimization included.", icon: "⚡" },
        { title: "Business Structure", desc: "Designed for conversions.", icon: "🏢" },
        { title: "Contact Integration", desc: "Forms & WhatsApp connected.", icon: "📞" },
        { title: "Social Media Linked", desc: "Connect all your profiles.", icon: "🔗" },
        { title: "SEO Friendly Base", desc: "Built with SEO tags & structure.", icon: "🚀" },
        { title: "Scalable Design", desc: "Ready for future expansion.", icon: "📈" },
        { title: "SSL Security", desc: "Free SSL installation included.", icon: "🔒" }
    ];

    const addons = [
        { title: "SEO Setup", desc: "Basic on-page SEO optimization.", icon: "🔍" },
        { title: "Content Writing", desc: "Professional copy for your pages.", icon: "✍️" },
        { title: "Logo Branding", desc: "Logo design & brand kit.", icon: "💎" },
        { title: "Business Card", desc: "Print-ready card design.", icon: "📇" },
        { title: "Social Kit", desc: "banners & profile pics.", icon: "🖼️" },
        { title: "Google Profile", desc: "GMB setup & optimization.", icon: "📍" },
        { title: "Blog Section", desc: "Integrated content marketing blog.", icon: "📝" },
        { title: "Multi-Language", desc: "Translate your site for global reach.", icon: "🌐" },
        { title: "Hosting Setup", desc: "High-speed hosting configuration.", icon: "🚀" }
    ];

    return (
        <section className="portfolio-packages-section">
            <div className="container">
                <div className="packages-header text-center">
                    <h2>Portfolio Designing <span className="highlight-text">Packages</span></h2>
                    <p>Choose a package based on your business needs. Custom portfolio packages are available for all industries.</p>
                </div>

                {/* PRICING GRID */}
                <div className="packages-grid">
                    {packages.map((pkg, index) => (
                        <div className={`package-card ${pkg.featured ? 'featured' : ''}`} key={index}>
                            {pkg.badge && <div className="popular-badge">{pkg.badge}</div>}
                            <div className="pkg-header">
                                <h3>{pkg.title}</h3>
                                <span className="pkg-subtitle">{pkg.subtitle}</span>
                            </div>
                            <div className="pkg-price">
                                <span className="currency">₹</span>{pkg.price}
                            </div>
                            <ul className="pkg-features">
                                {pkg.features.map((feat, i) => (
                                    <li key={i}>
                                        <span className="check-icon">{icons.check}</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`pkg-btn ${pkg.featured ? 'primary' : 'outline'}`}>
                                {pkg.btnText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* INCLUDED SECTION - Styled like Logo Addons */}
                <div className="logo-addons-area mt-5">
                    <div className="addons-header">
                        <h3>Included in <span className="highlight-text">All Packages</span></h3>
                    </div>
                    <div className="row justify-content-center">
                        {deliverables.map((item, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="addon-card-premium h-100">
                                    <div className="addon-icon-box">
                                        {item.icon}
                                    </div>
                                    <div className="addon-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* OPTIONAL ADDONS - Styled like Logo Addons */}
                <div className="logo-addons-area mt-5">
                    <div className="addons-header">
                        <h3>Optional <span className="highlight-text">Add-ons</span></h3>
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

export default PortfolioPackages;
