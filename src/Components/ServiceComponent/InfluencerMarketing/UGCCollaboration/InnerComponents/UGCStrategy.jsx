import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UGCStrategy = () => {
    const [activeTab, setActiveTab] = useState(0);

    const strategySteps = [
        {
            num: "01",
            step: "Content Strategy",
            title: "Performance Blueprints",
            desc: "We analyze competitor creative, current social trends, and your target demographics to build a foolproof blueprint before a single video is shot.",
            icon: "fa-compass-drafting",
            color: "#ba68c8"
        },
        {
            num: "02",
            step: "Creator Sourcing",
            title: "Micro-Creator Vetting",
            desc: "Instead of expensive celebs, we source authentic daily users who perfectly match your customer persona and have a proven track record of engaging hooks.",
            icon: "fa-users-viewfinder",
            color: "#4fc3f7"
        },
        {
            num: "03",
            step: "Briefing & Scripts",
            title: "Conversion Psychology",
            desc: "Creators receive bulletproof shot lists, hook variations, and CTA guidelines to ensure the raw footage is designed to sell, not just look pretty.",
            icon: "fa-file-signature",
            color: "#ffb74d"
        },
        {
            num: "04",
            step: "Production & Edit",
            title: "Platform-Native Editing",
            desc: "We receive the raw footage and transform it in our studios with fast-paced cuts, native captions, trending audio, and high-retention editing techniques.",
            icon: "fa-photo-film",
            color: "#81c784"
        },
        {
            num: "05",
            step: "Utilization & ROI",
            title: "Ad Scale Testing",
            desc: "We deliver variant sets ready for A/B testing in your ad accounts. Test hooks, find the winning creative, and scale your spend with confidence.",
            icon: "fa-chart-line",
            color: "#f06292"
        }
    ];

    return (
        <section className="ugc-strategy-matrix" style={{ padding: '120px 0', background: '#020308', position: 'relative' }}>
            <div className="container">
                
                <div className="text-center mb-5">
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>Core <span className="ugc-gradient-text">Methodology</span></h2>
                    <p style={{ color: '#a0a5b5', fontSize: '1.2rem' }}>Hover to explore the WEALLL engineering process.</p>
                </div>

                <div className="row">
                    {/* Left: The Massive Hover Canvas */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="ugc-hover-list">
                            {strategySteps.map((step, index) => (
                                <div 
                                    key={index}
                                    onMouseEnter={() => setActiveTab(index)}
                                    className={`ugc-hover-item ${activeTab === index ? 'active' : ''}`}
                                >
                                    <span className="hover-num">{step.num}</span>
                                    <h3 className="hover-title">{step.step}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Sticky Glass Panel */}
                    <div className="col-lg-5 offset-lg-1">
                        <div style={{ position: 'sticky', top: '150px' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20, rotateX: 10 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    exit={{ opacity: 0, y: -20, rotateX: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="ugc-holographic-display"
                                >
                                    {/* Tech Corners */}
                                    <div className="holo-corner top-left"></div>
                                    <div className="holo-corner top-right"></div>
                                    <div className="holo-corner bottom-left"></div>
                                    <div className="holo-corner bottom-right"></div>

                                    {/* Ambient Background & Large Number */}
                                    <div className="holo-ambient-orb" style={{ background: `radial-gradient(circle at center, ${strategySteps[activeTab].color}25 0%, transparent 70%)` }}></div>
                                    <div className="holo-watermark-num">{strategySteps[activeTab].num}</div>

                                    <div className="holo-content-wrapper">
                                        <div className="holo-header">
                                            <div className="holo-icon-ring" style={{ color: strategySteps[activeTab].color }}>
                                                <div className="ring-inner"></div>
                                                <div className="ring-outer" style={{ borderTopColor: strategySteps[activeTab].color, borderBottomColor: strategySteps[activeTab].color }}></div>
                                                <i className={`fa-solid ${strategySteps[activeTab].icon}`}></i>
                                            </div>
                                            <div className="holo-meta">
                                                <span className="holo-id">SYS.ID // {strategySteps[activeTab].num}</span>
                                                <span className="holo-status" style={{ color: strategySteps[activeTab].color }}>[ ACTIVE ]</span>
                                            </div>
                                        </div>

                                        <h4 className="holo-title">{strategySteps[activeTab].title}</h4>
                                        <div className="holo-divider" style={{ background: `linear-gradient(90deg, ${strategySteps[activeTab].color}, transparent)` }}></div>
                                        <p className="holo-desc">{strategySteps[activeTab].desc}</p>
                                        
                                        <div className="holo-insight-module">
                                            <div className="insight-pulse" style={{ background: strategySteps[activeTab].color, boxShadow: `0 0 15px ${strategySteps[activeTab].color}` }}></div>
                                            <div className="insight-text">
                                                <div className="insight-label">WEALLL INSIGHT</div>
                                                <div className="insight-value">Engineered to drive direct action.</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UGCStrategy;
