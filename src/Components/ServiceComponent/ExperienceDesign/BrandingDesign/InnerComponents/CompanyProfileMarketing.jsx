import React, { useEffect, useRef, useState } from 'react';
import './branding.css';

const CompanyProfileMarketing = () => {
    const sectionRef = useRef(null);
    const [activeTab, setActiveTab] = useState('investor');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const renderPreviewContent = () => {
        switch (activeTab) {
            case 'investor':
                return (
                    <div className="preview-panel investor-panel active">
                        <div className="pr-header">
                            <i className="bi bi-graph-up-arrow"></i> Investor-Ready Version
                        </div>
                        <div className="pr-content">
                            <div className="pr-chart-box">
                                <div className="pr-bar" style={{ height: '30%' }}></div>
                                <div className="pr-bar" style={{ height: '50%' }}></div>
                                <div className="pr-bar" style={{ height: '90%' }}></div>
                            </div>
                            <div className="pr-lines">
                                <div className="pr-line highlight"></div>
                                <div className="pr-line"></div>
                            </div>
                        </div>
                    </div>
                );
            case 'sales':
                return (
                    <div className="preview-panel sales-panel active">
                        <div className="pr-header">
                            <i className="bi bi-funnel"></i> Client Acquisition Version
                        </div>
                        <div className="pr-content">
                            <div className="pr-services-grid">
                                <div className="prs-box"></div><div className="prs-box"></div>
                                <div className="prs-box"></div><div className="prs-box"></div>
                            </div>
                            <div className="pr-testimonial text-center mt-3">
                                <div className="pr-avatar mx-auto"></div>
                                <div className="pr-line w-50 mx-auto mt-2"></div>
                            </div>
                        </div>
                    </div>
                );
            case 'partnership':
                return (
                    <div className="preview-panel partner-panel active">
                        <div className="pr-header">
                            <i className="bi bi-diagram-3"></i> Partnership Proposal Version
                        </div>
                        <div className="pr-content flex-row align-items-center">
                            <div className="pr-circle-node">Us</div>
                            <div className="pr-connect-line"></div>
                            <div className="pr-circle-node target">You</div>
                        </div>
                        <div className="pr-lines mt-3 text-center">
                            <div className="pr-line mx-auto w-75"></div>
                            <div className="pr-line mx-auto w-50"></div>
                        </div>
                    </div>
                );
            default: return null;
        }
    }

    return (
        <section className="brand-section-padding position-relative fade-in-section" ref={sectionRef}>
            <div className="brand-bg-glow glow-bottom-left"></div>
            <div className="container">
                <div className="text-center mb-5">
                    <p className="brand-accent-text fw-bold mb-2">15. Company Profile for Marketing & Sales Use</p>
                    <h2 className="brand-section-title">Multi-Purpose Company Profile Formats</h2>
                    <p className="brand-section-subtitle mx-auto">
                        We create adaptable versions for different business needs. Your company profile supports business growth.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="multi-version-container">

                            <div className="version-tabs">
                                <div
                                    className={`v-tab ${activeTab === 'investor' ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveTab('investor')}
                                >
                                    <div className="v-tab-icon"><i className="bi bi-graph-up-arrow"></i></div>
                                    <div className="v-tab-text">Investor Version</div>
                                </div>
                                <div
                                    className={`v-tab ${activeTab === 'sales' ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveTab('sales')}
                                >
                                    <div className="v-tab-icon"><i className="bi bi-funnel"></i></div>
                                    <div className="v-tab-text">Sales Version</div>
                                </div>
                                <div
                                    className={`v-tab ${activeTab === 'partnership' ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveTab('partnership')}
                                >
                                    <div className="v-tab-icon"><i className="bi bi-diagram-3"></i></div>
                                    <div className="v-tab-text">Partnership Version</div>
                                </div>
                            </div>

                            <div className="version-preview-area">
                                {renderPreviewContent()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="brand-section-divider"></div>
        </section>
    );
};

export default CompanyProfileMarketing;
