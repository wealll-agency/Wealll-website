import React from 'react';
import './marketing-services.css';
// removed react-icons import

const services = [
    {
        icon: <span className="ms-icon-text">♟️</span>,
        title: "Strategy & Planning",
        desc: "Complete strategy creation based on your niche, audience, and goals."
    },
    {
        icon: <span className="ms-icon-text">✒️</span>,
        title: "Content Creation",
        desc: "High-quality posts, reels ideas, captions, and consistent posting schedule."
    },
    {
        icon: <span className="ms-icon-text">👨‍🚀</span>,
        title: "Profile Optimization",
        desc: "Optimizing bio, highlights, links, and branding for better visibility."
    },
    {
        icon: <span className="ms-icon-text">#</span>,
        title: "Hashtag Research",
        desc: "Smart hashtag strategy to improve reach and discoverability."
    },
    {
        icon: <span className="ms-icon-text">💬</span>,
        title: "Community Management",
        desc: "Replying to comments, engaging with followers, and improving trust."
    },
    {
        icon: <span className="ms-icon-text">📢</span>,
        title: "Paid Ads Management",
        desc: "Facebook & Instagram ad setup, targeting, budget planning, and optimization."
    },
    {
        icon: <span className="ms-icon-text">💲</span>,
        title: "Lead Generation",
        desc: "Generating leads through forms, WhatsApp inquiries, and landing page campaigns."
    },
    {
        icon: <span className="ms-icon-text">📈</span>,
        title: "Performance Reporting",
        desc: "Monthly analytics report with growth insights and improvement strategy."
    }
];

const MarketingServices = () => {
    return (
        <section className="marketing-services-section">
            <div className="ms-cyber-grid"></div>
            <div className="container">
                <div className="ms-header">
                    <h2>Our Social Media Marketing Services</h2>
                    <p>We provide complete social media marketing solutions that help your business attract the right audience, build trust, and convert followers into customers.</p>
                </div>

                <div className="ms-grid">
                    {services.map((service, index) => (
                        <div className="ms-card" key={index}>
                            {/* Decorative Corners */}
                            <div className="ms-corner ms-tl"></div>
                            <div className="ms-corner ms-tr"></div>
                            <div className="ms-corner ms-bl"></div>
                            <div className="ms-corner ms-br"></div>

                            <div className="ms-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketingServices;
