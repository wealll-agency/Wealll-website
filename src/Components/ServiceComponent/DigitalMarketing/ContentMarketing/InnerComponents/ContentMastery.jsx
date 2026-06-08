import React from 'react';
import './ContentMastery.css';

const ContentMastery = () => {
    const steps = [
        {
            id: 1,
            icon: "fa-solid fa-pen-to-square",
            title: "1. SEO Content Writing",
            desc: "Create keyword-optimized content that ranks higher on search engines.",
            link: "View More",
            active: false
        },
        {
            id: 2,
            icon: "fa-solid fa-blog",
            title: "2. Blog & Article Writing",
            desc: "Engage your audience with informative and valuable blog posts.",
            link: "View More",
            active: true // Highlighted card
        },
        {
            id: 3,
            icon: "fa-solid fa-laptop-code",
            title: "3. Website Content Creation",
            desc: "Develop compelling website copy that enhances user experience and conversions.",
            link: "View More",
            active: false
        },
        {
            id: 4,
            icon: "fa-solid fa-chart-pie",
            title: "4. Infographics & Visual Content",
            desc: "Simplify complex information with visually appealing content.",
            link: "View More",
            active: false
        },
        {
            id: 5,
            icon: "fa-solid fa-share-nodes",
            title: "5. Social Media Content",
            desc: "Craft engaging posts to boost your social media presence.",
            link: "View More",
            active: false
        },
        {
            id: 6,
            icon: "fa-solid fa-newspaper",
            title: "6. Press Releases & Newsletters",
            desc: "Strengthen brand authority with strategic PR content.",
            link: "View More",
            active: false
        },
        {
            id: 7,
            icon: "fa-solid fa-video",
            title: "7. Video Content Marketing",
            desc: "Use high-quality video content to increase audience engagement.",
            link: "View More",
            active: false
        },
        {
            id: 8,
            icon: "fa-solid fa-file-pen",
            title: "8. SEO Copywriting",
            desc: "Craft high-quality, SEO-optimized copy that boosts rankings and converts.",
            link: "View More",
            active: false
        },
        {
            id: 9,
            icon: "fa-solid fa-bullhorn",
            title: "9. Digital PR",
            desc: "Strategic Digital PR content that enhances authority and builds trust.",
            link: "View More",
            active: false
        },
        {
            id: 10,
            icon: "fa-solid fa-user-pen",
            title: "10. Guest Posting",
            desc: "Compelling guest posts that strengthen SEO and build valuable backlinks.",
            link: "View More",
            active: false
        }
    ];

    return (
        <section className="content-mastery-section">
            <div className="container">
                <div className="mastery-header text-center animate-fade-up">
                    <div class="top-title"><h2>Your Journey to <span className="mk360-title-gradient">Content Mastery</span></h2></div>
                    <p>A proven, step-by-step framework for sustainable growth.</p>
                </div>

                <div className="row g-4 offer_row">
                    {steps.map((step) => (
                        <div key={step.id} className="col-lg-3 col-md-6 col-sm-12">
                            <div className="fleu-card">
                                <div className="fleu-icon-wrapper">
                                    <div className="ripple-bg"></div>
                                    <i className={step.icon}></i>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                                <a href="#" className="btn-get-started">
                                    {step.link}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentMastery;
