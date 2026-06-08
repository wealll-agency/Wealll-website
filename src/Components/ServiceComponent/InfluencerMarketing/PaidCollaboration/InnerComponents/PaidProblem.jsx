import React from 'react';
import { motion } from 'framer-motion';

const PaidProblem = () => {
    const problems = [
        "Brands pay for reach, not results",
        "Wrong influencer selection",
        "No clear campaign strategy",
        "No performance tracking"
    ];

    return (
        <section className="paid-problem-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <motion.h2 
                            className="problem-title text-white"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            Why Most Paid Collaborations <span className="text-danger-glow">Don't Work</span>
                        </motion.h2>
                        
                        <motion.div 
                            className="hazard-block mt-5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="hazard-glow"></div>
                            <h4>Result?</h4>
                            <h3>High investment with low returns.</h3>
                        </motion.div>
                    </div>
                    
                    <div className="col-lg-6 offset-lg-1">
                        <div className="shattered-grid">
                            {problems.map((problem, index) => (
                                <motion.div 
                                    key={index}
                                    className="shattered-card"
                                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h4 className="shattered-text">{problem}</h4>
                                    <span className="shattered-num">0{index + 1}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaidProblem;
