import React, { useEffect, useRef } from 'react';
import './marketing-integration.css';

const MarketingIntegration = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('mi-reveal-active');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = sectionRef.current.querySelectorAll('.mi-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const channels = [
        { name: "Website Hero Placement", icon: "fas fa-globe", color: "#3b82f6" },
        { name: "Landing Page Integration", icon: "fas fa-layer-group", color: "#8b5cf6" },
        { name: "YouTube Campaigns", icon: "fab fa-youtube", color: "#ef4444" },
        { name: "Social Snippets", icon: "fas fa-hashtag", color: "#10b981" }
    ];

    return (
        <section className="marketing-integration-section" ref={sectionRef}>
            {/* Ambient Backgrounds */}
            <div className="mi-ambient-glow left"></div>
            <div className="mi-ambient-glow right"></div>

            <div className="container position-relative z-1 pt-5 pb-5">
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <span className="mi-step-badge mi-reveal">STEP 06 // STRATEGY</span>
                        <h2 className="mi-main-title mi-reveal" style={{ transitionDelay: '0.1s' }}>
                            Marketing Campaign <span className="mi-neon-text">Integration</span>
                        </h2>
                        <h4 className="mi-subtitle mi-reveal" style={{ transitionDelay: '0.2s' }}>
                            Turn Your Flagship Video into a Marketing Asset
                        </h4>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <p className="mi-desc mi-reveal" style={{ transitionDelay: '0.3s' }}>
                                    As a digital marketing company, we ensure your flagship video doesn’t just look good, but
                                    performs. We integrate it into a comprehensive marketing strategy that acts as the core hub for brand
                                    awareness, user acquisition, and long-term lead generation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="mi-matrix-container mi-reveal" style={{ transitionDelay: '0.5s' }}>
                            {/* Central Hub Node */}
                            <div className="mi-hub-node">
                                <div className="mi-hub-pulse"></div>
                                <div className="mi-hub-content">
                                    <i className="fa-solid fa-clapperboard mi-hub-icon"></i>
                                    <h5>Flagship Asset</h5>
                                </div>
                            </div>

                            {/* The glowing lines connecting down */}
                            <div className="mi-connection-lines">
                                <div className="mi-vertical-beam"></div>
                                <div className="mi-horizontal-beam"></div>

                                <div className="mi-drop-beams">
                                    <div className="mi-drop-beam"></div>
                                    <div className="mi-drop-beam"></div>
                                    <div className="mi-drop-beam"></div>
                                    <div className="mi-drop-beam"></div>
                                </div>
                            </div>

                            {/* The Destination Nodes */}
                            <div className="mi-channels-grid">
                                {channels.map((channel, index) => (
                                    <div className="mi-channel-node" key={index} style={{ '--theme-color': channel.color }}>
                                        <div className="mi-node-glow"></div>
                                        <div className="mi-node-icon">
                                            <i className={channel.icon}></i>
                                        </div>
                                        <div className="mi-node-name">{channel.name}</div>
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

export default MarketingIntegration;
