import React, { useState } from "react";
import { motion } from "framer-motion";

const integrationTypes = [
  {
    id: "dedicated",
    title: "Dedicated Brand Videos",
    desc: "Complete videos exclusively focused on your brand — product reviews, deep-dives, tutorials, and origin stories.",
    icon: "🎬",
    bgImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    points: [
      "Full video dedicated to your brand",
      "Script alignment and brand brief",
      "Q&A and review-style formats",
    ],
  },
  {
    id: "integrated",
    title: "Integrated Mentions",
    desc: "Natural brand placements within regular episodes. Your product becomes a seamless part of the creator's world.",
    icon: "🔗",
    bgImage:
      "https://images.unsplash.com/photo-1516280440502-a2f26abebc0b?q=80&w=1000&auto=format&fit=crop",
    points: [
      "60–120 second brand segments",
      "Embedded within high-retention episodes",
      "Link and CTA included in description",
    ],
  },
  {
    id: "series",
    title: "Story-Driven Series",
    desc: "Multi-episode brand collaborations that build momentum over time. Building familiarity, trust, and conversion.",
    icon: "📺",
    bgImage:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    points: [
      "3–6 episode brand arc",
      "Building audience narrative",
      "Compound visibility over time",
    ],
  },
  {
    id: "educational",
    title: "Educational Features",
    desc: "Content where your product or service is the solution. Ideal for complex B2B offerings and SaaS.",
    icon: "🎓",
    bgImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop",
    points: [
      "Tutorial and how-to formats",
      "Brand as the problem solution",
      "High-intent audience alignment",
    ],
  },
];

const YouTubeContentIntegration = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="yt-integration-section youtube-dark-bg">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row mb-3 pb-2 text-center justify-content-center">
          <div className="col-lg-8">
            <span className="yt-label">// Seamless Integration</span>
            <h2>
              Your Brand as Part <br />
              <span className="youtube-gradient-text">of the Story</span>
            </h2>
            <p
              style={{
                color: "#7070a0",
                fontSize: "1.2rem",
                lineHeight: 1.8,
                marginTop: "20px",
              }}
            >
              We don't just insert ads. We weave your brand into the content
              ecosystem where it feels natural, relevant, and impactful.
            </p>
          </div>
        </div>

        <div className="yt-gallery-container">
          {integrationTypes.map((item, index) => (
            <div
              key={item.id}
              className={`yt-gallery-panel ${activeIndex === index ? "active" : ""}`}
              style={{ backgroundImage: `url(${item.bgImage})` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="yt-gallery-icon-wrapper">{item.icon}</div>
              <div className="yt-gallery-title-vertical">{item.title}</div>
              <div className="yt-gallery-content">
                <h3 className="yt-gallery-title">{item.title}</h3>
                <p className="yt-gallery-desc">{item.desc}</p>
                <ul className="yt-gallery-list">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeContentIntegration;
