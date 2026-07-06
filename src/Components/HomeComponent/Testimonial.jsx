import React, { useEffect } from 'react'
const testimonial1 = mediaUrl("assets/images/testimonal-image1.png");
const testimonial2 = mediaUrl("assets/images/testimonal-image2.png");
const testimonial3 = mediaUrl("assets/images/testimonal-image3.png");
import { mediaUrl } from "../../config/media";


const Testimonial = () => {

    useEffect(() => {
        var testi_swiper = new Swiper(".hm-testi-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: { el: ".swiper-pagination.testi-pagination", clickable: true },
            navigation: { nextEl: ".swiper-button-next.testi-next", prevEl: ".swiper-button-prev.testi-prev" },
            breakpoints: { 0: { autoHeight: true }, 1199: { autoHeight: false } },
        });
    }, [])

    return (
        <>
            <section className="gnt-hm-testimonal">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="title">
                                <h4>word’s on the street</h4>
                                <h2>
                                    Setting sail for  <b>making a difference .</b>
                                </h2>
                            </div>
                            <div className="service-silder-btn">
                                <div
                                    className="swiper-button-prev testi-prev swiper-button-disabled"
                                    tabIndex="-1"
                                    role="button"
                                ></div>
                                <div
                                    className="swiper-button-next testi-next"
                                    tabIndex="0"
                                    role="button"
                                    aria-label="Next slide"
                                    aria-controls="swiper-wrapper-be19a899db78ca9d"
                                    aria-disabled="false"
                                >
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className="hm-testi-swiper swiper position-relative">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    We partnered with We Alll for our digital marketing needs, and the results have been outstanding! Their team is highly skilled in SEO, social media marketing, and performance campaigns. They understood our brand, created a tailored strategy, and consistently delivered excellent ROI.
                                                </p>
                                                <p>Their creative content, timely communication, and transparent reporting made the entire process smooth and effective. We’re seeing real growth in traffic, engagement, and leads — all thanks to We Alll.
                                                    Highly recommended to anyone looking for a reliable and affordable digital marketing agency
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial1}
                                                        alt="Makeover By Soumi"
                                                    loading="lazy" />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Makeover By Soumi</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    We’ve had a great experience working with We Alll for our digital marketing. Their team is professional, responsive, and truly understands the Kolkata market. They took the time to understand our business and created a clear strategy instead of making unrealistic promises.
                                                </p>
                                                <p>Their Meta Ads and website improvements helped us see better engagement and more consistent inquiries. Communication is smooth, and they provide regular updates with clear reporting
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial2}
                                                        alt="Ron Ray "
                                                    loading="lazy" />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Ron Ray</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    I am the owner of Ambika Silvers in Kolkata, and I recently lost ownership access to my Google Business Profile (GBP), which affected my visibility on Google Search and Maps.
                                                    I contacted We Alll, and their team quickly helped me recover ownership of my business profile. They were professional, highly knowledgeable about Google Business Profile and local SEO.
                                                </p>
                                                <p>  Thanks to the support, my business is now working properly again on Google. I highly recommend We Alll to any business owner looking for help with GBP recovery, local SEO, or digital marketing services in Kolkata.
                                                </p>
                                                <p>Thank you, We Alll for the excellent support and quick resolution!</p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial3}
                                                        alt="Ambika Silvers"
                                                    loading="lazy" />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Ambika Silvers</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination testi-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial