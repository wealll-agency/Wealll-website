import React, { useState } from 'react';
import './industry-strategy.css';

const IndustryStrategy = () => {
    const [activeTab, setActiveTab] = useState(0);

    const strategies = [
        {
            title: "E-commerce & Retail",
            points: ["Product showcase layout", "CTA buttons", "Trust elements", "Clean navigation"],
            icon: "🛍️",
            color: "#FF3366"
        },
        {
            title: "Beauty & Fashion",
            points: ["Premium design", "Creative typography", "High-quality visuals", "Elegant UI"],
            icon: "💄",
            color: "#FF99C8"
        },
        {
            title: "Fitness & Sports",
            points: ["Bold colors", "Energetic layout", "Strong call-to-action", "Program showcase"],
            icon: "🏋️",
            color: "#00FFCC"
        },
        {
            title: "Automotive Industry",
            points: ["Service highlights", "Vehicle showcase", "Strong branding", "Professional UI"],
            icon: "🚗",
            color: "#FFCC00"
        },
        {
            title: "Real Estate & Construction",
            points: ["Project galleries", "Property listings", "Inquiry forms", "Credibility structure"],
            icon: "🏗️",
            color: "#4CC9F0"
        },
        {
            title: "Healthcare & Finance",
            points: ["Clean UI", "Trust-building sections", "Structured content", "Professional layouts"],
            icon: "⚕️",
            color: "#00C9FF"
        }
    ];

    return (
        <section className="industry-strategy-section">
            <div className="container">
                <div className="strategy-header text-center">
                    <h2>Industry-Based <span className="highlight-text">Design Strategy</span></h2>
                    <p>A construction company portfolio cannot look like a beauty brand portfolio. We design each portfolio with the right style, structure, and business strategy based on your industry.</p>
                </div>

                <div className="strategy-container">
                    <div className="strategy-tabs">
                        {strategies.map((strat, index) => (
                            <button
                                key={index}
                                className={`strategy-tab-btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                                style={{ '--tab-color': strat.color }}
                            >
                                <span className="tab-icon">{strat.icon}</span>
                                {strat.title}
                            </button>
                        ))}
                    </div>

                    <div className="strategy-display">
                        <div className="strategy-card" style={{ '--card-color': strategies[activeTab].color }}>
                            <div className="strategy-card-icon">
                                {strategies[activeTab].icon}
                            </div>
                            <h3>{strategies[activeTab].title}</h3>
                            <div className="strategy-points">
                                {strategies[activeTab].points.map((point, i) => (
                                    <div className="strat-point" key={i}>
                                        <div className="point-check">✓</div>
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="strategy-bg-effect"></div>
                        </div>
                        <div className="strategy-info-text text-center mt-4">
                            <p>We design portfolios that are not only beautiful but also optimized to generate leads and customer inquiries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryStrategy;
