import React, { useEffect, useRef } from "react";
import "./tv-commercials.css";
import bg1 from "../../../../../assets/images/tv_commercial_brand_story_1772790134750.png";
import bg2 from "../../../../../assets/images/tv_commercial_product_promo_1772790152726.png";
import bg3 from "../../../../../assets/images/tv_commercial_script_concept_1772790174220.png";
import bg4 from "../../../../../assets/images/tv_commercial_pro_production_1772790194396.png";
import bg5 from "../../../../../assets/images/tv_commercial_multi_platform_1772790212294.png";
import bg6 from "../../../../../assets/images/tv_commercial_strategy_1772790233395.png";
import BannerComponent from "../../../CommonComponents/BannerComponent";

const TvCommercialSections = () => {
  const sectionRefs = useRef([]);
  const parallaxRefs = useRef([]);

  // Reveal Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tvc-animate-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // 3D Parallax Mouse Move Handler
  const handleMouseMove = (e, index) => {
    const el = parallaxRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `perspective(1000px) rotateY(${x / 40}deg) rotateX(${-y / 40}deg)`;
  };

  const handleMouseLeave = (index) => {
    const el = parallaxRefs.current[index];
    if (!el) return;
    el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    el.style.transition = `transform 0.5s ease`;
  };

  const handleMouseEnter = (index) => {
    const el = parallaxRefs.current[index];
    if (!el) return;
    el.style.transition = `none`;
  };

  return (
    <div className="tvc-page-wrapper">
      {/* 1. Brand Story */}
      <section
        className="tvc-section tvc-bg-dark"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <BannerComponent />
        <div className="container tvc-section-v2">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 tvc-reveal">
              <h5 className="tvc-subtitle">
                🔷 1. Brand Story Television Commercials
              </h5>
              <h2 className="tvc-title">
                Communicate Your Brand’s{" "}
                <span className="tvc-text-hl">Vision and Identity</span>
              </h2>
              <p className="tvc-desc mt-4">
                A compelling brand story helps audiences connect emotionally
                with your business. Our brand-focused television commercials
                highlight the values, mission, and identity that make your brand
                unique.
              </p>
              <div className="tvc-box mt-4">
                <h6 className="tvc-box-title">
                  Our Brand Story TVCs may include:
                </h6>
                <ul className="tvc-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Brand introduction
                    commercials
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Corporate identity
                    commercials
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Emotional storytelling
                    campaigns
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Vision and mission
                    based advertisements
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Brand positioning
                    commercials
                  </li>
                </ul>
              </div>
              <div className="tvc-footer-text mt-4">
                <strong>
                  These commercials help create long-term brand recognition and
                  audience loyalty.
                </strong>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tvc-3d-wrapper tvc-reveal"
                style={{ transitionDelay: "0.3s" }}
                onMouseMove={(e) => handleMouseMove(e, 0)}
                onMouseLeave={() => handleMouseLeave(0)}
                onMouseEnter={() => handleMouseEnter(0)}
              >
                <div
                  className="tvc-parallax-element"
                  ref={(el) => (parallaxRefs.current[0] = el)}
                >
                  <img
                    src={bg1}
                    alt="Brand Story"
                    className="tvc-main-img img-fluid rounded border-gold"
                  />
                  <div className="tvc-float-chip chip-top-right">
                    <i className="fa-solid fa-heart align-middle"></i>{" "}
                    <span>Emotional Connect</span>
                  </div>
                  <div className="tvc-float-chip chip-bottom-left">
                    <i className="fa-solid fa-eye align-middle"></i>{" "}
                    <span>Brand Vision</span>
                  </div>
                </div>
                <div className="tvc-glow-backdrop"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product & Service Promotion */}
      <section
        className="tvc-section tvc-bg-darker"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 mb-5 mb-lg-0 tvc-reveal">
              <h5 className="tvc-subtitle">
                🔷 2. Product & Service Promotion Commercials
              </h5>
              <h2 className="tvc-title">
                Showcase the Value of{" "}
                <span className="tvc-text-hl">Your Products</span>
              </h2>
              <p className="tvc-desc mt-4">
                Television commercials are powerful tools for presenting
                products and services to a broad audience. We create commercials
                that clearly communicate the benefits and features of your
                offerings.
              </p>
              <div className="tvc-box mt-4">
                <h6 className="tvc-box-title">Our Promo TVCs include:</h6>
                <ul className="tvc-list">
                  <li>
                    <i className="fa-solid fa-star"></i> Product launch
                    advertisements
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i> Service introduction
                    commercials
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i> Feature highlight
                    campaigns
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i> Promotional and
                    seasonal ads
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i> Limited-time offer
                    campaigns
                  </li>
                </ul>
              </div>
              <div className="tvc-footer-text mt-4">
                <strong>
                  These commercials help increase awareness, generate interest,
                  and encourage customer action.
                </strong>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tvc-3d-wrapper tvc-reveal"
                style={{ transitionDelay: "0.2s" }}
                onMouseMove={(e) => handleMouseMove(e, 1)}
                onMouseLeave={() => handleMouseLeave(1)}
                onMouseEnter={() => handleMouseEnter(1)}
              >
                <div
                  className="tvc-parallax-element"
                  ref={(el) => (parallaxRefs.current[1] = el)}
                >
                  <div className="tvc-grid-layout">
                    <img
                      src={bg2}
                      alt="Product Promo"
                      className="tvc-main-img img-fluid rounded"
                    />
                    <div className="tvc-glass-stat shadow-lg">
                      <div className="tvc-stat-icon text-warning">
                        <i className="fa-solid fa-chart-line fa-2x"></i>
                      </div>
                      <div className="mt-2 text-white">
                        <strong>Audience Action</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Creative Concept */}
      <section
        className="tvc-section tvc-bg-dark"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 tvc-reveal">
              <h5 className="tvc-subtitle">
                🔷 3. Creative Concept & Script Development
              </h5>
              <h2 className="tvc-title">
                Strong Concepts That{" "}
                <span className="tvc-text-hl">Capture Attention</span>
              </h2>
              <p className="tvc-desc mt-4">
                Every successful commercial begins with a well-developed concept
                and script. Our creative team works closely with brands to
                develop compelling advertising ideas that resonate with viewers.
              </p>
              <div className="tvc-box mt-4">
                <h6 className="tvc-box-title">
                  Our creative process includes:
                </h6>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="tvc-list">
                      <li>
                        <i className="fa-solid fa-lightbulb"></i> Market
                        research
                      </li>
                      <li>
                        <i className="fa-solid fa-lightbulb"></i> Concept
                        ideation
                      </li>
                      <li>
                        <i className="fa-solid fa-lightbulb"></i> Storyboarding
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="tvc-list">
                      <li>
                        <i className="fa-solid fa-lightbulb"></i> Scriptwriting
                      </li>
                      <li>
                        <i className="fa-solid fa-lightbulb"></i> Tone alignment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tvc-footer-text mt-4">
                <strong>
                  This ensures every commercial communicates a clear, memorable,
                  and impactful message.
                </strong>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tvc-3d-wrapper tvc-reveal"
                style={{ transitionDelay: "0.4s" }}
                onMouseMove={(e) => handleMouseMove(e, 2)}
                onMouseLeave={() => handleMouseLeave(2)}
                onMouseEnter={() => handleMouseEnter(2)}
              >
                <div
                  className="tvc-parallax-element"
                  ref={(el) => (parallaxRefs.current[2] = el)}
                >
                  <img
                    src={bg3}
                    alt="Script Concept"
                    className="tvc-main-img img-fluid rounded border-gold"
                  />
                  <div className="tvc-float-chip chip-top-left">
                    <i className="fa-solid fa-file-pen"></i>{" "}
                    <span>Copywriting</span>
                  </div>
                </div>
                <div className="tvc-glow-backdrop"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Production */}
      <section
        className="tvc-section tvc-bg-darker"
        ref={(el) => (sectionRefs.current[3] = el)}
      >
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 mb-5 mb-lg-0 tvc-reveal">
              <h5 className="tvc-subtitle">
                🔷 4. Professional Production & Cinematic Execution
              </h5>
              <h2 className="tvc-title">
                High-Quality Production{" "}
                <span className="tvc-text-hl">Reflects Your Brand</span>
              </h2>
              <p className="tvc-desc mt-4">
                Professional production quality is essential for effective
                television advertising. Our team manages the complete production
                process to deliver visually impressive commercials.
              </p>
              <div className="tvc-box mt-4">
                <h6 className="tvc-box-title">
                  Our production services include:
                </h6>
                <ul className="tvc-list tvc-list-2col">
                  <li>
                    <i className="fa-solid fa-video"></i> Cinematography
                  </li>
                  <li>
                    <i className="fa-solid fa-lightbulb"></i> Lighting design
                  </li>
                  <li>
                    <i className="fa-solid fa-users"></i> Actor casting
                  </li>
                  <li>
                    <i className="fa-solid fa-microphone"></i> Voiceover
                  </li>
                  <li>
                    <i className="fa-solid fa-music"></i> Sound design
                  </li>
                  <li>
                    <i className="fa-solid fa-film"></i> Color grading
                  </li>
                </ul>
              </div>
              <div className="tvc-footer-text mt-4">
                <strong>
                  The result is a polished commercial that meets professional
                  broadcasting standards.
                </strong>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tvc-3d-wrapper tvc-reveal"
                style={{ transitionDelay: "0.3s" }}
                onMouseMove={(e) => handleMouseMove(e, 3)}
                onMouseLeave={() => handleMouseLeave(3)}
                onMouseEnter={() => handleMouseEnter(3)}
              >
                <div
                  className="tvc-parallax-element"
                  ref={(el) => (parallaxRefs.current[3] = el)}
                >
                  <img
                    src={bg4}
                    alt="Production Execution"
                    className="tvc-main-img img-fluid rounded"
                  />
                  <div className="tvc-progress-float">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-white">
                        Rendering Cinematic Colors
                      </small>
                      <small className="text-warning">99%</small>
                    </div>
                    <div
                      className="progress"
                      style={{ height: "8px", background: "#333" }}
                    >
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "99%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Multi-Platform Adaptation */}
      <section
        className="tvc-section tvc-bg-dark"
        ref={(el) => (sectionRefs.current[4] = el)}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 tvc-reveal">
              <h5 className="tvc-subtitle">
                🔷 5. Multi-Platform Commercial Adaptation
              </h5>
              <h2 className="tvc-title">
                Extend Your TVC <span className="tvc-text-hl">Beyond TV</span>
              </h2>
              <p className="tvc-desc mt-4">
                Modern marketing campaigns require content that performs across
                multiple channels. We adapt television commercials into formats
                suitable for digital platforms.
              </p>
              <div className="tvc-box mt-4">
                <h6 className="tvc-box-title">
                  Our adaptation services include:
                </h6>
                <ul className="tvc-list">
                  <li>
                    <i className="fa-brands fa-youtube"></i> YouTube advertising
                    versions
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i> Social media ad
                    cuts
                  </li>
                  <li>
                    <i className="fa-solid fa-tv"></i> OTT platform commercial
                    versions
                  </li>
                  <li>
                    <i className="fa-solid fa-laptop-code"></i> Website hero
                    video integration
                  </li>
                  <li>
                    <i className="fa-solid fa-mobile-screen-button"></i>{" "}
                    Short-form promotional clips
                  </li>
                </ul>
              </div>
              <div className="tvc-footer-text mt-4">
                <strong>
                  This allows your television commercial to generate value
                  across both broadcast and digital channels.
                </strong>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tvc-3d-wrapper tvc-reveal"
                style={{ transitionDelay: "0.5s" }}
                onMouseMove={(e) => handleMouseMove(e, 4)}
                onMouseLeave={() => handleMouseLeave(4)}
                onMouseEnter={() => handleMouseEnter(4)}
              >
                <div
                  className="tvc-parallax-element"
                  ref={(el) => (parallaxRefs.current[4] = el)}
                >
                  <img
                    src={bg5}
                    alt="Multi Platform"
                    className="tvc-main-img img-fluid rounded border-gold"
                  />
                  <div className="tvc-float-chip chip-bottom-right">
                    <i className="fa-solid fa-share-nodes"></i>{" "}
                    <span>Omnichannel Ready</span>
                  </div>
                </div>
                <div className="tvc-glow-backdrop"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Campaign Strategy */}
      <section
        className="tvc-section tvc-bg-darker"
        ref={(el) => (sectionRefs.current[5] = el)}
      >
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 mb-5 mb-lg-0 tvc-reveal">
              <h5 className="tvc-subtitle">
                🔷 6. Campaign Strategy & Performance Integration
              </h5>
              <h2 className="tvc-title">
                Integrating TV Advertising{" "}
                <span className="tvc-text-hl">with Digital Marketing</span>
              </h2>
              <p className="tvc-desc mt-4">
                As a digital marketing company, we integrate television
                commercials into broader marketing strategies to maximize
                campaign impact.
              </p>
              <div className="tvc-box mt-4">
                <h6 className="tvc-box-title">
                  Our campaign support includes:
                </h6>
                <ul className="tvc-list tvc-list-2col">
                  <li>
                    <i className="fa-solid fa-chart-pie"></i> Media planning
                  </li>
                  <li>
                    <i className="fa-solid fa-ad"></i> Digital ad integration
                  </li>
                  <li>
                    <i className="fa-solid fa-hashtag"></i> Social promotions
                  </li>
                  <li>
                    <i className="fa-solid fa-pager"></i> Landing page config
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i> Audience targeting
                  </li>
                  <li>
                    <i className="fa-solid fa-chart-line"></i> Performance
                    metrics
                  </li>
                </ul>
              </div>
              <div className="tvc-footer-text mt-4">
                <strong>
                  This integrated approach ensures that your television
                  commercial contributes to measurable business growth.
                </strong>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tvc-3d-wrapper tvc-reveal"
                style={{ transitionDelay: "0.2s" }}
                onMouseMove={(e) => handleMouseMove(e, 5)}
                onMouseLeave={() => handleMouseLeave(5)}
                onMouseEnter={() => handleMouseEnter(5)}
              >
                <div
                  className="tvc-parallax-element"
                  ref={(el) => (parallaxRefs.current[5] = el)}
                >
                  <img
                    src={bg6}
                    alt="Campaign Strategy"
                    className="tvc-main-img img-fluid rounded"
                  />
                  <div className="tvc-glass-stat tvc-stat-huge shadow-lg">
                    <div className="mt-2 text-white">
                      <h2>
                        <i className="fa-solid fa-arrow-trend-up text-warning"></i>{" "}
                        +250%
                      </h2>
                    </div>
                    <div className="text-secondary">
                      <small>Brand Engagement</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TvCommercialSections;
