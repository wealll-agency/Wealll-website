import React from 'react';
import { motion } from 'framer-motion';

const AffiliateBenefits = () => {
    const outcomes = [
        { title: "Revenue-based marketing", desc: "Pay strictly for verified results and actual generated sales.", icon: "fa-sack-dollar" },
        { title: "Lower Customer Acquisition", desc: "Drastically reduce your CAC through optimized performance channels.", icon: "fa-arrow-down-short-wide" },
        { title: "Scalable Growth Channel", desc: "A channel that grows infinitely with the number of partners onboarded.", icon: "fa-arrow-up-right-dots" },
        { title: "Continuous Sales Generation", desc: "Build passive revenue streams that work around the clock.", icon: "fa-rotate" },
        { title: "Strong Partner Ecosystem", desc: "Cultivate long-term, mutually beneficial relationships with creators.", icon: "fa-handshake-angle" }
    ];

    return (
        <section className="affiliate-benefits-section affiliate-dark-bg">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>
                        What You Achieve with <br/> <span className="affiliate-gradient-text">Affiliate Marketing</span>
                    </h2>
                </div>

                <div className="row justify-content-center">
                    {outcomes.map((item, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <motion.div 
                                className="aff-benefit-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <i className={`fa-solid ${item.icon} aff-benefit-icon`}></i>
                                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '15px' }}>{item.title}</h4>
                                <p style={{ color: '#a0a5b5', fontSize: '0.95rem', margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AffiliateBenefits;
