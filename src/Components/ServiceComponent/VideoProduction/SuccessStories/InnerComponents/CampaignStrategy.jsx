import React, { useEffect, useRef } from 'react';
import './campaign-strategy.css';

const CampaignStrategy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('cs-animate-visible');
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

    const steps = [
        { title: "Market Analysis", icon: "📊", desc: "Detailed market and competitor analysis." },
        { title: "Audience Targeting", icon: "🎯", desc: "Audience research and precise targeting." },
        { title: "SEO Strategy", icon: "🔍", desc: "Search engine optimization planning." },
        { title: "Paid Advertising", icon: "💸", desc: "Paid campaign planning and execution." },
        { title: "Funnel Design", icon: "🧲", desc: "Conversion funnel mapping and design." },
        { title: "Optimization", icon: "⚙️", desc: "Performance monitoring & optimization." }
    ];

    return (
        <section className="campaign-strategy-sec" ref={sectionRef}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <span className="cs-badge cs-reveal">🔷 2. Campaign Strategy Breakdown</span>
                        <h2 className="cs-title mt-3 cs-reveal" style={{ transitionDelay: '0.1s' }}>
                            How We Planned and <br /><span className="cs-text-hl">Executed the Campaign</span>
                        </h2>
                        <p className="cs-desc mt-3 cs-reveal" style={{ transitionDelay: '0.2s' }}>
                            Every successful marketing campaign begins with a clear strategy. In this section, we explain how we analyze market opportunities and build effective campaigns.
                        </p>
                    </div>
                </div>

                <div className="cs-roadmap-container mt-5">
                    {/* SVG Connecting Line */}
                    <svg className="cs-connecting-line" viewBox="0 0 1000 200" preserveAspectRatio="none">
                        <path d="M 0,100 C 250,200 750,0 1000,100" />
                        <path className="cs-line-animated" d="M 0,100 C 250,200 750,0 1000,100" />
                    </svg>

                    <div className="row">
                        {steps.map((step, idx) => (
                            <div className="col-md-4 col-sm-6 mb-5 position-relative" key={idx}>
                                <div className="cs-node cs-reveal" style={{ transitionDelay: `${0.3 + (idx * 0.1)}s` }}>
                                    <div className="cs-node-point">{idx + 1}</div>
                                    <div className="cs-node-card">
                                        <div className="cs-node-icon">{step.icon}</div>
                                        <h4 className="cs-node-title">{step.title}</h4>
                                        <p className="cs-node-desc">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <div className="cs-conclusion cs-reveal" style={{ transitionDelay: '0.9s' }}>
                            <i>"This structured approach allows us to build campaigns that deliver consistent results."</i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cs-ambient-glow"></div>
        </section>
    );
};

export default CampaignStrategy;
