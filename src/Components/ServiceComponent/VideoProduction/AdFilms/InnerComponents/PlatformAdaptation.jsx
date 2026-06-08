import React, { useState, useEffect, useRef } from "react";
import "./platform-adaptation.css";

const platformsData = [
    {
        id: "youtube",
        name: "YouTube Ads",
        icon: "▶",
        color: "#ff0000",
        desc: "TrueView, In-Stream, and Bumper Ad Versions crafted for maximum retention before the skip button appears.",
        visual: (
            <div className="orbit-visual youtube-visual">
                <div className="vid-player-mock">
                    <div className="vid-header"></div>
                    <div className="vid-timeline">
                        <div className="vid-progress" style={{ backgroundColor: "#ff0000", width: "35%" }}></div>
                    </div>
                    <div className="vid-controls">
                        <span className="ctrl-btn"></span>
                        <span className="ctrl-btn"></span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "instagram",
        name: "Instagram",
        icon: "📸",
        color: "#e1306c",
        desc: "Reels & Stories Optimization tailored for the 9:16 vertical scroll behavior and instant hooks.",
        visual: (
            <div className="orbit-visual instagram-visual">
                <div className="phone-mock up-float">
                    <div className="phone-notch"></div>
                    <div className="story-ring-huge"></div>
                    <div className="phone-bottom-nav">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "facebook",
        name: "Facebook Ads",
        icon: "FB",
        color: "#1877f2",
        desc: "Feed and in-stream adaptations engineered for sound-off viewing and strong sub-titling.",
        visual: (
            <div className="orbit-visual facebook-visual">
                <div className="feed-mock">
                    <div className="feed-header">
                        <div className="feed-avatar"></div>
                        <div className="feed-lines"><span></span><span></span></div>
                    </div>
                    <div className="feed-post-box">
                        <div className="play-icon-center" style={{ color: "#1877f2" }}>▶</div>
                    </div>
                    <div className="feed-footer">
                        <div className="reaction-bar"></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        icon: "in",
        color: "#0a66c2",
        desc: "B2B Promotional Versions emphasizing authority, professionalism, and concise value propositions.",
        visual: (
            <div className="orbit-visual linkedin-visual">
                <div className="card-mock b2b-mock">
                    <div className="b2b-cover"></div>
                    <div className="b2b-avatar"></div>
                    <div className="b2b-lines mt-4">
                        <span className="w-75"></span>
                        <span className="w-50"></span>
                    </div>
                    <div className="b2b-video-placeholder mt-3">
                        <div className="b2b-play"></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "formats",
        name: "Short & Long Form",
        icon: "⏱️",
        color: "#fdb914",
        desc: "From 15s teasers to 3m deep dives. Optimized storytelling for any length.",
        visual: (
            <div className="orbit-visual formats-visual">
                <div className="time-stacks">
                    <div className="stack short-stack">15s</div>
                    <div className="stack med-stack">60s</div>
                    <div className="stack long-stack">3m+</div>
                </div>
            </div>
        )
    },
    {
        id: "website",
        name: "Website Hero Video",
        icon: "🌐",
        color: "#fdb914",
        desc: "High-res, optimized, auto-playing background cuts for your homepage to drastically reduce bounce rates while keeping load times fast.",
        visual: (
            <div className="orbit-visual website-visual">
                <div className="browser-wide-mock">
                    <div className="bw-header">
                        <div className="bw-dots"><span></span><span></span><span></span></div>
                        <div className="bw-url"></div>
                    </div>
                    <div className="bw-hero-area">
                        <div className="hero-text-glow"></div>
                        <div className="hero-btn-mock"></div>
                    </div>
                </div>
            </div>
        )
    }
];

const PlatformAdaptation = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    sectionRef.current.classList.add("reveal-active");
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleTabChange = (index) => {
        if (index === activeTab) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveTab(index);
            setIsAnimating(false);
        }, 300);
    };

    const currentPlatform = platformsData[activeTab];

    return (
        <section className="interactive-platform-section" ref={sectionRef}>
            <div className="platform-ambient-glow" style={{ background: `radial-gradient(circle at center, ${currentPlatform.color}15, transparent 70%)` }}></div>

            <div className="container position-relative z-1">
                <div className="row justify-content-center mb-5 pb-2">
                    <div className="col-lg-8 text-center pt-4 fade-up-intro">
                        <div className="promo-badge">🎬 5. Platform-Specific Adaptation</div>
                        <h2 className="promo-main-title">
                            Optimized for Every <br />
                            <span className="text-yellow-gradient">Digital Platform</span>
                        </h2>
                        <p className="promo-description">
                            We ensure your ad films perform effectively across all platforms. Select a format below to see how we optimize for engagement and retention.
                        </p>
                    </div>
                </div>

                <div className="platform-showcase-wrapper">
                    <div className="row g-0 align-items-center">
                        {/* Sidebar Navigation */}
                        <div className="col-lg-4 col-md-12">
                            <div className="platform-sidebar">
                                {platformsData.map((plat, idx) => (
                                    <button
                                        key={plat.id}
                                        className={`platform-nav-btn ${activeTab === idx ? "active" : ""}`}
                                        onClick={() => handleTabChange(idx)}
                                        style={{ '--active-color': plat.color }}
                                    >
                                        <div className="p-nav-icon">{plat.icon}</div>
                                        <div className="p-nav-name">{plat.name}</div>
                                        {activeTab === idx && <div className="p-nav-indicator" style={{ backgroundColor: plat.color }}></div>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Stage */}
                        <div className="col-lg-8 col-md-12">
                            <div className="platform-stage">
                                <div className="stage-glass-panel">
                                    <div className={`stage-content-transition ${isAnimating ? 'fade-out' : 'fade-in'}`}>

                                        <div className="stage-header" style={{ borderBottomColor: `${currentPlatform.color}30` }}>
                                            <div className="stage-icon-large" style={{ color: currentPlatform.color, textShadow: `0 0 20px ${currentPlatform.color}50` }}>
                                                {currentPlatform.icon}
                                            </div>
                                            <div className="stage-title-area">
                                                <h3 style={{ color: currentPlatform.color }}>{currentPlatform.name}</h3>
                                                <p>{currentPlatform.desc}</p>
                                            </div>
                                        </div>

                                        <div className="stage-visual-area">
                                            {currentPlatform.visual}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlatformAdaptation;
