import React from 'react';
import './portfolio-services.css';

const PortfolioServices = () => {
    const services = [
        {
            title: "Personal Portfolio",
            desc: "A digital mirror of your identity. Clean, minimal, and impactful.",
            icon: "👤",
            color: "#00ecff"
        },
        {
            title: "Freelancer",
            desc: "Convert visitors into clients with service-focused layouts.",
            icon: "💼",
            color: "#ff00d4"
        },
        {
            title: "Developer",
            desc: "Tech-forward designs showcasing code, stacks, and GitHub repos.",
            icon: "💻",
            color: "#00ff88"
        },
        {
            title: "UI/UX Designer",
            desc: "Experience-driven visuals with case study deep-dives.",
            icon: "🎨",
            color: "#ffcc00"
        },
        {
            title: "Photographer",
            desc: "Immersive galleries that let your images do the talking.",
            icon: "📷",
            color: "#ff3366"
        },
        {
            title: "Agency",
            desc: "Corporate yet creative portfolios for teams and brands.",
            icon: "🏢",
            color: "#9900ff"
        }
    ];

    return (
        <section className="portfolio-services-section">
            <div className="container">
                <div className="services-header">
                    <h2>Portfolio <span className="prism-text">Designing</span></h2>
                    <p>Crafting your digital legacy with precision and style.</p>
                </div>

                <div className="prism-grid">
                    {services.map((service, index) => (
                        <div className="prism-card-wrapper" key={index}>
                            <div className="prism-card">
                                <div className="prism-content">
                                    <div className="prism-icon" style={{ textShadow: `0 0 20px ${service.color}` }}>
                                        {service.icon}
                                    </div>
                                    <h3 style={{ color: service.color }}>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                                <div className="prism-overlay" style={{ background: `linear-gradient(135deg, ${service.color}22, transparent)` }}></div>
                                <div className="prism-border" style={{ borderColor: service.color }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioServices;
