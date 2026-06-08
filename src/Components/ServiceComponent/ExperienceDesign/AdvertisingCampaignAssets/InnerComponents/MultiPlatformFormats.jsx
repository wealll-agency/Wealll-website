import React, { useState } from 'react';
import './multi-platform-formats.css';

const MultiPlatformFormats = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const formats = [
        { title: "Facebook & Instagram Feed Ads", desc: "Square and vertical standard layouts optimized for scroll-stopping engagement.", icon: "📱" },
        { title: "Instagram Story & Reel Ads", desc: "Full-screen vertical formats (9:16) built with fast-paced visual hooks.", icon: "⚡" },
        { title: "LinkedIn Sponsored Ads", desc: "Professional, B2B-focused single image and carousel ad designs.", icon: "💼" },
        { title: "Google Display Network Banners", desc: "A complete set of multi-size HTML5 and static banners for scale.", icon: "🌐" },
        { title: "YouTube Ad Assets", desc: "High-CTR thumbnails and companion banners for video campaigns.", icon: "▶️" },
        { title: "WhatsApp & Retargeting", desc: "Direct messaging creatives and highly personalized retargeting sets.", icon: "💬" }
    ];

    return (
        <section className="multi-platform-section-v2">
            <div className="platform-particle-bg-v2"></div>
            <div className="container position-relative z-2">
                <div className="row align-items-center mb-5 mb-lg-0 g-5">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-5">
                        <div className="platform-header-content-v2">
                            <h2 className="platform-title-v2">
                                Multi-Platform <br />
                                <span className="text-yellow text-gradient-glow">Advertising Formats</span>
                            </h2>
                            <p className="platform-desc-v2">
                                We design ad creatives optimized for multiple platforms to ensure consistency and performance across all channels. We deliver pixel-perfect dimensions, ensuring maximum visual clarity everywhere.
                            </p>
                            <div className="platform-tech-ring-v2">
                                <div className="ring-pulse-v2"></div>
                                <span>Platform-Ready Designs for Maximum Reach</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SELECTION UI - COMPLETELY REDESIGNED FOR CLARITY */}
                    <div className="col-lg-7">
                        <div className="platform-interactive-stack">

                            {/* Visual Display Screen */}
                            <div className="platform-display-screen">
                                <div className="screen-header">
                                    <span className="dot dot-red"></span>
                                    <span className="dot dot-yellow"></span>
                                    <span className="dot dot-green"></span>
                                    <div className="screen-url">ad-formats.exe</div>
                                </div>
                                <div className="screen-body">
                                    <div className="screen-icon-huge">{formats[activeIdx].icon}</div>
                                    <h3 className="screen-active-title">{formats[activeIdx].title}</h3>
                                    <p className="screen-active-desc">{formats[activeIdx].desc}</p>
                                    <div className="screen-metric-bar">
                                        <div className="metric-fill"></div>
                                    </div>
                                    <span className="metric-label">Optimization Score: 99.9%</span>
                                </div>
                            </div>

                            {/* Selectable Nav List */}
                            <div className="platform-nav-list">
                                {formats.map((format, i) => (
                                    <div
                                        className={`platform-nav-item ${activeIdx === i ? 'active' : ''}`}
                                        key={i}
                                        onMouseEnter={() => setActiveIdx(i)}
                                    >
                                        <div className="nav-item-indicator"></div>
                                        <div className="nav-item-text">{format.title}</div>
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

export default MultiPlatformFormats;
