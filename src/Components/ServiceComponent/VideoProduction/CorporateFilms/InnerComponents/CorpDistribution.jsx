import React from 'react';
import '../corporate-films.css';
import '../corporate-films-advanced.css';

const CorpDistribution = () => {
    const channels = [
        { name: "Website Integration", icon: "bi-globe", desc: "Embed high-retention video assets seamlessly into your corporate site." },
        { name: "YouTube Optimization", icon: "bi-youtube", color: "#ff0000", desc: "SEO-driven video ranking for long-term organic discovery." },
        { name: "LinkedIn Campaign", icon: "bi-linkedin", color: "#0077b5", desc: "B2B targeted advertising and organic corporate network spread." },
        { name: "Event Screening", icon: "bi-projector", desc: "High-resolution mastering for physical conventions and town halls." },
        { name: "Investor Presentation", icon: "bi-easel", desc: "Condensed impactful cuts designed specifically for pitch decks." },
        { name: "Social Media Shorts", icon: "bi-phone", desc: "Vertical optimized micro-content derived from your main film." }
    ];

    return (
        <section className="corp-section corp-section-darker overflow-hidden">
            <div className="container position-relative z-10">
                <div className="text-center mb-5">
                    <span className="corp-badge">Digital Growth</span>
                    <h2 className="corp-title">Amplify Your Film Across <span>Digital Channels</span></h2>
                    <p className="corp-desc mx-auto">
                        A great film needs a great audience. We transform your corporate documentary into a multi-platform digital asset ecosystem that guarantees maximum reach and ROI.
                    </p>
                </div>

                {/* Unique Holographic Cylinder Design */}
                <div className="distribution-hologram-container">
                    <div className="hologram-core">
                        <div className="core-glow"></div>
                        <div className="core-text">
                            <h4>Corporate<br /><span style={{ color: '#000' }}>Asset</span></h4>
                        </div>
                        {/* Connecting beams */}
                        <div className="beam beam-1"></div>
                        <div className="beam beam-2"></div>
                        <div className="beam beam-3"></div>
                        <div className="beam beam-4"></div>
                        <div className="beam beam-5"></div>
                        <div className="beam beam-6"></div>
                    </div>

                    <div className="hologram-orbit">
                        {channels.map((channel, index) => (
                            <div className={`orbit-node orbit-node-${index + 1}`} key={index}>
                                <div className="node-icon-wrapper" style={{ color: channel.color || '#fff' }}>
                                    <i className={`bi ${channel.icon}`}></i>
                                </div>
                                <div className="node-hover-card">
                                    <h5>{channel.name}</h5>
                                    <p>{channel.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorpDistribution;
