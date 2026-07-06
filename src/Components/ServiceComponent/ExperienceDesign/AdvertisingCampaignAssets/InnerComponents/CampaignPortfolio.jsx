import React, { useState } from 'react';
import './campaign-portfolio.css';
const img1 = mediaUrl("assets/images/campain-portfolio2.jpg");
const img2 = mediaUrl("assets/images/campain-portfolio3.jpg");
const img3 = mediaUrl("assets/images/campain-portfolio4.jpg");
const img4 = mediaUrl("assets/images/campain-portfolio5.jpg");
const img5 = mediaUrl("assets/images/campain-portfolio1.jpg");
import { mediaUrl } from "../../../../../config/media";

const CampaignPortfolio = () => {
    const [activePanel, setActivePanel] = useState(0);

    const portfolioItems = [
        {
            title: "Social Media Ad Creatives",
            desc: "Facebook, Instagram & LinkedIn high-conversion formats.",
            category: "Digital Social",
            image: img1
        },
        {
            title: "Multi-Size Banners",
            desc: "HTML5 & Static standard sizes for complete ad networks.",
            category: "Display Network",
            image: img2
        },
        {
            title: "Performance Meta Ads",
            desc: "A/B tested creative hooks and persuasive ad copy.",
            category: "Meta Ads",
            image: img3
        },
        {
            title: "Product Launch Campaigns",
            desc: "High-impact visual teasers creating market anticipation.",
            category: "Go-To-Market",
            image: img4
        },
        {
            title: "Festive & Promo Offers",
            desc: "Seasonal sales campaigns designed for urgency & conversion.",
            category: "Promotional",
            image: img5
        }
    ];

    return (
        <section className="campaign-portfolio-v2">
            <div className="container-fluid px-0">
                <div className="portfolio-header-v2 text-center">
                    <h2>Campaign <span className="text-yellow">Portfolio</span> & Sample Work</h2>
                    <p>Explore our highly unique advertising campaign samples. Hover or tap to expand each campaign story.</p>
                </div>

                <div className="accordion-gallery-wrapper">
                    {portfolioItems.map((item, index) => (
                        <div
                            className={`accordion-panel ${activePanel === index ? 'active' : ''}`}
                            key={index}
                            onMouseEnter={() => setActivePanel(index)}
                        >
                            <div
                                className="panel-bg"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>

                            <div className="panel-overlay-gradient"></div>

                            <div className="panel-content-data">
                                <div className="panel-vertical-title">
                                    <span>{item.title}</span>
                                </div>

                                <div className="panel-expanded-content">
                                    <div className="panel-category-badge">{item.category}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>

                                    <div className="panel-action-btn">
                                        View Campaign Details
                                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampaignPortfolio;
