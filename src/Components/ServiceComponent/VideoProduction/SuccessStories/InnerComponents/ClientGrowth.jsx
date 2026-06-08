import React, { useEffect, useRef } from 'react';
import './client-growth.css';
import growthImg1 from '../../../../../assets/images/growthstep1.jpg';
import growthImg2 from '../../../../../assets/images/growthstep2.jpg';
import growthImg3 from '../../../../../assets/images/growthstep3.jpg';

const ClientGrowth = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('cg-animate-visible');
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

    const challenges = [
        "Businesses struggling with low website traffic",
        "Companies looking to improve lead generation",
        "Brands aiming to increase online visibility",
        "Startups launching new products or services"
    ];

    return (
        <section className="client-growth-sec" id="case-studies" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="cg-content-wrapper cg-reveal">
                            <h5 className="cg-subtitle">🔷 1. Client Growth Case Studies</h5>
                            <h2 className="cg-title">Real Business Growth <span className="cg-text-hl">Through Strategy</span></h2>
                            <p className="cg-desc mt-4">
                                Our success stories showcase how businesses from different industries have achieved measurable growth through our digital marketing strategies. Each case study highlights the challenges faced by the client, the marketing strategy implemented, and the results achieved.
                            </p>

                            <div className="cg-challenges-box mt-5">
                                <h6 className="cg-box-title">Typical Case Studies Address:</h6>
                                <ul className="cg-challenges-list">
                                    {challenges.map((challenge, idx) => (
                                        <li key={idx} className="cg-reveal" style={{ transitionDelay: `${0.2 + (idx * 0.1)}s` }}>
                                            <div className="cg-icon-circle"><i className="fa-solid fa-arrow-trend-up"></i></div>
                                            <span>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="cg-conclusion mt-4 cg-reveal" style={{ transitionDelay: '0.6s' }}>
                                <p><strong>Through structured marketing campaigns, we help businesses turn challenges into growth opportunities.</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="cg-visual-grid">
                            <div className="cg-grid-col cg-col-left cg-reveal" style={{ transitionDelay: '0.3s' }}>
                                <div className="cg-img-card">
                                    <img src={growthImg1} alt="Growth" />
                                    <div className="cg-overlay">
                                        <div className="cg-badge">+150% Leads</div>
                                    </div>
                                </div>
                                <div className="cg-img-card cg-card-small mt-4">
                                    <img src={growthImg3} alt="Strategy" />
                                </div>
                            </div>
                            <div className="cg-grid-col cg-col-right cg-reveal" style={{ transitionDelay: '0.5s' }}>
                                <div className="cg-glass-stat mb-4">
                                    <div className="stat-circle">
                                        <svg viewBox="0 0 36 36" className="circular-chart orange">
                                            <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <path className="circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        </svg>
                                        <div className="percentage">85%</div>
                                    </div>
                                    <span>Client Retention</span>
                                </div>
                                <div className="cg-img-card">
                                    <img src={growthImg2} alt="Success" />
                                    <div className="cg-overlay">
                                        <div className="cg-badge cg-badge-alt">Traffic Doubled</div>
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

export default ClientGrowth;
