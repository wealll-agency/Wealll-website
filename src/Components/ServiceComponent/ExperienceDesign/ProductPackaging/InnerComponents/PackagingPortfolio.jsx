import React, { useState } from "react";
import "./packaging-portfolio.css";

const portfolioData = [
  {
    title: "Eco-Friendly E-Commerce Mailer",
    category: "D2C Unboxing Experience",
    desc: "A custom mailer box designed specifically for social media virality. Features integrated QR codes driving traffic directly to a secret digital landing page.",
    imgUrl:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gradient:
      "linear-gradient(135deg, rgba(238, 174, 202, 0.4) 0%, rgba(148, 187, 233, 0.4) 100%)",
  },
  {
    title: "Amazon Thumb-Stopping Coffee",
    category: "FMCG / Marketplace SEO",
    desc: "We redesigned these coffee pouches with hyper-legible typography and high-contrast colors to drastically improve click-through rates on Amazon and Instacart search results.",
    imgUrl:
      "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gradient:
      "linear-gradient(135deg, rgba(255, 140, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
  },
  {
    title: "Influencer Campaign Seeding Box",
    category: "Viral Social Media Campaign",
    desc: "A rigid PR magnetic closure box engineered to trigger unboxing videos on TikTok and Instagram Reels. Generated over 2M organic impressions in week 1.",
    imgUrl:
      "https://images.unsplash.com/photo-1548882585-6143c713b1cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gradient:
      "linear-gradient(135deg, rgba(160, 82, 45, 0.4) 0%, rgba(0, 0, 0, 0.5) 100%)",
  },
  {
    title: "Omnichannel Fragrance Suite",
    category: "Digital-First Branding",
    desc: "A fragrance packaging suite designed to look incredible in both physical retail lighting and glossy digital ad creatives, ensuring 1:1 brand consistency.",
    imgUrl:
      "https://images.unsplash.com/photo-1594040226829-7f251ab466de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gradient:
      "linear-gradient(135deg, rgba(20, 160, 253, 0.3) 0%, rgba(20, 20, 50, 0.6) 100%)",
  },
  {
    title: "Smart Supplement Hydration",
    category: "Connected Products",
    desc: "Clean aesthetic bottles with NFC-enabled labels. Scanning the label immediately launches a digital app experience for subscription refills and tracking.",
    imgUrl:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gradient:
      "linear-gradient(135deg, rgba(34, 139, 34, 0.3) 0%, rgba(0, 50, 0, 0.6) 100%)",
  },
];

const PackagingPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === portfolioData.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? portfolioData.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="pkg-awwwards-slider">
      {/* Dynamic Background Glowing Orbs tied to the active slide */}
      <div
        className="pkg-dynamic-orb"
        style={{ background: portfolioData[activeIndex].gradient }}
      ></div>
      <div className="pkg-noise-overlay"></div>

      <div className="container position-relative z-2">
        <div className="pkg-slider-header text-center">
          <span className="pkg-badge-glowing">FEATURED WORK</span>
          <h2 className="pkg-title-massive">
            Packaging <span className="text-outline">Portfolio</span>
          </h2>
          <p className="pkg-header-desc">
            A curated selection of our most successful product packaging
            designs, built to dominate retail shelves and digital commerce.
          </p>
        </div>
      </div>

      <div className="pkg-slider-viewport">
        <div className="pkg-slider-track">
          {portfolioData.map((item, index) => {
            let offset = index - activeIndex;

            // Allow wrapping for a continuous feel
            if (offset < -2) offset += portfolioData.length;
            if (offset > 2) offset -= portfolioData.length;

            let slideClass = "slide-hidden";
            if (offset === 0) slideClass = "slide-active";
            else if (offset === 1) slideClass = "slide-next";
            else if (offset === -1) slideClass = "slide-prev";
            else if (offset === 2) slideClass = "slide-far-next";
            else if (offset === -2) slideClass = "slide-far-prev";

            return (
              <div
                key={index}
                className={`pkg-slide-card ${slideClass}`}
                onClick={() => goToSlide(index)}
              >
                <div className="pkg-slide-geometry">
                  {/* Using an img tag for better loading reliability and alt text */}
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="pkg-slide-img"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                    }}
                  />

                  {/* Elegant Gradient Overlay - Much lighter than before */}
                  <div className="pkg-slide-overlay"></div>

                  {/* Stunning Glass Content Panel inside the active card */}
                  <div className="pkg-slide-content">
                    <span className="pkg-content-cat">{item.category}</span>
                    <h3 className="pkg-content-title">{item.title}</h3>
                    <p className="pkg-content-desc">{item.desc}</p>

                    <a href="#case-study" className="pkg-slider-cta">
                      View Case Study <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Modern Controls */}
      <div className="pkg-slider-controls">
        <button className="pkg-ctrl-btn" onClick={handlePrev}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="pkg-ctrl-dots">
          {portfolioData.map((_, idx) => (
            <div
              key={idx}
              className={`pkg-ctrl-dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            ></div>
          ))}
        </div>

        <button className="pkg-ctrl-btn" onClick={handleNext}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PackagingPortfolio;
