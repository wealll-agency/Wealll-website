import React from 'react';
import { motion } from 'framer-motion';

const PaidIntro = () => {
    return (
        <section className="paid-intro-section">
            <div className="paid-intro-bg-glow"></div>
            <div className="container paid-intro-content">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <motion.span 
                            className="paid-intro-badge"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Performance-Driven Marketing
                        </motion.span>
                        <motion.h1 
                            className="paid-intro-title"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Paid Influencer Marketing <br />
                            That Delivers <span className="highlight-gradient">Measurable Results</span>
                        </motion.h1>
                        <motion.p 
                            className="paid-intro-desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Paid collaborations are powerful — but only when executed with the right strategy, creators, and performance tracking. At WEALLL, we turn influencer marketing into a structured, ROI-driven growth channel.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaidIntro;
