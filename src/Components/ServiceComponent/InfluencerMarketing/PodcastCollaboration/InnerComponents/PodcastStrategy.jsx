import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
    {
        title: "Host Resonance",
        desc: "We dissect host sentiment and audience psychographics. We find the exact acoustic environments where your specific target audience is already primed to listen and buy.",
        icon: "fa-magnifying-glass-chart"
    },
    {
        title: "Native Narrative",
        desc: "Moving beyond traditional ad-reads. We engineer 'Native Conversations' that seamlessly weave your product into the discussion, turning promotion into valuable organic storytelling.",
        icon: "fa-pen-nib"
    },
    {
        title: "High-Authority",
        desc: "Leveraging our global node-network to secure priority guest spots on elite, waitlisted podcasts. We partner directly with top-tier hosts for maximum impact and authority transfer.",
        icon: "fa-bullhorn"
    },
    {
        title: "Storytelling Prep",
        desc: "In-depth preparation matrix for your brand's guest speakers. We train leaders to capture high-impact, intensely shareable soundbites that dominate social feeds long after the episode airs.",
        icon: "fa-microphone-lines"
    },
    {
        title: "Omni-Channel",
        desc: "The true ROI engine. We transform a single one-hour audio episode into a full month of multi-platform cinematic content, leveraging AI transcription and strategic SEO syndication.",
        icon: "fa-chart-line"
    }
];

// Calculated positions for 5 nodes on the top half of a circle (0 to 180 degrees)
const ARCH_POSITIONS = [
    { x: '0%', y: '100%' },       // Left
    { x: '14.6%', y: '29.3%' },   // Top Left
    { x: '50%', y: '0%' },        // Top Center
    { x: '85.4%', y: '29.3%' },   // Top Right
    { x: '100%', y: '100%' }      // Right
];

const PodcastStrategy = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="acoustic-dial-section">
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                
                {/* Intro Title */}
                <div className="text-center mb-5 pb-5 custom-wave-header">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="live-badge-premium mx-auto mb-3"
                        style={{ display: 'inline-flex' }}
                    >
                        <div className="live-dot-pulse"></div>
                        <span style={{ letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 'bold' }}>PROJECT LIFECYCLE</span>
                    </motion.div>
                     <h2 className="wave-title-ultra">The Strategic <span className="gradient-text-purple">Podcast Hub</span></h2>
                     <p className="wave-lead-text mx-auto mt-4">
                        A seamless, 5-phase acoustic architecture designed to secure authority, dominate niches, and convert organic listeners into lifelong brand evangelists.
                    </p>
                </div>

                <div className="dial-hub-wrapper">
                    {/* The Radial Arch containing the Navigation Nodes */}
                    <div className="dial-arch-container">
                        <div className="dial-arch-line"></div>
                        
                        {phases.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div 
                                    key={index}
                                    className={`dial-node-raw ${isActive ? 'active' : ''}`}
                                    style={{
                                        left: ARCH_POSITIONS[index].x,
                                        top: ARCH_POSITIONS[index].y
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span className="raw-number">0{index + 1}</span>
                                    <span className="raw-title">{item.title}</span>
                                </div>
                            )
                        })}
                    </div>

                    {/* Massive Holographic Content Display in the Center */}
                    <div className="dial-content-display">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeIndex}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="dial-center-icon">
                                     <i className={`fa-solid ${phases[activeIndex].icon}`}></i>
                                </div>
                                <h3 className="dial-content-title">{phases[activeIndex].title}</h3>
                                <p className="dial-content-desc">{phases[activeIndex].desc}</p>
                                
                                <div className="dial-audio-pulse">
                                    {[...Array(12)].map((_, i) => (
                                        <div 
                                            key={i} 
                                            className="dial-pulse-bar" 
                                            style={{ animationDelay: `${i * 0.1}s` }}
                                        ></div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
            
            <div className="editorial-ambient-base"></div>
        </section>
    );
};

export default PodcastStrategy;
