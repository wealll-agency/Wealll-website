import React, { useState } from 'react';
import './portfolio-styles.css';

const PortfolioStyles = () => {
    const [activeStyle, setActiveStyle] = useState('Minimal');

    const styles = [
        { name: "Minimal", class: "style-minimal", desc: "Clean, distraction-free design focusing on content." },
        { name: "Modern", class: "style-modern", desc: "Bold typography and high-contrast visuals." },
        { name: "Creative", class: "style-creative", desc: "Artistic layouts with unique scrolling effects." },
        { name: "Corporate", class: "style-corporate", desc: "Professional, blue-tone trust-building aesthetics." },
        { name: "Dark Mode", class: "style-dark", desc: "Sleek, futuristic, and easy on the eyes." }
    ];

    return (
        <section className="portfolio-styles-section">
            <div className="container">
                <div className="styles-header">
                    <h2>Design <span className="canvas-text">Styles</span></h2>
                    <p>Select a style to see how your portfolio could look.</p>
                </div>

                <div className="canvas-container">
                    <div className="style-selector">
                        {styles.map((style) => (
                            <button
                                key={style.name}
                                className={`style-btn ${activeStyle === style.name ? 'active' : ''}`}
                                onClick={() => setActiveStyle(style.name)}
                            >
                                {style.name}
                            </button>
                        ))}
                    </div>

                    <div className={`style-preview-window ${styles.find(s => s.name === activeStyle).class}`}>
                        <div className="preview-content">
                            <div className="preview-shape"></div>
                            <h3>{activeStyle} Details</h3>
                            <p>{styles.find(s => s.name === activeStyle).desc}</p>
                            <div className="preview-elements">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioStyles;
