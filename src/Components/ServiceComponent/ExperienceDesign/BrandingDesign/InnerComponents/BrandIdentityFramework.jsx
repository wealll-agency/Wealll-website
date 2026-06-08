import React, { useEffect, useRef, useState } from 'react';
import './branding.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const BrandIdentityFramework = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

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

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    // Advanced Neural Nodes
    const nodes = [
        { id: 1, title: 'Mission & Vision', desc: 'The Ultimate Purpose', x: 20, y: 30, delay: '0s', size: 1.2 },
        { id: 2, title: 'Positioning', desc: 'Market Space', x: 75, y: 25, delay: '0.2s', size: 1 },
        { id: 3, title: 'Personality', desc: 'Human Attributes', x: 80, y: 65, delay: '0.4s', size: 1.1 },
        { id: 4, title: 'Core Values', desc: 'Guiding Beliefs', x: 25, y: 75, delay: '0.6s', size: 0.9 },
        { id: 5, title: 'Target Audience', desc: 'Key Demographics', x: 50, y: 85, delay: '0.8s', size: 1 },
        { id: 6, title: 'Differentiation', desc: 'Unique Value', x: 45, y: 15, delay: '1s', size: 0.8 },
    ];

    return (
        <section className="brand-section-padding position-relative fade-in-section" ref={sectionRef} style={{ overflow: 'hidden', minHeight: '100vh', background: '#050505' }}>
            <BannerComponent />
            <div className="container position-relative z-2 h-100 d-flex flex-column brand_header">
                <div className="row mb-4 text-center flex-shrink-0" style={{ zIndex: 10 }}>
                    <div className="col-12">
                        <p className="brand-accent-text fw-bold mb-2 tracking-wide">1. BRAND IDENTITY FRAMEWORK</p>
                        <h2 className="brand-section-title text-glow-heavy">Neural Constellation</h2>
                        <p className="brand-section-subtitle mx-auto">
                            The interconnected mind of your brand. A living, breathing ecosystem of strategy responding dynamically to engagement.
                        </p>
                    </div>
                </div>

                <div
                    className="neural-canvas mt-4 flex-grow-1 position-relative"
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setMousePos({ x: 50, y: 50 })}
                    style={{ minHeight: '600px' }}
                >
                    {/* Background Grid */}
                    <div className="neural-grid-bg"></div>

                    {/* SVG Connector Lines */}
                    <svg className="neural-svg mt-0" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                        {nodes.map((node) => {
                            const distX = mousePos.x - node.x;
                            const distY = mousePos.y - node.y;
                            const dist = Math.sqrt(distX * distX + distY * distY);
                            const isClose = dist < 30; // 30% viewport distance threshold

                            // Magnetic pull calculations
                            const pullX = isClose ? (mousePos.x - node.x) * 0.15 : 0;
                            const pullY = isClose ? (mousePos.y - node.y) * 0.15 : 0;
                            const currentTargetX = node.x + pullX;
                            const currentTargetY = node.y + pullY;

                            // Core reacts slightly away from mouse
                            const corePullX = (50 - mousePos.x) * 0.05;
                            const corePullY = (50 - mousePos.y) * 0.05;
                            const coreX = 50 + corePullX;
                            const coreY = 50 + corePullY;

                            return (
                                <g key={`line-group-${node.id}`}>
                                    {/* Line to Core */}
                                    <line
                                        x1={`${coreX}%`}
                                        y1={`${coreY}%`}
                                        x2={`${currentTargetX}%`}
                                        y2={`${currentTargetY}%`}
                                        className={`neural-line ${isClose ? 'excited-line' : ''}`}
                                    />
                                    {/* Inter-node lines (connect to previous node for web effect) */}
                                    {node.id > 1 && (
                                        <line
                                            x1={`${nodes[node.id - 2].x + (dist < 30 ? (mousePos.x - nodes[node.id - 2].x) * 0.15 : 0)}%`}
                                            y1={`${nodes[node.id - 2].y + (dist < 30 ? (mousePos.y - nodes[node.id - 2].y) * 0.15 : 0)}%`}
                                            x2={`${currentTargetX}%`}
                                            y2={`${currentTargetY}%`}
                                            className="neural-line-faint"
                                        />
                                    )}
                                    {/* Connect last to first to close the outer loop */}
                                    {node.id === nodes.length && (
                                        <line
                                            x1={`${nodes[0].x + (Math.sqrt((mousePos.x - nodes[0].x) ** 2 + (mousePos.y - nodes[0].y) ** 2) < 30 ? (mousePos.x - nodes[0].x) * 0.15 : 0)}%`}
                                            y1={`${nodes[0].y + (Math.sqrt((mousePos.x - nodes[0].x) ** 2 + (mousePos.y - nodes[0].y) ** 2) < 30 ? (mousePos.y - nodes[0].y) * 0.15 : 0)}%`}
                                            x2={`${currentTargetX}%`}
                                            y2={`${currentTargetY}%`}
                                            className="neural-line-faint"
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </svg>

                    {/* Central Brain Node */}
                    <div
                        className="neural-core center-node"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${(50 - mousePos.x) * 0.5}px, ${(50 - mousePos.y) * 0.5}px)`
                        }}
                    >
                        <div className="core-energy"></div>
                        <div className="core-rings">
                            <i></i><i></i><i></i>
                        </div>
                        <span className="core-text">BRAND<br />CORE</span>
                    </div>

                    {/* Satellite Nodes */}
                    {nodes.map((node) => {
                        const distX = mousePos.x - node.x;
                        const distY = mousePos.y - node.y;
                        const dist = Math.sqrt(distX * distX + distY * distY);
                        const isClose = dist < 30;

                        // Calculate magnetic pull limits based on screen percentages
                        const pullX = isClose ? (mousePos.x - node.x) * 0.15 : 0;
                        const pullY = isClose ? (mousePos.y - node.y) * 0.15 : 0;

                        return (
                            <div
                                key={`node-${node.id}`}
                                className={`neural-node node-${node.id} ${isClose ? 'magnetic' : 'floating-node'}`}
                                style={{
                                    left: `calc(${node.x}% + ${pullX}%)`,
                                    top: `calc(${node.y}% + ${pullY}%)`,
                                    transform: `translate(-50%, -50%) scale(${node.size})`,
                                    animationDelay: node.delay,
                                    zIndex: isClose ? 20 : 5
                                }}
                            >
                                <div className="node-point"></div>
                                <div className="node-aura"></div>
                                <div className="node-info-box">
                                    <h5 className="mb-1">{node.title}</h5>
                                    <p className="mb-0 text-muted small">{node.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BrandIdentityFramework;
