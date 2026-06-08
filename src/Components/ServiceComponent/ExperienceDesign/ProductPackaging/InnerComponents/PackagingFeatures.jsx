import React from "react";
import "./packaging-features.css";
import BannerComponent from "../../../CommonComponents/BannerComponent";

const PackagingFeatures = () => {
  const features = [
    {
      title: "Builds strong brand recognition",
      icon: "🎯",
      desc: "Instantly connect with your audience and make a lasting impression on the shelf or screen.",
    },
    {
      title: "Increases shelf visibility",
      icon: "✨",
      desc: "Stand out from competitors with striking visuals that catch the eye immediately.",
    },
    {
      title: "Improves perceived product value",
      icon: "💎",
      desc: "Premium packaging elevates the perceived quality and justifies premium pricing.",
    },
    {
      title: "Enhances customer trust",
      icon: "🤝",
      desc: "Professional design communicates reliability, safety, and brand authenticity.",
    },
    {
      title: "Supports digital marketing campaigns",
      icon: "📈",
      desc: "Seamlessly integrate your packaging into unboxing videos and social media ads.",
    },
    {
      title: "Creates a memorable unboxing experience",
      icon: "🎁",
      desc: "Turn passive buyers into active brand advocates through delightful unboxing.",
    },
    {
      title: "Aligns with online & offline branding",
      icon: "🔄",
      desc: "Maintain a cohesive brand identity across all touchpoints and channels.",
    },
    {
      title: "Drives higher conversion rates",
      icon: "🚀",
      desc: "Turns curious onlookers into confident buyers through strategic visual messaging.",
    },
  ];

  return (
    <section className="pkg-features-section">
      <BannerComponent />
      <div className="container">
        <div className="pkg-section-header text-center">
          <span className="pkg-subtitle">PRODUCT PACKAGING DESIGN</span>
          <h2>
            Product Packaging Designed for{" "}
            <span className="highlight-text">Brand Growth</span>
          </h2>
          <p className="pkg-header-desc">
            <strong>Packaging That Sells — Not Just Looks Good</strong>
            <br />
            As an SEO & Digital Marketing company, we design product packaging
            that supports your branding, positioning, and conversion goals. Your
            packaging is your silent salesperson — both on retail shelves and
            online marketplaces.
          </p>
        </div>

        <div className="pkg-features-grid">
          {features.map((feature, index) => (
            <div className="pkg-feature-card" key={index}>
              <div className="pkg-card-inner">
                <div className="pkg-icon-wrapper">
                  <span className="pkg-icon">{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="pkg-card-glow"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="pkg-focus-banner mt-5 text-center">
          <h4>
            Our focus is simple: design packaging that strengthens your
            marketing impact.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default PackagingFeatures;
