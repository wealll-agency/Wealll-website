import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Importing the generated cinematic assets
import img1 from "../../../../../assets/images/barter_creator_discovery_1774353977479.png";
import img2 from "../../../../../assets/images/barter_collaboration_strategy_1774354035410.png";
import img3 from "../../../../../assets/images/barter_outreach_negotiation_1774354071770.png";
import img4 from "../../../../../assets/images/barter_content_execution_1774354120390.png";
import img5 from "../../../../../assets/images/barter_performance_tracking_1774354160375.png";

const BarterContent = () => {
    const observerRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.15,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("bt-in-view");
                }
            });
        }, observerOptions);

        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const setRef = (el, index) => {
        observerRefs.current[index] = el;
    };

    const strategyData = [
        {
            title: "Creator Discovery",
            desc: "We identify and shortlist influencers who align with your brand values, target audience, and content style. This ensures collaborations feel authentic and resonate naturally with the right community.",
            footer: "Identifying the right voice is 90% of a successful barter campaign.",
            img: img1
        },
        {
            title: "Collaboration Strategy",
            desc: "WEALLL designs a clear barter strategy by defining deliverables, content formats, and campaign goals. We ensure every collaboration is structured to maximize visibility and meaningful engagement.",
            footer: "Structured campaigns lead to predictable scaling results.",
            img: img2
        },
        {
            title: "Outreach & Negotiation",
            desc: "Our team manages influencer communication, pitching your brand effectively while negotiating mutually beneficial terms. This helps secure quality collaborations without compromising brand positioning.",
            footer: "Professional handling builds long-term creator relationships.",
            img: img3
        },
        {
            title: "Content Execution",
            desc: "We guide creators to produce authentic, high-quality content that integrates your product seamlessly into their storytelling. The focus is on creating relatable content that drives trust and interaction.",
            footer: "Authenticity is the currency of influencer marketing.",
            img: img4
        },
        {
            title: "Performance Tracking",
            desc: "WEALLL tracks campaign performance through reach, engagement, and audience response. These insights help measure effectiveness and refine future collaborations for better results.",
            footer: "Data-driven insights power the next cycle of growth.",
            img: img5
        }
    ];

    return (
        <section className="barter-strategy-section">
            <div className="container">
                <div className="barter-strategy-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The <span className="highlight-influencer">Barter Transformation</span> Process
                    </motion.h2>
                    <p>Our structured approach ensures your product reaches the right hands and creates the maximum impact through authentic storytelling.</p>
                </div>

                {strategyData.map((section, index) => (
                    <div
                        key={index}
                        className={`barter-zigzag-row row align-items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
                        ref={(el) => setRef(el, index)}
                    >
                        {/* Image Side */}
                        <div className="col-lg-6 mb-4 mb-lg-0 barter-image-column">
                            <div className="barter-image-wrapper">
                                <div className="barter-image-glow"></div>
                                <img
                                    src={section.img}
                                    alt={section.title}
                                />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="col-lg-6 barter-content-column">
                            <div className="barter-step-bg-number">0{index + 1}</div>
                            <h3 className="barter-step-title">{section.title}</h3>
                            <p className="barter-step-desc">{section.desc}</p>
                            <div className="barter-step-footer">
                                {section.footer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BarterContent;
