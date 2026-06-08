import React from 'react';
import '../platform-explanatory.css';

const PlatformOnboarding = () => {
    const steps = [
        {
            title: "Account Setup Walkthroughs",
            desc: "Eliminate friction during the crucial first 5 minutes of sign-up.",
            img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "First-Time User Tutorials",
            desc: "Guide users through their 'Aha!' moment instantly.",
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Feature Activation Guides",
            desc: "Encourage deeper platform adoption and daily active usage.",
            img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Platform Training Modules",
            desc: "Scalable automated training for entire enterprise teams.",
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section className="plat-section">
            <div className="container position-relative z-10">
                <div className="text-center mb-5">
                    <span className="plat-badge">User Adoption</span>
                    <h2 className="plat-title">Onboarding & <span>Tutorial Videos</span></h2>
                    <p className="plat-desc mx-auto">
                        A strong onboarding experience increases retention and reduces confusion. We design step-by-step tutorial videos that guide users effortlessly through setup and usage.
                    </p>
                </div>

                <div className="plat-onboard-journey">
                    <div className="plat-journey-path">
                        <div className="plat-journey-pulse"></div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="plat-journey-step">
                            <div className="plat-step-content">
                                <div className="plat-step-img" style={{ backgroundImage: `url(${step.img})` }}></div>
                                <h4>{step.title}</h4>
                                <p className="mb-0 text-muted">{step.desc}</p>
                            </div>
                            <div className="plat-step-node"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformOnboarding;
