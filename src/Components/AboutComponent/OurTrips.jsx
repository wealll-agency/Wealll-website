import React, { useEffect } from 'react'

const OurTrips = () => {

    useEffect(()=>{
        var nmeetrt = new Swiper(".abotrip-box", {
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: { nextEl: ".abotrip-button-next", prevEl: ".abotrip-button-prev" },
                loop: true,
                autoplay: true,
            });
    },[])

    return (
        <>
            <section className='about-trip'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-12">
                            <div class="top-title text-center">
                                <h2>Exploring life <b>Through Lens</b></h2>
                                <div className='our_trip_tab'>
                                    <div className='row align-items-center'>
                                        <div className='col-md-4'>
                                            <div className='tab_btn'>
                                                <ul class="nav nav-tabs" role="tablist">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" data-bs-toggle="tab" href="#menu1">Some WordPress wisdom from Udaipur</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#menu2">Cheers to our half a decade delight</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#menu3">Abu Trip 2023</a>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#menu4">Ganesh Chaturthi 2023</a>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#menu5">Goa Trip 2023</a>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#menu6">MOM Meet</a>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#menu7">Diwali Celebration</a>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#menu8">Udaipur Trip 2022</a>
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
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/1.jpg" alt="1" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/7.jpg" alt="7" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/2.jpg" alt="2" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/3.jpg" alt="3" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/4.jpg" alt="4" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/5.jpg" alt="5" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/6.jpg" alt="6" />
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
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/3.jpg" alt="3" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/4.jpg" alt="4" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/5.jpg" alt="5" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/1.jpg" alt="1" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/7.jpg" alt="7" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/2.jpg" alt="2" />
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/6.jpg" alt="6" />
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
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/4.jpg" alt="4" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/5.jpg" alt="5" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/6.jpg" alt="6" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/1.jpg" alt="1" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/7.jpg" alt="7" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/2.jpg" alt="2" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/3.jpg" alt="3" />
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
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/3.jpg" alt="3" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/4.jpg" alt="4" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/5.jpg" alt="5" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/1.jpg" alt="1" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/7.jpg" alt="7" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/2.jpg" alt="2" />
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/6.jpg" alt="6" />
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
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/4.jpg" alt="4" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/5.jpg" alt="5" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/6.jpg" alt="6" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/1.jpg" alt="1" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/7.jpg" alt="7" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/2.jpg" alt="2" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/3.jpg" alt="3" />
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
                                                
                                                <div id="menu6" class="tab-pane fade">
                                                    <div class="abotrip-box swiper">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/3.jpg" alt="3" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/4.jpg" alt="4" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/5.jpg" alt="5" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/1.jpg" alt="1" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/7.jpg" alt="7" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/2.jpg" alt="2" />
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/6.jpg" alt="6" />
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
                                                <div id="menu7" class="tab-pane fade">
                                                     <div class="abotrip-box swiper">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide">

                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/4.jpg" alt="4" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/5.jpg" alt="5" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/6.jpg" alt="6" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/1.jpg" alt="1" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/7.jpg" alt="7" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/2.jpg" alt="2" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/3.jpg" alt="3" />
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
                                                 <div id="menu8" class="tab-pane fade">
                                                     <div class="abotrip-box swiper">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide">

                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/4.jpg" alt="4" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/5.jpg" alt="5" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/6.jpg" alt="6" />
                                                                </div>
                                                            </div>

                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/1.jpg" alt="1" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/7.jpg" alt="7" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/2.jpg" alt="2" />
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="abotripb-img">
                                                                    <img src="https://granth.in/wp-content/uploads/2024/03/3.jpg" alt="3" />
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
                </div>
            </section>
        </>
    )
}

export default OurTrips