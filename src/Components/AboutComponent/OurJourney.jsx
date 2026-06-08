import React from 'react'
import Numbers from "../../assets/images/Numbers.jpeg";
import njb from "../../assets/images/njb.png"
import jline from "../../assets/images/jline.svg";

const OurJourney = () => {

    const bgStyle = {
        backgroundImage: `url(${njb})`,
    };

    return (
        <>
            <section className="home-year ptb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="hyear-desc top-title">
                                {/* <h2>
                                    Setting sail to <span><b>Keep moving ahead</b></span>
                                </h2> */}
                                  <h2>
                                    Built to <span><b>Move Brands Forward</b></span>
                                </h2>
                                {/* <p>
                                    Granth has been in action unswervingly for over four years to become the best branding
                                    and advertising agency in Ahmedabad. In our journey, we have gathered phenomenal
                                    experiences and created absorbing memories over time.
                                </p> */}
                                <p>At WEALLL, we are constantly evolving to build stronger brands and smarter marketing strategies. Along the way, we’ve gathered valuable experiences, created meaningful partnerships, and helped businesses grow with creativity, strategy, and innovation.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hyear-img">
                                <img src={Numbers} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="year-journey">
                    <div className="container journey_bg" style={bgStyle}>
                        <div className="row justify-content-center">
                            <div className="col-lg-2 text-center">
                                <h3>6</h3>
                                <p>Years of content, context and connect</p>
                                <img src={jline} alt="" />
                            </div>
                            <div className="col-lg-2 text-center">
                                <h3>550+</h3>
                                <p>Clients served from 25+ countries</p>
                                <img src={jline} alt="" />
                            </div>
                            <div className="col-lg-2 text-center">
                                <h3>35+</h3>
                                <p>Industries</p>
                                <img src={jline} alt="" />
                            </div>
                            <div className="col-lg-2 text-center">
                                <h3>450+</h3>
                                <p>We Alll Community</p>
                                <img src={jline} alt="" />
                            </div>
                            <div className="col-lg-2 text-center">
                                <h3>80+</h3>
                                <p>Creative minds</p>
                                <img src={jline} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurJourney