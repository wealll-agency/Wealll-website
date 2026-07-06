import React from 'react'
const ValueIcon1 = mediaUrl("assets/images/Creativity.svg");
const ValueIcon2 = mediaUrl("assets/images/Abundance.svg");
const ValueIcon3 = mediaUrl("assets/images/Equality.svg");
const ValueIcon4 = mediaUrl("assets/images/Loyalty.svg");
const ValueIcon5 = mediaUrl("assets/images/Responsibility.svg");
import { mediaUrl } from "../../config/media";
const OurValues = () => {
    return (
        <>
            <section className="nabout-value">
                <div className="container">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-lg-12">
                            <div className="top-title">
                                <h2>Values that make us <b>Who we are</b></h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="top-title">
                                <p>
                                    We are driven by passion on our path of creativity, and that differentiates us from the other digital marketing companies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="nabvalm-box">
                                <div className="nabvalb-img">
                                    <img src={ValueIcon1} alt="Creativity " loading="lazy" />
                                </div>
                                <h3>Creativity</h3>
                                <p>
                                    It is our propellant for growth. Through our creative endeavors, we seek to establish a
                                    place that caters to all your creative needs around branding & marketing.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="nabvalm-box">
                                <div className="nabvalb-img">
                                    <img src={ValueIcon2} alt="Abundance" loading="lazy" />
                                </div>
                                <h3>Abundance</h3>
                                <p>
                                    We are driven by the need to create more and expand. We believe in converting the
                                    challenges presented to us by our clients into opportunities for growth.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="nabvalm-box">
                                <div className="nabvalb-img">
                                    <img src={ValueIcon3} alt="Equality" loading="lazy" />
                                </div>
                                <h3>Equality</h3>
                                <p>
                                    The culture of any organization is defined by how its employees are treated, and we
                                    believe that employee empowerment is organization empowerment.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="nabvalm-box">
                                <div className="nabvalb-img">
                                    <img src={ValueIcon4} alt="Loyalty" loading="lazy" />
                                </div>
                                <h3>Loyalty</h3>
                                <p>
                                    Being fiercely loyal to our clients and commitments helps us make well-informed
                                    decisions and take actions which are always aligned with their best interests.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="nabvalm-box">
                                <div className="nabvalb-img">
                                    <img src={ValueIcon5} alt="Responsibility" loading="lazy" />
                                </div>
                                <h3>Responsibility</h3>
                                <p>
                                    A commitment to fulfilling responsibilities takes us a step closer to excellence. We
                                    embrace the responsibilities given to us and take accountability for our actions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurValues