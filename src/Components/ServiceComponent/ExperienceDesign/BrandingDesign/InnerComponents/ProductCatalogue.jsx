import React, { useEffect, useRef, useState } from 'react';
import './branding.css';

const ProductCatalogue = () => {
    const sectionRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);

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

    const handleMouseEnter = (id) => setHoveredCard(id);
    const handleMouseLeave = () => setHoveredCard(null);

    const isExpanded = (id) => hoveredCard === id;
    const isShrunk = (id) => hoveredCard !== null && hoveredCard !== id;

    return (
        <section className="brand-section-padding position-relative fade-in-section bg-dark" ref={sectionRef}>
            <div className="container position-relative z-2">
                <div className="row mb-5 text-center">
                    <div className="col-12 mx-auto">
                        <p className="p5-accent-text text-uppercase mb-3">8. Product Catalogue System</p>
                        <h2 className="p5-section-title display-4 text-white mb-4">Structured Inventory</h2>
                        <p className="p5-section-subtitle text-light opacity-50 fs-5 mx-auto" style={{ maxWidth: '600px' }}>
                            Hover to access deep technical specifications. A pure, asymmetrical bento architecture engineered for massive scale.
                        </p>
                    </div>
                </div>

                <div className="p5-bento-container mt-5">

                    {/* Top Row */}
                    <div className="p5-bento-row">
                        {/* Card 1 */}
                        <div
                            className={`p5-bento-card ${isExpanded(1) ? 'p5-expanded' : ''} ${isShrunk(1) ? 'p5-shrunk' : ''}`}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p5-bc-header">
                                <span className="p5-bc-id">01</span>
                                <h4 className="p5-bc-title">STATIONERY KIT</h4>
                            </div>
                            <div className="p5-bc-specs">
                                <div className="p5-bc-row"><span>Paper Yield</span><span className="text-white">300gsm Matte</span></div>
                                <div className="p5-bc-row"><span>Finishing</span><span className="text-white">Spot UV / Foil</span></div>
                                <div className="p5-bc-row"><span>Color Scale</span><span className="text-white">CMYK + Pantone</span></div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className={`p5-bento-card bg-accent ${isExpanded(2) ? 'p5-expanded' : ''} ${isShrunk(2) ? 'p5-shrunk' : ''}`}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p5-bc-header">
                                <span className="p5-bc-id text-dark">02</span>
                                <h4 className="p5-bc-title text-dark">DIGITAL UI KIT</h4>
                            </div>
                            <div className="p5-bc-specs specs-dark">
                                <div className="p5-bc-row border-dark"><span>Format</span><span className="text-dark fw-bold">Figma / Token</span></div>
                                <div className="p5-bc-row border-dark"><span>Scale</span><span className="text-dark fw-bold">Responsive 4K</span></div>
                                <div className="p5-bc-row border-dark"><span>Architecture</span><span className="text-dark fw-bold">Atomic Design</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="p5-bento-row">
                        {/* Card 3 */}
                        <div
                            className={`p5-bento-card ${isExpanded(3) ? 'p5-expanded' : ''} ${isShrunk(3) ? 'p5-shrunk' : ''}`}
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p5-bc-header">
                                <span className="p5-bc-id">03</span>
                                <h4 className="p5-bc-title">MERCHANDISING</h4>
                            </div>
                            <div className="p5-bc-specs">
                                <div className="p5-bc-row"><span>Material Core</span><span className="text-white">Organic Heavy Cotton</span></div>
                                <div className="p5-bc-row"><span>Print Method</span><span className="text-white">High-Density Screen</span></div>
                                <div className="p5-bc-row"><span>Sizing Matrix</span><span className="text-white">Unisex S - XXL</span></div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div
                            className={`p5-bento-card ${isExpanded(4) ? 'p5-expanded' : ''} ${isShrunk(4) ? 'p5-shrunk' : ''}`}
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p5-bc-header">
                                <span className="p5-bc-id">04</span>
                                <h4 className="p5-bc-title">MOTION BUMPERS</h4>
                            </div>
                            <div className="p5-bc-specs">
                                <div className="p5-bc-row"><span>Resolution</span><span className="text-white">4K ProRes 4444</span></div>
                                <div className="p5-bc-row"><span>Framerate</span><span className="text-white">60fps Alpha</span></div>
                                <div className="p5-bc-row"><span>Audio Target</span><span className="text-white">Lossless WAV (-14 LUFS)</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductCatalogue;
