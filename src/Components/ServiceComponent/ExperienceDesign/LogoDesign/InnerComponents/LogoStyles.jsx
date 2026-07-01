import React, { useState } from 'react';
import './logo-styles.css';

import vintage_logo from '../../../../../assets/images/vintage_logo.jpeg';
import typography_img1 from '../../../../../assets/images/typography-logo1.jpeg';
import typography_img2 from '../../../../../assets/images/typography-logo2.jpeg';
import typography_img3 from '../../../../../assets/images/typography-logo3.jpeg';
import typography_img4 from '../../../../../assets/images/typography-logo4.jpeg';
import vintage_logo_desc1 from '../../../../../assets/images/vintage_logo_description1.jpg';
import vintage_logo_desc2 from '../../../../../assets/images/vintage_logo_description2.jpg';
import vintage_logo_desc3 from '../../../../../assets/images/vintage_logo_description3.jpg';
import vintage_logo_desc4 from '../../../../../assets/images/vintage_logo_description4.jpeg';
import geomatric1_logo from '../../../../../assets/images/geomatric1-logo.jpeg';
import geomatric2_logo from '../../../../../assets/images/geomatric2-logo.jpeg';
import geomatric3_logo from '../../../../../assets/images/geomatric3-logo.jpeg';
import geomatric4_logo from '../../../../../assets/images/geomatric4-logo.jpeg';
import vintage_img1 from '../../../../../assets/images/vintage_logo1.jpeg';
import vintage_img2 from '../../../../../assets/images/vintage_logo2.jpeg';
import vintage_img3 from '../../../../../assets/images/vintage_logo3.jpeg';
import minimalist_img1 from '../../../../../assets/images/minimalist-logo1.jpeg';
import minimalist_img2 from '../../../../../assets/images/minimalist-logo2.jpeg';
import minimalist_img3 from '../../../../../assets/images/minimalist-logo3.jpeg';
import mascot_img1 from '../../../../../assets/images/mascot-logo1.jpeg';
import mascot_img2 from '../../../../../assets/images/mascot-logo2.jpeg';
import mascot_img3 from '../../../../../assets/images/mascot-logo3.jpeg';
import mascot_img4 from '../../../../../assets/images/mascot-logo4.jpeg';
import minimalist_logo from '../../../../../assets/images/minimalist-logo.jpeg';

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

    const initialImages = [minimalist_img1, minimalist_img2, minimalist_img3];
    const geometricImages = [geomatric4_logo, geomatric2_logo, geomatric3_logo];
    const vintageImages = [vintage_img1, vintage_img2, vintage_img3];
    const mascotImages = [mascot_img2, mascot_img3, mascot_img4];
    const abstractImages = [vintage_logo_desc2, vintage_logo_desc3, vintage_logo_desc4];
    const typographyImages = [typography_img2, typography_img3, typography_img4];
    const [bottomImages, setBottomImages] = useState(initialImages);

    const handleRotate = (face) => {
        setCurrentClass(`show-${face}`);
        if (face === 'right') {
            setBottomImages(geometricImages);
        } else if (face === 'left') {
            setBottomImages(vintageImages);
        } else if (face === 'top') {
            setBottomImages(mascotImages);
        } else if (face === 'back') {
            setBottomImages(abstractImages);
        } else if (face === 'bottom') {
            setBottomImages(typographyImages);
        } else {
            setBottomImages(initialImages);
        }
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
                                    ) : style.name === "Typographic" ? (
                                        <img src={typography_img1} alt="Typographic Logo" className="typographic-face-img" />
                                    ) : style.name === "Abstract" ? (
                                        <img src={vintage_logo_desc1} alt="Abstract Logo" className="vintage-face-img" />
                                    ) : style.name === "Geometric" ? (
                                        <img src={geomatric1_logo} alt="Geometric Logo" className="vintage-face-img" />
                                    ) : style.name === "Minimalist" ? (
                                        <img src={minimalist_logo} alt="Minimalist Logo" className="vintage-face-img" />
                                    ) : style.name === "Mascot" ? (
                                        <img src={mascot_img1} alt="Mascot Logo" className="vintage-face-img" />
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
                        {bottomImages.map((imgSrc, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="description-img-box">
                                    <img src={imgSrc} alt={`Description ${index + 1}`} className="img-fluid rounded shadow" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoStyles;
