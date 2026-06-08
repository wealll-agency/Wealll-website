import React from "react";
import "./commercial-ad.css";
import commercialStudio from "../../../../../assets/images/commercial_studio.jpg";
import commercialCinema from "../../../../../assets/images/commercial_cinema.jpg";
import commercialPoster from "../../../../../assets/images/commercial_poster2.jpeg";

const CommercialAd = () => {
  return (
    <section className="commercial-ad-container">
      <div className="commercial-ad-content">
        <div className="row g-4">
          {/* Left Column Container */}
          <div className="col-lg-6">
            <div className="d-flex flex-column h-100 gap-4">
              {/* Header Section (Moved to Left) */}
              <div className="commercial-header text-center">
                <div class="top-title">
                  <h2>
                    Commercial <b>AD</b>
                  </h2>
                </div>
                <p className="m-0" style={{ maxWidth: "100%" }}>
                  "We create ads that capture attention, <br /> inspire action,
                  and grow your brand."
                </p>
              </div>

              <div className="first_col_row row g-4 flex-grow-1">
                {/* Box 1: Text */}
                <div className="col-md-7 order-2 order-md-1">
                  <div className="why-advertise-box h-100 d-flex flex-column justify-content-center">
                    <div class="top-title">
                      <h2>
                        Why <b>Advertise With Us?</b>
                      </h2>
                    </div>
                    <ul className="features-list mt-3">
                      <li>Wider Reach</li>
                      <li>Targeted Audience</li>
                      <li>High Engagement</li>
                      <li>Affordable Packages</li>
                    </ul>
                  </div>
                </div>

                {/* Box 2: Green Screen / Studio Image */}
                <div className="col-md-5 order-1 order-md-2">
                  <div className="green-screen-box rounded-4 overflow-hidden">
                    <img
                      src={commercialStudio}
                      alt="Production Studio"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Box 3: Cinema / Audience Image */}
              <div
                className="cinema-box rounded-4 overflow-hidden"
                style={{ minHeight: "250px" }}
              >
                <img
                  src={commercialCinema}
                  alt="Cinema Audience"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Large Poster */}
          <div className="col-lg-6">
            <div className="commercial-right-col h-100 rounded-4 overflow-hidden">
              <img
                src={commercialPoster}
                alt="Commercial Poster Ad"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialAd;
