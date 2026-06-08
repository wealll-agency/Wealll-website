import React, { useEffect, useRef, useState } from 'react';
import './branding.css';

const VisualIdentitySystem = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    // Scroll effect to trigger the layer explosion
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                // Calculate how much of the container is in the viewport (0 to 1)
                // 0 = top of container is at bottom of screen
                // 1 = top of container is at top of screen (or higher)
                let scrollProgress = (windowHeight - rect.top) / windowHeight;
                scrollProgress = Math.max(0, Math.min(1, scrollProgress)); // Clamp between 0 and 1
                setScrollY(scrollProgress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Multipliers for layer separation based on scroll percentage
    const explodeLevel = scrollY * 150; // Max 150px separation between layers

    return (
        <section className="brand-section-padding position-relative fade-in-section" ref={sectionRef} style={{ background: '#0a0a0a', overflow: 'hidden' }}>
            <div className="container position-relative z-2">
                <div className="row mb-5 text-center">
                    <div className="col-lg-8 mx-auto">
                        <p className="brand-accent-text fw-bold mb-2 tracking-wide">2. VISUAL IDENTITY SYSTEM</p>
                        <h2 className="brand-section-title">Architectural Deconstruction</h2>
                        <p className="brand-section-subtitle">
                            Visual systems are not flat. They are multi-dimensional stacks of logic, color, and geometry. Scroll to deconstruct.
                        </p>
                    </div>
                </div>

                <div
                    className="exploded-stack-container"
                    ref={containerRef}
                    style={{
                        perspective: '1500px',
                        height: '650px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '2rem'
                    }}
                >
                    <div
                        className="exploded-stack"
                        style={{
                            transform: `rotateX(60deg) rotateZ(-30deg) scale(${0.8 + (scrollY * 0.2)})`,
                            transformStyle: 'preserve-3d',
                            position: 'relative',
                            width: '400px',
                            height: '500px',
                            transition: 'transform 0.1s ease-out'
                        }}
                    >
                        {/* Shadow Base Layer */}
                        <div className="stack-layer shadow-layer" style={{ transform: `translateZ(-50px)`, opacity: 0.5 + (scrollY * 0.5) }}></div>

                        {/* Layer 1: Base Grid / Wireframe */}
                        <div
                            className="stack-layer wireframe-layer glass-panel"
                            style={{
                                transform: `translateZ(${explodeLevel * 0.5}px)`,
                                borderColor: 'rgba(255,255,255,0.1)'
                            }}
                        >
                            <div className="layer-label">L1: STRUCTURE</div>
                            <div className="wireframe-grid"></div>
                            <div className="tech-specs">
                                <div>GUTTER: 24PX</div>
                                <div>COLUMNS: 12</div>
                            </div>
                        </div>

                        {/* Layer 2: Typography Stack */}
                        <div
                            className="stack-layer typo-layer glass-panel"
                            style={{
                                transform: `translateZ(${explodeLevel * 1.5}px)`,
                                background: 'rgba(15, 16, 20, 0.7)'
                            }}
                        >
                            <div className="layer-label text-warning">L2: TYPOGRAPHY</div>
                            <div className="typo-massive">Aa</div>
                            <div className="typo-details">
                                <span className="fw-bold">SYNE PRIMARY</span>
                                <span className="small text-muted">H1 / 800 WGT / -0.02 EM</span>
                            </div>
                        </div>

                        {/* Layer 3: Color Volumes */}
                        <div
                            className="stack-layer color-layer glass-panel"
                            style={{
                                transform: `translateZ(${explodeLevel * 2.5}px)`,
                                display: 'flex', flexDirection: 'column', gap: '15px', padding: '30px'
                            }}
                        >
                            <div className="layer-label text-success">L3: CHROMATIC</div>
                            <div className="color-bar bg-brand-yellow float-glow">
                                <span>#FDB914</span>
                                <div className="color-hex-grid"></div>
                            </div>
                            <div className="color-bar bg-white text-dark float-glow" style={{ animationDelay: '0.2s' }}>
                                <span>#FFFFFF</span>
                            </div>
                            <div className="color-bar bg-dark border float-glow" style={{ animationDelay: '0.4s' }}>
                                <span>#1A1B1E</span>
                            </div>
                        </div>

                        {/* Layer 4: Primary Logo Construct */}
                        <div
                            className="stack-layer logo-layer glass-panel"
                            style={{
                                transform: `translateZ(${explodeLevel * 3.5}px)`,
                                background: 'linear-gradient(135deg, rgba(253, 185, 20, 0.1) 0%, rgba(0,0,0,0.8) 100%)',
                                borderColor: 'rgba(253, 185, 20, 0.4)'
                            }}
                        >
                            <div className="layer-label text-warning fw-bold">L4: BRAND MARK</div>
                            <div className="logo-3d-construct">
                                <span className="logo-letter">W</span>
                                <div className="logo-measurements-overlay">
                                    <div className="lm-horizontal"></div>
                                    <div className="lm-vertical"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisualIdentitySystem;
