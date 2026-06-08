import React, { useState } from 'react';
import './presentation.css';

const PresentationIndustries = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const industries = [
        { name: "Tech Startups", desc: "Seed & Series A funding pitch decks.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop" }, // Modern tech office/data
        { name: "FinTech & Crypto", desc: "Whitepapers, ICOs & tokenomics.", img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1200&auto=format&fit=crop" }, // Crypto/Trading charts
        { name: "Enterprise B2B", desc: "High-ticket software sales decks.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" }, // Enterprise Data 
        { name: "Medical & Health", desc: "Clinical trials & board reviews.", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" }, // Modern Medical/Lab
        { name: "Real Estate", desc: "Commercial developer proposals.", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop" }, // Luxury Real Estate
        { name: "Agencies & PR", desc: "RFP responses & bold campaign pitches.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" }, // Creative Agency Meeting
        { name: "Education", desc: "Institutional funding & curriculum.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" }, // University/Education
        { name: "Non-Profit", desc: "Major donor & grant applications.", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" } // Community/Helping Hands
    ];

    return (
        <section className="presentation-section pt-0 pb-0" style={{ background: '#000' }}>
            <div className="typo-parallax-wrapper">

                {/* Left Side: Massive Typography Triggers */}
                <div className="typo-parallax-left">
                    <div className="typo-header-area mb-5">
                        <p className="typo-subtitle">Tailored Solutions For</p>
                        <h2 className="typo-title">EVERY <br /> <span style={{ color: '#00f3ff' }}>SECTOR.</span></h2>
                    </div>

                    <div className="typo-menu-list">
                        {industries.map((ind, index) => (
                            <div
                                className={`typo-menu-item ${activeIndex === index ? 'active' : ''}`}
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <span className="typo-item-index">0{index + 1}</span>
                                <h3 className="typo-item-name">{ind.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Crossfading Parallax Image Portal */}
                <div className="typo-parallax-right">
                    <div className="typo-portal-container">
                        {industries.map((ind, index) => (
                            <div
                                className={`typo-portal-image ${activeIndex === index ? 'active-layer' : 'hidden-layer'}`}
                                key={index}
                            >
                                <img src={ind.img} alt={ind.name} className="typo-img-scale" />
                                <div className="typo-portal-overlay"></div>
                                <div className="typo-portal-content">
                                    <div className="typo-portal-bar"></div>
                                    <h3>{ind.name}</h3>
                                    <p>{ind.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PresentationIndustries;
