import React from 'react';
import '../platform-explanatory.css';

const PlatformFeatures = () => {
    const modules = [
        {
            title: "Module Walkthroughs",
            icon: "bi-laptop",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            desc: "Step-by-step guidance on how specific internal modules function."
        },
        {
            title: "Feature Deep-Dives",
            icon: "bi-search",
            img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
            desc: "Thorough explanations isolating your most powerful unique functionality."
        },
        {
            title: "Integration Overviews",
            icon: "bi-diagram-3",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
            desc: "Visually demonstrate API handshakes and third-party synergies."
        },
        {
            title: "Backend Simplification",
            icon: "bi-hdd",
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
            desc: "Translate complex database, server, and API mechanics into easy concepts."
        },
        {
            title: "Tool Differentiation",
            icon: "bi-sliders",
            img: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&fit=crop&q=80&w=600",
            desc: "Highlight granular differences between your solution and legacy tools."
        },
        {
            title: "Security & Compliance",
            icon: "bi-shield-check",
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
            desc: "Build enterprise trust by visually explaining your encryption protocols."
        }
    ];

    return (
        <section className="plat-section plat-section-darker">
            <div className="container position-relative z-10">
                <div className="text-center mb-5">
                    <span className="plat-badge">Feature Spotlights</span>
                    <h2 className="plat-title">Feature-Specific <span>Explainer Videos</span></h2>
                    <p className="plat-desc mx-auto">
                        Modern platforms often include multiple modules and advanced features. We create focused explainer videos that simplify individual functionalities with absolute clarity.
                    </p>
                </div>

                <div className="plat-feature-grid">
                    {modules.map((mod, index) => (
                        <div key={index} className="plat-feat-card">
                            <div className="plat-feat-overlay-img" style={{ backgroundImage: `url(${mod.img})` }}></div>
                            <div className="plat-feat-icon">
                                <i className={`bi ${mod.icon}`}></i>
                            </div>
                            <h3>{mod.title}</h3>
                            <p>{mod.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformFeatures;
