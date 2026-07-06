import React, { useEffect, useRef, useState } from "react";
import "./crisis-content.css";

// Importing the generated & copied assets
const monitorImg = mediaUrl("assets/images/cm-monitor.png");
const picsart = mediaUrl("assets/images/picsart.jpeg");
const picsart2 = mediaUrl("assets/images/picsart2.jpeg");
// const pressImg = mediaUrl("assets/images/cm-press.png");
const pressImg = mediaUrl("assets/images/picsart3.jpeg");
const recoveryImg = mediaUrl("assets/images/cm-recovery.png");
import BannerComponent from "../../../CommonComponents/BannerComponent";
import { mediaUrl } from "../../../../../config/media";

const CrisisContent = () => {
  const [activeStrategy, setActiveStrategy] = useState(0);
  const strategyData = [
    {
      id: "01",
      title: "Crisis Clarity",
      icon: "🛡️",
      desc: "We analyse the crisis landscape to assess immediate risks and the long-term impact on your brand. By evaluating the narrative, identifying key influencers, and mapping potential escalation paths, WEALLL helps you respond faster, smarter, and more controlled.",
    },
    {
      id: "02",
      title: "Official Responses",
      icon: "📝",
      desc: "WEALLL develops structured response messaging tailored to key stakeholders, ensuring every communication is clear, empathetic, and legally aligned. Our PR experts craft unified brand statements that protect credibility and maintain trust across all public and media interactions.",
    },
    {
      id: "03",
      title: "Timeline Planning",
      icon: "⏱️",
      desc: "We design strategic communication timelines to ensure timely, consistent updates during a crisis. By controlling the flow of information, WEALLL helps brands lead the narrative and minimize misinformation across digital and media channels",
    },
    {
      id: "04",
      title: "Stakeholder Guidance",
      icon: "👥",
      desc: "WEALLL provides clear communication frameworks for stakeholders, including employees, investors, partners, and key clients. From talking points to FAQs, we ensure every audience receives the right message with clarity and confidence.",
    },
    {
      id: "05",
      title: "Internal Comms",
      icon: "🏢",
      desc: "Strong internal communication is critical during a crisis. WEALLL aligns your teams with structured messaging and response protocols, ensuring consistency, clarity, and control in all external interactions.",
    },
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
            entry.target.classList.add("cm-active");
          }
        });
      },
      { threshold: 0.15 },
    );

    revealRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="cm-page-wrapper">
      {/* 1. Crisis Monitoring & Risk Assessment */}
      <section className="cm-section">
        <BannerComponent />
        <div className="cm-container top_container">
          <div className="cm-monitor-grid">
            <div className="cm-monitor-text cm-fade-right" ref={addToRefs}>
              <div
                className="cm-header"
                style={{ textAlign: "left", marginBottom: "0" }}
              >
                <span className="badge">01. Monitor</span>
                <h2 className="cm-title">
                  Crisis Monitoring & Risk Assessment
                </h2>
                <p className="cm-subtitle" style={{ marginLeft: "0" }}>
                  Stay Ahead of Reputation Risks
                </p>
              </div>
              <p className="mt-4">
                The first step in effective crisis management is early detection. At WEALLL, we continuously monitor key communication channels to identify potential risks before they impact your brand, giving you the clarity and control to act proactively.
              </p>
              <ul className="cm-list">
                <li>
                  <span className="icon">✓</span> Media & News Monitoring
                </li>
                <li>
                  <span className="icon">✓</span> Social Media Sentiment Analysis
                </li>
                <li>
                  <span className="icon">✓</span> Online Review Tracking
                </li>
                <li>
                  <span className="icon">✓</span> Real-Time Brand Mention Alerts
                </li>
                <li>
                  <span className="icon">✓</span>  Industry & Competitor Reputation Insights
                </li>
              </ul>
              <p style={{ color: "var(--cm-primary)" }}>
                <strong>
                  By identifying threats early, WEALLL enables brands to respond with speed and precision, preventing minor issues from escalating into full-scale reputation crises.
                </strong>
              </p>
            </div>
            <div className="cm-monitor-img cm-fade-left" ref={addToRefs}>
              <div className="img-wrapper">
                <img src={picsart} alt="Crisis Monitoring and Radar" loading="lazy" />
                <div className="cm-pulse-dot">Active Scanning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Crisis Communication Strategy */}
      <section className="cm-section cm-strategy">
        <div className="cm-container">
          <div className="cm-header cm-fade-up" ref={addToRefs}>
            <span className="badge">02. Strategy</span>
            <h2 className="cm-title">Crisis Communication Strategy</h2>
            <p className="cm-subtitle">
              In moments of crisis, communication defines perception. WEALLL develops structured, strategic response frameworks that enable brands to communicate with clarity, confidence, and responsibility, protecting credibility when it matters most.

            </p>
          </div>

          <div className="cm-strategy-layout cm-fade-up" ref={addToRefs}>
            <div className="cm-strategy-steps">
              {strategyData.map((step, index) => (
                <button
                  key={index}
                  className={`cm-strategy-step-btn ${activeStrategy === index ? "active" : ""}`}
                  onClick={() => setActiveStrategy(index)}
                >
                  <span className="cm-strategy-step-num">{step.id}</span>
                  <span className="cm-strategy-step-title">{step.title}</span>
                </button>
              ))}
            </div>

            <div className="cm-strategy-display">
              <div className="cm-disp-content" key={activeStrategy}>
                <div className="cm-disp-icon">
                  {strategyData[activeStrategy].icon}
                </div>
                <h3 className="cm-disp-title">
                  {strategyData[activeStrategy].title}
                </h3>
                <p className="cm-disp-desc">
                  {strategyData[activeStrategy].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Media Relations & Press Management */}
      <section className="cm-section">
        <div className="cm-container">
          <div
            className="cm-media-card cm-fade-up"
            ref={addToRefs}
            style={{ backgroundImage: `url(${pressImg})` }}
          >
            <div className="cm-media-overlay"></div>
            <div className="cm-media-content">
              <span className="badge">03. Press</span>
              <h2 className="cm-title">Media Relations & Press Management</h2>
              <p style={{ fontSize: "18px", color: "#ccc" }}>
                Handle Media Interactions with Professional Expertise. Media
                coverage during a crisis can significantly influence public
                perception. Our PR specialists help manage media communication
                to ensure accurate and responsible reporting.
              </p>

              <div className="cm-media-list">
                <div className="cm-media-item">Press statement drafting</div>
                <div className="cm-media-item">Media interview prep</div>
                <div className="cm-media-item">Journalist management</div>
                <div className="cm-media-item">Press briefing coordination</div>
                <div className="cm-media-item" style={{ gridColumn: "1 / -1" }}>
                  Media narrative management
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Social Media Crisis Response */}
      <section className="cm-section cm-strategy">
        <div className="cm-container">
          <div className="cm-header cm-fade-up" ref={addToRefs}>
            <span className="badge">04. Social</span>
            <h2 className="cm-title">Social Media Crisis Response</h2>
            <p className="cm-subtitle">
              WEALLL actively manages social media conversations during a crisis, ensuring timely, professional, and brand-aligned responses. By monitoring public sentiment and engaging strategically, we help control narratives and protect your brand reputation across all platforms.

            </p>
          </div>

          <div className="cm-social-wrapper cm-stagger" ref={addToRefs}>
            <div className="cm-social-pillar">
              <div className="cm-sp-icon">🔍</div>
              <h4>Monitor</h4>
              <p>Monitoring public conversations instantly.</p>
            </div>
            <div className="cm-social-pillar">
              <div className="cm-sp-icon">💬</div>
              <h4>Respond</h4>
              <p>Responding to customer concerns safely.</p>
            </div>
            <div className="cm-social-pillar">
              <div className="cm-sp-icon">🛡️</div>
              <h4>Manage</h4>
              <p>Managing misinformation and rumors.</p>
            </div>
            <div className="cm-social-pillar">
              <div className="cm-sp-icon">🤝</div>
              <h4>Engage</h4>
              <p>Comment moderation and engagement.</p>
            </div>
            <div className="cm-social-pillar">
              <div className="cm-sp-icon">📢</div>
              <h4>Unify</h4>
              <p>Consistent brand messaging across platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reputation Recovery & Trust Rebuilding */}
      <section className="cm-section">
        <div className="cm-container">
          <div className="cm-recovery-grid">
            <div className="cm-timeline-wrapper cm-fade-right" ref={addToRefs}>
              <span className="badge">05. Recovery</span>
              <h2 className="cm-title">
                Reputation Recovery & Trust Rebuilding
              </h2>
              <p
                style={{
                  marginBottom: "40px",
                  color: "var(--cm-text-light)",
                  fontSize: "18px",
                }}
              >
                Once the immediate crisis is contained, WEALLL focuses on restoring confidence and credibility. Through strategic campaigns and consistent communication, we rebuild trust and reposition your brand for long-term growth.

              </p>

              <div className="cm-timeline">
                <div className="cm-timeline-item">
                  <h4>Positive PR Campaigns</h4>
                  <p>Strategic media outreach and proactive press coverage.</p>
                </div>
                <div className="cm-timeline-item">
                  <h4>Brand Credibility Storytelling</h4>
                  <p>Reshaping your brand’s public narrative.</p>
                </div>
                <div className="cm-timeline-item">
                  <h4>Thought Leadership Content</h4>
                  <p>Positioning leadership as trusted industry voices.</p>
                </div>
                <div className="cm-timeline-item">
                  <h4>Customer Trust Initiatives</h4>
                  <p>Strengthening direct customer relationships.</p>
                </div>
                <div className="cm-timeline-item" style={{ marginBottom: "0" }}>
                  <h4>SEO Reputation Repair</h4>
                  <p>Restoring reputation through SEO and content strategy.</p>
                </div>
              </div>
            </div>

            <div className="cm-recovery-img-box cm-fade-left" ref={addToRefs}>
              <img src={picsart2} alt="Reputation graph recovery" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Crisis Prevention & Preparedness */}
      <section className="cm-section cm-strategy">
        <div className="cm-container">
          <div className="cm-shield-container cm-fade-up" ref={addToRefs}>
            <span className="badge">06. Prevention</span>
            <h2 className="cm-title">Crisis Prevention & Preparedness</h2>
            <p className="cm-subtitle">
              Prepare Your Brand for Future Challenges. Effective crisis
              management includes preparing your organization for potential
              future risks. We help brands develop crisis preparedness
              frameworks to respond confidently in any situation.
            </p>

            <div className="cm-prepared-list">
              <div className="cm-prepared-chip">Crisis response guidelines</div>
              <div className="cm-prepared-chip">
                Communication policy development
              </div>
              <div className="cm-prepared-chip">
                Media training for leadership
              </div>
              <div className="cm-prepared-chip">Social media guidelines</div>
              <div className="cm-prepared-chip">Reputation risk audits</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrisisContent;
