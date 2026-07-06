import React, { useEffect } from 'react'

const sundarbantrip1 = mediaUrl("assets/images/sundarban_trip1.jpeg");
const sundarbantrip2 = mediaUrl("assets/images/sundarban_trip2.jpeg");
const sundarbantrip3 = mediaUrl("assets/images/sundarban_trip3.jpeg");
const sundarbantrip6 = mediaUrl("assets/images/sundarban_trip6_2.jpeg");
const sundarbantrip7 = mediaUrl("assets/images/sundarban_trip7.jpeg");

const mouparnas_meeting1 = mediaUrl("assets/images/mouparnas-meeting1.jpeg");
const mouparnas_meeting2 = mediaUrl("assets/images/mouparnas-meeting2.jpeg");
const mouparnas_meeting3 = mediaUrl("assets/images/mouparnas-meeting3.jpeg");
const mouparnas_meeting4 = mediaUrl("assets/images/mouparnas-meeting4.jpeg");

const bwa2025_1 = mediaUrl("assets/images/BWA-trip1.jpeg");
const bwa2025_2 = mediaUrl("assets/images/BWA-trip2.jpeg");
const bwa2025_3 = mediaUrl("assets/images/BWA-trip3.jpeg");
const bwa2025_4 = mediaUrl("assets/images/BWA-trip4.jpeg");
const bwa2025_5 = mediaUrl("assets/images/BWA-trip5.jpeg");
const bwa2025_6 = mediaUrl("assets/images/BWA-trip6.jpeg");

const vyapaar_expo_trip2 = mediaUrl("assets/images/vyapaar-expo-trip2.jpeg");
const vyapaar_expo_trip3 = mediaUrl("assets/images/vyapaar-expo-trip3.jpeg");
const vyapaar_expo_trip4 = mediaUrl("assets/images/vyapaar-expo-trip4.jpeg");
const vyapaar_expo_trip5 = mediaUrl("assets/images/vyapaar-expo-trip5.jpeg");
const vyapaar_expo_trip7 = mediaUrl("assets/images/vyapaar-expo-trip7.jpeg");
const vyapaar_expo_trip8 = mediaUrl("assets/images/vyapaar-expo-trip8.jpeg");

const karma_event3 = mediaUrl("assets/images/karma-international-seminar3.jpeg");
const karma_event4 = mediaUrl("assets/images/karma-international-seminar4.jpeg");
const karma_event5 = mediaUrl("assets/images/karma-international-seminar5.jpeg");
const karma_event6 = mediaUrl("assets/images/karma-international-seminar6.jpeg");
const karma_event7 = mediaUrl("assets/images/karma-international-seminar7.jpeg");
const karma_event8 = mediaUrl("assets/images/karma-international-seminar8.jpeg");

const growth_summit1 = mediaUrl("assets/images/growth_summit1.jpeg");
const growth_summit2 = mediaUrl("assets/images/growth_summit2.jpeg");
const growth_summit3 = mediaUrl("assets/images/growth_summit3.jpeg");
const growth_summit4 = mediaUrl("assets/images/growth_summit4.jpeg");


const office_rellocation1 = mediaUrl("assets/images/office_rellocation1.jpeg");
const office_rellocation2 = mediaUrl("assets/images/office_rellocation2.jpeg");
const office_rellocation3 = mediaUrl("assets/images/office_rellocation3.jpeg");
import { mediaUrl } from "../../config/media";


