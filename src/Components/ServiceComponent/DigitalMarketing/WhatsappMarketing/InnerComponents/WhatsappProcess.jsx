import React from 'react';
import './whatsapp-marketing.css';

const WhatsappProcess = () => {
    return (
        <section className="whatsapp-section">
            <div className="container">
                <div className="whatsapp-header text-center">
                    <h2>The <span className="highlight-gradient-green">Roadmap</span> to Success</h2>
                    <p>Our proven process to launch and scale your WhatsApp marketing campaigns.</p>
                </div>

                <div className="row wa-steps-row justify-content-center">
                    {/* Step 1 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="wa-step-card">
                            <span className="wa-step-number">01</span>
                            <div className="wa-step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                                </svg>
                            </div>
                            <h3>Setup & Verification</h3>
                            <p>We handle the technical setup of your WhatsApp Business API and guide you through the Green Tick verification process.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="wa-step-card">
                            <span className="wa-step-number">02</span>
                            <div className="wa-step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <h3>Strategy Design</h3>
                            <p>We craft message templates, conversation flows, and automation rules tailored to your specific business goals.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="wa-step-card">
                            <span className="wa-step-number">03</span>
                            <div className="wa-step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.5.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                                </svg>
                            </div>
                            <h3>Launch & Automate</h3>
                            <p>We deploy your campaigns and activate chatbots to handle inquiries 24/7, ensuring you never miss a lead.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="wa-step-card">
                            <span className="wa-step-number">04</span>
                            <div className="wa-step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2v-5h2v5z" />
                                </svg>
                            </div>
                            <h3>Analyze & Scale</h3>
                            <p>We monitor delivery, read, and response rates, continuously optimizing messages to maximize your ROI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatsappProcess;
