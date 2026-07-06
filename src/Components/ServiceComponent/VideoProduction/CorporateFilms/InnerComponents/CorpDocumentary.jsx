import React from 'react';
import '../corporate-films.css';
const founderImg = mediaUrl("assets/images/documentaries-1.jpeg");
const btsImg = mediaUrl("assets/images/documentaries-2.jpeg");
const cultureImg = mediaUrl("assets/images/documentaries-3.jpeg");
const impactImg = mediaUrl("assets/images/documentaries-4.jpeg");
const successImg = mediaUrl("assets/images/tab_img3.jpg");
import { mediaUrl } from "../../../../../config/media";

const CorpDocumentary = () => {
    const documentaries = [
        { title: "Founder Journey", bg: founderImg },
        { title: "Behind-the-Scenes", bg: btsImg },
        { title: "Employee Culture", bg: cultureImg },
        { title: "Community Impact", bg: impactImg },
        { title: "Client Success", bg: successImg }
    ];

    return (
        <section className="corp-section">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-8">
                        <span className="corp-badge">Business Documentaries</span>
                        <h2 className="corp-title">Authentic Stories That <span>Inspire Confidence</span></h2>
                        <p className="corp-desc">
                            Documentary-style storytelling creates a deeper emotional connection with audiences. We develop structured, cinematic business documentaries that highlight your people, culture, and impact.
                        </p>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <p style={{ color: '#fdb914', fontWeight: 600, borderLeft: '3px solid #fdb914', paddingLeft: '15px', textAlign: 'left' }}>
                            We focus on authenticity, human connection, and long-form storytelling that strengthens brand perception.
                        </p>
                    </div>
                </div>

                {/* 4 Grid Layout */}
                <div className="profile-grid mt-4">
                    {documentaries.slice(0, 4).map((doc, index) => (
                        <div className="profile-card-modern" key={index}>
                            <div
                                className="profile-card-bg"
                                style={{ backgroundImage: `url(${doc.bg})` }}
                            ></div>
                            <div className="profile-card-overlay">
                                <div className="profile-card-content">
                                    <h3>{doc.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorpDocumentary;
