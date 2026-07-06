import React from 'react'
import { Link } from "react-router-dom";
import { mediaUrl } from "../../config/media";
const shape2 = mediaUrl("assets/images/shape2.png");
const shape3 = mediaUrl("assets/images/shape3.png");
const shape5 = mediaUrl("assets/images/shape5.png");
const shape6 = mediaUrl("assets/images/shape6.png");
const shape7 = mediaUrl("assets/images/shape7.png");
const shape8 = mediaUrl("assets/images/shape8.png");

const ContactBanner = () => {
    return (
        <>
            <section className="page-title-area contact_page_title" style={{ backgroundImage: `url(${mediaUrl("assets/images/contact_banner.jpeg")})` }}>
                <div className="container">
                    <div className="page-title-content">
                        {/* <h1>Contact Us</h1> */}
                    </div>
                </div>

                {/* <div className="shape2"><img src={shape2} alt="image" /></div>
                <div className="shape3"><img src={shape3} alt="image" /></div>
                <div className="shape5"><img src={shape5} alt="image" /></div>
                <div className="shape6"><img src={shape6} alt="image" /></div>
                <div className="shape7"><img src={shape7} alt="image" /></div>
                <div className="shape8"><img src={shape8} alt="image" /></div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div> */}
            </section>

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
                                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactBanner