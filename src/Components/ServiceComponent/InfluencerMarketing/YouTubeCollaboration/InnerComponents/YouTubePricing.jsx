import React from 'react';
import './youtube-dark.css';

const YouTubePricing = () => {
    const packages = [
        {
            title: "Starter Integration",
            subtitle: "Ideal for brands exploring YouTube for the first time",
            price: "50,000",
            features: [
                "2 Integrated Mentions",
                "Creator Identification",
                "Basic Performance Report",
                "Content Quality Check",
                "Search Optimization"
            ],
            btnText: "Order Starter",
            featured: false
        },
        {
            title: "Growth Engine",
            subtitle: "For brands ready to scale on YouTube with strategic impact",
            price: "1,20,000",
            features: [
                "5 Integrated Mentions",
                "1 Dedicated Brand Video",
                "Deeper Analysis Dashboard",
                "Coordination & Approvals",
                "Priority Support",
                "Viral Optimization Plan"
            ],
            btnText: "Order Growth",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Dominator Pack",
            subtitle: "Designed for major brands seeking total platform authority",
            price: "2,50,000",
            features: [
                "10 Integrated Mentions",
                "3 Dedicated Videos",
                "Custom Content Series",
                "Full Retention Mapping",
                "Evergreen Strategy",
                "24/7 Account Management"
            ],
            btnText: "Order Premium",
            featured: false
        }
    ];

    return (
        <section className="logo-pricing-section youtube-dark-bg" style={{ padding: '60px 0' }}>
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>
                            YouTube Collaboration <span style={{ color: '#ffbb00' }}>Packages</span>
                        </h2>
                        <p style={{ color: '#7070a0', fontSize: '1.2rem' }}>
                            Choose a package based on your campaign goals. Custom plans available.
                        </p>
                    </div>
                </div>

                <div className="yt-pricing-row">
                    {packages.map((pkg, index) => (
                        <div className={`yt-pricing-card ${pkg.featured ? 'featured' : ''}`} key={index}>
                            {pkg.badge && <div className="yt-pricing-badge">{pkg.badge}</div>}
                            <h3 className="yt-pricing-title">{pkg.title}</h3>
                            <p className="yt-pricing-subtitle">{pkg.subtitle}</p>

                            <div className="yt-pricing-amount">
                                <span>₹</span>{pkg.price}
                            </div>

                            <ul className="yt-pricing-features">
                                {pkg.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            <a href="#contact" className="yt-pricing-btn">
                                {pkg.btnText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YouTubePricing;
