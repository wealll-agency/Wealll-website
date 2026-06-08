import React from 'react';
import '../platform-explanatory.css';

const PlatformOptimization = () => {
    return (
        <section className="plat-section plat-section-darker">
            <div className="container position-relative z-10">
                <div className="text-center mb-5">
                    <span className="plat-badge">Funnel Integration</span>
                    <h2 className="plat-title">Platform Optimization & <span>Distribution</span></h2>
                    <p className="plat-desc mx-auto">
                        As a digital marketing company, we go beyond video production. We help you deploy and optimize your explanatory videos for performance to ensure they contribute to traffic, engagement, and conversions.
                    </p>
                </div>

                <div className="plat-network-container">
                    {/* Connecting lines */}
                    <div className="plat-net-line plat-line-1"></div>
                    <div className="plat-net-line plat-line-2"></div>
                    <div className="plat-net-line plat-line-3"></div>
                    <div className="plat-net-line plat-line-4"></div>
                    <div className="plat-net-line plat-line-5"></div>
                    <div className="plat-net-line plat-line-6"></div>

                    {/* Central Core */}
                    <div className="plat-net-core">
                        <h4>Platform<br />Explainer</h4>
                    </div>

                    {/* Orbiting Nodes */}
                    <div className="plat-net-node plat-node-1">
                        <i className="bi bi-youtube"></i>
                        <span>YouTube SEO Optimization</span>
                    </div>

                    <div className="plat-net-node plat-node-2">
                        <i className="bi bi-window"></i>
                        <span>Website Integration Strategy</span>
                    </div>

                    <div className="plat-net-node plat-node-3">
                        <i className="bi bi-envelope-paper"></i>
                        <span>Email Marketing Embedding</span>
                    </div>

                    <div className="plat-net-node plat-node-4">
                        <i className="bi bi-currency-dollar"></i>
                        <span>Paid Ad Version Adaptation</span>
                    </div>

                    <div className="plat-net-node plat-node-5">
                        <i className="bi bi-arrow-repeat"></i>
                        <span>Retargeting Custom Variations</span>
                    </div>

                    <div className="plat-net-node plat-node-6">
                        <i className="bi bi-graph-up-arrow"></i>
                        <span>Performance Tracking & Analytics</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformOptimization;
