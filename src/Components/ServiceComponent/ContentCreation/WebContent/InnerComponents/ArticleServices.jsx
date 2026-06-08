import React from 'react';
import './article-services.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const ArticleServices = () => {
    const services = [
        {
            title: "Informative Articles",
            desc: "Well-structured articles that educate readers and explain topics in a simple way.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
            )
        },
        {
            title: "Research-Based Articles",
            desc: "Detailed, fact-driven content backed by research and reliable information.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            )
        },
        {
            title: "Business & Corporate",
            desc: "Professional writing for companies, brands, and industry-related publications.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zM18 11h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
            )
        },
        {
            title: "Technical Articles",
            desc: "Clear and easy-to-understand technical content for software, IT, and engineering topics.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm-3-7l-2.5-2.5L12 6l2.5 2.5L12 11zm7 7h-6v-2h6v2z" />
                </svg>
            )
        },
        {
            title: "Magazine / Feature",
            desc: "Engaging long-form articles written in a storytelling and professional magazine style.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5zm12-9h-4v2h4v-2zm-4-4h-4v2h4V6zm-4 8h-4v2h4v-2z" />
                </svg>
            )
        },
        {
            title: "News-Style Articles",
            desc: "Crisp, structured, and formal articles written in a news-reporting format.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 16H5v-2h6v2zm0-4H5v-2h6v2zm0-4H5V8h6v2zm7 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="article-services-section">
            <BannerComponent />
            <div className="container">
                <div className="article-services-header text-center">
                    <h2>Professional <span style={{ color: '#fdb914' }}>Article Writing</span> Services</h2>
                    <p>I write high-quality, well-researched articles that are informative, engaging, and written with a strong focus on clarity and credibility.</p>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className="article-service-card">
                                <div className="article-service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticleServices;
