import React from "react";
const Icon1 = mediaUrl("assets/images/Envision.png");
const Icon2 = mediaUrl("assets/images/Establish.png");
const Icon3 = mediaUrl("assets/images/Execute.png");
const Icon4 = mediaUrl("assets/images/Echo.png");
import { mediaUrl } from "../../config/media";
const OurStrategy = () => {
  return (
    <>
      <div className="our_strategy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hoseco-desc top-title">
                <h2>
                  "If it is Content-Related, Branding-Related, or
                  Marketing-Related, it is <b>We Alll-Related!</b>"
                </h2>
              </div>
              <div className="row strategy_row">
                <div className="col-lg-3 col-md-6">
                  <div className="inner_box">
                    <div className="box_img">
                      <img src={Icon1} alt="" loading="lazy" />
                    </div>
                    <h3>Envision</h3>
                    <p>
                      Our out-of-the-box thinkers initiate the process by
                      gathering endless suggestions, ideas and concepts.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="inner_box">
                    <div className="box_img">
                      <img src={Icon2} alt="" loading="lazy" />
                    </div>
                    <h3>Establish</h3>
                    <p>
                      To conclude a plan, we understand the brand, the culture, the market, and beyond.
                      The best fit survives.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="inner_box">
                    <div className="box_img">
                      <img src={Icon3} alt="" loading="lazy" />
                    </div>
                    <h3>Execute</h3>
                    <p>
                      It’s the plan implementation stage where the best of the bests is carried out to drive
                      the desired results.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="inner_box">
                    <div className="box_img">
                      <img src={Icon4} alt="" loading="lazy" />
                    </div>
                    <h3>Echo</h3>
                    <p>
                      Repeat, from step 1. Why ? Regular monitoring is key to making changes and seeing continuous results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStrategy;
