import React, { useEffect, useRef } from 'react';
import './client-testimonials.css';
const client1 = mediaUrl("assets/images/vyapaar-expo-trip6.jpeg");
const client2 = mediaUrl("assets/images/vyapaar-expo-trip1.jpeg");
const client3 = mediaUrl("assets/images/vyapaar-expo-trip7.jpeg");
import { mediaUrl } from "../../../../../config/media";

const ClientTestimonials = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ct-animate-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const testimonials = [
        {
            name: "Sarah Jenkins", role: "CMO, TechFlow",
            feedback: "The campaign strategy they designed transformed our lead gen. We saw a 3x increase in qualified demos booked within the first quarter.",
            img: client1, type: "written"
        },
        {
            name: "David Chen", role: "Founder, Bloom E-Commerce",
            feedback: "Their paid advertising approach, combined with the new site architecture, finally brought our CPA down to a profitable level.",
            img: client3, type: "video"
        },
        {
            name: "Amanda Brooks", role: "Director, EduPro",
            feedback: "A true long-term partnership. They understand our audience deeply and consistently over-deliver on their promises month after month.",
            img: client2, type: "written"
        }
    ];

    return (
        <section className="client-testimonials-sec" ref={sectionRef}>
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-8 mx-auto">
                        <span className="ct-badge ct-reveal">🔷 5. Client Testimonials & Experience Videos</span>
                        <h2 className="ct-title mt-3 ct-reveal" style={{ transitionDelay: '0.1s' }}>
                            What Our Clients Say <br />
                            <span className="ct-text-hl">About Working With Us</span>
                        </h2>
                        <p className="ct-desc mt-3 ct-reveal" style={{ transitionDelay: '0.2s' }}>
                            Client testimonials provide authentic insights into our working process and the results we deliver. We feature feedback from businesses that have partnered with us to grow their digital presence.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    {testimonials.map((test, idx) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                            <div className="ct-card ct-reveal" style={{ transitionDelay: `${0.3 + (idx * 0.1)}s` }}>
                                <div className="ct-quote-icon"><i className="fa-solid fa-quote-left"></i></div>

                                {test.type === 'video' ? (
                                    <div className="ct-video-thumb">
                                        <img src={test.img} alt={test.name} loading="lazy" />
                                        <div className="ct-play-overlay"><i className="fa-solid fa-play"></i></div>
                                    </div>
                                ) : (
                                    <div className="ct-avatar-header">
                                        <img src={test.img} alt={test.name} className="ct-avatar" loading="lazy" />
                                        <div>
                                            <h5 className="ct-name">{test.name}</h5>
                                            <span className="ct-role">{test.role}</span>
                                        </div>
                                    </div>
                                )}

                                <p className="ct-feedback">"{test.feedback}"</p>

                                {test.type === 'video' && (
                                    <div className="mt-3">
                                        <h5 className="ct-name">{test.name}</h5>
                                        <span className="ct-role">{test.role}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-4">
                    <div className="col-12 text-center ct-reveal" style={{ transitionDelay: '0.7s' }}>
                        <div className="ct-trust-box">
                            <ul className="ct-trust-list">
                                <li>✔️ Video interviews</li>
                                <li>✔️ Written feedback</li>
                                <li>✔️ Collaboration experiences</li>
                                <li>✔️ Long-term partnership highlights</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
