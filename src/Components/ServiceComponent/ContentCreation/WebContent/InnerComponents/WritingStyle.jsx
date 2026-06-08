import React, { useState } from 'react';
import './writing-style.css';

const WritingStyle = () => {
    // Generate some random floating chars for background
    const chars = ['A', '✎', '¶', '❝', 'Aa', 'B', '✍', 'T', '❞', '§'];
    const floatingElements = chars.map((char, i) => ({
        char,
        left: Math.random() * 100 + '%',
        delay: Math.random() * 5 + 's',
        duration: 10 + Math.random() * 10 + 's'
    }));

    const styles = [
        {
            title: "Formal",
            icon: "💼",
            desc: "Expert, authoritative, and corporate-ready content designed for B2B industries.",
            example: "The quarterly fiscal projections indicate a 15% growth trajectory."
        },
        {
            title: "Semi-Formal",
            icon: "📚",
            desc: "Professional yet accessible. Perfect for educational blogs, guides, and informative articles.",
            example: "Here’s how you can improve your writing skills in three simple steps."
        },
        {
            title: "Simple",
            icon: "✅",
            desc: "Clear, concise, and jargon-free. Best for general audiences and quick readability.",
            example: "We make it easy to understand complex topics."
        },
        {
            title: "Technical",
            icon: "⚙️",
            desc: "Deeply detailed and precise content for software, engineering, and specialized fields.",
            example: "The API endpoint utilizes OAuth 2.0 for secure authentication."
        },
        {
            title: "Storytelling",
            icon: "🎭",
            desc: "Engaging narratives that hook readers emotionally. Great for features and brand stories.",
            example: "It was a cold morning when the idea finally struck him..."
        }
    ];

    return (
        <section className="writing-style-section">
            <div className="style-bg-anim">
                {floatingElements.map((el, index) => (
                    <div
                        key={index}
                        className="floating-char"
                        style={{
                            left: el.left,
                            animationDelay: el.delay,
                            animationDuration: el.duration
                        }}
                    >
                        {el.char}
                    </div>
                ))}
            </div>

            <div className="container">
                <div className="style-header">
                    <h2>Mastery of <span style={{ color: '#fdb914' }}>Tone & Style</span></h2>
                    <p>We don't just write; we adapt. Choose the voice that fits your brand perfection.</p>
                </div>

                <div className="styles-3d-container">
                    {styles.map((style, index) => {
                        // Calculate rotation for pseudo-3D arch effect
                        // 0: -20deg, 1: -10deg, 2: 0deg, 3: 10deg, 4: 20deg
                        const rotate = (index - 2) * 10;
                        const translateY = Math.abs(index - 2) * 10; // Center is highest

                        return (
                            <div
                                className="style-card-3d"
                                key={index}
                                style={{
                                    transform: `perspective(1000px) rotateY(${rotate}deg) translateY(${translateY}px)`
                                }}
                            >
                                <div className="card-icon-3d">{style.icon}</div>
                                <h3 className="card-title-3d">{style.title}</h3>
                                <p className="card-desc-3d">{style.desc}</p>
                                <div className="card-example-box">
                                    <span className="example-label">Output:</span>
                                    <div className="example-text">"{style.example}"</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WritingStyle;
