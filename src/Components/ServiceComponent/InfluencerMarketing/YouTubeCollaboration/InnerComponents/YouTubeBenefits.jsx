import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    num: "01",
    title: "Authority Injection",
    desc: "Position your brand as a market leader through deep-dive storytelling and expert creator backing that bypasses common marketing skepticism.",
    icon: "👑",
  },
  {
    num: "02",
    title: "Evergreen Visibility",
    desc: "YouTube content continues to drive reach through search and recommendations for years. One great video can generate qualified traffic indefinitely.",
    icon: "♾️",
  },
  {
    num: "03",
    title: "Deep Audience Trust",
    desc: "Leverage the unbreakable bond creators have with their viewers. When they trust the creator, they trust your brand.",
    icon: "🤝",
  },
  {
    num: "04",
    title: "Educational Impact",
    desc: "Perfectly explain complex products or services to an audience that is actively seeking to learn and solve problems.",
    icon: "🎓",
  },
  {
    num: "05",
    title: "Growth Library",
    desc: "Build a content library that serves as a long-term asset for conversions and brand loyalty over multiple campaigns.",
    icon: "📚",
  },
];

const YouTubeBenefits = () => {
  return (
    <section
      className="youtube-dark-bg"
      style={{ padding: "70px 0", position: "relative", overflow: "hidden" }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row mb-5 pb-3">
          <div className="col-lg-7">
            <span className="yt-label">// The Outcome</span>
            <h2>
              What You Achieve <br />
              <span className="youtube-gradient-text">
                with YouTube Collabs
              </span>
            </h2>
          </div>
        </div>

        <div className="yt-monolith-grid">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="yt-monolith-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="yt-mono-num">{item.num}</span>
              <span className="yt-mono-icon">{item.icon}</span>
              <h4 className="yt-mono-title">{item.title}</h4>
              <p className="yt-mono-desc">{item.desc}</p>
            </motion.div>
          ))}

          <motion.div
            className="yt-monolith-card"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,0,0,0.9), rgba(112,0,255,0.9))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderColor: "transparent",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: "2rem",
                marginBottom: "20px",
              }}
            >
              Ready to start?
            </h4>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.05rem",
                marginBottom: "30px",
              }}
            >
              Let us build a YouTube strategy that drives real revenue.
            </p>
            <a
              href="#contact"
              className="youtube-glow-btn"
              style={{
                background: "#fff",
                color: "#000",
                padding: "15px 35px",
                fontSize: "1rem",
                fontWeight: 800,
              }}
            >
              Get Started Instantly
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeBenefits;
