import React from 'react';
import './logo-process.css';

const LogoProcess = () => {
    const steps = [
        {
            id: "01",
            title: "Immersion",
            desc: "We deep-dive into your brand universe.",
            icon: "🌌"
        },
        {
            id: "02",
            title: "Ideation",
            desc: "Sparks fly as we sketch raw concepts.",
            icon: "⚡"
        },
        {
            id: "03",
            title: "Creation",
            desc: "Forging the chosen path in vector precision.",
            icon: "🔥"
        },
        {
            id: "04",
            title: "Refinement",
            desc: "Polishing details for maximum impact.",
            icon: "💎"
        },
        {
            id: "05",
            title: "Launch",
            desc: "Your brand identity, ready to conquer.",
            icon: "🚀"
        }
    ];

    return (
        <section className="logo-process-section">
            <div className="container">
                <div className="process-header">
                    <h2>The <span className="neon-text">Neon Roadmap</span></h2>
                    <p>A guided journey from abstract thought to concrete brand identity.</p>
                </div>

                <div className="roadmap-container">
                    <div className="neon-path-line"></div>

                    <div className="roadmap-steps">
                        {steps.map((step, index) => (
                            <div className="roadmap-step" key={index}>
                                <div className="step-bead">
                                    <div className="bead-core"></div>
                                    <div className="bead-glow"></div>
                                </div>
                                <div className={`step-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="step-number">{step.id}</div>
                                    <div className="step-icon">{step.icon}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                    <div className="card-shine"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoProcess;
