import React, { useEffect, useRef, useState } from 'react';
import './branding.css';

const DesignConsistencyGuidelines = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

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
            {/* Ambient Background Glow based on mouse */}
            <div
                className="p6-ambient-glow"
                style={{
                    transform: `translate(calc(-50% + ${mousePos.x * 100}px), calc(-50% + ${mousePos.y * 100}px))`
                }}
            ></div>

            <div className="container position-relative z-2">
                <div className="row mb-5 text-center">
                    <div className="col-lg-8 mx-auto">
                        <div className="p6-badge mb-3">5. Design Consistency Guidelines</div>
                        <h2 className="p6-title display-4 text-white mb-4">Token Matrix</h2>
                        <p className="p6-subtitle fs-5 mx-auto">
                            The molecular structure of your brand identity. Clean, modern, and mathematically coherent design tokens floating in synchronized harmony.
                        </p>
                    </div>
                </div>

                <div className={`p6-matrix-container mt-5 ${isVisible ? 'is-active' : ''}`}>
                    {/* Token Card 1: Colors */}
                    <div className="p6-token-card" style={{ transform: `translateZ(50px) rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg)` }}>
                        <div className="p6-card-glass">
                            <div className="p6-card-header">
                                <div className="p6-ch-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </div>
                                <span>COLOR TOKENS</span>
                            </div>
                            <div className="p6-color-slots">
                                <div className="p6-c-slot primary"></div>
                                <div className="p6-c-slot dark"></div>
                                <div className="p6-c-slot light"></div>
                            </div>
                            <div className="p6-card-footer">
                                <span>Primary: #FDB914</span>
                                <div><span className="p6-dot"></span> Active</div>
                            </div>
                        </div>
                    </div>

                    {/* Token Card 2: Typography */}
                    <div className="p6-token-card center-card" style={{ transform: `translateZ(80px) rotateY(${mousePos.x * 15}deg) rotateX(${mousePos.y * -15}deg)` }}>
                        <div className="p6-card-glass p6-accent-border">
                            <div className="p6-card-header text-accent">
                                <div className="p6-ch-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="4 7 4 4 20 4 20 7"></polyline>
                                        <line x1="9" y1="20" x2="15" y2="20"></line>
                                        <line x1="12" y1="4" x2="12" y2="20"></line>
                                    </svg>
                                </div>
                                <span>TYPOGRAPHY SYSTEM</span>
                            </div>
                            <div className="p6-typo-demo">
                                <div className="p6-td-row">
                                    <span className="p6-td-label">Display</span>
                                    <h1 className="p6-td-value syne">Aa</h1>
                                </div>
                                <div className="p6-td-row">
                                    <span className="p6-td-label">Body</span>
                                    <p className="p6-td-value inter">Syne / Inter</p>
                                </div>
                            </div>
                            <div className="p6-card-footer">
                                <span>Scale: Strict Modular</span>
                                <div><span className="p6-dot accent"></span> Synced</div>
                            </div>
                            {/* Glowing light sweep */}
                            <div className="p6-light-sweep"></div>
                        </div>
                    </div>

                    {/* Token Card 3: Spacing */}
                    <div className="p6-token-card" style={{ transform: `translateZ(60px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)` }}>
                        <div className="p6-card-glass">
                            <div className="p6-card-header">
                                <div className="p6-ch-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                    </svg>
                                </div>
                                <span>SPACING GRID</span>
                            </div>
                            <div className="p6-grid-demo">
                                <div className="p6-gd-box"></div>
                                <div className="p6-gd-box"></div>
                                <div className="p6-gd-box"></div>
                                <div className="p6-gd-box"></div>
                                <div className="p6-gd-box" style={{ gridColumn: 'span 2' }}></div>
                            </div>
                            <div className="p6-card-footer">
                                <span>Base Unit: 8px</span>
                                <div><span className="p6-dot"></span> Aligned</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default DesignConsistencyGuidelines;
