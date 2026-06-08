import React from 'react';
import { motion } from 'framer-motion';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const ContentMarketingWhy = () => {
    return (
        <section className="cm-why-section py-5 cm-dark-bg position-relative border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <BannerComponent />
            <div className="container py-5 z-2 position-relative">

                <div className="text-center mb-5 pb-4">
                    <motion.h2
                        className="cm-section-title"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why <span className="cm-title-gradient">Content Marketing</span> Matters
                    </motion.h2>
                    <p className="cm-text-muted mx-auto" style={{ maxWidth: '700px' }}>
                        Transforming audiences into advocates through strategic, value-driven storytelling and high-impact placement.
                    </p>
                </div>

                <div className="cm-ambient-orb" style={{ top: '30%' }}></div>

                <div className="row g-4 align-items-stretch">

                    {/* Card 1 */}
                    <div className="col-lg-4 col-md-6">
                        <motion.div
                            className="cm-premium-grid-card"
                            style={{ '--card-glow': '#00f2fe' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="cm-card-num">01</span>
                            <div className="cm-premium-icon-box">
                                <i className="fa-solid fa-gem"></i>
                            </div>
                            <h4 className="cm-premium-title">Genuine Value Creation</h4>
                            <p className="cm-premium-text">
                                Unlike traditional forms of advertisements, today's consumers wish to be provided with something which holds value. Strategic content marketing aims to alleviate the gap that exists between your brand and the audience by offering content that is not only relevant but also engaging.
                            </p>
                            <div className="cm-premium-border-glow"></div>
                        </motion.div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-lg-4 col-md-6">
                        <motion.div
                            className="cm-premium-grid-card"
                            style={{ '--card-glow': '#b026ff' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="cm-card-num">02</span>
                            <div className="cm-premium-icon-box">
                                <i className="fa-solid fa-network-wired"></i>
                            </div>
                            <h4 className="cm-premium-title">Omnichannel Influence</h4>
                            <p className="cm-premium-text">
                                Be it blog posts, video content, newsletters, or even infographics, each piece of content serves as a dynamic asset to inform, influence, and permanently convert audiences across targeted platforms.
                            </p>
                            <div className="cm-premium-border-glow"></div>
                        </motion.div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-lg-4 col-md-6">
                        <motion.div
                            className="cm-premium-grid-card"
                            style={{ '--card-glow': '#fdb914' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="cm-card-num">03</span>
                            <div className="cm-premium-icon-box">
                                <i className="fa-solid fa-fingerprint"></i>
                            </div>
                            <h4 className="cm-premium-title">Bespoke Strategies</h4>
                            <p className="cm-premium-text">
                                We know that every brand has its uniqueness and so does the audience for it. Our approach drops the one-size-fits-all model. We develop customized architectures explicitly mapping to your brand voice and ultimate business objectives.
                            </p>
                            <div className="cm-premium-border-glow"></div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContentMarketingWhy;
