import React, { useEffect, useRef } from 'react';
import './faq-explainer.css';
import demoVideo from '../../../../../assets/Video/about_video.mp4';

const FAQExplainer = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('q-animate-visible');
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

    const bulletPoints = [
        "Answers to frequently asked product questions",
        "Product usage explanation videos",
        "Feature clarification clips",
        "Pricing and plan explanation videos",
        "Compatibility and requirement explanations"
    ];

    return (
        <section className="faq-explainer-sec" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="q-content-wrapper q-reveal">
                            <h5 className="q-subtitle">🔷 1. Customer Question Explainer Videos</h5>
                            <h2 className="q-title">Answer Common Product <br /> <span className="text-hl">Questions Clearly</span></h2>
                            <p className="q-desc mt-4">
                                Before purchasing a product, customers often want to understand how it works, whether it fits their needs, and how it solves their problems. FAQ explainer videos provide quick and clear answers to these questions.
                            </p>

                            <div className="q-bullet-container mt-5">
                                <h6 className="q-bullet-title">Our Customer Question Explainer Videos include:</h6>
                                <ul className="q-bullet-list">
                                    {bulletPoints.map((point, idx) => (
                                        <li key={idx} className="q-reveal" style={{ transitionDelay: `${0.2 + (idx * 0.1)}s` }}>
                                            <i className="fa-solid fa-circle-check"></i> {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="q-highlight-box mt-5 q-reveal" style={{ transitionDelay: '0.8s' }}>
                                <p>These short and focused videos help customers find answers quickly and make informed decisions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="q-visual-wrapper q-reveal" style={{ transitionDelay: '0.4s' }}>
                            <div className="q-glass-monitor">
                                <div className="q-monitor-top">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="q-monitor-screen">
                                    <video src={demoVideo} autoPlay loop muted playsInline className="q-demo-video"></video>
                                    <div className="q-floating-card top-left q-float-anim-1">
                                        <div className="icon">❓</div>
                                        <span>User Query Resolved</span>
                                    </div>
                                    <div className="q-floating-card bottom-right q-float-anim-2">
                                        <div className="icon">⏱️</div>
                                        <span>Under 60s</span>
                                    </div>
                                </div>
                            </div>
                            <div className="q-bg-blob"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQExplainer;
