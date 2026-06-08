import React, { useEffect, useRef } from 'react';
import './branding.css';

const DigitalCommunicationAssets = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="brand-section-padding position-relative fade-in-section" ref={sectionRef}>
            <div className="container">
                <div className="row g-5 align-items-center">

                    <div className="col-lg-5">
                        <p className="brand-accent-text fw-bold mb-2">12. Digital Communication Assets</p>
                        <h2 className="brand-section-title">Branded Digital Communication</h2>
                        <p className="brand-section-subtitle">
                            We create consistent digital assets aligned with your brand guidelines. Brand consistency strengthens recognition.
                        </p>
                        <ul className="framework-list mt-4">
                            <li>Email Templates</li>
                            <li>Social Media Branding Templates</li>
                            <li>Ad Creative Templates</li>
                            <li>Newsletter Design</li>
                            <li>Internal Communication Templates</li>
                        </ul>
                    </div>

                    <div className="col-lg-7">
                        <div className="digital-assets-wall">
                            {/* Central Email Newsletter */}
                            <div className="asset-card asset-email">
                                <div className="asset-header header-dot"></div>
                                <div className="asset-hero"></div>
                                <div className="asset-title"></div>
                                <div className="asset-text-lines">
                                    <div className="atl"></div><div className="atl w-75"></div>
                                </div>
                                <div className="asset-btn"></div>
                            </div>

                            {/* Social Media Post */}
                            <div className="asset-card asset-social">
                                <div className="post-header">
                                    <div className="post-avatar"></div>
                                    <div className="post-name"></div>
                                </div>
                                <div className="post-image"></div>
                                <div className="post-actions">
                                    <div className="pa"></div><div className="pa"></div><div className="pa"></div>
                                </div>
                            </div>

                            {/* Ad Banner */}
                            <div className="asset-card asset-ad">
                                <div className="ad-content-box">
                                    <div className="ad-title"></div>
                                    <div className="ad-subtitle"></div>
                                </div>
                                <div className="ad-cta"></div>
                            </div>

                            {/* Floating Notification UI Elements */}
                            <div className="ui-notification ui-notif-1">
                                <i className="bi bi-bell-fill"></i> New Template Ready
                            </div>
                            <div className="ui-notification ui-notif-2">
                                <i className="bi bi-check-circle-fill"></i> Brand Aligned
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="brand-section-divider"></div>
        </section>
    );
};

export default DigitalCommunicationAssets;
