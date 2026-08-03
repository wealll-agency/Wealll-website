import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CareerData } from '../../../Data/CareerData';
import SEOMeta from '../../SEO';

const CareerDetails = () => {
    const { slug } = useParams();
    
    // Find the specific job based on the slug from the URL
    const job = CareerData.find(item => item.slug === slug);

    if (!job) {
        return (
            <div className="career-details-page section-padding text-center">
                <div className="container">
                    <h2 className="mb-4">Job Position Not Found</h2>
                    <p className="mb-4">We're sorry, but the job position you are looking for does not exist or has been removed.</p>
                    <Link to="/career" className="btn btn-warning cta-btn">Back to Careers</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="career-details-page section-padding">
            <SEOMeta 
                title={`${job.title} | We Alll`} 
                description={`Apply for the ${job.title} position at We Alll in Kolkata. Explore a dynamic career with us.`}
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="job-description-section mb-5">
                            <h2 className="job-title-large">{job.title}</h2>

                            <div className="desc-content mt-4">
                                <h4 className="desc-heading">Description:</h4>
                                <p>{job.description}</p>

                                <h4 className="desc-heading">Skill:</h4>
                                <ul className="desc-list">
                                    {job.skillsList.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>

                                <h4 className="desc-heading">Requirement:</h4>
                                <ul className="desc-list">
                                    {job.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="application-form-section" id="apply-form">
                            <h3 className="form-title mb-4">Apply Now</h3>
                            <form className="career-form">
                                <div className="mb-3">
                                    <label className="form-label">Position<span className="text-danger">*</span></label>
                                    <select className="form-select" required defaultValue={job.title}>
                                        <option value="">Select Position</option>
                                        {CareerData.map((item, index) => (
                                            <option key={index} value={item.title}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">First Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="First Name" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Last Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Last Name" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email Address<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" placeholder="johndoe@gmail.com" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Phone Number<span className="text-danger">*</span></label>
                                        <input type="tel" className="form-control" placeholder="Contact Number" required />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Professional account link</label>
                                    <input type="url" className="form-control" placeholder="Like LinkedIn" />
                                </div>

                                <h5 className="mt-4 mb-3">I currently work for</h5>
                                <div className="mb-3">
                                    <label className="form-label">Company Name<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" required />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Designation/Position<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Marketing Executive / Developer" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Notice Period(How soon can you join?)<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="15 Days" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Current Salary<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Current Salary" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Expected Salary<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Expected Salary" required />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Upload Resume<span className="text-danger">*</span></label>
                                    <input type="file" className="form-control" accept=".pdf,.doc,.docx" required />
                                </div>

                                <button type="submit" className="btn btn-warning cta-btn">SUBMIT APPLICATION</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerDetails;
