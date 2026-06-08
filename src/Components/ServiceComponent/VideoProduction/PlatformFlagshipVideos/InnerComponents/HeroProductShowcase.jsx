import React, { useEffect, useRef, useState } from 'react';
import './hero-product-showcase.css';
import dummyVideo from '../../../../../assets/Video/Wealll_hero.mp4';

const HeroProductShowcase = () => {
    const sectionRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-showcase');
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const showcaseFeatures = [
        {
            title: "Dashboard Walkthroughs",
            desc: "Comprehensive guides to navigate and master your platform's main interface.",
            icon: "🖥️"
        },
        {
            title: "Core Feature Highlights",
            desc: "Spotlight the most powerful tools your platform offers to users.",
            icon: "⭐"
        },
        {
            title: "Workflow Demonstrations",
            desc: "Step-by-step visual breakdowns of complex platform processes.",
            icon: "🔄"
        },
        {
            title: "Interface Animations",
            desc: "Sleek motion graphics breathing life into static UI screens.",
            icon: "✨"
        },
        {
            title: "Capability Highlights",
            desc: "Data-driven visuals proving your platform's speed and reliability.",
            icon: "⚡"
        }
    ];

    // Helper to generate fake waveform bars (constant rendering)
    const renderWaveform = () => {
        const heights = [35, 65, 40, 80, 50, 75, 45, 90, 60, 30, 85, 55, 70, 40, 65, 35, 80, 50, 75, 45];
        return heights.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }}></span>
        ));
    };

    return (
        <section className="hps-dark-section" ref={sectionRef}>
            {/* Ambient Backgrounds */}
            <div className="hps-ambient-glows">
                <div className="hps-glow orb-1"></div>
                <div className="hps-glow orb-2"></div>
                <div className="hps-pixel-grid"></div>
            </div>

            <div className="container position-relative z-1">
                <div className="row align-items-center flex-row-reverse">

                    {/* Right Column: Visual Mockup */}
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="hps-visual-arena reveal-element" style={{ transitionDelay: '0.4s' }}>
                            {/* Glass Dashboard Mockup */}
                            <div className="hps-glass-dashboard">
                                {/* Header */}
                                <div className="hps-glass-header">
                                    <div className="hps-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="hps-search-bar"></div>
                                </div>

                                {/* Body */}
                                <div className="hps-glass-body" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <video
                                        src={dummyVideo}
                                        autoPlay loop muted playsInline
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, zIndex: 0, borderRadius: 'inherit' }}
                                    ></video>
                                    <div className="hps-sidebar" style={{ position: 'relative', zIndex: 1 }}>
                                        <span className="reveal-widget" style={{ transitionDelay: '0.6s' }}></span>
                                        <span className="reveal-widget" style={{ transitionDelay: '0.7s' }}></span>
                                        <span className="reveal-widget" style={{ transitionDelay: '0.8s' }}></span>
                                        <span className="reveal-widget" style={{ transitionDelay: '0.9s' }}></span>
                                    </div>

                                    <div className="hps-main-view" style={{ position: 'relative', zIndex: 1 }}>
                                        {/* Top Row Widgets */}
                                        <div className="hps-widget-row">
                                            <div className="hps-widget hps-w-chart reveal-widget" style={{ transitionDelay: '0.8s' }}>
                                                <div className="hps-chart-ring"></div>
                                                <div className="hps-chart-lines">
                                                    <span></span><span></span><span></span>
                                                </div>
                                            </div>
                                            <div className="hps-widget hps-w-stat reveal-widget" style={{ transitionDelay: '1s' }}>
                                                <div className="hps-stat-value">85%</div>
                                                <div className="hps-stat-label">Efficiency</div>
                                            </div>
                                        </div>

                                        {/* Bottom Large Widget */}
                                        <div className="hps-widget hps-w-large reveal-widget" style={{ transitionDelay: '1.2s' }}>
                                            <div className="hps-waveform">
                                                {renderWaveform()}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <div className="hps-play-overlay reveal-widget" style={{ transitionDelay: '1.5s', cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                                    <div className="hps-play-ripple"></div>
                                    <div className="hps-play-ripple r-2"></div>
                                    <div className="hps-play-btn">
                                        <div className="hps-play-triangle"></div>
                                    </div>
                                </div>

                                {/* Scanline Effect */}
                                <div className="hps-scanline"></div>
                            </div>

                            {/* Floating Badges */}
                            <div className="hps-float-badge hBadge-1 reveal-widget" style={{ transitionDelay: '1.3s' }}>
                                <span>✨</span> Platform Ready
                            </div>
                            <div className="hps-float-badge hBadge-2 reveal-widget" style={{ transitionDelay: '1.4s' }}>
                                <span>⚡</span> High Conversion
                            </div>
                        </div>
                    </div>

                    {/* Left Column: Text & Features */}
                    <div className="col-lg-5">
                        <div className="hps-content-wrapper">
                            <span className="hps-badge reveal-element">Step 02 // Product</span>

                            <h2 className="hps-title reveal-element" style={{ transitionDelay: '0.1s' }}>
                                Hero Product <br />
                                <span className="text-glow-yellow">Showcase Videos</span>
                            </h2>

                            <p className="hps-desc reveal-element" style={{ transitionDelay: '0.2s' }}>
                                Transform your interface into a cinematic experience. We design visually engaging product showcase videos that demonstrate functionality through high-end motion graphics and 3D data visualization.
                            </p>

                            <div className="hps-feature-list mt-5">
                                {showcaseFeatures.map((feature, index) => (
                                    <div
                                        className="hps-feature-item reveal-element"
                                        style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
                                        key={index}
                                    >
                                        <div className="hps-f-icon">{feature.icon}</div>
                                        <div className="hps-f-text">
                                            <h4>{feature.title}</h4>
                                            <p>{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Video Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 99999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div style={{ position: 'relative', width: '90%', maxWidth: '1000px' }}>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute', top: '-40px', right: '0',
                                background: 'transparent', border: 'none',
                                color: '#fff', fontSize: '30px', cursor: 'pointer'
                            }}
                        >&times;</button>
                        <video
                            src={dummyVideo}
                            controls autoPlay
                            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                        ></video>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroProductShowcase;
