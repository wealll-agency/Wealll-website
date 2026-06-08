import React from 'react';
import './seo-audit.css';

const SeoAudit = () => {
    return (
        <section className="seo-audit-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="seo-audit-content">
                            <span className="seo-audit-tag">Limited Time Offer</span>
                            <h2>Stop Guessing.<br /> Start <span style={{ color: '#fdb914' }}>Leading.</span></h2>
                            <p>Unlock your website's true potential. Get a comprehensive, no-obligation SEO audit detailing your site's health, errors, and growth opportunities.</p>
                            <button className="seo-cta-btn">Get Your Free 30-Point Audit</button>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="audit-visual-card">
                            <div className="audit-score-circle">
                                98
                            </div>
                            <ul className="audit-checklist">
                                <li>
                                    <div className="audit-check-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                    </div>
                                    Full Technical Analysis
                                </li>
                                <li>
                                    <div className="audit-check-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                    </div>
                                    Competitor Keyword Gap Spy
                                </li>
                                <li>
                                    <div className="audit-check-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                    </div>
                                    Backlink Profile Review
                                </li>
                                <li>
                                    <div className="audit-check-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                    </div>
                                    Actionable Growth Roadmap
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoAudit;
