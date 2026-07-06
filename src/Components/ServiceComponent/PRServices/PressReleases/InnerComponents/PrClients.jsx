import React from 'react';
import './press-release.css';
import CountUp from './CountUp';

// Importing client logos
const client1 = mediaUrl("assets/images/AAmi-Bangali.png");
const client2 = mediaUrl("assets/images/BWA-ODISHA.png");
const client3 = mediaUrl("assets/images/Choice-Foundation.png");
const client4 = mediaUrl("assets/images/Kesri.png");
const client5 = mediaUrl("assets/images/Karma-International-01.png");
const client6 = mediaUrl("assets/images/Khukumoni.png");
const client7 = mediaUrl("assets/images/Maxglow.png");
const client8 = mediaUrl("assets/images/Vyapaar-Zone.png");
const client9 = mediaUrl("assets/images/Lakme.png");
const client10 = mediaUrl("assets/images/Kiwi.png");
const client11 = mediaUrl("assets/images/Pro-100.png");
const client12 = mediaUrl("assets/images/Sutraa.png");
const client13 = mediaUrl("assets/images/SS-Medicorp.png");
const client14 = mediaUrl("assets/images/Beautech2.png");
const client15 = mediaUrl("assets/images/Jawed Habib.png");
import { mediaUrl } from "../../../../../config/media";

const clientRow1 = [client1, client2, client3, client4, client5, client6, client7];
const clientRow2 = [client8, client9, client10, client11, client12, client13, client14, client15];

const PrClients = () => {
    return (
        <section className="pr-clients-sec" style={{ padding: '80px 0 120px 0', background: '#0b0b0f' }}>
            <div className="container">
                <div className="pr-clients-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>
                        Our <span className="pr-gradient-text" style={{ background: 'linear-gradient(135deg, #00ff66, #00f3ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clients</span>
                    </h2>
                    <p style={{ color: '#a0a0b0', fontSize: '1.1rem' }}>
                        We specialize in offering holistic support to individuals and businesses aiming to achieve their desired exposure. Our diverse clientele ranges from dynamic startups and philanthropic endeavors to entertainment giants and leading FMCG brands.
                    </p>
                    <div style={{ marginTop: '30px' }}>
                        <div className="pr-stat-box" style={{ display: 'inline-block', background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '20px 40px', borderRadius: '15px', textAlign: 'center' }}>
                            <div className="pr-stat-value c4" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00ff66', marginBottom: '5px' }}><CountUp end={1000} suffix="+" /></div>
                            <div className="pr-stat-label" style={{ fontSize: '1rem', color: '#fff', fontWeight: '500' }}>Happy Clients</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pr-marquee-wrapper" style={{ position: 'relative', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '20px 0', overflow: 'hidden' }}>
                {/* Clients Slider 1 - Left to Right */}
                <div className="pr-marquee-track pr-scroll-left" style={{ display: 'flex', width: 'max-content', gap: '20px', padding: '10px 0', animation: 'pr-scrollLeft 40s linear infinite' }}>
                    {[...clientRow1, ...clientRow1, ...clientRow1].map((logo, index) => (
                        <div className="pr-logo-card" key={`cli1-${index}`} style={{ width: '220px', height: '120px', flexShrink: 0 }}>
                            <div className="pr-logo-glass" style={{ background: 'rgba(255, 255, 255, 1)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', transition: 'transform 0.3s ease' }}>
                                <img src={logo} alt={`Client Row 1 - ${index}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Clients Slider 2 - Right to Left */}
                <div className="pr-marquee-track pr-scroll-right" style={{ display: 'flex', width: 'max-content', gap: '20px', padding: '10px 0', animation: 'pr-scrollRight 38s linear infinite' }}>
                    {[...clientRow2, ...clientRow2, ...clientRow2].map((logo, index) => (
                        <div className="pr-logo-card" key={`cli2-${index}`} style={{ width: '220px', height: '120px', flexShrink: 0 }}>
                            <div className="pr-logo-glass" style={{ background: 'rgba(255, 255, 255, 1)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', transition: 'transform 0.3s ease' }}>
                                <img src={logo} alt={`Client Row 2 - ${index}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes pr-scrollLeft {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-33.33% - 6.66px)); }
                }
                @keyframes pr-scrollRight {
                  0% { transform: translateX(calc(-33.33% - 6.66px)); }
                  100% { transform: translateX(0); }
                }
            `}} />
        </section>
    );
};

export default PrClients;
