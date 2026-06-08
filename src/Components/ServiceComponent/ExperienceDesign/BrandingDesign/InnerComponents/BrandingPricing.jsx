import React, { useEffect, useRef } from 'react';
import './branding.css';

const BrandingPricing = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const packages = [
        {
            title: "Starter Branding Package",
            subtitle: "Best for startups & small businesses",
            price: "$1,500+",
            features: [
                "Basic Brand Guideline",
                "Logo Usage Rules",
                "Color & Typography System",
                "Business Card + Letterhead",
                "1 Basic Brochure / Profile",
                "2 Revisions"
            ],
            btnText: "Start My Brand",
            featured: false
        },
        {
            title: "Growth Branding System",
            subtitle: "Best for expanding businesses",
            price: "$3,500+",
            features: [
                "Complete Brand Guideline",
                "Visual Identity System",
                "1 Company Profile",
                "1 Brochure / Catalogue",
                "Communication Collateral Templates",
                "Digital Brand Adaptation Guide",
                "3–4 Revisions"
            ],
            btnText: "Build My Brand",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium 360° Suite",
            subtitle: "Best for established brands & scaling",
            price: "$7,500+",
            features: [
                "Full Brand Manual",
                "Advanced Brand Strategy",
                "Complete Visual Identity System",
                "Multi-Brochure System",
                "Company Profile (Multiple Versions)",
                "Digital & Print Alignment",
                "Unlimited Revisions (Within Scope)"
            ],
            btnText: "Scale My Brand",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Brand Naming Consultation",
            desc: "Expert naming strategy",
            icon: "💡"
        },
        {
            title: "Logo Design / Redesign",
            desc: "Fresh, scalable identity",
            icon: "🎨"
        },
        {
            title: "Brand Positioning Workshop",
            desc: "Strategic market alignment",
            icon: "🎯"
        },
        {
            title: "Website Branding Alignment",
            desc: "Seamless UI/UX integration",
            icon: "💻"
        },
        {
            title: "Social Media Brand Kit",
            desc: "Templates and guidelines",
            icon: "📱"
        },
        {
            title: "Brand Photography Direction",
            desc: "Custom visual assets",
            icon: "📷"
        }
    ];

    return (
        <section className="logo-pricing-section brand-section-padding position-relative fade-in-section" ref={sectionRef}>
            <div className="container">
                <div className="pricing-header mb-5 text-center">
                    <h2 className="brand-section-title text-white">Branding Design <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p className="brand-section-subtitle mx-auto">
                        Choose a Package Based on Your Needs. We offer flexible branding packages for businesses of all sizes.
                    </p>
                </div>

                {/* Packages Grid - Borrowing structure from Presentation Pricing */}
                <div className="row justify-content-center align-items-stretch mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card h-100 ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price" style={{ fontSize: pkg.price.length > 10 ? '2.2rem' : '3rem' }}>
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
                                <div className="mt-auto">
                                    <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`}>
                                        {pkg.btnText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="logo-addons-area mt-5">
                    <div className="addons-header text-center mb-4">
                        <h3 className="text-white">Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
                        <p className="text-muted">Enhance your branding with additional services.</p>
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
            {/* Added ambient glows for context */}
            <div className="brand-bg-glow glow-top-right" style={{ top: '-20%', right: '-10%', opacity: 0.5 }}></div>
        </section>
    );
};

export default BrandingPricing;
