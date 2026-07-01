import React from "react";
import portfolio_logo1 from "../../assets/images/portfolio_logo1.jpeg";
import portfolio_logo2 from "../../assets/images/portfolio_logo2.jpeg";
import portfolio_logo3 from "../../assets/images/portfolio_logo3.jpeg";
import portfolio_logo4 from "../../assets/images/portfolio_logo4.jpeg";
import portfolio_logo5 from "../../assets/images/portfolio_logo5.jpeg";
import portfolio_logo6 from "../../assets/images/portfolio_logo6.jpeg";
import portfolio_logo7 from "../../assets/images/portfolio_logo7.jpeg";
import portfolio_logo8 from "../../assets/images/portfolio_logo8.jpeg";
import portfolio_logo9 from "../../assets/images/portfolio_logo9.jpeg";
import portfolio_logo10 from "../../assets/images/portfolio_logo10.png";

import portfolio_branding1 from "../../assets/images/portfolio/logodesign/Bani.png";
import portfolio_branding2 from "../../assets/images/portfolio/logodesign/portfolio_branding2.png";
import portfolio_branding3 from "../../assets/images/portfolio/logodesign/jj.png";
import portfolio_branding4 from "../../assets/images/portfolio/logodesign/Hotel-icon.png";
import portfolio_branding5 from "../../assets/images/portfolio/logodesign/khukumoni.jpg";
import portfolio_branding6 from "../../assets/images/portfolio/logodesign/Karma.png";
import portfolio_branding7 from "../../assets/images/portfolio/logodesign/Jalan-Chandi-wala.png";
import portfolio_branding8 from "../../assets/images/portfolio/logodesign/Max glow.png";
import portfolio_branding9 from "../../assets/images/portfolio/logodesign/Pro.png";
import portfolio_branding10 from "../../assets/images/portfolio/logodesign/Rb-con.png";

import portfolio_brand1 from "../../assets/images/portfolio_brand1.jpeg";
import portfolio_brand2 from "../../assets/images/portfolio_brand2.jpeg";

import portfolio_app1 from "../../assets/images/portfolio_app1.jpeg";
import portfolio_app2 from "../../assets/images/portfolio_app2.jpeg";

import portfolio_software1 from "../../assets/images/portfolio_software1.jpeg";

import portfolio_website1 from "../../assets/images/portfolio_website1.jpeg";
import portfolio_website2 from "../../assets/images/portfolio_website2.jpeg";
import portfolio_website3 from "../../assets/images/portfolio_website3.jpeg";
import portfolio_website4 from "../../assets/images/portfolio_website4.jpeg";
import portfolio_website5 from "../../assets/images/portfolio_website5.jpeg";

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
                                                <img src={portfolio_logo1} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo2} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo3} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo4} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo5} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo6} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo7} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo8} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo9} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_logo10} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div id="portfoliomenu2" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding1} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding2} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding10} alt="" />

                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding4} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding5} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding6} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding7} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding8} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">

                                                <img src={portfolio_branding3} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_branding9} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div id="portfoliomenu3" className="tab-pane fade">
                                    <div className="row justify-content-center">
                                        <div className="col-md-3">
                                            <div className="inner_box">
                                                <img src={portfolio_brand1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="inner_box">
                                                <img src={portfolio_brand2} className="app_img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="portfoliomenu4" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="inner_box">
                                                <img src={portfolio_app1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inner_box">
                                                <img src={portfolio_app2} className="app_img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="portfoliomenu5" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="inner_box">
                                                <img src={portfolio_software1} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div id="portfoliomenu6" className="tab-pane fade">
                                    <div className="row desktop_website_row">
                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website1} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website2} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website3} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website4} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website5} alt="" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row mobile_website_row">

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website3} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-20">
                                            <div className="inner_box">
                                                <img src={portfolio_website4} alt="" />
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
