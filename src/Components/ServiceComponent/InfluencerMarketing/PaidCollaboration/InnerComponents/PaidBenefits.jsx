import React from 'react';
import { motion } from 'framer-motion';

const PaidBenefits = () => {
    const benefits = [
        { 
            title: "Scalable marketing channel", 
            icon: "📈", 
            desc: "Grow infinitely without linear cost scaling. Stop running the same organic post hoping for a viral hit—paid guarantees views based on exact budget multipliers.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        { 
            title: "Faster results compared to organic", 
            icon: "⚡", 
            desc: "No algorithm waiting game. Immediate data, immediate traffic, and immediate conversions upon activation.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        { 
            title: "Targeted audience reach", 
            icon: "🎯", 
            desc: "Laser-focused demographics. Don't just spray and pray—intersect with users directly interested in your bespoke niche.",
            image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
        },
        { 
            title: "High-quality reusable content", 
            icon: "♻️", 
            desc: "Acquire premium UGC from top creators and seamlessly repurpose those raw assets across your entire advertising funnel.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="paid-benefits-section py-5">
            <div className="container">
                <div className="row justify-content-center text-center pb-5">
                    <div className="col-lg-8">
                        <motion.h2 
                            className="text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '2.8rem', fontWeight: 800 }}
                        >
                            What Makes Paid Collaborations <span className="highlight-gradient">Powerful</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <motion.div 
                            className="benefits-accordion-container"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {benefits.map((benefit, index) => (
                                <div 
                                    className="benefit-slice" 
                                    key={index}
                                    style={{ backgroundImage: `url(${benefit.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                    <div className="slice-overlay"></div>
                                    <div className="slice-icon">{benefit.icon}</div>
                                    <div className="slice-content">
                                        <h3 className="slice-title">{benefit.title}</h3>
                                        <div className="slice-desc mt-2">{benefit.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaidBenefits;
