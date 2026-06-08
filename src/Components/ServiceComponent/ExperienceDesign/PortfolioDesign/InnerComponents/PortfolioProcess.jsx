import React from 'react';
import './portfolio-process.css';

const PortfolioProcess = () => {
    const steps = [
        { num: '01', title: 'Connect', desc: 'We discuss your goals, target audience, and personal brand vibe.', icon: '⚡' },
        { num: '02', title: 'Collect', desc: 'Gathering your best projects, resume data, and visual assets.', icon: '📂' },
        { num: '03', title: 'Blueprint', desc: 'Wireframing the structure to ensure seamless user experience.', icon: '📐' },
        { num: '04', title: 'Craft', desc: 'Designing high-fidelity UI with modern aesthetics and animations.', icon: '🎨' },
        { num: '05', title: 'Build', desc: 'Developing the pixel-perfect, responsive website.', icon: '⚙️' },
        { num: '06', title: 'Launch', desc: 'Deploying your portfolio to the world with final polish.', icon: '🚀' },
    ];

    return (
        <section className="portfolio-process-section">
            <div className="container">
                <div className="process-header">
                    <h2>The <span className="flow-text">Evolution</span></h2>
                    <p>From concept to live reality. A streamlined journey.</p>
                </div>

                <div className="neon-timeline">
                    <div className="center-line"></div>

                    {steps.map((step, index) => (
                        <div className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                            <div className="timeline-content">
                                <div className="crystal-card">
                                    <span className="step-number">{step.num}</span>
                                    <div className="step-icon">{step.icon}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioProcess;
