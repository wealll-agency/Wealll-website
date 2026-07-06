import { mediaUrl } from "../../../../../config/media";
import React from "react";
import { motion } from "framer-motion";

const InstagramWhyWorks = () => {
  return (
    <section className="ig-why-section instagram-dark-bg">
      <div className="ig-glow-right"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="ig-label">// Market Dominance</span>
              <h2 className="ig-why-section h2">
                Why Instagram Is a
                <span className="instagram-gradient-text">
                  High-Impact Platform
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
                Instagram is where attention turns into influence — and
                influence turns into action. It's the ultimate canvas for viral
                growth and visual brand positioning.
              </p>

              <div className="ig-check-list">
                <div className="ig-check-item">
                  <div className="ig-check-dot"></div>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                  >
                    Massive and highly active user base
                  </span>
                </div>
                <div className="ig-check-item">
                  <div className="ig-check-dot"></div>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                  >
                    Strong engagement through reels & stories
                  </span>
                </div>
                <div className="ig-check-item">
                  <div className="ig-check-dot"></div>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                  >
                    Visual storytelling drives attention
                  </span>
                </div>
                <div className="ig-check-item">
                  <div className="ig-check-dot"></div>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                  >
                    Ideal for brand awareness & conversions
                  </span>
                </div>
              </div>

              <div className="ig-punchline">
                "Attention turns into influence, and influence turns into
                action."
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <div style={{ position: "relative" }}>
              <motion.img
                src={mediaUrl("insta_spotlight.png")}
                className="ig-why-image"
                alt="Instagram Spotlight"
                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramWhyWorks;
