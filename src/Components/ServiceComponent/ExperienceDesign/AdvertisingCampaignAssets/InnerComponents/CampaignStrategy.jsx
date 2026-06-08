import React from 'react';
import './campaign-strategy.css';
import strategyOrb from '../../../../../assets/images/strategy_core_orb_v2.png';

const CampaignStrategy = () => {
    const strategyPoints = [
        { title: "Target Audience Research" },
        { title: "Competitor Ad Analysis" },
        { title: "Campaign Theme Development" },
        { title: "Strong Visual Hook Creation" },
        { title: "Persuasive Copy Alignment" },
        { title: "Clear Call-to-Action Placement" },
        { title: "Attention-Grabbing Headlines" },
        { title: "Conversion-Focused Layout" },
        { title: "A/B Testing Creative Variations" },
        { title: "Performance-Oriented Design" }
    ];

    return (
        <section className="campaign-strategy-section">
            <div className="strategy-circuit-bg"></div>
            <div className="container">
                <div className="strategy-header text-center">
                    <div className="target-icon">
                        <div className="target-pulse"></div>
                        <div className="target-center"></div>
                    </div>
                    <h2 className="strategy-title">
                        Campaign Strategy <br />
                        <span className="text-yellow">& Creative Approach</span>
                    </h2>
                    <p className="strategy-desc mx-auto">
                        Great ad creatives are not random designs — they are built with strategy. We design advertising assets that are built to attract, engage, and convert.
                    </p>
                </div>

                <div className="strategy-nodes-wrapper">
                    {/* SVG Connector path */}
                    <svg className="strategy-connector" viewBox="0 0 1000 600" preserveAspectRatio="none">
                        <path className="path-glow" d="M 500,0 C 700,100 800,200 800,300 C 800,400 700,500 500,600 C 300,500 200,400 200,300 C 200,200 300,100 500,0 Z" />
                        <path className="path-line" d="M 500,0 C 700,100 800,200 800,300 C 800,400 700,500 500,600 C 300,500 200,400 200,300 C 200,200 300,100 500,0 Z" />
                    </svg>

                    <div className="strategy-nodes-grid">
                        {strategyPoints.map((point, index) => (
                            <div className={`strategy-node pos-${index + 1}`} key={index}>
                                <div className="node-content">
                                    <div className="node-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                                    <div className="node-text">{point.title}</div>
                                </div>
                                <div className="node-connection-dot"></div>
                            </div>
                        ))}
                    </div>

                    <div className="stunning-core-container">
                        <div className="energy-ring ring-1"></div>
                        <div className="energy-ring ring-2"></div>
                        <div className="energy-ring ring-3"></div>
                        <div className="core-image-wrapper">
                            <img src={strategyOrb} alt="Advertising Strategy Core" className="strategy-orb-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampaignStrategy;
