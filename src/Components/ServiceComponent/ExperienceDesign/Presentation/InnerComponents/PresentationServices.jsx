import React from 'react';
import './presentation.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const PresentationServices = () => {
    const services = [
        {
            title: "PPT / Corporate Presentations",
            desc: "Professional PowerPoint or Google Slides designed for business meetings, reports, proposals, and company profiles. Clean layouts, strong visuals, and structured storytelling.",
            icon: "📊",
            color: "#fdb914"
        },
        {
            title: "Elevator Pitch Writing",
            desc: "Short and powerful pitch scripts designed to communicate your idea clearly within 30–90 seconds. Perfect for networking, startup events, and investor introductions.",
            icon: "⚡",
            color: "#00f3ff"
        },
        {
            title: "Sales Pitch Presentations",
            desc: "Conversion-focused sales presentations crafted to impress prospects, highlight value, and close deals effectively.",
            icon: "🤝",
            color: "#ff3366"
        },
        {
            title: "Marketing Pitch Presentations",
            desc: "Strategic marketing presentations for campaigns, partnerships, brand proposals, and growth strategies.",
            icon: "📈",
            color: "#00ff66"
        }
    ];

    return (
        <section className="presentation-section" style={{ background: '#0a0a0a' }}>
            <BannerComponent />
            <div className="container">
                <div className="presentation-header text-center">
                    <h2>Presentation Services <span>We Offer</span></h2>
                    <p>Professional Presentation Designing & Pitch Development. We create powerful, visually premium, and strategically structured presentations that help you communicate clearly, persuade confidently, and win opportunities.</p>
                </div>

                <div className="row justify-content-center mt-5">
                    {services.map((service, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="presentation-glow-card" style={{ '--hover-color': service.color }}>
                                <div className="presentation-glow-icon-wrap" style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ color: '#fff' }}>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="presentation-glow-line" style={{ background: service.color }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PresentationServices;
