import React, { useState } from 'react';
import './presentation.css';

const indImg1 = mediaUrl("assets/images/presentation/presentation-industry1.jpeg");
const indImg2 = mediaUrl("assets/images/presentation/presentation-industry2.jpeg");
const indImg3 = mediaUrl("assets/images/presentation/presentation-industry3.jpeg");
const indImg4 = mediaUrl("assets/images/presentation/presentation-industry4.jpeg");
const indImg5 = mediaUrl("assets/images/presentation/presentation-industry5.jpeg");
const indImg6 = mediaUrl("assets/images/presentation/presentation-industry6.jpeg");
const indImg7 = mediaUrl("assets/images/presentation/presentation-industry7.jpeg");
const indImg8 = mediaUrl("assets/images/presentation/presentation-industry8.jpeg");
import { mediaUrl } from "../../../../../config/media";

const PresentationIndustries = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const industries = [
        { name: "Tech Startups", desc: "Seed & Series A funding pitch decks.", img: indImg1 }, // Modern tech office/data
        { name: "FinTech & Crypto", desc: "Whitepapers, ICOs & tokenomics.", img: indImg2 }, // Crypto/Trading charts
        { name: "Enterprise B2B", desc: "High-ticket software sales decks.", img: indImg3 }, // Enterprise Data 
        { name: "Medical & Health", desc: "Clinical trials & board reviews.", img: indImg4 }, // Modern Medical/Lab
        { name: "Real Estate", desc: "Commercial developer proposals.", img: indImg5 }, // Luxury Real Estate
        { name: "Agencies & PR", desc: "RFP responses & bold campaign pitches.", img: indImg6 }, // Creative Agency Meeting
        { name: "Education", desc: "Institutional funding & curriculum.", img: indImg7 }, // University/Education
        { name: "Non-Profit", desc: "Major donor & grant applications.", img: indImg8 } // Community/Helping Hands
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
                                <img src={ind.img} alt={ind.name} className="typo-img-scale" loading="lazy" />
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
