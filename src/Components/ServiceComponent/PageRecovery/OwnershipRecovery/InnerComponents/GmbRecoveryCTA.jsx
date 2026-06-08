import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoveryCTA = () => {
    return (
        <section className="gmb-dark-bg gmb-section-py-80 gmb-relative">
            <div className="container">
                <motion.div
                    className="gmb-cta-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="gmb-pulse-bg"></div>

                    <span className="badge gmb-badge-red">
                        <i className="fa-solid fa-bolt me-2"></i> URGENT
                    </span>

                    <h2 className="gmb-hero-title" style={{ position: 'relative', zIndex: 2 }}>
                        Don't Let Someone Else <br /> <span style={{ color: 'var(--gmb-red)' }}>Control Your Business</span>
                    </h2>

                    <p className="gmb-subtext" style={{ position: 'relative', zIndex: 2, marginBottom: '40px' }}>
                        Your Google listing is your <strong>#1 local lead source</strong>. Every day without access is revenue lost to your competitors.<br /> <span style={{ color: '#fff', fontWeight: 600 }}>Take back control today.</span>
                    </p>

                    <motion.a
                        href="#contact"
                        className='cta_button'
                        style={{
                            display: 'inline-block',
                            padding: '20px 50px',
                            background: 'var(--gmb-blue)',
                            color: '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            position: 'relative',
                            zIndex: 2,
                            boxShadow: '0 10px 30px var(--gmb-blue-glow)'
                        }}
                        whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(66, 133, 244, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i className="fa-solid fa-phone me-2"></i> Book Free Recovery Call
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default GmbRecoveryCTA;
