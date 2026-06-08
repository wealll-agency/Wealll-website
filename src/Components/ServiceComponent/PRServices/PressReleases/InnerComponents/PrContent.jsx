import React from 'react';
import { motion } from 'framer-motion';
import './pr-content.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const PrContent = () => {
    const pipelineSteps = [
        {
            num: "01",
            title: "Strategic Blueprinting",
            desc: "We analyze your audience and decode the perfect angle to ensure your announcement demands journalistic attention.",
            icon: "🎯",
            align: "left"
        },
        {
            num: "02",
            title: "Editorial Storycrafting",
            desc: "Transforming corporate updates into compelling, media-ready narratives structured perfectly for newsroom consumption.",
            icon: "✍️",
            align: "right"
        },
        {
            num: "03",
            title: "Global Syndication",
            desc: "Direct injection into premium international wire services, ensuring your story reaches thousands of digital news terminals instantly.",
            icon: "🌍",
            align: "left"
        },
        {
            num: "04",
            title: "Targeted Pitching",
            desc: "Our PR specialists manually pitch your customized story to niche journalists, editors, and industry-specific influencers.",
            icon: "🎙️",
            align: "right"
        },
        {
            num: "05",
            title: "Multimedia Integration",
            desc: "Enhancing your release with high-resolution brand assets, video links, and interactive elements to drastically boost engagement rates.",
            icon: "🎥",
            align: "left"
        },
        {
            num: "06",
            title: "Impact Analytics",
            desc: "Comprehensive post-campaign reporting detailing exact publisher pickups, potential audience reach, and total media value generated.",
            icon: "📈",
            align: "right"
        }
    ];

    return (
        <section className="pr-cyber-section">
            <div className="pr-cyber-glow-bg"></div>

            <BannerComponent />

            <div className="container position-relative z-1">
                <div className="pr-cyber-header text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        The PR <span className="neon-text">Broadcast Matrix</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A synchronized high-frequency pipeline designed to shatter the noise and deliver your message directly to the global media apparatus.
                    </motion.p>
                </div>

                <div className="pr-timeline-container">
                    {/* The central glowing beam running down the page */}
                    <motion.div
                        className="pr-timeline-core"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        {/* A distinct glowing particle that runs down the beam forever */}
                        <div className="pr-core-particle"></div>
                    </motion.div>

                    {pipelineSteps.map((step, index) => (
                        <div className={`pr-timeline-row ${step.align === 'left' ? 'row-left' : 'row-right'}`} key={index}>

                            <motion.div
                                className="pr-timeline-content-wrapper"
                                initial={{ opacity: 0, x: step.align === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                            >
                                <div className="pr-glass-datacard">
                                    <div className="pr-datacard-edge"></div>
                                    <div className="pr-datacard-number">{step.num}</div>
                                    <div className="pr-datacard-inner">
                                        <div className="pr-datacard-icon">{step.icon}</div>
                                        <div className="pr-datacard-text">
                                            <h3>{step.title}</h3>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* The Radar Ping Node connecting the line */}
                            <motion.div
                                className="pr-timeline-node"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.4, delay: 0.1, type: "spring", bounce: 0.5 }}
                            >
                                <div className="pr-node-center"></div>
                                <div className="pr-node-radar"></div>
                            </motion.div>

                            {/* Horizontal connection line */}
                            <motion.div
                                className="pr-timeline-connector"
                                initial={{ width: 0 }}
                                whileInView={{ width: '10%' }} /* width is relative to container, CSS handles exact size */
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            ></motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrContent;
