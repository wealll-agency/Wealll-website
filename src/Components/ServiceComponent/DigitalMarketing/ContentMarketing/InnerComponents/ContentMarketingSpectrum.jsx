import React from 'react';
import { motion } from 'framer-motion';

const ContentMarketingSpectrum = () => {
    const services = [
        { title: "Landscape Audit", icon: "fa-solid fa-microscope", color: "#ff4b4b", desc: "We study and analyze the content of your existing site or pages to identify areas of improvement and bring out a better version of it." },
        { title: "Content Strategy", icon: "fa-solid fa-chess-knight", color: "#fdb914", desc: "Our next action is to build a content strategy that focuses on conversion by creating goal-oriented and customer-specific content." },
        { title: "Development Plan", icon: "fa-solid fa-calendar-days", color: "#00f2fe", desc: "The planning stage involves incorporating various ROI-focused content ideas into a strict publishing content calendar." },
        { title: "Content Creation", icon: "fa-solid fa-pen-fancy", color: "#b026ff", desc: "Our writers start the execution. They write keyword-specific compelling content that flawlessly blends with your brand voice." },
        { title: "Distribution", icon: "fa-solid fa-satellite-dish", color: "#00ff88", desc: "We handle the distribution part, promoting your content on social media, third-party authoritative sites, and outreach channels." },
        { title: "Analyze & Optimize", icon: "fa-solid fa-chart-line", color: "#ff007f", desc: "After publishing, we analyze and optimize to see what works best in driving traffic and then persistently improvise the deliverables." }
    ];

    return (
        <section className="cm-spectrum-section py-5 cm-dark-bg position-relative overflow-hidden border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="container py-5 z-2 position-relative">
                <div className="text-center mb-5 pb-4 mx-auto" style={{ maxWidth: '800px' }}>
                    <motion.h2 
                        className="cm-section-title mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Wide Spectrum of our <br/><span className="cm-title-gradient">Content Marketing Services</span>
                    </motion.h2>
                    <p className="cm-text-muted">
                        We are a leading content marketing firm with a team of professionals that know the specific tricks to produce content that ranks. We identify your audience, determine goals, and establish a continuous delivery model.
                    </p>
                </div>

                <div className="row g-4">
                    {services.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <motion.div 
                                className="cm-bento-box h-100"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ '--bento-color': item.color }}
                            >
                                <div className="bento-glow"></div>
                                <div className="bento-content">
                                    <div className="bento-icon mb-4"><i className={item.icon}></i></div>
                                    <h4 className="text-white fw-bold mb-3">{item.title}</h4>
                                    <p className="cm-text-muted m-0">{item.desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentMarketingSpectrum;
