import React from "react";
import "../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css"; // Reusing exactly to guarantee 100% same styling

const CrisisPricing = () => {
  const packages = [
    {
      title: "Starter Crisis Support",
      subtitle: "Ideal for addressing minor reputation concerns",
      price: "15,000",
      features: [
        "Basic brand monitoring",
        "Crisis risk evaluation",
        "Social media response guidance",
        "Drafting of official response statements",
        "2 consultation sessions with PR specialists",
      ],
      btnText: "Order Starter",
      featured: false,
    },
    {
      title: "Growth Crisis Management",
      subtitle: "Best for brands facing public criticism or negative publicity",
      price: "35,000",
      features: [
        "Advanced reputation monitoring",
        "Crisis communication strategy development",
        "Social media crisis management support",
        "Media communication guidance",
        "Reputation recovery strategy plan",
        "3–4 PR consultation sessions",
      ],
      btnText: "Order Growth",
      featured: true,
      badge: "Most Popular",
    },
    {
      title: "Premium Brand Protection",
      subtitle:
        "Designed for major reputation challenges and high-visibility crises",
      price: "75,000",
      features: [
        "Comprehensive crisis management strategy",
        "Real-time brand monitoring and rapid response",
        "Media and press relations management",
        "Social media reputation protection",
        "Reputation recovery campaign execution",
        "Dedicated crisis communication team support",
      ],
      btnText: "Order Premium",
      featured: false,
    },
  ];

  const addons = [
    {
      title: "Press Release Writing",
      desc: "Writing and distribution.",
      icon: "📰",
    },
    {
      title: "Influencer Outreach",
      desc: "Community outreach campaigns.",
      icon: "🤝",
    },
    {
      title: "Reputation Repair SEO",
      desc: "Reputation repair SEO campaigns.",
      icon: "🔍",
    },
    {
      title: "Crisis Video Production",
      desc: "Crisis communication video production.",
      icon: "🎥",
    },
    {
      title: "Media Training",
      desc: "Training for executives and spokespeople.",
      icon: "🎙️",
    },
    {
      title: "Social Media Policy",
      desc: "Social media policy development.",
      icon: "📱",
    },
    {
      title: "Emergency Dashboards",
      desc: "Emergency monitoring tools and dashboards.",
      icon: "📊",
    },
    {
      title: "Post-Crisis Reporting",
      desc: "Post-crisis reputation analysis and reporting.",
      icon: "📈",
    },
    {
      title: "Trust Rebuilding",
      desc: "Brand trust rebuilding campaigns.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="logo-pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2>
            Crisis Management <span style={{ color: "#fdb914" }}>Packages</span>
          </h2>
          <p>
            Choose a package based on your requirements. Custom packages
            available.
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

export default CrisisPricing;
