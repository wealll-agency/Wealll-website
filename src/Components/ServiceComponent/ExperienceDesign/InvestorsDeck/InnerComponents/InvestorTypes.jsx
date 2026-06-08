import React from "react";
import "./investor-types.css";

const deckTypes = [
  {
    title: "Startup Pitch Decks",
    desc: "Persuasive and fast-paced decks designed to capture attention and communicate core disruptive value.",
    icon: "🚀",
  },
  {
    title: "Seed & Pre-Seed",
    desc: "Focus on the problem, your unique solution, market size, and the founding team's unfair advantage.",
    icon: "🌱",
  },
  {
    title: "Series A / Series B",
    desc: "Data-heavy presentations emphasizing unit economics, verified traction, and scalable growth strategies.",
    icon: "📈",
  },
  {
    title: "Venture Capital",
    desc: "Highly structured institutional decks aligned with VC thesis requirements and return-on-investment timelines.",
    icon: "🏦",
  },
  {
    title: "Angel Investor Decks",
    desc: "Story-driven, emotional, yet logical decks aimed at high-net-worth individuals and angel syndicates.",
    icon: "👼",
  },
  {
    title: "SaaS Startup Decks",
    desc: "Focused heavily on ARR, churn rate, LTV:CAC ratio, and product-led growth mechanics.",
    icon: "💻",
  },
  {
    title: "E-commerce Fundraising",
    desc: "Highlights supply chain, margin profiles, direct-to-consumer metrics, and customer acquisition costs.",
    icon: "🛒",
  },
  {
    title: "Corporate Proposals",
    desc: "Formal presentations for joint ventures, corporate venture capital, or strategic M&A activities.",
    icon: "🏢",
  },
  {
    title: "Growth & Expansion",
    desc: "Decks meant to fund new territory expansion, product line launches, or major organizational scaling.",
    icon: "🌍",
  },
];

const InvestorTypes = () => {
  return (
    <section className="inv-types-section">
      <div className="container">
        <div className="text-center mb-5 inv-header-stagger">
          <span className="inv-subtitle">
            TYPES OF INVESTOR PRESENTATIONS WE CREATE
          </span>
          <h2 className="inv-title">
            Customized Decks for <br />
            <span className="inv-highlight">Every Stage of Funding</span>
          </h2>
          <div className="inv-animated-underline mx-auto"></div>
          <p className="inv-desc mx-auto" style={{ maxWidth: "700px" }}>
            We design investor decks for startups, growing businesses, and
            scaling companies across industries. Each deck is tailored to your
            funding stage and investor type.
          </p>
        </div>

        <div className="row g-4 inv-types-grid">
          {deckTypes.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="inv-type-card">
                <div className="inv-card-glow-overlay"></div>
                <div className="inv-card-content">
                  <div className="inv-card-icon">{item.icon}</div>
                  <h3 className="inv-card-title">{item.title}</h3>
                  <p className="inv-card-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorTypes;
