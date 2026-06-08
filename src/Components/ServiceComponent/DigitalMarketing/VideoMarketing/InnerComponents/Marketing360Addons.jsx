import React from 'react';
import { motion } from 'framer-motion';
// IMPLICITLY IMPORTING THE EXACT SAME CSS FROM WEBSITE DEVELOPMENT / LOGO DESIGN
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const Marketing360Addons = () => {
    const addons = [
        {
            title: "Custom App Development",
            desc: "Build a dedicated iOS & Android mobile ecosystem.",
            icon: "📱"
        },
        {
            title: "High-End Video Production",
            desc: "Cinematic TV commercials and flagship corporate films.",
            icon: "🎬"
        },
        {
            title: "Advanced PR Management",
            desc: "Crisis management and global tier-1 media placements.",
            icon: "📰"
        }
    ];

    return (
        <section className="logo-pricing-section pt-0 pb-5" style={{ backgroundColor: '#0d0f1b' }}>
            <div className="container">
                {/* Add-ons Grid Replica */}
                <div className="logo-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: '#00f2fe' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="addon-card-premium" 
                                key={index}
                            >
                                <div className="addon-icon-box" style={{ background: 'rgba(0,242,254,0.1)', color: '#00f2fe' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                    <strong style={{ color: '#00f2fe', fontSize: '0.9rem' }}>Custom Quote</strong>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketing360Addons;
