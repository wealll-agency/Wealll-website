import React, { useEffect, useRef } from 'react';
import './branding.css';

const CorporateStationery = () => {
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

                    <div className="col-lg-5">
                        <p className="brand-accent-text fw-bold mb-2">10. Corporate Stationery Design</p>
                        <h2 className="brand-section-title">Professional Brand Essentials</h2>
                        <p className="brand-section-subtitle">
                            We design cohesive corporate stationery aligned with your brand identity. Professional branding builds credibility.
                        </p>
                        <ul className="framework-list mt-4">
                            <li>Business Card Design</li>
                            <li>Letterhead Design</li>
                            <li>Envelope Design</li>
                            <li>Email Signature Templates</li>
                            <li>Invoice Templates</li>
                        </ul>
                    </div>

                    <div className="col-lg-7">
                        <div className="stationery-flat-lay">
                            {/* Letterhead */}
                            <div className="stat-item stat-letterhead">
                                <div className="lh-header">
                                    <div className="lh-logo">BRAND</div>
                                    <div className="lh-info"></div>
                                </div>
                                <div className="lh-body">
                                    <div className="lh-line w-75"></div>
                                    <div className="lh-line w-100"></div>
                                    <div className="lh-line w-100"></div>
                                    <div className="lh-line w-50"></div>
                                </div>
                                <div className="lh-footer"></div>
                            </div>

                            {/* Envelope */}
                            <div className="stat-item stat-envelope">
                                <div className="env-flap"></div>
                                <div className="env-logo">BRAND</div>
                                <div className="env-stamp"></div>
                            </div>

                            {/* Business Cards */}
                            <div className="stat-item stat-bizcard-front">
                                <div className="bc-logo">BRAND</div>
                            </div>
                            <div className="stat-item stat-bizcard-back">
                                <div className="bc-name">John Doe</div>
                                <div className="bc-title">CEO & Founder</div>
                                <div className="bc-contact mt-2">
                                    <div className="bc-line"></div>
                                    <div className="bc-line"></div>
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

export default CorporateStationery;
