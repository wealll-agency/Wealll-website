import React from 'react';
import './logo-portfolio.css';

const LogoPortfolio = () => {
    // Creating rows of logos for the marquee effect
    const logosRow1 = [
        { name: "Nebula", icon: <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="8" /><circle cx="50" cy="50" r="15" fill="currentColor" /></svg>, color: "#00f3ff" },
        { name: "Vertex", icon: <svg viewBox="0 0 100 100"><polygon points="50,15 85,85 15,85" fill="none" stroke="currentColor" strokeWidth="8" /></svg>, color: "#ff00aa" },
        { name: "Orbit", icon: <svg viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(-45 50 50)" /><circle cx="50" cy="50" r="10" fill="currentColor" /></svg>, color: "#ffd700" },
        { name: "Hexa", icon: <svg viewBox="0 0 100 100"><path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="6" /></svg>, color: "#00ff66" },
        { name: "Echo", icon: <svg viewBox="0 0 100 100"><path d="M20 50 Q50 10 80 50 T140 50" fill="none" stroke="currentColor" strokeWidth="8" /></svg>, color: "#ff6600" },
        { name: "Flux", icon: <svg viewBox="0 0 100 100"><rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" fill="none" stroke="currentColor" strokeWidth="8" /></svg>, color: "#9900ff" },
    ];

    const logosRow2 = [
        { name: "Zenith", icon: <svg viewBox="0 0 100 100"><path d="M20 80 L50 20 L80 80 L50 60 Z" fill="currentColor" /></svg>, color: "#ff3366" },
        { name: "Quantum", icon: <svg viewBox="0 0 100 100"><circle cx="35" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="6" /><circle cx="65" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="6" /></svg>, color: "#00ccff" },
        { name: "Iris", icon: <svg viewBox="0 0 100 100"><path d="M10 50 Q50 0 90 50 Q50 100 10 50 Z" fill="none" stroke="currentColor" strokeWidth="6" /><circle cx="50" cy="50" r="12" fill="currentColor" /></svg>, color: "#ccff00" },
        { name: "Bolt", icon: <svg viewBox="0 0 100 100"><polygon points="40,20 60,20 45,50 65,50 35,85 45,50 25,50" fill="currentColor" /></svg>, color: "#ffcc00" },
        { name: "Aero", icon: <svg viewBox="0 0 100 100"><path d="M20 60 C20 20 80 20 80 60" fill="none" stroke="currentColor" strokeWidth="8" /><line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="8" /></svg>, color: "#00ff99" },
        { name: "Prism", icon: <svg viewBox="0 0 100 100"><polygon points="50,20 20,80 80,80" fill="none" stroke="currentColor" strokeWidth="6" /><line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="2" /></svg>, color: "#ff0099" },
    ];

    return (
        <section className="logo-portfolio-section">
            <div className="portfolio-bg-glow"></div>
            <div className="container">
                <div className="lp-header">
                    <h2>Recent <span className="holo-text">Masterpieces</span></h2>
                    <p>A gallery of unique identities crafted for global brands.</p>
                </div>

                <div className="portfolio-marquee">
                    {/* Row 1 - Left to Right */}
                    <div className="marquee-track scroll-left">
                        {[...logosRow1, ...logosRow1, ...logosRow1].map((logo, index) => (
                            <div className="marquee-card" key={`r1-${index}`}>
                                <div className="card-glass">
                                    <div className="logo-visual" style={{ color: logo.color }}>
                                        {logo.icon}
                                    </div>
                                    <div className="logo-name">{logo.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - Right to Left */}
                    <div className="marquee-track scroll-right">
                        {[...logosRow2, ...logosRow2, ...logosRow2].map((logo, index) => (
                            <div className="marquee-card" key={`r2-${index}`}>
                                <div className="card-glass">
                                    <div className="logo-visual" style={{ color: logo.color }}>
                                        {logo.icon}
                                    </div>
                                    <div className="logo-name">{logo.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoPortfolio;
