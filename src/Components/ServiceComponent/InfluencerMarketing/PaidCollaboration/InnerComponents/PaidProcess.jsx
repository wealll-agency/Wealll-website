import React from 'react';
import { motion } from 'framer-motion';

const PaidProcess = () => {
    const processSteps = [
        {
            num: "01",
            title: "CAMPAIGN STRATEGY",
            heading: "Data-Driven Strategy Built for Performance",
            content: "WEALLL creates a structured campaign plan by defining:",
            list: [
                "Campaign goals (Branding / Leads / Sales)",
                "Target audience segmentation",
                "Platform selection (Instagram, YouTube, etc.)",
                "Content direction & messaging"
            ],
            takeaway: "👉 Ensuring every campaign is aligned with business objectives and ROI",
            insight: "No guesswork. Only strategy that converts.",
            color: "#007BFF" // WEALLL Blue
        },
        {
            num: "02",
            title: "CREATOR SELECTION",
            heading: "Performance-Focused Creator Selection",
            content: "We carefully identify and onboard creators based on:",
            list: [
                "Audience authenticity",
                "Engagement rate",
                "Niche relevance",
                "Past campaign performance"
            ],
            takeaway: "👉 We select creators who drive engagement — not just followers",
            insight: "We don’t pick influencers. We pick performers.",
            color: "#00C853" // WEALLL Green
        },
        {
            num: "03",
            title: "DEAL STRUCTURING",
            heading: "Smart Deal Structuring for Maximum Value",
            content: "Our team handles negotiations and collaboration structuring:",
            list: [
                "Pricing optimization",
                "Deliverables & timelines",
                "Clear campaign expectations",
                "Usage rights for content"
            ],
            takeaway: "👉 Ensuring you get maximum output for every investment",
            insight: "Every deal is designed for efficiency and performance.",
            color: "#FF9100" // WEALLL Orange
        },
        {
            num: "04",
            title: "CONTENT EXECUTION",
            heading: "Authentic Content That Drives Action",
            content: "We guide creators to produce content that:",
            list: [
                "Feels natural to their audience",
                "Aligns with your brand identity",
                "Is optimized for engagement and conversion",
                "Performs across platforms"
            ],
            takeaway: "👉 Result: Content that builds trust and drives results",
            insight: "Not ads — content people actually engage with.",
            color: "#FF3D00" // WEALLL Red
        },
        {
            num: "05",
            title: "PERFORMANCE TRACKING",
            heading: "Transparent ROI Insights",
            content: "WEALLL monitors campaign performance through:",
            list: [
                "Reach & impressions",
                "Engagement metrics",
                "Click-through rates",
                "Conversions & ROI"
            ],
            takeaway: "👉 Giving you clear insights into what’s working and scaling",
            insight: "If it doesn’t perform, we optimize it.",
            color: "#FFD600" // WEALLL Yellow
        }
    ];

    return (
        <section className="paid-process-section py-5">
            <div className="container">
                <div className="row justify-content-center text-center pb-5 mb-5">
                    <div className="col-lg-8">
                        <motion.div 
                            className="neo-badge-container mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="neo-glow-badge">THE ENGINE</span>
                        </motion.div>
                        <motion.h2 
                            className="text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-1px' }}
                        >
                            The WEALLL <span className="highlight-gradient">Performance Framework</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="parallax-stack-container pb-5">
                    {processSteps.map((step, index) => (
                        <div 
                            className="parallax-card-wrapper" 
                            key={index}
                            style={{ 
                                position: 'sticky', 
                                top: `calc(130px + ${index * 25}px)`, 
                                zIndex: index + 1,
                                marginBottom: index === processSteps.length - 1 ? '50px' : '200px'
                            }}
                        >
                            <div className="neo-bento-card" style={{ boxShadow: `0 30px 60px ${step.color}25, inset 0 0 0 1px rgba(255,255,255,0.05)`, borderColor: `${step.color}50` }}>
                                <div className="row g-0 h-100">
                                    {/* Left Panel: Glowing Info Canvas */}
                                    <div className="col-lg-5 neo-left-panel" style={{ background: `linear-gradient(145deg, ${step.color}25 0%, rgba(5,5,8,0.95) 100%)` }}>
                                        <div className="neo-panel-bg-glow" style={{ background: step.color }}></div>
                                        <div className="neo-left-content">
                                            <div>
                                                <div className="neo-number-cluster mb-4">
                                                    <span className="neo-number" style={{ color: step.color }}>{step.num}</span>
                                                    <span className="neo-title-sidebar">{step.title}</span>
                                                </div>
                                                <h3 className="neo-heading text-white">{step.heading}</h3>
                                                <p className="neo-desc mt-4">{step.content}</p>
                                            </div>
                                            
                                            <div className="neo-insight-block" style={{ borderTop: `1px solid ${step.color}30` }}>
                                                <div className="insight-icon-pill" style={{ background: `${step.color}20`, color: step.color }}>
                                                    <i className="fa-solid fa-bolt"></i>
                                                </div>
                                                <div className="insight-text-wrapper">
                                                    <span className="insight-label">CORE PHILOSOPHY</span>
                                                    <span className="insight-value text-white">{step.insight}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Right Panel: Structured Grid */}
                                    <div className="col-lg-7 neo-right-panel" style={{ background: `linear-gradient(145deg, rgba(8,10,15,0.98) 0%, ${step.color}08 100%)` }}>
                                        <h5 className="neo-list-header">STRATEGIC FOCUS</h5>
                                        <div className="row g-4 mt-1 neo-list-grid">
                                            {step.list.map((item, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <div className="neo-list-item">
                                                        <div className="neo-list-indicator" style={{ background: step.color, boxShadow: `0 0 10px ${step.color}` }}></div>
                                                        <span className="text-white">{item}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="neo-takeaway-box" style={{ background: `linear-gradient(90deg, ${step.color}10, transparent)`, borderLeftColor: step.color }}>
                                            {step.takeaway}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaidProcess;
