import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const creativebgImage = mediaUrl("assets/images/creativebg.png");
const gallery1 = mediaUrl("assets/images/dm-1.png");
const gallery2 = mediaUrl("assets/images/dm-2.png");
const gallery3 = mediaUrl("assets/images/dm-3.png");
const gallery4 = mediaUrl("assets/images/dm-4.png");
const gallery5 = mediaUrl("assets/images/dm-5.png");

const dm1 = mediaUrl("assets/images/dm1.jpeg");
const dm2 = mediaUrl("assets/images/dm2.jpeg");
const dm3 = mediaUrl("assets/images/dm3.jpeg");
const dm4 = mediaUrl("assets/images/dm4.jpeg");
const dm5 = mediaUrl("assets/images/dm5.jpeg");
import { mediaUrl } from "../../../../../config/media";
import { submitLeadToCRM } from "../../../../../services/leadService";

const Intro = ({ title, desc, defaultService, defaultBudget, sliderImages }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: defaultBudget || "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in your Name and Contact Number.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await submitLeadToCRM({
        ...formData,
        source: title ? `Service Page Intro - ${title}` : "Service Page Intro",
        reference: "Hero Intro Form",
      });

      if (res && res.success) {
        setLoading(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });
        setSubmitted(true);
      } else {
        throw new Error(res ? res.error : "Submission failed");
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      setLoading(false);
      setErrorMsg("Something went wrong. Please try again or call us at +91 82408 58613.");
    }
  };

  const bgStyle = {
    backgroundImage: `url(${creativebgImage})`,
  };

  const defaultSliderImages = [
    dm1,
    dm2,
    dm3,
    dm4,
    dm5,
    dm1,
    dm2,
    dm3,
    dm4,
    dm5,
  ];

  const galleryImages = sliderImages || defaultSliderImages;

  return (
    <>
      <section className="digital_marketing_intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-lg-6 col-md-12">
              <div className="service_intro">
                <div className="hero__content_Inner position-relative">
                  <h1 className="main-title text-start">
                    One of the Best{" "}
                    <span className="creative-bg" style={bgStyle}>
                      {title}
                    </span>{" "}
                    <br /> Company In Kolkata
                  </h1>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 col-md-12">
              <div className="contact-form">
                {submitted ? (
                  <div className="alert alert-success text-center py-4 my-3" role="alert">
                    <h4 className="alert-heading">Thank You!</h4>
                    <p className="mb-0">
                      Your consultation request has been received. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form id="contactForm" onSubmit={handleSubmit} noValidate>
                    {/* Honeypot field for bot protection */}
                    <input type="text" name="_hp" value="" readOnly style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                    
                    {errorMsg && (
                      <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '14px' }}>
                        {errorMsg}
                      </div>
                    )}
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
                          className="default-btn mt-0"
                          disabled={loading}
                          style={{ pointerEvents: "all", cursor: "pointer" }}
                        >
                          {loading ? "Submitting..." : "Book Your Free Consultation"} <span></span>
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
      </section>

      <div className="scroll-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
              <h1>
                Scale <span>Smarter</span>, Not Harder
              </h1>
            </div>
            <div className="col-lg-9 col-md-8">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={25}
                slidesPerView={4}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                className="mySwiper"
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Gallery ${index}`}
                      style={{ width: "100%", borderRadius: "10px" }}
                    loading="lazy" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
