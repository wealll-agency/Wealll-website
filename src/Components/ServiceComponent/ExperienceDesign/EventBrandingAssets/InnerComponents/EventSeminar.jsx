import React, { useEffect, useRef } from 'react';
import './EventBrandingAssets.css';

const EventSeminar = () => {
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

    const acousticPanels = [
        { title: "Stage Backdrops", desc: "Command authority.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" },
        { title: "LED Screen Themes", desc: "Dynamic visuals.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80" },
        { title: "Podium Branding", desc: "Speaker focus.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" },
        { title: "Welcome Desks", desc: "First impressions.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" },
        { title: "Speaker Panels", desc: "Expert surroundings.", img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80" }
    ];

    const timelineItems = [
        { title: "Keynote Templates & Speaker Decks", icon: "📊", desc: "Premium, structured slides for impactful delivery." },
        { title: "Event Agenda & Program Booklet", icon: "📑", desc: "Clear tracking of sessions and schedules." },
        { title: "Seminar Kit Folders", icon: "📁", desc: "Professional attendee material housing." },
        { title: "Badges & Certificates", icon: "🏅", desc: "Official verification and networking identity." }
    ];

    return (
        <div className="eba-page-wrapper">
            {/* 4. Seminar Stage & Venue Branding (Acoustic Array) */}
            <section className="eba-section">
                <div className="container" ref={addToRefs}>
                    <div className="text-center mb-0 eba-delay-1">
                        <h2 className="eba-section-title">Seminar Stage <span className="glow-text" data-text="& Venue Branding">& Venue Branding</span></h2>
                        <p className="eba-section-subtitle" style={{ fontSize: '1.8rem', color: '#fff' }}>Professional Seminar Environment Design</p>
                        <p className="eba-section-desc">
                            We create powerful seminar branding that enhances authority, professionalism, and audience engagement. We design stage environments that reinforce your credibility and brand image.
                        </p>
                    </div>

                    <div className="eba-acoustic-grid eba-delay-2" ref={addToRefs}>
                        {acousticPanels.map((panel, idx) => (
                            <div className="eba-acoustic-col" key={idx}>
                                <img src={panel.img} alt={panel.title} className="eba-ac-img" />
                                <div className="eba-ac-content">
                                    <div className="eba-ac-title">{panel.title}</div>
                                    <div className="eba-ac-desc">{panel.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Seminar Presentation Content (Neo Timeline) */}
            <section className="eba-section pt-0">
                <div className="container" ref={addToRefs}>
                    <div className="text-center mb-5 eba-delay-1">
                        <h2 className="eba-section-title">Seminar Presentation & <span className="glow-text" data-text="Content Design">Content Design</span></h2>
                        <p className="eba-section-subtitle" style={{ fontSize: '1.8rem', color: '#fff' }}>Premium Presentation Assets for Impactful Delivery</p>
                        <p className="eba-section-desc">
                            We design clean, structured, and visually engaging seminar content materials. Every design maintains visual clarity and brand consistency.
                        </p>
                    </div>

                    <div className="eba-content-deck eba-delay-2" ref={addToRefs}>
                        {timelineItems.map((item, idx) => (
                            <div className="eba-cd-card" key={idx}>
                                <div className="eba-cd-icon">{item.icon}</div>
                                <h3 className="eba-cd-title">{item.title}</h3>
                                <p className="eba-cd-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Seminar Digital Promotion (HUD Dashboards) */}
            <section className="eba-section">
                <div className="container" ref={addToRefs}>
                    <div className="text-center mb-5 eba-delay-1">
                        <h2 className="eba-section-title">Seminar Digital <span className="glow-text" data-text="Promotion Assets">Promotion Assets</span></h2>
                        <p className="eba-section-subtitle" style={{ fontSize: '1.8rem', color: '#fff' }}>Maximize Attendance & Engagement</p>
                        <p className="eba-section-desc">
                            We design digital promotional assets to drive seminar registrations and engagement. We ensure your seminar branding extends beyond the venue.
                        </p>
                    </div>

                    <div className="eba-hud-grid eba-delay-2" ref={addToRefs}>

                        {/* Social / Ads */}
                        <div className="eba-hud-card">
                            <div className="eba-hud-radar">
                                <div className="eba-hud-sweep"></div>
                                <div className="eba-hud-dot"></div>
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '800', textAlign: 'center' }}>Social & Speaker Promo</h3>
                            <p style={{ color: 'var(--eba-text-secondary)', textAlign: 'center', marginTop: '15px', fontSize: '0.9rem' }}>Social Media Promotional Creatives & Speaker Announcement Graphics.</p>
                        </div>

                        {/* Email / Landing Pages */}
                        <div className="eba-hud-card">
                            <div className="eba-hud-bars">
                                <div className="eba-hud-bar"></div><div className="eba-hud-bar"></div><div className="eba-hud-bar"></div><div className="eba-hud-bar"></div><div className="eba-hud-bar"></div>
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '800', textAlign: 'center' }}>Invites & Registration</h3>
                            <p style={{ color: 'var(--eba-text-secondary)', textAlign: 'center', marginTop: '15px', fontSize: '0.9rem' }}>Registration Landing Page Banners, Email Invitations, & Reminders.</p>
                        </div>

                        {/* Campaigns */}
                        <div className="eba-hud-card">
                            <div className="eba-hud-clock">
                                <div className="eba-hud-clock-inner">T-7</div>
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '800', textAlign: 'center' }}>Countdown Campaigns</h3>
                            <p style={{ color: 'var(--eba-text-secondary)', textAlign: 'center', marginTop: '15px', fontSize: '0.9rem' }}>Scarcity and FOMO-driven countdown campaign designs.</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventSeminar;
