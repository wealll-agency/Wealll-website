import React from 'react';

const HowItWorksSection = () => {
    return (
        <section className="wlp-process-workflow-section" id="how-it-works">
            <div className="wlp-section-container">
                
                {/* 1. HOW IT WORKS TIMELINE */}
                <div className="wlp-hiw-block">
                    <div className="wlp-hiw-header">
                        <span className="wlp-badge-blue">A SIMPLE &amp; TRANSPARENT PROCESS</span>
                        <h2 className="wlp-hiw-title">How It Works</h2>
                    </div>

                    <div className="wlp-timeline-container">
                        <div className="wlp-timeline-line"></div>
                        <div className="wlp-timeline-steps">
                            
                            {/* Step 1 */}
                            <div className="wlp-timeline-step">
                                <div className="wlp-timeline-node-group">
                                    <span className="wlp-step-pill">01</span>
                                    <div className="wlp-timeline-circle-outer">
                                        <div className="wlp-timeline-circle-inner">
                                            {/* Chat / Brief Icon */}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                <line x1="8" y1="9" x2="16" y2="9" />
                                                <line x1="8" y1="13" x2="13" y2="13" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="wlp-timeline-step-title">Share Your Brief</h4>
                                <p className="wlp-timeline-step-desc">Tell us your requirements and goals.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="wlp-timeline-step">
                                <div className="wlp-timeline-node-group">
                                    <span className="wlp-step-pill">02</span>
                                    <div className="wlp-timeline-circle-outer">
                                        <div className="wlp-timeline-circle-inner">
                                            {/* Scope & Strategy Compass Icon */}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#ffffff" fillOpacity="0.4" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="wlp-timeline-step-title">Scope &amp; Strategy</h4>
                                <p className="wlp-timeline-step-desc">We plan the best approach for your project.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="wlp-timeline-step">
                                <div className="wlp-timeline-node-group">
                                    <span className="wlp-step-pill">03</span>
                                    <div className="wlp-timeline-circle-outer">
                                        <div className="wlp-timeline-circle-inner">
                                            {/* Dev / Code Brackets Icon */}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="16 18 22 12 16 6" />
                                                <polyline points="8 6 2 12 8 18" />
                                                <line x1="10" y1="20" x2="14" y2="4" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="wlp-timeline-step-title">We Build Behind<br />the Scenes</h4>
                                <p className="wlp-timeline-step-desc">Our team gets to work under your brand.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="wlp-timeline-step">
                                <div className="wlp-timeline-node-group">
                                    <span className="wlp-step-pill">04</span>
                                    <div className="wlp-timeline-circle-outer">
                                        <div className="wlp-timeline-circle-inner">
                                            {/* Review & Refine Cycle Icon */}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="wlp-timeline-step-title">Review &amp; Refine</h4>
                                <p className="wlp-timeline-step-desc">You review and share feedback.</p>
                            </div>

                            {/* Step 5 */}
                            <div className="wlp-timeline-step">
                                <div className="wlp-timeline-node-group">
                                    <span className="wlp-step-pill">05</span>
                                    <div className="wlp-timeline-circle-outer">
                                        <div className="wlp-timeline-circle-inner">
                                            {/* Deliver / Checkmark Icon */}
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="wlp-timeline-step-title">Deliver Under<br />Your Brand</h4>
                                <p className="wlp-timeline-step-desc">We hand it over, ready for your client.</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 2. WHY AGENCIES CHOOSE WE ALLL */}
                <div className="wlp-why-block">
                    <div className="wlp-split-layout">
                        
                        {/* Left Side */}
                        <div className="wlp-split-left">
                            <span className="wlp-badge-blue">WHY WE ALLL</span>
                            <h2 className="wlp-why-title">Why Agencies<br />Choose WE ALLL</h2>
                            <p className="wlp-why-desc">
                                We're more than a service provider — we're your growth partner. Our goal is to help you deliver exceptional results, grow your business and build lasting client relationships.
                            </p>
                            <div className="wlp-why-stronger">
                                <span className="wlp-why-stronger-text">Stronger<br />Together</span>
                                <svg className="wlp-why-stronger-arrow" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </div>
                        </div>

                        {/* Right Side (3 columns x 2 rows) */}
                        <div className="wlp-split-right">
                            <div className="wlp-why-grid">
                                
                                {/* Card 1: White-Label Confidentiality */}
                                <div className="wlp-why-card">
                                    <div className="wlp-why-icon-box purple">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="#7c3aed" fillOpacity="0.15" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            <circle cx="12" cy="16" r="1.5" fill="#7c3aed" />
                                        </svg>
                                    </div>
                                    <div className="wlp-why-content">
                                        <h5>White-Label Confidentiality</h5>
                                        <p>Your brand, your client, our support.</p>
                                    </div>
                                </div>

                                {/* Card 2: No Client Confusion */}
                                <div className="wlp-why-card">
                                    <div className="wlp-why-icon-box blue">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div className="wlp-why-content">
                                        <h5>No Client Confusion</h5>
                                        <p>We work invisibly behind your brand.</p>
                                    </div>
                                </div>

                                {/* Card 3: Quality You Can Trust */}
                                <div className="wlp-why-card">
                                    <div className="wlp-why-icon-box blue">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="3" fill="#2563eb" fillOpacity="0.2" />
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                        </svg>
                                    </div>
                                    <div className="wlp-why-content">
                                        <h5>Quality You Can Trust</h5>
                                        <p>Consistent, high-quality delivery.</p>
                                    </div>
                                </div>

                                {/* Card 4: Flexible Capacity */}
                                <div className="wlp-why-card">
                                    <div className="wlp-why-icon-box green">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                            <polyline points="17 6 23 6 23 12" />
                                        </svg>
                                    </div>
                                    <div className="wlp-why-content">
                                        <h5>Flexible Capacity</h5>
                                        <p>Scale your projects up or down anytime.</p>
                                    </div>
                                </div>

                                {/* Card 5: Transparent Updates */}
                                <div className="wlp-why-card">
                                    <div className="wlp-why-icon-box blue">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#2563eb" fillOpacity="0.1" />
                                            <line x1="8" y1="9" x2="16" y2="9" />
                                            <line x1="8" y1="13" x2="13" y2="13" />
                                        </svg>
                                    </div>
                                    <div className="wlp-why-content">
                                        <h5>Transparent Updates</h5>
                                        <p>Stay informed at every stage.</p>
                                    </div>
                                </div>

                                {/* Card 6: Long-Term Growth */}
                                <div className="wlp-why-card">
                                    <div className="wlp-why-icon-box green">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="20" x2="18" y2="10" />
                                            <line x1="12" y1="20" x2="12" y2="4" />
                                            <line x1="6" y1="20" x2="6" y2="14" />
                                            <path d="M3 16l6-6 4 4 8-8" strokeWidth="2.2" />
                                            <polyline points="17 6 21 6 21 10" />
                                        </svg>
                                    </div>
                                    <div className="wlp-why-content">
                                        <h5>Long-Term Growth</h5>
                                        <p>A partnership built for your future.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. CHOOSE THE RIGHT WAY TO WORK TOGETHER */}
                <div className="wlp-models-block">
                    <div className="wlp-split-layout align-center">
                        
                        {/* Left Side */}
                        <div className="wlp-split-left">
                            <span className="wlp-badge-blue">FLEXIBLE PARTNERSHIP MODELS</span>
                            <h2 className="wlp-models-title">Choose the Right<br />Way to Work Together</h2>
                        </div>

                        {/* Right Side (2 large cards) */}
                        <div className="wlp-split-right">
                            <div className="wlp-models-grid">
                                
                                {/* Model Card 1: Per-Project Partnership */}
                                <div className="wlp-model-box">
                                    <div className="wlp-model-box-header">
                                        <div className="wlp-model-box-icon doc-icon">
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#eff6ff" />
                                                <polyline points="14 2 14 8 20 8" />
                                                <line x1="9" y1="13" x2="15" y2="13" strokeWidth="2.5" />
                                                <line x1="9" y1="17" x2="15" y2="17" strokeWidth="2.5" />
                                            </svg>
                                        </div>
                                        <h4 className="wlp-model-box-title">Per-Project Partnership</h4>
                                    </div>

                                    <ul className="wlp-model-features-list">
                                        <li>
                                            <svg className="wlp-check-blue" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>Ideal for one-time or occasional projects</span>
                                        </li>
                                        <li>
                                            <svg className="wlp-check-blue" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>Fixed scope and timeline</span>
                                        </li>
                                        <li>
                                            <svg className="wlp-check-blue" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>High-quality delivery under your brand</span>
                                        </li>
                                        <li>
                                            <svg className="wlp-check-blue" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>Perfect for testing the partnership</span>
                                        </li>
                                    </ul>

                                    <a href="#start" className="wlp-model-btn blue-btn">
                                        Start with a Project
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Model Card 2: Ongoing Delivery Partner */}
                                <div className="wlp-model-box">
                                    <div className="wlp-model-box-header">
                                        <div className="wlp-model-box-icon infinity-icon">
                                            <span className="wlp-infinity-symbol">∞</span>
                                        </div>
                                        <h4 className="wlp-model-box-title">Ongoing Delivery Partner</h4>
                                    </div>

                                    <ul className="wlp-model-features-list">
                                        <li>
                                            <svg className="wlp-check-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>Dedicated support for regular work</span>
                                        </li>
                                        <li>
                                            <svg className="wlp-check-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>Flexible capacity as per your needs</span>
                                        </li>
                                        <li>
                                            <svg className="wlp-check-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>Consistent and long-term collaboration</span>
                                        </li>
                                        <li>
                                            <svg className="wlp-check-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>Scale your business without hiring in-house</span>
                                        </li>
                                    </ul>

                                    <a href="#start" className="wlp-model-btn black-btn">
                                        Build a Long-Term Partnership
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorksSection;
