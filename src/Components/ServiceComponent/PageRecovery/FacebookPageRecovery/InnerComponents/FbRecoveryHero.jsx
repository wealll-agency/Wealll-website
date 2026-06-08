import React from 'react';
import { motion } from 'framer-motion';
import './fb-recovery-dark.css';

const problemFramework = [
    { 
        step: "01", 
        title: "Facebook Page Hacked", 
        subtitle: "Malicious actors gain full control of your page and identity.", 
        position: "top" 
    },
    { 
        step: "02", 
        title: "Lost Admin Access", 
        subtitle: "Suddenly finding yourself with no permissions to your own business.", 
        position: "bottom" 
    },
    { 
        step: "03", 
        title: "Removed from BM", 
        subtitle: "Locked out of Meta Business Suite & Business Manager accounts.", 
        position: "top" 
    },
    { 
        step: "04", 
        title: "Illegal Transfers", 
        subtitle: "Unauthorized transfer of ownership to unknown 3rd-party entities.", 
        position: "bottom" 
    },
    { 
        step: "05", 
        title: "Disabled/Restricted", 
        subtitle: "Permanent bans or severe restrictions stopping all ad activities.", 
        position: "top" 
    }
];

const FbRecoveryHero = () => {
    return (
        <section className="fb-dark-bg fb-section-py-100 fb-relative fb-overflow-hidden">
            <div className="container fb-z-2">
                
                {/* Header Section */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <motion.span 
                            className="fb-section-label"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Are You Facing This?
                        </motion.span>
                        <motion.h2 
                            className="fb-hero-title"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            Don't Let A <span className="fb-gradient-text-danger">Hacked Page</span><br/> Kill Your Revenue.
                        </motion.h2>
                        <p className="fb-subtext">If yes, you’re in the right place</p>
                    </div>
                </div>

                {/* Horizontal Ribbon Framework (Growth Framework Style) */}
                <div className="fb-ribbon-container">
                    {/* The glowing track */}
                    <div className="fb-ribbon-track"></div>

                    <div className="row g-0 position-relative w-100">
                        {problemFramework.map((item, idx) => (
                            <div className="col fb-ribbon-col text-center" key={idx}>
                                {/* Node */}
                                <div className="fb-ribbon-node">
                                    <span className="fb-node-number">{item.step}</span>
                                </div>

                                {/* Alternating Cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: item.position === 'top' ? -50 : 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                                    className={`fb-ribbon-card fb-card-${item.position}`}
                                >
                                    <h5 className="fb-ribbon-title">{item.title}</h5>
                                    <p className="fb-ribbon-subtitle">{item.subtitle}</p>
                                </motion.div>

                                {/* Stem connector */}
                                <div className={`fb-ribbon-stem fb-stem-${item.position}`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-5 mb-5 pt-3">
                    <motion.p 
                        style={{ color: 'var(--fb-safe)', fontWeight: 700, fontSize: '1.3rem' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        These issues can stop your leads, ads, and revenue instantly.
                    </motion.p>
                </div>

                {/* Section 2: What We Solve */}
                <div className="row mt-5 pt-5 justify-content-center align-items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="col-lg-6 mb-4">
                        <motion.div 
                            className="fb-solve-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="fb-section-label fb-label-accent">What We Solve</span>
                            <h3 className="fb-section-title-md" style={{ marginBottom: '20px' }}>
                                Facebook Page <br/> <span className="fb-gradient-text-safe">Recovery Experts</span>
                            </h3>
                            <p className="fb-desc-text" style={{ margin: 0 }}>
                                Powered through deep expertise in <strong>Facebook Business Manager</strong> and the <strong>Meta Platforms ecosystem.</strong> We restore your control securely.
                            </p>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                "Hacked Facebook pages",
                                "Lost admin or editor access",
                                "Business Manager access issues",
                                "Unauthorized ownership transfer",
                                "Disabled / restricted pages"
                            ].map((item, idx) => (
                                <motion.li 
                                    key={idx}
                                    className="fb-list-item"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FbRecoveryHero;
