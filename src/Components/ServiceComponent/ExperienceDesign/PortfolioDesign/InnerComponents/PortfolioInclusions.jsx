import React from 'react';
import './portfolio-inclusions.css';
import MobilePortfolio from '../../../../../assets/images/modern-portfolio-showcase.jpg';

const PortfolioInclusions = () => {
    const inclusions = [
        "Home / Hero Section",
        "About Company",
        "Services & Solutions",
        "Products / Offerings Showcase",
        "Projects / Work Portfolio",
        "Gallery (Images / Videos)",
        "Case Studies / Success Stories",
        "Testimonials & Reviews",
        "Awards / Certifications",
        "Clients & Partners Section",
        "FAQ Section (Optional)",
        "Contact Page with Form",
        "WhatsApp Button Integration",
        "Google Map & Location",
        "Social Media Links Integration"
    ];

    return (
        <section className="portfolio-inclusions-section">
            <div className="container">
                <div className="inclusions-layout">
                    <div className="inclusions-content">
                        <h2>What Your Portfolio Website <span className="highlight-text">Will Include</span></h2>
                        <p>We design complete business portfolios with all the important sections needed to represent your company professionally and generate customer leads.</p>

                        <div className="inclusions-list">
                            {inclusions.map((item, index) => (
                                <div className="inclusion-item" key={index}>
                                    <div className="check-orb">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="inclusions-visual">
                        <div className="mockup-image-wrapper">
                            <img src={MobilePortfolio} alt="Mobile Portfolio Mockup" className="floating-image" />
                            <div className="mockup-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioInclusions;
