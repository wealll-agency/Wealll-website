import React from 'react';
import './blog-services.css';

const BlogServices = () => {
    const services = [
        {
            title: "SEO Blog Articles",
            desc: "Keyword-optimized blog posts designed to rank on Google and drive organic traffic.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            )
        },
        {
            title: "Informational Blogs",
            desc: "Well-researched content that educates your audience and builds trust.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
            )
        },
        {
            title: "How-To Guides & Tutorials",
            desc: "Step-by-step blog posts that provide value and keep readers engaged.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
            )
        },
        {
            title: "Product & Service Blogs",
            desc: "Blogs written to promote your products/services naturally while staying informative.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
            )
        },
        {
            title: "Listicle Articles",
            desc: "Highly clickable blog formats (Top 10 / Best Of) perfect for fast reading and high engagement.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                </svg>
            )
        },
        {
            title: "Affiliate Blog Content",
            desc: "Affiliate-friendly blog posts written to increase clicks and improve conversions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
            )
        }
    ];

    return (
        <section className="blog-services-section">
            <div className="container">
                <div className="blog-services-header text-center">
                    <h2>Blog Writing <span style={{ color: '#fdb914' }}>Services</span></h2>
                    <p>I write high-quality, engaging, and SEO-friendly blog content that helps your website attract traffic, build authority, and convert readers into customers.</p>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className="blog-service-card">
                                <div className="blog-service-icon">
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

export default BlogServices;
