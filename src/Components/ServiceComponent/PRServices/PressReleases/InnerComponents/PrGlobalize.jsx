import React, { useState } from 'react';
import './press-release.css';
import dashboardImg from '../../../../../assets/images/Hero_Banner_01.webp';

const PrGlobalize = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="pr-globalize-sec">
            <div className="pr-globalize-bg-glow"></div>
            <div className="container">
                <div className="pr-global-content">
                    <h2>Globalize <span className="pr-gradient-text">Your Story</span></h2>
                    <p>
                        Behind every strong brand lies effective communication; we take your story to the world, putting your brand on the radar of key decision-makers and valuable business partners.
                    </p>
                </div>

                <div className="pr-dashboard-mockup">
                    <div className="pr-dashboard-inner" onClick={() => setIsVideoOpen(true)} style={{cursor: 'pointer'}}>
                        <img src={dashboardImg} alt="Press Release Dashboard" />
                        <div className="pr-play-btn">
                            <i className="fas fa-play" style={{marginLeft: '5px'}}></i>
                        </div>
                    </div>
                </div>
            </div>

            {isVideoOpen && (
                <div className="pr-video-modal" onClick={() => setIsVideoOpen(false)}>
                    <div className="pr-video-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="pr-video-close" onClick={() => setIsVideoOpen(false)}>&times;</button>
                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                            <iframe 
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" 
                                title="Press Release Video" 
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PrGlobalize;
