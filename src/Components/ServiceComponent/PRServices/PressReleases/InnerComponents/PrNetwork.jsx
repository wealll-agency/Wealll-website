import React from 'react';
import './press-release.css';
import CountUp from './CountUp';

// Importing publisher logos
import pub1 from "../../../../../assets/logos/Hindustan_Times_logo-2.png";
import pub2 from "../../../../../assets/logos/logo-bajaj-finance.png";
import pub3 from "../../../../../assets/logos/logo-dharma-production-1.png";
import pub4 from "../../../../../assets/logos/logo-hamleys-1.png";
import pub5 from "../../../../../assets/logos/logo-hd.png";
import pub6 from "../../../../../assets/logos/logo-iima.png";
import pub7 from "../../../../../assets/logos/logo-luminous-1.png";
import pub8 from "../../../../../assets/logos/logo-makoons-1.png";
import pub9 from "../../../../../assets/logos/logo-niwi.png";
import pub10 from "../../../../../assets/logos/logo-sobha.png";
import pub11 from "../../../../../assets/logos/logo-tanla-1.png";
import pub12 from "../../../../../assets/logos/logo-wellness.png";

const publisherRow1 = [pub1, pub2, pub3, pub4, pub5, pub6];
const publisherRow2 = [pub7, pub8, pub9, pub10, pub11, pub12];

const PrNetwork = () => {
    return (
        <section className="pr-network-sec" style={{ padding: '80px 0', background: '#08080c', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="container">
                <div className="pr-network-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>
                        Our <span className="pr-gradient-text" style={{ background: 'linear-gradient(135deg, #00f3ff, #005eff, #ff00aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Network</span>
                    </h2>
                    <p style={{ color: '#a0a0b0', fontSize: '1.1rem' }}>
                        Get featured with our extensive distribution network that can help you unlock new markets and connect with your target audience.
                    </p>
                </div>

                <div className="pr-stats-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', marginBottom: '60px' }}>
                    <div className="pr-stat-box" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '15px', textAlign: 'center', minWidth: '220px' }}>
                        <div className="pr-stat-value c1" style={{ fontSize: '3rem', fontWeight: '800', color: '#00f3ff', marginBottom: '10px' }}><CountUp end={1500} suffix="+" /></div>
                        <div className="pr-stat-label" style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '500' }}>National & Regional Publishers</div>
                    </div>
                    <div className="pr-stat-box" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '15px', textAlign: 'center', minWidth: '220px' }}>
                        <div className="pr-stat-value c2" style={{ fontSize: '3rem', fontWeight: '800', color: '#ff00aa', marginBottom: '10px' }}><CountUp end={50} suffix="+" /></div>
                        <div className="pr-stat-label" style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '500' }}>Team Members</div>
                    </div>
                    <div className="pr-stat-box" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '15px', textAlign: 'center', minWidth: '220px' }}>
                        <div className="pr-stat-value c3" style={{ fontSize: '3rem', fontWeight: '800', color: '#ffd700', marginBottom: '10px' }}><CountUp end={20} suffix="+" /></div>
                        <div className="pr-stat-label" style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '500' }}>States</div>
                    </div>
                </div>
            </div>

            <div className="pr-marquee-wrapper" style={{ position: 'relative', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '20px 0', overflow: 'hidden' }}>
                {/* Publishers Slider 1 - Left to Right */}
                <div className="pr-marquee-track pr-scroll-left" style={{ display: 'flex', width: 'max-content', gap: '20px', padding: '10px 0', animation: 'pr-scrollLeft 30s linear infinite' }}>
                    {[...publisherRow1, ...publisherRow1, ...publisherRow1].map((logo, index) => (
                        <div className="pr-logo-card" key={`pub1-${index}`} style={{ width: '220px', height: '120px', flexShrink: 0 }}>
                            <div className="pr-logo-glass" style={{ background: 'rgba(255, 255, 255, 1)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', transition: 'transform 0.3s ease' }}>
                                <img src={logo} alt={`Publisher Row 1 - ${index}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Publishers Slider 2 - Right to Left */}
                <div className="pr-marquee-track pr-scroll-right" style={{ display: 'flex', width: 'max-content', gap: '20px', padding: '10px 0', animation: 'pr-scrollRight 35s linear infinite' }}>
                    {[...publisherRow2, ...publisherRow2, ...publisherRow2].map((logo, index) => (
                        <div className="pr-logo-card" key={`pub2-${index}`} style={{ width: '220px', height: '120px', flexShrink: 0 }}>
                            <div className="pr-logo-glass" style={{ background: 'rgba(255, 255, 255, 1)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', transition: 'transform 0.3s ease' }}>
                                <img src={logo} alt={`Publisher Row 2 - ${index}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Embedded styles for marquee keyframes just in case they are missing from css */}
            {/* Added style block to inject keyframes if necessary, although they should be in press-release.css */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes pr-scrollLeft {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-33.33% - 6.66px)); }
                }
                @keyframes pr-scrollRight {
                  0% { transform: translateX(calc(-33.33% - 6.66px)); }
                  100% { transform: translateX(0); }
                }
                .pr-logo-glass:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 94, 255, 0.2) !important;
                }
            `}} />
        </section>
    );
};

export default PrNetwork;
