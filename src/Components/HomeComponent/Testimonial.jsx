import React, { useEffect } from 'react'
import testimonial1 from "../../assets/images/testimonal-image1.webp";
import testimonial2 from "../../assets/images/testimonal-image2.webp";
import testimonial3 from "../../assets/images/testimonal-image3.webp";
import testimonial4 from "../../assets/images/testimonal-image4.webp";
import testimonial5 from "../../assets/images/testimonal-image5.webp";
import testimonial6 from "../../assets/images/testimonal-image6.webp";
import testimonial7 from "../../assets/images/testimonal-image7.webp";
import testimonial8 from "../../assets/images/testimonal-image8.webp";

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
                                                    We Alll Creations was truly helpful with Website
                                                    UI, Logo, and Infographic creation. Not only
                                                    this, time and again they shared ideas and
                                                    suggestions proactively which I liked and
                                                    implemented. Amazing experience working with
                                                    We Alll Creations!
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial1}
                                                        alt="Didier Bonny "
                                                    />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Didier Bonny</h5>
                                                    <p>CEO - Innoptim Group | Switzerland</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    Having worked with many creative agencies - big
                                                    & small - we found We Alll refreshingly
                                                    different. The We Alll team is always bubbling
                                                    with new ideas, they have inexhaustible patience
                                                    and they deliver on time. It's truly a pleasure
                                                    to work with this young agency.
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial2}
                                                        alt="Raj Pinjani "
                                                    />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Raj Pinjani</h5>
                                                    <p>Director - Rasna International | India</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    We Alll has been great Partners to work with,
                                                    their quality along with their commitment to
                                                    deliverables it's top-notch Graphic India is
                                                    happy to collaborate and continue to partner
                                                    with We Alll with respect to productions
                                                    services.
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial3}
                                                        alt="Navin Miranda"
                                                    />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Navin Miranda</h5>
                                                    <p>
                                                        Head of Business Development - Graphic India |
                                                        Singapore
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    We Alll team has done a wonderful job redesigning
                                                    our website to take it from a plain and
                                                    functional website to an amazingly professional
                                                    and lively one. We recommend We Alll Creations to
                                                    any business that need a hand improving their
                                                    internet traffic and their business!
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial4}
                                                        alt="Gaurav Parvadia "
                                                    />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Gaurav Parvadia</h5>
                                                    <p>CEO - Twinr | Canada</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    Kandarp & Team We Alll, I extremely delighted to
                                                    see the range. I am sure your merits will win
                                                    some useful business from Africa.
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial5}
                                                        alt="Dhiren Rana"
                                                    />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Dhiren Rana</h5>
                                                    <p>Director - Romaunt Roses | Kenya</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    I have been knowing Kandarp the main visionary
                                                    of We Alll for 3 years. What a beautiful human
                                                    being. His persona radiates in his organization
                                                    as well. Great design works. top-notch work.
                                                    Quality of designs and any other works done by
                                                    We Alll are absolutely beyond any other company's
                                                    standard. Try to meet the fellow once. such a
                                                    good service is rare these days. Thanks for all
                                                    the help done by We Alll for my design works and
                                                    publishing work
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial6}
                                                        alt="Jitesh Donga"
                                                    />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Jitesh Donga</h5>
                                                    <p>Community Manager - Pratilipi | India</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    We were looking to redesign, fresh content &
                                                    development for Onlinetoken website and it was
                                                    our 3rd attempt but landed in good hand of
                                                    We Alll team. They are very creative,
                                                    resourceful, punctual and exceeded our
                                                    expectations.
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial7}
                                                        alt="Haresh Ghoghari "
                                                    />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Haresh Ghoghari</h5>
                                                    <p>Co-founder - Onlinetoken | USA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-desc">
                                                <p>
                                                    We were looking for partners in Brand
                                                    Communication, who can understand technology,
                                                    content & customers. They offer a unique blend
                                                    which we were looking for.
                                                </p>
                                            </div>
                                            <div className="testi-avatar">
                                                <div className="avatar-img">
                                                    <img
                                                        src={testimonial8}
                                                        alt="Keyur Bhalavat"
                                                    />
                                                </div>
                                                <div className="avatar-desc">
                                                    <h5>Keyur Bhalavat</h5>
                                                    <p>CEO - Plutomen | India</p>
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