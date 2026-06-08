import React, { useState, useRef, useEffect } from 'react';
import './branding.css';

const BrandApplicationRules = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPos(percentage);
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPos(percentage);
    };

    return (
        <section className="brand-section-padding position-relative fade-in-section bg-dark" ref={sectionRef}>
            <div className="container position-relative z-2">
                <div className="row mb-5 text-center">
                    <div className="col-12 mx-auto">
                        <p className="p5-accent-text text-uppercase mb-3">3. Brand Application Rules</p>
                        <h2 className="p5-section-title display-4 text-white mb-4">Precision & Restraint</h2>
                        <p className="p5-section-subtitle text-light opacity-50 fs-5 mx-auto" style={{ maxWidth: '600px' }}>
                            Slide to reveal the difference between unstructured clutter and pure architectural harmony. Clean, calculated, and intentional.
                        </p>
                    </div>
                </div>

                <div
                    className="p5-wipe-wrapper mx-auto mt-5"
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                >
                    {/* Background / DON'T State */}
                    <div className="p5-wipe-panel p5-state-dont">
                        <div className="p5-panel-content">
                            <div className="p5-badge-dont">INCORRECT</div>
                            <div className="p5-demo-box mess-1">
                                <h1 className="p5-messy-title">wealll.</h1>
                                <p className="p5-messy-p">The spacing is too tight.<br />And the alignment is off center.</p>
                            </div>
                            <div className="p5-annotation a-left">Erratic margins (12px / 18px)</div>
                            <div className="p5-annotation a-right">Conflicting focal points</div>
                        </div>
                    </div>

                    {/* Foreground / DO State (Masked) */}
                    <div
                        className="p5-wipe-panel p5-state-do"
                        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    >
                        <div className="p5-panel-content">
                            <div className="p5-badge-do">CORRECT</div>
                            <div className="p5-demo-box clean-1">
                                <h1 className="p5-clean-title">wealll.</h1>
                                <p className="p5-clean-p">Optimal negative space.<br />Perfect optical alignment.</p>
                            </div>
                            <div className="p5-rule r-left">
                                <span className="r-line"></span> Precise 24px gutter
                            </div>
                            <div className="p5-rule r-right">
                                Structured hierarchy <span className="r-line"></span>
                            </div>
                        </div>
                    </div>

                    {/* The Slider Handle */}
                    <div className="p5-wipe-handle" style={{ left: `${sliderPos}%` }}>
                        <div className="p5-wipe-line"></div>
                        <div className="p5-wipe-pill">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandApplicationRules;
