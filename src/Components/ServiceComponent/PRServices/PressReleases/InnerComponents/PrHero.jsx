import React from "react";
import "./press-release.css";
const heroImg = mediaUrl("assets/images/pe-hero.png");
import { mediaUrl } from "../../../../../config/media";

const PrHero = () => {
  return (
    <section className="pr-hero-sec">
      {/* Animated Background Orbs */}
      <div className="pr-hero-bg">
        <div className="pr-hero-orb-1"></div>
        <div className="pr-hero-orb-2"></div>
      </div>

      <div className="container pr-hero-container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="pr-hero-content">
              <span className="pr-sub-heading">Press Release Distribution</span>
              <h1>
                Your News, <span className="pr-gradient-text">Everywhere.</span>
              </h1>
              <p className="pr-lead">
                Turn your story into international coverage that builds trust,
                attracts investors, and strengthens your reputation globally.
              </p>

              <div className="pr-hero-features">
                <div className="pr-feature-badge">
                  <div className="pr-feature-icon">
                    <i className="fas fa-pen-nib"></i>
                  </div>
                  <div className="pr-feature-text">
                    <strong>Share & Craft</strong>
                    <span>
                      Upload your story or let our experts craft it for you.
                    </span>
                  </div>
                </div>

                <div className="pr-feature-badge">
                  <div className="pr-feature-icon">
                    <i className="fas fa-globe-americas"></i>
                  </div>
                  <div className="pr-feature-text">
                    <strong>Global Publishing</strong>
                    <span>
                      We distribute it across 1000+ respected global outlets.
                    </span>
                  </div>
                </div>

                <div className="pr-feature-badge">
                  <div className="pr-feature-icon">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                  <div className="pr-feature-text">
                    <strong>Measure Success</strong>
                    <span>
                      Track every placement and receive a full analytics report.
                    </span>
                  </div>
                </div>
              </div>

              <a href="#" className="pr-btn-primary">
                Launch Your Story <i className="fas fa-arrow-right ms-3"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="pr-hero-visual">
              <div className="pr-hero-visual-inner">
                <img src={heroImg} alt="Media Coverage" />
              </div>

              {/* Floating Glass Cards */}
              <div className="pr-floating-card-1">
                <div className="pr-partner-avatars">
                  <div>HT</div>
                  <div>FW</div>
                  <div>AP</div>
                  <div style={{ background: "#00f3ff", color: "#000" }}>
                    +1k
                  </div>
                </div>
                <div className="pr-card-text">
                  <h5>Top Media Partners</h5>
                  <p>Guaranteed Placements</p>
                </div>
              </div>

              <div className="pr-floating-card-2">
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#00ff66",
                    marginRight: "15px",
                  }}
                >
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="pr-card-text">
                  <h5>Measurable Results</h5>
                  <p>Grow faster & stand out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrHero;
