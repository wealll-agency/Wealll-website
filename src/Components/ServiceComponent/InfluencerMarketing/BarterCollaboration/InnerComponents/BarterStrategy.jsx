import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BarterStrategy = () => {
    const reelLinks = [
        "https://www.instagram.com/reel/DRPxOfFE0oa/embed",
        "https://www.instagram.com/reel/DR_kjb-j0yb/embed",
        "https://www.instagram.com/reel/DRMxnsHifeb/embed"
    ];

    const strategyData = [
        {
            num: "01",
            title: "CREATOR DISCOVERY",
            heading: "Creator Discovery That Matches Your Brand DNA",
            list: [
                "Audience relevance & niche alignment",
                "Content quality & storytelling style",
                "Engagement authenticity (not fake followers)",
                "Brand fit & tone"
            ],
            takeaway: "👉 This ensures collaborations feel natural, trustworthy, and high-impact",
            insight: "💡 We don’t pick influencers. We find brand storytellers."
        },
        {
            num: "02",
            title: "COLLABORATION STRATEGY",
            heading: "Strategic Barter Collaborations That Drive Real Value",
            list: [
                "Content formats (Reels, Stories, Posts)",
                "Deliverables & timelines",
                "Campaign messaging",
                "Platform strategy"
            ],
            takeaway: "👉 So every collaboration is not random — it’s goal-oriented & performance-driven",
            insight: "💡 No random shoutouts. Only strategic visibility."
        },
        {
            num: "03",
            title: "OUTREACH & NEGOTIATION",
            heading: "Professional Outreach & Smart Negotiation",
            list: [
                "Personalized brand pitching",
                "Relationship building",
                "Barter deal structuring",
                "Clear expectation alignment"
            ],
            takeaway: "👉 Ensuring win-win collaborations without overpaying or undervaluing your brand",
            insight: "💡 We protect your brand value while maximizing collaboration output."
        },
        {
            num: "04",
            title: "CONTENT EXECUTION",
            heading: "High-Quality Content That Feels Authentic",
            list: [
                "Feels organic, not scripted",
                "Blends naturally into their storytelling",
                "Highlights your product without forcing it"
            ],
            takeaway: "👉 Result: Higher trust, better engagement, stronger conversions",
            insight: "💡 People trust creators, not ads — we use that to your advantage."
        },
        {
            num: "05",
            title: "PERFORMANCE TRACKING",
            heading: "Measurable Results, Not Just Visibility",
            list: [
                "Reach & impressions",
                "Engagement rate",
                "Audience response",
                "Content performance"
            ],
            takeaway: "👉 These insights help us optimize future collaborations for better ROI",
            insight: "💡 Every campaign teaches us how to scale the next one."
        }
    ];

    return (
        <section className="barter-luminary-section">
            <div className="container">
                <div className="row">
                    {/* LEFT STICKY HUB (Reel Slider) */}
                    <div className="col-lg-5 mb-5 mb-lg-0 barter-reel-column">
                        <div className="barter-sticky-hub" style={{ position: 'sticky', top: '120px', zIndex: 10 }}>
                            <div className="luminary-glass-box" style={{ padding: '15px' }}>
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{ 
                                        clickable: true,
                                        dynamicBullets: true
                                    }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false
                                    }}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    className="barter-video-swiper"
                                >
                                    {reelLinks.map((reel, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="reel-slide-wrapper" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                                <iframe 
                                                    src={reel} 
                                                    width="100%" 
                                                    height="600" 
                                                    frameBorder="0" 
                                                    scrolling="no" 
                                                    allowTransparency="true" 
                                                    title={`Barter Collaboration Instagram Reel ${index + 1}`}
                                                    className="barter-reel-iframe"
                                                    style={{ background: '#000' }}
                                                ></iframe>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SCROLLING CONTENT */}
                    <div className="col-lg-7">
                        <div className="barter-steps-container">
                            {strategyData.map((step, index) => (
                                <motion.div 
                                    className="barter-step-card" 
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <div className="step-header">
                                        <span className="step-num">{step.num}</span>
                                        <h4 className="step-subtitle">{step.title}</h4>
                                    </div>
                                    
                                    <h3 className="step-main-title">{step.heading}</h3>
                                    
                                    <ul className="step-list">
                                        {step.list.map((item, i) => (
                                            <li key={i}>
                                                <span className="step-check">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="step-takeaway">
                                        {step.takeaway}
                                    </div>
                                    
                                    <div className="step-insight">
                                        {step.insight}
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

export default BarterStrategy;
