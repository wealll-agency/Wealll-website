import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import creativebgImage from "../../../../../assets/images/creativebg.png";
import gallery1 from "../../../../../assets/images/dm-1.png";
import gallery2 from "../../../../../assets/images/dm-2.png";
import gallery3 from "../../../../../assets/images/dm-3.png";
import gallery4 from "../../../../../assets/images/dm-4.png";
import gallery5 from "../../../../../assets/images/dm-5.png";

const Intro = ({ title, desc, defaultService, defaultBudget, sliderImages }) => {
  const bgStyle = {
    backgroundImage: `url(${creativebgImage})`,
  };

  const defaultSliderImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
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
                    Best{" "}
                    <span className="creative-bg" style={bgStyle}>
                      {title}
                    </span>{" "}
                    <br /> Company In India
                  </h1>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 col-md-12">
              <div className="contact-form">
                <form id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
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

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="phone"
                          name="phone"
                          id="phone"
                          className="form-control"
                          required
                          placeholder="Phone"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-7">
                      <div className="form-group">
                        <div className="service_dropdown">
                          <select
                            name="service"
                            className="form-control"
                            defaultValue={defaultService}
                          >
                            <option value="">Select Service</option>
                            <option value="Content Creation">
                              Content Creation
                            </option>
                            <option value="Video Production">
                              Video Production
                            </option>
                            <option value="Experience Design">
                              Experience Design
                            </option>
                            <option value="Digital Marketing">
                              Digital Marketing
                            </option>
                            <option value="Development">Development</option>
                            <option value="Page Recovery">Page Recovery</option>
                            <option value="PR Services">PR Services</option>
                            <option value="Influencer Marketing">
                              Influencer Marketing
                            </option>
                            <option value="Social Media Marketing">
                              Social Media Marketing
                            </option>
                          </select>
                          <div className="icon">
                            <i className="fa-solid fa-chevron-down"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-5">
                      <div className="form-group">
                        <div className="service_dropdown">
                          <select
                            name="budget"
                            className="form-control"
                            defaultValue={defaultBudget}
                          >
                            <option value="">Monthly Budget</option>
                            <option value="15k - 50k">15k - 50k</option>
                            <option value="50k - 1L">50k - 1L</option>
                            <option value="1L - 3L">1L - 3L</option>
                            <option value="3L - 5L">3L - 5L</option>
                            <option value="5L+">5L+</option>
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
                        className="default-btn mt-0 disabled"
                        style={{ pointerEvents: "all", cursor: "pointer" }}
                      >
                        Book Your Free Consultation <span></span>
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
                    />
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
