import React from 'react';
import { motion } from 'framer-motion';

const PodcastIntro = () => {
    return (
        <section className="podcast-aura-section">
            <div className="studio-grid-overlay"></div>
            
            {/* Refined Ornaments */}
            <motion.div 
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="audio-floating-ornament" 
                style={{ width: '120px', height: '120px', top: '10%', right: '15%' }}
            />
            <motion.div 
                animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="audio-floating-ornament" 
                style={{ width: '180px', height: '180px', bottom: '15%', left: '10%' }}
            />

            <div className="container position-relative z-index-2">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-9">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="live-badge-premium"
                        >
                            <div className="live-dot-pulse"></div>
                            <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '3px', color: '#ff3737' }}>
                                LIVE PRODUCTION
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="podcast-h1-premium"
                        >
                            Elevating Brands Through <br /> 
                            <span style={{ color: '#ba68c8' }}>Audio Authority</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="lead mb-5"
                            style={{ color: '#a0a0b0', maxWidth: '750px', margin: '0 auto 40px', fontSize: '1.2rem' }}
                        >
                            We don't just book guest spots. We engineer cinematic audio narratives that position you as the 
                            undisputed leader in your niche. High-impact, high-trust, high-frequency ROI.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PodcastIntro;
