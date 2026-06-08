import React from "react";
import "./platforms-we-manage.css";
// Importing icons
import fb_icon from "../../../../../assets/images/fb_icon.png";
import insta_icon from "../../../../../assets/images/insta_icon.png";
import twitter_icon from "../../../../../assets/images/twitter_icon.png";
import youtube_icon from "../../../../../assets/images/youtube_icon.png";
import linkedin_icon from "../../../../../assets/images/linkedin_icon.png";
import pinterest_icon from "../../../../../assets/images/pinterest_icon.png";

const PlatformsWeManage = () => {
    return (
        <section className="aurora-manage-section">
            {/* Dynamic Animated Background */}
            <div className="aurora-bg">
                <div className="aurora a-1"></div>
                <div className="aurora a-2"></div>
                <div className="aurora a-3"></div>
            </div>

            <div className="container aurora-container">
                <div className="aurora-header">
                    <h2>Platforms We Manage</h2>
                    <p>
                        Commanding your presence across the digital universe with absolute precision.
                    </p>
                </div>

                {/* 2D Constellation System */}
                <div className="constellation-wrapper">
                    
                    {/* Core Hub */}
                    <div className="constellation-core">
                        <div className="core-orb"></div>
                        <div className="core-glass">
                            <span>We Alll<br />Social Hub</span>
                        </div>
                    </div>

                    {/* Track 1: Fast Spin, Clockwise */}
                    <div className="orbit-track track-1" style={{ "--speed": "35s", width: "380px", height: "380px" }}>
                        <div className="planet" style={{ "--orbit-deg": "0deg", "--radius": "-190px", "--brand-color": "#1877F2" }}>
                            <div className="planet-counter">
                                <div className="planet-glass">
                                    <img src={fb_icon} alt="Facebook" />
                                    <span>Facebook</span>
                                </div>
                            </div>
                        </div>
                        <div className="planet" style={{ "--orbit-deg": "180deg", "--radius": "-190px", "--brand-color": "#FF0000" }}>
                            <div className="planet-counter">
                                <div className="planet-glass">
                                    <img src={youtube_icon} alt="YouTube" />
                                    <span>YouTube</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Track 2: Medium Spin, Counter-Clockwise */}
                    <div className="orbit-track track-2 reverse" style={{ "--speed": "45s", width: "560px", height: "560px" }}>
                        <div className="planet" style={{ "--orbit-deg": "90deg", "--radius": "-280px", "--brand-color": "#C13584" }}>
                            <div className="planet-counter">
                                <div className="planet-glass">
                                    <img src={insta_icon} alt="Instagram" />
                                    <span>Instagram</span>
                                </div>
                            </div>
                        </div>
                        <div className="planet" style={{ "--orbit-deg": "270deg", "--radius": "-280px", "--brand-color": "#0A66C2" }}>
                            <div className="planet-counter">
                                <div className="planet-glass">
                                    <img src={linkedin_icon} alt="LinkedIn" />
                                    <span>LinkedIn</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Track 3: Slow Spin, Clockwise */}
                    <div className="orbit-track track-3" style={{ "--speed": "60s", width: "740px", height: "740px" }}>
                        <div className="planet" style={{ "--orbit-deg": "45deg", "--radius": "-370px", "--brand-color": "#1DA1F2" }}>
                            <div className="planet-counter">
                                <div className="planet-glass">
                                    <img src={twitter_icon} alt="Twitter" />
                                    <span>Twitter</span>
                                </div>
                            </div>
                        </div>
                        <div className="planet" style={{ "--orbit-deg": "225deg", "--radius": "-370px", "--brand-color": "#E60023" }}>
                            <div className="planet-counter">
                                <div className="planet-glass">
                                    <img src={pinterest_icon} alt="Pinterest" />
                                    <span>Pinterest</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile Fallback Grid (Glassmorphic) */}
                <div className="pm-mobile-grid">
                    <div className="pm-mobile-card" style={{ "--brand-color": "#1877F2" }}>
                        <img src={fb_icon} alt="Facebook" />
                        <h4>Facebook</h4>
                    </div>
                    <div className="pm-mobile-card" style={{ "--brand-color": "#C13584" }}>
                        <img src={insta_icon} alt="Instagram" />
                        <h4>Instagram</h4>
                    </div>
                    <div className="pm-mobile-card" style={{ "--brand-color": "#0A66C2" }}>
                        <img src={linkedin_icon} alt="LinkedIn" />
                        <h4>LinkedIn</h4>
                    </div>
                    <div className="pm-mobile-card" style={{ "--brand-color": "#FF0000" }}>
                        <img src={youtube_icon} alt="YouTube" />
                        <h4>YouTube</h4>
                    </div>
                    <div className="pm-mobile-card" style={{ "--brand-color": "#1DA1F2" }}>
                        <img src={twitter_icon} alt="Twitter" />
                        <h4>Twitter</h4>
                    </div>
                    <div className="pm-mobile-card" style={{ "--brand-color": "#E60023" }}>
                        <img src={pinterest_icon} alt="Pinterest" />
                        <h4>Pinterest</h4>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlatformsWeManage;
