import React from "react";
import "../../LogoDesign/InnerComponents/logo-pricing.css"; // Reusing logo pricing CSS for consistency

const PackagingPricing = () => {
  const packages = [
    {
      title: "Starter Packaging Plan",
      subtitle: "Best for single product launch",
      price: "₹2,500",
      features: [
        "Single product packaging design",
        "Front + back panel layout",
        "2 revisions included",
        "Print-ready file delivery",
        "Delivery: 3–5 days",
      ],
      btnText: "Get Starter Package",
      featured: false,
    },
    {
      title: "Growth Packaging Plan",
      subtitle: "Best for expanding brands",
      price: "5,500",
      features: [
        "Multi-panel packaging design",
        "Brand alignment + messaging refinement",
        "3D mockup included",
        "Campaign messaging integration",
        "3–4 revisions included",
        "Delivery: 5–7 days",
      ],
      btnText: "Get Growth Package",
      featured: true,
      badge: "Most Popular",
    },
    {
      title: "Premium Brand Packaging System",
      subtitle: "Best for full product line or D2C brands",
      price: "12,000",
      features: [
        "Complete packaging system design",
        "Multiple SKUs supported",
        "Marketing integration strategy",
        "QR code & digital funnel integration",
        "Premium visual identity alignment",
        "Print-ready + editable source files",
        "Unlimited revisions (within scope)",
        "Delivery: 7–12 days",
      ],
      btnText: "Get Premium Package",
      featured: false,
    },
  ];

  const addons = [
    {
      title: "Logo Design",
      desc: "Crafting a unique brand identity.",
      icon: "🎨",
    },
    {
      title: "Complete Brand Identity Kit",
      desc: "Typography, colors, and visual rules.",
      icon: "📘",
    },
    {
      title: "Amazon/Flipkart Listing",
      desc: "Optimizing listings for conversions.",
      icon: "🛒",
    },
    {
      title: "SEO Product Page Optimization",
      desc: "Ranking higher on search engines.",
      icon: "🔍",
    },
    {
      title: "Product Description Writing",
      desc: "Compelling and persuasive copy.",
      icon: "✍️",
    },
    {
      title: "E-commerce Banner Design",
      desc: "Engaging banners for online stores.",
      icon: "🖼️",
    },
    {
      title: "Campaign Launch Creatives",
      desc: "Ad assets for successful product drops.",
      icon: "🚀",
    },
    {
      title: "Print Vendor Coordination",
      desc: "Ensuring print output matches design.",
      icon: "🖨️",
    },
  ];

  return (
    <section className="logo-pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2>
            Packaging Packages &{" "}
            <span style={{ color: "#fdb914" }}>Brand Growth Plans</span>
          </h2>
          <p>
            Flexible Packaging Solutions for Every Brand. We offer scalable
            packages based on your product range and marketing goals.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="row justify-content-center pt-4 mb-5">
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
                  <div className="pricing-price" style={{ fontSize: "2rem" }}>
                    <span className="pricing-currency">₹</span>
                    {pkg.price}
                  </div>
                </div>
                <ul className="pricing-features-list text-start">
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
        <div className="logo-addons-area mt-5">
          <div className="addons-header">
            <h3>
              Optional <span style={{ color: "#fdb914" }}>Add-ons</span>
            </h3>
          </div>
          <div
            className="addons-grid-modern"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {addons.map((addon, index) => (
              <div className="addon-card-premium" key={index}>
                <div className="addon-icon-box" style={{ fontSize: "1.5rem" }}>
                  {addon.icon}
                </div>
                <div className="addon-content text-start">
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

export default PackagingPricing;
