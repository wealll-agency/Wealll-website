import React, { useState } from 'react';
import './script-styles.css';

const ScriptStyles = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tones = [
        {
            title: "Storytelling / Emotional",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            ),
            scriptTitle: "THE JOURNEY",
            scriptMeta: "EMOTIONAL_HOOK.DOC",
            pill1: "Core Memory",
            pill2: "Soft Piano BG"
        },
        {
            title: "Funny / Casual",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M9 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" /></svg>
            ),
            scriptTitle: "SKIT_INTRO",
            scriptMeta: "COMEDY_GOLD_V2.PDF",
            pill1: "Punchline",
            pill2: "Fast Cuts"
        },
        {
            title: "Professional / Corporate",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>
            ),
            scriptTitle: "ANNUAL REPORT",
            scriptMeta: "KEYNOTE_SPEECH.DOCX",
            pill1: "Authority",
            pill2: "Clean Graphics"
        },
        {
            title: "Cinematic / Dramatic",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" /></svg>
            ),
            scriptTitle: "FILM TRAILER",
            scriptMeta: "EPIC_VOICEOVER.FDX",
            pill1: "Suspense",
            pill2: "Sound FX"
        },
        {
            title: "Sales / Persuasive",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M11 2v5.5l-3.5-3.5 8-8H2v17c0 1.1.9 2 2 2h12.5V3H11zm5 11l-3.5 3.5 3.5 3.5V13z" /></svg>
            ),
            scriptTitle: "PRODUCT LAUNCH",
            scriptMeta: "HIGH_CONV_AD.PDF",
            pill1: "Pain Point",
            pill2: "Solution"
        }
    ];

    const activeContent = tones[activeTab];

    return (
        <section className="script-styles-section">
            <div className="container">
                <div className="script-styles-header text-center">
                    <h2>Crafting The <span style={{ color: '#fdb914' }}>Perfect Tone</span></h2>
                    <p>From punchy retention hooks to cinematic storytelling, we adapt our writing style to fit your brand's unique voice.</p>
                </div>

                <div className="row styles-container-row">
                    {/* Left: Interactive Tab Selector */}
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="tone-selector">
                            {tones.map((tone, index) => (
                                <div
                                    className={`tone-item ${activeTab === index ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="tone-icon mr-3" style={{ marginRight: '15px' }}>
                                            {tone.icon}
                                        </div>
                                        <h4>{tone.title}</h4>
                                    </div>
                                    <div className="tone-arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Living Script Visual */}
                    <div className="col-lg-7">
                        <div className="script-visual-wrapper">
                            <div className="floating-element fe-1"></div>
                            <div className="floating-element fe-2"></div>

                            <div className="script-paper" key={activeTab}> {/* Key forces re-render/animation on tab change */}
                                <div className="paper-header">
                                    <div className="paper-title">{activeContent.scriptTitle}</div>
                                    <div className="paper-meta">{activeContent.scriptMeta}</div>
                                </div>
                                <div className="paper-body">
                                    <div className="typewriter-line tw-scene"></div>
                                    <div className="typewriter-line tw-char"></div>
                                    <div className="typewriter-line tw-dialogue"></div>
                                    <div className="typewriter-line tw-dialogue-2"></div>
                                    <div className="typewriter-line tw-char"></div>
                                    <div className="typewriter-line tw-dialogue"></div>
                                    <div className="typewriter-line tw-scene" style={{ marginTop: '30px' }}></div>
                                </div>

                                {/* Floating Pills - Dynamic */}
                                <div className="format-pill fp-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                    {activeContent.pill1}
                                </div>
                                <div className="format-pill fp-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v5h1v-3zm3 12h1v-.5H6v1h1v.5H6v1h3v-4H6v1zm1-9h1V4H6v5h1v-3zm3 12h1v-.5H10v1h1v.5H10v1h3v-4H10v1zm1-9h1V4H10v5h1v-3zM9 10h1v4H9v-4z" /></svg>
                                    Call To Action
                                </div>
                                <div className="format-pill fp-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>
                                    {activeContent.pill2}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScriptStyles;
