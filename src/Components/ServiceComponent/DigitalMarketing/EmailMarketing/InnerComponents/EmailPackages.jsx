import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css'; 

const EmailPackages = () => {
    const packages = [
        {
            title: "Starter",
            subtitle: "Targeted Outreach",
            price: "5,000",
            features: [
                "Up to 5k Subscribers",
                "Responsive Email Design",
                "1 Monthly Newsletter",
                "Basic Performance Tracking",
                "List Management",
                "Email Support"
            ],
            btnText: "Order Starter",
            featured: false
        },
        {
            title: "Professional",
            subtitle: "Automated Growth",
            price: "15,000",
            features: [
                "Up to 20k Subscribers",
                "Custom Interactive Templates",
                "3 Automated Sequences",
                "A/B Testing",
                "Advanced Segmentation",
                "Priority Support"
            ],
            btnText: "Order Pro",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Enterprise",
            subtitle: "Data-Driven Marketing",
            price: "30,000+",
            features: [
                "Unlimited Subscribers",
                "Dynamic Content Blocks",
                "Unlimited Sequences",
                "Custom API Integrations",
                "Dedicated Account Manager",
                "24/7 Premium Support"
            ],
            btnText: "Order Enterprise",
            featured: false
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: 'transparent', paddingBottom: '0' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Email Marketing <span className="email-gradient-text">Packages</span></h2>
                    <p>Choose an email marketing package tailored to your audience size and goals.</p>
                </div>

                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
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
            </div>
        </section>
    );
};

export default EmailPackages;
