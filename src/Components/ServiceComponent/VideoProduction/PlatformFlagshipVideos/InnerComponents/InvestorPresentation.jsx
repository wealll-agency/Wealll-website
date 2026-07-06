import React, { useEffect, useRef, useState } from 'react';
import './investor-presentation.css';
const dummyVideo = mediaUrl("assets/Video/Wealll_hero.mp4");
import { mediaUrl } from "../../../../../config/media";

const InvestorPresentation = () => {
    const sectionRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('inv-reveal-active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current.querySelectorAll('.inv-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const investorData = [
        { title: "Investor Pitch Videos", desc: "Concise, high-impact stories designed specifically for funding rounds.", metric: "$50M+", label: "Avg. Capital Raised" },
        { title: "Startup Demo Films", desc: "Polished demonstrations proving product-market fit and usability.", metric: "10x", label: "Engagement Boost" },
        { title: "Market Opportunity", desc: "Data-driven visuals explaining the TAM (Total Addressable Market).", metric: "TAM", label: "Visualized Clearly" }
    ];

    return (
        <section className="investor-presentation-section" ref={sectionRef}>
            {/* Abstract Backgrounds */}
            <div className="inv-bg-glow"></div>
            <div className="inv-bg-grid"></div>

            <div className="container position-relative z-1 pt-5 pb-5">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <span className="inv-step-badge inv-reveal">STEP 05 // AUTHORITY</span>
                        <h2 className="inv-main-title inv-reveal" style={{ transitionDelay: '0.1s' }}>
                            Investor & Authority <br />
                            <span className="inv-gold-text">Presentation Videos</span>
                        </h2>
                        <p className="inv-subtitle inv-reveal" style={{ transitionDelay: '0.2s' }}>
                            Present Your Platform with Credibility and Confidence. We create professional, data-centric videos designed to communicate vision, scalability, and market opportunity to top-tier stakeholders.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center mt-5">
                    {/* Left side: Premium Data Cards */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="inv-cards-wrapper">
                            {investorData.map((item, index) => (
                                <div
                                    className="inv-data-card inv-reveal"
                                    style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                                    key={index}
                                >
                                    <div className="inv-card-inner">
                                        <div className="inv-card-info">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="inv-card-metric">
                                            <span className="inv-metric-val">{item.metric}</span>
                                            <span className="inv-metric-lbl">{item.label}</span>
                                        </div>
                                    </div>
                                    <div className="inv-card-glow"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Futuristic Presentation Mockup */}
                    <div className="col-lg-6">
                        <div className="inv-dashboard-mockup inv-reveal" style={{ transitionDelay: '0.4s' }}>
                            <div className="inv-dash-header">
                                <div className="inv-dot r"></div>
                                <div className="inv-dot y"></div>
                                <div className="inv-dot g"></div>
                                <span className="inv-dash-title">Pitch_Deck_Master.mp4</span>
                            </div>

                            <div className="inv-dash-body">
                                <div className="inv-chart-bg">
                                    <div className="inv-bar b1"></div>
                                    <div className="inv-bar b2"></div>
                                    <div className="inv-bar b3"></div>
                                    <div className="inv-bar b4"></div>
                                    <div className="inv-bar b5"></div>
                                </div>
                                <div className="inv-video-placeholder" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'inherit' }}>
                                    <video
                                        src={dummyVideo}
                                        autoPlay loop muted playsInline
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, zIndex: 0 }}
                                     preload="metadata"></video>
                                    <div className="inv-play-btn" style={{ position: 'relative', zIndex: 1, cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <div className="inv-mock-text-overlay" style={{ position: 'relative', zIndex: 1 }}>
                                        <h5>CONFIDENTIAL PITCH</h5>
                                        <div className="inv-loading-line">
                                            <div className="inv-loading-progress"></div>
                                        </div>
                                    </div>
                                </div>
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

export default InvestorPresentation;
