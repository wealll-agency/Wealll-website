import React from 'react';
import '../exhibition-videos.css';

const ExhibTeaserCampaign = () => {
    const timelines = [
        { title: "Exhibition Announcements", desc: "Build early awareness." },
        { title: "Booth Invitation Videos", desc: "Direct outreach to clients." },
        { title: "Countdown Creatives", desc: "Generating FOMO through daily hype." },
        { title: "Product Reveal Teasers", desc: "Hints at brand new launches." },
        { title: "Speaker Intro Clips", desc: "Highlighting key thought leaders." }
    ];

    return (
        <section className="exhib-section exhib-section-darker">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <span className="exhib-badge">Pre-Event Strategy</span>
                        <h2 className="exhib-title">Create Buzz Before the <span>Exhibition Begins</span></h2>
                        <p className="exhib-desc">
                            Drive traffic to your booth even before the event starts. We create engaging teaser and promotional videos to build anticipation and increase visitor turnout.
                        </p>
                        <div className="mt-4 p-4" style={{ background: 'rgba(253,185,20,0.1)', borderLeft: '4px solid #fdb914', borderRadius: '8px' }}>
                            <h4 style={{ color: '#fdb914', fontSize: '1.2rem' }}>Optimized for Social</h4>
                            <p className="mb-0 text-white" style={{ fontSize: '0.95rem' }}>
                                These videos are specifically formatted for social media grids, stories, and email marketing campaigns to guarantee high open rates.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {/* Neon Timeline Effect */}
                        <div className="teaser-timeline">
                            {timelines.map((item, index) => (
                                <div className="teaser-point" key={index}>
                                    <div className="teaser-dot"></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExhibTeaserCampaign;
