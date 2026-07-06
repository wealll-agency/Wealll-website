import React from 'react';
import './presentation.css';

// Import downloaded images
const inc1 = mediaUrl("assets/images/presentation/inc1.jpg");
const inc2 = mediaUrl("assets/images/presentation/inc2.jpg");
const inc3 = mediaUrl("assets/images/presentation/inc3.jpg");
const inc4 = mediaUrl("assets/images/presentation/inc4.jpg");
const inc5 = mediaUrl("assets/images/presentation/inc5.jpg");
const inc6 = mediaUrl("assets/images/presentation/inc6.jpg");
import { mediaUrl } from "../../../../../config/media";

const PresentationIncludes = () => {
    const panels = [
        {
            title: "Cover Slide",
            desc: "The crucial 3-second hook that sets the tone for your entire pitch.",
            img: inc1,
            num: "01"
        },
        {
            title: "Problem Definition",
            desc: "Articulating the core pain point clearly and urgently.",
            img: inc2,
            num: "02"
        },
        {
            title: "Solution Architecture",
            desc: "Presenting your product or service as the ultimate logical answer.",
            img: inc3,
            num: "03"
        },
        {
            title: "Market Feasibility",
            desc: "Data-driven insights proving the depth of your opportunity.",
            img: inc4,
            num: "04"
        },
        {
            title: "Competitive Edge",
            desc: "Why you beat the alternatives. Your undeniable moat.",
            img: inc5,
            num: "05"
        },
        {
            title: "Traction & Metrics",
            desc: "Hard evidence of growth, revenue, or user engagement.",
            img: inc6,
            num: "06"
        }
    ];

    return (
        <section className="presentation-section pt-0 pb-0" style={{ background: '#050505', overflow: 'hidden' }}>
            <div className="container-fluid p-0">
                <div className="cinematic-accordion-wrapper">
                    {/* Floating Title Overlay */}
                    <div className="cinematic-floating-title">
                        <h2>CORE <span style={{ color: '#fdb914' }}>DELIVERABLES</span></h2>
                        <p>A meticulously engineered narrative structure crafted for high impact.</p>
                    </div>

                    <div className="cinematic-accordion-container">
                        {panels.map((panel, index) => (
                            <div
                                className="cinematic-acc-panel"
                                key={index}
                            >
                                <img src={panel.img} alt={panel.title} className="cinematic-acc-img" loading="lazy" />
                                <div className="cinematic-acc-overlay"></div>

                                {/* Idle State Layout */}
                                <div className="cinematic-acc-idle">
                                    <div className="cinematic-idle-title">
                                        <h3>{panel.title}</h3>
                                    </div>
                                    <div className="cinematic-idle-num">{panel.num}</div>
                                </div>

                                {/* Active Showcase Layout */}
                                <div className="cinematic-acc-active">
                                    <div className="cinematic-active-content">
                                        <div className="cinematic-active-num">{panel.num}</div>
                                        <h3>{panel.title}</h3>
                                        <p>{panel.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PresentationIncludes;
