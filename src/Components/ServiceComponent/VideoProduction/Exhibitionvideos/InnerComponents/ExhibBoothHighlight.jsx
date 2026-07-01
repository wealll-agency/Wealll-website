import React, { useState } from 'react';
import '../exhibition-videos.css';

import booth1 from '../../../../../assets/images/slice-image1.jpeg';
import booth2 from '../../../../../assets/images/slice-image2.jpeg';
import booth3 from '../../../../../assets/images/slice-image3.jpeg';
import booth4 from '../../../../../assets/images/slice-image4.jpeg';
import booth5 from '../../../../../assets/images/slice-image5.jpeg';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const ExhibBoothHighlight = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const highlights = [
        { title: "Complete Booth Coverage", desc: "A robust overview of your entire exhibition setup.", img: booth1 },
        { title: "Product Interactions", desc: "Close-up shots of visitors using your products.", img: booth2 },
        { title: "Visitor Engagement", desc: "Genuine reactions and crowded booth moments.", img: booth3 },
        { title: "Brand Activation", desc: "Capturing the live marketing energy.", img: booth4 },
        { title: "Cinematic Ambiance", desc: "The grand scale and feel of the event floor.", img: booth5 }
    ];

    return (
        <section className="exhib-section">
            <BannerComponent />
            <div className="container exhib-container">
                <div className="text-center mb-5">
                    <span className="exhib-badge">Highlight Videos</span>
                    <h2 className="exhib-title">Capture the Energy of Your <span>Brand Presence</span></h2>
                    <p className="exhib-desc mx-auto">
                        Your exhibition booth represents your brand on a large stage. We create dynamic highlight videos that showcase your booth design, visitor engagement, and product displays in a compelling way.
                    </p>
                </div>

                <div className="slice-gallery-container mt-5">
                    <div className="row g-0 align-items-center">
                        {/* Left Side: Interactive Menu */}
                        <div className="col-lg-6 col-md-12 p-4 z-10">
                            <div className="slice-menu">
                                {highlights.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`slice-menu-item ${activeIndex === index ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveIndex(index)}
                                    >
                                        <div className="slice-number">0{index + 1}</div>
                                        <div className="slice-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Kinetic Slice Image Area */}
                        <div className="col-lg-6 col-md-12">
                            <div className="slice-image-wrapper">
                                {highlights.map((item, index) => {
                                    const isActive = activeIndex === index;
                                    return (
                                        <div key={index} className={`slice-image-group ${isActive ? 'active' : ''}`}>
                                            <div className="slice-strip slice-1" style={{ backgroundImage: `url(${item.img})` }}></div>
                                            <div className="slice-strip slice-2" style={{ backgroundImage: `url(${item.img})` }}></div>
                                            <div className="slice-strip slice-3" style={{ backgroundImage: `url(${item.img})` }}></div>
                                            <div className="slice-strip slice-4" style={{ backgroundImage: `url(${item.img})` }}></div>
                                            <div className="slice-strip slice-5" style={{ backgroundImage: `url(${item.img})` }}></div>

                                            {/* Beautiful dark gradient overlay for text readability if needed */}
                                            <div className="slice-overlay">
                                                <div className="slice-tag">
                                                    <span>{item.title}</span>
                                                    <i className="bi bi-arrow-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExhibBoothHighlight;
