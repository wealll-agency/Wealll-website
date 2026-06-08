import React from 'react';
import './email-campaigns.css';
import magic_reach from "../../../../../assets/images/magic_reach.png";
import magic_engage from "../../../../../assets/images/magic_engage.png";
import magic_grow from "../../../../../assets/images/magic_grow.png";

const EmailCampaigns = () => {
    return (
        <section className="email-campaigns-section">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="top-title">
                        <h2>
                            Our <b>Email Marketing</b> Magic
                        </h2>
                    </div>
                </div>

                <div className="row justify-content-center mb-5 email-magic-row">
                    <div className="col-md-4 mb-4">
                        <div className="email-magic-card">
                            <div className="email-magic-icon-wrapper">
                                <img src={magic_reach} alt="Targeted Segmentation" />
                            </div>
                            <h3>Targeted Segmentation</h3>
                            <p>
                                We don't guess; we know. We slice and dice your audience to ensure every email hits the right inbox with relevant content.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="email-magic-card">
                            <div className="email-magic-icon-wrapper">
                                <img src={magic_engage} alt="Automated Perfection" />
                            </div>
                            <h3>Automated Perfection</h3>
                            <p>
                                From welcome series to abandoned cart recovery, our flows run 24/7, nurturing leads while you sleep.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="email-magic-card">
                            <div className="email-magic-icon-wrapper">
                                <img src={magic_grow} alt="High-Converting Copy" />
                            </div>
                            <h3>High-Converting Copy</h3>
                            <p>
                                Subject lines that get opened. Body copy that gets read. CTAs that get clicked. We write words that sell.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailCampaigns;
