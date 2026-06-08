import React from 'react';
import './whatsapp-marketing.css';

const WhatsappBenefits = () => {
    return (
        <section className="whatsapp-section-dark">
            <div className="container">
                <div className="whatsapp-header dark">
                    <h2>Unlock the Power of <span className="highlight-gradient-green">Direct Connect</span></h2>
                    <p>Why WhatsApp is the ultimate channel for modern business growth and customer engagement.</p>
                </div>

                <div className="row">
                    {/* Benefit 1 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="wa-benefit-card">
                            <div className="wa-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                                </svg>
                            </div>
                            <h3>98% Open Rates</h3>
                            <p>Shatter the noise. WhatsApp messages get seen instantly, delivering open rates that email marketing can only dream of.</p>
                            <div className="wa-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="wa-benefit-card">
                            <div className="wa-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
                                </svg>
                            </div>
                            <h3>Instant Engagement</h3>
                            <p>Turn one-way alerts into two-way conversations. Resolve queries, confirm orders, and build trust in real-time.</p>
                            <div className="wa-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="wa-benefit-card">
                            <div className="wa-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                            <h3>Personalized Reach</h3>
                            <p>Send tailored offers and updates based on user behavior, creating a VIP experience for every customer.</p>
                            <div className="wa-learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="wa-benefit-card">
                            <div className="wa-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h2v5zm0 4h-2v-2h2v2z" />
                                </svg>
                            </div>
                            <h3>Automated Alerts</h3>
                            <p>Keep your customers in loop without lifting a finger. Send automated shipping updates, appointment reminders, and more.</p>
                            <div className="wa-learn-more">
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

export default WhatsappBenefits;
