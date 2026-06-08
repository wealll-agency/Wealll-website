import React from 'react';
import { motion } from 'framer-motion';

const GmbSuspProcess = () => {
    const processSteps = [
        {
            num: "01",
            title: "Suspension Audit",
            desc: "We identify the exact reason behind suspension.",
            icon: "fa-magnifying-glass"
        },
        {
            num: "02",
            title: "Profile Optimization",
            desc: "We fix Business name violations, Category issues, and Address inconsistencies.",
            icon: "fa-wrench"
        },
        {
            num: "03",
            title: "Compliance Correction",
            desc: "We align your listing with strict Google guidelines.",
            icon: "fa-clipboard-check"
        },
        {
            num: "04",
            title: "Reinstatement Submission",
            desc: "We submit a strong, evidence-backed reinstatement request.",
            icon: "fa-paper-plane"
        },
        {
            num: "05",
            title: "Documentation Support",
            desc: "We prepare and validate all necessary proof documents.",
            icon: "fa-folder-open"
        },
        {
            num: "06",
            title: "Follow-ups with Google",
            desc: "We track and escalate the case until your listing is fully reinstated.",
            icon: "fa-headset"
        }
    ];

    return (
        <section className="gmb-susp-dark-bg gmb-process-section">
            <div className="container">
                <div className="text-center">
                    <span className="gmb-susp-section-label blue">Our Recovery Process</span>
                    <h2 className="gmb-susp-title-lg">
                        Step-by-Step <br/> <span className="gmb-gradient-text-blue">Reinstatement Strategy</span>
                    </h2>
                </div>

                <div className="row justify-content-center mt-5">
                    {processSteps.map((step, idx) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                            <motion.div 
                                className="gmb-process-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ translateY: -10, borderColor: 'var(--gmb-blue)' }}
                            >
                                <span className="gmb-process-number">{step.num}</span>
                                <div className="gmb-process-icon">
                                    <i className={`fa-solid ${step.icon}`}></i>
                                </div>
                                <h4 style={{fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px'}}>{step.title}</h4>
                                <p style={{color: 'var(--gmb-text-muted)', lineHeight: '1.6'}}>{step.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GmbSuspProcess;
