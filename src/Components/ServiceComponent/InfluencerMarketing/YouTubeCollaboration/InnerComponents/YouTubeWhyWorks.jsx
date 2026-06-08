import React from "react";
import { motion } from "framer-motion";

const YouTubeWhyWorks = () => {
  const metrics = [
    {
      val: "A+",
      label: "Audience Trust",
      color: "#ff0000",
      top: "10%",
      left: "-5%",
    },
    {
      val: "72%",
      label: "Avg. Retention",
      color: "#7000ff",
      top: "55%",
      left: "-8%",
    },
    {
      val: "Infinity",
      label: "Search Reach",
      color: "#00f2ff",
      top: "20%",
      right: "-5%",
    },
  ];

  return (
    <section className="yt-why-section youtube-dark-bg">
      <div className="yt-glow-top-right"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="yt-label">// The Power of Video</span>
              <h2>
                Why YouTube Is a
                <span className="youtube-gradient-text">
                  High-Trust Platform
                </span>
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#a0a0b0",
                  lineHeight: 1.8,
                  marginBottom: "40px",
                }}
              >
                On YouTube, people don’t just scroll — they watch, learn, and
                trust. It’s the ultimate medium for building deep credibility
                through long-form storytelling.
              </p>

              <div className="row g-4 mb-5">
                {[
                  {
                    text: "Long-form content builds deeper credibility",
                    icon: "💎",
                  },
                  {
                    text: "High audience retention and engagement",
                    icon: "📊",
                  },
                  {
                    text: "Strong search visibility (evergreen content)",
                    icon: "🚀",
                  },
                  {
                    text: "Ideal for product education & storytelling",
                    icon: "🎥",
                  },
                ].map((f, i) => (
                  <div key={i} className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "1.2rem" }}>{f.icon}</span>
                      <span
                        style={{
                          color: "#fff",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        {f.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="yt-why-punchline">
                "On YouTube, people don’t just scroll — they watch, learn, and
                trust."
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <div className="yt-visual-container">
              <motion.img
                src="/youtube_spotlight.png"
                className="yt-main-asset"
                alt="YouTube Spotlight"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              />

              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  className="yt-metric-bubble"
                  style={{ top: m.top, left: m.left, right: m.right }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <span className="yt-bubble-val" style={{ color: m.color }}>
                    {m.val}
                  </span>
                  <span className="yt-bubble-label">{m.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeWhyWorks;
