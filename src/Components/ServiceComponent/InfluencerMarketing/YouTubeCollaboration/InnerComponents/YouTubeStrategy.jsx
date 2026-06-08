import React from "react";
import { motion } from "framer-motion";

const YouTubeStrategy = () => {
  const steps = [
    {
      num: "01",
      tag: "Channel Blueprint",
      title: "Strategic Channel Planning",
      desc: "We build a YouTube strategy based on target audience behaviour, content category, campaign goals, and platform dynamics. Ensuring your brand is positioned within the right creator ecosystem.",
    },
    {
      num: "02",
      tag: "Creator Vetting",
      title: "Data-Driven Creator Selection",
      desc: "We go beyond subscriber counts. Every creator is vetted for demographics, engagement authenticity, and category authority — ensuring your brand is endorsed by voices your audience trusts.",
    },
    {
      num: "03",
      tag: "Content Mapping",
      title: "Narrative Content Flow Design",
      desc: "We map out the integration points within creator content ecosystems for maximum natural engagement. Your brand becomes part of the story, not an interruption to it.",
    },
    {
      num: "04",
      tag: "Performance Design",
      title: "Evergreen Performance Mapping",
      desc: "Aligning creative output with YouTube's platform dynamics — Search + Recommendations — to ensure your collaboration generates long-term viewership, not just launch-day spikes.",
    },
  ];

  return (
    <section className="yt-strategy-section youtube-dark-bg">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row mb-5 text-center justify-content-center">
          <div className="col-lg-8">
            <span className="yt-label">// Strategic Engine</span>
            <h2>
              Structural YouTube <br />
              <span className="youtube-gradient-text">Planning System</span>
            </h2>
            <p
              style={{ color: "#7070a0", fontSize: "1.2rem", lineHeight: 1.8 }}
            >
              We place your brand where your audience is already watching,
              learning, and trusting. Every collaboration is built on data,
              narrative insight, and platform mechanics.
            </p>
          </div>
        </div>

        <div className="yt-hud-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="yt-hud-card"
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="yt-hud-num">{step.num}</span>
              <span className="yt-hud-tag">{step.tag}</span>
              <h3 className="yt-hud-title">{step.title}</h3>
              <p className="yt-hud-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeStrategy;
