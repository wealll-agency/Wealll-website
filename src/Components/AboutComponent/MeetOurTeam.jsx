import React, { useEffect } from 'react'
import Team1 from "../../assets/images/team_img1.jpg";
import Team2 from "../../assets/images/team_img2.jpeg";
// import Team3 from "../../assets/images/Team-3.jpg";
import Wealll_mini from "../../assets/images/Wealll_mini.png";

const MeetOurTeam = () => {

    useEffect(() => {

        var nmeetrt = new Swiper(".nmeetrt-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: { nextEl: ".nmeetrt-button-next", prevEl: ".nmeetrt-button-prev" },
            loop: true,
            autoplay: true,
        });

    }, [])

    return (
        <>
            <section className="nmeet-team mtb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="top-title">
                                {/* <h2>Meet our <b>Team</b></h2> */}
                                <h2>The Minds Behind <b>WEALLL</b></h2>
                                {/* <p>
                                It’s about time we introduce you to the masterminds behind making Granth what it is.
                                These creatures most likely have split personalities – geeky in front of the
                                workstation, party animal otherwise. In the end, it all comes down to living life
                                passionately, isn’t it?
                            </p> */}
                                <p>It’s time to meet the minds behind WEALLL — the thinkers, creators, and strategists shaping brands every day. Focused at the workstation and endlessly creative beyond it, this team lives and breathes ideas. Because in the end, building remarkable brands comes from people who are passionate about what they do.</p>
                                <a href="#" className="btn btn-primary btn_cust">Meet the Full Team
                                    <span className='arrow_circle'><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="nmeet-right">
                                <div className="nmeetri-top">
                                    <div className="nmeetrt-slider swiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="nmeetrisl-img">
                                                    <img src={Team1} alt="Team" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="nmeetrisl-img">
                                                    <img src={Team2} alt="Team-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nmeetri-bottom">
                                    <div className="nmeetrbo-logo">
                                        <img src={Wealll_mini} alt="" />
                                    </div>
                                    <div className="nmeetrbo-desc">
                                        <h3>Best digital marketing Agency in Kolkata</h3>
                                        <h4>Since 2023</h4>
                                    </div>

                                    <div className="d-flex justify-content-center meet-nav">
                                        <div className="swiper-button-prev nmeetrt-button-prev">
                                        </div>
                                        <div className="swiper-button-next nmeetrt-button-next">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MeetOurTeam