import React from 'react';
import { motion } from 'framer-motion';
const growthImg = mediaUrl("assets/images/growth_image.jpeg");
import { mediaUrl } from "../../../../../config/media";

const ContentMarketingHire = () => {
    return (
        <section className="cm-hire-section py-5 cm-dark-bg position-relative overflow-hidden border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="container py-5 z-2 position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
                        <motion.span
                            className="badge bg-transparent border border-info text-info mb-3 px-3 py-2 rounded-pill"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <i className="fa-solid fa-rocket me-2"></i> Organic Growth
                        </motion.span>
                        <motion.h2
                            className="cm-section-title mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, delay: 0.1 }}
                        >
                            Hire Premier Content Marketing Company in India For <span className="cm-title-gradient">Organic Growth</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, delay: 0.2 }}
                        >
                            <p className="cm-text-muted mb-4">
                                Content is king - and we strongly believe this! Relevant and meaningful content gives way to beautiful user experiences. So, if you want unparalleled content that your readers will love and boost your page traffic then get connected with our team of talented and creative writers.
                            </p>
                            <p className="cm-text-muted mb-4">
                                By following a business-centric approach, our writers produce impactful content that blends perfectly with your brand tone. Content that impresses the readers and convinces them to engage and convert is what you need. Our digital marketing team makes all the difference by building a precise content marketing strategy to fuel your brand and enhance ROI.
                            </p>
                            <button className="cm-btn-outline-glow mt-2">
                                Consult Our Experts <i className="fa-solid fa-arrow-right ms-2"></i>
                            </button>
                        </motion.div>
                    </div>

                    <div className="col-lg-6 position-relative">
                        <motion.div
                            className="cm-cinematic-frame"
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="cm-cinematic-glow"></div>
                            {/* Dummy Image simulating high-end workspace */}
                            <img
                                src={growthImg}
                                alt="Content Marketing Strategy"
                                className="img-fluid cm-cinematic-img"
                            loading="lazy" />

                            {/* Floating Analytics Badges */}
                            <motion.div
                                className="cm-floating-badge badge-1"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <div className="badge-icon bg-success bg-opacity-10 text-success"><i className="fa-solid fa-arrow-trend-up"></i></div>
                                <div>
                                    <h6 className="m-0 text-white fw-bold">+120%</h6>
                                    <small className="text-white-50">Traffic Growth</small>
                                </div>
                            </motion.div>

                            <motion.div
                                className="cm-floating-badge badge-2"
                                animate={{ y: [10, -10, 10] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            >
                                <div className="badge-icon bg-info bg-opacity-10 text-info"><i className="fa-solid fa-users-viewfinder"></i></div>
                                <div>
                                    <h6 className="m-0 text-white fw-bold">95%</h6>
                                    <small className="text-white-50">User Engagement</small>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentMarketingHire;
