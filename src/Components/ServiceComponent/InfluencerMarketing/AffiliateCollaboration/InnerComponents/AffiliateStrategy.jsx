import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AffiliateStrategy = () => {
    const [activeTab, setActiveTab] = useState(0);

    const strategySteps = [
        {
            num: "01",
            title: "Performance Strategy",
            short: "Strategy",
            desc: "WEALLL builds a structured affiliate strategy by defining commission models (CPS, CPL), audience segments, and partner categories. Ensuring every collaboration aligns with your exact revenue goals.",
            metrics: ["Commission Setup", "Audience Targeting", "Partner Alignment", "Growth Planning"],
            insight: "Every partnership is built to generate returns, not just reach.",
            icon: "fa-chess-knight"
        },
        {
            num: "02",
            title: "Affiliate Sourcing",
            short: "Sourcing",
            desc: "We identify and onboard high-quality affiliates including niche creators, content publishers, and established networks. Focusing on partners who deliver qualified traffic and real conversions.",
            metrics: ["Niche Creators", "Content Bloggers", "Affiliate Networks", "Quality Vetting"],
            insight: "We don’t chase volume — we build high-performing partnerships.",
            icon: "fa-users-gear"
        },
        {
            num: "03",
            title: "Advanced Tracking Setup",
            short: "Campaign Setup",
            desc: "Our tech-focused team ensures complete system integration. From unique tracking links to comprehensive performance dashboards, providing full transparency into clicks, leads, and ROI.",
            metrics: ["Tracking Tools", "Unique Links", "Conversion Pixels", "Live Dashboards"],
            insight: "Every action is tracked. Every result is measurable.",
            icon: "fa-server"
        },
        {
            num: "04",
            title: "Continuous Optimisation",
            short: "Optimisation",
            desc: "We analyze affiliate performance data to optimize commission structures, refine promotional content, and heavily scale your top-performing partners to maximize ROI.",
            metrics: ["Data Analysis", "Commission Tweaks", "Content Refinement", "Partner Scaling"],
            insight: "We don’t just run campaigns — we improve them constantly.",
            icon: "fa-chart-pie"
        },
        {
            num: "05",
            title: "Scaling & Reporting",
            short: "Growth & Scale",
            desc: "We focus on scaling what works by expanding high-performing partnerships, increasing revenue channels, and providing detailed, data-driven performance reports.",
            metrics: ["Channel Expansion", "Revenue Scaling", "Custom Reporting", "Opportunity ID"],
            insight: "Growth is not random — it’s data-driven and scalable.",
            icon: "fa-rocket"
        }
    ];

    return (
        <section className="affiliate-strategy-section affiliate-dark-bg" style={{ padding: '100px 0' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>
                        Performance-Driven <span className="affiliate-gradient-text">Affiliate Strategy</span>
                    </h2>
                    <p style={{ color: '#a0a5b5', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Interact with our proprietary tracking UI to discover the WEALLL methodology.
                    </p>
                </div>

                <div className="affiliate-saas-container">
                    
                    {/* Left: SaaS Navigation Sidebar */}
                    <div className="aff-saas-sidebar">
                        <div style={{ padding: '0 40px', marginBottom: '30px', color: '#fff', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '1px' }}>
                            <i className="fa-solid fa-gauge-high" style={{ color: '#00e676', marginRight: '10px' }}></i>
                            SYSTEM.NAV
                        </div>
                        {strategySteps.map((step, index) => (
                            <div 
                                key={index}
                                className={`aff-nav-item ${activeTab === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveTab(index)}
                            >
                                <span style={{ fontFamily: 'monospace', opacity: 0.5, fontSize: '0.9rem' }}>{step.num}</span>
                                <span>{step.short}</span>
                                {activeTab === index && (
                                    <motion.div layoutId="navIndicator" style={{ marginLeft: 'auto', width: '8px', height: '8px', borderRadius: '50%', background: '#00e676', boxShadow: '0 0 10px #00e676' }} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: SaaS Dashboard Screen */}
                    <div className="aff-saas-screen">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="screen-header">
                                    <h3 className="screen-title">{strategySteps[activeTab].title}</h3>
                                    <div className="tech-badge" style={{ color: '#00b0ff' }}>
                                        STATUS // OPTIMIZED
                                    </div>
                                </div>
                                
                                <p className="screen-desc">{strategySteps[activeTab].desc}</p>
                                
                                <div className="screen-metrics-grid">
                                    {strategySteps[activeTab].metrics.map((metric, i) => (
                                        <div className="metric-box" key={i}>
                                            <i className="fa-solid fa-check-circle" style={{ color: '#00e676', fontSize: '1rem' }}></i>
                                            <span className="metric-text">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="insight-bar">
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#00e676', letterSpacing: '2px', fontFamily: 'monospace', marginBottom: '8px' }}>WEALLL INSIGHT</span>
                                    <strong style={{ color: '#fff', fontSize: '1.1rem' }}>{strategySteps[activeTab].insight}</strong>
                                </div>
                                
                                {/* Background Watermark Icon */}
                                <i className={`fa-solid ${strategySteps[activeTab].icon}`} style={{ position: 'absolute', right: '50px', bottom: '50px', fontSize: '15rem', color: 'rgba(255,255,255,0.02)', pointerEvents: 'none', zIndex: 0 }}></i>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AffiliateStrategy;