const OurTrips = () => {

    useEffect(() => {
        const swipers = document.querySelectorAll(".abotrip-box");
        swipers.forEach((swiperEl) => {
            new Swiper(swiperEl, {
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: {
                    nextEl: swiperEl.querySelector(".abotrip-button-next"),
                    prevEl: swiperEl.querySelector(".abotrip-button-prev")
                },
                loop: true,
                autoplay: true,
                observer: true,
                observeParents: true,
            });
        });
    }, [])

    return (
        <>
            <section className='about-trip'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-12">
                            <div class="top-title text-center">
                                <h2>Exploring life <b>Through Lens</b></h2>
                            </div>
                            <div className='our_trip_tab'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='tab_btn'>
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#menu1">Sundarban Trip 2025</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#menu2">BWA 2025</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#menu3">Vyapaar Expo 2026</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#menu4">Mouparnaz Makeover Meeting</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#menu5">Karma International Carnival</a>
                                                </li>

                                                 <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#menu6">Growth Summit 2026</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#menu7">Office Relocation</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-md-8'>
                                        <div class="tab-content our_trip_tabcontent">
                                            <div id="menu1" class="tab-pane active">

                                                <div class="abotrip-box swiper">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip1} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip2} alt="7" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip3} alt="2" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip6} alt="5" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip7} alt="6" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="abotrip-nav d-flex">
                                                        <div class="swiper-button-prev abotrip-button-prev">
                                                        </div>
                                                        <div class="swiper-button-next abotrip-button-next">
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div id="menu2" class="tab-pane fade">
                                                <div class="abotrip-box swiper">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">

                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_1} alt="4" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_2} alt="5" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_3} alt="6" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_4} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_5} alt="7" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_6} alt="2" loading="lazy" />
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="abotrip-nav d-flex">
                                                        <div class="swiper-button-prev abotrip-button-prev">
                                                        </div>
                                                        <div class="swiper-button-next abotrip-button-next">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="menu3" class="tab-pane fade">
                                                <div class="abotrip-box swiper">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip2} alt="4" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip3} alt="5" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip4} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip5} alt="7" loading="lazy" />
                                                            </div>
                                                        </div>


                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip7} alt="6" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip8} alt="6" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="abotrip-nav d-flex">
                                                        <div class="swiper-button-prev abotrip-button-prev">
                                                        </div>
                                                        <div class="swiper-button-next abotrip-button-next">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="menu4" class="tab-pane fade">
                                                <div class="abotrip-box swiper">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={mouparnas_meeting1} alt="3" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={mouparnas_meeting2} alt="4" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={mouparnas_meeting3} alt="5" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={mouparnas_meeting4} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="abotrip-nav d-flex">
                                                        <div class="swiper-button-prev abotrip-button-prev">
                                                        </div>
                                                        <div class="swiper-button-next abotrip-button-next">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="menu5" class="tab-pane fade">
                                                <div class="abotrip-box swiper">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={karma_event3} alt="3" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={karma_event4} alt="4" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={karma_event5} alt="5" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={karma_event6} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={karma_event7} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={karma_event8} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="abotrip-nav d-flex">
                                                        <div class="swiper-button-prev abotrip-button-prev">
                                                        </div>
                                                        <div class="swiper-button-next abotrip-button-next">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div id="menu6" class="tab-pane">

                                                <div class="abotrip-box swiper">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={growth_summit1} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={growth_summit2} alt="7" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={growth_summit3} alt="7" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={growth_summit4} alt="7" loading="lazy" />
                                                            </div>
                                                        </div>
                                     
                                                    </div>

                                                    <div class="abotrip-nav d-flex">
                                                        <div class="swiper-button-prev abotrip-button-prev"></div>
                                                        <div class="swiper-button-next abotrip-button-next"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="menu7" class="tab-pane">

                                                <div class="abotrip-box swiper">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={office_rellocation1} alt="1" loading="lazy" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={office_rellocation2} alt="7" loading="lazy" />
                                                            </div>
                                                        </div>

                                                         <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={office_rellocation3} alt="7" loading="lazy" />
                                                            </div>
                                                        </div>

                                                        
                                     
                                                    </div>

                                                    <div class="abotrip-nav d-flex">
                                                        <div class="swiper-button-prev abotrip-button-prev"></div>
                                                        <div class="swiper-button-next abotrip-button-next"></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTrips