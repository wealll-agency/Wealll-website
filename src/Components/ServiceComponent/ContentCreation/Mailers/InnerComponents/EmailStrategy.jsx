import React from 'react';
import './email-strategy.css';

const EmailStrategy = () => {
    // Icons as inline SVGs
    const icons = {
        magnet: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9v3a6 6 0 0 0 12 0V9M6 9a6 6 0 0 1 12 0M6 9v3a6 6 0 0 0 12 0V9"></path><path d="M10 2v2"></path><path d="M14 2v2"></path></svg>,
        shield: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
        trending: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
        like: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
    };

    const steps = [
        {
            icon: icons.magnet,
            title: "Attention-Grabbing Hooks",
            desc: "We craft subject lines and opening lines that demand attention and stop the scroll."
        },
        {
            icon: icons.shield,
            title: "Value-First Structure",
            desc: "Every email delivers immediate value, building trust before asking for the sale."
        },
        {
            icon: icons.trending,
            title: "Persuasive CTA",
            desc: "Clear, actionable, and psychological triggers that compel users to click."
        },
        {
            icon: icons.like,
            title: "Brand Tone Match",
            desc: "We adapt our writing to perfectly mirror your brand's unique voice and personality."
        }
    ];

    return (
        <section className="email-strategy-section">
            <div className="strategy-bg-field"></div>

            <div className="container">
                <div className="strategy-header">
                    <h2>Neural Funnel <br /><span style={{ fontSize: '0.5em' }}>Optimisation Matrix</span></h2>
                    <p>System Activated</p>
                </div>

                <div className="cyber-spine-container">
                    <div className="cyber-spine-line"></div>

                    {steps.map((step, index) => (
                        <div className="strategy-row" key={index}>
                            {/* The Spacer for the opposite side */}
                            <div style={{ width: '45%' }} className="desktop-spacer"></div>

                            {/* Central Vertebrae Node */}
                            <div className="spine-node"></div>

                            {/* The Card */}
                            <div className="cyber-card">
                                <div className="cyber-card-inner">
                                    <div className="cyber-title">
                                        <span className="cyber-icon">{step.icon}</span>
                                        {step.title}
                                    </div>
                                    <p className="cyber-desc">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmailStrategy;
