import React from 'react';
import { motion } from 'framer-motion';

const GmbSuspCTA = () => {
    return (
        <section className="gmb-susp-dark-bg gmb-cta-section">
            <div className="container position-relative" style={{zIndex: 1}}>
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="gmb-susp-section-label" style={{background: 'var(--gmb-alert)', color: '#fff', border: 'none'}}>Urgent</span>
                    <h2 className="text-white" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.2}}>
                        Every Day Your Listing Is Down <br/> = <span className="gmb-gradient-text-alert">Lost Customers</span>
                    </h2>
                    
                    <div style={{maxWidth: '800px', margin: '0 auto'}}>
                        <p className="gmb-susp-desc text-white" style={{fontSize: '1.2rem', marginBottom: '30px', fontWeight: 500}}>
                            👉 Don’t wait for weeks with trial & error. Get a Free GMB Suspension Audit today.
                        </p>

                        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
                            <div style={{background: 'rgba(0,0,0,0.3)', padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                                <i className="fa-solid fa-check text-success"></i> <span className="text-white ml-2">Suspension Reason Check</span>
                            </div>
                            <div style={{background: 'rgba(0,0,0,0.3)', padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                                <i className="fa-solid fa-check text-success"></i> <span className="text-white ml-2">Recovery Plan</span>
                            </div>
                            <div style={{background: 'rgba(0,0,0,0.3)', padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                                <i className="fa-solid fa-check text-success"></i> <span className="text-white ml-2">Required Fixes</span>
                            </div>
                        </div>

                        <a href="#contact" className="gmb-cta-btn">
                            Book Your Free Recovery Call Now
                        </a>
                        <p className="mt-3 text-white-50" style={{fontSize: '0.9rem'}}>Contact Now via Call / WhatsApp / Form</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GmbSuspCTA;
