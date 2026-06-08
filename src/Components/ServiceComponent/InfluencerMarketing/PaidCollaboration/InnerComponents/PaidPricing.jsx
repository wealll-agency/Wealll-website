import React from 'react';
import { motion } from 'framer-motion';

const PaidPricing = () => {
    return (
        <section className="paid-pricing-section pt-5 pb-5">
            <div className="container">
                <div className="row justify-content-center text-center pb-5 mb-4">
                    <div className="col-lg-8">
                        <motion.span
                            className="pkg-subtitle d-inline-block mb-2 text-uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ letterSpacing: '3px', color: '#00f2fe', fontWeight: '800' }}
                        >
                            ROI-DRIVEN PACKAGES
                        </motion.span>
                        <motion.h2
                            className="pkg-strategy-title text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: '3rem', fontWeight: '800' }}
                        >
                            Paid Collaboration <span className="highlight-gradient">Packages</span>
                        </motion.h2>
                        <p className="text-secondary mt-3">Scale your brand with structured paid influencer campaigns focused on conversions and ROI.</p>
                    </div>
                </div>

                {/* PRICING CARDS */}
                <div className="row g-4 justify-content-center mt-2 pricing-cards-row">
                    {/* Basic Plan */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <motion.div
                            className="logo-pricing-card w-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="pricing-header">
                                <h3>Growth Starter</h3>
                                <p>For targeted niche dominance</p>
                                <h2><span>₹</span>25,000</h2>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li><span className="check-icon">✓</span> 5-8 Quality Creators</li>
                                    <li><span className="check-icon">✓</span> Strategy & Outreach</li>
                                    <li><span className="check-icon">✓</span> Standard Negotiation</li>
                                    <li><span className="check-icon">✓</span> Content Briefing</li>
                                    <li><span className="check-icon">✓</span> Basic Analytics Report</li>
                                    <li><span className="check-icon">✓</span> Delivery: 2-3 Weeks</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <button className="pricing-btn outline">START GROWTH</button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Premium Plan - Featured */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <motion.div
                            className="logo-pricing-card featured w-100"
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="popular-tag">MOST EFFECTIVE</div>
                            <div className="pricing-header">
                                <h3>Performance Pro</h3>
                                <p>Built for conversions & ROI scale</p>
                                <h2><span>₹</span>50,000</h2>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li><span className="check-icon">✓</span> 15-20 Top Creators</li>
                                    <li><span className="check-icon">✓</span> Advanced Audience Targeting</li>
                                    <li><span className="check-icon">✓</span> Aggressive Negotiation</li>
                                    <li><span className="check-icon">✓</span> Cross-Platform Execution</li>
                                    <li><span className="check-icon">✓</span> Performance Call-to-Actions</li>
                                    <li><span className="check-icon">✓</span> Comprehensive ROI Dashboard</li>
                                    <li><span className="check-icon">✓</span> Dedicated Success Manager</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <button className="pricing-btn filled">SCALE PERFORMANCE</button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <motion.div
                            className="logo-pricing-card w-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="pricing-header">
                                <h3>Brand Ecosystem</h3>
                                <p>Massive visibility & market takeover</p>
                                <h2><span>₹</span>1,00,000</h2>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li><span className="check-icon">✓</span> 50+ Premium Creators</li>
                                    <li><span className="check-icon">✓</span> Multi-Tiered Influencer Funnel</li>
                                    <li><span className="check-icon">✓</span> Whitelisting Strategy Included</li>
                                    <li><span className="check-icon">✓</span> Custom Deliverables Mix</li>
                                    <li><span className="check-icon">✓</span> Daily Performance Tracking</li>
                                    <li><span className="check-icon">✓</span> Content Usage Rights Mgt.</li>
                                    <li><span className="check-icon">✓</span> 24/7 Priority Support</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <button className="pricing-btn outline">DOMINATE MARKET</button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ADD-ONS SECTION */}
                <div className="row mt-5 pt-5 justify-content-center">
                    <div className="col-lg-8 text-center mb-5">
                        <h3 className="addons-title text-white" style={{ fontSize: '2rem', fontWeight: '800' }}>Strategic Add-ons</h3>
                    </div>
                </div>

                <div className="row g-4 justify-content-center addons-row pb-5">
                    <div className="col-lg-4 col-md-6">
                        <motion.div
                            className="addon-card-premium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="addon-icon-box">📊</div>
                            <div className="addon-content">
                                <h4>Paid Amplification</h4>
                                <p>Turning best performer content into targeted dark ads for maximum ROI.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <motion.div
                            className="addon-card-premium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="addon-icon-box">🎬</div>
                            <div className="addon-content">
                                <h4>Pro Editing Suite</h4>
                                <p>Enhance creator raw clips centrally with brand guidelines and motion graphics.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <motion.div
                            className="addon-card-premium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="addon-icon-box">✒️</div>
                            <div className="addon-content">
                                <h4>Contract Drafting</h4>
                                <p>Advanced legal frameworks for content exclusivity and IP protection.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaidPricing;
