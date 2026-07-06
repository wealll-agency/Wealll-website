import React from 'react';
import '../corporate-films.css';
const commercialPoster = mediaUrl("assets/images/commercial_poster.jpg");
const aboutVideo = mediaUrl("assets/Video/WEALLL.mp4");
import BannerComponent from '../../../CommonComponents/BannerComponent';
import { mediaUrl } from "../../../../../config/media";

const CorpBrandStory = () => {
    return (
        <section className="corp-section">
            <BannerComponent />
            <div className="container">
                <div className="brand-story-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="corp-badge">Brand Story</span>
                            <h2 className="corp-title">Tell Your Brand Story with <span>Clarity and Impact</span></h2>
                            <p className="corp-desc">
                                Every successful company has a story &mdash; how it started, what it stands for, and where it is heading. We create professionally structured corporate brand films that communicate your mission, values, and long-term vision in a compelling and authentic way.
                            </p>

                            <h4 className="mb-4 text-white">Our Corporate Brand Story Films include:</h4>
                            <ul className="story-list-modern">
                                <li><i className="bi bi-camera-reels"></i> Vision & Mission Films</li>
                                <li><i className="bi bi-person-video2"></i> Leadership Message Videos</li>
                                <li><i className="bi bi-graph-up-arrow"></i> Company Journey & Growth Stories</li>
                                <li><i className="bi bi-stars"></i> Brand Evolution Films</li>
                                <li><i className="bi bi-trophy"></i> Milestone Celebration Films</li>
                            </ul>

                            <p className="mt-4" style={{ color: '#fdb914', fontWeight: 500 }}>
                                We focus on storytelling that builds emotional connection while reinforcing your strategic positioning in the market.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="brand-story-video-container">
                                <video autoPlay loop muted playsInline poster={commercialPoster} preload="metadata">
                                    <source src={aboutVideo} type="video/mp4" />
                                </video>
                                <div className="brand-story-video-overlay"></div>
                                <div className="play-btn-glow">
                                    <i className="bi bi-play-fill"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorpBrandStory;
