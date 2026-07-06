import React from 'react';
import './press-release.css';
const confImg = mediaUrl("assets/images/pe-confidence.png");
import { mediaUrl } from "../../../../../config/media";

const PrConfidence = () => {
    return (
        <section className="pr-confidence-sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <h2 className="pr-conf-title">Inspire <span className="pr-gradient-text">Global Confidence</span></h2>
                        <p className="pr-conf-desc">
                            Content featured in the right channels does more than announce your brand—it creates trust, boosts awareness, and delivers measurable sales impact through powerful communication.
                        </p>

                        <div className="pr-conf-grid">
                            <div className="pr-conf-item">
                                <div className="pr-conf-item-icon">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <h4>Reach Your Target Audience</h4>
                                <p>Content published on high-traffic news sites works like a landing page, attracting a warm, informed audience to your website.</p>
                            </div>
                            
                            <div className="pr-conf-item">
                                <div className="pr-conf-item-icon">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <h4>Influence Purchase Decisions</h4>
                                <p>Being featured in trusted publications provides the final touch that influences customers who are at the decision-making stage.</p>
                            </div>

                            <div className="pr-conf-item">
                                <div className="pr-conf-item-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h4>Rank Higher on Google</h4>
                                <p>Backlinks from authoritative news sites boost your website's SEO strength and make you more visible in search engines.</p>
                            </div>

                            <div className="pr-conf-item">
                                <div className="pr-conf-item-icon">
                                    <i className="fas fa-coins"></i>
                                </div>
                                <h4>Increase Your Sales</h4>
                                <p>Content with real news value, not perceived as advertising, builds trust and translates to higher conversion rates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="pr-conf-image">
                            <img src={confImg} alt="Inspire Confidence" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrConfidence;
