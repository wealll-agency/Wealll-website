import React from "react";
import "./investor-metrics.css";

const InvestorMetrics = () => {
  return (
    <section className="inv-metrics-section">
      <div className="inv-metrics-deep-glow"></div>

      <div className="container position-relative z-2">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-5 mb-5 mb-lg-0 inv-metrics-text">
            <span className="inv-subtitle">
              DATA, METRICS & GROWTH VISUALIZATION
            </span>
            <h2 className="inv-title">
              Investor-Grade <br />
              <span className="inv-highlight">Data Presentation</span>
            </h2>
            <div className="inv-animated-underline"></div>

            <p className="inv-desc mt-4">
              Investors care about numbers. We ensure your metrics are not just
              presented, but engineered for visual impact.
            </p>

            <ul className="inv-feature-list mt-4">
              <li>
                <span className="inv-dot"></span> Revenue Growth Charts
              </li>
              <li>
                <span className="inv-dot"></span> KPI Dashboards
              </li>
              <li>
                <span className="inv-dot"></span> CAC vs LTV Breakdown
              </li>
              <li>
                <span className="inv-dot"></span> Market Size Infographics
              </li>
              <li>
                <span className="inv-dot"></span> Unit Economics Slides
              </li>
            </ul>

            <h4 className="inv-tagline mt-5">
              We transform complex numbers into undeniable trust signals.
            </h4>
          </div>

          {/* Right Holographic 3D Content */}
          <div className="col-lg-7">
            <div className="inv-iso-scene">
              {/* Orbital glowing lines in background */}
              <div className="inv-iso-orbit"></div>
              <div className="inv-iso-orbit orbit-reverse"></div>

              <div className="inv-iso-cube">
                {/* Layer 1: The Base Grid Floor */}
                <div className="inv-iso-layer layer-base"></div>

                {/* Layer 2: The Holographic Data Map (SVG lines) */}
                <div className="inv-iso-layer layer-data">
                  <svg viewBox="0 0 400 400" className="iso-data-svg">
                    {/* Glowing lines connecting nodes */}
                    <path
                      d="M 50,350 L 150,200 L 250,250 L 330,80"
                      className="iso-path"
                    />
                    <path
                      d="M 150,200 L 220,100"
                      className="iso-path secondary"
                    />

                    {/* Drop shadows projected onto the grid */}
                    <path
                      d="M 50,350 L 150,200 L 250,250 L 330,80"
                      className="iso-path-shadow"
                    />

                    <circle
                      cx="50"
                      cy="350"
                      r="6"
                      className="iso-node pulse-green"
                      style={{ animationDelay: "1.0s" }}
                    />
                    <circle
                      cx="150"
                      cy="200"
                      r="10"
                      className="iso-node pulse-blue"
                      style={{ animationDelay: "1.4s" }}
                    />
                    <circle
                      cx="220"
                      cy="100"
                      r="6"
                      className="iso-node pulse-pink"
                      style={{ animationDelay: "1.8s" }}
                    />
                    <circle
                      cx="250"
                      cy="250"
                      r="8"
                      className="iso-node pulse-green"
                      style={{ animationDelay: "2.0s" }}
                    />
                    <circle
                      cx="330"
                      cy="80"
                      r="14"
                      className="iso-node pulse-blue"
                      style={{ animationDelay: "2.5s" }}
                    />
                  </svg>
                </div>

                {/* Layer 3: Floating UI Panels facing the camera */}
                <div className="inv-iso-layer layer-ui">
                  {/* Billboard 1 */}
                  <div className="iso-billboard billboard-1">
                    <span className="iso-label">TAM Expansion</span>
                    <span className="iso-value">$14.2B</span>
                    <div className="iso-trend up">↑ 32% YoY</div>
                  </div>

                  {/* Billboard 2 */}
                  <div className="iso-billboard billboard-2">
                    <span className="iso-label">LTV:CAC Ratio</span>
                    <span className="iso-value">5.8x</span>
                    <div className="iso-trend optimal">Target Reached</div>
                  </div>

                  {/* Vertical Holographic Beam taking depth into Account */}
                  <div className="iso-beam"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorMetrics;
