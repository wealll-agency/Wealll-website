import React from 'react';
import { motion } from 'framer-motion';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';
import '../../../Development/LaravelDeveloper/InnerComponents/laravel-dark.css';
import './gmb-recovery-dark.css';

const GmbRecoveryPricing = () => {
    const packages = [
        {
            title: "Basic Ownership Recovery",
            subtitle: "Best for single-location businesses facing lost access without active conflict.",
            price: "10,000+",
            features: [
                "Basic account ownership audit",
                "Standard claim submission via Google",
                "Documentation prep checklist",
                "Standard recovery timeline (5-8 days)",
                "Standard email support"
            ],
            btnText: "Order Basic",
            featured: false
        },
        {
            title: "Complex Cases",
            subtitle: "Ideal for urgent cases involving unauthorized owners or third-party hijacking.",
            price: "15,000 – 30,000",
            features: [
                "Priority conflict diagnosis",
                "Internal Google Support escalation",
                "Hands-on documentation filing",
                "Fast-track timeline (3-5 days)",
                "Live video verification assist",
                "1-on-1 strategy call"
            ],
            btnText: "Order Complex",
            featured: true,
            badge: "Most Popular"
        }
    ];

    return (
        <section className="logo-pricing-section gmb-dark-bg" style={{ '--lar-accent': 'var(--gmb-blue)' }}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Google Business Profile <span style={{ color: 'var(--lar-accent)' }}>Packages</span></h2>
                    <p>Flat, transparent pricing based on the severity of your ownership conflict.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-5 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag" style={{ color: '#fff', background: 'var(--gmb-red)' }}>{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div 
                                        className="pricing-price" 
                                        style={{ fontSize: pkg.price.length > 10 ? '2rem' : '3.5rem' }}
                                    >
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon" style={{ color: 'var(--gmb-green)' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a 
                                    href="#contact" 
                                    className={`pricing-btn ${pkg.featured ? 'filled lar-btn-glow' : 'outline'}`}
                                    style={pkg.featured ? { background: 'var(--lar-accent)', borderColor: 'var(--lar-accent)', color: '#fff' } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                                >
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer notes */}
                <div className="text-center mt-4 pb-5">
                    <p style={{ color: 'var(--gmb-blue)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>
                        👉 Final quote will be provided after the free account audit.
                    </p>
                    <a href="#contact" className="btn gmb-badge-green" style={{ padding: '12px 30px', fontWeight: 800, fontSize: '1.1rem' }}>
                        <i className="fa-solid fa-bullseye me-2"></i> Free Consultation Available
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GmbRecoveryPricing;
