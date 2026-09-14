import React from 'react';

const HeroSection = () => {
    return (
        <section className="wlp-hero-section">
            {/* Background Image */}
            <div className="wlp-bg-image-wrapper">
                <div className="wlp-bg-image"></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/></svg>
                                    </div>
                                    <div className="wlp-trust-text">
                                        <h4>Your Brand Stays Front</h4>
                                        <p>We work under your brand.</p>
                                    </div>
                                </div>
                                <div className="wlp-trust-item">
                                    <div className="wlp-trust-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/></svg>
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

                    {/* Right Column - Modern White-Label Delivery Architecture Hub */}
                    <div className="col-lg-6 wlp-right-col">
                        <div className="wlp-hub-wrapper">
                            {/* Ambient Glows */}
                            <div className="wlp-hub-glow wlp-hub-glow-primary"></div>
                            <div className="wlp-hub-glow wlp-hub-glow-secondary"></div>

                            <div className="wlp-hub-card">
                                {/* Hub Header Bar */}
                                <div className="wlp-hub-header">
                                    <div className="wlp-hub-live-badge">
                                        <span className="wlp-pulse-dot"></span>
                                        <span>LIVE DELIVERY PIPELINE</span>
                                    </div>
                                    <div className="wlp-hub-secure-badge">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <span>100% NDA Protected</span>
                                    </div>
                                </div>

                                {/* 3-Stage Connected Delivery Architecture */}
                                <div className="wlp-hub-flow">
                                    {/* Stage 1: Your Agency */}
                                    <div className="wlp-flow-node wlp-flow-agency">
                                        <div className="wlp-node-badge agency-badge">CLIENT OWNER</div>
                                        <div className="wlp-flow-icon-box agency-icon-box">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                            </svg>
                                        </div>
                                        <h3 className="wlp-flow-title">Your Agency</h3>
                                        <p className="wlp-flow-desc">Pitch, close deals & manage relationship</p>
                                        <div className="wlp-flow-pill agency-pill">100% Your Brand</div>
                                    </div>

                                    {/* Connection Line 1 */}
                                    <div className="wlp-flow-connector">
                                        <div className="wlp-connector-line">
                                            <span className="wlp-connector-pulse"></span>
                                        </div>
                                        <span className="wlp-connector-label">Brief & NDA</span>
                                    </div>

                                    {/* Stage 2: WE ALLL (Central Delivery Powerhouse) */}
                                    <div className="wlp-flow-node wlp-flow-centerpiece">
                                        <div className="wlp-centerpiece-glow"></div>
                                        <div className="wlp-node-badge center-badge">SILENT ENGINE</div>
                                        <div className="wlp-flow-icon-box center-icon-box">
                                            <span className="wlp-hub-infinity">∞</span>
                                        </div>
                                        <h3 className="wlp-flow-title center-title">WE ALLL</h3>
                                        <p className="wlp-flow-desc center-desc">Behind-the-scenes execution team</p>
                                        <div className="wlp-flow-pill center-pill">
                                            <span className="wlp-pill-dot"></span> Zero Client Contact
                                        </div>
                                    </div>

                                    {/* Connection Line 2 */}
                                    <div className="wlp-flow-connector">
                                        <div className="wlp-connector-line">
                                            <span className="wlp-connector-pulse pulse-delay"></span>
                                        </div>
                                        <span className="wlp-connector-label">Delivery</span>
                                    </div>

                                    {/* Stage 3: Your Client */}
                                    <div className="wlp-flow-node wlp-flow-client">
                                        <div className="wlp-node-badge client-badge">END CLIENT</div>
                                        <div className="wlp-flow-icon-box client-icon-box">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                        </div>
                                        <h3 className="wlp-flow-title">Your Client</h3>
                                        <p className="wlp-flow-desc">Enjoys premium quality & fast turnaround</p>
                                        <div className="wlp-flow-pill client-pill">5★ Satisfaction</div>
                                    </div>
                                </div>

                                {/* Capability Badges Grid */}
                                <div className="wlp-hub-capabilities">
                                    <div className="wlp-cap-pill">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                        <span>Web & App Dev</span>
                                    </div>
                                    <div className="wlp-cap-pill">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                                        <span>UI/UX Design</span>
                                    </div>
                                    <div className="wlp-cap-pill">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18"></path><path d="M18 9l-5 5-4-4-5 5"></path></svg>
                                        <span>SEO & Growth</span>
                                    </div>
                                    <div className="wlp-cap-pill">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                        <span>Paid Media</span>
                                    </div>
                                    <div className="wlp-cap-pill">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"></path></svg>
                                        <span>AI & Automation</span>
                                    </div>
                                </div>

                                {/* Bottom Guarantees Strip */}
                                <div className="wlp-hub-footer">
                                    <div className="wlp-footer-item">
                                        <span className="wlp-footer-dot"></span>
                                        <span>Zero WeAlll Branding Visible</span>
                                    </div>
                                    <div className="wlp-footer-item">
                                        <span className="wlp-footer-dot"></span>
                                        <span>Scale Capacity On Demand</span>
                                    </div>
                                    <div className="wlp-footer-item">
                                        <span className="wlp-footer-dot"></span>
                                        <span>Dedicated PM & QA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
