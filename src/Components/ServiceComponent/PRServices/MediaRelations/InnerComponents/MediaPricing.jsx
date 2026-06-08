import React from "react";
import "../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css"; // Reusing exactly to guarantee 100% same styling for standard requirement

const MediaPricing = () => {
  const packages = [
    {
      title: "Starter Media Relations",
      subtitle: "Best for small businesses and startups",
      price: "25,000",
      features: [
        "Basic media strategy consultation",
        "1 professionally written press release",
        "Limited journalist outreach",
        "Media coverage monitoring",
        "2 PR consultation sessions",
      ],
      btnText: "Order Starter",
      featured: false,
    },
    {
      title: "Growth Media Relations",
      subtitle: "Best for growing brands seeking consistent media exposure",
      price: "55,000",
      features: [
        "Media strategy planning",
        "3 press releases per campaign",
        "Active journalist outreach and pitching",
        "Interview coordination opportunities",
        "Media coverage monitoring and reporting",
        "3–4 PR consultation sessions",
      ],
      btnText: "Order Growth",
      featured: true,
      badge: "Most Popular",
    },
    {
      title: "Premium Campaign",
      subtitle: "Designed for brands seeking strong media visibility",
      price: "95,000",
      features: [
        "Comprehensive media relations strategy",
        "Multiple press releases and pitches",
        "Ongoing journalist relationship management",
        "Media interview preparation for leadership",
        "Continuous media outreach and tracking",
        "Detailed PR performance reporting",
      ],
      btnText: "Order Premium",
      featured: false,
    },
  ];

  const addons = [
    {
      title: "Press Conference",
      desc: "Planning and coordination.",
      icon: "🎤",
    },
    {
      title: "Influencer Outreach",
      desc: "Blogger and influencer outreach.",
      icon: "🤝",
    },
    {
      title: "Article Placement",
      desc: "Thought leadership article placement.",
      icon: "📝",
    },
    {
      title: "Media Training",
      desc: "Executive media training programs.",
      icon: "🎓",
    },
    {
      title: "Media Kit",
      desc: "Professional media kit development.",
      icon: "🧳",
    },
    {
      title: "Event PR",
      desc: "Event PR and media coverage support.",
      icon: "🎟️",
    },
    {
      title: "Crisis Support",
      desc: "Crisis communication support.",
      icon: "🛡️",
    },
    {
      title: "Global Outreach",
      desc: "International media outreach campaigns.",
      icon: "🌍",
    },
    {
      title: "Reputation Tools",
      desc: "Brand reputation monitoring tools.",
      icon: "🔍",
    },
  ];

  return (
    <section className="logo-pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2>
            Media Relations <span style={{ color: "#fdb914" }}>Packages</span>
          </h2>
          <p>
            Choose a precise package based on your media footprint requirements.
            Custom packages available.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="row justify-content-center align-items-center mb-5">
          {packages.map((pkg, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className={`logo-pricing-card ${pkg.featured ? "featured" : ""}`}
              >
                <div className="pricing-title-area">
                  {pkg.badge && (
                    <span className="popular-tag">{pkg.badge}</span>
                  )}
                  <h3>{pkg.title}</h3>
                  <h4>{pkg.subtitle}</h4>
                  <div className="pricing-price">
                    <span className="pricing-currency">₹</span>
                    {pkg.price}
                  </div>
                </div>
                <ul className="pricing-features-list">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`pricing-btn ${pkg.featured ? "filled" : "outline"}`}
                >
                  {pkg.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Grid */}
        <div className="logo-addons-area">
          <div className="addons-header">
            <h3>
              Optional <span style={{ color: "#fdb914" }}>Add-ons</span>
            </h3>
          </div>
          <div className="addons-grid-modern">
            {addons.map((addon, index) => (
              <div className="addon-card-premium" key={index}>
                <div className="addon-icon-box">{addon.icon}</div>
                <div className="addon-content">
                  <h4>{addon.title}</h4>
                  <p>{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPricing;
