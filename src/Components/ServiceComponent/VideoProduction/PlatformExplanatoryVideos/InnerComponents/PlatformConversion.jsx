import React, { useState } from 'react';
import '../platform-explanatory.css';

const PlatformConversion = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const cfItems = [
        {
            title: "Landing Page Explainers",
            icon: "bi-layout-text-window-reverse",
            desc: "Capture attention immediately and drive sign-ups directly from your primary landing pages with high-retention video.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Sales Funnel Demos",
            icon: "bi-funnel",
            desc: "Targeted mid-funnel content designed to push warm leads into closed deals.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Ad Campaigns",
            icon: "bi-megaphone",
            desc: "High-ROI paid social clips optimized for Instagram, LinkedIn, and YouTube pre-rolls.",
            img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Sale Transitions",
            icon: "bi-arrow-right-circle",
            desc: "Bridge the gap between initial interest and final purchase with guided conversion videos.",
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200"
        },
        {
            title: "Investor Demos",
            icon: "bi-briefcase",
            desc: "Secure funding effortlessly by clearly demonstrating platform value and market potential.",
            img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200"
        }
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="plat-section plat-section-darker">
            <div className="container position-relative z-10">
                <div className="text-center mb-5">
                    <span className="plat-badge">Drive Sales</span>
                    <h2 className="plat-title">Conversion-Focused <span>Product Videos</span></h2>
                    <p className="plat-desc mx-auto">
                        Beyond education, explainer videos must support conversion. We structure videos specifically for landing pages, ads, and sales funnels to highlight benefits and address objections.
                    </p>
                </div>

                <div className="plat-cf-container">
                    {cfItems.map((item, index) => {
                        const isActive = index === activeIndex;
                        const isLeft = index < activeIndex;
                        const isRight = index > activeIndex;
                        const distance = Math.abs(activeIndex - index);

                        let transformStr = "";
                        let zIndexVal = 10 - distance;
                        let opacityVal = 1;

                        if (isActive) {
                            transformStr = "translateX(0) scale(1) perspective(1200px) rotateY(0deg)";
                            opacityVal = 1;
                        } else if (distance === 1 && isLeft) {
                            transformStr = "translateX(-45%) scale(0.8) perspective(1200px) rotateY(35deg)";
                            opacityVal = 0.6;
                        } else if (distance === 1 && isRight) {
                            transformStr = "translateX(45%) scale(0.8) perspective(1200px) rotateY(-35deg)";
                            opacityVal = 0.6;
                        } else if (distance === 2 && isLeft) {
                            transformStr = "translateX(-80%) scale(0.6) perspective(1200px) rotateY(45deg)";
                            opacityVal = 0.3;
                        } else if (distance === 2 && isRight) {
                            transformStr = "translateX(80%) scale(0.6) perspective(1200px) rotateY(-45deg)";
                            opacityVal = 0.3;
                        } else {
                            transformStr = "translateX(0) scale(0) perspective(1200px) rotateY(0deg)";
                            opacityVal = 0;
                        }

                        return (
                            <div
                                key={index}
                                className={`plat-cf-item ${isActive ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                                style={{
                                    transform: transformStr,
                                    zIndex: zIndexVal,
                                    opacity: opacityVal,
                                    pointerEvents: isActive ? 'auto' : 'auto'
                                }}
                            >
                                <div className="plat-cf-bg" style={{ backgroundImage: `url(${item.img})` }}></div>
                                <div className="plat-cf-overlay"></div>
                                <div className="plat-cf-content">
                                    <div className="plat-cf-icon">
                                        <i className={`bi ${item.icon}`}></i>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlatformConversion;
