import React from "react";
import Icon1 from "../../assets/images/Envision.png";
import Icon2 from "../../assets/images/Establish.png";
import Icon3 from "../../assets/images/Execute.png";
import Icon4 from "../../assets/images/Echo.png";
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
                      <img src={Icon1} alt="" />
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
                      <img src={Icon2} alt="" />
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
                      <img src={Icon3} alt="" />
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
                      <img src={Icon4} alt="" />
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
