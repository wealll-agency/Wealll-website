import React, { useEffect, useRef } from 'react';
import './branding.css';

const BrandCommunicationGuidelines = () => {
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
                <div className="row g-5 align-items-center">
                    {/* Left side content */}
                    <div className="col-lg-5">
                        <p className="brand-accent-text fw-bold mb-2">4. Core Brand Communication Guidelines</p>
                        <h2 className="brand-section-title glow-underline">Define How Your Brand Speaks</h2>
                        <p className="brand-section-subtitle">
                            We establish structured communication standards for clarity and consistency. Your communication becomes strategic, not random.
                        </p>
                        <ul className="framework-list mt-4">
                            <li>Brand Voice & Tone Direction</li>
                            <li>Messaging Framework</li>
                            <li>Tagline & Positioning Language</li>
                            <li>Copywriting Style Guidelines</li>
                            <li>Emotional Brand Direction</li>
                        </ul>
                    </div>

                    {/* Right side Tone Sliders */}
                    <div className="col-lg-7">
                        <div className="brand-glass-panel">
                            <h4 className="mb-5 text-white">Voice & Tone Spectrum</h4>

                            <div className="spectrum-container mb-4">
                                <div className="spectrum-labels">
                                    <span>Formal</span>
                                    <span>Friendly</span>
                                </div>
                                <div className="spectrum-track">
                                    <div className="spectrum-fill" style={{ width: '65%' }}></div>
                                    <div className="spectrum-knob animate-knob-1" style={{ left: '65%' }}></div>
                                </div>
                            </div>

                            <div className="spectrum-container mb-4">
                                <div className="spectrum-labels">
                                    <span>Bold</span>
                                    <span>Elegant</span>
                                </div>
                                <div className="spectrum-track">
                                    <div className="spectrum-fill" style={{ width: '80%' }}></div>
                                    <div className="spectrum-knob animate-knob-2" style={{ left: '80%' }}></div>
                                </div>
                            </div>

                            <div className="spectrum-container">
                                <div className="spectrum-labels">
                                    <span>Corporate</span>
                                    <span>Conversational</span>
                                </div>
                                <div className="spectrum-track">
                                    <div className="spectrum-fill" style={{ width: '40%' }}></div>
                                    <div className="spectrum-knob animate-knob-3" style={{ left: '40%' }}></div>
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

export default BrandCommunicationGuidelines;
