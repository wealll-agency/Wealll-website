import React from 'react';
import '../exhibition-videos.css';

import post1 from '../../../../../assets/images/portfolio_website5.jpg';
import post2 from '../../../../../assets/images/portfolio_logo6.jpg';
import post3 from '../../../../../assets/images/commercial_cinema.jpg';
import post4 from '../../../../../assets/images/ugc-ads.webp';
import post5 from '../../../../../assets/images/portfolio_app1.jpg';

const ExhibPostEvent = () => {
    return (
        <section className="exhib-section">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="exhib-badge">Post-Event Recap</span>
                    <h2 className="exhib-title">Extend the Impact <span>Beyond the Event</span></h2>
                    <p className="exhib-desc mx-auto">
                        Your exhibition presence shouldn’t end after the event closes. We transform your event footage into powerful recap and promotional content.
                    </p>
                </div>

                {/* Masonry Video Grid */}
                <div className="post-masonry-grid">
                    <div className="masonry-item tall wide" style={{ backgroundImage: `url(${post1})` }}>
                        <div className="masonry-overlay">
                            <div className="masonry-play"><i className="bi bi-play-fill"></i></div>
                            <h4>Professional Event Recap</h4>
                        </div>
                    </div>
                    <div className="masonry-item" style={{ backgroundImage: `url(${post2})` }}>
                        <div className="masonry-overlay">
                            <div className="masonry-play"><i className="bi bi-play-fill"></i></div>
                            <h4>Instagram Reels & Shorts</h4>
                        </div>
                    </div>
                    <div className="masonry-item" style={{ backgroundImage: `url(${post3})` }}>
                        <div className="masonry-overlay">
                            <div className="masonry-play"><i className="bi bi-play-fill"></i></div>
                            <h4>LinkedIn Event Highlights</h4>
                        </div>
                    </div>
                    <div className="masonry-item wide" style={{ backgroundImage: `url(${post4})` }}>
                        <div className="masonry-overlay">
                            <div className="masonry-play"><i className="bi bi-play-fill"></i></div>
                            <h4>YouTube Long-Form Edits</h4>
                        </div>
                    </div>
                    <div className="masonry-item" style={{ backgroundImage: `url(${post5})` }}>
                        <div className="masonry-overlay">
                            <div className="masonry-play"><i className="bi bi-play-fill"></i></div>
                            <h4>Promotional Ad Snippets</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExhibPostEvent;
