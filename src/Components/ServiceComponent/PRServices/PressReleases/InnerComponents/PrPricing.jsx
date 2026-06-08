import React, { useState, useRef } from 'react';
import './pr-pricing.css';
import { motion } from 'framer-motion';

// Add 3D Tilt Card Wrapper Component
const TiltCard = ({ children, featured }) => {
    const cardRef = useRef(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
        const rotateY = ((x - centerX) / centerX) * 10;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${featured ? '1.05' : '1.02'}, ${featured ? '1.05' : '1.02'}, 1.02)`,
            transition: 'none'
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(${featured ? '1.05' : '1'}, ${featured ? '1.05' : '1'}, 1)`,
            transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
        });
    };

    return (
        <div
            ref={cardRef}
            className={`pr-pack-card ${featured ? 'featured' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={style}
        >
            {/* Glossy Reflection overlay */}
            <div className="pr-pack-gloss"></div>
            {children}
        </div>
    );
};

const PrPricing = () => {
    const packages = [
        {
            title: "Starter Package",
            subtitle: "Best for startups & small announcements",
            price: "15,000",
            features: [
                "1 Professionally Written Release",
                "Basic PR Consultation",
                "Distribution to Selected Digital Media",
                "Basic Coverage Monitoring Report",
                "Delivery: 3–5 Days"
            ],
            btnText: "Get Starter Package",
            featured: false
        },
        {
            title: "Growth Package",
            subtitle: "Best for product launches & brand announcements",
            price: "35,000",
            features: [
                "2–3 Professionally Written Releases",
                "Print & Digital Distribution",
                "Media Outreach to Journalists",
                "SEO Optimization for Digital Releases",
                "Media Coverage Monitoring & Reporting"
            ],
            btnText: "Get Growth Package",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "Premium Package",
            subtitle: "Best for large campaigns & major announcements",
            price: "75,000",
            features: [
                "Comprehensive Press Release Strategy",
                "Multiple Releases for Campaigns",
                "Wide Distribution (Print & Digital)",
                "Journalist Outreach & Follow-up",
                "Media Coverage Tracking & Analysis",
                "PR Campaign Performance Report"
            ],
            btnText: "Get Premium Package",
            featured: false
        }
    ];

    const addons = [
        {
            title: "Press Conference Planning",
            desc: "Full coordination for live media events.",
            icon: "🎤"
        },
        {
            title: "Influencer Outreach",
            desc: "Connecting your brand with key digital influencers.",
            icon: "🤝"
        },
        {
            title: "Thought Leadership",
            desc: "Article placement in top industry publications.",
            icon: "💡"
        },
        {
            title: "Executive Interviews",
            desc: "Scheduling media interviews for leadership.",
            icon: "🗣️"
        },
        {
            title: "Media Kit Creation",
            desc: "Professional press kits for journalists.",
            icon: "📂"
        },
        {
            title: "International Distribution",
            desc: "Global reach for major industry news.",
            icon: "🌍"
        },
        {
            title: "Social Media Announcements",
            desc: "Synchronized social content campaigns.",
            icon: "📱"
        },
        {
            title: "Video Press Releases",
            desc: "VNR production for broadcast and web.",
            icon: "🎥"
        },
        {
            title: "Analytics Dashboard",
            desc: "Real-time PR campaign tracking platform.",
            icon: "📊"
        }
    ];

    return (
        <section className="pr-pricing-dark-section">
            <div className="pr-pricing-glow-bg"></div>
            <div className="container position-relative z-1">
                <div className="pr-pricing-header">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        Press Release <span className="highlight-text-neon">Packages</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Choose a press release package based on your requirements. Custom PR campaigns are also available.
                    </motion.p>
                </div>

                {/* Packages Grid with 3D Tilt */}
                <div className="row justify-content-center align-items-stretch mb-5 pb-5">
                    {packages.map((pkg, index) => (
                        <motion.div
                            className="col-md-6 col-lg-4 mb-5 mb-lg-4"
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: 20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                            style={{ perspective: "1000px" }}
                        >
                            <TiltCard featured={pkg.featured}>
                                <div className="pr-pack-title-area">
                                    {pkg.badge && <span className="pr-popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pr-pack-price">
                                        <span className="pr-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pr-pack-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="pr-check-icon"><i className="bi bi-shield-check"></i></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pr-btn ${pkg.featured ? 'filled' : 'outline'}`}>
                                    {pkg.btnText}
                                </a>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                {/* Add-ons Grid identical to Exhibition Videos style with staggered entrance */}
                <div className="pr-addons-dark-area position-relative">
                    <div className="pr-addons-header">
                        <motion.h3
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Optional <span className="highlight-text-neon">Add-ons</span>
                        </motion.h3>
                        <p>Enhance your press release campaign with additional PR services.</p>
                    </div>

                    <div className="pr-addons-bento-grid">
                        {addons.map((addon, index) => (
                            <motion.div
                                className="pr-addon-bento-card"
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "0px" }}
                                transition={{ duration: 0.5, delay: index * 0.08, type: "spring", bounce: 0.4 }}
                            >
                                <div className="pr-addon-emoji-box">
                                    {addon.icon}
                                </div>
                                <div className="pr-addon-text-content">
                                    <h4>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrPricing;
