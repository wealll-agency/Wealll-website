import React, { useEffect, useRef } from 'react';
import './marketing-insights.css';
const insightsImg = mediaUrl("assets/images/dm-5.png"); // Mockup of analytics or growth chart
import { mediaUrl } from "../../../../../config/media";

const MarketingInsights = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('mi-animate-visible');
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

    const lessons = [
        { label: "Growth Drivers", desc: "Key catalysts behind successful campaigns." },
        { label: "Strategic Decisions", desc: "Pivotal choices that produced strong results." },
        { label: "Market Opportunities", desc: "Untapped areas identified during execution." },
        { label: "Optimization", desc: "Techniques used to fine-tune performance." },
        { label: "Lessons Learned", desc: "Critical takeaways for sustainable scaling." }
    ];

    return (
        <section className="marketing-insights-sec" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                        <div className="mi-content mi-reveal">
                            <h5 className="mi-subtitle">🔷 6. Marketing Insights</h5>
                            <h2 className="mi-title">Key Lessons from <br /> <span className="mi-text-hl">Real Campaigns</span></h2>
                            <p className="mi-desc mt-4">
                                Each success story reveals valuable insights into marketing strategies that work in real-world situations. We transform raw data into actionable knowledge to help your business unlock new growth opportunities.
                            </p>

                            <ul className="mi-lessons-list mt-5">
                                {lessons.map((lesson, idx) => (
                                    <li className="mi-reveal" style={{ transitionDelay: `${0.3 + (idx * 0.1)}s` }} key={idx}>
                                        <i className="fa-solid fa-lightbulb text-warning"></i>
                                        <div>
                                            <strong>{lesson.label}:</strong> {lesson.desc}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 order-lg-1">
                        <div className="mi-visual mi-reveal" style={{ transitionDelay: '0.2s' }}>
                            <div className="mi-img-wrap">
                                <img src={insightsImg} alt="Marketing Strategy Analytics" className="img-fluid" loading="lazy" />
                                <div className="mi-glass-overlay mt-4">
                                    <h4 className="mb-3">Strategic Impact</h4>
                                    <div className="progress mb-3 bg-dark" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-warning w-75" role="progressbar"></div>
                                    </div>
                                    <div className="progress bg-dark" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-info w-100" role="progressbar"></div>
                                    </div>
                                    <p className="mt-3 mb-0 small">Analytics derived directly from the case studies mapping engagement over time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingInsights;
