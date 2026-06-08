import React from "react";
import "../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css"; // Importing exact css for identical design

const TvCommercialPricing = () => {
  const packages = [
    {
      title: "Starter TV Commercial",
      subtitle: "Ideal for small promotional campaigns",
      price: "10,000",
      features: [
        "30-second television commercial",
        "Concept development and scriptwriting",
        "Single-day professional shoot",
        "Basic editing and sound design",
        "Background music integration",
        "2 revisions included",
        "Delivery: 10–14 working days",
      ],
      btnText: "Get Starter Package",
      featured: false,
    },
    {
      title: "Growth Advertising",
      subtitle: "Best for brand promotion and product launches",
      price: "20,000",
      features: [
        "30–45 second TV commercial",
        "Full creative concept and storyboard",
        "Professional filming and production setup",
        "Cinematic editing and color grading",
        "Professional voiceover recording",
        "Multi-platform video versions",
        "3–4 revisions included",
        "Delivery: 15–20 working days",
      ],
      btnText: "Get Growth Package",
      featured: true,
      badge: "Most Popular",
    },
    {
      title: "Premium Broadcast",
      subtitle: "Designed for large-scale advertising campaigns",
      price: "30,000",
      features: [
        "45–60 second cinematic TV commercial",
        "Advanced storytelling and creative direction",
        "Multi-location professional shoot",
        "Actor casting and direction",
        "Motion graphics and visual effects",
        "Multiple digital advertising formats",
        "Campaign integration support",
        "Unlimited revisions (within scope)",
        "Delivery: 20–30 working days",
      ],
      btnText: "Get Premium Package",
      featured: false,
    },
  ];

  const addons = [
    {
      title: "Professional actor casting",
      desc: "Get the perfect face for your brand's message.",
      icon: "🎭",
    },
    {
      title: "Celebrity or influencer collaboration",
      desc: "Star power to boost brand recall and reach.",
      icon: "⭐",
    },
    {
      title: "Drone cinematography",
      desc: "Stunning aerial shots for cinematic grandness.",
      icon: "🚁",
    },
    {
      title: "Multi-language voiceovers",
      desc: "Reach a diverse audience in their language.",
      icon: "🎙️",
    },
    {
      title: "Subtitle and localization versions",
      desc: "Make your ad accessible globally.",
      icon: "🌍",
    },
    {
      title: "Social media short-form ad cuts",
      desc: "Optimized reels and shorts from your commercial.",
      icon: "📱",
    },
    {
      title: "YouTube ad campaign setup",
      desc: "Get your commercial running on Google Ads.",
      icon: "▶️",
    },
    {
      title: "OTT platform advertising integration",
      desc: "Stream your ads on Hotstar, Prime, etc.",
      icon: "📺",
    },
    {
      title: "Media buying & TV channel placement",
      desc: "Strategic broadcast channel placements.",
      icon: "📡",
    },
    {
      title: "Landing page design for campaigns",
      desc: "Seamless funnel from your commercial.",
      icon: "💻",
    },
    {
      title: "Social media promotional creatives",
      desc: "Banners and posters scaling your TVC.",
      icon: "🎨",
    },
  ];

  return (
    <section className="logo-pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2>
            TELEVISION COMMERCIAL{" "}
            <span style={{ color: "#fdb914" }}>PACKAGES</span>
          </h2>
          <p>
            Choose a TVC package based on your campaign requirements. Custom
            packages available.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="row justify-content-center mb-5">
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
                  <div className="pricing-price" style={{ fontSize: "2.5rem" }}>
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
              OPTIONAL <span style={{ color: "#fdb914" }}>ADD-ONS</span>
            </h3>
            <p style={{ color: "#fff", fontSize: "1.1rem", marginTop: "10px" }}>
              Enhance your television commercial campaign with additional
              services:
            </p>
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

export default TvCommercialPricing;
