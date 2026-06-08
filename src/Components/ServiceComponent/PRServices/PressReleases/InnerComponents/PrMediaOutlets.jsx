import React from 'react';
import './pr-content.css';

const PrMediaOutlets = () => {
    // Array of premium media outlet types/categories for the infinite marquee
    const mediaOutlets = [
        { name: "Top-Tier Global News", icon: "🌍" },
        { name: "Financial & Business Journals", icon: "📊" },
        { name: "Leading Tech Publications", icon: "💻" },
        { name: "Regional & Local Papers", icon: "📰" },


    ];

    // Double the array to ensure smooth infinite scrolling
    const marqueeContent = [...mediaOutlets, ...mediaOutlets];

    return (
        <section className="pr-marquee-section" style={{ background: '#020202', position: 'relative', overflow: 'hidden' }}>
            <div className="pr-marquee-bg-glow"></div>

            <div className="container">
                <div className="pr-cyber-header text-center mb-0">
                    <h2>Premium <span className="neon-text">Distribution Networks</span></h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#aaa' }}>
                        Your press release doesn’t just sit on a wire. We guarantee placements across high-authority publications and targeted media syndicates matching your industry vertical.
                    </p>
                </div>
            </div>

            {/* Infinite 3D Marquee Track */}
            <div className="pr-portfolio-marquee mt-5">
                <div className="pr-marquee-track pr-scroll-left">
                    {marqueeContent.map((outlet, index) => (
                        <div className="pr-marquee-card" key={index}>
                            <div className="pr-marquee-content">
                                <div className="pr-marquee-icon">{outlet.icon}</div>
                                <h3 className="pr-marquee-name">{outlet.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secondary track moving right for visual complexity */}
                <div className="pr-marquee-track pr-scroll-right mt-4">
                    {marqueeContent.reverse().map((outlet, index) => (
                        <div className="pr-marquee-card" key={`right-${index}`}>
                            <div className="pr-marquee-content">
                                <div className="pr-marquee-icon">{outlet.icon}</div>
                                <h3 className="pr-marquee-name">{outlet.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrMediaOutlets;
