import React from 'react'
import { Link } from "react-router-dom";
import shape2 from "../../assets/images/shape2.png";
import shape3 from "../../assets/images/shape3.png";
import shape5 from "../../assets/images/shape5.png";
import shape6 from "../../assets/images/shape6.png";
import shape7 from "../../assets/images/shape7.png";
import shape8 from "../../assets/images/shape8.png";
const ContactBanner = () => {
    return (
        <>
            <section className="page-title-area contact_page_title">
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