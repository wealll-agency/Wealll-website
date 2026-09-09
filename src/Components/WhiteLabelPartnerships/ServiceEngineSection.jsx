import React from 'react';

const ServiceEngineSection = () => {
    return (
        <section className="wlp-service-section">
            <div className="container" style={{ maxWidth: '1300px' }}>
                
                {/* Header Row */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <span className="wlp-badge-blue" style={{ color: '#60a5fa', letterSpacing: '2px', fontSize: '11px', fontWeight: '800', fontFamily: 'Montserrat', textTransform: 'uppercase' }}>OUR WHITE-LABEL SERVICE ENGINE</span>
                        <h2 className="wlp-service-h2">Everything Your Clients Need.<br/>Delivered Under Your Brand.</h2>
                    </div>
                    <div className="col-lg-5 offset-lg-1 mt-4 mt-lg-0">
                        <p className="wlp-service-p">
                            From websites to marketing campaigns, WE ALLL delivers<br/>end-to-end digital solutions so you can offer more to your clients<br/>without limits.
                        </p>
                        <a href="#" className="wlp-service-link">Explore All Services <span style={{ marginLeft: '5px' }}>&rarr;</span></a>
                    </div>
                </div>

                {/* Cards Grid: 3 Columns */}
                <div className="row g-4">
                    
                    {/* Card 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="wlp-service-card">
                            <div className="wlp-service-card-header">
                                <div className="wlp-service-icon" style={{ color: '#38bdf8' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="14" rx="2" ry="2"/>
                                        <line x1="2" y1="8" x2="22" y2="8"/>
                                        <line x1="8" y1="22" x2="16" y2="22"/>
                                        <line x1="12" y1="18" x2="12" y2="22"/>
                                        <line x1="5" y1="6" x2="9" y2="6"/>
                                    </svg>
                                </div>
                                <h4>Web Design &<br/>Development</h4>
                                <div className="wlp-service-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 16 16 12 12 8"/>
                                        <line x1="8" y1="12" x2="16" y2="12"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="wlp-service-desc">Modern, responsive, high-performing<br/>websites tailored to your clients' goals.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="wlp-service-card">
                            <div className="wlp-service-card-header">
                                <div className="wlp-service-icon" style={{ color: '#10b981' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M5.4 12.3L8 18.5L10.5 11M14.5 11L13.5 14M18.6 12.3L16 18.5"/>
                                    </svg>
                                </div>
                                <h4>WordPress & ACF<br/>Development</h4>
                                <div className="wlp-service-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 16 16 12 12 8"/>
                                        <line x1="8" y1="12" x2="16" y2="12"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="wlp-service-desc">Custom, custom, flexible and easy-to-manage<br/>WordPress solutions.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="wlp-service-card">
                            <div className="wlp-service-card-header">
                                <div className="wlp-service-icon" style={{ color: '#8b5cf6' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="10" cy="10" r="7"/>
                                        <line x1="21" y1="21" x2="15" y2="15"/>
                                    </svg>
                                </div>
                                <h4>SEO & Local SEO</h4>
                                <div className="wlp-service-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 16 16 12 12 8"/>
                                        <line x1="8" y1="12" x2="16" y2="12"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="wlp-service-desc">Improve visibility, drive organic traffic<br/>and get measurable results.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="wlp-service-card">
                            <div className="wlp-service-card-header">
                                <div className="wlp-service-icon" style={{ color: '#38bdf8' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                        <circle cx="8.5" cy="8.5" r="1.5"/>
                                        <polyline points="21 15 16 10 5 21"/>
                                    </svg>
                                </div>
                                <h4>Social Media &<br/>Content</h4>
                                <div className="wlp-service-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 16 16 12 12 8"/>
                                        <line x1="8" y1="12" x2="16" y2="12"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="wlp-service-desc">Engaging content and strategy<br/>that builds stronger brands.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="wlp-service-card">
                            <div className="wlp-service-card-header">
                                <div className="wlp-service-icon" style={{ color: '#3b82f6' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="11 19 2 12 11 5 11 19"/>
                                        <path d="M22 12c0-4.4-3.6-8-8-8v16c4.4 0 8-3.6 8-8z"/>
                                    </svg>
                                </div>
                                <h4>Google & Meta Ads</h4>
                                <div className="wlp-service-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 16 16 12 12 8"/>
                                        <line x1="8" y1="12" x2="16" y2="12"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="wlp-service-desc">Performance-driven ad campaigns<br/>that deliver real growth.</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="wlp-service-card">
                            <div className="wlp-service-card-header">
                                <div className="wlp-service-icon" style={{ color: '#d946ef' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <h4>AI-Powered Marketing &<br/>Automation</h4>
                                <div className="wlp-service-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 16 16 12 12 8"/>
                                        <line x1="8" y1="12" x2="16" y2="12"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="wlp-service-desc">Stay ahead with AI-driven strategies<br/>and automation tools.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceEngineSection;
