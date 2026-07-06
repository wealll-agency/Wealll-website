import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './rm-content.css';

const trustBg = mediaUrl("assets/images/growthstep2.jpg");
const roadmapBg = mediaUrl("assets/images/growthstep3.jpg");
import { mediaUrl } from "../../../../../config/media";

const RmContent = () => {
    // State for Section 3 (Flipping Cards)
    const [isFlipped, setIsFlipped] = useState([false, false, false]);

    const handleFlip = (index) => {
        const newFlipped = [...isFlipped];
        newFlipped[index] = !newFlipped[index];
        setIsFlipped(newFlipped);
    };

    return (
        <div className="rm-page-wrapper">

            {/* SECTION 1: Brand Reputation Monitoring (Analytics Dashboard Mock) */}
            <section className="rm-section rm-dashboard-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <motion.div
                                className="rm-text-box"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="rm-badge">01 // Monitoring</span>
                                <h2>Track What People Say About Your <span className="text-highlight">Brand</span></h2>
                                <p>Understanding your brand’s perception is the first step to controlling it. WEALLL uses advanced monitoring tools to track reviews, social mentions, and media coverage in real time, giving you complete visibility into how your brand is seen across digital platforms.</p>
                                <ul className="rm-feature-list">
                                    <li><i className="fa-solid fa-radar"></i> Online review tracking</li>
                                    <li><i className="fa-solid fa-hashtag"></i> Social media mention monitoring</li>
                                    <li><i className="fa-solid fa-newspaper"></i> News coverage tracking</li>
                                    <li><i className="fa-solid fa-chart-line"></i> Brand sentiment analysis</li>
                                </ul>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                className="rm-dashboard-mockup"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="rm-dash-header">
                                    <div className="rm-dash-dots"><span></span><span></span><span></span></div>
                                    <div className="rm-dash-title">Sentiment Analysis Radar</div>
                                </div>
                                <div className="rm-dash-body">
                                    <div className="rm-radar-scanner">
                                        <div className="rm-radar-sweep"></div>
                                        <div className="rm-radar-blip blip-1"></div>
                                        <div className="rm-radar-blip blip-2"></div>
                                        <div className="rm-radar-blip blip-3"></div>
                                    </div>
                                    <div className="rm-dash-stats">
                                        <div className="stat-box positive">
                                            <h4>78%</h4>
                                            <span>Positive Sentiment</span>
                                        </div>
                                        <div className="stat-box neutral">
                                            <h4>15%</h4>
                                            <span>Neutral Mentions</span>
                                        </div>
                                        <div className="stat-box negative">
                                            <h4>7%</h4>
                                            <span>Requires Action</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Online Review Management (Sticky Mobile Scroll with Bubbles + Right Stats Hub) */}
            <section className="rm-section rm-review-section">
                <div className="container">
                    <div className="rm-section-header text-center mb-5">
                        <span className="rm-badge center">02 // Review Management</span>
                        <h2>Respond to Customer Feedback with <span className="text-highlight">Precision</span></h2>
                        <p className="mx-auto" style={{ maxWidth: '700px' }}>Customer feedback shapes buying decisions. WEALLL helps you manage and respond to reviews with clarity, consistency, and strategy turning every interaction into an opportunity to build trust and credibility.</p>
                    </div>

                    <div className="row align-items-center">
                        {/* Phone Container Left */}
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="rm-sticky-container">
                                <div className="rm-phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen">
                                        <div className="review-app-header">
                                            <h3>Google Reviews</h3>
                                            <div className="star-rating">★★★★★ 4.9</div>
                                        </div>
                                        {/* Floating Bubbles entering the phone screen */}
                                        <div className="floating-bubbles-area">
                                            <div className="review-bubble bubble-1">
                                                <div className="stars">★★★★★</div>
                                                <p>"Incredible service, completely changed our business!"</p>
                                            </div>
                                            <div className="review-bubble bubble-2">
                                                <div className="stars">★★★★★</div>
                                                <p>"Fast response and very professional."</p>
                                            </div>
                                            <div className="admin-reply-bubble">
                                                <strong>Admin:</strong> Thank you! We strive for excellence.
                                            </div>
                                            <div className="review-bubble bubble-3">
                                                <div className="stars">★★★★☆</div>
                                                <p>"Great experience overall."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Interactive Data Hub Right */}
                        <div className="col-lg-7">
                            <motion.div
                                className="rm-trust-hub"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="trust-hub-bg">
                                    <img src={trustBg} alt="Abstract Trust Concept" className="trust-bg-img" loading="lazy" />
                                    <div className="trust-bg-overlay"></div>
                                </div>
                                <div className="trust-floating-cards">
                                    <motion.div className="trust-card tc-1" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                                        <div className="tc-icon"><i className="fa-brands fa-google"></i></div>
                                        <div className="tc-content">
                                            <h4>4.9/5 Rating</h4>
                                            <span>From 1.2k Reviews</span>
                                        </div>
                                    </motion.div>
                                    <motion.div className="trust-card tc-2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
                                        <div className="tc-icon"><i className="fa-solid fa-arrow-trend-up"></i></div>
                                        <div className="tc-content">
                                            <h4>+34%</h4>
                                            <span>Positive Sentiment YoY</span>
                                        </div>
                                    </motion.div>
                                    <motion.div className="trust-card tc-3" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5 }}>
                                        <div className="tc-icon"><i className="fa-solid fa-shield-check"></i></div>
                                        <div className="tc-content">
                                            <h4 className="text-warning">Brand Protected</h4>
                                            <span>Real-time Moderation</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Reputation Repair & Brand Recovery (3D Flipping Cards) */}
            <section className="rm-section rm-repair-section bg-darker">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <motion.div
                                className="rm-text-box"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="rm-badge">03 // Brand Recovery</span>
                                <h2>Rebuild Trust. Restore <span className="text-warning">Your Brand</span></h2>
                                <p>Negative publicity can impact brand perception instantly. Our reputation recovery strategies focus on reshaping narratives, rebuilding trust, and restoring your brand’s credibility across search, media, and digital platforms.</p>
                            </motion.div>
                        </div>
                        <div className="col-lg-7">
                            <div className="rm-flip-cards-grid">
                                {/* Card 1 */}
                                <div className="rm-flip-card" onMouseEnter={() => handleFlip(0)} onMouseLeave={() => handleFlip(0)}>
                                    <motion.div className="rm-flip-inner" animate={{ rotateY: isFlipped[0] ? 180 : 0 }} transition={{ duration: 0.6, type: "spring" }}>
                                        <div className="rm-flip-front crisis">
                                            <i className="fa-solid fa-triangle-exclamation"></i>
                                            <h4>Negative Press</h4>
                                        </div>
                                        <div className="rm-flip-back recovery">
                                            <i className="fa-solid fa-shield-halved"></i>
                                            <h4>Strategic PR Communication</h4>
                                        </div>
                                    </motion.div>
                                </div>
                                {/* Card 2 */}
                                <div className="rm-flip-card" onMouseEnter={() => handleFlip(1)} onMouseLeave={() => handleFlip(1)}>
                                    <motion.div className="rm-flip-inner" animate={{ rotateY: isFlipped[1] ? 180 : 0 }} transition={{ duration: 0.6, type: "spring", delay: 0.1 }}>
                                        <div className="rm-flip-front crisis">
                                            <i className="fa-solid fa-arrow-trend-down"></i>
                                            <h4>Lost Trust</h4>
                                        </div>
                                        <div className="rm-flip-back recovery">
                                            <i className="fa-solid fa-handshake-angle"></i>
                                            <h4>Storytelling Campaigns</h4>
                                        </div>
                                    </motion.div>
                                </div>
                                {/* Card 3 */}
                                <div className="rm-flip-card" onMouseEnter={() => handleFlip(2)} onMouseLeave={() => handleFlip(2)}>
                                    <motion.div className="rm-flip-inner" animate={{ rotateY: isFlipped[2] ? 180 : 0 }} transition={{ duration: 0.6, type: "spring", delay: 0.2 }}>
                                        <div className="rm-flip-front crisis">
                                            <i className="fa-solid fa-link-slash"></i>
                                            <h4>Damaging Search Results</h4>
                                        </div>
                                        <div className="rm-flip-back recovery">
                                            <i className="fa-solid fa-magnifying-glass-chart"></i>
                                            <h4>Reputation SEO Strategy</h4>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Positive Media & Content (Premium Bento Grid) */}
            <section className="rm-section rm-media-section">
                <div className="container">
                    <div className="rm-section-header text-center mb-5">
                        <span className="rm-badge center">04 // Positive Content</span>
                        <h2>Shape a Stronger <span className="text-highlight">Brand Narrative</span></h2>
                        <p className="mx-auto" style={{ maxWidth: '700px' }}>We create and distribute positive, high-impact content that positions your brand as a trusted authority—helping you control perception, dominate search results, and build long-term credibility.</p>
                    </div>

                    <div className="rm-bento-grid">
                        <motion.div className="bento-item item-main" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="bento-bg bg-gradient-blue"></div>
                            <div className="bento-content">
                                <i className="fa-solid fa-newspaper text-white fs-1 mb-3"></i>
                                <h3>Positive Brand News Articles</h3>
                                <p>Targeted placements in authoritative publications to dominate search results.</p>
                            </div>
                        </motion.div>
                        <motion.div className="bento-item item-side-top" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="bento-content">
                                <i className="fa-solid fa-lightbulb text-highlight fs-2 mb-2"></i>
                                <h4>Thought Leadership</h4>
                                <p>Positioning your executives as industry experts.</p>
                            </div>
                        </motion.div>
                        <motion.div className="bento-item item-side-bottom" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className="bento-content">
                                <i className="fa-solid fa-trophy text-warning fs-2 mb-2"></i>
                                <h4>Success Stories</h4>
                                <p>Transforming wins into compelling case studies.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Social Media Reputation (Infinite Horizontal Scroll Feed) */}
            <section className="rm-section rm-social-section overflow-hidden">
                <div className="container mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <span className="rm-badge">05 // Social Media</span>
                            <h2>Control Your <span className="text-highlight">Brand Conversations</span></h2>
                            <p className="mt-3">Social media drives public perception. WEALLL helps you manage conversations, respond proactively, and maintain a strong, consistent brand voice ensuring your reputation stays positive and protected.</p>
                        </div>
                    </div>
                </div>

                {/* Infinite Scrolling Track of Social Posts */}
                <div className="rm-social-marquee-container">
                    <div className="rm-social-track">
                        {/* Generate 8 mock posts */}
                        {[...Array(8)].map((_, i) => (
                            <div className="rm-social-post" key={i}>
                                <div className="post-header">
                                    <div className="post-avatar bg-gradient-{i%3+1}"></div>
                                    <div className="post-meta">
                                        <strong>Brand Advocate {i + 1}</strong>
                                        <span>@user{i * 100} • 2h</span>
                                    </div>
                                    <i className="fa-brands fa-twitter ms-auto text-primary"></i>
                                </div>
                                <div className="post-body">
                                    <p>Just had the best experience with this brand. Their customer service team is unparalleled! 🚀✨</p>
                                </div>
                                <div className="post-footer">
                                    <span><i className="fa-regular fa-comment"></i> 12</span>
                                    <span><i className="fa-solid fa-retweet"></i> 45</span>
                                    <span><i className="fa-regular fa-heart"></i> 890</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: Long-Term Strategy (Glowing Ascending Roadmap + Right Graphic) */}
            <section className="rm-section rm-roadmap-section bg-darker">
                <div className="container border-top border-secondary pt-5">
                    <div className="text-center mb-5">
                        <span className="rm-badge center">06 // Long-Term Strategy</span>
                        <h2>Build Sustainable <span className="text-highlight">Brand Credibility</span></h2>
                        <p className="mx-auto" style={{ maxWidth: '700px' }}>Reputation management is not just about solving problems—it’s about creating long-term trust. We develop strategies that strengthen your brand reputation over time.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="rm-roadmap-ladder">
                                <motion.div className="ladder-step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                    <div className="step-node">1</div>
                                    <div className="step-content">
                                        <h4>Continuous Monitoring</h4>
                                        <p>24/7 analysis of digital brand footprint.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="ladder-step mt-4 ms-md-4 ms-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                    <div className="step-node">2</div>
                                    <div className="step-content">
                                        <h4>Experience Improvement</h4>
                                        <p>Data-driven operational feedback loops.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="ladder-step mt-4 ms-md-5 ms-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                    <div className="step-node glow">3</div>
                                    <div className="step-content">
                                        <h4 className="text-highlight">Unshakeable Brand Trust</h4>
                                        <p>PR campaigns & credibility storytelling.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                className="rm-growth-graphic"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <img src={roadmapBg} alt="Sustainable Brand Growth" className="img-fluid rounded-4 shadow-lg" loading="lazy" />
                                <div className="growth-overlay-badge">
                                    <i className="fa-solid fa-lock text-success"></i>
                                    <div>
                                        <strong>Trust Secured</strong>
                                        <span>Long-Term Authority</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RmContent;
