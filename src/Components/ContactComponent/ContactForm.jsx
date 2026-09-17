import React, { useState } from "react";
import { mediaUrl } from "../../config/media";
const map1 = mediaUrl("assets/images/bg-map.png");

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
      });
    }, 800);
  };

  return (
    <>
      <section className="contact-area ptb-50">
        <div className="container">
          <div className="row">
            {/* LEFT COLUMN */}
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Get in Touch</h2>
              </div>

              <div className="contact-info">
                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <span>Address</span>
                    Unit 8A, 4th Floor, Tower 1, Globsyn Crystal, Salt Lake Electronics Complex, Street No. 17, EP Block, Sector V, Kolkata – 700091, West Bengal, India
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <span>Email</span>
                    <a href="mailto: amit@wealll.com">amit@wealll.com</a>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <span>Phone</span>
                    <a href="tel:+91 82408 58613">+91 82408 58613</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Let’s talk!</h2>
                <p>
                  Project in mind? Desire digital innovation? Connect with us
                  for transformative solutions.
                </p>
              </div>

              <div className="contact-form">
                {submitted ? (
                  <div className="alert alert-success text-center py-4 my-3" role="alert">
                    <h4 className="alert-heading">Thank You!</h4>
                    <p className="mb-0">
                      Your message has been received. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form id="contactForm" onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="form-control"
                            required
                            placeholder="Full Name *"
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="form-control"
                            required
                            placeholder="Contact Number *"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="service_dropdown">
                            <select
                              name="budget"
                              className="form-control"
                              required
                              value={formData.budget}
                              onChange={handleChange}
                            >
                              <option value="">What is Your Marketing Budget?</option>
                              <option value="₹15,000 - ₹50,000">₹15,000 - ₹50,000 / month</option>
                              <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month</option>
                              <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 / month</option>
                              <option value="Above ₹3,00,000">Above ₹3,00,000 / month</option>
                            </select>
                            <div className="icon">
                              <i className="fa-solid fa-chevron-down"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            cols="30"
                            rows="5"
                            placeholder="Brief us about your business goals or target milestones..."
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button
                          type="submit"
                          className="default-btn"
                          disabled={loading}
                          style={{ pointerEvents: "all", cursor: "pointer" }}
                        >
                          {loading ? "Sending..." : "Send Message"} <span></span>
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Background Map */}
        <div className="bg-map">
          <img src={map1} alt="image" loading="lazy" />
        </div>
      </section>

      <div className="google-map-area">
        <div className="container-fluid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4389.4037994636865!2d88.4354091!3d22.5708402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275d604cd5615%3A0xfac1548308b5bef4!2sWe%20Alll!5e1!3m2!1sen!2sin!4v1784874613656!5m2!1sen!2sin"
            style={{ width: "100%", height: "500px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
