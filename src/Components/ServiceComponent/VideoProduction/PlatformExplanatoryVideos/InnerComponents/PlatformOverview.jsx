import React, { useState } from 'react';
import '../platform-explanatory.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const PlatformOverview = () => {
    const [activeWidget, setActiveWidget] = useState(0);

    const platformFeatures = [
        {
            title: "SaaS Product Introduction",
            desc: "Clear, concise high-level overview of your core value proposition.",
            icon: "bi-laptop",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Dashboard Walkthroughs",
            desc: "Immersive screencast-style tours of your primary user interface.",
            icon: "bi-grid-1x2",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "App Overview Presentations",
            desc: "Highlighting mobile-first usability and cross-platform syncing.",
            icon: "bi-phone",
            img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Demo Summary Videos",
            desc: "Condensed 60-second pitches ideal for cold outreach and sales.",
            icon: "bi-lightning-charge",
            img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section className="plat-section">
            <BannerComponent />
            <div className="container position-relative z-10 exhib-container">
                <div className="text-center mb-5">
                    <span className="plat-badge">Platform Breakdown</span>
                    <h2 className="plat-title">SaaS & Platform <span>Overview Videos</span></h2>
                    <p className="plat-desc mx-auto">
                        Your audience should understand what your platform does within the first few minutes. We create high-level overview videos that clearly communicate your value proposition, core features, and unique benefits.
                    </p>
                </div>

                <div className="plat-dashboard-container">
                    <div className="plat-dash-nav">
                        {platformFeatures.map((feat, index) => (
                            <div
                                key={index}
                                className={`plat-dash-item ${activeWidget === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveWidget(index)}
                            >
                                <div className="plat-dash-icon">
                                    <i className={`bi ${feat.icon}`}></i>
                                </div>
                                <div className="plat-dash-text">
                                    <h4>{feat.title}</h4>
                                    <p>{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="plat-dash-visual">
                        <div className="plat-glass-board">
                            {platformFeatures.map((feat, index) => (
                                <div
                                    key={index}
                                    className={`plat-widget plat-widget-${index + 1} ${activeWidget === index ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(${feat.img})` }}
                                >
                                    {/* Additional internal styling for the widget could go here */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformOverview;
