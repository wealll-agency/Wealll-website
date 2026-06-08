import React, { useEffect, useRef } from 'react';
import './branding.css';

const CompanyProfileStrategy = () => {
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

    const timelineItems = [
        { id: 1, title: 'About Us Framework', delay: '0.1s' },
        { id: 2, title: 'Vision & Mission Section', delay: '0.3s' },
        { id: 3, title: 'Core Strength Presentation', delay: '0.5s' },
        { id: 4, title: 'Industry Positioning', delay: '0.7s' },
        { id: 5, title: 'Leadership Overview', delay: '0.9s' }
    ];

    return (
        <section className="brand-section-padding position-relative fade-in-section" ref={sectionRef}>
            <div className="brand-bg-glow glow-top-right"></div>
            <div className="container">
                <div className="row g-5 align-items-center">

                    <div className="col-lg-5">
                        <p className="brand-accent-text fw-bold mb-2">13. Company Profile Strategy & Structuring</p>
                        <h2 className="brand-section-title">Strategic Company Positioning</h2>
                        <p className="brand-section-subtitle">
                            We structure your company profile to highlight strengths and build authority. Your profile becomes a strategic marketing tool.
                        </p>
                    </div>

                    <div className="col-lg-7">
                        <div className="storytelling-timeline-container">
                            <div className="timeline-line">
                                <div className="timeline-progress"></div>
                            </div>

                            <div className="timeline-items-wrapper">
                                {timelineItems.map((item) => (
                                    <div key={item.id} className="timeline-item" style={{ animationDelay: item.delay }}>
                                        <div className="tl-dot"></div>
                                        <div className="tl-content">
                                            <div className="tl-step">Section 0{item.id}</div>
                                            <h4>{item.title}</h4>
                                            <div className="tl-bar"></div>
                                            <div className="tl-bar short"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="brand-section-divider"></div>
        </section>
    );
};

export default CompanyProfileStrategy;
