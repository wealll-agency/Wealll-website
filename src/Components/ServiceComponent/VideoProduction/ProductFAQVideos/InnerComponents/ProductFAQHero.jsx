import React, { useEffect, useRef } from 'react';
import './product-faq-hero.css';
const heroVideo = mediaUrl("assets/Video/Wealll_hero.mp4");
import BannerComponent from '../../../CommonComponents/BannerComponent';
import { mediaUrl } from "../../../../../config/media";

const ProductFAQHero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('pf-animate-hero');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
        };
    }, []);

    return (
        <section className="product-faq-hero-premium" ref={heroRef}>
            <BannerComponent />
            {/* Ambient Background */}
            <div className="pf-ambient-bg">
                <div className="pf-glow pf-glow-1"></div>
                <div className="pf-glow pf-glow-2"></div>
                <div className="pf-glow pf-glow-3"></div>
            </div>

            <div className="container position-relative z-1 h-100 exhib-container">
                <div className="row h-100 align-items-center">

                    {/* Left Typography Side */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="pf-text-content">
                            <div className="pf-premium-badge pf-reveal">
                                <span className="pf-dot"></span>
                                Video Production Excellence
                            </div>

                            <h1 className="pf-premium-title pf-reveal" style={{ transitionDelay: '0.2s' }}>
                                Product FAQ <br />
                                <span className="pf-gradient-text">Explainer Videos</span>
                            </h1>

                            <p className="pf-premium-desc pf-reveal" style={{ transitionDelay: '0.4s' }}>
                                Transform complex product features into stunning, easy-to-digest visual answers.
                                Build buyer confidence and massively reduce support tickets with our cinematic FAQ videos.
                            </p>

                            <div className="pf-premium-actions pf-reveal" style={{ transitionDelay: '0.6s' }}>
                                <a href="#packages" className="pf-btn-glow">
                                    <span>View Packages</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                                <div className="pf-play-preview">
                                    <div className="pf-play-icon">
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <span>Watch Reel</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right 3D Visual Side */}
                    <div className="col-lg-6">
                        <div className="pf-3d-wrapper pf-reveal" style={{ transitionDelay: '0.5s' }}>
                            <div className="pf-glass-frame">
                                <div className="pf-frame-header">
                                    <div className="pf-traffic-lights">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="pf-address-bar">FAQ.mp4</div>
                                </div>
                                <div className="pf-video-container">
                                    <video src={heroVideo} autoPlay loop muted playsInline className="pf-hero-video" preload="metadata"></video>

                                    {/* Play overlay button */}
                                    <div className="pf-video-play-layer">
                                        <div className="pf-ring-pulse"></div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Cards */}
                            <div className="pf-float-card card-top-right">
                                <div className="icon">💡</div>
                                <div className="info">
                                    <strong>+85%</strong>
                                    <span>Clearer Understanding</span>
                                </div>
                            </div>

                            <div className="pf-float-card card-bottom-left">
                                <div className="icon">⚡</div>
                                <div className="info">
                                    <strong>Instant</strong>
                                    <span>Query Resolution</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Gradient Fade to Content */}
            <div className="pf-bottom-fade"></div>
        </section>
    );
};

export default ProductFAQHero;
