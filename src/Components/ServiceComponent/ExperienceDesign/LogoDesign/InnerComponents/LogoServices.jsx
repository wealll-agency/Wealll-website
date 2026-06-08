import React from 'react';
import './logo-services.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const LogoServices = () => {
    const services = [
        {
            title: "Minimal / Modern",
            desc: "Clean and simple logo designs that look professional and timeless.",
            icon: "🔹" // Replaced with SVG in CSS or SVG mapping
        },
        {
            title: "Wordmark Logos",
            desc: "Text-based logo designs that make your brand name stand out.",
            icon: "🔤"
        },
        {
            title: "Lettermark Logos",
            desc: "Initial-based logo designs that create a strong and premium identity.",
            icon: "🅰️"
        },
        {
            title: "Mascot Logos",
            desc: "Character-based logos perfect for gaming, sports, and fun brands.",
            icon: "🦁"
        },
        {
            title: "Abstract Logos",
            desc: "Creative and symbolic logo designs that represent your brand concept.",
            icon: "🎨"
        },
        {
            title: "Vintage / Badge",
            desc: "Classic logo designs with a retro or traditional brand feel.",
            icon: "🛡️"
        },
        {
            title: "Luxury Brand",
            desc: "Elegant and premium logos designed for high-end businesses.",
            icon: "💎"
        }
    ];

    return (
        <section className="logo-services-section">
            <BannerComponent />
            <div className="container">
                <div className="ls-header">
                    <h2>Professional <span className="highlight-text">Logo Designing</span> Services</h2>
                    <p>A logo is the face of your brand. I design unique, modern, and memorable logos that represent your business identity.</p>
                </div>

                <div className="ls-grid">
                    {services.map((service, index) => (
                        <div className="ls-card" key={index}>
                            <div className="ls-card-inner">
                                <div className="ls-icon-box">
                                    {/* Using inline SVGs for better quality */}
                                    {index === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                                    {index === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7V4h16v3M9 20h6M12 4v16" /></svg>}
                                    {index === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 19h12v2H6zM6 4h7a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H6V4z" /></svg>}
                                    {index === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a9 9 0 0 0-9 9v3a9 9 0 0 0 18 0v-3a9 9 0 0 0-9-9z" /><path d="M9 10h.01M15 10h.01" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg>}
                                    {index === 4 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01M15 9h.01" /></svg>}
                                    {index === 5 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>}
                                    {index === 6 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                            <div className="ls-card-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoServices;
