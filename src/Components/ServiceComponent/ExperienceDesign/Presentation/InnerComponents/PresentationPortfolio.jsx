import React from 'react';
import './presentation.css';

const PresentationPortfolio = () => {
    // Exact cards matching the user screenshot from earlier prior to experimental galleries
    const portfolioCards = [
        {
            title: "Corporate Meetings",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff007f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </svg>
            )
        },
        {
            title: "Sales Conversion",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fdb914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            )
        },
        {
            title: "Marketing Strategy",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#00ff88" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 19 3 5 21 5 12 19"></polygon>
                </svg>
            )
        },
        {
            title: "Data Visualization",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff7300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
            )
        },
        {
            title: "Clean & Minimal",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00f3ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 22 12 12 22 2 12 12 2"></polygon>
                </svg>
            )
        },
        {
            title: "Dark Theme Premium",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a0f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            )
        },
        {
            title: "Infographics",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fdb914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
            )
        },
        {
            title: "Product Launch",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 22 20 2 20 12 2"></polygon>
                </svg>
            )
        },
        {
            title: "Startups",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            )
        }
    ];

    // Double the array for seamless marquee scrolling
    const marqueeItems = [...portfolioCards, ...portfolioCards];

    return (
        <section className="presentation-section" style={{ background: '#0a0a0c', overflow: 'hidden' }}>
            <div className="container">
                <div className="text-center mb-5 pb-4">
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', textTransform: 'uppercase', marginBottom: '15px' }}>
                        PRESENTATION <span style={{ color: '#fdb914' }}>PORTFOLIO</span> & SHOWCASE
                    </h2>
                    <p style={{ color: '#8892b0', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Explore our presentation samples created for startups, businesses, and marketing teams. Every presentation is designed to look professional on both screen and projector displays.
                    </p>
                </div>
            </div>

            {/* Continuous Marquee Wrapper */}
            <div className="portfolio-marquee-wrapper">
                <div className="portfolio-marquee-track">
                    {marqueeItems.map((item, index) => (
                        <div className="portfolio-marquee-card" key={index}>
                            <div className="portfolio-icon-wrapper mb-4">
                                {item.icon}
                            </div>
                            <h4 className="portfolio-card-title">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reverse Marquee Track for second row (optional, user image only showed maybe 2 tracks) */}
            <div className="portfolio-marquee-wrapper mt-4">
                <div className="portfolio-marquee-track reverse">
                    {marqueeItems.reverse().map((item, index) => (
                        <div className="portfolio-marquee-card" key={`rev-${index}`}>
                            <div className="portfolio-icon-wrapper mb-4">
                                {item.icon}
                            </div>
                            <h4 className="portfolio-card-title">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default PresentationPortfolio;
