import React from 'react';
import { motion } from 'framer-motion';
import './gmb-recovery-dark.css';

const GmbRecoveryAddons = () => {
    const addons = [
        {
            title: "Review Management",
            desc: "Custom setup for replying to and disputing fake reviews automatically.",
            icon: <i className="fa-solid fa-star-half-stroke"></i>,
            color: "var(--gmb-yellow)"
        },
        {
            title: "Local SEO Audit",
            desc: "A deep dive into your local rankings post-recovery to boost map visibility.",
            icon: <i className="fa-solid fa-map-location-dot"></i>,
            color: "var(--gmb-blue)"
        },
        {
            title: "Duplicate Sweep",
            desc: "Comprehensive scan across Google Maps to flag and remove rogue duplicate pins.",
            icon: <i className="fa-solid fa-broom"></i>,
            color: "var(--gmb-red)"
        },
        {
            title: "360° Virtual Tour",
            desc: "Increase trust with a Google certified 360-degree interactive tour of your store.",
            icon: <i className="fa-solid fa-camera-rotate"></i>,
            color: "var(--gmb-green)"
        }
    ];

    return (
        <section className="gmb-dark-bg gmb-section-py-80 gmb-overflow-hidden">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="gmb-section-title-md">
                        Optional <span className="gmb-gradient-text-blue">Add-ons</span>
                    </h2>
                </div>

                <div className="gmb-addons-grid-modern">
                    {addons.map((addon, index) => (
                        <motion.div 
                            className="gmb-addon-card-premium"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="gmb-addon-icon-box">
                                {addon.icon}
                            </div>
                            <div className="gmb-addon-content">
                                <h4>{addon.title}</h4>
                                <p>{addon.desc}</p>
                                <a href="#contact" className="gmb-custom-quote-link">
                                    Custom Quote
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GmbRecoveryAddons;
