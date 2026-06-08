import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StrategyCard = ({ step, index }) => {
    return (
        <motion.div
            className="ig-strategy-stack-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <div className="ig-stack-num">{step.num}</div>
            <div className="ig-stack-content">
                <span className="ig-stack-tag">{step.tag}</span>
                <h3 className="ig-stack-title">{step.title}</h3>
                <p className="ig-stack-desc">{step.desc}</p>
            </div>
        </motion.div>
    );
};

const InstagramStrategy = () => {
    const steps = [
        {
            num: "01",
            tag: "Platform Strategy",
            title: "Audience-Centric Planning",
            desc: "WEALLL builds a tailored Instagram strategy based on brand goals, audience behaviour, and format selection. Every collaboration is optimized for maximum algorithm-friendly reach."
        },
        {
            num: "02",
            tag: "Creator Selection",
            title: "Data-Driven Creator Vetting",
            desc: "We identify creators based on audience alignment, engagement rate, and storytelling ability. Selecting influencers who deliver real engagement, not just follower counts."
        },
        {
            num: "03",
            tag: "Content Planning",
            title: "Strategic Format Selection",
            desc: "Reels for virality, Posts for positioning, and Stories for trust. Each piece is designed to capture attention and drive measurable growth."
        },
        {
            num: "04",
            tag: "Campaign Execution",
            title: "Seamless Management & Launch",
            desc: "Seamless management of timelines, creator coordination, and quality checks. Ensuring smooth execution with consistent brand presence."
        },
        {
            num: "05",
            tag: "Performance Insights",
            title: "Deep Tracking & Optimization",
            desc: "Deep tracking of reach, impressions, and engagement trends. Using data-driven insights to continuously optimize and scale your Instagram presence."
        }
    ];

    return (
        <section className="ig-strategy-section">
            <div className="ig-glow-left"></div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row mb-5 pb-4 justify-content-center">
                    <div className="col-lg-12 text-center">
                        <span className="ig-label" style={{ marginBottom: '20px' }}>// Strategic Engine</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
                            Our <span className="instagram-gradient-text">Growth Engine</span>
                        </h2>
                    </div>
                    <div className="col-lg-5 d-flex align-items-end text-center">
                        <p style={{ color: '#9090a0', fontSize: '1.2rem', lineHeight: 1.8, margin: 0 }}>
                            Scaling brands on Instagram requires a balance of viral creative and data-backed management.
                        </p>
                    </div>
                </div>

                <div className="ig-strategy-stack-container">
                    {steps.map((step, index) => (
                        <StrategyCard key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramStrategy;
