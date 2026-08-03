import React from 'react';
import { Link } from 'react-router-dom';
import { CareerData as openings } from '../../../Data/CareerData';

const CareerOpenings = () => {

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
                                            <p><span>Experience :</span> {job.experience}</p>
                                            <p><span>Number Of Post :</span> {job.posts}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                                        <Link to={`/career-details/${job.slug}`} className="btn btn-warning cta-btn apply-btn me-3">APPLY NOW</Link>
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
