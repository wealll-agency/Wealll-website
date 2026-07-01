import React, { useEffect, useRef } from 'react';
import './feature-clarification.css';
import featImg from '../../../../../assets/images/portfolio_brand1.jpeg';

const FeatureClarification = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fc-animate-visible');
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

    const features = [
        { title: "Step-by-step demonstrations", icon: "👉" },
        { title: "Product functionality walkthroughs", icon: "⚙️" },
        { title: "Feature benefit explanations", icon: "✨" },
        { title: "Problem–solution based demonstrations", icon: "🧩" },
        { title: "Product comparison explanations", icon: "⚖️" }
    ];

    return (
        <section className="feature-clarification-sec" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="fc-content-wrapper fc-reveal">
                            <h5 className="fc-subtitle">🔷 2. Feature Clarification & How-It-Works Videos</h5>
                            <h2 className="fc-title">Explain Product Features <br /> <span className="text-hl-yellow">in a Simple Way</span></h2>
                            <p className="fc-desc mt-4">
                                Many products have multiple features that customers may not immediately understand. We create clear “how it works” videos that demonstrate how each feature delivers real value.
                            </p>

                            <div className="fc-grid-container mt-5">
                                {features.map((feat, idx) => (
                                    <div className="fc-grid-item fc-reveal" style={{ transitionDelay: `${0.2 + (idx * 0.1)}s` }} key={idx}>
                                        <div className="fc-icon">{feat.icon}</div>
                                        <span>{feat.title}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="fc-tagline mt-5 fc-reveal" style={{ transitionDelay: '0.8s' }}>
                                <i>"These videos simplify complex features and make your product easier to understand."</i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="fc-visual-wrapper fc-reveal" style={{ transitionDelay: '0.4s' }}>
                            <div className="fc-image-box">
                                <img src={featImg} alt="Feature Clarification" className="img-fluid fc-main-img" />
                                <div className="fc-overlay-card fc-float">
                                    <div className="fc-mini-graph">
                                        <span className="bar b1"></span>
                                        <span className="bar b2"></span>
                                        <span className="bar b3"></span>
                                    </div>
                                    <p>Feature Adoption <br /><strong>+45%</strong></p>
                                </div>
                            </div>
                            <div className="fc-glow-ring"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureClarification;
