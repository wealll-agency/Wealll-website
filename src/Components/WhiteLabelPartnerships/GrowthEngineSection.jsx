import React from 'react';

const GrowthEngineSection = () => {
    return (
        <section className="wlp-growth-engine-section" id="growth-engine">
            {/* Background image overlay */}
            <div className="wlp-growth-bg-overlay"></div>

            <div className="wlp-section-container position-relative">
                <div className="wlp-growth-layout">
                    
                    {/* Left Column: Heading & Description */}
                    <div className="wlp-growth-left">
                        <span className="wlp-growth-badge">FROM PROJECTS TO PROGRESS</span>
                        <h2 className="wlp-growth-title">
                            From One Project to a<br />
                            Long-Term Growth Engine
                        </h2>
                        <p className="wlp-growth-desc">
                            Start small, build trust, and scale together. Our partnership<br className="d-none d-md-inline" />
                            is designed to grow with your business.
                        </p>
                    </div>

                    {/* Right Column: Growth Trajectory Curve & Milestones */}
                    <div className="wlp-growth-right">
                        <div className="wlp-growth-chart-wrapper">
                            
                            {/* SVG Curved Trajectory with Gradient and Glow */}
                            <svg className="wlp-growth-curve-svg" viewBox="0 0 620 180" fill="none" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="growthPathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#10b981" />
                                        <stop offset="20%" stopColor="#10b981" />
                                        <stop offset="50%" stopColor="#3b82f6" />
                                        <stop offset="85%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#c084fc" />
                                    </linearGradient>
                                    
                                    <filter id="growthGlow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="4" result="blur" />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Background ambient glow curve */}
                                <path
                                    d="M 5 130 C 50 120, 75 106, 115 98 C 190 84, 250 82, 310 82 C 390 82, 450 64, 505 38 C 530 26, 555 16, 580 8"
                                    stroke="url(#growthPathGrad)"
                                    strokeWidth="6"
                                    strokeOpacity="0.35"
                                    filter="url(#growthGlow)"
                                />

                                {/* Core crisp trajectory line */}
                                <path
                                    d="M 5 130 C 50 120, 75 106, 115 98 C 190 84, 250 82, 310 82 C 390 82, 450 64, 505 38 C 530 26, 555 16, 580 8"
                                    stroke="url(#growthPathGrad)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />

                                {/* Arrowhead at the top right */}
                                <path
                                    d="M 568 22 L 592 5 L 588 28 L 580 20 Z"
                                    fill="#c084fc"
                                />
                            </svg>

                            {/* Milestone 1: Start Small */}
                            <div className="wlp-growth-milestone milestone-1">
                                <div className="wlp-milestone-circle-wrapper">
                                    <div className="wlp-milestone-halo green-halo"></div>
                                    <div className="wlp-milestone-circle green-circle">
                                        {/* Leaf Icon */}
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2-1.3 7-5.5 8.8-9 8.8z" />
                                            <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="wlp-milestone-text">
                                    <h4 className="wlp-milestone-title">Start Small</h4>
                                    <p className="wlp-milestone-desc">
                                        Begin with a project<br />
                                        and experience our<br />
                                        quality delivery.
                                    </p>
                                </div>
                            </div>

                            {/* Milestone 2: Build Trust */}
                            <div className="wlp-growth-milestone milestone-2">
                                <div className="wlp-milestone-circle-wrapper">
                                    <div className="wlp-milestone-halo blue-halo"></div>
                                    <div className="wlp-milestone-circle blue-circle">
                                        {/* Trust / Team Icon */}
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="wlp-milestone-text">
                                    <h4 className="wlp-milestone-title">Build Trust</h4>
                                    <p className="wlp-milestone-desc">
                                        See the results,<br />
                                        strengthen confidence<br />
                                        and collaborate more.
                                    </p>
                                </div>
                            </div>

                            {/* Milestone 3: Scale Together */}
                            <div className="wlp-growth-milestone milestone-3">
                                <div className="wlp-milestone-circle-wrapper">
                                    <div className="wlp-milestone-halo purple-halo"></div>
                                    <div className="wlp-milestone-circle purple-circle">
                                        {/* Chart / Scale Icon */}
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="20" x2="18" y2="10" />
                                            <line x1="12" y1="20" x2="12" y2="4" />
                                            <line x1="6" y1="20" x2="6" y2="14" />
                                            <path d="M3 16l6-6 4 4 8-8" strokeWidth="2.4" />
                                            <polyline points="17 6 21 6 21 10" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="wlp-milestone-text">
                                    <h4 className="wlp-milestone-title">Scale Together</h4>
                                    <p className="wlp-milestone-desc">
                                        Take on bigger projects<br />
                                        and unlock new<br />
                                        opportunities.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GrowthEngineSection;
