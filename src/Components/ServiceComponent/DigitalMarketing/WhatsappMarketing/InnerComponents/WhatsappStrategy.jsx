import React from 'react';
import './whatsapp-marketing.css';
import img1 from '../../../../../assets/images/tab_img1.jpg';
import img2 from '../../../../../assets/images/tab_img2.jpg';
import img3 from '../../../../../assets/images/tab_img3.jpg';

const WhatsappStrategy = () => {
    return (
        <section className="wa-strategy-section">
            <div className="container">
                <div className="whatsapp-header dark mb-5 text-center">
                    <h2>Our Strategic <span className="highlight-gradient-green">Approach</span></h2>
                    <p>Designed to integrate seamlessly into your existing marketing ecosystem.</p>
                </div>

                <div className="wa-strategy-container">
                    {/* Row 1: Image Left, Content Overlap Right */}
                    <div className="wa-strategy-row">
                        <div className="wa-strategy-img-box">
                            <img src={img1} alt="Audience Segmentation" className="wa-strategy-img" />
                        </div>
                        <div className="wa-strategy-content">
                            <div className="wa-bg-number">01</div>
                            <h3>Audience Segmentation</h3>
                            <p>We don't blast broadcast lists. We segment your audience based on behavior and history to ensure every message is relevant and welcomed. This precision targeting significantly increases engagement rates and reduces the likelihood of being blocked.</p>
                            <ul className="wa-feature-list">
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Behavior-based grouping
                                </li>
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Interest targeting
                                </li>
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Purchase history analysis
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 2: Content Overlap Left, Image Right */}
                    <div className="wa-strategy-row reverse">
                        <div className="wa-strategy-img-box">
                            <img src={img2} alt="Compliance & Safety" className="wa-strategy-img" />
                        </div>
                        <div className="wa-strategy-content">
                            <div className="wa-bg-number">02</div>
                            <h3>Compliance & Safety</h3>
                            <p>We strictly adhere to WhatsApp Business policies to keep your brand safe, verified, and free from spam reports or blocks. Our team ensures all templates are pre-approved and that your business maintains a high quality rating.</p>
                            <ul className="wa-feature-list">
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Policy adherence checks
                                </li>
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Green tick verification support
                                </li>
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Quality rating monitoring
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 3: Image Left, Content Overlap Right */}
                    <div className="wa-strategy-row">
                        <div className="wa-strategy-img-box">
                            <img src={img3} alt="Rich Media Messaging" className="wa-strategy-img" />
                        </div>
                        <div className="wa-strategy-content">
                            <div className="wa-bg-number">03</div>
                            <h3>Rich Media Messaging</h3>
                            <p>Beyond text. We utilize images, videos, documents, and interactive buttons to create a compelling and actionable user experience. Rich media conveys your message more effectively and drives higher conversion rates compared to text-only messages.</p>
                            <ul className="wa-feature-list">
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Interactive buttons & lists
                                </li>
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Video & Image catalogs
                                </li>
                                <li className="wa-feature-item">
                                    <span className="wa-check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg></span>
                                    Document sharing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatsappStrategy;
