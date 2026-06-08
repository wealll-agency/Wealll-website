import React, { useEffect, useRef } from 'react';
import './branding.css';

const VisualPresentationDesign = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="brand-section-padding position-relative fade-in-section" ref={sectionRef}>
            <div className="container">
                <div className="row g-5 align-items-center flex-row-reverse">

                    <div className="col-lg-6">
                        <p className="brand-accent-text fw-bold mb-2">14. Visual Presentation & Design System</p>
                        <h2 className="brand-section-title">Premium Layout & Visual Storytelling</h2>
                        <p className="brand-section-subtitle">
                            We design company profiles with clean, modern aesthetics. Professional presentation enhances credibility.
                        </p>
                        <ul className="framework-list mt-4 staggered-reveal-list">
                            <li>Structured Layout Architecture</li>
                            <li>Data Visualization</li>
                            <li>Milestone Timeline</li>
                            <li>Project Showcase Section</li>
                            <li>Client Logo Wall</li>
                        </ul>
                    </div>

                    <div className="col-lg-6">
                        <div className="pdf-mockup-wrapper">
                            <div className="pdf-page bg-charcoal">
                                {/* Top Header */}
                                <div className="pdf-header">
                                    <div className="pdf-logo">BRAND</div>
                                    <div className="pdf-nav">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>

                                {/* Hero Section inside PDF */}
                                <div className="pdf-hero">
                                    <div className="ph-title">COMPANY<br />PROFILE</div>
                                    <div className="ph-image"></div>
                                </div>

                                {/* Data Visualization inside PDF */}
                                <div className="pdf-data-section">
                                    <div className="pds-title">Global Reach</div>
                                    <div className="pds-chart">
                                        <div className="chart-line-wrapper">
                                            <svg className="chart-line-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
                                                <path className="animated-path" d="M0 30 Q 25 10 50 20 T 100 0" fill="none" stroke="#fdb914" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pds-stats">
                                        <div className="stat-circle"><div className="inner-sc"></div></div>
                                        <div className="stat-circle"><div className="inner-sc half"></div></div>
                                    </div>
                                </div>

                                {/* Logo Wall inside PDF */}
                                <div className="pdf-logo-wall">
                                    <div className="plw-item"></div><div className="plw-item"></div>
                                    <div className="plw-item"></div><div className="plw-item"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="brand-section-divider"></div>
        </section>
    );
};

export default VisualPresentationDesign;
