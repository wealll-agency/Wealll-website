import React from 'react';
import '../corporate-films.css';
import founderImg from '../../../../../assets/images/Team-2.jpg';
import btsImg from '../../../../../assets/images/Team-3.jpg';
import cultureImg from '../../../../../assets/images/career-team.jpg';
import impactImg from '../../../../../assets/images/ugc-ads.jpeg'; // Placeholder
import successImg from '../../../../../assets/images/tab_img3.jpg';

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

                {/* Horizontal Scrolling Film Strip */}
                <div className="doc-film-strip">
                    {documentaries.map((doc, index) => (
                        <div
                            className="doc-frame"
                            key={index}
                            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url(${doc.bg})` }}
                        >
                            <h4>{doc.title}</h4>
                        </div>
                    ))}
                    {/* Duplicate for infinite feel visual */}
                    <div
                        className="doc-frame"
                        style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url(${founderImg})` }}
                    >
                        <h4>Founder Journey</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorpDocumentary;
