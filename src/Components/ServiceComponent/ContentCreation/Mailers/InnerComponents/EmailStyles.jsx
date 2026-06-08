import React, { useState } from 'react';
import './email-styles.css';

const EmailStyles = () => {
    const [activeTone, setActiveTone] = useState('Professional');

    // Icons as inline SVGs
    const icons = {
        briefcase: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
        happy: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>,
        cart: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
        bell: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        heart: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    };

    const styles = {
        'Professional': {
            subject: "Meeting Confirmation: Project Kickoff",
            content: "Dear [Name],\n\nI hope this email finds you well.\n\nI am writing to confirm our project kickoff meeting scheduled for Tuesday at 10:00 AM. We have prepared the initial strategy documents and are eager to discuss the next steps.\n\nPlease find the agenda attached. We look forward to a productive session.\n\nBest regards,\n[Your Company]",
            icon: icons.briefcase
        },
        'Friendly': {
            subject: "Hey! Just wanted to check in 👋",
            content: "Hi [Name]!\n\nHope you're having an awesome week!\n\nI just wanted to drop a quick note to see how things are going with the new implementation. If you have any questions or just want to chat about it, I'm here!\n\nLet's catch up soon.\n\nCheers,\n[Your Name]",
            icon: icons.happy
        },
        'Sales': {
            subject: "Unlock 50% More Revenue Today 🚀",
            content: "Hi [Name],\n\nAre you tired of missing out on potential sales?\n\nOur new tool has helped businesses like yours increase revenue by 50% in just 30 days. Don't let this opportunity slip away.\n\nClick below to start your free trial and dominate your market.\n\n[CTA Button]\n\nBest,\nSales Team",
            icon: icons.cart
        },
        'Formal': {
            subject: "Notice: Policy Update",
            content: "Dear Valued Customer,\n\nPlease be advised that effective immediately, we have updated our privacy policy to better protect your data.\n\nWe encourage you to review the changes at your earliest convenience. Your continued use of our services constitutes acceptance of these terms.\n\nSincerely,\nManagement",
            icon: icons.bell
        },
        'Storytelling': {
            subject: "It started with a simple idea...",
            content: "Hi [Name],\n\nFive years ago, we were just two people in a garage with a laptop and a dream. We didn't have funding, connections, or a fancy office.\n\nBut we had one thing: a belief that this industry needed a change.\n\nToday, we're sharing that story because you're a part of it. Here's how we're paying it forward...\n\nWarmly,\nFounder",
            icon: icons.heart
        }
    };

    return (
        <section className="email-styles-section">
            <div className="floating-circle" style={{ top: '-10%', left: '-10%', width: '600px', height: '600px' }}></div>
            <div className="floating-circle" style={{ bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: '#fdb914', opacity: '0.1' }}></div>

            <div className="container">
                <div className="styles-header">
                    <h2>Choose Your <span style={{ color: '#403aff' }}>Voice</span></h2>
                    <p>Experience how different tones reshape your message in our interactive inbox.</p>
                </div>

                <div className="inbox-interface">
                    <div className="inbox-sidebar">
                        <h3>Tone Selector</h3>
                        {Object.keys(styles).map((tone) => (
                            <button
                                key={tone}
                                className={`tone-btn ${activeTone === tone ? 'active' : ''}`}
                                onClick={() => setActiveTone(tone)}
                            >
                                {styles[tone].icon}
                                {tone}
                            </button>
                        ))}
                    </div>

                    <div className="inbox-body">
                        <div className="email-meta">
                            <h3 className="email-subject">{styles[activeTone].subject}</h3>
                            <div className="email-info">
                                <span>From: Your Brand</span>
                                <span>To: Customer</span>
                                <span>Time: Just Now</span>
                            </div>
                        </div>
                        <div className="email-content" key={activeTone}> {/* Key forces re-render for animation */}
                            {styles[activeTone].content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailStyles;
