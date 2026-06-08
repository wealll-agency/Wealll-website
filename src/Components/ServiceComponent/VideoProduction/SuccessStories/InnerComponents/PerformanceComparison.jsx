import React, { useEffect, useRef } from 'react';
import './performance-comparison.css';
import dmBaseImg from '../../../../../assets/images/dm-2.png';

const PerformanceComparison = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('pc-animate-visible');
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

    const metrics = [
        { label: "Website Traffic", before: "10k /mo", after: "45k /mo", trend: "+350%" },
        { label: "Qualified Leads", before: "120 /mo", after: "480 /mo", trend: "+300%" },
        { label: "Conversion Rate", before: "1.2%", after: "4.8%", trend: "+400%" },
        { label: "Search Ranking", before: "Page 4", after: "Top 3", trend: "Rank #1" }
    ];

    return (
        <section className="performance-comparison-sec" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="pc-content pc-reveal">
                            <h5 className="pc-subtitle">🔷 3. Before & After Performance</h5>
                            <h2 className="pc-title">Measuring Real <br /> <span className="text-hl-cyan">Marketing Impact</span></h2>
                            <p className="pc-desc mt-4">
                                The most powerful proof of success is measurable improvement. In our case studies, we present clear comparisons showing performance before and after campaign implementation.
                            </p>

                            <div className="pc-callout mt-4 pc-reveal" style={{ transitionDelay: '0.4s' }}>
                                <i className="fa-solid fa-chart-line"></i>
                                <p>These results demonstrate how well-executed digital marketing strategies can drive measurable business growth.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="pc-visual pc-reveal" style={{ transitionDelay: '0.2s' }}>
                            <div className="pc-backdrop-image">
                                <img src={dmBaseImg} alt="Digital Marketing Dashboard" className="img-fluid opacity-25 mix-blend-mode-luminosity rounded-4" />
                            </div>

                            <div className="pc-metrics-grid">
                                {metrics.map((metric, idx) => (
                                    <div className="pc-metric-card" style={{ transitionDelay: `${0.4 + (idx * 0.1)}s` }} key={idx}>
                                        <h4 className="metric-label">{metric.label}</h4>
                                        <div className="metric-compare-row">
                                            <div className="metric-col before-col">
                                                <span>Before</span>
                                                <strong>{metric.before}</strong>
                                            </div>
                                            <div className="metric-arrow">
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </div>
                                            <div className="metric-col after-col">
                                                <span>After</span>
                                                <strong>{metric.after}</strong>
                                            </div>
                                        </div>
                                        <div className="metric-trend-badge">{metric.trend}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceComparison;
