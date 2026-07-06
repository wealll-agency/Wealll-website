import React, { useEffect, useRef } from 'react';
import './success-story-hero.css';
const heroVideo = mediaUrl("assets/Video/Wealll_hero.mp4");
import BannerComponent from '../../../CommonComponents/BannerComponent';
import { mediaUrl } from "../../../../../config/media";

const SuccessStoryHero = () => {
    const heroRef = useRef(null);
    const parallaxRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ss-animate-hero');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!parallaxRef.current) return;
        const { clientX, clientY } = e;
        const xAxis = (window.innerWidth / 2 - clientX) / 30; // Rotate slower/faster
        const yAxis = (window.innerHeight / 2 - clientY) / 30;
        parallaxRef.current.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const handleMouseLeave = () => {
        if (!parallaxRef.current) return;
        parallaxRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        parallaxRef.current.style.transition = `transform 0.5s ease`;
    };

    const handleMouseEnter = () => {
        if (!parallaxRef.current) return;
        parallaxRef.current.style.transition = `none`;
    };

    return (
        <section
            className="ss-hero-section-v2"
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >

            <BannerComponent />

            {/* Background elements */}
            <div className="ss-hero-bg-grid"></div>
            <div className="ss-hero-glow ss-glow-left"></div>
            <div className="ss-hero-glow ss-glow-right"></div>

            <div className="container position-relative z-1 h-100 mt-5">
                <div className="row h-100 align-items-center">
                    {/* Left text content */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="ss-badge-v2 ss-reveal">
                            <span className="ss-pulse-dot"></span> PROVEN RESULTS & CASE STUDIES
                        </div>
                        <h1 className="ss-title-v2 ss-reveal" style={{ transitionDelay: '0.1s' }}>
                            Transforming Challenges into
                            <span className="ss-gradient-text-v2"> Measurable Growth</span>
                        </h1>
                        <p className="ss-desc-v2 ss-reveal" style={{ transitionDelay: '0.2s' }}>
                            Content is king, and we’re here to help you rule. Explore how our strategic video production
                            and digital marketing solutions have helped brands dominate their industries.
                        </p>
                        <div className="ss-actions-v2 ss-reveal" style={{ transitionDelay: '0.3s' }}>
                            <a href="#packages" className="ss-btn-primary-v2">
                                <span>View Packages</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            <a href="#case-studies" className="ss-btn-outline-v2">
                                <span>Explore Stories <i className="fa-solid fa-arrow-down ms-2"></i></span>
                            </a>
                        </div>
                    </div>

                    {/* Right 3D Visual */}
                    <div className="col-lg-6">
                        <div className="ss-3d-scene ss-reveal" style={{ transitionDelay: '0.4s' }}>
                            <div className="ss-parallax-container" ref={parallaxRef}>
                                {/* Main Centerpiece Panel */}
                                <div className="ss-main-panel">
                                    <div className="ss-panel-header">
                                        <div className="ss-dots"><span></span><span></span><span></span></div>
                                        <div className="ss-url">Growth Dashboard.io</div>
                                    </div>
                                    <div className="ss-panel-body">
                                        <video src={heroVideo} autoPlay loop muted playsInline className="ss-hero-vid" preload="metadata"></video>
                                        <div className="ss-vid-overlay">
                                            <div className="ss-play-btn"><i className="fa-solid fa-play"></i></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating UI Elements */}
                                <div className="ss-float-card ss-card-1">
                                    <div className="ss-card-icon">🚀</div>
                                    <div className="ss-card-data">
                                        <strong>+300%</strong>
                                        <span>ROI Generated</span>
                                    </div>
                                </div>

                                <div className="ss-float-card ss-card-2">
                                    <div className="ss-chart-mock">
                                        <div className="ss-bar" style={{ height: '30%' }}></div>
                                        <div className="ss-bar" style={{ height: '55%' }}></div>
                                        <div className="ss-bar" style={{ height: '80%' }}></div>
                                        <div className="ss-bar ss-bar-active" style={{ height: '100%' }}></div>
                                    </div>
                                    <div className="ss-card-data mt-2">
                                        <strong>Traffic Scale</strong>
                                    </div>
                                </div>

                                <div className="ss-orbit-ring"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ss-hero-bottom-fade-v2"></div>
        </section>
    );
};

export default SuccessStoryHero;
