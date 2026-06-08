import React from 'react';
import '../corporate-films.css';

const CorpStrategicPlanning = () => {
    const steps = [
        { title: "Target Audience Research" },
        { title: "Corporate Positioning Analysis" },
        { title: "Message Architecture Planning" },
        { title: "Interview Question Development" },
        { title: "Scriptwriting & Storyboarding" },
        { title: "Narrative Flow Structuring" }
    ];

    return (
        <section className="corp-section corp-section-darker">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="corp-badge">Strategic Planning</span>
                    <h2 className="corp-title">Structured Storytelling Backed by <span>Marketing Strategy</span></h2>
                    <p className="corp-desc mx-auto">
                        Unlike traditional production houses, we integrate digital marketing intelligence into every corporate film. Every corporate film is carefully structured to align with your brand goals and communication objectives.
                    </p>
                </div>

                <div className="strategy-steps-modern">
                    {steps.map((step, index) => (
                        <div className="strategy-step-item" key={index}>
                            <div className="step-number-bg">0{index + 1}</div>
                            <h4>{step.title}</h4>
                            <div style={{ marginTop: '15px', height: '3px', width: '30px', background: '#fdb914' }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorpStrategicPlanning;
