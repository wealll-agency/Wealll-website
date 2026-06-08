import React from "react";
import "./social-media-services.css";
import creativebgImage from "../../../../../assets/images/creativebg.png";
import icon_monitoring from "../../../../../assets/images/monitor.png";
import icon_ads from "../../../../../assets/images/ads.png";
import icon_reporting from "../../../../../assets/images/reporting.png";
import icon_strategies from "../../../../../assets/images/strategies.png";
import fb_icon from "../../../../../assets/images/fb_icon.png";
import insta_icon from "../../../../../assets/images/insta_icon.png";
import twitter_icon from "../../../../../assets/images/twitter_icon.png";
import youtube_icon from "../../../../../assets/images/youtube_icon.png";
import linkedin_icon from "../../../../../assets/images/linkedin_icon.png";
import pinterest_icon from "../../../../../assets/images/pinterest_icon.png";
import magic_reach from "../../../../../assets/images/magic_reach.png";
import magic_engage from "../../../../../assets/images/magic_engage.png";
import magic_grow from "../../../../../assets/images/magic_grow.png";

const SocialMediaServices = () => {
  const bgStyle = {
    backgroundImage: `url(${creativebgImage})`,
  };
  return (
    <section className="social-services-section">
      <div className="container">
        {/* Magic Section (New) */}
        <div className="text-center mb-5">
          <div className="top-title">
            <h2>
              Our <b>Social Media Marketing</b> Magic
            </h2>
          </div>
        </div>

        <div className="row justify-content-center mb-5 magic-row">
          <div className="col-md-4 mb-4">
            <div className="magic-card">
              <div className="magic-icon-wrapper">
                <img src={magic_reach} alt="Boost Your Reach" />
              </div>
              <h3>Boost Your Reach</h3>
              <p>
                Craft targeted content that grabs attention and grows your
                social following.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="magic-card">
              <div className="magic-icon-wrapper">
                <img src={magic_engage} alt="Engage Your Audience" />
              </div>
              <h3>Engage Your Audience</h3>
              <p>
                Foster meaningful interactions that turn followers into loyal
                customers.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="magic-card">
              <div className="magic-icon-wrapper">
                <img src={magic_grow} alt="Grow Your Business" />
              </div>
              <h3>Grow Your Business</h3>
              <p>
                Use analytics and insights to drive continual growth and
                tangible results.
              </p>
            </div>
          </div>
        </div>

        <div className="inner_row">
          <div className="text-center mb-5">
            <div className="top-title">
              <h2>
                Multiple <b>Social Media Ad Campaigns </b> <br /> And Services
                Will Offer
              </h2>
            </div>
          </div>

          {/* Top Section: Service Strategies */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="smm-card">
                <div className="smm-icon-wrapper">
                  {/* Placeholder for generated icon */}
                  <img
                    src={icon_monitoring}
                    alt="Monitoring"
                    className="smm-main-icon"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <h3>Social Media Monitoring</h3>
                <p>
                  Always tuned in - tracking conversations, trends, and
                  sentiment to measure your brand ahead.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="smm-card">
                <div className="smm-icon-wrapper">
                  <img
                    src={icon_ads}
                    alt="Paid Advertising"
                    className="smm-main-icon"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <h3>Social Media Paid Advertising</h3>
                <p>
                  Placing strategic ads across social media channels for
                  maximized reach and return on investment.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="smm-card">
                <div className="smm-icon-wrapper">
                  <img
                    src={icon_reporting}
                    alt="Analytics"
                    className="smm-main-icon"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <h3>Social Media Reporting & Analytics</h3>
                <p>
                  Clear, actionable insights to continuously refine your
                  strategy and improve results.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="smm-card">
                <div className="smm-icon-wrapper">
                  <img
                    src={icon_strategies}
                    alt="Strategies"
                    className="smm-main-icon"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <h3>Social Media Marketing Strategies</h3>
                <p>
                  Tailored social strategies designed to amplify your message,
                  attract your ideal audience, and fuel growth.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Platforms */}
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="platform-card">
                <div className="p-icon">
                  <img src={fb_icon} alt="" />
                </div>
                <div className="p-content">
                  <h4>
                    Facebook <span>Advertising</span>
                  </h4>
                  <p>
                    Dynamic and targeted campaigns especially designed to boost
                    your brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="platform-card">
                <div className="p-icon">
                  <img src={insta_icon} alt="" />
                </div>
                <div className="p-content">
                  <h4>
                    Instagram <span>Advertisements</span>
                  </h4>
                  <p>
                    Marvellous visuals and engaging stories that can captivate
                    your audience and boost your brand appeal through instagram.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="platform-card">
                <div className="p-icon">
                  <img src={twitter_icon} alt="" />
                </div>
                <div className="p-content">
                  <h4>
                    Twitter <span>Advertising</span>
                  </h4>
                  <p>
                    Creating smart, intriguing content that starts
                    conversations, and enhance your brand influence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="platform-card">
                <div className="p-icon">
                  <img src={youtube_icon} alt="" />
                </div>
                <div className="p-content">
                  <h4>
                    YouTube <span>Marketing</span>
                  </h4>
                  <p>
                    Creating creative videos and strategically placing them to
                    boost views, engagement, and brand loyalty.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="platform-card">
                <div className="p-icon">
                  <img src={linkedin_icon} alt="" />
                </div>
                <div className="p-content">
                  <h4>
                    LinkedIn <span>Advertising</span>
                  </h4>
                  <p>
                    Professional and influential campaigns designed to help you
                    build strong B2B connections.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="platform-card">
                <div className="p-icon">
                  <img src={pinterest_icon} alt="" />
                </div>
                <div className="p-content">
                  <h4>
                    Pinterest <span>Advertising</span>
                  </h4>
                  <p>
                    Visually appealing pins that inspire action, driving traffic
                    and sales effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaServices;
