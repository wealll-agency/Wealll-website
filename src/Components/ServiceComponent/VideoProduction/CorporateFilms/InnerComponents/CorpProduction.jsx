import React, { useState } from 'react';
import '../corporate-films-advanced.css';

// Importing assets for the new design
import cineShoot from '../../../../../assets/images/commercial_cinema.jpg';
import lighting from '../../../../../assets/images/portfolio_logo9.jpg';
import interview from '../../../../../assets/images/Team-1.jpg';
import drone from '../../../../../assets/images/commercial_poster.jpg';
import graphics from '../../../../../assets/images/monitor.png';
import vo from '../../../../../assets/images/podcast-collaboration.jpg';

const CorpProduction = () => {
    const [activeItem, setActiveItem] = useState(0);

    const productionItems = [
        {
            title: "Multi-Camera Cinematic",
            subtitle: "Shooting",
            desc: "Immersive multi-angle capture for high-end visual storytelling.",
            img: cineShoot,
            icon: "🎥"
        },
        {
            title: "Executive & Leadership",
            subtitle: "Interviews",
            desc: "Professional setups that make your leadership team look and sound authoritative.",
            img: interview,
            icon: "🎙️"
        },
        {
            title: "Professional Lighting",
            subtitle: "& Setup",
            desc: "Studio-grade lighting design tailored to your corporate environment.",
            img: lighting,
            icon: "💡"
        },
        {
            title: "Drone & Aerial",
            subtitle: "Footage",
            desc: "Breathtaking aerial perspectives of your facilities and scale.",
            img: drone,
            icon: "🚁"
        },
        {
            title: "Motion Graphics",
            subtitle: "& VFX",
            desc: "Data visualization and dynamic graphics that simplify complex concepts.",
            img: graphics,
            icon: "✨"
        },
        {
            title: "Voiceover &",
            subtitle: "Sound Design",
            desc: "Premium audio engineering and international voice talent.",
            img: vo,
            icon: "🎵"
        }
    ];

    return (
        <section className="corp-section overflow-hidden">
            <div className="container relative z-10">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-7">
                        <span className="corp-badge">Premium Execution</span>
                        <h2 className="corp-title">Premium Visual & <span>Audio Production</span></h2>
                        <p className="corp-desc">
                            We combine strategic storytelling with high-quality production to deliver polished, professional corporate films that command attention.
                        </p>
                    </div>
                </div>

                {/* Unique Interactive Rotor Design */}
                <div className="production-rotor-container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="production-list-modern">
                                {productionItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`prod-list-item ${activeItem === index ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveItem(index)}
                                    >
                                        <div className="prod-list-icon">{item.icon}</div>
                                        <div className="prod-list-text">
                                            <h4>{item.title} <br /><span style={{ color: '#fdb914' }}>{item.subtitle}</span></h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="production-showcase-modern">
                                {productionItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`prod-showcase-panel ${activeItem === index ? 'active' : ''}`}
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    >
                                        <div className="prod-panel-overlay">
                                            <div className="prod-panel-content">
                                                <div className="panel-blur-box text-start">
                                                    <h2>{item.title} <span style={{ color: '#fdb914' }}>{item.subtitle}</span></h2>
                                                    <p>{item.desc}</p>
                                                    <div className="panel-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorpProduction;
