import React from 'react';
import { Link } from 'react-router-dom';

const CareerDetails = () => {
    return (
        <div className="career-details-page section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="job-description-section mb-5">
                            <h2 className="job-title-large">Full stack Developer</h2>

                            <div className="desc-content mt-4">
                                <h4 className="desc-heading">Description:</h4>
                                <p>We Alll is a Kolkata-based full-stack development and marketing company looking for content writers (in-office full-time positions). We are looking for versatile, sincere, and hardworking candidates for the Content Writer positions with our firm. With We Alll, as a Content Writer or Editor, you will get the opportunity to work in a dynamic and fast-growth environment, both professionally and personally rewarding. We are looking for writers at all experience levels.</p>

                                <h4 className="desc-heading">Skill:</h4>
                                <ul className="desc-list">
                                    <li>Meeting with clients to discuss website design and function.</li>
                                    <li>Designing and building the website front-end.</li>
                                    <li>Creating the website architecture.</li>
                                    <li>Designing and managing the website back-end including database and server integration.</li>
                                    <li>Generating WordPress themes and plugins.</li>
                                    <li>Conducting website performance tests.</li>
                                    <li>Troubleshooting content issues.</li>
                                    <li>Conducting WordPress training with the client.</li>
                                    <li>Monitoring the performance of the live website.</li>
                                </ul>

                                <h4 className="desc-heading">Requirement:</h4>
                                <ul className="desc-list">
                                    <li>Bachelor's degree in computer science or a similar field.</li>
                                    <li>Proven work experience as a WordPress developer.</li>
                                    <li>Knowledge of front-end technologies including CSS3, JavaScript, HTML5, and jQuery.</li>
                                    <li>Knowledge of code versioning tools including Git, Mercurial, and SVN.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="application-form-section" id="apply-form">
                            <h3 className="form-title mb-4">Apply Now</h3>
                            <form className="career-form">
                                <div className="mb-3">
                                    <label className="form-label">Position<span className="text-danger">*</span></label>
                                    <select className="form-select" required>
                                        <option value="">Select Position</option>
                                        <option value="Full Stack Developer">Full Stack Developer</option>
                                        <option value="PHP Laravel Developer">PHP Laravel Developer</option>
                                        <option value="WordPress Developer">WordPress Developer</option>
                                        <option value="Content Writer">Content Writer</option>
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
