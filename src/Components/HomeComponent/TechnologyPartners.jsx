import React from 'react';
import { mediaUrl } from '../../config/media';

const partner1 = mediaUrl("assets/images/tech-logo1.png");
const partner2 = mediaUrl("assets/images/tech-logo2.png");
const partner3 = mediaUrl("assets/images/tech-logo3.png");
const partner4 = mediaUrl("assets/images/tech-logo4.png");
const partner5 = mediaUrl("assets/images/tech-logo5.png");
const partner6 = mediaUrl("assets/images/tech-logo6.png");

const TechnologyPartners = () => {
    const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

    return (
        <section className="technology-partners py-5" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <h2 className="text-center default_font mb-5 fw-bold" style={{ color: '#002249' }}>Our Technology Partners</h2>
                <div className="row justify-content-center g-4">
                    {partners.map((partner, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-2">
                            <div className="partner-card w-100 h-100 d-flex align-items-center justify-content-center p-3 rounded" style={{ backgroundColor: '#ffffff', minHeight: '120px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <img src={partner} alt={`Technology Partner ${index + 1}`} className="img-fluid" style={{ maxHeight: '80px', objectFit: 'contain' }} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologyPartners;
