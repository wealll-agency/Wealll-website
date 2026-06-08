import React, { useEffect, useRef, useState } from "react";
import "./ad-film-strategy.css";

const strategies = [
    {
        title: "Audience Research & Target Mapping",
        short: "Research",
        desc: "Understanding who is watching to tailor messages that resonate with their specific needs.",
        icon: "🎯"
    },
    {
        title: "Competitor Analysis",
        short: "Analysis",
        desc: "Evaluating the market landscape to position your ad film distinctly.",
        icon: "🔍"
    },
    {
        title: "Scriptwriting & Storyboarding",
        short: "Storytelling",
        desc: "Crafting narratives and visual blueprints that captivate from the first second.",
        icon: "📝"
    },
    {
        title: "Campaign Message Structuring",
        short: "Structuring",
        desc: "Designing the flow of information to ensure maximum retention and impact.",
        icon: "🧠"
    },
    {
        title: "Funnel-Based Video Strategy",
        short: "Funnel Match",
        desc: "Aligning the video's core message with the specific stage of your customer journey.",
        icon: "📉"
    },
    {
        title: "Emotional & Psychological Trigger Integration",
        short: "Psychology",
        desc: "Implementing subtle cues that drive viewers to engage and convert.",
        icon: "⚡"
    },
    {
        title: "Brand Positioning Alignment",
        short: "Positioning",
        desc: "Ensuring every frame echoes your overarching brand identity and promises.",
        icon: "🏆"
    }
];

const AdFilmStrategy = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Sequentially reveal items when section comes into view
                    strategies.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleItems(prev => [...new Set([...prev, index])]);
                        }, index * 400); // 400ms delay between each step
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="ad-film-strategy-section" ref={sectionRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center mb-5 element-reveal" style={{ animationDelay: '0.1s' }}>
                        <div className="promo-badge">🎬 3. Ad Film Strategy & Concept Development</div>
                        <h2 className="promo-main-title">
                            Marketing Strategy <br />
                            <span className="text-yellow-gradient">Behind Every Frame</span>
                        </h2>
                        <p className="promo-description">
                            Unlike traditional video production agencies, we integrate marketing intelligence into every ad film.
                        </p>
                    </div>
                </div>

                <div className="strategy-timeline-container">
                    {/* Central Connecting Line */}
                    <div className="timeline-connector-line">
                        <div className={`timeline-progress-bar`} style={{ height: `${(visibleItems.length / strategies.length) * 100}%` }}></div>
                    </div>

                    <div className="strategy-nodes-wrapper">
                        {strategies.map((strategy, index) => {
                            const isEven = index % 2 === 0;
                            const isVisible = visibleItems.includes(index);

                            return (
                                <div
                                    key={index}
                                    className={`strategy-node-row ${isVisible ? 'is-visible' : ''} ${isEven ? 'direction-left' : 'direction-right'}`}
                                >
                                    {/* Empty column for spacing */}
                                    <div className="strategy-space"></div>

                                    {/* Central Node */}
                                    <div className="strategy-center-point">
                                        <div className="node-pulse-ring"></div>
                                        <div className="node-icon">{strategy.icon}</div>
                                        <div className="node-short-label">{strategy.short}</div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="strategy-card-wrapper">
                                        <div className="strategy-content-card">
                                            <div className="card-hexagon-bg"></div>
                                            <div className="card-number">0{index + 1}</div>
                                            <h4>{strategy.title}</h4>
                                            <p>{strategy.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8 text-center">
                        <div className={`strategy-conclusion-box ${visibleItems.length > 0 ? 'is-visible' : ''}`}>
                            <div className="glow-border"></div>
                            <p>
                                We ensure your ad film supports <strong>lead generation</strong>, <strong>brand recall</strong>, and <strong>conversion</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdFilmStrategy;
