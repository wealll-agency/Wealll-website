import React, { useState, useEffect } from 'react';
import './product-description-styles.css';

const ProductDescriptionStyles = () => {
    const [activeStyle, setActiveStyle] = useState('Premium');
    const [animating, setAnimating] = useState(false);

    const styles = [
        {
            name: "Simple",
            desc: "Clean & Jargon-Free",
            sample: "This ergonomic chair supports your back perfectly. Adjustable and breathable for all-day comfort.",
            color: "#4cc9f0"
        },
        {
            name: "Premium",
            desc: "Luxury & Desire",
            sample: "Experience the epitome of comfort. Hand-selected mesh embraces your form, becoming a sanctuary of productivity.",
            color: "#fdb914"
        },
        {
            name: "Professional",
            desc: "Corporate & Trust",
            sample: "Optimizes posture through advanced lumbar technology. A durable investment for high-performance offices.",
            color: "#4361ee"
        },
        {
            name: "Fun",
            desc: "Energetic & Engaging",
            sample: "Meet your back’s new best friend! 🛋️ A cloud-like hug that keeps you cool while you crush your goals.",
            color: "#f72585"
        },
        {
            name: "Technical",
            desc: "Specs & Detail",
            sample: "Model X-200: Class-4 gas lift, 3D adjustable armrests, high-tensile mesh. ASTM tested up to 150kg.",
            color: "#7209b7"
        }
    ];

    const currentStyle = styles.find(s => s.name === activeStyle);

    const handleStyleChange = (name) => {
        if (name === activeStyle) return;
        setAnimating(true);
        setActiveStyle(name);
        setTimeout(() => setAnimating(false), 600);
    };

    return (
        <section className="style-portal-section">
            <div className="container">
                <div className="style-portal-header">
                    <h2>The Style <span className="portal-text-glow">Portal</span></h2>
                    <p>See your product transformed through different lenses.</p>
                </div>

                <div className="portal-container">
                    {/* The Portal Ring */}
                    <div className="portal-ring" style={{ '--active-color': currentStyle.color }}>
                        <div className="portal-particles"></div>
                        <div className="portal-inner-glow"></div>

                        {/* The Content Inside the Portal */}
                        <div className={`portal-content ${animating ? 'teleporting' : ''}`}>
                            <div className="portal-sample-text">
                                "{currentStyle.sample}"
                            </div>
                            <div className="portal-label-tag" style={{ backgroundColor: currentStyle.color }}>
                                {currentStyle.name} Mode
                            </div>
                        </div>
                    </div>

                    {/* Controller Interface */}
                    <div className="portal-controls">
                        {styles.map((style, index) => (
                            <button
                                key={index}
                                className={`portal-btn ${activeStyle === style.name ? 'active' : ''}`}
                                onClick={() => handleStyleChange(style.name)}
                                style={{ '--btn-color': style.color }}
                            >
                                <span className="btn-marker"></span>
                                <span className="btn-name">{style.name}</span>
                                <span className="btn-desc">{style.desc}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDescriptionStyles;
