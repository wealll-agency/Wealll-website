import React, { useEffect, useRef, useState } from 'react';
import './branding.css';

const DigitalBrandAdaptation = () => {
    const sectionRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate mouse position relative to center of section (-1 to 1)
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setMousePos({ x, y });
    };

    return (
        <section
            className="brand-section-padding position-relative fade-in-section p6-dark-bg"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
        >
            <div className="container position-relative z-2">
                <div className="row mb-5 text-center">
                    <div className="col-lg-8 mx-auto">
                        <div className="p6-badge mb-3">6. Digital Brand Adaptation</div>
                        <h2 className="p6-title display-4 text-white mb-4">Responsive Ecosystem</h2>
                        <p className="p6-subtitle fs-5 mx-auto">
                            A unified identity system. Perfectly scaled and flawlessly adapted across every digital touchpoint, radiating with modern energy.
                        </p>
                    </div>
                </div>

                <div className="p6-device-cluster mt-5">

                    {/* The 3D Parallax Group */}
                    <div
                        className="p6-parallax-group"
                        style={{
                            transform: `rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg)`
                        }}
                    >
                        {/* Tablet (Back Left) */}
                        <div className="p6-glass-device p6-gd-tablet" style={{ transform: `translateZ(-50px) translateX(-180px) translateY(20px)` }}>
                            <div className="p6-gd-screen">
                                <div className="p6-ui-line w-75"></div>
                                <div className="p6-ui-line w-50 mt-2"></div>
                                <div className="p6-ui-box mt-4"></div>
                                <div className="p6-ui-box mt-2 opacity-50"></div>
                            </div>
                            <div className="p6-neon-edge"></div>
                        </div>

                        {/* Mobile (Front Right) */}
                        <div className="p6-glass-device p6-gd-mobile" style={{ transform: `translateZ(80px) translateX(220px) translateY(40px)` }}>
                            <div className="p6-gd-screen">
                                <div className="p6-ui-circle mb-4"></div>
                                <div className="p6-ui-line w-100 mb-2"></div>
                                <div className="p6-ui-line w-100 mb-2"></div>
                                <div className="p6-ui-line w-75"></div>
                            </div>
                            <div className="p6-neon-edge"></div>
                        </div>

                        {/* Desktop (Center) */}
                        <div className="p6-glass-device p6-gd-desktop" style={{ transform: `translateZ(20px)` }}>
                            <div className="p6-gd-screen d-flex flex-column">
                                <div className="p6-gd-nav d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-light border-opacity-10">
                                    <div className="p6-ui-line w-25 m-0 bg-accent"></div>
                                    <div className="d-flex gap-3">
                                        <div className="p6-ui-line m-0" style={{ width: '30px' }}></div>
                                        <div className="p6-ui-line m-0" style={{ width: '30px' }}></div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
                                    <h1 className="p6-gd-hero-text">wealll.</h1>
                                </div>
                            </div>
                            <div className="p6-neon-edge"></div>
                            {/* Stand base for desktop */}
                            <div className="p6-gd-stand"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default DigitalBrandAdaptation;
