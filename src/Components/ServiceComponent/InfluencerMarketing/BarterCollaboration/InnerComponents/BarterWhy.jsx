import React from 'react';
import { motion } from 'framer-motion';

const BarterWhy = () => {
    const whyPoints = [
        {
            num: "01",
            title: "Cost-effective marketing",
            desc: "Maximize reach without the massive spend of traditional ad campaigns. Direct product-for-post structures keep overheads low while scaling visibility.",
            icon: "💸",
            position: "top",
            color: "#ff0080"
        },
        {
            num: "02",
            title: "Authentic brand exposure",
            desc: "Creators integrate your products naturally into their daily lives, providing authentic endorsements that traditional advertising simply can't buy.",
            icon: "✨",
            position: "bottom",
            color: "#7928ca"
        },
        {
            num: "03",
            title: "Higher engagement than ads",
            desc: "Audiences interact far more with their favorite creators. This leads to deeper conversations and stronger community interest directly at the source.",
            icon: "🚀",
            position: "top",
            color: "#00f2fe"
        },
        {
            num: "04",
            title: "Builds social proof fast",
            desc: "Seeing multiple trusted voices use and recommend your product creates instant credibility and accelerates consumer trust within targeted niches.",
            icon: "📈",
            position: "bottom",
            color: "#ff4b4b"
        }
    ];

    return (
        <section className="barter-timeline-section py-5 my-5 position-relative">
            {/* Background Grid Elements */}
            <div className="barter-timeline-bg-glow"></div>
            
            <div className="container position-relative z-2">
                <div className="row justify-content-center text-center mb-5 pb-4">
                    <div className="col-lg-8">
                        <motion.span 
                            className="pkg-subtitle d-inline-block mb-2 text-uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ letterSpacing: '3px', color: '#ff0080', fontWeight: '800' }}
                        >
                            THE ADVANTAGE
                        </motion.span>
                        <motion.h2 
                            className="pkg-strategy-title text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: '3rem', fontWeight: '800' }}
                        >
                            Why Barter Influencer <span className="highlight-influencer">Marketing Works</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Horizontal Glowing Timeline Framework */}
                <div className="barter-timeline-framework mt-5 pt-5 pb-5">
                    {/* The glowing energy track */}
                    <div className="timeline-energy-track"></div>

                    <div className="row g-0 flex-nowrap position-relative w-100 timeline-nodes-row">
                        {whyPoints.map((point, index) => (
                            <div className="col timeline-col text-center" key={index}>
                                {/* Connecting Node */}
                                <div className="timeline-node" style={{ borderColor: point.color, boxShadow: `0 0 20px ${point.color}40` }}>
                                    <span className="node-number" style={{ color: point.color }}>{point.num}</span>
                                </div>

                                {/* Alternating Content Cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: point.position === 'top' ? -40 : 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                                    className={`timeline-card card-pos-${point.position}`}
                                    style={{ 
                                        borderTopColor: point.position === 'top' ? point.color : 'rgba(255,255,255,0.05)', 
                                        borderBottomColor: point.position === 'bottom' ? point.color : 'rgba(255,255,255,0.05)',
                                        boxShadow: `0 20px 40px ${point.color}15`
                                    }}
                                >
                                    <div className="timeline-card-icon" style={{ background: `linear-gradient(135deg, ${point.color}30, transparent)`, borderColor: point.color }}>
                                        {point.icon}
                                    </div>
                                    <h4 className="timeline-card-title">{point.title}</h4>
                                    <p className="timeline-card-desc">{point.desc}</p>
                                    
                                    <div className="timeline-card-glow" style={{ background: `radial-gradient(circle at ${point.position === 'top' ? 'top' : 'bottom'}, ${point.color}20, transparent)` }}></div>
                                </motion.div>

                                {/* Stem connector */}
                                <div className={`timeline-stem stem-pos-${point.position}`} style={{ background: `linear-gradient(${point.position === 'top' ? 'to bottom' : 'to top'}, ${point.color}80, transparent)` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BarterWhy;
