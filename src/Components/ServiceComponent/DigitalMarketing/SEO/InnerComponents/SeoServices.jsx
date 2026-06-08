import React from 'react';
import './seo-services.css';

const SeoServices = () => {
    return (
        <section className="seo-services-section">
            <div className="container">
                <div className="seo-services-header text-center">
                    <h2>Our SEO <span style={{ color: '#fdb914' }}>Expertise</span></h2>
                    <p>Comprehensive strategies tailored to your digital footprint.</p>
                </div>

                <div className="row">
                    {/* Service 1 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="seo-service-card">
                            <div className="seo-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                                </svg>
                            </div>
                            <h3>Technical SEO</h3>
                            <p>We optimize site speed, crawlability, and indexing to ensure search engines can read and rank your site without friction.</p>
                            <div className="seo-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="seo-service-card">
                            <div className="seo-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                            </div>
                            <h3>Content Strategy</h3>
                            <p>We craft high-value, keyword-rich content that satisfies user intent and establishes your brand as an industry authority.</p>
                            <div className="seo-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="seo-service-card">
                            <div className="seo-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <h3>Local SEO</h3>
                            <p>Dominate your neighborhood. We optimize your Google My Business and local citations to capture high-intent local traffic.</p>
                            <div className="seo-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="seo-service-card">
                            <div className="seo-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                </svg>
                            </div>
                            <h3>E-commerce SEO</h3>
                            <p>Turn browsers into buyers. We optimize product pages and category structures to maximize visibility and conversion rates.</p>
                            <div className="seo-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoServices;
