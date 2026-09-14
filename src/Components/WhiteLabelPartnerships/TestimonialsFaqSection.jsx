import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
    {
        id: 1,
        quote: "WE ALLL has been an incredible partner for our agency. Their work quality, communication and reliability have helped us deliver exceptional results to our clients.",
        author: "Marketing Agency Partner",
        avatar: "/assets/images/wlp-avatar-1.jpg"
    },
    {
        id: 2,
        quote: "Professional, responsive and skilled. They truly work as an extension of our team.",
        author: "Creative Agency Partner",
        avatar: "/assets/images/wlp-avatar-2.jpg"
    },
    {
        id: 3,
        quote: "A reliable partner who understands our needs and always delivers on time. Highly recommended!",
        author: "Freelance Consultant",
        avatar: "/assets/images/wlp-avatar-3.jpg"
    },
    {
        id: 4,
        quote: "Partnering with WE ALLL allowed us to expand our client offerings without adding in-house overhead. Their technical execution is world-class.",
        author: "Digital Growth Partner",
        avatar: "/assets/images/wlp-avatar-1.jpg"
    },
    {
        id: 5,
        quote: "Complete transparency and top-tier confidentiality. Our clients are thrilled with the velocity and polish of our deliverables.",
        author: "Tech Solutions Agency",
        avatar: "/assets/images/wlp-avatar-2.jpg"
    }
];

const faqs = [
    {
        question: "What is a white-label partnership?",
        answer: "A white-label partnership allows your agency to offer end-to-end digital solutions—from web development and design to SEO and marketing—under your own brand name. WE ALLL works invisibly behind the scenes while you own the client relationship."
    },
    {
        question: "Will my clients know about WE ALLL?",
        answer: "No, never. We operate under strict white-label protocols and NDAs. All communications, deliverables, documentation, and reporting are 100% branded with your agency's identity."
    },
    {
        question: "Can you work under our processes/tools?",
        answer: "Yes, absolutely. We seamlessly integrate into your existing project management stack and workflows, whether you use Slack, Jira, ClickUp, Asana, Trello, Figma, or custom client portals."
    },
    {
        question: "Can I outsource only part of a project?",
        answer: "Yes. Whether you need an entire turnkey web development project delivered from scratch or just specialized support with frontend animations, backend architecture, or local SEO, our model is completely flexible."
    },
    {
        question: "How do you protect client confidentiality?",
        answer: "Confidentiality is our top priority. We sign bilateral Non-Disclosure Agreements (NDAs) before touching any project, safeguard client intellectual property, and never showcase your client work in our public portfolio without written permission."
    },
    {
        question: "How do we get started?",
        answer: "Getting started is straightforward. Book a discovery call or send us your initial project brief. We will review scope, provide transparent timelines and estimates, and get our team aligned with your goals within 24–48 hours."
    }
];

const TestimonialsFaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="wlp-testi-faq-section" id="testimonials-faq">
            <div className="wlp-section-container">
                
                {/* SUB-BLOCK 1: TESTIMONIALS */}
                <div className="wlp-split-block wlp-testi-block">
                    {/* Left Column: Heading */}
                    <div className="wlp-split-left">
                        <span className="wlp-split-badge">WHAT OUR PARTNERS SAY</span>
                        <h2 className="wlp-split-title">
                            Trusted by Agencies<br />and Professionals
                        </h2>
                    </div>

                    {/* Right Column: Auto-sliding Carousel */}
                    <div className="wlp-split-right wlp-testi-carousel-wrapper">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            loop={true}
                            spaceBetween={14}
                            slidesPerView={1.15}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1.6,
                                    spaceBetween: 14,
                                },
                                768: {
                                    slidesPerView: 2.1,
                                    spaceBetween: 14,
                                },
                                992: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 14,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 14,
                                },
                            }}
                            className="wlp-testimonials-swiper"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id} className="wlp-testi-slide">
                                    <div className="wlp-testi-card">
                                        <div className="wlp-testi-content">
                                            {/* Blue Quote Icon */}
                                            <div className="wlp-testi-quote-icon" aria-hidden="true">
                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="#2563eb">
                                                    <path d="M4.2 0C1.88 0 0 1.88 0 4.2C0 6.6 1.4 9.1 3.8 11.2L4.6 13.8H7.4L6.4 10.3C8 8.8 8.4 7.2 8.4 4.2C8.4 1.88 6.52 0 4.2 0ZM13.8 0C11.48 0 9.6 1.88 9.6 4.2C9.6 6.6 11 9.1 13.4 11.2L14.2 13.8H17L16 10.3C17.6 8.8 18 7.2 18 4.2C18 1.88 16.12 0 13.8 0Z" />
                                                </svg>
                                            </div>
                                            <p className="wlp-testi-quote-text">
                                                "{item.quote}"
                                            </p>
                                        </div>

                                        <div className="wlp-testi-footer">
                                            <img
                                                src={item.avatar}
                                                alt={item.author}
                                                className="wlp-testi-avatar"
                                                loading="lazy"
                                            />
                                            <span className="wlp-testi-author">{item.author}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* SUB-BLOCK 2: FAQ ACCORDION */}
                <div className="wlp-split-block wlp-faq-block">
                    {/* Left Column: Heading */}
                    <div className="wlp-split-left">
                        <span className="wlp-split-badge">QUESTIONS BEFORE YOU PARTNER?</span>
                        <h2 className="wlp-split-title">
                            Got Questions?<br />We’ve Got Answers.
                        </h2>
                    </div>

                    {/* Right Column: Accordion List */}
                    <div className="wlp-split-right wlp-faq-list-wrapper">
                        <div className="wlp-faq-list">
                            {faqs.map((faq, idx) => {
                                const isOpen = openIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className={`wlp-faq-item ${isOpen ? 'active' : ''}`}
                                    >
                                        <button
                                            type="button"
                                            className="wlp-faq-header"
                                            onClick={() => toggleFaq(idx)}
                                            aria-expanded={isOpen}
                                        >
                                            <span className="wlp-faq-question">{faq.question}</span>
                                            <span className="wlp-faq-icon" aria-hidden="true">
                                                {isOpen ? '−' : '+'}
                                            </span>
                                        </button>

                                        <div
                                            className={`wlp-faq-collapse ${isOpen ? 'show' : ''}`}
                                        >
                                            <div className="wlp-faq-answer">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialsFaqSection;
