import React from 'react';
import './pr-content.css';

const PrWhyChooseUs = () => {
    const advantages = [
        {
            title: "Guaranteed Media Placements",
            desc: "Stop hoping for coverage. We utilize established syndication networks to secure guaranteed pickups on hundreds of premium news sites.",
            icon: "✅",
            color: "#00f3ff"
        },
        {
            title: "SEO-Optimized Releases",
            desc: "Our PR writers integrate strategic keywords and authoritative backlinks into your release to dominate search engine results pages (SERPs).",
            icon: "🔍",
            color: "#fdb914"
        },
        {
            title: "Crisis Management Experts",
            desc: "Rapid response protocols and narrative control strategies designed to expertly navigate and neutralize negative press cycles.",
            icon: "🛡️",
            color: "#ff3366"
        },
        {
            title: "Global wire integrations",
            desc: "Direct API partnerships with leading global wire services ensuring your news hits journalists' terminals in exactly the format they require.",
            icon: "🔌",
            color: "#00ff66"
        }
    ];

    return (
        <section className="pr-advantage-section">
            <div className="container position-relative z-1">
                <div className="pr-cyber-header text-center">
                    <h2>The PR <span className="neon-text">Advantage</span></h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: '#aaa' }}>
                        Unlike traditional PR agencies that mass-email blind pitches, we utilize a data-driven algorithmic approach to media relations.
                    </p>
                </div>

                <div className="row justify-content-center mt-5">
                    {advantages.map((adv, index) => (
                        <div className="col-lg-6 col-md-6 mb-4" key={index}>
                            {/* Hover interactive glowing card exactly matching the Presentation implementation */}
                            <div className="pr-glow-card" style={{ '--hover-color': adv.color }}>
                                <div className="pr-glow-icon-wrap" style={{ color: adv.color }}>
                                    {adv.icon}
                                </div>
                                <h3>{adv.title}</h3>
                                <p>{adv.desc}</p>
                                <div className="pr-glow-line" style={{ background: adv.color }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrWhyChooseUs;
