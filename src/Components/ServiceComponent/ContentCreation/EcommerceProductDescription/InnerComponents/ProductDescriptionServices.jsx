import React from 'react';
import './product-description-services.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const ProductDescriptionServices = () => {
    // Icons as SVGs
    const icons = {
        amazon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2z"></path><path d="M12 17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2z"></path><path d="M2 17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2z"></path></svg>, // Placeholder (Box)
        shopify: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,
        flipkart: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
        seo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
        bullet: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>,
        technical: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
        luxury: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
        category: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    };

    const services = [
        {
            title: "Amazon Descriptions",
            desc: "Optimized product content designed to improve clicks and boost conversions.",
            icon: icons.amazon,
            neon: "#FF9900" // Amazon Orange
        },
        {
            title: "Shopify Descriptions",
            desc: "Brand-focused descriptions that match your store style and product identity.",
            icon: icons.shopify,
            neon: "#96bf48" // Shopify Green
        },
        {
            title: "Flipkart / Meesho",
            desc: "Simple, clear, and customer-friendly product listing content.",
            icon: icons.flipkart,
            neon: "#2874f0" // Flipkart Blue
        },
        {
            title: "SEO Product Copy",
            desc: "Keyword-optimized descriptions to help your products rank better on Google.",
            icon: icons.seo,
            neon: "#00d2ff" // Cyan
        },
        {
            title: "Product Bullet Points",
            desc: "Short and powerful points that quickly explain product benefits.",
            icon: icons.bullet,
            neon: "#fdb914" // Yellow
        },
        {
            title: "Technical Specs",
            desc: "Specification-based product descriptions for electronics, tools, and gadgets.",
            icon: icons.technical,
            neon: "#6c757d" // Grey/Metallic
        },
        {
            title: "Luxury Product Copy",
            desc: "Premium product descriptions that create desire and increase perceived value.",
            icon: icons.luxury,
            neon: "#d4af37" // Gold
        },
        {
            title: "Category Pages",
            desc: "SEO-friendly category content to improve visibility and user experience.",
            icon: icons.category,
            neon: "#e91e63" // Pink
        }
    ];

    return (
        <section className="product-services-section">
            <BannerComponent />
            <div className="container">
                <div className="ps-header">
                    <h2>Professional <span style={{ color: '#fdb914' }}>Product Description</span> Services</h2>
                    <p>Turn browsers into buyers with high-converting, SEO-optimized copy.</p>
                </div>

                <div className="ps-shelf-grid">
                    {services.map((service, index) => (
                        <div
                            className="ps-card"
                            key={index}
                            style={{ '--neon-color': service.neon }}
                        >
                            <div className="ps-card-inner">
                                <div className="ps-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="ps-title">{service.title}</h3>
                                <p className="ps-desc">{service.desc}</p>
                                <div className="ps-glow"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductDescriptionServices;
