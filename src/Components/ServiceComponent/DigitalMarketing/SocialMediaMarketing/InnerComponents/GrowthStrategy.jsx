import React from 'react';
import './growth-strategy.css';

const steps = [
    {
        step: "Step 1",
        title: "Business & Audience Research",
        desc: "We study your business niche, target audience, and customer behavior."
    },
    {
        step: "Step 2",
        title: "Competitor Analysis",
        desc: "We analyze your competitors to find what works and what gives you an advantage."
    },
    {
        step: "Step 3",
        title: "Content Plan & Calendar Creation",
        desc: "We create a weekly/monthly content plan for consistent posting."
    },
    {
        step: "Step 4",
        title: "Branding & Creative Strategy",
        desc: "We design content that matches your brand identity and attracts attention."
    },
    {
        step: "Step 5",
        title: "Engagement & Growth Optimization",
        desc: "We improve reach through engagement strategy, hashtags, and posting timing."
    },
    {
        step: "Step 6",
        title: "Ads Strategy & Retargeting (Optional)",
        desc: "We run paid ads to generate leads, sales, and brand awareness."
    },
    {
        step: "Step 7",
        title: "Analytics & Monthly Improvement",
        desc: "We track performance and improve strategy based on real data."
    }
];

const GrowthStrategy = () => {
    return (
        <section className="growth-strategy-section">
            <div className="gs-bg-field"></div>
            <div className="container">
                <div className="gs-header">
                    <h2>Our Social Media Growth Strategy</h2>
                    <p>We don’t just post content — we follow a proven strategy that helps businesses grow faster and build a strong digital presence.</p>
                </div>

                <div className="gs-timeline">
                    {/* Center Line */}
                    <div className="gs-line">
                        <div className="gs-line-glow"></div>
                    </div>

                    {steps.map((item, index) => (
                        <div className="gs-item" key={index}>
                            <div className="gs-content">
                                <div className="gs-step-num">{item.step}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="gs-dot"></div>
                        </div>
                    ))}
                </div>

                <div className="gs-optional">
                    "Our goal is to grow your social media with consistency, creativity, and conversion-focused marketing."
                </div>
            </div>
        </section>
    );
};

export default GrowthStrategy;
