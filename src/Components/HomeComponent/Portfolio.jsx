import React from "react";
const portfolio_logo1 = mediaUrl("assets/images/portfolio_logo1.jpeg");
const portfolio_logo2 = mediaUrl("assets/images/portfolio_logo2.jpeg");
const portfolio_logo3 = mediaUrl("assets/images/portfolio_logo3.jpeg");
const portfolio_logo4 = mediaUrl("assets/images/portfolio_logo4.jpeg");
const portfolio_logo5 = mediaUrl("assets/images/portfolio_logo5.jpeg");
const portfolio_logo6 = mediaUrl("assets/images/portfolio_logo6.jpeg");
const portfolio_logo7 = mediaUrl("assets/images/portfolio_logo7.jpeg");
const portfolio_logo8 = mediaUrl("assets/images/portfolio_logo8.jpeg");
const portfolio_logo9 = mediaUrl("assets/images/portfolio_logo9.jpeg");
const portfolio_logo10 = mediaUrl("assets/images/portfolio_logo10.png");

const portfolio_branding1 = mediaUrl("assets/images/portfolio/logodesign/Bani.png");
const portfolio_branding2 = mediaUrl("assets/images/portfolio/logodesign/portfolio_branding2.png");
const portfolio_branding3 = mediaUrl("assets/images/portfolio/logodesign/jj.png");
const portfolio_branding4 = mediaUrl("assets/images/portfolio/logodesign/Hotel-icon.png");
const portfolio_branding5 = mediaUrl("assets/images/portfolio/logodesign/khukumoni.jpg");
const portfolio_branding6 = mediaUrl("assets/images/portfolio/logodesign/Karma.png");
const portfolio_branding7 = mediaUrl("assets/images/portfolio/logodesign/Jalan-Chandi-wala.png");
const portfolio_branding8 = mediaUrl("assets/images/portfolio/logodesign/Max glow.png");
const portfolio_branding9 = mediaUrl("assets/images/portfolio/logodesign/Pro.png");
const portfolio_branding10 = mediaUrl("assets/images/portfolio/logodesign/Rb-con.png");

const portfolio_brand1 = mediaUrl("assets/images/portfolio_brand1.jpeg");
const portfolio_brand2 = mediaUrl("assets/images/portfolio_brand2.jpeg");

const portfolio_app1 = mediaUrl("assets/images/portfolio_app1.jpeg");
const portfolio_app2 = mediaUrl("assets/images/portfolio_app2.jpeg");

const portfolio_software1 = mediaUrl("assets/images/portfolio_software1.jpeg");

const portfolio_website1 = mediaUrl("assets/images/portfolio_website1.jpeg");
const portfolio_website2 = mediaUrl("assets/images/portfolio_website2.jpeg");
const portfolio_website3 = mediaUrl("assets/images/portfolio_website3.jpeg");
const portfolio_website4 = mediaUrl("assets/images/portfolio_website4.jpeg");
const portfolio_website5 = mediaUrl("assets/images/portfolio_website5.jpeg");
import { mediaUrl } from "../../config/media";

const
    Portfolio = () => {
        return (
            <>
                <section className="our_portfolio">
                    <div className="container">
                        <h2 className="text-center large_font">Portfolio</h2>
                        <h2 className="text-center default_font">Our Portfolio</h2>
                        <p className="text-center">
                            Take a look at our client engagements in the portfolio window. This
                            is how we serve our clients to bring about an end-to-end
                            transformation in their businesses to make them realize the optimum
                            potential.
                        </p>
                        <div className="portfolio_tabs">
                            <ul className="nav nav-pills" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="pill" href="#portfoliomenu1"><i className="fa-solid fa-house"></i> Logo Design</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="pill" href="#portfoliomenu2"><i className="fa-solid fa-house"></i> SMP</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="pill" href="#portfoliomenu3"><i className="fa-solid fa-house"></i> Brand</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="pill" href="#portfoliomenu4"><i className="fa-solid fa-house"></i> Mobile Apps</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="pill" href="#portfoliomenu5"><i className="fa-solid fa-house"></i> Softwares</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="pill" href="#portfoliomenu6"><i className="fa-solid fa-house"></i> Websites</a>
                                </li>
                            </ul>

                            <div className="tab-content portfolio_tab_content">
                                <div id="portfoliomenu1" className="tab-pane active">
                                    <div className="row">
                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo1} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo2} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo3} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo4} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo5} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo6} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo7} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo8} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo9} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo10} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div id="portfoliomenu2" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding1} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding2} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding10} alt="" loading="lazy" />

                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding4} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding5} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding6} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding7} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding8} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">

                                                <img src={portfolio_branding3} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding9} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div id="portfoliomenu3" className="tab-pane fade">
                                    <div className="row justify-content-center">
                                        <div className="col-md-3">
                                            <div className="inner_box">
                                                <img src={portfolio_brand1} alt="" loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="inner_box">
                                                <img src={portfolio_brand2} className="app_img" alt="" loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="portfoliomenu4" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="inner_box">
                                                <img src={portfolio_app1} alt="" loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inner_box">
                                                <img src={portfolio_app2} className="app_img" alt="" loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="portfoliomenu5" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="inner_box">
                                                <img src={portfolio_software1} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div id="portfoliomenu6" className="tab-pane fade">
                                    <div className="row desktop_website_row">
                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website1} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website2} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website3} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website4} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website5} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row mobile_website_row">

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website3} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website4} alt="" loading="lazy" />
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };

export default Portfolio;
