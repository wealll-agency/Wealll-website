import React from "react";
import { motion } from "framer-motion";

const YouTubeExecution = () => {
  const steps = [
    {
      title: "Creator Coordination",
      icon: "fa-user-group",
      desc: "Seamless management of communication and timelines.",
    },
    {
      title: "Content Approvals",
      icon: "fa-check-double",
      desc: "Multi-layer quality checks for brand consistency.",
    },
    {
      title: "Publishing Timelines",
      icon: "fa-calendar-days",
      desc: "Strategic scheduling for maximum platform resonance.",
    },
    {
      title: "Video Consistency",
      icon: "fa-clapperboard",
      desc: "Professional output across all collaborations.",
    },
  ];

  return (
    <section
      className="youtube-dark-bg"
      style={{ padding: "100px 0", position: "relative" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span
              style={{
                fontSize: "0.9rem",
                color: "#ff00ff",
                fontWeight: 800,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              // Operational Excellence
            </span>
            <h2>
              End-to-End{" "}
              <span className="youtube-gradient-text">Campaign Management</span>
            </h2>
            <p
              style={{
                color: "#a0a0b0",
                fontSize: "1.2rem",
                marginTop: "15px",
              }}
            >
              From planning to publishing — everything is managed seamlessly by
              the WEALLL expert team.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <motion.div
                className="yt-bento-unit"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: "center", height: "100%", padding: "30px" }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(112, 0, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <i
                    className={`fa-solid ${step.icon}`}
                    style={{ color: "#7000ff", fontSize: "1.5rem" }}
                  ></i>
                </div>
                <h4
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    marginBottom: "15px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    color: "#a0a0b0",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <p
            style={{
              color: "#00f2ff",
              fontStyle: "italic",
              fontSize: "1.1rem",
            }}
          >
            “Your brand becomes part of the story — not an interruption.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default YouTubeExecution;
