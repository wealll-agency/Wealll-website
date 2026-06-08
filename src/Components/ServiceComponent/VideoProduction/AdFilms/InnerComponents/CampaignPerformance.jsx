import React, { useEffect, useRef, useState } from "react";
import "./campaign-performance.css";

const perfMetrics = [
    { label: "Engagement Rate", value: 300, suffix: "%", icon: "🔥", color: "#fdb914" },
    { label: "View-Through", value: 85, suffix: "%", icon: "👁️", color: "#4caf50" },
    { label: "Conversion Lift", value: 2.5, suffix: "x", icon: "📈", color: "#2196f3" }
];

const CampaignPerformance = () => {
    const [animated, setAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimated(true);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="campaign-performance-section" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
                        <div className="promo-badge">🎬 6. Campaign Performance & Distribution Support</div>
                        <h2 className="promo-main-title">
                            From Production <br />
                            <span className="text-yellow-gradient">To Performance</span>
                        </h2>
                        <p className="promo-description">
                            We don’t just create ad films — we help scale them. We focus on measurable ROI and business impact.
                        </p>

                        <div className="performance-features-list">
                            <div className="perf-feature">
                                <div className="pf-check">✓</div>
                                <div>
                                    <h4>Paid Ad Campaign Setup</h4>
                                    <p>Targeted distribution across digital channels.</p>
                                </div>
                            </div>
                            <div className="perf-feature">
                                <div className="pf-check">✓</div>
                                <div>
                                    <h4>Video Funnel Strategy</h4>
                                    <p>Mapping top, middle, and bottom of funnel video content.</p>
                                </div>
                            </div>
                            <div className="perf-feature">
                                <div className="pf-check">✓</div>
                                <div>
                                    <h4>Retargeting & A/B Testing</h4>
                                    <p>Creative variations optimized based on real-time data.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className={`analytics-dashboard-ui ${animated ? 'animate' : ''}`}>
                            <div className="dash-header">
                                <div className="dash-dots"><span></span><span></span><span></span></div>
                                <div className="dash-title">Campaign Analytics // Live</div>
                            </div>

                            <div className="dash-body">
                                {/* Metrics Row */}
                                <div className="metrics-cards-row">
                                    {perfMetrics.map((metric, idx) => (
                                        <div className="metric-card" key={idx} style={{ '--accent': metric.color }}>
                                            <div className="metric-icon">{metric.icon}</div>
                                            <div className="metric-info">
                                                <span className="metric-label">{metric.label}</span>
                                                <div className="metric-value-container">
                                                    <span className={`metric-value ${animated ? 'count-up' : ''}`} style={{ "--val": metric.value }}>
                                                        {animated ? metric.value : 0}
                                                    </span>
                                                    <span className="metric-suffix">{metric.suffix}</span>
                                                    <span className="metric-trend">↑</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart Area */}
                                <div className="chart-container-ui">
                                    <div className="chart-header">
                                        <span>Video Retention Graph</span>
                                        <span className="chart-badge">Optimized</span>
                                    </div>
                                    <div className="chart-area">
                                        {/* Y-axis grid */}
                                        <div className="chart-grid">
                                            <span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span>
                                        </div>
                                        {/* SVG Chart representation */}
                                        <div className="chart-svg-wrapper">
                                            <svg viewBox="0 0 500 200" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="rgba(253, 185, 20, 0.4)" />
                                                        <stop offset="100%" stopColor="rgba(253, 185, 20, 0)" />
                                                    </linearGradient>
                                                    <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
                                                        <stop offset="0%" stopColor="#fff" />
                                                        <stop offset="50%" stopColor="#ffcc4d" />
                                                        <stop offset="100%" stopColor="#fdb914" />
                                                    </linearGradient>
                                                </defs>
                                                {/* Area fill */}
                                                <path
                                                    className="chart-area-fill"
                                                    d="M0,20 L50,30 L100,35 L150,45 L200,40 L250,55 L300,50 L350,65 L400,60 L450,80 L500,75 L500,200 L0,200 Z"
                                                    fill="url(#chartGlow)"
                                                />
                                                {/* Line path */}
                                                <path
                                                    className="chart-line-path"
                                                    d="M0,20 L50,30 L100,35 L150,45 L200,40 L250,55 L300,50 L350,65 L400,60 L450,80 L500,75"
                                                    fill="none"
                                                    stroke="url(#chartLine)"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>

                                            {/* Data Points */}
                                            <div className="data-point p-1"></div>
                                            <div className="data-point p-2"></div>
                                            <div className="data-point p-3"></div>
                                            <div className="data-point p-4"></div>
                                        </div>
                                    </div>
                                    <div className="chart-x-axis">
                                        <span>0:00</span><span>0:15</span><span>0:30</span><span>0:45</span><span>1:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampaignPerformance;
