import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; // Reusing exactly as requested
import './laravel-dark.css'; // For overriding specific colors

const LaravelPricing = () => {
    const packages = [
        {
            title: "Basic MVC App",
            subtitle: "Best for simple web applications & tools",
            price: "40,000",
            features: [
                "Up to 10 Database Tables",
                "Basic User Authentication",
                "Responsive Frontend UI",
                "Standard Admin Panel",
                "1 Month Technical Support",
                "Delivery: 2-3 Weeks"
            ],
            btnText: "Order Basic",
            featured: false
        },
        {
            title: "Advanced API & SaaS",
            subtitle: "Best for complex platforms & startups",
            price: "85,000",
            features: [
                "Complex Database Architecture",
                "RESTful API Development",
                "Custom Roles & Permissions",
                "Third-Party Integrations (Payment/SMS)",
                "Advanced Security (CSRF/XSS protection)",
                "Speed Optimization",
                "3 Months Support",
                "Delivery: 4-6 Weeks"
            ],
            btnText: "Order Advanced",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise Ecosystem",
            subtitle: "Best for large-scale CRMs & ERPs",
            price: "1,50,000+",
            features: [
                "Microservices Architecture",
                "Real-time Sockets & Notifications",
                "Cloud Deployment (AWS/DigitalOcean)",
                "Automated Testing & CI/CD",
                "Multi-Tenant Support",
                "6 Months Premium Support",
                "Delivery: 8-12 Weeks"
            ],
            btnText: "Order Enterprise",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Vue/React Frontend",
            desc: "SPA integration using Vue.js or React with Inertia.",
            icon: "⚛️"
        },
        {
            title: "Server Management",
            desc: "Ongoing AWS/DigitalOcean server maintenance.",
            icon: "☁️"
        },
        {
            title: "Mobile App API",
            desc: "GraphQL or REST API specifically optimized for mobile apps.",
            icon: "📱"
        },
        {
            title: "Data Migration",
            desc: "Securely migrate millions of records from legacy systems.",
            icon: "💾"
        },
        {
            title: "Elasticsearch",
            desc: "Implement lightning-fast advanced search capabilities.",
            icon: "🔍"
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: 'var(--lar-bg-dark)' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Laravel Development <span style={{ color: 'var(--lar-accent)' }}>Packages</span></h2>
                    <p>Select a Laravel development package scoped to your project's technical needs.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured lar-pricing-pkg-featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag" style={{ background: 'var(--lar-accent)' }}>{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon" style={{ color: 'var(--lar-accent)' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a 
                                    href="#contact" 
                                    className={`pricing-btn ${pkg.featured ? 'filled lar-btn-glow' : 'outline'}`}
                                    style={pkg.featured ? { background: 'var(--lar-accent)', borderColor: 'var(--lar-accent)' } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                                >
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="logo-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: 'var(--lar-accent)' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="addon-card-premium" key={index}>
                                <div className="addon-icon-box" style={{ color: 'var(--lar-accent)', background: 'rgba(245, 82, 71, 0.1)' }}>
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

export default LaravelPricing;
