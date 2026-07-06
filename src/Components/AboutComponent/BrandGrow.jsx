import React from 'react'
const BrandImage = mediaUrl("assets/images/services-image-01.jpeg");
import { mediaUrl } from "../../config/media";
const BrandGrow = () => {
    return (
        <>
            <section className="sde-conect nabout-conect">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="sdeconect-desc top-title">
                                <span>Let’s help your </span>
                                <h2>Brand <b>Grow</b></h2>
                                <p>
                                    Whether you’re a start-up seeking brand recognition or an established business aiming to expand your digital presence, WE ALLL is here to help. As one of Kolkata’s emerging AI driven creative marketing agencies, we blend branding, content, design, and digital marketing to turn ideas into powerful brand growth.

                                </p>
                                <a href="#" className="btn btn-primary btn_cust">Start Your Brand Journey <span className='arrow_circle'><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="sdeconect-img">
                                <img src={BrandImage} alt="CTA" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BrandGrow