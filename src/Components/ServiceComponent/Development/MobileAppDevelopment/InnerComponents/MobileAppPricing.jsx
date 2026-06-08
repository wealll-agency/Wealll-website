import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';
import './mobile-dark.css'; 

const MobileAppPricing = () => {
    const packages = [
        {
            title: "Basic Hybrid App",
            subtitle: "Best for simple informational & utility apps",
            price: "85,000",
            features: [
                "Single Codebase (iOS & Android)",
                "Basic UI/UX Design",
                "Up to 5 Key Screens",
                "Simple Admin Panel",
                "Standard API Integration",
                "1 Month Technical Support",
                "Delivery: 3-4 Weeks"
            ],
            btnText: "Order Basic",
            featured: false
        },
        {
            title: "Advanced Native App",
            subtitle: "Best for growing businesses & platforms",
            price: "1,80,000",
            features: [
                "Native iOS (Swift) & Android (Kotlin)",
                "Advanced Custom Animations",
                "Up to 15 Key Screens",
                "Payment Gateway Integration",
                "Push Notifications & Analytics",
                "Complex Backend/API",
                "3 Months Support",
                "Delivery: 6-8 Weeks"
            ],
            btnText: "Order Advanced",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise Solutions",
            subtitle: "Best for large scale ecosystems & IoT",
            price: "3,50,000+",
            features: [
                "Microservices App Architecture",
                "Real-Time Chat & Sockets",
                "AR/VR or IoT Integrations",
                "Offline & Sync Capabilities",
                "Advanced Security (Biometrics)",
                "6 Months Premium Support",
                "Delivery: 10-14 Weeks"
            ],
            btnText: "Order Enterprise",
            featured: false
        }
    ];

    const addons = [
        {
            title: "App Store Optimization",
            desc: "Boost your visibility on Apple App Store & Google Play.",
            icon: "📈"
        },
        {
            title: "Wearable Extension",
            desc: "Extend your app's functionality to Apple Watch & Wear OS.",
            icon: "⌚"
        },
        {
            title: "Cloud Infrastructure",
            desc: "Scalable AWS/Firebase deployment and maintenance.",
            icon: "☁️"
        },
        {
            title: "Multilingual Support",
            desc: "Globalize your app with multi-language localization.",
            icon: "🌍"
        },
        {
            title: "AI & Machine Learning",
            desc: "Integrate predictive analytics or smart recommendations.",
            icon: "🧠"
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: 'var(--mobile-bg-deep)' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Mobile App Development <span style={{ color: 'var(--mobile-accent-primary)' }}>Packages</span></h2>
                    <p>Select a mobile app development package scoped to your project's technical needs.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`} style={pkg.featured ? { boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)', border: '1px solid var(--mobile-accent-primary)' } : {}}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag" style={{ background: 'var(--mobile-accent-primary)' }}>{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon" style={{ color: 'var(--mobile-accent-primary)' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a 
                                    href="#contact" 
                                    className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`}
                                    style={pkg.featured ? { background: 'var(--mobile-accent-primary)', borderColor: 'var(--mobile-accent-primary)' } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
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
                        <h3>Optional <span style={{ color: 'var(--mobile-accent-primary)' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="addon-card-premium" key={index}>
                                <div className="addon-icon-box" style={{ color: 'var(--mobile-accent-primary)', background: 'rgba(59, 130, 246, 0.1)' }}>
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

export default MobileAppPricing;
