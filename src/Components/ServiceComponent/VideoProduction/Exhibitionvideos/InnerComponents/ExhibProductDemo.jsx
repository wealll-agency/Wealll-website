import React, { useState } from 'react';
import '../exhibition-videos.css';

import pd1 from '../../../../../assets/images/portfolio_software1.jpg';
import pd2 from '../../../../../assets/images/portfolio_website4.jpg';
import pd3 from '../../../../../assets/images/portfolio_app2.jpg';
import pd4 from '../../../../../assets/images/monitor.png';

const ExhibProductDemo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const demos = [
        { title: "Live Demos", desc: "On-site recordings of product interactions.", img: pd1 },
        { title: "Feature Clips", desc: "Short, punchy feature explanations.", img: pd2 },
        { title: "Tech Walkthroughs", desc: "Deep dive into your actual software or mechanics.", img: pd3 },
        { title: "Presenter-led", desc: "Expert presentations explaining unique selling points.", img: pd4 }
    ];

    return (
        <section className="exhib-section exhib-section-darker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <span className="exhib-badge">Product Showcase</span>
                        <h2 className="exhib-title">Transform Live Demos into <span>Marketing Assets</span></h2>
                    </div>
                    <div className="col-lg-6">
                        <p className="exhib-desc pt-lg-4" style={{ borderLeft: '2px solid #333', paddingLeft: '20px' }}>
                            Exhibitions offer a valuable opportunity to demonstrate your products in action. We professionally record and edit your live demonstrations so they can be reused for marketing campaigns.
                        </p>
                    </div>
                </div>

                {/* Interactive Glowing Accordion */}
                <div className="demo-accordion">
                    {demos.map((demo, index) => (
                        <div
                            className={`demo-panel ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            style={{ backgroundImage: `url(${demo.img})` }}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {activeIndex !== index && (
                                <div className="demo-vertical-title">{demo.title}</div>
                            )}
                            <div className="demo-panel-content">
                                <h3>{demo.title}</h3>
                                <p>{demo.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExhibProductDemo;
