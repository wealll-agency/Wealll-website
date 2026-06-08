import React from 'react';
import '../exhibition-videos.css';

const ExhibMarketingStrategy = () => {
    const integrations = [
        { icon: "bi-funnel", title: "Video Funnel Strategy" },
        { icon: "bi-bullseye", title: "Retargeting Ad Creatives" },
        { icon: "bi-layout-text-window-reverse", title: "Landing Page Integration" },
        { icon: "bi-youtube", title: "YouTube SEO Optimization" },
        { icon: "bi-megaphone", title: "Paid Ad Campaign Setup" },
        { icon: "bi-graph-up-arrow", title: "Performance Analytics" }
    ];

    return (
        <section className="exhib-section exhib-section-darker">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="exhib-badge">ROI & Analytics</span>
                    <h2 className="exhib-title">Convert Exhibition Exposure into <span>Measurable Results</span></h2>
                    <p className="exhib-desc mx-auto">
                        As a digital marketing company, we go beyond video production. We help you turn exhibition footage into performance-driven campaigns that contribute directly to lead generation and ROI.
                    </p>
                </div>

                {/* Hexagon Data Flow */}
                <div className="integration-hex-container">
                    {integrations.map((item, index) => (
                        <div className="hex-item" key={index}>
                            <i className={`bi ${item.icon} hex-icon`}></i>
                            <h4 className="hex-title">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExhibMarketingStrategy;
