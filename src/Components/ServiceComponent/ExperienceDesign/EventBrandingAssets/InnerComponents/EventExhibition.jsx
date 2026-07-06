import React, { useEffect, useRef } from 'react';
import './EventBrandingAssets.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const EventExhibition = () => {
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

    const collateralCards = [
        { title: "Brochures & Profiles", icon: "📄", desc: "Detailed company literature structured for impact." },
        { title: "Flyers & Handouts", icon: "🗞️", desc: "Scannable, high-conversion visual sheets." },
        { title: "Product Catalogs", icon: "📚", desc: "Showcase your offerings with clarity." },
        { title: "Standee & Banners", icon: "🎌", desc: "Roll-up designs that command aisle attention." },
        { title: "Visiting Cards", icon: "📇", desc: "Premium networking assets." },
        { title: "Promotional Posters", icon: "🖼️", desc: "High-impact visual communication." },
        { title: "QR Lead Graphics", icon: "🔗", desc: "Scannable assets for digital flow." }
    ];

    return (
        <div className="eba-page-wrapper">
            {/* 1. Holographic Architecture (Luxury Glass Monolith) */}

            <section className="eba-section">

                <BannerComponent />

                <div className="container" ref={addToRefs}>
                    <div className="text-center mb-5 eba-delay-1">
                        <h2 className="eba-section-title">Exhibition Booth Branding <span className="glow-text" data-text="& Visual Identity">& Visual Identity</span></h2>
                        <p className="eba-section-subtitle" style={{ fontSize: '1.8rem', color: '#fff' }}>Exhibition Designs That Capture Attention Instantly</p>
                        <p className="eba-section-desc">
                            Your exhibition booth is your physical advertisement. We design visually powerful booth branding that attracts foot traffic, builds brand recall, and creates strong first impressions. We design booths that not only look impressive but also communicate your brand message clearly.
                        </p>
                    </div>

                    <div className="eba-monolith-sec eba-delay-2" ref={addToRefs}>
                        <div className="eba-monolith-glow"></div>

                        <div className="eba-monolith-core">
                            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Booth Renders" className="eba-monolith-img" loading="lazy" />
                            <div className="eba-monolith-text">STALL DESIGN CONCEPTS</div>
                        </div>

                        <div className="eba-monolith-side left">
                            <div className="eba-ms-title">3D Mockups & Displays</div>
                            <div className="eba-ms-desc">Product Display Branding</div>
                            <div className="eba-ms-desc" style={{ fontSize: '0.9rem', color: 'var(--eba-text-secondary)', fontWeight: '400' }}>Backdrop & Wall Graphics</div>
                            <div style={{ width: '40px', height: '4px', background: 'var(--eba-accent-neon)', marginTop: '20px' }}></div>
                        </div>

                        <div className="eba-monolith-side right">
                            <div className="eba-ms-title">Visual Impact Strategy</div>
                            <div className="eba-ms-desc">Lighting Strategy</div>
                            <div className="eba-ms-desc" style={{ fontSize: '0.9rem', color: 'var(--eba-text-secondary)', fontWeight: '400' }}>Brand Color Dominance Planning</div>
                            <div style={{ width: '40px', height: '4px', background: 'var(--eba-accent-magenta)', marginTop: '20px' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Marketing Collateral (Curved Grid) */}
            <section className="eba-section pb-0">
                <div className="container" ref={addToRefs}>
                    <div className="mb-5 eba-delay-1 text-center">
                        <h2 className="eba-section-title">Marketing Collateral <span className="glow-text" data-text="Design">Design</span></h2>
                        <p className="eba-section-subtitle" style={{ fontSize: '1.8rem', color: '#fff' }}>Complete On-Ground Marketing Assets</p>
                        <p className="eba-section-desc">
                            Your exhibition presence needs supporting marketing materials that are consistent, professional, and conversion-focused. Every asset is aligned with your marketing strategy and brand identity.
                        </p>
                    </div>
                </div>

                <div className="eba-curved-grid eba-delay-2" ref={addToRefs}>
                    {collateralCards.map((card, idx) => (
                        <div className="eba-glass-card" key={idx}>
                            <div>
                                <div className="eba-glass-icon-wrapper">{card.icon}</div>
                                <h3 className="eba-gc-title">{card.title}</h3>
                            </div>
                            <p style={{ color: 'var(--eba-text-secondary)', lineHeight: '1.6', fontSize: '1rem', marginTop: '1rem' }}>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Digital Integration Funnel */}
            <section className="eba-section">
                <div className="container" ref={addToRefs}>
                    <div className="eba-funnel-container eba-delay-1">
                        <div className="eba-lead-content">
                            <h2 className="eba-section-title">Exhibition Lead Capture & <span className="glow-text" data-text="Digital Integration">Digital Integration</span></h2>
                            <p className="eba-section-subtitle mx-0 mb-4" style={{ maxWidth: '100%', textAlign: 'left', fontSize: '1.8rem' }}>
                                Turn Booth Visitors into Qualified Leads
                            </p>
                            <p className="eba-section-desc mx-0 mb-2" style={{ textAlign: 'left' }}>
                                As a digital marketing company, we integrate offline exhibition branding with online conversion systems. We ensure your exhibition participation generates measurable business results.
                            </p>
                            <ul className="list-unstyled mt-5" style={{ fontSize: '1rem', color: 'var(--eba-text-primary)' }}>
                                <li className="mb-4 d-flex align-items-center"><span style={{ color: 'var(--eba-accent-neon)', marginRight: '15px', fontSize: '1.5rem' }}>■</span> QR Code Landing Page Integration</li>
                                <li className="mb-4 d-flex align-items-center"><span style={{ color: 'var(--eba-accent-blue)', marginRight: '15px', fontSize: '1.5rem' }}>■</span> Lead Capture Form Design</li>
                                <li className="mb-4 d-flex align-items-center"><span style={{ color: 'var(--eba-accent-magenta)', marginRight: '15px', fontSize: '1.5rem' }}>■</span> Social Media Campaign Visuals</li>
                                <li className="mb-4 d-flex align-items-center"><span style={{ color: 'var(--eba-accent-neon)', marginRight: '15px', fontSize: '1.5rem' }}>■</span> Email Follow-Up Template Design</li>
                                <li className="mb-4 d-flex align-items-center"><span style={{ color: 'var(--eba-accent-blue)', marginRight: '15px', fontSize: '1.5rem' }}>■</span> On-Booth Interactive Screen Visuals</li>
                            </ul>
                        </div>

                        <div className="eba-funnel-visual eba-delay-2">
                            <div className="eba-funnel-line-back"></div>
                            <div className="eba-funnel-beam"></div>

                            <div className="eba-funnel-node-premium">
                                <div style={{ fontWeight: '900', color: '#fff', fontSize: '1.3rem', letterSpacing: '1px' }}>BOOTH VISITOR</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--eba-text-secondary)', marginTop: '5px', textTransform: 'uppercase' }}>Physical Contact</div>
                            </div>
                            <div className="eba-funnel-node-premium">
                                <div style={{ fontWeight: '900', color: '#fff', fontSize: '1.3rem', letterSpacing: '1px' }}>SCAN ACTION</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--eba-accent-neon)', marginTop: '5px', textTransform: 'uppercase' }}>QR Landing Page</div>
                            </div>
                            <div className="eba-funnel-node-premium">
                                <div style={{ fontWeight: '900', color: '#fff', fontSize: '1.3rem', letterSpacing: '1px' }}>LEAD CAPTURE</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--eba-accent-blue)', marginTop: '5px', textTransform: 'uppercase' }}>Form & Email Templates</div>
                            </div>
                            <div className="eba-funnel-node-premium" style={{ borderColor: 'var(--eba-accent-neon)', boxShadow: '0 0 50px rgba(0, 255, 204, 0.2)' }}>
                                <div style={{ fontWeight: '900', color: 'var(--eba-accent-neon)', fontSize: '1.5rem', letterSpacing: '2px' }}>REMARKETING</div>
                                <div style={{ fontSize: '0.85rem', color: '#fff', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '3px' }}>Post-Event ROI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventExhibition;
