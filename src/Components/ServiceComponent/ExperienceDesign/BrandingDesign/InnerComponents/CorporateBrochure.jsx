import React, { useEffect, useRef, useState } from 'react';
import './branding.css';

const CorporateBrochure = () => {
    const sectionRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

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

    const cards = [
        {
            id: 0,
            title: "THE REPORT",
            vol: "VOL. IV",
            color: "#fdb914",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 1,
            title: "BRAND MANIFESTO",
            vol: "CORE",
            color: "#38bdf8",
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "INVESTOR DECK",
            vol: "Q3 2026",
            color: "#4ade80",
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section className="brand-section-padding position-relative fade-in-section p6-dark-bg" ref={sectionRef}>
            <div className="container position-relative z-2">
                <div className="row mb-5 text-center">
                    <div className="col-lg-8 mx-auto">
                        <div className="p6-badge mb-3">7. Corporate Brochure Design</div>
                        <h2 className="p6-title display-4 text-white mb-4">Tactile Illumination</h2>
                        <p className="p6-subtitle fs-5 mx-auto">
                            High-end printed materials reimagined for the digital space. Hover to reveal the glowing core of our editorial designs.
                        </p>
                    </div>
                </div>

                <div className="p6-kinetic-showcase mt-5">
                    {cards.map((card, index) => {
                        const isHovered = hoveredIndex === index;
                        // Calculate offset from center (-1, 0, 1)
                        const offset = index - 1;

                        return (
                            <div
                                key={card.id}
                                className={`p6-kinetic-card ${isHovered ? 'p6-hovered' : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    // Complex cascading transform calculation based on hover state
                                    transform: isHovered
                                        ? `translateX(0px) translateZ(100px) rotateY(0deg)`
                                        : hoveredIndex !== null
                                            ? `translateX(${offset * 150}px) translateZ(-50px) rotateY(${offset * -15}deg) scale(0.9)`
                                            : `translateX(${offset * 80}px) translateZ(${Math.abs(offset) * -20}px) rotateY(${offset * -5}deg)`,
                                    zIndex: isHovered ? 10 : 3 - Math.abs(offset),
                                    boxShadow: isHovered ? `0 40px 80px rgba(0,0,0,0.8), 0 0 40px ${card.color}40` : `0 20px 40px rgba(0,0,0,0.6)`
                                }}
                            >
                                <div className="p6-kc-image" style={{ backgroundImage: `url(${card.img})` }}></div>
                                <div className="p6-kc-overlay"></div>

                                <div className="p6-kc-content">
                                    <div className="p6-kc-meta" style={{ color: card.color }}>{card.vol}</div>
                                    <h3 className="p6-kc-title">{card.title}</h3>

                                    <div className="p6-kc-action">
                                        <span className="p6-kc-line" style={{ background: card.color }}></span>
                                        <span>EXPLORE</span>
                                    </div>
                                </div>

                                {/* Interactive Glowing Ray */}
                                <div
                                    className="p6-glow-ray"
                                    style={{
                                        background: `linear-gradient(45deg, transparent 40%, ${card.color}80 50%, transparent 60%)`
                                    }}
                                ></div>

                                {/* Neon Border */}
                                <div
                                    className="p6-kc-border"
                                    style={{ borderColor: isHovered ? card.color : 'rgba(255,255,255,0.1)' }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default CorporateBrochure;
