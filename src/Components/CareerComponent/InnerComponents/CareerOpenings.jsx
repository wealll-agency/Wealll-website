import React from 'react';
import { Link } from 'react-router-dom';

const CareerOpenings = () => {
    const openings = [
        {
            title: "Full stack Developer Intern",
            location: "Kolkata",
            qualification: "Graduate or Equivalent",
            skills: "Nodejs, python, javascript, MongoDB",
            experience: "2-3 months",
            posts: 2
        },
        {
            title: "PHP Laravel Developer intern",
            location: "Kolkata",
            qualification: "Graduate or Equivalent",
            skills: "Laravel",
            experience: "2-3 months",
            posts: 2
        },
        {
            title: "WordPress Developer Intern",
            location: "Kolkata",
            qualification: "Graduate or Equivalent",
            skills: "Programmation languages: HTML, CSS, PHP, Javascript. Theme and plugin installation. Plugin development. Page builders: Elementor, Divi, Beaver. Database management: SQL, MySQL. Digital marketing and SEO. Github and BitBucket.",
            experience: "2-3 months",
            posts: 5
        },
        {
            title: "Content Writers Intern",
            location: "Kolkata",
            qualification: "Bachelor degree",
            skills: "content writer, copywriter, content editor, content reviewer",
            experience: "2-3 months",
            posts: 2
        },
        {
            title: "seo Intern",
            location: "Kolkata",
            qualification: "Bachelor degree",
            skills: "SEO, SEM, SMO, Content Marketing, Link Building, Keyword Research, On-Page SEO, Off-Page SEO",
            experience: "2-3 months",
            posts: 3
        },
        {
            title: "Digital Marketing Intern",
            location: "Kolkata",
            qualification: "Bachelor degree",
            skills: "Digital Marketing, SEM, SMO, Content Marketing, Link Building, Keyword Research, On-Page SEO, Off-Page SEO",
            experience: "2-3 months",
            posts: 1
        },
    ];

    return (
        <div className="career-openings section-padding">
            <div className="container">
                <h2 className="section-title mb-5">Our current Opening</h2>
                <div className="row">
                    {openings.map((job, index) => (
                        <div key={index} className="col-12 mb-4">
                            <div className="job-card">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <h3 className="job-title">{job.title}</h3>
                                        <div className="job-details">
                                            <p><span>Work Location :</span> {job.location}</p>
                                            <p><span>Qualification :</span> {job.qualification}</p>
                                            <p><span>Skills required :</span> {job.skills}</p>
                                            <p><span>Experience :</span> {job.experience}</p>āā
                                            <p><span>Number Of Post :</span> {job.posts}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                                        <Link to="/career-details" className="btn btn-warning cta-btn apply-btn me-3">APPLY NOW</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerOpenings;
