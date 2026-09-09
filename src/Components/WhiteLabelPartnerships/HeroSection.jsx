import React from 'react';

const HeroSection = () => {
    return (
        <section className="wlp-hero-section">
            {/* Background Image */}
            <div className="wlp-bg-image-wrapper">
                <div className="wlp-bg-image"></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="row align-items-center">
                    
                    {/* Left Column - Text Content */}
                    <div className="col-lg-6 wlp-left-col">
                        <div className="wlp-hero-text-content">
                            <span className="wlp-badge">WHITE-LABEL PARTNERSHIPS</span>
                            <h1 className="wlp-h1">
                                Your Brand.<br/>
                                Our Expertise.<br/>
                                <span className="wlp-h1-highlight">One Powerful Partnership.</span>
                            </h1>
                            <p className="wlp-hero-p">
                                Expand your service offerings, delight your clients and grow your business. WE ALLL works behind the scenes to deliver high-quality digital solutions under your brand.
                            </p>
                            <div className="wlp-btn-group">
                                <a href="#start" className="wlp-btn-primary">
                                    Become a Partner
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </a>
                                <a href="#how-it-works" className="wlp-btn-secondary">Explore How It Works</a>
                            </div>

                            <div className="wlp-trust-banner">
                                <div className="wlp-trust-item">
                                    <div className="wlp-trust-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none"/><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2"/></svg>
                                    </div>
                                    <div className="wlp-trust-text">
                                        <h4>Your Brand Stays Front</h4>
                                        <p>We work under your brand.</p>
                                    </div>
                                </div>
                                <div className="wlp-trust-item">
                                    <div className="wlp-trust-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none"/><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2"/></svg>
                                    </div>
                                    <div className="wlp-trust-text">
                                        <h4>Confidential & Secure</h4>
                                        <p>100% NDA protected.</p>
                                    </div>
                                </div>
                                <div className="wlp-trust-item">
                                    <div className="wlp-trust-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" fill="none"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                                    </div>
                                    <div className="wlp-trust-text">
                                        <h4>Flexible Delivery</h4>
                                        <p>Scale up or down as per your needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Graphic Panel */}
                    <div className="col-lg-6 wlp-right-col">
                        <div className="wlp-graphic-container">
                            
                            {/* Branching Connecting Lines via SVG to exactly match the image */}
                            <svg className="wlp-connections-svg" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                                {/* Horizontal connecting the three main cards */}
                                <line x1="15%" y1="50%" x2="85%" y2="50%" stroke="url(#cyan-grad)" strokeWidth="2" filter="drop-shadow(0 0 4px #00d2ff)" />
                                {/* Center to Design (top left) */}
                                <line x1="50%" y1="50%" x2="35%" y2="20%" stroke="url(#cyan-grad)" strokeWidth="1.5" />
                                {/* Center to Dev (top right) */}
                                <line x1="50%" y1="50%" x2="65%" y2="20%" stroke="url(#cyan-grad)" strokeWidth="1.5" />
                                {/* Center to SEO (far right top) */}
                                <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="url(#cyan-grad)" strokeWidth="1.5" />
                                {/* Center to Paid Media (bottom left) */}
                                <line x1="50%" y1="50%" x2="35%" y2="80%" stroke="url(#cyan-grad)" strokeWidth="1.5" />
                                {/* Center to Automation (bottom right) */}
                                <line x1="50%" y1="50%" x2="65%" y2="80%" stroke="url(#cyan-grad)" strokeWidth="1.5" />

                                <defs>
                                    <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(0,210,255,0)" />
                                        <stop offset="50%" stopColor="#00d2ff" />
                                        <stop offset="100%" stopColor="rgba(0,210,255,0)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            
                            {/* Chips (Exact positioning and icons) */}
                            <div className="wlp-chip wlp-chip-design">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                                Design
                            </div>
                            <div className="wlp-chip wlp-chip-dev">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                Development
                            </div>
                            <div className="wlp-chip wlp-chip-seo">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-5 5"/></svg>
                                SEO
                            </div>
                            <div className="wlp-chip wlp-chip-media">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                                Paid Media
                            </div>
                            <div className="wlp-chip wlp-chip-automation">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                                AI & Automation
                            </div>

                            {/* Node 1: Agency (3D Perspective Left) */}
                            <div className="wlp-node wlp-node-side wlp-node-left">
                                <div className="wlp-node-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/></svg>
                                </div>
                                <div className="wlp-node-title">YOUR AGENCY</div>
                                <div className="wlp-node-subtitle">Win More Clients<br/>Grow Your Business</div>
                                <div className="wlp-node-action">FOCUS ON GROWTH</div>
                            </div>

                            {/* Node 2: We Alll (Center) */}
                            <div className="wlp-node wlp-node-center">
                                <div className="wlp-center-inner">
                                    <div className="wlp-infinity-icon">∞</div>
                                    <div className="wlp-center-title">WE ALLL</div>
                                    <div className="wlp-center-subtitle">BEHIND THE SCENES<br/>DELIVERY ENGINE</div>
                                </div>
                            </div>

                            {/* Node 3: Client (3D Perspective Right) */}
                            <div className="wlp-node wlp-node-side wlp-node-right">
                                <div className="wlp-node-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                </div>
                                <div className="wlp-node-title">YOUR CLIENT</div>
                                <div className="wlp-node-subtitle">Happier Clients<br/>Longer Relationships</div>
                                <div className="wlp-node-action">YOUR SUCCESS</div>
                            </div>

                            {/* Script Text */}
                            <div className="wlp-script-text">
                                Stronger<br/>Together
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
