import React, { useEffect, useRef, useState } from "react";
import "./media-content.css";

// Media Assets
import planningImg from "../../../../../assets/images/cm-mr-planning.png";
import outreachImg from "../../../../../assets/images/cm-mr-outreach.png";
import pressVideo from "../../../../../assets/Video/px-showreel.mp4"; // using existing showreel as cool tech bg
import BannerComponent from "../../../CommonComponents/BannerComponent";

const MediaContent = () => {
  const [activePrep, setActivePrep] = useState(0);
  const [timecode, setTimecode] = useState("00:00:00:00");

  const prepData = [
    { title: "Interview Training", icon: "🎙️", desc: "Comprehensive training on handling various media interview formats, from hostile questioning to comfortable fireside chats. We actively simulate real-world broadcasting environments to build unshakeable confidence." },
    { title: "Key Messaging", icon: "💬", desc: "Development of core messages to ensure brand consistency during talks. We distill your complex company vision into powerful, memorable soundbites that resonate with audiences and journalists alike." },
    { title: "Briefing Documents", icon: "📄", desc: "Detailed spokesperson briefing documents provided before every interview. Includes comprehensive analysis of journalist backgrounds, expected questions, and strategic pivot techniques." },
    { title: "Q&A Sessions", icon: "❓", desc: "Mock interviews and preparation sessions to ensure your team is ready for anything. We apply intensive pressure testing to eliminate surprises and refine your on-camera presence." }
  ];

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mr-is-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    revealRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    const interval = setInterval(() => {
      const d = new Date();
      const hr = String(d.getHours()).padStart(2, '0');
      const min = String(d.getMinutes()).padStart(2, '0');
      const sec = String(d.getSeconds()).padStart(2, '0');
      const ms = String(Math.floor(d.getMilliseconds() / 10)).padStart(2, '0');
      setTimecode(`${hr}:${min}:${sec}:${ms}`);
    }, 47);

    return () => {
      revealRefs.current.forEach((ref) => {
        observer.unobserve(ref);
      });
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mr-page">
      {/* 1. Media Strategy & Planning */}
      <section className="mr-section-sp">
        <BannerComponent />
        <div className="mr-container top_container">
          <div className="mr-strategy-grid">
            <div className="mr-s-text mr-reveal-right" ref={addToRefs}>
              <span className="mr-badge">01. Strategy</span>
              <h2 className="mr-title">Media Positioning</h2>
              <p className="mr-desc">
                Effective media coverage starts with the right strategy. WEALLL identifies relevant media outlets, publications, and journalists to position your brand for maximum visibility—ensuring your message reaches the right audience with impact and credibility.
              </p>

              <ul className="mr-feature-list mr-stagger-list" ref={addToRefs}>
                <li>
                  <i className="fa-solid fa-crosshairs"></i> Media opportunity analysis

                </li>
                <li>
                  <i className="fa-solid fa-user-check"></i> Identification of relevant journalists
                </li>
                <li>
                  <i className="fa-solid fa-route"></i> Media outreach planning
                </li>
                <li>
                  <i className="fa-solid fa-pen-nib"></i> Story angle development
                </li>
                <li>
                  <i className="fa-solid fa-satellite-dish"></i> Strategic communication planning
                </li>
              </ul>

              <p style={{ color: "var(--mr-primary)", fontWeight: "bold" }}>
                This ensures your brand story reaches the right media channels
                for maximum impact.
              </p>
            </div>

            <div className="mr-s-img mr-reveal-left" ref={addToRefs}>
              <div className="mr-image-frame">
                <img
                  src={planningImg}
                  alt="Media footprint and routing strategy"
                />
                <div className="mr-float-tag">
                  <span style={{ color: "var(--mr-primary)" }}>●</span> Target
                  Acquired
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Press Release Development */}
      <section className="mr-press-section">
        <video autoPlay loop muted playsInline className="mr-video-bg">
          <source src={pressVideo} type="video/mp4" />
        </video>
        <div className="mr-video-overlay"></div>

        <div
          className="mr-container"
          style={{ position: "relative", zIndex: 3 }}
        >
          <div className="text-center mr-reveal-up" ref={addToRefs}>
            <span className="mr-badge">02. Press Release</span>
            <h2 className="mr-title">Development & Distribution</h2>
            <p className="mr-desc mx-auto">
              Share Your Brand’s News with the Media. Press releases are one of
              the most effective tools for announcing company updates and major
              milestones. We create professionally written press releases
              designed to attract media attention and secure coverage.
            </p>
          </div>

          <div className="mr-press-cards-warp mr-stagger-list" ref={addToRefs}>
            <div className="mr-press-card">
              <div className="mr-press-icon">📝</div>
              <h4>Writing & Editing</h4>
              <p>Professional press release writing and editing.</p>
            </div>
            <div className="mr-press-card">
              <div className="mr-press-icon">📣</div>
              <h4>News Strategy</h4>
              <p>News announcement optimization strategy.</p>
            </div>
            <div className="mr-press-card">
              <div className="mr-press-icon">📄</div>
              <h4>Content Formatting</h4>
              <p>Media-ready content structure.</p>
            </div>
            <div className="mr-press-card">
              <div className="mr-press-icon">🚀</div>
              <h4>Distribution</h4>
              <p>Direct distribution to key media outlets.</p>
            </div>
            <div className="mr-press-card">
              <div className="mr-press-icon">✉️</div>
              <h4>Follow-up</h4>
              <p>Active follow-up communication with journalists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Journalist Outreach */}
      <section className="mr-section-sp">
        <div className="mr-container">
          <div className="mr-outreach-grid">
            <div className="mr-network mr-reveal-right" ref={addToRefs}>
              {/* Abstract nodes image set via CSS background */}
            </div>

            <div className="mr-outtext mr-reveal-left" ref={addToRefs}>
              <span className="mr-badge">03. Outreach</span>
              <h2 className="mr-title">Journalist Outreach & Pitching</h2>
              <p className="mr-desc mb-5">
                Connect Your Brand with Influential Journalists. Building strong
                relationships is essential for successful media coverage. Our
                team actively pitches relevant stories to media professionals
                who cover your industry.
              </p>

              <div className="mr-outreach-list mr-stagger-list" ref={addToRefs}>
                <div className="mr-out-item">
                  <div className="mr-out-num">01</div>
                  <div>
                    <h5>Personalized Outreach</h5>
                  </div>
                </div>
                <div className="mr-out-item">
                  <div className="mr-out-num">02</div>
                  <div>
                    <h5>Media Story Pitching</h5>
                  </div>
                </div>
                <div className="mr-out-item">
                  <div className="mr-out-num">03</div>
                  <div>
                    <h5>Relationship Management</h5>
                  </div>
                </div>
                <div className="mr-out-item">
                  <div className="mr-out-num">04</div>
                  <div>
                    <h5>Interview Coordination</h5>
                  </div>
                </div>
                <div className="mr-out-item">
                  <div className="mr-out-num">05</div>
                  <div>
                    <h5>Coverage Follow-ups</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Spokesperson Preparation */}
      <section className="mr-section-sp" style={{ background: "var(--mr-dark)" }}>
        <div className="mr-container">
          <div className="text-center mr-reveal-up" ref={addToRefs}>
            <span className="mr-badge">04. Preparation</span>
            <h2 className="mr-title">Media Interview & Spokesperson Prep</h2>
            <p className="mr-desc mx-auto">
              Prepare Your Leadership for Media Interactions. When media opportunities arise, it’s important that your leadership communicates clearly and confidently. We prepare company representatives for interviews and appearances.
            </p>
          </div>

          <div className="mr-cam-ui-wrapper mr-reveal-up" ref={addToRefs}>
            <div className="mr-cam-corner top-left"></div>
            <div className="mr-cam-corner top-right"></div>
            <div className="mr-cam-corner bottom-left"></div>
            <div className="mr-cam-corner bottom-right"></div>

            <div className="mr-cam-header">
              <div className="mr-timecode">{timecode}</div>
              <div className="mr-rec-indicator"><span className="mr-rec-dot"></span> REC</div>
              <div className="mr-cam-settings">
                <span>F2.8</span> <span>ISO 800</span> <span>4K RAW</span>
              </div>
            </div>

            <div className="mr-cam-body">
              <div className="mr-cam-sidebar">
                {prepData.map((item, i) => (
                  <button
                    key={i}
                    className={`mr-cam-btn ${activePrep === i ? 'active' : ''}`}
                    onClick={() => setActivePrep(i)}
                  >
                    <span className="mr-cam-icon">{item.icon}</span>
                    <div className="mr-cam-btn-text">
                      <div className="mr-cam-btn-title">{item.title}</div>
                      <div className="mr-cam-btn-sub">Module {String(i + 1).padStart(2, '0')}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mr-cam-screen">
                <div className="mr-cam-crosshair">
                  <div className="ch-horiz"></div>
                  <div className="ch-vert"></div>
                </div>

                <div className="mr-teleprompter-content" key={activePrep}>
                  <div className="mr-promo-label">LIVE READING</div>
                  <h3 className="mr-promo-title">{prepData[activePrep].title}</h3>
                  <p className="mr-promo-desc">{prepData[activePrep].desc}</p>
                </div>

                <div className="mr-audio-bars">
                  <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Brand Story Development */}
      <section className="mr-section-sp">
        <div className="mr-container text-center">
          <div className="mr-story-block mr-reveal-up" ref={addToRefs}>
            <span className="mr-badge">05. Storytelling</span>
            <h2 className="mr-title">Brand Narrative</h2>
            <p className="mr-desc mx-auto" style={{ maxWidth: "800px" }}>
              Media coverage starts with a compelling story. WEALLL develops newsworthy brand narratives that align with media interests, ensuring your story is relevant, engaging, and positioned to attract meaningful coverage.

            </p>

            <div className="mr-pill-warp mr-stagger-list" ref={addToRefs}>
              <div className="mr-pill">Company Milestone Announcements</div>
              <div className="mr-pill">Product/Service Launch Stories</div>
              <div className="mr-pill">Founder & Leadership Profiles
              </div>
              <div className="mr-pill">
                Industry Insights & Thought Leadership
              </div>
              <div className="mr-pill">Business Growth & Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Coverage Monitoring */}
      <section
        className="mr-section-sp"
        style={{ background: "var(--mr-dark)" }}
      >
        <div className="mr-container">
          <div className="mr-header text-center mr-reveal-up" ref={addToRefs}>
            <span className="mr-badge">06. Intelligence</span>
            <h2 className="mr-title">Coverage Monitoring & Reporting</h2>
            <p className="mr-desc mx-auto">
              Track and Analyze Your Media Visibility. Once your brand receives
              media coverage, it’s important to track and analyze the results.
              We monitor media placements and provide insights into the impact
              of your PR efforts.
            </p>
          </div>

          <div className="mr-monitor-metrics mr-stagger-list" ref={addToRefs}>
            <div className="mr-metric-box">
              <h3>24</h3>
              <p>Hour Tracking</p>
            </div>
            <div className="mr-metric-box">
              <h3>
                <i className="fa-solid fa-newspaper text-white"></i>
              </h3>
              <p>Press Mentions</p>
            </div>
            <div className="mr-metric-box">
              <h3>
                <i className="fa-solid fa-heart-circle-check text-white"></i>
              </h3>
              <p>Sentiment Analysis</p>
            </div>
            <div className="mr-metric-box">
              <h3>
                <i className="fa-solid fa-chart-line text-white"></i>
              </h3>
              <p>Impact Reports</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaContent;
