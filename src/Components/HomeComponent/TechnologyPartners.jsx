import React from 'react';
import { mediaUrl } from '../../config/media';

const partner1 = mediaUrl("assets/images/tech-logo1.png");
const partner2 = mediaUrl("assets/images/tech-logo2.png");
const partner3 = mediaUrl("assets/images/tech-logo3.png");
const partner4 = mediaUrl("assets/images/tech-logo4.png");
const partner5 = mediaUrl("assets/images/tech-logo5.png");
const partner6 = mediaUrl("assets/images/tech-logo6.png");

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TechnologyPartners = () => {
    const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner1, partner2, partner3, partner4, partner5, partner6];

    return (
        <section className="technology-partners">
            <div className="container">
                {/* <h2 className="text-center default_font mb-5 fw-bold" style={{ color: '#002249' }}>Our Technology Partners</h2> */}

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1200: { slidesPerView: 6 }
                    }}
                    className="py-2"
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="partner-card w-100 h-100 d-flex align-items-center justify-content-center rounded" style={{ minHeight: '100px', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <img src={partner} alt={`Technology Partner ${index + 1}`} className="img-fluid" style={{ maxHeight: '80px', objectFit: 'contain' }} loading="lazy" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
};

export default TechnologyPartners;
