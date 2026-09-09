import React from 'react';

const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0, marginTop: '3px' }}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const DoubleArrow = ({ left }) => (
    <div className="wlp-model-arrow" style={{ position: 'absolute', top: '75px', left: left, transform: 'translate(-50%, -50%)', zIndex: 1, backgroundColor: '#f8fafc', padding: '0 10px' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
        </svg>
    </div>
);

const PartnershipModelSection = () => {
    return (
        <section className="wlp-model-section" style={{ backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left Column */}
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="wlp-model-text">
                            <span className="wlp-badge-blue">A PARTNERSHIP MODEL THAT WORKS</span>
                            <h2 className="wlp-model-h2" style={{ fontWeight: '700' }}>You Win the Client.<br/>We Power the Delivery.</h2>
                            <p className="wlp-model-p">
                                You bring the opportunities. We bring the expertise. Together, we create exceptional digital experiences that help your clients grow — and your business too.
                            </p>
                            <div className="wlp-handwritten-container" style={{ position: 'relative', marginTop: '20px' }}>
                                <div className="wlp-handwritten" style={{ transform: 'rotate(-5deg)', textAlign: 'center', marginLeft: '40px' }}>
                                    Better<br/>Businesses<br/>Together
                                </div>
                                <svg style={{ position: 'absolute', top: '10px', right: '-30px', transform: 'rotate(-10deg)' }} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 22C10 20 18 10 20 4"/>
                                    <polyline points="14 4 20 4 20 10"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-7 pl-lg-5">
                        <div className="wlp-model-diagram">
                            <div className="row position-relative w-100" style={{ margin: 0 }}>
                                
                                {/* Connecting Background Line */}
                                <div style={{ position: 'absolute', top: '75px', left: '16%', right: '16%', height: '2px', backgroundColor: '#dbeafe', zIndex: 0 }}></div>

                                {/* Arrows on the line */}
                                <DoubleArrow left="33%" />
                                <DoubleArrow left="66%" />

                                {/* Step 1 */}
                                <div className="col-4 d-flex flex-column align-items-center" style={{ zIndex: 2 }}>
                                    <div className="wlp-step-circle light-blue" style={{ width: '150px', height: '150px', backgroundColor: '#eff6ff', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 4px #fff, 0 10px 30px rgba(0,0,0,0.05)', marginBottom: '15px' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                                            <line x1="12" y1="18" x2="12" y2="22"/>
                                            <line x1="8" y1="6" x2="16" y2="6"/>
                                            <line x1="8" y1="10" x2="16" y2="10"/>
                                            <line x1="8" y1="14" x2="16" y2="14"/>
                                        </svg>
                                    </div>
                                    <h5 className="wlp-step-title" style={{ fontFamily: 'Montserrat', fontSize: '15px', fontWeight: '900', color: '#0f172a', marginBottom: '24px' }}>YOUR AGENCY</h5>
                                    
                                    <ul className="wlp-step-list text-start" style={{ listStyle: 'none', padding: 0, width: '100%', maxWidth: '170px' }}>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Get clients</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Manage relationship</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Set the strategy</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', display: 'flex' }}><CheckIcon/> <span>Focus on growth</span></li>
                                    </ul>
                                </div>

                                {/* Step 2 */}
                                <div className="col-4 d-flex flex-column align-items-center" style={{ zIndex: 2 }}>
                                    <div className="wlp-step-circle dark-blue" style={{ width: '170px', height: '170px', backgroundColor: '#0f172a', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(37, 99, 235, 0.4)', marginTop: '-10px', marginBottom: '15px' }}>
                                        <div style={{ fontSize: '60px', lineHeight: '1', color: '#60a5fa', filter: 'drop-shadow(0 0 10px rgba(96,165,250,0.5))' }}>∞</div>
                                        <div style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '900', color: '#fff', letterSpacing: '1px', marginBottom: '4px' }}>WE ALLL</div>
                                        <div style={{ fontSize: '8px', color: '#94a3b8', letterSpacing: '1px' }}>BEHIND THE SCENES</div>
                                    </div>
                                    <h5 className="wlp-step-title" style={{ opacity: 0, userSelect: 'none', marginBottom: '24px' }}>HIDDEN</h5>
                                    
                                    <ul className="wlp-step-list text-start" style={{ listStyle: 'none', padding: 0, width: '100%', maxWidth: '170px' }}>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Plan & execute</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Design, develop & market</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Maintain quality</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', display: 'flex' }}><CheckIcon/> <span>Deliver on time</span></li>
                                    </ul>
                                </div>

                                {/* Step 3 */}
                                <div className="col-4 d-flex flex-column align-items-center" style={{ zIndex: 2 }}>
                                    <div className="wlp-step-circle light-purple" style={{ width: '150px', height: '150px', backgroundColor: '#fdf4ff', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 4px #fff, 0 10px 30px rgba(0,0,0,0.05)', marginBottom: '15px' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                            <circle cx="9" cy="7" r="4"/>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                        </svg>
                                    </div>
                                    <h5 className="wlp-step-title" style={{ fontFamily: 'Montserrat', fontSize: '15px', fontWeight: '900', color: '#0f172a', marginBottom: '24px' }}>YOUR CLIENT</h5>
                                    
                                    <ul className="wlp-step-list text-start" style={{ listStyle: 'none', padding: 0, width: '100%', maxWidth: '170px' }}>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Happy clients</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Great results</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', marginBottom: '10px', display: 'flex' }}><CheckIcon/> <span>Long-term relationship</span></li>
                                        <li style={{ fontSize: '12px', color: '#475569', display: 'flex' }}><CheckIcon/> <span>Your brand gets stronger</span></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PartnershipModelSection;
