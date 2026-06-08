import React, { useEffect, useRef, useState } from 'react';
import './branding.css';

const SalesMarketingCollaterals = () => {
    const sectionRef = useRef(null);
    const [activeCard, setActiveCard] = useState(null);

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

    const collaterals = [
        { id: 1, title: 'Proposal Templates', icon: 'bi-file-earmark-text', delay: '0.1s' },
        { id: 2, title: 'Sales Deck Templates', icon: 'bi-easel', delay: '0.2s' },
        { id: 3, title: 'One-Page Overview', icon: 'bi-file-richtext', delay: '0.3s' },
        { id: 4, title: 'Case Study Design', icon: 'bi-journal-check', delay: '0.4s' },
        { id: 5, title: 'Offer Sheets', icon: 'bi-tags', delay: '0.5s' }
    ];

    return (
        <section className="brand-section-padding position-relative fade-in-section" ref={sectionRef}>
            <div className="container">
                <div className="text-center mb-5">
                    <p className="brand-accent-text fw-bold mb-2">11. Sales & Marketing Collaterals</p>
                    <h2 className="brand-section-title">Sales-Driven Brand Materials</h2>
                    <p className="brand-section-subtitle mx-auto">
                        We design materials that help your sales team convert prospects. Your marketing materials become structured and persuasive.
                    </p>
                </div>

                <div className="collaterals-grid staggered-reveal">
                    {collaterals.map((item) => (
                        <div
                            key={item.id}
                            className={`collateral-card magnetic-hover ${activeCard === item.id ? 'active' : ''}`}
                            style={{ animationDelay: item.delay }}
                            onMouseEnter={() => setActiveCard(item.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div className="cc-glow-border"></div>
                            <div className="cc-content">
                                <div className="cc-icon"><i className={`bi ${item.icon}`}></i></div>
                                <h4>{item.title}</h4>
                                <div className="cc-animated-line"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="brand-section-divider"></div>
        </section>
    );
};

export default SalesMarketingCollaterals;
