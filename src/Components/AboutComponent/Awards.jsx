import React from "react";
// import Press1 from "../../assets/images/press1.png";
// import Press2 from "../../assets/images/press2.png";
// import Press3 from "../../assets/images/press3.png";
// import Press4 from "../../assets/images/press4.png";
// import Press5 from "../../assets/images/press5.png";
// import Press6 from "../../assets/images/press6.png";
// import Press7 from "../../assets/images/press7.png";
// import Press8 from "../../assets/images/press8.png";
import award from "../../assets/images/awards.png"
import awardImages from "../../assets/images/awardimages.jpeg"

const Awards = () => {
  return (
    <>
      {/* <section className="newpress">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="top-title">
                <h2>
                  Accolades &amp; <b>Press</b>
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="top-title">
                <p>
                  At times, we are the talk of the town too! Explore what caused
                  those wildfires.
                </p>
              </div>
            </div>
          </div>
          <div className="press_main">
            <div className="row">
              <div className="col-md-6">
                <div className="press_main_inner">
                  <h3>Press Mentions</h3>
                  <div class="presslogo_main">
                    <div class="client-box">
                      <img src={Press1} alt="Press Mentions"/>
                    </div>
                    <div class="client-box">
                      <img src={Press2} alt="2 5"/>
                    </div>
                    <div class="client-box">
                      <img src={Press3} alt="3 5"/>
                    </div>
                    <div class="client-box">
                      <img src={Press4} alt="4 5"
                      />
                    </div>
                    <div class="client-box">
                      <img src={Press5} alt="5 5"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="press_main_inner">
                  <h3>Featured In</h3>
                  <div class="presslogo_main">
                    <div class="client-box">
                      <img src={Press6} alt="6"/>
                    </div>
                    <div class="client-box">
                      <img src={Press7} alt="7"/>
                    </div>
                    <div class="client-box">
                      <img src={Press8} alt="8"/>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="awards">
        <div className="container">
            <h3>Awards</h3>
            <div className="row award_row">
                <div className="col-lg-3 col-md-6">
                    <div class="client-box">
                      <img src={Press1} alt="Press Mentions"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div class="client-box">
                      <img src={Press1} alt="Press Mentions"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div class="client-box">
                      <img src={Press1} alt="Press Mentions"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div class="client-box">
                      <img src={Press1} alt="Press Mentions"/>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

      <section className="award_winning">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="top_title">
                <img src={award} alt="" />
                <div className="award_details">
                  <p>For more than 3 years, We Alll has been <a href="#">recognized</a> as a top-rated digital marketing company by some of the industry’s leading review sites, including SEOblog, Clutch, UpCity and InfluencerMarketingHub.</p>
                  <p>In 2025, We Alll conquered another milestone, having been named to the <a href="#">Inc. 300 list of fastest-growing companies</a> in America for the third consecutive year. According to Inc., only a small percentage of the companies featured in the annual Inc. 300 since 2023 have made the list for 3 consecutive years. We continuously optimize our processes to ensure the company remains our clients’ go-to digital marketing service provider.</p>
                </div>
                <div className="award_images">
                  <img src={awardImages} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
};

export default Awards;
