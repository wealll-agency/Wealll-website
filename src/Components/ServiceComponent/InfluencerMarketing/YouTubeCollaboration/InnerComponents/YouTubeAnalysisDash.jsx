import React from "react";
import { motion } from "framer-motion";

const YouTubeAnalysisDash = () => {
  const stats = [
    {
      label: "Views & Reach",
      val: "Viral Growth",
      sub: "Search + Suggested",
      color: "#00f2ff",
    },
    {
      label: "Watch Time",
      val: "Retention A+",
      sub: "Audience Loyalty",
      color: "#7000ff",
    },
    {
      label: "Engagement Rate",
      val: "Influence Index",
      sub: "Deep Trust",
      color: "#ff00ff",
    },
    {
      label: "Sentiment",
      val: "Brand Affinity",
      sub: "Real Response",
      color: "#ff4444",
    },
  ];

  return (
    <section className="yt-analysis-section youtube-dark-bg">
      <div className="yt-glow-top-right"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="yt-label">// Data Intelligence</span>
            <h2>
              In-Depth Performance{" "}
              <span className="youtube-gradient-text">Analysis</span>
            </h2>
            <p
              style={{
                color: "#7070a0",
                fontSize: "1.1rem",
                marginTop: "20px",
              }}
            >
              YouTube is a trust platform. We track deep metrics that show how
              your brand is being received — not just how many people scrolled
              past.
            </p>
          </div>
        </div>

        <motion.div
          className="yt-stats-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h3
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: 900,
                  marginBottom: "20px",
                }}
              >
                We measure not just views — <br />
                but real{" "}
                <span style={{ color: "#00f2ff" }}>audience attention.</span>
              </h3>
              <p
                style={{
                  color: "#7070a0",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  marginBottom: "30px",
                }}
              >
                Our analytics track deep metrics that indicate how well your
                brand is being received, aligning data with creative
                decision-making.
              </p>
              <div className="yt-analysis-cta">
                <a
                  href="#contact"
                  className="youtube-glow-btn"
                  style={{ fontSize: "0.9rem" }}
                >
                  Get Your Snapshot
                </a>
                <a
                  href="#contact"
                  style={{
                    color: "#7070a0",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "0.95rem",
                  }}
                >
                  View Reports →
                </a>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row g-3">
                {stats.map((s, i) => (
                  <div key={i} className="col-6">
                    <motion.div
                      className="yt-stat-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: s.color,
                          fontWeight: 900,
                          textTransform: "uppercase",
                          letterSpacing: "2px",
                          display: "block",
                          marginBottom: "12px",
                        }}
                      >
                        {s.label}
                      </span>
                      <span className="yt-stat-value">{s.val}</span>
                      <div
                        style={{
                          width: "40px",
                          height: "3px",
                          background: s.color,
                          borderRadius: "50px",
                          margin: "10px auto",
                          boxShadow: `0 0 10px ${s.color}`,
                        }}
                      ></div>
                      <span className="yt-stat-sub">{s.sub}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeAnalysisDash;
