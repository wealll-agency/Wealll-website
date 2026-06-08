import React from 'react';
import '../exhibition-videos.css';

const ExhibTestimonials = () => {
    const reviews = [
        {
            quote: "The energy on the show floor was incredible, and this product solves exactly what we need.",
            author: "Client Feedback Interview",
            icon: "bi-person-check",
            color: "#fdb914"
        },
        {
            quote: "Seeing it live changes everything. The build quality exceeds our expectations completely.",
            author: "Live Customer Reaction",
            icon: "bi-emoji-smile",
            color: "#00f0ff"
        },
        {
            quote: "Our vision was always to disrupt this space, and today’s launch is the manifestation of that.",
            author: "Founder Leadership",
            icon: "bi-briefcase",
            color: "#ff00e5"
        },
        {
            quote: "Partnering with them has opened huge synergy potentials for our global market.",
            author: "Collaboration Clip",
            icon: "bi-diagram-3",
            color: "#00ff66"
        }
    ];

    return (
        <section className="exhib-section exhib-section-darker">
            <div className="container relative z-10">
                <div className="text-center mb-5">
                    <span className="exhib-badge">Live Reactions</span>
                    <h2 className="exhib-title">Build Credibility with <span>Real Voices</span></h2>
                    <p className="exhib-desc mx-auto">
                        Authentic conversations captured during exhibitions help build trust and authority. We professionally record interviews and testimonials that highlight your brand’s impact.
                    </p>
                </div>

                {/* Animated Gradient Border Review Grid */}
                <div className="row g-4 mt-4">
                    {reviews.map((review, index) => (
                        <div className="col-lg-6 col-md-12" key={index}>
                            <div className="premium-review-card" style={{ "--card-glow": review.color }}>
                                <div className="card-border-gradient"></div>
                                <div className="card-inner-bg"></div>

                                <div className="review-content">
                                    <div className="review-top-area">
                                        <i className={`bi ${review.icon} review-icon`} style={{ color: review.color }}></i>
                                    </div>
                                    <h3 className="review-quote text-white">
                                        "{review.quote}"
                                    </h3>

                                    <div className="review-bottom-area">
                                        <div className="review-author" style={{ color: review.color }}>- {review.author}</div>
                                        <div className="review-audio-line">
                                            <span></span><span></span><span></span><span></span><span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExhibTestimonials;
