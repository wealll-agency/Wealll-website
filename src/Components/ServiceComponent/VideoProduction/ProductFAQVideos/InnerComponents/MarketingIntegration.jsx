import React, { useEffect, useRef } from 'react';
import './marketing-integration.css';
import mktImg from '../../../../../assets/images/social-media-manage.jpeg';

const MarketingIntegration = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('mi-animate');
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

    const mktServices = [
        { label: "Product page video integration", icon: "🌐" },
        { label: "FAQ section video embedding", icon: "💬" },
        { label: "YouTube SEO optimization", icon: "🔍" },
        { label: "Social media short-form versions", icon: "📱" },
        { label: "Retargeting ad creative clips", icon: "🎯" },
        { label: "Video performance tracking", icon: "📊" }
    ];

    return (
        <section className="marketing-integration-sec" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="mi-visual mi-reveal">
                            <div className="mi-img-box">
                                <img src={mktImg} alt="Marketing Integration" className="img-fluid mi-img-main" />
                                <div className="mi-stats-card">
                                    <div className="stat-row">
                                        <div className="stat-label">Engagement</div>
                                        <div className="stat-bar"><div className="fill" style={{ width: '85%' }}></div></div>
                                        <div className="stat-val">+85%</div>
                                    </div>
                                    <div className="stat-row mt-2">
                                        <div className="stat-label">Conversion</div>
                                        <div className="stat-bar"><div className="fill" style={{ width: '60%' }}></div></div>
                                        <div className="stat-val">+60%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="mi-content mi-reveal" style={{ transitionDelay: '0.2s' }}>
                            <h5 className="mi-subtitle">🔷 6. Marketing Integration & Video Optimization</h5>
                            <h2 className="mi-title">Turn FAQ Videos into <br /> <span className="text-hl-purple">Marketing Assets</span></h2>
                            <p className="mi-desc mt-4">
                                Product FAQ videos can also strengthen your marketing efforts when integrated into your digital channels. We ensure your FAQ videos improve both customer experience and marketing performance.
                            </p>

                            <h4 className="mi-list-title mt-5">Our Optimization Services include:</h4>
                            <div className="row mt-3">
                                {mktServices.map((service, idx) => (
                                    <div className="col-sm-6 mb-4" key={idx}>
                                        <div className="mi-service-item mi-reveal" style={{ transitionDelay: `${0.3 + (idx * 0.1)}s` }}>
                                            <div className="mi-s-icon">{service.icon}</div>
                                            <span>{service.label}</span>
                                        </div>
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

export default MarketingIntegration;
