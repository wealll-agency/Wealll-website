import React, { useEffect, useRef } from "react";
// import Lottie from "lottie-react";
// import healthcareAnim from "../../../../../assets/lottie/healthcare.json";
// import realEstateAnim from "../../../../../assets/lottie/real-estate.json";
// import skincareAnim from "../../../../../assets/lottie/skincare.json";
// import entertainmentAnim from "../../../../../assets/lottie/entertainment.json";
// import automotiveAnim from "../../../../../assets/lottie/automotive.json";
// import fmcgAnim from "../../../../../assets/lottie/fmcg.json";
// import tourismAnim from "../../../../../assets/lottie/tourism.json";
// import fashionAnim from "../../../../../assets/lottie/fashion.json";
// import travelAnim from "../../../../../assets/lottie/travel.json";

const icon1 = mediaUrl("assets/lottie/01.gif");
const icon2 = mediaUrl("assets/lottie/02.gif");
const icon3 = mediaUrl("assets/lottie/03.gif");
const icon4 = mediaUrl("assets/lottie/04.gif");
const icon5 = mediaUrl("assets/lottie/05.gif");
const icon6 = mediaUrl("assets/lottie/06.gif");
const icon7 = mediaUrl("assets/lottie/07.gif");
const icon8 = mediaUrl("assets/lottie/08.gif");
const icon9 = mediaUrl("assets/lottie/09.gif");


import "./IndustriesWeServe.css";
import { mediaUrl } from "../../../../../config/media";

const IndustriesWeServe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('dm-ind-animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const industries = [
    {
      title: "Healthcare",
      description: "We assist healthcare businesses with brand positioning, leads, and sales using our proven digital marketing services.",
      animation: icon1,
    },
    {
      title: "Real Estate",
      description: "Our expert lead generation team brings in the most qualified leads for your agency by highlighting property benefits.",
      animation: icon2,
    },
    {
      title: "Skincare",
      description: "We develop and implement the right digital marketing strategies to help skincare brands get distributors.",
      animation: icon3,
    },
    {
      title: "Entertainment",
      description: "We enable the entertainment industry to secure more customers, grow their online business, and increase audience engagement.",
      animation: icon4,
    },
    {
      title: "Automotive",
      description: "We help automotive industries to achieve long-term growth with our digital marketing services.",
      animation: icon5,
    },
    {
      title: "FMCG",
      description: "We assist FMCG businesses in obtaining distributors and wholesalers nationwide through our lead generation services.",
      animation: icon6,
    },
    {
      title: "Tourism",
      description: "We generate sales-qualified leads of frequent travellers to bring better visibility to the tourism industry.",
      animation: icon7,
    },
    {
      title: "Fashion",
      description: "We engage the right audience to help luxury fashion brands gain customers and expand their franchise stores.",
      animation: icon8,
    },
    {
      title: "Travel & Leisure",
      description: "We connect Travel & Leisure businesses with the right audience to increase bookings through creative content and targeted ads.",
      animation: icon9,
    },
  ];

  return (
    <section className="dm-industries-section" ref={sectionRef}>
      {/* Ambient Background Elements */}
      <div className="dm-ind-bg-glow dm-glow-1"></div>
      <div className="dm-ind-bg-glow dm-glow-2"></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="dm-ind-badge dm-ind-reveal">OUR EXPERTISE</span>
            <h2 className="dm-ind-title mt-3 dm-ind-reveal" style={{ transitionDelay: '0.1s' }}>
              Industries We <span className="dm-ind-highlight">Serve</span>
            </h2>
            <p className="dm-ind-subtitle mt-3 dm-ind-reveal" style={{ transitionDelay: '0.2s' }}>
              Tailored digital marketing strategies designed to dominate your specific market niche.
            </p>
          </div>
        </div>

        <div className="dm-ind-grid">
          {industries.map((item, index) => (
            <div
              className="dm-ind-card dm-ind-reveal"
              style={{ transitionDelay: `${0.1 + (index * 0.1)}s` }}
              key={index}
            >
              <div className="dm-ind-card-inner">
                <div className="dm-ind-icon-wrapper">
                  {/* <Lottie
                    animationData={item.animation}
                    loop={true}
                    style={{ width: "100%", height: "100%", filter: "invert(1) drop-shadow(0px 5px 15px rgba(255,107,107,0.3))" }}
                  /> */}
                  <img src={item.animation} alt={item.title} loading="lazy" />
                </div>
                <div className="dm-ind-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="dm-ind-hover-line"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 pt-3">
          <div className="col-12 text-center dm-ind-reveal" style={{ transitionDelay: '0.6s' }}>
            <a href="#contact" className="dm-ind-btn">
              <span>Get Started With Us</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
