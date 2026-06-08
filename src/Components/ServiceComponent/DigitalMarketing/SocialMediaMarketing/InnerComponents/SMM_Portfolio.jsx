import React from 'react';
import './smm-portfolio.css';
// Imports for placeholder images
import port1 from "../../../../../assets/images/portfolio_branding1.jpeg";
import port2 from "../../../../../assets/images/portfolio_branding2.jpeg";
import port3 from "../../../../../assets/images/portfolio_branding3.jpeg";
import port4 from "../../../../../assets/images/portfolio_branding4.jpeg";

const portfolioItems = [
    { type: "Post Design", title: "Creative Campaign", desc: "Startups", img: port1 },
    { type: "Reels Cover", title: "Viral Strategy", desc: "Fashion", img: port2 },
    { type: "Feed Grid", title: "Grid Esthetics", desc: "Lifestyle", img: port3 },
    { type: "Growth", title: "Engagement", desc: "Real Estate", img: port4 },
    { type: "Post Design", title: "Creative Campaign", desc: "Startups", img: port1 },

];

const SMM_Portfolio = () => {
    return (
        <section className="smm-portfolio-section">
            <div className="smm-bg-mirror"></div>
            <div className="container">
                <div className="smm-header">
                    <h2>Our Work & Results</h2>
                    <p>Interactive showcase of our latest social media campaigns.</p>
                </div>

                <div className="smm-gallery-container">
                    {portfolioItems.map((item, index) => (
                        <div className="smm-panel" key={index}>
                            <img src={item.img} alt={item.title} />

                            {/* Vertical Label for inactive state */}
                            <div className="smm-panel-label">{item.title}</div>

                            <div className="smm-panel-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.type} • {item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default SMM_Portfolio;
