import React from 'react';
import './blog-quality.css';

const BlogQuality = () => {
    const tones = [
        "Conversational & Friendly",
        "Professional & Business",
        "Technical & Detailed",
        "Storytelling & Engaging",
        "Simple & Easy-to-Understand",
        "Persuasive & Marketing-Oriented"
    ];

    const qualityChecks = [
        "100% Original Content",
        "Plagiarism-Free Writing",
        "Grammar & Spelling Checked",
        "Proper Structure & Flow",
        "Reader-Friendly Formatting",
        "Strong Hook + Valuable Information",
        "Clear CTA (Call-to-Action)"
    ];

    return (
        <section className="blog-quality-section">
            <div className="container">
                <div className="blog-quality-header text-center">
                    <h2>Writing Style & <span style={{ color: '#fdb914' }}>Quality</span></h2>
                    <p>Your blog should sound like your business. I write in multiple tones and styles based on your niche and target audience.</p>
                </div>

                <div className="tones-wrapper">
                    <div className="tones-grid">
                        {tones.map((tone, index) => (
                            <div className="tone-chip" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                                {tone}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="quality-standards-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <h3>Quality Assurance</h3>
                            <p style={{ marginBottom: 0, color: '#666' }}>The goal is simple: write blogs that people enjoy reading and Google loves ranking.</p>
                        </div>
                        <div className="col-lg-8">
                            <div className="quality-list">
                                {qualityChecks.map((item, index) => (
                                    <div className="quality-item" key={index}>
                                        <div className="quality-check">✔</div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogQuality;
