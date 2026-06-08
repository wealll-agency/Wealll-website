import React from 'react';
import './email-services.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const EmailServices = () => {
    // Icons as inline SVGs
    const icons = {
        envelope: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
        chart: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>,
        news: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>,
        target: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
        rocket: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>,
        clock: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        cart: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
        calendar: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    };

    const services = [
        {
            title: "Welcome Emails",
            desc: "Strong first-impression emails that introduce your brand and build trust instantly.",
            icon: icons.envelope
        },
        {
            title: "Promotional Emails",
            desc: "Persuasive emails designed to boost sales, offers, and product conversions.",
            icon: icons.chart
        },
        {
            title: "Newsletters",
            desc: "Engaging newsletters that keep your audience updated and connected with your brand.",
            icon: icons.news
        },
        {
            title: "Cold Outreach",
            desc: "Professional outreach emails written to generate leads and increase reply rates.",
            icon: icons.target
        },
        {
            title: "Product Launch",
            desc: "High-impact email copy that creates excitement and drives product launch sales.",
            icon: icons.rocket
        },
        {
            title: "Follow-up Emails",
            desc: "Clear and well-written follow-up emails to improve responses and conversions.",
            icon: icons.clock
        },
        {
            title: "Abandoned Cart",
            desc: "Conversion-focused emails to recover lost customers and increase sales.",
            icon: icons.cart
        },
        {
            title: "Event Invitations",
            desc: "Attractive invitation emails that improve registrations and attendance.",
            icon: icons.calendar
        }
    ];

    return (
        <section className="email-services-section">
            <div className="services-bg-nebula"></div>
            <BannerComponent />
            <div className="container">
                <div className="es-header">
                    <h2>Professional <span style={{ color: '#403aff' }}>Email Writing</span></h2>
                    <p>I write high-converting email content that helps businesses build relationships and drive sales.</p>
                </div>

                <div className="es-grid">
                    {services.map((service, index) => (
                        <div className="es-card" key={index}>
                            <div className="es-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="es-title">{service.title}</h3>
                            <p className="es-desc">{service.desc}</p>
                            <div className="es-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmailServices;
