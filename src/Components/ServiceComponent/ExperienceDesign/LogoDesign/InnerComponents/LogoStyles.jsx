import React, { useState } from 'react';
import './logo-styles.css';

import vintage_logo from '../../../../../assets/images/vintage_logo.jpeg';
import vintage_logo_desc1 from '../../../../../assets/images/vintage_logo_description1.jpeg';
import vintage_logo_desc2 from '../../../../../assets/images/vintage_logo_description2.jpeg';
import vintage_logo_desc3 from '../../../../../assets/images/vintage_logo_description3.jpeg';

const LogoStyles = () => {
    // 6 Styles for 6 Cube Faces
    const styles = [
        { id: 1, name: "Minimalist", icon: "📐", desc: "Less is more.", color: "#4cc9f0", face: "front" },
        { id: 2, name: "Abstract", icon: "🎨", desc: "Creative freedom.", color: "#f72585", face: "back" },
        { id: 3, name: "Geometric", icon: "🔷", desc: "Structured forms.", color: "#4361ee", face: "right" },
        { id: 4, name: "Vintage", icon: "🕰️", desc: "Timeless classic.", color: "#ff9e00", face: "left" },
        { id: 5, name: "Mascot", icon: "🦁", desc: "Character power.", color: "#7209b7", face: "top" },
        { id: 6, name: "Typographic", icon: "🔤", desc: "Word driven.", color: "#3a0ca3", face: "bottom" }
    ];

    const [currentClass, setCurrentClass] = useState('show-front');

    const handleRotate = (face) => {
        setCurrentClass(`show-${face}`);
    };

    return (
        <section className="logo-styles-section">
            <div className="container">
                <div className="styles-header">
                    <h2>The <span className="cube-text">Style Cube</span></h2>
                    <p>Rotate the cube to explore different design dimensions.</p>
                </div>

                <div className="cube-wrapper">
                    <div className={`style-cube ${currentClass}`}>
                        {styles.map((style) => (
                            <div className={`cube-face cube-face-${style.face}`} key={style.id} style={{ border: `2px solid ${style.color}`, boxShadow: `0 0 20px ${style.color}40`, background: `rgba(0,0,0,0.9)` }}>
                                <div className="face-content">
                                    {style.name === "Vintage" ? (
                                        <img src={vintage_logo} alt="Vintage Logo" className="vintage-face-img" />
                                    ) : (
                                        <>
                                            <div className="face-icon" style={{ textShadow: `0 0 20px ${style.color}` }}>{style.icon}</div>
                                            <h3 style={{ color: style.color }}>{style.name}</h3>
                                            <p>{style.desc}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cube-controls">
                    {styles.map((style) => (
                        <button
                            key={style.id}
                            className={`control-btn ${currentClass === `show-${style.face}` ? 'active' : ''}`}
                            onClick={() => handleRotate(style.face)}
                            style={{ '--btn-color': style.color }}
                        >
                            {style.name}
                        </button>
                    ))}
                </div>

                <div className="style-description-images mt-5">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="description-img-box">
                                <img src={vintage_logo_desc1} alt="Description 1" className="img-fluid rounded shadow" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="description-img-box">
                                <img src={vintage_logo_desc2} alt="Description 2" className="img-fluid rounded shadow" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="description-img-box">
                                <img src={vintage_logo_desc3} alt="Description 3" className="img-fluid rounded shadow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoStyles;
