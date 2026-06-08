import React from 'react';
import './presentation.css';

const PresentationStrategy = () => {
    const strategies = [
        {
            num: "01",
            title: "Audience & Target Analysis",
            desc: "We research who you are speaking to, ensuring the message resonates and drives action.",
            icon: "🔍"
        },
        {
            num: "02",
            title: "Clear Storytelling Framework",
            desc: "Every pitch needs a beginning, middle, and an impactful end. We build that narrative.",
            icon: "📖"
        },
        {
            num: "03",
            title: "Persuasive Copywriting & Sequencing",
            desc: "Logical slide sequencing combined with compelling copy that keeps the audience hooked.",
            icon: "✍️"
        },
        {
            num: "04",
            title: "High-End Visual Design",
            desc: "Custom graphics, infographics, and typography that elevate your brand's authority.",
            icon: "✨"
        }
    ];

    return (
        <section className="presentation-section" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
            <div className="presentation-bg-glow glow-center"></div>
            <div className="container">
                <div className="presentation-header text-center mb-5">
                    <h2>Presentation <span className="holo-text">Strategy & Approach</span></h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#aaa' }}>
                        We don't just design slides. We build persuasive presentation systems that drive decisions. Our goal is simple: make your message powerful, clear, and convincing.
                    </p>
                </div>

                <div className="cyber-pipeline-container mt-5">
                    <div className="cyber-pipeline-core-line"></div>

                    {strategies.map((step, index) => (
                        <div className={`cyber-pipeline-step ${index % 2 === 0 ? 'left-step' : 'right-step'}`} key={index}>
                            <div className="cyber-pipeline-content">
                                <div className="cyber-pipeline-glass-card">
                                    <div className="cyber-card-glow-edge"></div>
                                    <div className="cyber-card-number">{step.num}</div>
                                    <div className="cyber-card-inner">
                                        <div className="cyber-icon">{step.icon}</div>
                                        <div className="cyber-text">
                                            <h3>{step.title}</h3>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cyber-pipeline-node">
                                <div className="cyber-node-core"></div>
                                <div className="cyber-node-pulse"></div>
                            </div>
                            <div className="cyber-pipeline-connector"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PresentationStrategy;
