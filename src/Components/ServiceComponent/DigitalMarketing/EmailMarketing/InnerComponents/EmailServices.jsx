import React from 'react';
import './email-services.css';
const icon_monitoring = mediaUrl("assets/images/monitor.png");
const icon_ads = mediaUrl("assets/images/ads.png");
const icon_reporting = mediaUrl("assets/images/reporting.png");
const icon_strategies = mediaUrl("assets/images/strategies.png");
import { mediaUrl } from "../../../../../config/media";

const EmailServices = () => {
    return (
        <section className="email-services-section">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="top-title">
                        <h2>
                            Comprehensive <b>Email Strategies</b> <br /> That Deliver Results
                        </h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="email-service-card">
                            <div className="email-service-icon-wrapper">
                                <img src={icon_monitoring} alt="List Management" loading="lazy" />
                            </div>
                            <h3>List Management</h3>
                            <p>
                                Maintaining specific clean, healthy lists. We manage subscriptions, remove inactive users, and ensure high deliverability rates.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="email-service-card">
                            <div className="email-service-icon-wrapper">
                                <img src={icon_ads} alt="Drip Campaigns" loading="lazy" />
                            </div>
                            <h3>Drip Campaigns</h3>
                            <p>
                                Automated sequences that nurture leads over time. delivering value at every step to guide them toward a purchase.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="email-service-card">
                            <div className="email-service-icon-wrapper">
                                <img src={icon_reporting} alt="Analytics & Insight" loading="lazy" />
                            </div>
                            <h3>Analytics & Insight</h3>
                            <p>
                                We track opens, clicks, and conversions to refine strategies constantly. Data-driven decisions for maximum ROI.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="email-service-card">
                            <div className="email-service-icon-wrapper">
                                <img src={icon_strategies} alt="Custom Templates" loading="lazy" />
                            </div>
                            <h3>Custom Templates</h3>
                            <p>
                                Beautiful, responsive email designs that look great on any device and perfectly match your brand's identity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailServices;
