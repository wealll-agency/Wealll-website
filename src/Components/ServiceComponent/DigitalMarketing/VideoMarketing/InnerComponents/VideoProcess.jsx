import React from 'react';
import './video-marketing.css';

const VideoProcess = () => {
    return (
        <section className="vm-section">
            <div className="container">
                <div className="vm-header text-center">
                    <h2>The <span className="highlight-gradient-orange">Lifecycle</span> of a Viral Video</h2>
                    <p>From concept to screen, we follow a rigorous process to ensure every frame counts.</p>
                </div>

                <div className="row vm-steps-row justify-content-center">
                    {/* Step 1 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="vm-step-card">
                            <span className="vm-step-number">01</span>
                            <div className="vm-step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                                </svg>
                            </div>
                            <h3>Strategy & Scripting</h3>
                            <p>We analyze your brand goals and craft compelling scripts that resonate with your target audience.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="vm-step-card">
                            <span className="vm-step-number">02</span>
                            <div className="vm-step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                                </svg>
                            </div>
                            <h3>Production & Filming</h3>
                            <p>Our expert crew captures high-quality footage using state-of-the-art equipment and lighting techniques.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="vm-step-card">
                            <span className="vm-step-number">03</span>
                            <div className="vm-step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                                </svg>
                            </div>
                            <h3>Editing & VFX</h3>
                            <p>We bring the raw footage to life with seamless editing, color grading, and engaging motion graphics.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="vm-step-card">
                            <span className="vm-step-number">04</span>
                            <div className="vm-step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
                                </svg>
                            </div>
                            <h3>Distribution</h3>
                            <p>We don't just make the video; we ensure it gets seen on the right platforms at the right time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoProcess;
