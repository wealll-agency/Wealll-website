import React from 'react';
import './email-overview.css';

const EmailMarketingOverview = ({ title }) => {
    return (
        <section className="email-overview-section">
            <div className="email-vis-bg-glow"></div>
            <div className="container position-relative">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10 col-xl-9">
                        <h2 className="email-vis-title animate-fade-up">
                            We <span className="highlight-gradient">Ignite Conversations</span> directly in the Inbox
                        </h2>
                        <div className="email-vis-separator animate-width"></div>
                        <div className="email-vis-content animate-fade-up delay-200">
                            <p>
                                As a leading <strong>{title} agency in Kolkata</strong>, <span className="brand-name">We Alll</span> crafts campaigns that don't just land in inboxes—they demand attention. We move beyond generic blasts to create personalized, high-value connections. Your audience doesn't just read; they <span className="highlight-text">click, convert, and come back for more.</span> Elevate your ROI with precision targeting and compelling storytelling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailMarketingOverview;
