import React from 'react';
import './video-marketing.css';
import showreel from '../../../../../assets/Video/px-showreel.mp4';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const VideoShowcase = () => {
    return (
        <section className="vm-section-dark" style={{ paddingBottom: '0' }}>

            <BannerComponent />

            <div className="container">
                <div className="vm-header dark mb-5 text-center">
                    <h2>See Our Work in <span className="highlight-gradient-orange">Action</span></h2>
                    <p>Experience the quality and creativity we bring to every project.</p>
                </div>
            </div>

            <div className="vm-showcase-wrapper">
                <div className="container-fluid p-0">
                    <div className="vm-video-container">
                        <video
                            className="vm-showcase-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={showreel} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="vm-video-overlay"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
