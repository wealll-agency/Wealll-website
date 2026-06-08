import React from 'react';
import './research-process.css';

const ResearchProcess = () => {
    return (
        <section className="research-process-section">
            <div className="container">
                <div className="research-header">
                    <h2>Research-Driven <span style={{ color: '#fdb914' }}>Writing</span></h2>
                    <p>Quality articles require strong research. Every article I write is created with proper fact-checking, logical flow, and reliable information.</p>
                </div>

                <div className="research-container">
                    {/* Background Orbits */}
                    <div className="orbit-ring orbit-1"></div>
                    <div className="orbit-ring orbit-2"></div>

                    {/* Central Core */}
                    <div className="research-core">
                        <div className="core-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </div>
                    </div>

                    {/* Satellite Items - Manually Positioned for "Network" look */}

                    {/* Top Left */}
                    <div className="satellite-item sat-1">
                        <div className="sat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                        </div>
                        <h4>Deep Research</h4>
                        <p>In-depth topic study to ensure comprehensive coverage.</p>
                    </div>

                    {/* Top Right */}
                    <div className="satellite-item sat-2">
                        <div className="sat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                        </div>
                        <h4>Fact-Checking</h4>
                        <p>Accuracy verification for all claims and statistics.</p>
                    </div>

                    {/* Bottom Left */}
                    <div className="satellite-item sat-3">
                        <div className="sat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
                        </div>
                        <h4>Source-Based Flow</h4>
                        <p>References included on request for credibility.</p>
                    </div>

                    {/* Bottom Right */}
                    <div className="satellite-item sat-4">
                        <div className="sat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                        </div>
                        <h4>Zero Plagiarism</h4>
                        <p>100% original content written from scratch.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ResearchProcess;
