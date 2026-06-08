import React from 'react';
import { motion } from 'framer-motion';
import './product-description-strategy.css';

const ProductDescriptionStrategy = () => {
    const nodes = [
        { id: 1, title: "Trust Building", desc: "Credibility and clarity", icon: "💎" },
        { id: 2, title: "Persuasive Copy", desc: "Buyer psychology triggers", icon: "🧠" },
        { id: 3, title: "Logical Structure", desc: "Easy to scan and read", icon: "📐" },
        { id: 4, title: "Pain Point Target", desc: "Solving customer problems", icon: "🎯" },
        { id: 5, title: "Strong CTA", desc: "Compelling call-to-action", icon: "⚡" },
        { id: 6, title: "Feature-to-Benefit", desc: "Why it matters vs what it is", icon: "🎁" },
        { id: 7, title: "USP Highlight", desc: "Unique Selling Proposition", icon: "⭐" },
        { id: 8, title: "SEO Integration", desc: "Keywords placed naturally", icon: "🚀" }
    ];

    return (
        <section className="conversion-core-restore">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="conversion-title"
                    >
                        THE <span className="text-cyan">CONVERSION CORE</span>
                    </motion.h2>
                    <p className="conversion-subtitle">MY PROPRIETARY FORMULA FOR TURNING VISITORS INTO LOYAL CUSTOMERS.</p>
                </div>

                <div className="conversion-radial-layout">
                    {/* Signal Connections Layer */}
                    <div className="signal-overlay"></div>

                    <div className="radial-grid">
                        {/* Left Side Nodes */}
                        <div className="node-stack left">
                            {nodes.slice(0, 4).map((node, i) => (
                                <motion.div 
                                    className="node-item left"
                                    key={node.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="node-content">
                                        <h4>{node.title}</h4>
                                        <p>{node.desc}</p>
                                    </div>
                                    <div className="node-icon">{node.icon}</div>
                                    <div className="path-line l"></div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Centered Product Hub - NO LINE SCANNER */}
                        <div className="product-hub-center">
                            <div className="hub-glow-rings">
                                <div className="g-ring r1"></div>
                                <div className="g-ring r2"></div>
                            </div>
                            
                            <motion.div 
                                className="main-product-box"
                                animate={{ 
                                    boxShadow: [
                                        "0 0 20px rgba(0, 212, 255, 0.4)",
                                        "0 0 50px rgba(0, 212, 255, 0.7)",
                                        "0 0 20px rgba(0, 212, 255, 0.4)"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="box-inner">
                                    <span className="hub-text">PRODUCT</span>
                                    {/* Subtly breathing inner glow instead of scanner */}
                                    <div className="inner-breath"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side Nodes */}
                        <div className="node-stack right">
                            {nodes.slice(4, 9).map((node, i) => (
                                <motion.div 
                                    className="node-item right"
                                    key={node.id}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="path-line r"></div>
                                    <div className="node-icon">{node.icon}</div>
                                    <div className="node-content">
                                        <h4>{node.title}</h4>
                                        <p>{node.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDescriptionStrategy;
