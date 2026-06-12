import React, { useEffect } from 'react'

import sundarbantrip1 from "../../assets/images/sundarban_trip1.jpeg"
import sundarbantrip2 from "../../assets/images/sundarban_trip2.jpeg"
import sundarbantrip3 from "../../assets/images/sundarban_trip3.jpeg"
import sundarbantrip6 from "../../assets/images/sundarban_trip6_2.jpeg"
import sundarbantrip7 from "../../assets/images/sundarban_trip7.jpeg"

import mouparnas_meeting1 from "../../assets/images/mouparnas-meeting1.jpeg"
import mouparnas_meeting2 from "../../assets/images/mouparnas-meeting2.jpeg"
import mouparnas_meeting3 from "../../assets/images/mouparnas-meeting3.jpeg"
import mouparnas_meeting4 from "../../assets/images/mouparnas-meeting4.jpeg"

import bwa2025_1 from "../../assets/images/BWA-trip1.jpeg"
import bwa2025_2 from "../../assets/images/BWA-trip2.jpeg"
import bwa2025_3 from "../../assets/images/BWA-trip3.jpeg"
import bwa2025_4 from "../../assets/images/BWA-trip4.jpeg"
import bwa2025_5 from "../../assets/images/BWA-trip5.jpeg"
import bwa2025_6 from "../../assets/images/BWA-trip6.jpeg"

import vyapaar_expo_trip2 from "../../assets/images/vyapaar-expo-trip2.jpeg"
import vyapaar_expo_trip3 from "../../assets/images/vyapaar-expo-trip3.jpeg"
import vyapaar_expo_trip4 from "../../assets/images/vyapaar-expo-trip4.jpeg"
import vyapaar_expo_trip5 from "../../assets/images/vyapaar-expo-trip5.jpeg"
import vyapaar_expo_trip7 from "../../assets/images/vyapaar-expo-trip7.jpeg"
import vyapaar_expo_trip8 from "../../assets/images/vyapaar-expo-trip8.jpeg"


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
                                                                <img src={sundarbantrip1} alt="1" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip2} alt="7" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip3} alt="2" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip6} alt="5" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={sundarbantrip7} alt="6" />
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
                                                                <img src={bwa2025_1} alt="4" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_2} alt="5" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_3} alt="6" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_4} alt="1" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_5} alt="7" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={bwa2025_6} alt="2" />
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
                                                                <img src={vyapaar_expo_trip2} alt="4" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip3} alt="5" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip4} alt="1" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip5} alt="7" />
                                                            </div>
                                                        </div>


                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip7} alt="6" />
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={vyapaar_expo_trip8} alt="6" />
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
                                                                <img src={mouparnas_meeting1} alt="3" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={mouparnas_meeting2} alt="4" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={mouparnas_meeting3} alt="5" />
                                                            </div>
                                                        </div>

                                                        <div class="swiper-slide">
                                                            <div class="abotripb-img">
                                                                <img src={mouparnas_meeting4} alt="1" />
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