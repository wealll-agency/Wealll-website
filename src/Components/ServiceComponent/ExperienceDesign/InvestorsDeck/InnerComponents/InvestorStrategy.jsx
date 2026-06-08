import React, { useEffect, useRef } from "react";
import "./investor-strategy.css";
import BannerComponent from "../../../CommonComponents/BannerComponent";

const InvestorStrategy = () => {
  const svgRef = useRef(null);

  return (
    <section className="inv-strategy-section">
      <BannerComponent />
      <div className="cust-gap"></div>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Headings & Text */}
          <div className="col-lg-5 mb-5 mb-lg-0 inv-strategy-text">
            <span className="inv-subtitle">
              INVESTOR DECK STRATEGY & POSITIONING
            </span>
            <h2 className="inv-title">
              Investor Presentations Built to
              <span className="inv-highlight"> Raise Capital</span>
            </h2>
            <div className="inv-animated-underline"></div>

            <p className="inv-desc">
              An investor deck is not just a slide presentation — it is your
              fundraising story. We design strategic, data-driven investor decks
              that clearly communicate your vision, growth potential, and
              scalability.
            </p>
            <p className="inv-desc mt-3">
              As an SEO & Digital Marketing company, we combine storytelling,
              data presentation, and growth positioning to create investor decks
              that build confidence.
            </p>

            <ul className="inv-feature-list mt-4">
              <li>
                <span className="inv-dot"></span> Strong problem-solution
                narrative
              </li>
              <li>
                <span className="inv-dot"></span> Clear market positioning
              </li>
              <li>
                <span className="inv-dot"></span> Growth-driven storytelling
              </li>
              <li>
                <span className="inv-dot"></span> Scalable business model
                presentation
              </li>
              <li>
                <span className="inv-dot"></span> Vision & long-term strategy
                clarity
              </li>
              <li>
                <span className="inv-dot"></span> Logical slide sequencing for
                investor psychology
              </li>
            </ul>

            <h4 className="inv-tagline mt-5">
              We don’t just design slides — we structure fundraising narratives.
            </h4>
          </div>

          {/* Right Column: Animated Flow Diagram */}
          <div className="col-lg-7 position-relative">
            <div className="inv-flow-container">
              {/* Central Glowing Ambient */}
              <div className="inv-flow-glow-bg"></div>

              {/* Nodes Layer */}
              <div className="inv-flow-net">
                {/* Connection lines as SVG */}
                <svg
                  className="inv-flow-lines"
                  viewBox="0 0 500 400"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 50,100 C 150,50 200,200 250,150 S 300,50 400,100"
                    className="inv-line-path path-1"
                  />
                  <path
                    d="M 50,300 C 150,350 200,200 250,250 S 300,350 400,300"
                    className="inv-line-path path-2"
                  />
                  <path
                    d="M 50,100 Q 150,200 250,150 T 400,100"
                    className="inv-line-path path-3"
                  />
                  <path
                    d="M 250,150 L 250,250"
                    className="inv-line-path path-4"
                  />
                </svg>

                {/* Flow Nodes */}
                <div className="inv-node node-1 p-problem">
                  <div className="inv-node-icon">!</div>
                  <div className="inv-node-label">Problem</div>
                </div>

                <div className="inv-node node-2 p-solution">
                  <div className="inv-node-icon">💡</div>
                  <div className="inv-node-label">Solution</div>
                </div>

                <div className="inv-node node-3 p-traction">
                  <div className="inv-node-icon">📈</div>
                  <div className="inv-node-label">Traction</div>
                </div>

                <div className="inv-node node-4 p-growth">
                  <div className="inv-node-icon">🚀</div>
                  <div className="inv-node-label">Growth</div>
                </div>

                <div className="inv-node node-5 p-funding">
                  <div className="inv-node-icon">💰</div>
                  <div className="inv-node-label">Funding</div>
                </div>

                <div className="inv-floating-ui ui-card-1">
                  <div className="ui-chart-bar b1"></div>
                  <div className="ui-chart-bar b2"></div>
                  <div className="ui-chart-bar b3"></div>
                </div>

                <div className="inv-floating-ui ui-card-2">
                  <div className="ui-circle"></div>
                  <div className="ui-line l1"></div>
                  <div className="ui-line l2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorStrategy;
