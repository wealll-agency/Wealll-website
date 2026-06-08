import React, { useEffect, useRef } from 'react';
import './ecommerce-faq.css';
import ecomImg from '../../../../../assets/images/ecom-development.webp';

const EcommerceFAQ = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ecom-animate');
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

    const ecomFeatures = [
        "Product usage demonstrations",
        "Material and quality explanations",
        "Product care instructions",
        "Shipping and return explanations",
        "Warranty and guarantee explanations"
    ];

    return (
        <section className="ecom-faq-sec" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="ecom-visual ecom-reveal">
                            <div className="ecom-mockup-wrapper">
                                <img src={ecomImg} alt="Ecommerce Videos" className="img-fluid ecom-img-main" />

                                {/* Floating elements */}
                                <div className="ecom-float tag-1">
                                    <i className="fa-solid fa-cart-shopping"></i> Added
                                </div>
                                <div className="ecom-float tag-2">
                                    <i className="fa-solid fa-arrow-trend-up"></i> Conversions ↑
                                </div>
                                <div className="ecom-play-btn-overlay">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="ecom-content ecom-reveal" style={{ transitionDelay: '0.3s' }}>
                            <h5 className="ecom-subtitle">🔷 4. E-commerce Product FAQ Videos</h5>
                            <h2 className="ecom-title">Build Buyer Confidence <br /> <span className="text-hl-green">Before Purchase</span></h2>
                            <p className="ecom-desc mt-4">
                                For e-commerce businesses, FAQ videos can answer the most important product-related questions customers have before buying. By addressing these concerns upfront, businesses can reduce purchase hesitation and increase conversions.
                            </p>

                            <div className="ecom-list mt-4">
                                {ecomFeatures.map((feat, idx) => (
                                    <div className="ecom-list-item ecom-reveal" style={{ transitionDelay: `${0.4 + (idx * 0.1)}s` }} key={idx}>
                                        <div className="check-box"><i className="fa-solid fa-check"></i></div>
                                        <span>{feat}</span>
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

export default EcommerceFAQ;
