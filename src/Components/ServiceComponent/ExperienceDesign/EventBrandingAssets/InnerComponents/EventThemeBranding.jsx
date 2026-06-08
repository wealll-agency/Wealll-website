import React, { useEffect, useRef } from 'react';
import './EventBrandingAssets.css';

const EventThemeBranding = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('eba-animate-up');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div className="eba-page-wrapper">
            {/* 7. Core Identity (3D Isometric Matrix Re-Design) */}
            <section className="eba-section">
                <div className="container" ref={addToRefs}>
                    <div className="text-center mb-0 eba-delay-1">
                        <h2 className="eba-section-title">Event Identity & <span className="glow-text" data-text="Theme Development">Theme Development</span></h2>
                        <p className="eba-section-subtitle" style={{ fontSize: '1.8rem', color: '#fff' }}>Create a Strong Event Brand Identity</p>
                        <p className="eba-section-desc">
                            Every successful event needs a cohesive brand identity. We create event branding systems that maintain consistency across all assets.
                        </p>
                    </div>

                    <div className="eba-iso-container eba-delay-2" ref={addToRefs}>
                        <div className="eba-iso-floor"></div>

                        <div className="eba-iso-plane">

                            <div className="eba-iso-card eba-iso-c1">
                                <div className="eba-iso-icon">🎨</div>
                                <span>Brand Color & Typography</span>
                            </div>

                            <div className="eba-iso-card eba-iso-c2">
                                <div className="eba-iso-icon">✨</div>
                                <span>Logo Design</span>
                            </div>

                            <div className="eba-iso-card eba-iso-c3">
                                <div className="eba-iso-icon">🎭</div>
                                <span>Theme & Visuals</span>
                            </div>

                            <div className="eba-iso-card eba-iso-c4">
                                <div className="eba-iso-icon">🖼️</div>
                                <span>Visual Mood Board</span>
                            </div>

                            <div className="eba-iso-card eba-iso-c5">
                                <div className="eba-iso-icon">📖</div>
                                <span>Brand Guidelines</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Environmental Domination */}
            <section className="eba-section pt-0 mt-5">
                <div className="container" ref={addToRefs}>
                    <div className="text-center mb-5 eba-delay-1">
                        <h2 className="eba-section-title">Event Venue & <span className="glow-text" data-text="Environmental Branding">Environmental Branding</span></h2>
                        <p className="eba-section-subtitle" style={{ fontSize: '1.8rem', color: '#fff' }}>Immersive On-Site Brand Experience</p>
                        <p className="eba-section-desc">
                            We design venue branding that transforms spaces into memorable brand experiences. We create environments that leave lasting impressions.
                        </p>
                    </div>

                    <div className="eba-env-grid eba-delay-2" ref={addToRefs}>
                        <div className="eba-env-panel">
                            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Entry Arches" className="eba-env-img" />
                            <div className="eba-env-title">Entry Arches & Directionals</div>
                        </div>
                        <div className="eba-env-panel">
                            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Stage Backdrops" className="eba-env-img" />
                            <div className="eba-env-title">Stage & Screens Integration</div>
                        </div>
                        <div className="eba-env-panel">
                            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Photo Booths" className="eba-env-img" />
                            <div className="eba-env-title">Photo Booth Experiences</div>
                        </div>
                        <div className="eba-env-panel">
                            <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Merchandise" className="eba-env-img" />
                            <div className="eba-env-title">Merch & Sponsor Branding</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Campaign Assets (Orbital Telemetry) */}
            <section className="eba-section pb-5 mb-5">
                <div className="container" ref={addToRefs}>
                    <div className="mb-5 eba-delay-1 text-center">
                        <h2 className="eba-section-title">Event Digital & <span className="glow-text" data-text="Campaign Assets">Campaign Assets</span></h2>
                        <p className="eba-section-subtitle mx-auto" style={{ fontSize: '1.8rem', color: '#fff' }}>Integrated Event Marketing Campaign Assets</p>
                        <p className="eba-section-desc">
                            We design digital assets that support your event before, during, and after launch. We ensure your event branding performs both offline and online.
                        </p>
                    </div>

                    <div className="eba-cyber-accordion eba-delay-2" ref={addToRefs}>

                        <div className="eba-ca-row">
                            <div className="eba-ca-header">
                                <h3 className="eba-ca-title">01. Event Launch Creatives</h3>
                                <div className="eba-ca-icon">🚀</div>
                            </div>
                            <div className="eba-ca-content">
                                <div className="eba-ca-desc">
                                    High-velocity launch graphics designed to trigger immediate registration spikes and build instant brand authority across all major digital touchpoints.
                                </div>
                                <div className="eba-ca-data">
                                    <div className="eba-ca-data-val">LAUNCH</div>
                                    <div className="eba-ca-data-lab">Brand Ignition</div>
                                </div>
                            </div>
                        </div>

                        <div className="eba-ca-row">
                            <div className="eba-ca-header">
                                <h3 className="eba-ca-title">02. Social Media & Paid Ads</h3>
                                <div className="eba-ca-icon">📈</div>
                            </div>
                            <div className="eba-ca-content">
                                <div className="eba-ca-desc">
                                    Conversion-optimized social media banners and paid ad creatives that slice through feed noise, driving qualified traffic directly to your event funnels.
                                </div>
                                <div className="eba-ca-data">
                                    <div className="eba-ca-data-val">ADS</div>
                                    <div className="eba-ca-data-lab">Traffic Generation</div>
                                </div>
                            </div>
                        </div>

                        <div className="eba-ca-row">
                            <div className="eba-ca-header">
                                <h3 className="eba-ca-title">03. Ticketing & Post-Event</h3>
                                <div className="eba-ca-icon">🎟️</div>
                            </div>
                            <div className="eba-ca-content">
                                <div className="eba-ca-desc">
                                    Countdown campaign graphics, high-converting event landing page designs, ticketing banner assets, and post-event recap graphics for remarketing.
                                </div>
                                <div className="eba-ca-data">
                                    <div className="eba-ca-data-val">PAGES</div>
                                    <div className="eba-ca-data-lab">Conversion Engine</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventThemeBranding;
