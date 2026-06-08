import React from 'react';
import './portfolio-features.css';

const PortfolioFeatures = () => {
    const features = [
        { label: "Hero Section", icon: "🦸‍♂️", desc: "First impression that kills." },
        { label: "About Me", icon: "👤", desc: "Your story, your brand." },
        { label: "Skills & Tools", icon: "🛠️", desc: "Showcase your arsenal." },
        { label: "Projects Showcase", icon: "💻", desc: "Proof of your expertise." },
        { label: "Case Studies", icon: "📑", desc: "Deep dive into process." },
        { label: "Work Experience", icon: "💼", desc: "Your professional journey." },
        { label: "Testimonials", icon: "💬", desc: "Social proof that sells." },
        { label: "Services List", icon: "📋", desc: "What you offer clearly." },
        { label: "Contact Form", icon: "✉️", desc: "Lead generation machine." },
        { label: "Resume Download", icon: "📥", desc: "One-click access." },
        { label: "Social Links", icon: "🔗", desc: "Connect everywhere." },
        { label: "Mobile Ready", icon: "📱", desc: "Perfect on every device." }
    ];

    return (
        <section className="portfolio-features-section">
            <div className="features-bg-glow"></div>
            <div className="container position-relative">
                <div className="features-header">
                    <h2>Everything <span className="bento-text">Included</span></h2>
                    <p>A complete structural framework for your professional online presence.</p>
                </div>

                <div className="bento-grid">
                    {features.map((feature, index) => (
                        <div className="bento-card" key={index}>
                            <div className="bento-icon">{feature.icon}</div>
                            <div className="bento-content">
                                <h3>{feature.label}</h3>
                                <p>{feature.desc}</p>
                            </div>
                            <div className="bento-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioFeatures;
