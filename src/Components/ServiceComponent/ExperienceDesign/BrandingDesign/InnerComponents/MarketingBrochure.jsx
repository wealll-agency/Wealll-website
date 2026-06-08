import React, { useEffect, useRef } from 'react';
import './branding.css';

const MarketingBrochure = () => {
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
            <div className="brand-bg-glow glow-bottom-left"></div>
            <div className="container">
                <div className="row g-5 align-items-center">

                    <div className="col-lg-5">
                        <p className="brand-accent-text fw-bold mb-2">9. Marketing Brochure Strategy</p>
                        <h2 className="brand-section-title">Brochures That Drive Conversions</h2>
                        <p className="brand-section-subtitle">
                            We integrate marketing strategy into brochure design. Your print assets support digital campaigns to maximize lead generation.
                        </p>
                        <ul className="framework-list mt-4">
                            <li>Funnel-Based Content Structure</li>
                            <li>Strategic CTA Placement</li>
                            <li>QR Code & Landing Page Integration</li>
                            <li>Campaign-Specific Brochure Design</li>
                            <li>Lead Generation Optimization</li>
                        </ul>
                    </div>

                    <div className="col-lg-7">
                        <div className="funnel-diagram-container">

                            {/* Graphic Flow Nodes */}
                            <div className="funnel-node fn-brochure">
                                <div className="fn-icon"><i className="bi bi-book"></i></div>
                                <div className="fn-label">Physical<br />Brochure</div>
                            </div>

                            <div className="funnel-arrow fa-1">
                                <div className="fa-line"></div>
                                <div className="fa-head"></div>
                            </div>

                            <div className="funnel-node fn-qr">
                                <div className="fn-icon"><i className="bi bi-qr-code-scan"></i></div>
                                <div className="fn-label">Actionable<br />QR Code</div>
                            </div>

                            <div className="funnel-arrow fa-2">
                                <div className="fa-line"></div>
                                <div className="fa-head"></div>
                            </div>

                            <div className="funnel-node fn-landing">
                                <div className="fn-icon"><i className="bi bi-layout-wtf"></i></div>
                                <div className="fn-label">Custom<br />Landing Page</div>
                            </div>

                            <div className="funnel-arrow fa-3">
                                <div className="fa-line"></div>
                                <div className="fa-head"></div>
                            </div>

                            <div className="funnel-node fn-lead">
                                <div className="fn-icon"><i className="bi bi-person-check"></i></div>
                                <div className="fn-label">Captured<br />Lead</div>
                            </div>

                            {/* Floating KPI Cards */}
                            <div className="kpi-card kpi-1">
                                <div className="kpi-value">+45%</div>
                                <div className="kpi-label">Scan Rate</div>
                            </div>
                            <div className="kpi-card kpi-2">
                                <div className="kpi-value">3x</div>
                                <div className="kpi-label">Conversion</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="brand-section-divider"></div>
        </section>
    );
};

export default MarketingBrochure;
