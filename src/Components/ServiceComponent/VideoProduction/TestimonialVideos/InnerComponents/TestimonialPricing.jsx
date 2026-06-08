import React from "react";
import "../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css"; // Reusing the identical CSS file

const TestimonialPricing = () => {
  const packages = [
    {
      title: "Starter",
      subtitle: "Ideal for simple customer feedback videos",
      price: "45,000",
      features: [
        "1–2 testimonial videos",
        "Guided interview questions",
        "Professional video recording",
        "Basic editing & background music",
        "2 revisions included",
        "Delivery: 7–10 Days",
      ],
      btnText: "Get Starter Package",
      featured: false,
    },
    {
      title: "Growth",
      subtitle: "Best for building brand credibility",
      price: "95,000",
      features: [
        "3–5 testimonial videos",
        "Structured interview format",
        "Pro filming & lighting setup",
        "Cinematic editing & color grading",
        "Social media short clips included",
        "3–4 revisions included",
        "Delivery: 10–15 Days",
      ],
      btnText: "Get Growth Package",
      featured: true,
      badge: "Most Popular",
    },
    {
      title: "Premium",
      subtitle: "Best for large marketing campaigns",
      price: "1,85,000",
      features: [
        "6–10 testimonial videos",
        "Multiple client interviews",
        "Advanced production setup",
        "Motion graphics & branding",
        "Multi-platform video formats",
        "Marketing integration support",
        "Unlimited revisions (within scope)",
        "Delivery: 15–25 Days",
      ],
      btnText: "Get Premium Package",
      featured: false,
    },
  ];

  const addons = [
    {
      title: "Multi-location",
      desc: "Multi-location client interviews.",
      icon: "🗺️",
    },
    {
      title: "Presenter / Host",
      desc: "Professional presenter or host.",
      icon: "🎙️",
    },
    {
      title: "Subtitles",
      desc: "Multi-language subtitles integration.",
      icon: "📝",
    },
    {
      title: "Voiceover",
      desc: "Voiceover narration integration.",
      icon: "🗣️",
    },
    {
      title: "Social Clips",
      desc: "Short-form social media clips.",
      icon: "📱",
    },
    {
      title: "YouTube SEO",
      desc: "YouTube SEO optimization features.",
      icon: "🔍",
    },
    {
      title: "Ad Campaign",
      desc: "Paid ad campaign setup.",
      icon: "📈",
    },
    {
      title: "Landing Page",
      desc: "Landing page video integration.",
      icon: "💻",
    },
    {
      title: "Thumbnail",
      desc: "Custom thumbnail design.",
      icon: "🖼️",
    },
    {
      title: "Social Promos",
      desc: "Social media promotional creatives.",
      icon: "✨",
    },
  ];

  return (
    <section className="logo-pricing-section" id="packages">
      <div className="container">
        <div className="pricing-header">
          <h2>
            Testimonial Video <span style={{ color: "#fdb914" }}>Packages</span>
          </h2>
          <p>
            Select the ideal testimonial production package tailored to your
            marketing scale, ensuring powerful social proof and audience trust.
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
            <p className="text-secondary mt-2">
              Enhance your testimonial video campaign with additional services
            </p>
          </div>
          <div
            className="addons-grid-modern"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {addons.map((addon, index) => (
              <div className="addon-card-premium" key={index}>
                <div className="addon-icon-box" style={{ fontSize: "24px" }}>
                  {addon.icon}
                </div>
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

export default TestimonialPricing;
