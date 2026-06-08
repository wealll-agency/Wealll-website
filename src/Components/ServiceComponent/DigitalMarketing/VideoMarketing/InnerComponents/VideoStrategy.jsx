import React from 'react';
import './video-marketing.css';
import img1 from '../../../../../assets/images/video-thumb-2.webp';
import img2 from '../../../../../assets/images/commercial_studio.jpg';
import img3 from '../../../../../assets/images/commercial_poster.jpg';

const VideoStrategy = () => {
    return (
        <section className="vm-zigzag-section">
            <div className="container">
                <div className="vm-header dark mb-5 text-center">
                    <h2>Our Strategic <span className="highlight-gradient-orange">Directives</span></h2>
                    <p>We don't just shoot video; we engineer visual experiences that drive results.</p>
                </div>

                <div className="vm-zigzag-container">
                    {/* Row 1: Image Left, Content Right */}
                    <div className="row vm-zigzag-row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="vm-zigzag-img-wrapper left-img">
                                <img src={img1} alt="Visual Storytelling" className="img-fluid vm-zigzag-img" />
                                <div className="vm-img-decoration"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vm-zigzag-content pl-lg-4">
                                <div className="vm-zigzag-number">01</div>
                                <h3>Visual Storytelling</h3>
                                <p>We craft narratives that connect emotionaly. Every brand has a story, and we use cinematic techniques to tell yours in a way that leaves a lasting impact on your audience.</p>
                                <ul className="vm-zigzag-list">
                                    <li>Scriptwriting & Storyboarding</li>
                                    <li>Character Development</li>
                                    <li>Emotional Arc Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Content Left, Image Right */}
                    <div className="row vm-zigzag-row align-items-center flex-row-reverse">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="vm-zigzag-img-wrapper right-img">
                                <img src={img2} alt="Multi-Platform Optimization" className="img-fluid vm-zigzag-img" />
                                <div className="vm-img-decoration"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vm-zigzag-content pr-lg-4">
                                <div className="vm-zigzag-number">02</div>
                                <h3>Multi-Platform Optimization</h3>
                                <p>One size does not fit all. We optimize your video content for every platform—YouTube, Instagram Reels, TikTok, LinkedIn—ensuring perfect formatting and maximum reach.</p>
                                <ul className="vm-zigzag-list">
                                    <li>Vertical & Horizontal Cuts</li>
                                    <li>Platform-Specific Captions</li>
                                    <li>Algorithm-Friendly Edits</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Image Left, Content Right */}
                    <div className="row vm-zigzag-row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="vm-zigzag-img-wrapper left-img">
                                <img src={img3} alt="Data-Driven Production" className="img-fluid vm-zigzag-img" />
                                <div className="vm-img-decoration"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vm-zigzag-content pl-lg-4">
                                <div className="vm-zigzag-number">03</div>
                                <h3>Data-Driven Production</h3>
                                <p>We rely on data, not just intuition. By analyzing viewer retention and engagement metrics, we continuously refine our production style to keep your audience watching till the end.</p>
                                <ul className="vm-zigzag-list">
                                    <li>A/B Testing Creatives</li>
                                    <li>Retention Analysis</li>
                                    <li>Conversion Tracking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoStrategy;
