import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="wlp-features-section">
            <div className="container">
                <div className="row g-4">
                    {/* Feature 1 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="wlp-feature-card">
                            <div className="wlp-feature-icon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <div className="wlp-feature-content">
                                <h4>Expand Without Hiring</h4>
                                <p>Grow your service portfolio without increasing your team.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="wlp-feature-card">
                            <div className="wlp-feature-icon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            </div>
                            <div className="wlp-feature-content">
                                <h4>Keep the Client Relationship</h4>
                                <p>You own the client. We work invisibly behind the scenes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="wlp-feature-card">
                            <div className="wlp-feature-icon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <div className="wlp-feature-content">
                                <h4>Deliver Under Your Brand</h4>
                                <p>All work is delivered under your name, not ours.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="wlp-feature-card">
                            <div className="wlp-feature-icon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="2 10 6 6 12 12 22 2"/></svg>
                            </div>
                            <div className="wlp-feature-content">
                                <h4>Scale On Demand</h4>
                                <p>Take on more projects whenever you're ready.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
