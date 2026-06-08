import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';

const EmailAddons = () => {
    const addons = [
        {
            title: "IP Warmup",
            desc: "Boost your email deliverability ratio securely.",
            icon: "🌐"
        },
        {
            title: "Data Sourcing",
            desc: "Targeted school/student or homeowner data.",
            icon: "📊"
        },
        {
            title: "Custom Copywriting",
            desc: "High-converting email copy by expert writers.",
            icon: "✍️"
        },
        {
            title: "Spam Testing",
            desc: "Pre-send spam score analysis for safety.",
            icon: "🛡️"
        },
        {
            title: "Template Design",
            desc: "Extra responsive custom HTML templates.",
            icon: "🎨"
        }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: 'transparent', paddingTop: '20px' }}>
            <div className="container">
                <div className="logo-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span className="email-gradient-text">Add-ons</span></h3>
                    </div>
                    <div className="row justify-content-center">
                        {addons.map((addon, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="addon-card-premium h-100">
                                    <div className="addon-icon-box">
                                        {addon.icon}
                                    </div>
                                    <div className="addon-content">
                                        <h4>{addon.title}</h4>
                                        <p>{addon.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailAddons;
