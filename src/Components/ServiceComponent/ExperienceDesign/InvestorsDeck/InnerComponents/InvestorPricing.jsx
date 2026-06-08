import React from "react";
import "../../LogoDesign/InnerComponents/logo-pricing.css";
import "./investor-pricing.css";

const pricingPackages = [
  {
    title: "Starter Investor Deck",
    subtitle: "Best for early-stage founders",
    price: "Custom",
    delivery: "3-5 days",
    btnText: "Get Starter Deck",
    features: [
      "8–12 slides",
      "Basic structure refinement",
      "Professional slide design",
      "2 revisions included",
      "Delivery: 3-5 days"
    ],
    featured: false
  },
  {
    title: "Growth Fundraising Deck",
    subtitle: "Best for active fundraising",
    price: "Custom",
    delivery: "5-7 days",
    btnText: "Get Growth Deck",
    featured: true,
    badge: "Most Popular",
    features: [
      "12–18 slides",
      "Full storytelling development",
      "Data & financial slide formatting",
      "Custom icons & visual hierarchy",
      "3–4 revisions included",
      "Delivery: 5-7 days"
    ],
  },
  {
    title: "Premium Capital-Raise",
    subtitle: "Best for serious investor presentations",
    price: "Custom",
    delivery: "7-12 days",
    btnText: "Get Premium Deck",
    featured: false,
    features: [
      "20+ slides",
      "Strategic narrative consultation",
      "Advanced data visualization",
      "Financial projection formatting",
      "Competitive landscape design",
      "Speaker notes included",
      "Unlimited revisions",
      "Delivery: 7-12 days"
    ],
  },
];

const deliverables = [
    { title: "Custom Storytelling", desc: "Strategic narrative development.", icon: "📖" },
    { title: "Financial Modeling", desc: "Clean, investor-ready data.", icon: "📊" },
    { title: "Data Visualization", desc: "Complex data made simple.", icon: "📈" },
    { title: "Industry Research", desc: "Relevant market insights.", icon: "🔍" },
    { title: "Competitor Analysis", desc: "Detailed landscape positioning.", icon: "⚖️" },
    { title: "Brand Alignment", desc: "Consistent with your identity.", icon: "🎨" },
    { title: "Speaker Notes", desc: "Guided slides for confidence.", icon: "📜" },
    { title: "PDF + PPTX Handoff", desc: "Fully editable source files.", icon: "📁" },
    { title: "High-Res Visuals", desc: "Premium graphics & icons.", icon: "🖼️" }
];

const addons = [
  {
    title: "Elevator Pitch Script",
    desc: "Short powerful pitch 30-90s",
    icon: "🎙️",
  },
  {
    title: "Executive Summary",
    desc: "1-2 page compelling overview",
    icon: "📝",
  },
  {
    title: "Financial Formatting",
    desc: "Clean spreadsheet design",
    icon: "📊",
  },
  {
    title: "Q&A Preparation",
    desc: "Anticipate tough questions",
    icon: "🤝",
  },
  {
    title: "Pitch Coaching",
    desc: "Live delivery feedback",
    icon: "🗣️",
  },
  {
    title: "Canva Version",
    desc: "Easy to edit layouts",
    icon: "🎨",
  },
  {
    title: "One-Pager Design",
    desc: "Compact teaser document.",
    icon: "📄",
  },
  {
    title: "Market Analysis",
    desc: "Deep-dive research report.",
    icon: "🔍",
  },
  {
    title: "Pitch Recording",
    desc: "Video rehearsal session.",
    icon: "🎥",
  }
];

const InvestorPricing = () => {
  return (
    <section className="logo-pricing-section pt-5 pb-5">
      <div className="container">
        <div className="pricing-header text-center mb-5">
          <h2 className="text-white">Investor Deck <span style={{ color: '#fdb914' }}>Packages</span></h2>
          <p>Choose the right stage-based deck for your fundraising goals.</p>
        </div>

        {/* Packages Grid - Matching Advertising Campaign Assets */}
        <div className="row justify-content-center align-items-center mb-5">
          {pricingPackages.map((pkg, idx) => (
            <div className="col-md-6 col-lg-4 mb-4" key={idx}>
              <div
                className={`logo-pricing-card ${pkg.featured ? "featured" : ""}`}
              >
                <div className="pricing-title-area">
                  {pkg.featured && <span className="popular-tag">{pkg.badge}</span>}
                  <h3>{pkg.title}</h3>
                  <h4>{pkg.subtitle}</h4>
                  <div className="pricing-price" style={{ fontSize: '2.5rem', marginTop: '15px' }}>
                    {pkg.price}
                  </div>
                </div>

                <ul className="pricing-features-list mt-4">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <span className="check-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'} mt-4`}>
                    {pkg.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Included Section - Matching Campaign Layout */}
        <div className="logo-addons-area mt-5 pt-4">
            <div className="addons-header text-center mb-5">
                <h3 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 700 }}>
                    Deliverables <span style={{ color: '#00a3ff' }}>Included</span>
                </h3>
            </div>
            <div className="row justify-content-center">
                {deliverables.map((item, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="addon-card-premium h-100">
                            <div className="addon-icon-box" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <div className="addon-content">
                                <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>{item.title}</h4>
                                <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Optional Add-ons Section - Matching Campaign Layout */}
        <div className="logo-addons-area mt-5 pt-4">
            <div className="addons-header text-center mb-5">
                <h3 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 700 }}>
                    Optional <span style={{ color: '#00a3ff' }}>Add-ons</span>
                </h3>
            </div>
            <div className="row justify-content-center">
                {addons.map((addon, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="addon-card-premium h-100">
                            <div className="addon-icon-box" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '1.5rem' }}>
                                {addon.icon}
                            </div>
                            <div className="addon-content">
                                <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>{addon.title}</h4>
                                <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{addon.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorPricing;
