import React, { useState } from "react";
import "./investor-portfolio.css";

const portfolioSamples = [
  {
    id: 1,
    title: "Fintech Seed",
    stage: "Series A ($12M)",
    tagline:
      "Disrupting traditional banking with decentralized ledgers and AI risk assessment.",
    imgSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "SaaS Scale-Up",
    stage: "Series B ($25M)",
    tagline:
      "The world's fastest B2B productivity ecosystem, engineered for enterprise teams.",
    imgSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Eco-Tech Venture",
    stage: "Seed ($5M)",
    tagline:
      "Sustainable energy tracking and verified carbon offsets utilizing smart grids.",
    imgSrc:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "MedTech App",
    stage: "Series C ($50M)",
    tagline:
      "Connecting specialized care with chronic patients instantly via biometric tracking.",
    imgSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Web3 Protocol",
    stage: "Pre-Seed ($2M)",
    tagline:
      "Zero-knowledge proofs for absolute data privacy and sovereign identity.",
    imgSrc:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

const InvestorPortfolio = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="inv-port-section">
      <div className="inv-port-glow"></div>

      <div className="container-fluid px-lg-5 position-relative z-2">
        <div className="text-center mb-5 pb-3">
          <span className="inv-subtitle">
            INVESTOR DECK PORTFOLIO & CASE STUDIES
          </span>
          <h2 className="inv-title text-white">
            Fundraising Decks <br />
            <span className="inv-highlight">That Close Rounds</span>
          </h2>
          <div className="inv-animated-underline mx-auto"></div>
          <p className="inv-desc mx-auto mt-4" style={{ maxWidth: "700px" }}>
            Explore our track record of engineering premium pitch decks that
            secure millions in funding. Hover your cursor to reveal the
            presentation details.
          </p>
        </div>

        {/* The Cinematic Expanding Accordion */}
        <div className="inv-accordion-showcase">
          {portfolioSamples.map((sample, idx) => {
            const isActive = activeItem === idx;

            return (
              <div
                key={sample.id}
                className={`inv-acc-panel ${isActive ? "acc-active" : "acc-idle"}`}
                onMouseEnter={() => setActiveItem(idx)}
                onClick={() => setActiveItem(idx)}
              >
                {/* Background Image Setup */}
                <div className="inv-img-wrap">
                  <img
                    src={sample.imgSrc}
                    alt={sample.title}
                    className="inv-acc-bg"
                  />
                </div>

                {/* Darkening Gradient */}
                <div className="inv-acc-overlay"></div>

                {/* The Number Overlay (Always Visible) */}
                <div className="inv-acc-num">0{idx + 1}</div>

                {/* The Vertically Rotated Title (Visible when idle) */}
                <div className="inv-acc-vertical-title">
                  <span>{sample.title}</span>
                </div>

                {/* The Full Content (Revealed when active) */}
                <div className="inv-acc-full-content">
                  <div className="inv-acc-glass-box">
                    <span className="inv-acc-stage">{sample.stage}</span>
                    <h3 className="inv-acc-name">{sample.title}</h3>
                    <p className="inv-acc-tagline">{sample.tagline}</p>
                    <button className="inv-acc-btn">
                      View Case Study
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginLeft: "5px" }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestorPortfolio;
