import React from 'react';
import './brand-consistency.css';

const BrandConsistency = () => {
    const standards = [
        "Brand Color Palette Alignment",
        "Typography Consistency",
        "Logo Placement Standards",
        "Visual Hierarchy & Clean Layout",
        "Messaging Clarity",
        "Consistent Campaign Theme",
        "Professional & Premium Style"
    ];

    return (
        <section className="brand-consistency-section">
            <div className="brand-bg-glow"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="brand-identity-hub text-center">
                            <div className="hub-core">
                                <div className="hub-core-inner">
                                    <span className="hub-logo">AURA</span>
                                </div>
                                <div className="hub-radiant-ring ring-a"></div>
                                <div className="hub-radiant-ring ring-b"></div>
                                <div className="hub-radiant-ring ring-c"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="brand-content-area">
                            <div className="section-super-title">Visual Identity</div>
                            <h2 className="brand-title">
                                Brand Consistency & <br />
                                <span className="text-yellow">Visual Identity</span>
                            </h2>
                            <p className="brand-intro">
                                Consistency builds trust. Every advertising asset we design follows a unified visual identity to ensure your ads won’t just look attractive — they will look professionally branded.
                            </p>

                            <div className="brand-standards-list">
                                {standards.map((std, i) => (
                                    <div className="standard-item" key={i} style={{ '--i': i }}>
                                        <div className="std-icon">
                                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div className="std-text">{std}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandConsistency;
