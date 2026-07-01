import React from 'react'
import aboutImage from "../../assets/images/office_rellocation1.jpeg";
import creativebgImage from "../../assets/images/creativebg.png";
import agencypattern from "../../assets/images/agency-pattern.png";

import ca1 from "../../assets/images/ca-1.png";
import ca2 from "../../assets/images/ca-2.png";
import ca3 from "../../assets/images/ca-3.png";
import ca4 from "../../assets/images/ca-4.png";

const Aboutus = () => {

    const bgStyle = {
        backgroundImage: `url(${creativebgImage})`,
    };


    return (
        <>
            <section className="section connecting-section position-relative">
                <div className="container">
                    <div className="row align-items-center justify-content-center">

                        <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-xl-start text-lg-start text-md-start text-start order-xl-1 order-lg-2 order-md-2 order-2">
                            <div className="connecting-content">
                                <h2 className="section-title">
                                    <span className="creative-bg" style={bgStyle}>AI-driven</span> marketing Agency
                                </h2>

                                <p>
                                    We operate as an AI driven marketing agency, combining AI automation with human creativity to eliminate bottlenecks and accelerate brand growth. As Kolkata’s best marketing agency, we blend strategy, storytelling, and data to deliver smarter, faster, and more impactful communication.
                                </p>

                                <p>
                                    Every campaign we build is engineered for attention, engagement, conversions, and scalable growth. Recognized among the best creative marketing agencies in India, we focus on ideas that cut through noise and drive measurable business results, no fluff metrics, no wasted spend.

                                </p>

                                <p>
                                    In a rapidly evolving digital ecosystem, relevance is earned through precision and innovation. We transform insights into brand narratives that inspire action, ensuring every platform, every campaign, and every second works toward sustainable growth.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 col-md-12 order-xl-2 order-lg-1 order-md-1 order-1">
                            <div className='about_img'>
                                <div className="team-img-full">
                                    <img src={aboutImage} alt="" />
                                </div>
                                <div className="creative-icon">
                                    <img src={ca1} alt="" />
                                    <img src={ca2} alt="" />
                                    <img src={ca3} alt="" />
                                    <img src={ca4} alt="" />
                                </div>
                            </div>


                        </div>

                        <div className="bg-patter-crea">
                            <img src={agencypattern} alt="Creative Agency pattern" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Aboutus