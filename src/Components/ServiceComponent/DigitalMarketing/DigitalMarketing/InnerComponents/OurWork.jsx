import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./OurWork.css";

// Import local assets
import bunny from "../../../../../assets/images/Bunny.png";
import karma from "../../../../../assets/images/Karma.png";
import philo from "../../../../../assets/images/Phillo.png";
import kesri from "../../../../../assets/images/kesri.jpeg";
import khukumoni from "../../../../../assets/images/khukumoni.jpeg";

const OurWork = () => {
  const projects = [
    {
      id: 1,
      title: "Curating Impactful Digital Campaigns for Moroccan Atelier",
      tags: ["SOCIAL MEDIA", "INFLUENCER MARKETING"],
      bgColor: "#000000",
      image: bunny,
      textColor: "#ffffff",
    },
    {
      id: 2,
      title: "Driving Awareness for Cancer Care with Social Media Campaigns",
      tags: ["SOCIAL MEDIA", "CREATIVE ARTWORK"],
      bgColor: "#000000",
      image: karma,
      textColor: "#ffffff",
    },
    {
      id: 3,
      title: "360° Google Marketing for a Prominent Jewellery Brand",
      tags: ["GOOGLE ADS", "SEO", "SOCIAL MEDIA"],
      bgColor: "#000000",
      image: philo,
      textColor: "#ffffff",
    },
    {
      id: 4,
      title: "Working with Founders for Branding & Digital Marketing",
      tags: ["BRANDING", "DIGITAL MARKETING"],
      bgColor: "#000000",
      image: kesri,
      textColor: "#ffffff",
    },
    {
      id: 5,
      title: "Boosting Online Presence with Strategic Performance Marketing",
      tags: ["PERFORMANCE MARKETING", "STRATEGY"],
      bgColor: "#000000",
      image: khukumoni,
      textColor: "#ffffff",
    },
  ];

  return (
    <section className="our-work-section">
      <div className="container-fluid px-lg-5">
        <div className="row align-items-center mb-5">
          <div className="col">
            <h2 className="our-work-title">Our Work</h2>
          </div>
          <div className="col-auto">
            {/* Custom Navigation Buttons */}
            <div className="slider-nav-buttons">
              <button className="swiper-button-custom-prev">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="swiper-button-custom-next">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Scrollbar]}
          spaceBetween={30}
          slidesPerView={"auto"}
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-custom-next",
            prevEl: ".swiper-button-custom-prev",
          }}
          scrollbar={{
            draggable: true,
            hide: false,
          }}
          className="our-work-slider"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="work-slide">
              <div
                className="project-card"
                style={{ backgroundColor: project.bgColor }}
              >
                <div className="card-inner">
                  <div className="card-top">

                    <h3
                      className="project-title"
                      style={{ color: project.textColor }}
                    >
                      {project.title}
                    </h3>
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag-item">
                          <span className="dot">•</span> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWork;
