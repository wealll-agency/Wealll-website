import React, { useEffect, useRef } from 'react';
import './launch-campaign.css';

const LaunchCampaign = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-launch');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = sectionRef.current.querySelectorAll('.launch-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    const launchCards = [
        {
            title: "Launch Announcements",
            desc: "High-impact short videos to formally announce your platform to the world.",
            icon: "📢",
            delay: "0.2s"
        },
        {
            title: "Product Reveal Videos",
            desc: "Build suspense and showcase the 'big reveal' of your platform's capabilities.",
            icon: "🎁",
            delay: "0.3s"
        },
        {
            title: "App Launch Trailers",
            desc: "Fast-paced, cinematic trailers specifically designed for app store optimization.",
            icon: "📱",
            delay: "0.4s"
        },
        {
            title: "Release Campaign Films",
            desc: "Narrative films that run across multi-channel campaigns to drive initial adoption.",
            icon: "🎬",
            delay: "0.5s"
        },
        {
            title: "Event & Conference Videos",
            desc: "Larger-than-life presentations designed for giant screens at launch events.",
            icon: "🎪",
            delay: "0.6s"
        }
    ];

    return (
        <section className="launch-campaign-section" ref={sectionRef}>
            {/* Background Graphic Elements */}
            <div className="launch-bg-grid"></div>
            <div className="launch-glow-sphere top-right"></div>
            <div className="launch-glow-sphere bottom-left"></div>

            <div className="container position-relative z-1">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <span className="launch-badge launch-reveal">Step 03 // Launch</span>
                        <h2 className="launch-title launch-reveal" style={{ transitionDelay: '0.1s' }}>
                            Platform Launch <span className="text-glow-orange">Campaign Videos</span>
                        </h2>
                        <h4 className="launch-subtitle launch-reveal" style={{ transitionDelay: '0.2s' }}>
                            Create Excitement Around Your Platform Launch
                        </h4>
                        <p className="launch-desc launch-reveal" style={{ transitionDelay: '0.3s' }}>
                            Launching a platform requires strong visual storytelling to generate attention and
                            interest. We create powerful launch videos that help build anticipation and awareness,
                            optimized for social media, email announcements, and lead generation.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {launchCards.map((card, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div
                                className={`launch-card launch-reveal ${index === 3 || index === 4 ? 'col-lg-offset-2' : ''}`}
                                style={{ transitionDelay: card.delay }}
                            >
                                <div className="launch-card-inner">
                                    <div className="card-icon">{card.icon}</div>
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-desc">{card.desc}</p>

                                    <div className="card-hover-effect"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LaunchCampaign;
