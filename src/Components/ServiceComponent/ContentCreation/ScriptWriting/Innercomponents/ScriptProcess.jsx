import React from 'react';
import './script-process.css';

const ScriptProcess = () => {
    const steps = [
        {
            number: "01",
            title: "Understanding Audience",
            desc: "We dive deep into your niche to understand who your viewers are, what they want, and what keeps them watching.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Research & Outline",
            desc: "We structure the video for maximum retention, planning the flow, key points, and payoffs before writing a single word.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "The Hook & Intro",
            desc: "The first 30 seconds are critical. We craft specific hooks that grab attention immediately and promise value.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h2v5zM7 17h10v-2H7v2z" />
                    <path d="M11 6h2v2h-2z" /> {/* Exclamation mark / Bolt replacement idea */}
                </svg>
            )
        },
        {
            number: "04",
            title: "Full Draft & Flow",
            desc: "Writing the full script with a focus on pacing, tone, and engagement. We ensure every sentence earns its place.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
            )
        },
        {
            number: "05",
            title: "Polish & Delivery",
            desc: "Final review for clarity, punchiness, and call-to-action effectiveness. Revisions included to get it perfect.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            )
        }
    ];

    return (
        <section className="script-process-section">
            <div className="container">
                <div className="script-process-title text-center">
                    <h2>Our Script Writing <span className="highlight-gold">Process</span></h2>
                </div>

                <div className="row script-steps-container script-steps-row justify-content-center">
                    {steps.map((step, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className="script-step-card">
                                <span className="script-step-number">{step.number}</span>
                                <div className="script-step-icon">
                                    {step.icon}
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScriptProcess;
