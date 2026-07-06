import React from "react";
const map1 = mediaUrl("assets/images/bg-map.png");
import { mediaUrl } from "../../config/media";
const ContactForm = () => {
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
                <form id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          placeholder="Name"
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
                          placeholder="Email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          placeholder="Subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <div className="service_dropdown">
                          <select name="service" className="form-control">
                            <option value="">Select Service</option>
                            <option value="">Content Creation</option>
                            <option value="">Video Production</option>
                            <option value="">Experience Design</option>
                            <option value="">Digital Marketing</option>
                            <option value="">Development</option>
                            <option value="">Page Recovery</option>
                            <option value="">PR Services</option>
                            <option value="">Influencer Marketing</option>
                          </select>
                          <div className="icon">
                            <i className="fa-solid fa-chevron-down"></i>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <div className="service_dropdown">
                          <select name="service" className="form-control">
                            <option value="">Monthly Budget</option>
                            <option value="">15k - 50k</option>
                            <option value="">50k - 1L</option>
                            <option value="">1L - 3L</option>
                            <option value="">3L - 5L</option>
                            <option value="">5L+</option>
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
                          rows="6"
                          required
                          placeholder="Your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button
                        type="submit"
                        className="default-btn disabled"
                        style={{ pointerEvents: "all", cursor: "pointer" }}
                      >
                        Send Message <span></span>
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4389.370318214442!2d88.43323939999999!3d22.5718916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02755159f4e117%3A0x40e3bebe07f10e30!2sGlobsyn%20Crystals!5e1!3m2!1sen!2sin!4v1782454905362!5m2!1sen!2sin"
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
