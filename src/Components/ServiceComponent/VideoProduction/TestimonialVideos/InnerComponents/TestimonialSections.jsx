import React, { useEffect, useRef, useState } from "react";
import "./testimonial-videos.css";

// Importing the generated cinematic assets
import img1 from "../../../../../assets/images/testimonial_customer_exp_1772799592410.png";
import img2 from "../../../../../assets/images/testimonial_success_story_1772799633035.png";
import img3 from "../../../../../assets/images/testimonial_founder_1772799651082.png";
import img4 from "../../../../../assets/images/testimonial_interview_1772799683120.png";
import img5 from "../../../../../assets/images/testimonial_social_proof_1772799701057.png";
import img6 from "../../../../../assets/images/testimonial_marketing_1772799760599.png";
import dummyVideo from "../../../../../assets/Video/about_video.mp4";
import BannerComponent from "../../../CommonComponents/BannerComponent";

const testimonialData = [
  {
    title: "Customer Experience Testimonial Videos",
    subtitle: "Real Stories from Real Customers",
    desc: "Customer experience videos capture authentic feedback from clients who have used your products or services. These testimonials highlight the value customers received and the problems your solution helped solve.",
    points: [
      "Customer feedback interviews",
      "Product experience testimonials",
      "Service satisfaction stories",
      "Long-term customer relationship highlights",
      "Real user experience videos",
    ],
    footer:
      "These videos help potential customers connect with genuine experiences and build confidence in your brand.",
    img: img1,
  },
  {
    title: "Client Success Story Videos",
    subtitle: "Showcase Measurable Business Results",
    desc: "Success story videos go beyond simple feedback by highlighting the real impact your product or service has delivered. These videos demonstrate how businesses or individuals achieved measurable improvements after working with your brand.",
    points: [
      "Business growth case studies",
      "Problem-solution storytelling",
      "Project success narratives",
      "Before-and-after business impact stories",
      "Partnership success stories",
    ],
    footer:
      "These testimonials act as strong proof of your expertise and value.",
    img: img2,
  },
  {
    title: "Founder & Leadership Testimonials",
    subtitle: "Authority-Based Testimonials from Business Leaders",
    desc: "Testimonials from founders, executives, or industry leaders provide deeper insights into the value of professional partnerships. These testimonials help build authority and credibility for your brand.",
    points: [
      "CEO or founder testimonials",
      "Executive partnership stories",
      "Strategic collaboration experiences",
      "Industry expert endorsements",
    ],
    footer:
      "These videos communicate trust and strengthen your company’s reputation.",
    img: img3,
  },
  {
    title: "Interview-Style Testimonial Videos",
    subtitle: "Structured Conversations That Highlight Key Insights",
    desc: "Interview-style testimonial videos present client feedback in a structured and engaging format. By asking guided questions, we help clients share meaningful insights about their experience.",
    points: [
      "Guided customer interviews",
      "Question-and-answer formats",
      "On-location client interviews",
      "Event and conference testimonials",
    ],
    footer:
      "These structured conversations make testimonials more engaging and informative.",
    img: img4,
  },
  {
    title: "Short Social Proof Video Clips",
    subtitle: "High-Impact Testimonials for Social Media",
    desc: "Short testimonial clips are ideal for digital marketing campaigns and social media promotion. These concise videos deliver powerful social proof in a short amount of time.",
    points: [
      "15–30 second testimonial videos",
      "Social media testimonial snippets",
      "Ad campaign testimonial clips",
      "Quick recommendation videos",
    ],
    footer:
      "These short videos work especially well on platforms like Instagram, LinkedIn, and YouTube.",
    img: img5,
  },
  {
    title: "Marketing Integration & Distribution Strategy",
    subtitle: "Turn Testimonials into Powerful Marketing Assets",
    desc: "As a digital marketing company, we help integrate testimonial videos into your marketing campaigns so they actively support lead generation and brand credibility.",
    points: [
      "Website testimonial section integration",
      "Landing page video placement",
      "YouTube testimonial content optimization",
      "Social media promotion strategies",
      "Retargeting advertisements using testimonials",
      "Video performance tracking and analytics",
    ],
    footer:
      "This ensures your testimonial videos become long-term marketing assets for your brand.",
    img: img6,
  },
];

const TestimonialSections = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tm-in-view");
        }
      });
    }, observerOptions);

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (el, index) => {
    observerRefs.current[index] = el;
  };

  return (
    <div className="tm-page-wrapper">
      <BannerComponent />
      <div className="container tm-main-container">
        <div className="text-center mb-5 pb-4">
          <h2 className="tm-main-heading">
            Elevate Your Brand With <br />
            <span className="tm-text-hl">Authentic Video Testimonials</span>
          </h2>
          <p className="tm-main-subheading">
            Build trust and drive conversions with high-impact customer stories.
          </p>
        </div>

        {testimonialData.map((section, index) => (
          <div
            key={index}
            className={`tm-card-row row align-items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
            ref={(el) => setRef(el, index)}
          >
            {/* Video Player / Image Side */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div
                className="tm-cinematic-wrapper tm-cascade-1"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="tm-video-player">
                  <div className="tm-video-glow"></div>
                  <img
                    src={section.img}
                    alt={section.title}
                    className="tm-video-thumbnail"
                  />

                  {/* Play Button Overlay */}
                  <div className="tm-play-btn-wrapper">
                    <div className="tm-play-ripple"></div>
                    <button className="tm-play-btn">
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>

                  {/* Abstract UI Elements */}
                  <div className="tm-timeline-bar">
                    <div className="tm-timeline-progress"></div>
                  </div>
                  <div className="tm-video-badge">
                    <i className="fa-solid fa-video text-danger me-2"></i> 4K
                    HDR
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="col-lg-6">
              <div className="tm-content-box tm-cascade-2">
                <div className="tm-step-number">0{index + 1}</div>
                <h3 className="tm-section-title">{section.title}</h3>
                <h5 className="tm-section-subtitle">{section.subtitle}</h5>

                <p className="tm-section-desc">{section.desc}</p>

                <div className="tm-features-container">
                  <ul className="tm-feature-list">
                    {section.points.map((point, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-star text-warning"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tm-footer-quote">
                  <i className="fa-solid fa-quote-left"></i>
                  {section.footer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="tm-video-modal" onClick={() => setIsVideoOpen(false)}>
          <div
            className="tm-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tm-modal-close"
              onClick={() => setIsVideoOpen(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <video controls autoPlay className="tm-modal-video">
              <source src={dummyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSections;
