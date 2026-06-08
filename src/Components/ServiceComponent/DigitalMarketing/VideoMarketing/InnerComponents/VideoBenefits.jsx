import React from 'react';
import './video-marketing.css';

const VideoBenefits = () => {
    return (
        <section className="vm-section-dark">
            <div className="container">
                <div className="vm-header dark">
                    <h2>Why Video is <span className="highlight-gradient-orange">Essential</span></h2>
                    <p>In a digital world dominated by scrolling, video is the only format that effectively captures and holds attention.</p>
                </div>

                <div className="row">
                    {/* Benefit 1 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="vm-benefit-card">
                            <div className="vm-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                            <h3>Higher Engagement</h3>
                            <p>Video generates 1200% more shares than text and image combined. It encourages interaction and sharing.</p>
                            <div className="vm-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="vm-benefit-card">
                            <div className="vm-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z" />
                                </svg>
                            </div>
                            <h3>SEO Boost</h3>
                            <p>Search engines love video. Adding a video to your website can increase the chance of a front-page Google result by 53x.</p>
                            <div className="vm-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="vm-benefit-card">
                            <div className="vm-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                                </svg>
                            </div>
                            <h3>Brand Trust</h3>
                            <p>Video builds trust and credibility. Seeing a product or service in action eliminates doubt and increases confidence.</p>
                            <div className="vm-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="vm-benefit-card">
                            <div className="vm-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17z" />
                                </svg>
                            </div>
                            <h3>Higher Conversions</h3>
                            <p>Videos on landing pages can increase conversion rates by over 80%. It's the most powerful tool for persuasion.</p>
                            <div className="vm-learn-more">
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

export default VideoBenefits;
