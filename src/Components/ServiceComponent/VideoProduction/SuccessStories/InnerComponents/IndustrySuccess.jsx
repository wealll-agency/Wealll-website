import React, { useEffect, useRef } from 'react';
import './industry-success.css';

const IndustrySuccess = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-animate-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const industries = [
        { name: "E-commerce", icon: "🛒", desc: "Driving sales and ROAS." },
        { name: "SaaS & Tech", icon: "💻", desc: "Scaling user acquisition." },
        { name: "Healthcare", icon: "⚕️", desc: "Building trust and leads." },
        { name: "Real Estate", icon: "🏢", desc: "Generating high-value inquiries." },
        { name: "Education", icon: "🎓", desc: "Boosting enrollment figures." },
        { name: "Local Services", icon: "📍", desc: "Dominating local search." }
    ];

    return (
        <section className="industry-success-sec" ref={sectionRef}>
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-8 mx-auto">
                        <span className="is-badge is-reveal">🔷 4. Industry-Specific Success Stories</span>
                        <h2 className="is-title mt-3 is-reveal" style={{ transitionDelay: '0.1s' }}>
                            Proven Results Across <br />
                            <span className="is-text-hl">Multiple Industries</span>
                        </h2>
                        <p className="is-desc mt-3 is-reveal" style={{ transitionDelay: '0.2s' }}>
                            Our marketing strategies are tailored for different industries. Over the years, we have helped businesses from various sectors achieve meaningful results.
                        </p>
                    </div>
                </div>

                <div className="is-grid">
                    {industries.map((ind, idx) => (
                        <div className="is-card is-reveal" style={{ transitionDelay: `${0.3 + (idx * 0.1)}s` }} key={idx}>
                            <div className="is-card-inner">
                                <div className="is-icon-wrapper">{ind.icon}</div>
                                <h4>{ind.name}</h4>
                                <p>{ind.desc}</p>
                                <div className="is-hover-reveal">
                                    <span>View Case Studies</span> <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-5">
                    <div className="col-12 text-center is-reveal" style={{ transitionDelay: '0.9s' }}>
                        <p className="is-conclusion">Each industry requires a different marketing approach, and our experience allows us to design strategies that match specific market dynamics.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySuccess;
