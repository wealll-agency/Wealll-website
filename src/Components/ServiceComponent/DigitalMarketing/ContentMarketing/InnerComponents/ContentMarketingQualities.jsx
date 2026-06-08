import React from 'react';
import { motion } from 'framer-motion';
// We re-use the precise classes from 360 Marketing for exact duplication
import '../../VideoMarketing/InnerComponents/marketing360-dark.css';

const frameworkSteps = [
    { step: "01", name: "Experienced", title: "Content Writers", color: "#00f2fe", position: "top" },
    { step: "02", name: "End-to-end", title: "Marketing Solutions", color: "#4facfe", position: "bottom" },
    { step: "03", name: "Competitive", title: "Pricing Structure", color: "#b026ff", position: "top" },
    { step: "04", name: "Audience", title: "Specific Tone", color: "#ff4b4b", position: "bottom" },
    { step: "05", name: "Organic", title: "Ranking Focus", color: "#00f2fe", position: "top" }
];

const ContentMarketingQualities = () => {
    return (
        <section className="mk360-framework-section py-4 position-relative cm-dark-bg">
            <div className="container position-relative z-2 py-5">
                <div className="text-center mb-5 pb-5">
                    <h2 className="mk360-section-title mb-3 text-white">
                        Qualities That Make Us The Top <br /><span className="mk360-title-gradient">Content Marketing Company</span>
                    </h2>
                    <p className="mk360-text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Get content of unmatched quality that ranks organically and addresses your user's interests in the best possible way.
                    </p>
                </div>

                {/* Horizontal Glowing Timeline Ribbon */}
                <div className="mk360-timeline-ribbon-container pb-5">
                    {/* The glowing track */}
                    <div className="ribbon-track"></div>

                    <div className="row g-0 position-relative w-100">
                        {frameworkSteps.map((item, idx) => (
                            <div className="col ribbon-col text-center" key={idx}>
                                {/* Connecting Node */}
                                <div className="ribbon-node" style={{ backgroundColor: item.color, boxShadow: `0 0 20px ${item.color}` }}>
                                    <span className="node-number">{item.step}</span>
                                </div>

                                {/* Alternating Content Cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: item.position === 'top' ? -30 : 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                                    className={`ribbon-card card-${item.position}`}
                                    style={{ borderTopColor: item.position === 'top' ? item.color : 'transparent', borderBottomColor: item.position === 'bottom' ? item.color : 'transparent' }}
                                >
                                    <h5 className="ribbon-name">{item.name}</h5>
                                    <p className="ribbon-title">{item.title}</p>
                                </motion.div>

                                {/* Stem connector */}
                                <div className={`ribbon-stem stem-${item.position}`}></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContentMarketingQualities;
