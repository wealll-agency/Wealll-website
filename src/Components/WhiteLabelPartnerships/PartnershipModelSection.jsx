import React from 'react';

const PartnershipModelSection = () => {
    return (
        <section className="wlp-model-section" id="partnership-model">
            <div className="container">
                {/* Section Header */}
                <div className="wlp-model-header text-center">
                    <span className="wlp-badge-blue">A PARTNERSHIP MODEL THAT WORKS</span>
                    <h2 className="wlp-model-h2">
                        You Win the Client.<br />
                        <span className="wlp-model-highlight">We Power the Delivery.</span>
                    </h2>
                    <p className="wlp-model-p">
                        You bring the opportunities. We bring the expertise. Together, we create exceptional digital experiences that help your clients grow — and your business scale effortlessly.
                    </p>
                </div>

                {/* 3-Pillar Architectural Pipeline */}
                <div className="wlp-model-pipeline">
                    {/* Card 1: Your Agency */}
                    <div className="wlp-model-card wlp-agency-card">
                        <div className="wlp-card-tag agency-tag">STAGE 01 • CLIENT FACING</div>
                        <div className="wlp-card-icon-box agency-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        </div>
                        <h3 className="wlp-card-title">Your Agency</h3>
                        <p className="wlp-card-desc">Pitch, close deals & manage client relationship</p>

                        <ul className="wlp-card-checklist">
                            <li>
                                <span className="wlp-check-icon agency-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Get clients & pitch opportunities</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon agency-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Direct client account ownership</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon agency-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Set vision, goals & project scope</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon agency-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Focus on growth & revenue scaling</span>
                            </li>
                        </ul>

                        <div className="wlp-card-pill agency-pill">100% Your Brand</div>
                    </div>

                    {/* Animated Flow Connector 1 */}
                    <div className="wlp-model-flow-connector">
                        <div className="wlp-flow-line">
                            <span className="wlp-flow-dot"></span>
                        </div>
                        <span className="wlp-flow-label">Brief & NDA ➔</span>
                    </div>

                    {/* Card 2: WE ALLL (The Centerpiece Powerhouse) */}
                    <div className="wlp-model-card wlp-centerpiece-card">
                        <div className="wlp-centerpiece-lightbar"></div>
                        <div className="wlp-card-tag center-tag">STAGE 02 • BEHIND THE SCENES</div>
                        <div className="wlp-card-icon-box center-icon">
                            <span className="wlp-model-infinity">∞</span>
                        </div>
                        <h3 className="wlp-card-title center-title">WE ALLL</h3>
                        <p className="wlp-card-desc center-desc">Silent execution powerhouse delivering under your brand</p>

                        <ul className="wlp-card-checklist center-checklist">
                            <li>
                                <span className="wlp-check-icon center-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Turnkey planning & agile execution</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon center-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Design, development & marketing</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon center-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Rigorous QA & maintain top quality</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon center-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Deliver on time, zero client contact</span>
                            </li>
                        </ul>

                        <div className="wlp-card-pill center-pill">
                            <span className="wlp-live-indicator"></span>
                            Active Delivery Engine
                        </div>
                    </div>

                    {/* Animated Flow Connector 2 */}
                    <div className="wlp-model-flow-connector">
                        <div className="wlp-flow-line">
                            <span className="wlp-flow-dot delay-dot"></span>
                        </div>
                        <span className="wlp-flow-label">➔ Delivery</span>
                    </div>

                    {/* Card 3: Your Client */}
                    <div className="wlp-model-card wlp-endclient-card">
                        <div className="wlp-card-tag client-tag">STAGE 03 • THE OUTCOME</div>
                        <div className="wlp-card-icon-box client-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 className="wlp-card-title">Your Client</h3>
                        <p className="wlp-card-desc">Delighted with exceptional quality & fast turnaround</p>

                        <ul className="wlp-card-checklist">
                            <li>
                                <span className="wlp-check-icon client-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Delighted clients & great ROI</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon client-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Premium, polished deliverables</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon client-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Long-term recurring relationship</span>
                            </li>
                            <li>
                                <span className="wlp-check-icon client-check">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                <span>Your brand authority gets stronger</span>
                            </li>
                        </ul>

                        <div className="wlp-card-pill client-pill">5★ Satisfaction</div>
                    </div>
                </div>

                {/* Synergy Bottom Strip */}
                <div className="wlp-model-bottom-strip">
                    <div className="wlp-bottom-strip-badge">
                        <span className="wlp-handwritten-accent">Better Businesses Together</span>
                    </div>
                    <div className="wlp-bottom-strip-text">
                        <strong>True White-Label Synergy:</strong> You own the client relationship. We do the heavy lifting in the background. Your agency scales effortlessly.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipModelSection;
