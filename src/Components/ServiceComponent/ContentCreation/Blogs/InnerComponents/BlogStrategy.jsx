import React from 'react';
import { motion } from 'framer-motion';
import './blog-strategy.css';

const BlogStrategy = () => {
    const leftColumn = [
        { id: 1, title: "Internal Linking Suggestions", icon: "🔗" },
        { id: 2, title: "Meta Title & Description", icon: "🏷️" },
        { id: 3, title: "Competitor Research", icon: "📊" },
        { id: 4, title: "Readable Formatting", icon: "👀" },
    ];

    const rightColumn = [
        { id: 5, title: "Keyword Research & Targeting", icon: "🔍" },
        { id: 6, title: "Search Intent Optimization", icon: "🎯" },
        { id: 7, title: "SEO-Friendly Headings", icon: "📑" },
        { id: 8, title: "Optimized Intro & Conclusion", icon: "✍️" },
    ];

    return (
        <section className="blog-strategy-restore">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="strategy-title"
                    >
                        SEO <span className="highlight-gold">STRATEGY</span> CORE
                    </motion.h2>
                    <p className="strategy-subtitle">I don’t just write blogs — I create content with a clear SEO engine so your articles can rank higher.</p>
                </div>

                <div className="strategy-columnar-grid">
                    {/* Left Column */}
                    <div className="strategy-side-col">
                        {leftColumn.map((item, index) => (
                            <motion.div 
                                key={item.id}
                                className="strategy-card-premium left-align"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="card-text">{item.title}</div>
                                <div className="card-icon-well">{item.icon}</div>
                                <div className="connector-line l"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Highly Polished Center Core */}
                    <div className="strategy-center-hub">
                        <div className="hub-orbital-system">
                            <div className="n-ring r-outer"></div>
                            <div className="n-ring r-mid"></div>
                            <div className="n-ring r-inner"></div>
                            
                            <motion.div 
                                className="core-earth-orb"
                                animate={{ 
                                    boxShadow: [
                                        "0 0 40px rgba(253, 185, 20, 0.3)",
                                        "0 0 80px rgba(253, 185, 20, 0.6)",
                                        "0 0 40px rgba(253, 185, 20, 0.3)"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="orb-glass">
                                    <svg viewBox="0 0 24 24" fill="#fdb914" className="world-svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                    </svg>
                                </div>
                                <div className="orb-aura"></div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="strategy-side-col">
                        {rightColumn.map((item, index) => (
                            <motion.div 
                                key={item.id}
                                className="strategy-card-premium right-align"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="connector-line r"></div>
                                <div className="card-icon-well">{item.icon}</div>
                                <div className="card-text">{item.title}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogStrategy;
