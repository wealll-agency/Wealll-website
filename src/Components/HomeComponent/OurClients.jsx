import React, { useState } from 'react';
import './our-clients-v2.css';
import BrandSlider from "./../HomeComponent/BrandSlider";

// Importing the authentic downloaded PNG logos
import logo1 from "../../assets/images/AAmi-Bangali.png";
import logo2 from "../../assets/images/BWA-ODISHA.png";
import logo3 from "../../assets/images/Choice-Foundation.png";
import logo4 from "../../assets/images/Kesri.png";
import logo5 from "../../assets/images/Karma-International-01.png";
import logo6 from "../../assets/images/Khukumoni.png";
import logo7 from "../../assets/images/Maxglow.png";
import logo8 from "../../assets/images/Vyapaar-Zone.png";
import logo9 from "../../assets/images/Lakme.png";
import logo10 from "../../assets/images/Kiwi.png";
import logo11 from "../../assets/images/Pro-100.png";
import logo12 from "../../assets/images/Sutraa.png";
import logo13 from "../../assets/images/SS-Medicorp.png";
import logo14 from "../../assets/images/Beautech2.png";
import logo15 from "../../assets/images/Jawed Habib.png";

import test1 from "../../assets/images/testimonal-image1.webp";
import test2 from "../../assets/images/testimonal-image2.webp";
import test3 from "../../assets/images/testimonal-image3.webp";

const clientLogos = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15
];

const OurClients = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const helpOptions = [
        "AEO", "SEO", "Paid media",
        "Creative", "Content", "Social Media",
        "App Store", "Analytics", "Other"
    ];

    const toggleOption = (option) => {
        setSelectedOptions(prev =>
            prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
        );
    };

    return (
        <section className="np-clients-section">
            <BrandSlider />
            <div className="container-fluid np-clients-container">
                <div className="np-clients-header text-center">
                    <h2>
                        We make sure customers find you<br />
                        everywhere from <span>Google</span> to <span>ChatGPT</span>
                    </h2>
                    <p>We help you show up everywhere customers are searching, swiping, scrolling, streaming, and shopping.</p>
                    <a href="#" className="np-btn-primary mx-auto">Work with us</a>
                </div>

                <div className="row np-clients-content align-items-center">

                    {/* LEFT SIDE: ANIMATED FLOATING BUBBLES */}
                    <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 p-relative-override">
                        <div className="floating-logos-wrapper">
                            <h3 className="floating-text-center">
                                <span className="word-anim" style={{ animationDelay: '0s' }}>Who</span>&nbsp;
                                <span className="word-anim" style={{ animationDelay: '0.3s' }}>we</span><br />
                                <span className="word-anim" style={{ animationDelay: '0.6s' }}>work</span>&nbsp;
                                <span className="word-anim" style={{ animationDelay: '0.9s' }}>with</span>
                            </h3>
                            {clientLogos.map((logo, index) => (
                                <div
                                    className={`bubble-container bubble-pos-${index + 1}`}
                                    style={{ animationDelay: `${1.4 + (index * 0.1)}s` }}
                                    key={index}
                                >
                                    <div className={`floating-bubble float-anim-${(index % 5) + 1}`}>
                                        <img src={logo} alt={`Client logo ${index + 1}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: INTERACTIVE FORM CONTAINER */}
                    <div className="col-lg-6 col-md-12">
                        <div className="np-form-container">
                            <h3>How can we help you get found?</h3>

                            <div className="np-options-grid">
                                {helpOptions.map((option, idx) => (
                                    <label
                                        className={`np-checkbox-label ${selectedOptions.includes(option) ? 'checked' : ''}`}
                                        key={idx}
                                    >
                                        <div className="np-checkbox-box">
                                            {selectedOptions.includes(option) && (
                                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="3" fill="none">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            )}
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={selectedOptions.includes(option)}
                                            onChange={() => toggleOption(option)}
                                            style={{ display: 'none' }}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>

                            <a href="#" className="np-btn-primary form-btn">Get started</a>
                        </div>

                        <div className="trusted-clients-section d-flex align-items-center mt-4">
                            <div className="trusted-images">
                                <img src={test1} alt="Client 1" className="trusted-img" />
                                <img src={test2} alt="Client 2" className="trusted-img" />
                                <img src={test3} alt="Client 3" className="trusted-img" />
                            </div>
                            <div className="trusted-text ms-3">
                                <p className="mb-0 text-white" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
                                    Trusted by <strong style={{ color: '#27ae60', fontWeight: '700' }}>1000+</strong> happy clients
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurClients;