import React from "react";
import "./social-media-reach.css";
const boostIcon = mediaUrl("assets/images/boost_icon.png");
const img1 = mediaUrl("assets/images/img1.png");
// Note: In a real scenario, we would import local assets.
import { mediaUrl } from "../../../../../config/media";
// Using inline SVGs or placeholders for now to ensure self-contained implementation as requested.

const SocialMediaReach = () => {
  return (
    <section className="social-media-reach-container">
      <div className="reach-grid">
        {/* Title Section */}
        <div className="reach-title-card">
          <h2>
            Your <br />
            Reach <br />
            On <img
              src={boostIcon}
              className="rocket-icon-img"
              alt="rocket"
            loading="lazy" />{" "}
            <br /> <span className="boost-badge">Boost </span>
          </h2>
        </div>

        {/* Card 1: Yellow - Sales */}
        <div className="reach-card card-yellow">
          <div className="girl-img-wrapper">
            <img src={img1} alt="Girl with phone" className="girl-img" loading="lazy" />
          </div>
          <div className="card-footer-text">
            More Qualified <br /> Opportunities
          </div>
        </div>

        {/* Card 2: Purple - Revenue */}
        <div className="reach-card card-purple">
          <div className="card-content-top">
            <div className="card-stat-large">61%</div>
            <div className="card-sub-text">BOOST REVENUE</div>

            <div className="progress-section">
              <div className="progress-row">
                <span className="progress-label">Before</span>
                <div className="progress-track"></div>
              </div>
              <div className="progress-row">
                <span className="progress-label">After</span>
                <div className="progress-track"></div>
              </div>
            </div>
          </div>
          <div className="card-footer-text">
            From Active Social <br /> Selling
          </div>
        </div>

        {/* Card 3: Green - Insights */}
        <div className="reach-card card-green">
          <div className="card-content-top">
            <div className="card-stat-large">4X</div>
            <div className="card-sub-text">SHARPEN INSIGHTS</div>

            <div className="gauge-container">
              {/* SVG Gauge for better control */}
              <svg className="gauge-svg" viewBox="0 0 100 60">
                {/* Gauge Background (Ticks) */}
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="8"
                  strokeDasharray="2 2"
                />
                {/* Needle */}
                <g className="gauge-needle-group">
                  <rect
                    x="48"
                    y="10"
                    width="4"
                    height="40"
                    rx="2"
                    fill="#fff"
                    transform="rotate(-90 50 50)"
                  />
                  <circle cx="50" cy="50" r="6" fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
          <div className="card-footer-text">
            Faster Content <br /> Learnings
          </div>
        </div>

        {/* Card 4: Orange - Ad Impact */}
        <div className="reach-card card-orange">
          <div className="card-content-top">
            <div className="card-stat-large">5.2X</div>
            <div className="card-sub-text">MAXIMISE AD IMPACT</div>

            <div className="chart-container">
              <div className="chart">
                <div
                  className="bar"
                  style={{ height: "30px", animationDelay: "0s" }}
                >
                  <div className="fill"></div>
                  <span className="label">T1</span>
                </div>
                <div
                  className="bar"
                  style={{ height: "45px", animationDelay: ".15s" }}
                >
                  <div className="fill"></div>
                  <span className="label">T2</span>
                </div>
                <div
                  className="bar"
                  style={{ height: "60px", animationDelay: ".3s" }}
                >
                  <div className="fill"></div>
                  <span className="label">T3</span>
                </div>
                <div
                  className="bar"
                  style={{ height: "80px", animationDelay: ".45s" }}
                >
                  <div className="fill"></div>
                  <span className="label">T4</span>
                </div>
                <div
                  className="bar"
                  style={{ height: "95px", animationDelay: ".6s" }}
                >
                  <div className="fill"></div>
                  <span className="label">T5</span>
                </div>
                <div
                  className="bar"
                  style={{ height: "110px", animationDelay: ".75s" }}
                >
                  <div className="fill"></div>
                  <span className="label">T6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer-text">
            Return On Ad <br /> Spend
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaReach;
