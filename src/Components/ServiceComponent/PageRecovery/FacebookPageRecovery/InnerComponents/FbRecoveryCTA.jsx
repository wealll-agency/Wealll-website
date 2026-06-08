import React from 'react';
import './fb-recovery-dark.css';

const FbRecoveryCTA = () => {
    return (
        <section className="fb-dark-bg fb-section-py-50 fb-section-pb-150">
            <div className="container">
                <div className="fb-cta-wrapper">
                    <span className="fb-section-label fb-label-accent">
                        EMERGENCY RESPONSE
                    </span>
                    <h2 className="fb-section-title-md" style={{ marginBottom: '20px' }}>
                        Don’t Let Your Business <br /> <span className="fb-gradient-text-danger">Stay Offline.</span>
                    </h2>
                    <p className="fb-subtext" style={{ maxWidth: '700px', margin: '0 auto 40px auto' }}>
                        Every day your page is down = lost customers, wasted ad spend, and damaged reputation. <strong style={{ color: '#fff' }}>Get your page back in days, not weeks.</strong>
                    </p>
                    <a href="#contact" className="fb-cta-btn">
                        Book Your Free Recovery Call Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FbRecoveryCTA;
