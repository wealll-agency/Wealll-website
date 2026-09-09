import React from 'react';

const TargetAudienceSection = () => {
    return (
        <section className="wlp-audience-section">
            <div className="container">
                <div className="wlp-audience-header">
                    <span className="wlp-badge-blue">WHO WE PARTNER WITH</span>
                    <h2 className="wlp-audience-h2">Built for Forward-Thinking Businesses</h2>
                </div>

                <div className="row g-3">
                    {/* Card 1 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 d-flex">
                        <div className="wlp-audience-card">
                            <div className="wlp-audience-icon" style={{ color: '#2563eb' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 19 2 12l9-7v14z"/>
                                    <path d="M22 12c0-4.4-3.6-8-8-8v16c4.4 0 8-3.6 8-8z"/>
                                </svg>
                            </div>
                            <h4 className="wlp-audience-title">Digital Marketing Agencies</h4>
                            <p className="wlp-audience-p">Expand your offerings with expert support.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 d-flex">
                        <div className="wlp-audience-card">
                            <div className="wlp-audience-icon" style={{ color: '#7c3aed' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                    <line x1="8" y1="21" x2="16" y2="21"/>
                                    <line x1="12" y1="17" x2="12" y2="21"/>
                                </svg>
                            </div>
                            <h4 className="wlp-audience-title">Web Design Studios</h4>
                            <p className="wlp-audience-p">Get reliable development support for your creative vision.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 d-flex">
                        <div className="wlp-audience-card">
                            <div className="wlp-audience-icon" style={{ color: '#a855f7' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="13.5" cy="6.5" r=".5"/>
                                    <circle cx="17.5" cy="10.5" r=".5"/>
                                    <circle cx="8.5" cy="7.5" r=".5"/>
                                    <circle cx="6.5" cy="12.5" r=".5"/>
                                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.3-.1-.6-.3-.8l-.6-.8c-.2-.3-.3-.6-.3-1 0-1.1.9-2 2-2h1.6c2.8 0 5-2.2 5-5 0-4.4-4.5-8-10-8z"/>
                                </svg>
                            </div>
                            <h4 className="wlp-audience-title">Branding & Creative Agencies</h4>
                            <p className="wlp-audience-p">Complement your creative work with digital expertise.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 d-flex">
                        <div className="wlp-audience-card">
                            <div className="wlp-audience-icon" style={{ color: '#3b82f6' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <h4 className="wlp-audience-title">Freelancers & Consultants</h4>
                            <p className="wlp-audience-p">Take on more projects without hiring a full team.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 d-flex">
                        <div className="wlp-audience-card">
                            <div className="wlp-audience-icon" style={{ color: '#1d4ed8' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="3"/>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                                </svg>
                            </div>
                            <h4 className="wlp-audience-title">IT / Technology Firms</h4>
                            <p className="wlp-audience-p">Offshore development support for your clients.</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 d-flex">
                        <div className="wlp-audience-card">
                            <div className="wlp-audience-icon" style={{ color: '#ea580c' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="20" x2="18" y2="10"/>
                                    <line x1="12" y1="20" x2="12" y2="4"/>
                                    <line x1="6" y1="20" x2="6" y2="14"/>
                                    <polyline points="2 10 6 6 12 12 22 2"/>
                                </svg>
                            </div>
                            <h4 className="wlp-audience-title">Growing Agencies</h4>
                            <p className="wlp-audience-p">Scale faster with a trusted delivery partner.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;
