import React, { useEffect, useRef } from 'react';
import './knowledge-base-library.css';
const demoVideo = mediaUrl("assets/Video/Wealll_hero.mp4");
import { mediaUrl } from "../../../../../config/media";

const KnowledgeBaseLibrary = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('kb-animate');
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

    const libraryItems = [
        { title: "Product FAQ collections", icon: "📁" },
        { title: "Tutorials for common tasks", icon: "🎓" },
        { title: "Product training videos", icon: "🏋️" },
        { title: "User onboarding guides", icon: "🚀" },
        { title: "Customer education content", icon: "💡" }
    ];

    return (
        <section className="knowledge-base-sec" ref={sectionRef}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <span className="kb-badge kb-reveal">🔷 5. Knowledge Base & Help Center</span>
                        <h2 className="kb-title mt-3 kb-reveal" style={{ transitionDelay: '0.1s' }}>
                            Create a Self-Service <br /><span className="text-hl-blue">Video Support System</span>
                        </h2>
                        <p className="kb-desc mt-3 kb-reveal" style={{ transitionDelay: '0.2s' }}>
                            A structured library of FAQ videos helps customers find answers anytime without contacting support. These videos can be integrated into your website help center, documentation pages, and customer portals.
                        </p>
                    </div>
                </div>

                <div className="row mt-5 position-relative">
                    {/* Background glow for the video player */}
                    <div className="kb-glow-bg"></div>

                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <div className="kb-video-portal kb-reveal" style={{ transitionDelay: '0.3s' }}>
                            <div className="kb-portal-header">
                                <div className="kb-search-bar">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <span>Search help center...</span>
                                </div>
                            </div>
                            <div className="kb-portal-body">
                                <video src={demoVideo} autoPlay loop muted playsInline className="kb-main-video" preload="metadata"></video>
                                <div className="kb-playing-badge">
                                    <span className="live-dot"></span> Now Playing: Onboarding Guide
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="kb-topics-list">
                            <h4 className="kb-topics-title kb-reveal" style={{ transitionDelay: '0.4s' }}>Our Help Center Content:</h4>
                            {libraryItems.map((item, idx) => (
                                <div className="kb-topic-card kb-reveal" style={{ transitionDelay: `${0.5 + (idx * 0.1)}s` }} key={idx}>
                                    <div className="kb-topic-icon">{item.icon}</div>
                                    <div className="kb-topic-text">{item.title}</div>
                                    <div className="kb-topic-arrow"><i className="fa-solid fa-chevron-right"></i></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KnowledgeBaseLibrary;
