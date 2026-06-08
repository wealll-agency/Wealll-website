import React, { useState } from "react";
import "./portfolio-corporate-films.css";

const services = [
    {
        title: "Company Portfolio",
        icon: "🏢",
        desc: "Comprehensive overviews of your company's achievements, capabilities, and infrastructure.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Corporate Profile",
        icon: "📈",
        desc: "Professional narratives that build credibility and communicate your mission and vision to stakeholders.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Founder Story",
        icon: "🎤",
        desc: "Inspiring journey videos that connect your audience with the visionaries behind the brand.",
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Case Study Films",
        icon: "📊",
        desc: "Detailed visual explorations of your successful projects and the value you delivered to clients.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Client Testimonials",
        icon: "🤝",
        desc: "Authentic customer success stories that provide social proof and build trust with prospects.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Process Showcase",
        icon: "⚙️",
        desc: "Behind-the-scenes looks at your manufacturing or operational processes, highlighting quality.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    }
];

const PortfolioCorporateFilms = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="portfolio-corporate-section">
            <div className="portfolio-marquee-bg">
                <div className="marquee-content">
                    AUTHORITY • CREDIBILITY • TRUST • CORPORATE PROFILES • PORTFOLIO FILMS •
                    AUTHORITY • CREDIBILITY • TRUST • CORPORATE PROFILES • PORTFOLIO FILMS •
                </div>
            </div>

            <div className="container position-relative z-1">
                <div className="text-center mb-5">
                    <div className="promo-badge mx-auto">🎬 2. Portfolio & Corporate Profile Films</div>
                    <h2 className="promo-main-title text-center">
                        Build Authority Through <br />
                        <span className="text-yellow-gradient">Visual Storytelling</span>
                    </h2>
                    <p className="promo-description text-center mx-auto" style={{ maxWidth: '700px' }}>
                        Your company profile deserves more than a brochure. We create professional portfolio films that build credibility and trust.
                    </p>
                </div>

                <div className="pcf-interactive-showcase">
                    <div className="row g-4">
                        <div className="col-lg-5 col-md-12">
                            <div className="pcf-services-list">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`pcf-service-item ${activeIndex === index ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveIndex(index)}
                                    >
                                        <div className="pcf-service-icon">{service.icon}</div>
                                        <div className="pcf-service-info">
                                            <h3>{service.title}</h3>
                                            <div className="pcf-service-desc-wrapper">
                                                <p>{service.desc}</p>
                                            </div>
                                        </div>
                                        <div className="pcf-active-indicator"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="pcf-conclusion mt-4">
                                <div className="conclusion-icon">✨</div>
                                <p>We present your business in a structured, engaging, and professional format.</p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12 d-flex align-items-center">
                            <div className="pcf-visual-container">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`pcf-visual-card ${activeIndex === index ? 'active' : ''} ${activeIndex > index ? 'prev' : ''} ${activeIndex < index ? 'next' : ''}`}
                                    >
                                        <img src={service.image} alt={service.title} />
                                        <div className="pcf-visual-overlay">
                                            <div className="pcf-visual-title-tag">{service.title} Film</div>
                                            <div className="pcf-play-btn-large">
                                                <div className="play-triangle-large"></div>
                                            </div>
                                        </div>

                                        {/* Decorative elements around the active card */}
                                        {activeIndex === index && (
                                            <>
                                                <div className="corner-bracket top-left"></div>
                                                <div className="corner-bracket top-right"></div>
                                                <div className="corner-bracket bottom-left"></div>
                                                <div className="corner-bracket bottom-right"></div>
                                            </>
                                        )}
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

export default PortfolioCorporateFilms;
