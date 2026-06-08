// import about_video from "../../../../../assets/Video/about_video.mp4";
import about_video from "../../../../../assets/Video/Wealll_MAR_Slot_05.mp4";
import about_video2 from "../../../../../assets/Video/Wealll_MAR_Slot_06.mp4";
import wealll_logo from "../../../../../assets/images/wealll_logo_overlay.png";
import "./About.css";

const About = () => {
  return (
    <section className="favfly-section">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="favfly-header">
              <span className="subtitle">WELCOME TO THE WE ALLL UNIVERSE</span>
              <h2>
                We have Solutions for every <br /> Digital Challenge
              </h2>
            </div>
          </div>
        </div>

        {/* Hand-Crafted Websites Card */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="ff-card card-handcrafted">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="content pe-lg-5">
                    <h3>Hand-Crafted Websites</h3>
                    <p>
                      Grow your business with our tailor-made websites. Digital
                      masterpieces where every pixel is placed with care, and
                      every feature is thoughtfully designed. A marvel that
                      ensures that the magic of your work reaches your audience.
                    </p>
                    <a href="#" className="ff-link">
                      View services <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 mt-4 mt-lg-0">
                  <div
                    className="video-container"
                    style={{ overflow: "hidden" }}
                  >
                    {/* Preserving the existing video as the visual element */}
                    <video
                      src={about_video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section Grid */}
        <div className="row g-4 mb-4">
          {/* Digital Marketing - Left Col */}
          <div className="col-lg-4">
            <div className="ff-card card-marketing h-100 position-relative overflow-hidden">
              <div className="position-relative z-index-2">
                <h3>Digital Marketing</h3>
                <p className="mb-4">
                  Elevate your online presence with our expert digital marketing
                  solutions. From SEO precision to lucrative social media
                  strategy, we amplify your online presence.
                </p>

                <div className="video-wrapper mb-4 rounded-4 overflow-hidden shadow-sm position-relative">
                  <video
                    src={about_video2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />

                </div>
              </div>

              <a href="#" className="ff-link position-relative z-index-2">
                View services <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Small Cards Grid - Right Col */}
          <div className="col-lg-8">
            <div className="row g-4">
              {/* SEO */}
              <div className="col-md-6">
                <div className="ff-card card-seo">
                  <h3>SEO</h3>
                  <p>
                    Boost your website's visibility, drive organic traffic, and
                    dominate google rankings.
                  </p>
                  <a href="#" className="ff-link">
                    View service <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* SMM */}
              <div className="col-md-6">
                <div className="ff-card card-smm">
                  <h3>SMM</h3>
                  <p>
                    From compelling ads to growing your followers organically –
                    we've got it all.
                  </p>
                  <a href="#" className="ff-link">
                    View service <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* PPC */}
              <div className="col-md-6">
                <div className="ff-card card-ppc">
                  <h3>PPC</h3>
                  <p>
                    Drive growth with Google Ads – precise advertising, maximum
                    results, and unmatched expertise.
                  </p>
                  <a href="#" className="ff-link">
                    Get a quote <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Multimedia */}
              <div className="col-md-6">
                <div className="ff-card card-multimedia">
                  <h3>Multimedia</h3>
                  <p>
                    Create a wow moment with our impactful graphics & compelling
                    videos.
                  </p>
                  <a href="#" className="ff-link">
                    View services <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Card */}
        <div className="row">
          <div className="col-12">
            <div className="ff-card card-automation">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="content pe-lg-5">
                    <h3>Automation</h3>
                    <p>
                      Explore our Automation Services – Save time and boost
                      accuracy up to 99.99%. Amp up your productivity and unlock
                      maximum potential effortlessly with the help of AI
                      Automation.
                    </p>
                    <a href="#" className="ff-link text-white">
                      View services <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
