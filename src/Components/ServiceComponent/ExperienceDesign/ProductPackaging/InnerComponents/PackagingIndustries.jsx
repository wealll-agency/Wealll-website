import React from "react";
import "./packaging-industries.css";

const PackagingIndustries = () => {
  const industries = [
    {
      title: "E-commerce & D2C Brands",
      icon: "🛒",
      desc: "Unboxing experiences that drive social sharing.",
    },
    {
      title: "Beauty & Personal Care",
      icon: "💄",
      desc: "Luxurious branding that communicates elegance.",
    },
    {
      title: "Food & Beverage",
      icon: "🍔",
      desc: "Appetizing designs that highlight freshness & quality.",
    },
    {
      title: "Health & Wellness",
      icon: "🌿",
      desc: "Trust-building aesthetics for supplements & care.",
    },
    {
      title: "Fashion & Lifestyle",
      icon: "👗",
      desc: "Trendy, sustainable packaging for modern apparel.",
    },
    {
      title: "Retail Products",
      icon: "🏬",
      desc: "Shelf-ready designs that command attention.",
    },
    {
      title: "Organic & Eco-Friendly Brands",
      icon: "🌱",
      desc: "Sustainable packaging that tells a green story.",
    },
    {
      title: "Premium & Luxury Products",
      icon: "✨",
      desc: "Exclusive materials & minimalist premium styling.",
    }, // 8 items
  ];

  return (
    <section className="pkg-industries-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <span className="pkg-subtitle">TAILORED SOLUTIONS</span>
            <h2 className="pkg-section-title">
              Industry-Specific{" "}
              <span className="highlight-text">Packaging</span>
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="pkg-section-desc">
              Every industry has a different target audience and buying
              behavior. We design packaging based on your niche and customer
              psychology.
            </p>
          </div>
        </div>

        <div className="pkg-industry-grid">
          {industries.map((ind, index) => (
            <div className="pkg-industry-card" key={index}>
              <div className="pkg-ind-content">
                <div className="pkg-ind-icon">{ind.icon}</div>
                <h3 className="pkg-ind-title">{ind.title}</h3>
                <div className="pkg-ind-overlay">
                  <p>{ind.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="pkg-industry-footer">
            Each packaging design is customized to match your brand identity and
            target market expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagingIndustries;
