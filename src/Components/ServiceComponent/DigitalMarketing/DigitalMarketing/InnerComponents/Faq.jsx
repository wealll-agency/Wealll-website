import React from 'react';
import './custom_faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const faqs = [
        {
            question: "How can social media marketing help my brand?",
            answer: "Social Media Marketing boosts your brand visibility, builds relationships, and turns your general followers into lifelong fans."
        },
        {
            question: "How to pick a social media agency?",
            answer: "Look for an agency with a proven track record, understanding of your industry, and a strategy that aligns with your business goals."
        },
        {
            question: "How do we grow your social following?",
            answer: "We use a mix of organic content strategies, community engagement, and targeted advertising to attract authentic followers interested in your brand."
        },
        {
            question: "Can social media help SEO?",
            answer: "Yes, social media signals can indirectly affect SEO by driving traffic to your website and increasing brand awareness and authority."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="dm-faq-section">
            <div className="container">
                <h2 className="faq-main-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                            <div className="faq-question" onClick={() => toggleFaq(index)}>
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className="faq-answer" style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
