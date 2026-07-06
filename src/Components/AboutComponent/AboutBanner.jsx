import React from 'react';
import { Link } from "react-router-dom";
const AboutBannerImage = mediaUrl("assets/images/About-us-2.jpeg");
import { mediaUrl } from "../../config/media";

const AboutBanner = () => {

    const bgStyle = {
        backgroundImage: `url(${AboutBannerImage})`,
    };

    return (
        <>
            <section className="inner-banner" style={bgStyle}>
                <div className="inba-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inba-desc"><h1>Who we are</h1></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inba-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="breadcrumb-main" aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <i className="fa-solid fa-house"></i>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutBanner