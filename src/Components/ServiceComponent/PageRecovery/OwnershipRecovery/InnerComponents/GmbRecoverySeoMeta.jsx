import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoverySeoMeta = () => {
    return (
        <section className="gmb-dark-bg" style={{ padding: '20px 0 50px 0' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <motion.div 
                            className="gmb-terminal"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Terminal Header */}
                            <div className="gmb-terminal-header">
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EA4335' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FBBC05' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#34A853' }}></div>
                                </div>
                                <span style={{ marginLeft: '15px', color: '#fff', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                    <i className="fa-solid fa-code me-2"></i> SEO META (READY TO USE)
                                </span>
                            </div>

                            {/* Terminal Body */}
                            <div className="gmb-terminal-body">
                                <div style={{ marginBottom: '15px' }}>
                                    <span style={{ color: 'var(--gmb-blue)', fontWeight: 'bold' }}>&lt;title&gt;</span>
                                    <span style={{ color: '#fff' }}> Google Business Profile Ownership Recovery Service | Recover GMB Access </span>
                                    <span style={{ color: 'var(--gmb-blue)', fontWeight: 'bold' }}>&lt;/title&gt;</span>
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <span style={{ color: 'var(--gmb-blue)', fontWeight: 'bold' }}>&lt;meta </span>
                                    <span style={{ color: 'var(--gmb-yellow)' }}>name=</span><span style={{ color: 'var(--gmb-green)' }}>"description" </span>
                                    <span style={{ color: 'var(--gmb-yellow)' }}>content=</span><span style={{ color: 'var(--gmb-green)' }}>"Lost access to your Google Business Profile? We help recover ownership within 5–12 days. Expert support & free audit available."</span>
                                    <span style={{ color: 'var(--gmb-blue)', fontWeight: 'bold' }}>&gt;</span>
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <span style={{ color: 'var(--gmb-blue)', fontWeight: 'bold' }}>&lt;meta </span>
                                    <span style={{ color: 'var(--gmb-yellow)' }}>name=</span><span style={{ color: 'var(--gmb-green)' }}>"keywords" </span>
                                    <span style={{ color: 'var(--gmb-yellow)' }}>content=</span><span style={{ color: 'var(--gmb-green)' }}>"gmb ownership recovery, google business ownership claim, recover google business profile access, gmb access issue fix, google listing ownership transfer"</span>
                                    <span style={{ color: 'var(--gmb-blue)', fontWeight: 'bold' }}>&gt;</span>
                                </div>
                                
                                <div style={{ marginTop: '20px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                                    <span style={{ color: '#606070' }}>// Suggested URL Slug</span><br/>
                                    <span style={{ color: '#fff' }}>/gmb-ownership-recovery-service</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GmbRecoverySeoMeta;
