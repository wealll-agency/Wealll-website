import React, { useEffect, useRef } from "react";
import "./packaging-strategy.css";

const PackagingStrategy = () => {
  const strategies = [
    "Brand positioning alignment",
    "QR code integration for website traffic",
    "Social media handle visibility",
    "Campaign-based packaging themes",
    "Offer-driven packaging design",
    "Funnel-based messaging structure",
    "SEO-optimized product messaging (for D2C brands)",
    "Consistent branding across ads, website & packaging",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
      const rotateY = ((x - centerX) / centerX) * 10;

      container.style.setProperty("--rx", `${rotateX}deg`);
      container.style.setProperty("--ry", `${rotateY}deg`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", () => {
        container.style.setProperty("--rx", `0deg`);
        container.style.setProperty("--ry", `0deg`);
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="pkg-strategy-section">
      <div className="pkg-strategy-spotlight z-0"></div>
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          {/* Left Text Side */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span className="pkg-subtitle">INTEGRATED APPROACH</span>
            <h2 className="pkg-strategy-title">
              Packaging + Digital Marketing{" "}
              <span className="highlight-text">Strategy</span>
            </h2>
            <p className="pkg-strategy-desc">
              Unlike traditional design agencies, we integrate packaging with
              your overall digital marketing strategy. Where Design Meets
              Marketing Strategy.
            </p>

            <div className="pkg-strategy-list">
              <h4>Our Marketing-Focused Packaging Approach Includes:</h4>
              <ul>
                {strategies.map((strategy, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {strategy}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pkg-ecosystem-badge mt-4">
              <p>
                Your packaging becomes part of your marketing ecosystem — not
                just a box.
              </p>
            </div>
          </div>

          {/* Right 3D Animation Side */}
          <div className="col-lg-6 position-relative">
            <div className="pkg-3d-scene" ref={containerRef}>
              <div className="pkg-3d-wrapper">
                {/* Connection Lines rendered via SVG */}
                <svg className="pkg-connections" viewBox="0 0 500 500">
                  <path
                    d="M125,350 C125,250 250,250 250,150"
                    className="path-glow"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M250,150 C250,100 375,100 375,150"
                    className="path-glow"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M125,350 C250,350 375,250 375,150"
                    className="path-glow"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M125,350 C50,250 150,100 250,150"
                    className="path-glow"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* Node 1: Packaging Box (Start) */}
                <div
                  className="pkg-node item-box"
                  style={{ "--z": "40px", left: "25%", top: "70%" }}
                >
                  <div className="node-content text-center">
                    <span className="node-emoji">📦</span>
                    <div className="node-label mt-2">Packaging</div>
                    <div className="node-pulse"></div>
                  </div>
                </div>

                {/* Node 2: QR Code */}
                <div
                  className="pkg-node item-qr"
                  style={{ "--z": "70px", left: "10%", top: "35%" }}
                >
                  <div className="glass-panel">
                    <div className="icon-3d">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fdb914"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                    </div>
                    <div className="node-label">QR Scan</div>
                  </div>
                </div>

                {/* Node 3: Website */}
                <div
                  className="pkg-node item-web"
                  style={{ "--z": "90px", left: "50%", top: "30%" }}
                >
                  <div className="glass-panel">
                    <div className="icon-3d">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#14a0fd"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <div className="node-label">Website</div>
                  </div>
                </div>

                {/* Node 4: Ads */}
                <div
                  className="pkg-node item-ads"
                  style={{ "--z": "110px", left: "75%", top: "55%" }}
                >
                  <div className="glass-panel">
                    <div className="icon-3d">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fd145b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                    </div>
                    <div className="node-label">Ads</div>
                  </div>
                </div>

                {/* Node 5: Analytics Dashboard (End) */}
                <div
                  className="pkg-node item-analytic"
                  style={{ "--z": "120px", left: "75%", top: "30%" }}
                >
                  <div className="dash-panel glass-panel">
                    <div className="dash-header">
                      <span className="dot d-rd"></span>
                      <span className="dot d-yl"></span>
                      <span className="dot d-gr"></span>
                      <span
                        className="ms-2 node-label"
                        style={{ fontSize: "0.6em" }}
                      >
                        Analytics
                      </span>
                    </div>
                    <div className="dash-body">
                      <div className="dash-chart">
                        <div className="bar b1"></div>
                        <div className="bar b2"></div>
                        <div className="bar b3"></div>
                        <div className="bar b4"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating UI Element 1 */}
                <div
                  className="pkg-node floating-ui-1"
                  style={{ "--z": "150px", left: "40%", top: "10%" }}
                >
                  <div className="mini-card glass-panel text-center">
                    <div
                      className="mini-card-val text-success fw-bold"
                      style={{ fontSize: "0.9rem" }}
                    >
                      ↑ 42%
                    </div>
                    <div
                      className="node-label mt-1"
                      style={{
                        fontSize: "0.6em",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Conversion
                    </div>
                  </div>
                </div>

                {/* Floating UI Element 2 */}
                <div
                  className="pkg-node floating-ui-2"
                  style={{ "--z": "130px", left: "60%", top: "70%" }}
                >
                  <div className="mini-card glass-panel">
                    <div className="mini-chart-line">
                      <svg width="60" height="20" viewBox="0 0 60 20">
                        <path
                          d="M0 20 C 10 15, 20 20, 30 10 S 50 15, 60 0"
                          fill="none"
                          stroke="#fdb914"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div
                      className="node-label mt-1 text-center"
                      style={{
                        fontSize: "0.6em",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Traffic
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingStrategy;
