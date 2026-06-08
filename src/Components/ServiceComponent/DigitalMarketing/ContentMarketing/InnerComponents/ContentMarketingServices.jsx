import React from 'react';
import { motion } from 'framer-motion';

const ContentMarketingServices = () => {
    const nodes = [
        { id: 'creation', title: 'Content Creation', icon: 'fa-solid fa-pen-nib', desc: 'Comprehensive blogs, articles, PRs, video scripts, & case studies.' },
        { id: 'distribution', title: 'Content Dissemination', icon: 'fa-solid fa-share-nodes', desc: 'Distribution across social media, influencers, PRs & email marketing.' },
        { id: 'seo', title: 'SEO Strategy', icon: 'fa-solid fa-magnifying-glass-chart', desc: 'Relevant traffic game plan focusing on improving website rankings.' },
        { id: 'email', title: 'Email Marketing', icon: 'fa-solid fa-envelope-open-text', desc: 'Newsletters and drip campaigns built for progressive audience engagement.' },
        { id: 'paid', title: 'Paid Campaigns', icon: 'fa-solid fa-bullhorn', desc: 'Access key traffic and leads through native and sponsored content.' },
        { id: 'audit', title: 'Audit & Optimization', icon: 'fa-solid fa-chart-line', desc: 'Maintaining high standards through updates and fresh perspectives.' }
    ];

    return (
        <section className="cm-services-section py-5 cm-dark-bg position-relative overflow-hidden border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="container py-5 z-2 position-relative">
                <div className="text-center mb-5 pb-4">
                    <motion.h2 
                        className="cm-section-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Full-Spectrum <br/><span className="cm-title-gradient">Content Marketing Services</span>
                    </motion.h2>
                    <p className="cm-text-muted mx-auto" style={{ maxWidth: '700px' }}>
                        At We Alll, we offer hyper-targeted content marketing services intended for enhancing your online visibility and ROI from all sides.
                    </p>
                </div>

                {/* Cybernetic Core Container */}
                <div className="cm-cyber-core-container position-relative mx-auto mt-5">
                    {/* SVG Connector Lines */}
                    <svg className="cm-core-lines d-none d-lg-block" viewBox="0 0 1000 600">
                        {/* Define glowing streams here via CSS */}
                        <path d="M500,300 L200,100" className="cm-data-link" />
                        <path d="M500,300 L800,100" className="cm-data-link" />
                        <path d="M500,300 L150,300" className="cm-data-link" />
                        <path d="M500,300 L850,300" className="cm-data-link" />
                        <path d="M500,300 L200,500" className="cm-data-link" />
                        <path d="M500,300 L800,500" className="cm-data-link" />
                    </svg>

                    {/* Central Orb */}
                    <div className="cm-core-orb">
                        <div className="cm-core-rings"></div>
                        <h4 className="m-0 text-white fw-bold text-center z-2 position-relative">Content<br/>Ecosystem</h4>
                    </div>

                    {/* Floating Nodes */}
                    <div className="cm-node pos-tl">
                        <div className="cm-node-icon"><i className={nodes[0].icon}></i></div>
                        <h5>{nodes[0].title}</h5>
                        <p>{nodes[0].desc}</p>
                    </div>
                    <div className="cm-node pos-tr">
                        <div className="cm-node-icon"><i className={nodes[1].icon}></i></div>
                        <h5>{nodes[1].title}</h5>
                        <p>{nodes[1].desc}</p>
                    </div>
                    <div className="cm-node pos-ml">
                        <div className="cm-node-icon"><i className={nodes[2].icon}></i></div>
                        <h5>{nodes[2].title}</h5>
                        <p>{nodes[2].desc}</p>
                    </div>
                    <div className="cm-node pos-mr">
                        <div className="cm-node-icon"><i className={nodes[3].icon}></i></div>
                        <h5>{nodes[3].title}</h5>
                        <p>{nodes[3].desc}</p>
                    </div>
                    <div className="cm-node pos-bl">
                        <div className="cm-node-icon"><i className={nodes[4].icon}></i></div>
                        <h5>{nodes[4].title}</h5>
                        <p>{nodes[4].desc}</p>
                    </div>
                    <div className="cm-node pos-br">
                        <div className="cm-node-icon"><i className={nodes[5].icon}></i></div>
                        <h5>{nodes[5].title}</h5>
                        <p>{nodes[5].desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentMarketingServices;
