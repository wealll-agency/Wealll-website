import React from 'react';
import './script-services.css';

const ScriptServices = () => {
    const services = [
        {
            title: "YouTube Video Scripts",
            desc: "Engaging, retention-focused scripts tailored for long-form content. We hook the audience early and keep them watching till the end.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
            )
        },
        {
            title: "Shorts / Reels Scripts",
            desc: "Punchy, fast-paced scripts designed for TikTok, Instagram Reels, and YouTube Shorts. Maximum impact in minimum time.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>
            )
        },
        {
            title: "Ad & Promotional Scripts",
            desc: "Persuasive sales copy that drives conversions. Perfect for social media ads, TV commercials, and product launch videos.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.58 1.42l9 9c.36.36.86.58 1.42.58s1.05-.22 1.42-.58l7-7C21.79 12.65 22 12.16 22 11.58c0-.52-.18-1-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                </svg>
            )
        },
        {
            title: "Podcast / Voiceover Scripts",
            desc: "Conversational and natural scripts optimized for audio. Whether it's a podcast episode or a brand voiceover, we strike the right tone.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
            )
        },
        {
            title: "Explainer Video Scripts",
            desc: "Simplify complex ideas. We break down your product or service into an easy-to-understand narrative that educates and sells.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
            )
        },
        {
            title: "Short Film / Story Scripts",
            desc: "Creative storytelling for short films and narrative projects. Compelling characters, dialogue, and plot structures.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                </svg>
            )
        }
    ];

    return (
        <section className="script-services-section">
            <div className="container">
                <div className="script-services-header text-center">
                    <h2>Script Writing <span style={{ color: '#fdb914' }}>Services</span></h2>
                    <p>We write scripts that turn viewers into subscribers and leads.</p>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className="script-service-card">
                                <div className="script-service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScriptServices;
