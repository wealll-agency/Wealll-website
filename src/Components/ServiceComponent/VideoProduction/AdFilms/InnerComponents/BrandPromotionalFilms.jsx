import React, { useEffect, useRef } from "react";
import "./brand-promotional-films.css";
import BannerComponent from "../../../CommonComponents/BannerComponent";

const services = [
    "Product Launch Ad Films",
    "Brand Awareness Campaign Videos",
    "Corporate Promotional Videos",
    "Service Showcase Videos",
    "Social Media Promotional Videos",
    "Short Digital Ads (15–60 seconds)",
];

const BrandPromotionalFilms = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-reveal");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = sectionRef.current.querySelectorAll(".reveal-element");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="brand-promo-films-wrapper" ref={sectionRef}>
            <BannerComponent />
            <div className="promo-background-elements">
                <div className="promo-glow-orb orb-1"></div>
                <div className="promo-glow-orb orb-2"></div>
                <div className="promo-grid-overlay"></div>
            </div>

            <div className="container position-relative z-1 promo-header">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0 reveal-element delay-1">
                        <div className="promo-content-block">
                            <div className="promo-badge">🎬 1. Brand-Focused Promotional Films</div>
                            <h2 className="promo-main-title">
                                Promotional Videos That <br />
                                <span className="text-yellow-gradient">Drive Growth</span>
                            </h2>
                            <p className="promo-description">
                                We create high-impact promotional ad films that communicate your brand message clearly and convert viewers into customers.
                            </p>

                            <div className="promo-services-list">
                                <p className="list-intro">Our Promotional Film Services include:</p>
                                <ul>
                                    {services.map((service, index) => (
                                        <li key={index} className={`reveal-element delay-${(index % 3) + 2}`}>
                                            <div className="service-bullet"></div>
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="promo-conclusion reveal-element delay-5">
                                Every promotional film is crafted to align with your marketing objectives and campaign strategy.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 reveal-element delay-3">
                        <div className="promo-visual-showcase">
                            <div className="cinematic-frame">
                                <div className="frame-overlay-top"></div>
                                <div className="frame-overlay-bottom"></div>

                                {/* Dummy Video/Image Placeholder - A stylized graphic representation */}
                                <div className="abstract-video-composition">
                                    <div className="video-player-ui">
                                        <div className="player-header">
                                            <span className="rec-indicator"></span> REC
                                        </div>
                                        <div className="center-play-button">
                                            <div className="play-triangle"></div>
                                        </div>
                                        <div className="player-timeline">
                                            <div className="timeline-progress"></div>
                                        </div>
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop"
                                        alt="Promotional Film Production"
                                        className="promo-composition-image"
                                    />
                                </div>

                                {/* Floating elements */}
                                <div className="floating-metric fm-1">
                                    <span className="fm-val">+150%</span>
                                    <span className="fm-label">Conversion</span>
                                </div>
                                <div className="floating-metric fm-2">
                                    <span className="fm-val">4K</span>
                                    <span className="fm-label">Cinematic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPromotionalFilms;
