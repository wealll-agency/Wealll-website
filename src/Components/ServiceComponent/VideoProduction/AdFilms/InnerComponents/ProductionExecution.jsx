import React, { useState } from "react";
import "./production-execution.css";

const productionServices = [
    { id: "dir", name: "Cinematic Direction", icon: "🎬", active: true },
    { id: "sht", name: "Professional Shooting", icon: "🎥", active: false },
    { id: "lgt", name: "Lighting & Set Design", icon: "💡", active: false },
    { id: "voc", name: "Voiceover Recording", icon: "🎙️", active: false },
    { id: "bgm", name: "Background Music & Sound Design", icon: "🎧", active: false },
    { id: "edt", name: "Video Editing & Color Grading", icon: "💻", active: false },
    { id: "mfx", name: "Motion Graphics & Animation", icon: "✨", active: false }
];

const ProductionExecution = () => {
    const [activeService, setActiveService] = useState(0);

    return (
        <section className="production-execution-section">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center pt-5">
                        <div className="promo-badge">🎬 4. Production & Creative Execution</div>
                        <h2 className="promo-main-title">
                            Premium <br />
                            <span className="text-yellow-gradient">Production Quality</span>
                        </h2>
                        <p className="promo-description">
                            We combine creativity with professional execution to deliver visually compelling ad films. High-quality visuals enhance brand perception and trust.
                        </p>
                    </div>
                </div>

                <div className="director-monitor-container">
                    {/* Monitor Frame */}
                    <div className="monitor-frame-outer">
                        <div className="monitor-screen">

                            {/* Screen Content - The Visual */}
                            <div className="screen-visual-background">
                                <img
                                    src="https://images.unsplash.com/photo-1590102426319-c7526718cd70?q=80&w=1200&auto=format&fit=crop"
                                    alt="Production Set"
                                    className="set-image"
                                loading="lazy" />
                                <div className="set-overlay-gradient"></div>
                            </div>

                            {/* Viewfinder UI Elements */}
                            <div className="vf-corner top-left"></div>
                            <div className="vf-corner top-right"></div>
                            <div className="vf-corner bottom-left"></div>
                            <div className="vf-corner bottom-right"></div>
                            <div className="vf-center-crosshair"><span>+</span></div>

                            <div className="vf-top-info">
                                <span className="vf-rec"><span className="dot"></span> REC 00:04:23:45</span>
                                <span className="vf-battery">🔋 84%</span>
                                <span className="vf-res">4K 60FPS ISO 800</span>
                            </div>

                            <div className="vf-bottom-audio">
                                <div className="audio-bars">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <div className="vf-lens">50MM f/1.4</div>
                            </div>

                            {/* Interactive Services Overlay */}
                            <div className="monitor-services-ui">
                                <div className="services-list-container">
                                    <h4 className="services-title">Production Services</h4>
                                    <ul>
                                        {productionServices.map((service, index) => (
                                            <li
                                                key={service.id}
                                                className={`service-item ${activeService === index ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveService(index)}
                                            >
                                                <span className="srv-icon">{service.icon}</span>
                                                <span className="srv-name">{service.name}</span>
                                                <div className="srv-highlight-bar"></div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="active-service-display">
                                    <div className="display-card glass-panel">
                                        <div className="glass-reflection"></div>
                                        <div className="display-icon">{productionServices[activeService].icon}</div>
                                        <h3>{productionServices[activeService].name}</h3>
                                        <p>Executing with industry-standard equipment and creative excellence.</p>
                                        <div className="status-badge">System Online</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionExecution;
