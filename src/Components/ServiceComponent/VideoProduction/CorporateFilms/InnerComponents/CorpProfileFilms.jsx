import React from 'react';
import '../corporate-films.css';
const team1 = mediaUrl("assets/images/Team-1.jpeg");
const industryLeader = mediaUrl("assets/images/Team-2.jpeg");
const csrDoc = mediaUrl("assets/images/Team-3.jpeg");
const globalPresence = mediaUrl("assets/images/Team-4.jpeg");
import { mediaUrl } from "../../../../../config/media";

const CorpProfileFilms = () => {
    const profiles = [
        {
            title: "Corporate Profile Videos",
            desc: "Comprehensive overviews of your business for stakeholders.",
            bg: team1
        },
        {
            title: "Manufacturing Showcase",
            desc: "Highlighting facility capabilities and operational scale.",
            bg: industryLeader
        },
        {
            title: "CSR & Sustainability",
            desc: "Documenting your social and environmental impact.",
            bg: csrDoc
        },
        {
            title: "Global Presence Films",
            desc: "Showcasing your expansion and international footprint.",
            bg: globalPresence
        }
    ];

    return (
        <section className="corp-section corp-section-darker">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="corp-badge">Institutional Films</span>
                    <h2 className="corp-title">Strengthen Your <span>Corporate Image</span></h2>
                    <p className="corp-desc mx-auto">
                        Corporate profile films are powerful tools for investor presentations, client meetings, and global partnerships. We produce professional institutional films that showcase your operations, capabilities, and achievements.
                    </p>
                </div>

                <div className="profile-grid">
                    {profiles.map((profile, index) => (
                        <div className="profile-card-modern" key={index}>
                            <div
                                className="profile-card-bg"
                                style={{ backgroundImage: `url(${profile.bg})` }}
                            ></div>
                            <div className="profile-card-overlay">
                                <div className="profile-card-content">
                                    <h3>{profile.title}</h3>
                                    <p>{profile.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <p style={{ fontSize: '1.2rem', color: '#ccc', fontStyle: 'italic' }}>
                        "These films help establish trust, professionalism, and long-term credibility."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CorpProfileFilms;
