import React, { useEffect, useRef } from 'react';
import './troubleshooting-support.css';
import supportBg from '../../../../../assets/images/brand-identity.jpeg';

const TroubleshootingSupport = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ts-animate');
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

    const supportItems = [
        "Product setup and installation guides",
        "Common issue resolution videos",
        "Configuration and settings walkthroughs",
        "Usage best practices",
        "Maintenance and care instructions"
    ];

    return (
        <section className="troubleshooting-support-sec" ref={sectionRef} style={{ backgroundImage: `url(${supportBg})` }}>
            <div className="ts-overlay"></div>
            <div className="container position-relative z-2">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="ts-header ts-reveal">
                            <span className="ts-badge">🔷 3. Troubleshooting & Support Videos</span>
                            <h2 className="ts-title mt-3">Reduce Customer <span className="text-hl-pink">Support Requests</span></h2>
                            <p className="ts-desc mt-3">
                                Support teams often receive repetitive questions related to setup, configuration, or product usage. FAQ support videos help customers solve these issues independently.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    {supportItems.map((item, idx) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                            <div className="ts-card ts-reveal" style={{ transitionDelay: `${0.2 + (idx * 0.1)}s` }}>
                                <div className="ts-card-icon">
                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                </div>
                                <p className="ts-card-text">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <div className="ts-conclusion ts-reveal" style={{ transitionDelay: '0.8s' }}>
                            These videos improve customer satisfaction while reducing the workload on support teams.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TroubleshootingSupport;
