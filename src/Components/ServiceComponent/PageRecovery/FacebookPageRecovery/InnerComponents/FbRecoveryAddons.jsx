import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';
import '../../../Development/LaravelDeveloper/InnerComponents/laravel-dark.css';

const FbRecoveryAddons = () => {
    const addons = [
        {
            title: "2FA Policy Setup",
            desc: "Mandate hardware 2FA for all your agency and client admins.",
            icon: <i className="fa-solid fa-shield-halved"></i>
        },
        {
            title: "Business Manager Audit",
            desc: "Quarterly reviews of assets, pixels, and ad account permissions.",
            icon: <i className="fa-solid fa-list-check"></i>
        },
        {
            title: "Rogue App Detachment",
            desc: "Scan and remove hidden 3rd-party apps with hidden admin-level permissions.",
            icon: <i className="fa-solid fa-plug-circle-xmark"></i>
        },
        {
            title: "Emergency Retainer",
            desc: "Pay a small monthly fee to have priority jumping if an active campaign is hijacked.",
            icon: <i className="fa-solid fa-truck-medical"></i>
        }
    ];

    return (
        <section className="logo-pricing-section pt-0 fb-addon-section">
            <div className="container">
                {/* Add-ons Grid */}
                <div className="logo-addons-area">
                    <div className="addons-header text-center mb-5 pb-3">
                        <h3 className="fb-section-title-md">Optional <span className="fb-accent-text">Security Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="addon-card-premium" key={index}>
                                <div className="addon-icon-box fb-addon-icon-box">
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FbRecoveryAddons;
