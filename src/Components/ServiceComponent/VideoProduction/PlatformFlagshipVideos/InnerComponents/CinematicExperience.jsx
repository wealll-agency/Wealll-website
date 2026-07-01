import React, { useEffect, useRef } from 'react';
import './cinematic-experience.css';
import sampleVideo from '../../../../../assets/Video/WE_ALLL_Video_Final.mp4';

const CinematicExperience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-cinematic');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = sectionRef.current.querySelectorAll('.cine-reveal');
        elements.forEach((el) => observer.observe(el));

        // Optional parallax effect on mouse move for the background
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 20;
            const yPos = (clientY / window.innerHeight - 0.5) * 20;

            const bgElements = sectionRef.current.querySelectorAll('.cine-parallax');
            bgElements.forEach((el) => {
                const speed = el.getAttribute('data-speed') || 1;
                el.style.transform = `translate(${xPos * speed}px, ${yPos * speed}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            elements.forEach((el) => observer.unobserve(el));
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const features = [
        {
            title: "Animated UI Walkthroughs",
            desc: "Pixel-perfect motion design that brings digital interfaces into the physical world.",
            icon: "🖼️"
        },
        {
            title: "Motion Graphic Explanations",
            desc: "Simplifying complex platform architecture with elegant 2D/3D motion graphics.",
            icon: "🎨"
        },
        {
            title: "Product Storytelling",
            desc: "Weaving emotional narratives around technical features for better retention.",
            icon: "📖"
        },
        {
            title: "Workflow Demonstrations",
            desc: "Visualizing data flow and user interactions with stunning precision.",
            icon: "🕹️"
        },
        {
            title: "User Journey Visualizations",
            desc: "Mapping out the user experience from login to success state.",
            icon: "🗺️"
        }
    ];

    return (
        <section className="cinematic-experience-section" ref={sectionRef}>
            <div className="cine-bg-elements">
                <div className="cine-circle cine-parallax" data-speed="2"></div>
                <div className="cine-circle cine-circle-2 cine-parallax" data-speed="-1.5"></div>
                <div className="cine-grid"></div>
            </div>

            <div className="container position-relative z-1 pt-5 pb-5">
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <span className="cine-badge cine-reveal">Step 04 // Experience</span>
                        <h2 className="cine-title cine-reveal" style={{ transitionDelay: '0.1s' }}>
                            Cinematic Product <span className="text-glow-blue">Experience Videos</span>
                        </h2>
                        <h4 className="cine-subtitle cine-reveal" style={{ transitionDelay: '0.2s' }}>
                            Turn Platform Features into Visual Experiences
                        </h4>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <p className="cine-desc cine-reveal" style={{ transitionDelay: '0.3s' }}>
                                    We combine motion graphics, UI simulations, and cinematic storytelling to present
                                    your platform in an engaging and visually compelling way. These videos make complex
                                    platforms easier to understand while maintaining a premium visual presentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cine-cards-container">
                    {features.map((feature, index) => (
                        <div
                            className="cine-feature-card cine-reveal"
                            style={{ transitionDelay: `${0.2 + (index * 0.1)}s` }}
                            key={index}
                        >
                            <div className="cine-card-glow"></div>
                            <div className="cine-card-content">
                                <div className="cine-icon">{feature.icon}</div>
                                <h5>{feature.title}</h5>
                                <p>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Player inside the cinematic section */}
                {/* <div className="row justify-content-center mt-5">
                    <div className="col-lg-10">
                        <div className="cine-player-wrapper cine-reveal" style={{ transitionDelay: '0.5s' }}>
                            <div className="cine-player-frame">
                                <video
                                    src={sampleVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="cine-real-video"
                                />
                                <div className="cine-mock-ui top-left cine-parallax" data-speed="1">
                                    <div className="mock-bar"></div>
                                    <div className="mock-bar short"></div>
                                </div>
                                <div className="cine-mock-ui bottom-right cine-parallax" data-speed="-1">
                                    <div className="mock-circle"></div>
                                    <div className="mock-circle small"></div>
                                </div>
                            </div>
                            <div className="cine-player-reflection"></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default CinematicExperience;
