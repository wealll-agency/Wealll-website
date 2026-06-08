import React from 'react';
import '../platform-explanatory.css';

const PlatformAnimation = () => {
    const storyboards = [
        { title: "2D Overviews", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" },
        { title: "Motion UI Simulations", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" },
        { title: "Whiteboard Explanations", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" },
        { title: "Infographic Systems", img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=600" },
        { title: "Concept Animation", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600" }
    ];

    return (
        <section className="plat-section plat-section-darker overflow-hidden">
            <div className="container position-relative z-10">
                <div className="text-center mb-5">
                    <span className="plat-badge">Visual Storytelling</span>
                    <h2 className="plat-title">Animated & Motion <span>Graphic Explainers</span></h2>
                    <p className="plat-desc mx-auto">
                        Some platforms require visual storytelling to explain complex workflows. We use animation and motion graphics to simplify abstract processes and turn technical systems into engaging stories. Hover below to align the storyboards.
                    </p>
                </div>

                <div className="storyboard-canvas">
                    {storyboards.map((board, index) => (
                        <div key={index} className={`storyboard-item sb-${index + 1}`}>
                            <div className="sb-img" style={{ backgroundImage: `url(${board.img})` }}></div>
                            <div className="sb-content">
                                <h5>{board.title}</h5>
                                <div className="sb-play-btn"><i className="bi bi-play-fill"></i></div>
                            </div>
                        </div>
                    ))}

                    <div className="sb-center-target">
                        <h3>Hover to Align Sequence</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformAnimation;
