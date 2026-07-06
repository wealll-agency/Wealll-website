import React, { useEffect, useRef, useState } from 'react';
import './flagship-vision.css';
const dummyVideo = mediaUrl("assets/Video/WEALLL.mp4");
import BannerComponent from '../../../CommonComponents/BannerComponent';
import { mediaUrl } from "../../../../../config/media";

const FlagshipVision = () => {
    const sectionRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current.querySelectorAll('.fade-up');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    const visionPoints = [
        { title: "Platform origin & innovation story", icon: "🚀" },
        { title: "Founder or leadership vision", icon: "✨" },
        { title: "Brand mission & future roadmap", icon: "🗺️" },
        { title: "Industry problem & solution narrative", icon: "💡" },
        { title: "Strategic platform positioning", icon: "🎯" }
    ];

    return (
        <section className="flagship-vision-section" ref={sectionRef}>
            <BannerComponent />
            <div className="vision-bg-glow"></div>
            <div className="container position-relative z-1 exhib-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="vision-content fade-up">
                            <span className="vision-badge">Step 01 // Vision</span>
                            <h2 className="vision-title">
                                Platform Vision <br /><span className="text-gradient-purple">& Brand Narrative</span>
                            </h2>
                            <h4 className="vision-subtitle">Showcase the Vision Behind Your Platform</h4>
                            <p className="vision-desc">
                                Every successful platform begins with a strong vision. We create cinematic
                                narrative-driven videos that communicate your mission, innovation, and long-term
                                vision in a compelling story format.
                            </p>

                            <div className="vision-points-grid mt-4">
                                {visionPoints.map((point, index) => (
                                    <div className="vision-point fade-up" style={{ transitionDelay: `${index * 0.1}s` }} key={index}>
                                        <div className="point-icon">{point.icon}</div>
                                        <p>{point.title}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="vision-quote fade-up mt-5">
                                <p>"These videos help audiences understand not just what your platform does, but why it exists and how it creates value."</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="vision-visual-wrapper fade-up" style={{ transitionDelay: '0.3s' }}>
                            <div className="glass-card main-card">
                                <div className="card-header-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="cinematic-placeholder" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'inherit' }}>
                                    <video
                                        src={dummyVideo}
                                        autoPlay loop muted playsInline
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, zIndex: 0 }}
                                     preload="metadata"></video>
                                    <div className="play-button-glow" style={{ position: 'relative', zIndex: 1, cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                                        <div className="play-triangle"></div>
                                    </div>
                                    <div className="progress-bar-mockup" style={{ position: 'relative', zIndex: 1 }}>
                                        <div className="progress-fill"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card small-card float-anim-1">
                                <div className="mini-chart">
                                    <div className="bar b1"></div>
                                    <div className="bar b2"></div>
                                    <div className="bar b3"></div>
                                    <div className="bar b4"></div>
                                </div>
                                <span>Growth Trajectory</span>
                            </div>

                            <div className="glass-card small-card float-anim-2">
                                <div className="user-avatar-stack">
                                    <div className="avatar a1"></div>
                                    <div className="avatar a2"></div>
                                    <div className="avatar a3"></div>
                                </div>
                                <span>Global Reach</span>
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
                         preload="metadata"></video>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FlagshipVision;
