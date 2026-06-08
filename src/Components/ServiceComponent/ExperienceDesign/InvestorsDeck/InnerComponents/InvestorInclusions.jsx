import React, { useEffect, useRef, useState } from "react";
import "./investor-inclusions.css";

const inclusions = [
  {
    step: "01",
    title: "Cover Slide",
    desc: "A compelling, beautifully designed opening that hooks investors immediately.",
  },
  {
    step: "02",
    title: "Problem Statement",
    desc: "Clearly articulating the painful, large-scale problem your audience faces.",
  },
  {
    step: "03",
    title: "Market Opportunity (TAM, SAM, SOM)",
    desc: "Quantifying the total market potential with verifiable, credible data.",
  },
  {
    step: "04",
    title: "Solution Overview",
    desc: "Presenting your product/service as the undeniable, scalable answer.",
  },
  {
    step: "05",
    title: "Product Demo / Screenshots",
    desc: "High-fidelity mockups showcasing intuitive UI/UX and core value.",
  },
  {
    step: "06",
    title: "Business Model",
    desc: "How you make money. Clear pricing strata and unit economics.",
  },
  {
    step: "07",
    title: "Traction & Key Metrics",
    desc: "Revenue velocity, active users, and milestones achieved to date.",
  },
  {
    step: "08",
    title: "Competitive Landscape",
    desc: "Positioning your superiority via feature matrices and strategic moats.",
  },
  {
    step: "09",
    title: "Unique Advantage",
    desc: "Your 'unfair' differentiation—IP, team experience, or network effects.",
  },
  {
    step: "10",
    title: "Go-To-Market Strategy",
    desc: "Acquisition channels, CAC targets, and sales distribution paths.",
  },
  {
    step: "11",
    title: "Revenue Model",
    desc: "Detailed breakdown of income streams and projected LTV.",
  },
  {
    step: "12",
    title: "Financial Projections",
    desc: "3 to 5-year outlook with gross margin expectations and runway analysis.",
  },
  {
    step: "13",
    title: "Funding Ask & Use",
    desc: "Capital required and exactly how it will be deployed to drive valuation.",
  },
  {
    step: "14",
    title: "Team Introduction",
    desc: "Highlighting founder pedigree, key advisors, and domain expertise.",
  },
  {
    step: "15",
    title: "Vision & Exit Strategy",
    desc: "The ultimate endgame—IPO potential or strategic acquisition targets.",
  },
  {
    step: "16",
    title: "Closing CTA",
    desc: "A memorable final slide prompting immediate follow-up discussions.",
  },
];

const InvestorInclusions = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline container has been scrolled through
      const totalHeight = rect.height;
      const scrolled = windowHeight / 2 - rect.top; // Middle of screen

      let progress = (scrolled / totalHeight) * 100;
      progress = Math.max(0, Math.min(100, progress)); // Clamp between 0 and 100

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="inv-inc-section">
      <div className="inv-inc-ambient-glow"></div>

      <div className="container position-relative z-2">
        <div className="text-center mb-5 pb-4">
          <span className="inv-subtitle">
            WHAT’S INCLUDED IN YOUR INVESTOR DECK
          </span>
          <h2 className="inv-title">
            Complete Investor-Ready <br />
            <span className="inv-highlight">Slide Structure</span>
          </h2>
          <div className="inv-animated-underline mx-auto"></div>
          <p className="inv-desc mx-auto mt-4" style={{ maxWidth: "700px" }}>
            We build structured, investor-grade decks that cover all essential
            components required for fundraising. Every slide is designed with
            clarity, hierarchy, and psychological impact.
          </p>
        </div>

        <div className="inv-premium-timeline-wrapper" ref={containerRef}>
          {/* The animated central glow line */}
          <div className="inv-timeline-track">
            <div
              className="inv-timeline-progress"
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>

          <div className="row inv-timeline-row">
            {inclusions.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div className="inv-tl-block" key={index}>
                  {/* Marker */}
                  <div className="inv-tl-center">
                    <div className="inv-pulse-bead"></div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`inv-tl-card-col ${isEven ? "left-side" : "right-side"}`}
                  >
                    <div className="inv-tl-premium-card">
                      <div className="inv-card-glass-bg"></div>
                      <span className="inv-tl-number">{item.step}</span>
                      <div className="inv-tl-inner">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorInclusions;
