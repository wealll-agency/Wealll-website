import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Blogbanner.css';

// Placeholder images since we couldn't access external site
// User should replace these with actual imports from src/assets/images
const bannerData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Abstract dark
        bgText: "Disruptive Brand",
        date: "January 23, 2025",
        title: "Understanding & Building a Disruptive Brand"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2528&auto=format&fit=crop", // Abstract dark 2
        bgText: "Innovation",
        date: "February 10, 2025",
        title: "The Future of Digital Marketing Strategies"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // Abstract dark 3
        bgText: "Creative",
        date: "March 05, 2025",
        title: "Creative Design Trends to Watch in 2025"
    }
];

const Blogbanner = () => {
    return (
        <div className="blog-banner">
            <div className="container">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    className="blog-banner-swiper"
                >
                    {bannerData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="blog-banner-slide"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="slide-overlay"></div>

                                <div className="center-text">{slide.bgText}</div>

                                <div className="slide-content">
                                    <div className="slide-date">{slide.date}</div>
                                    <h2 className="slide-title">{slide.title}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="swiper-nav-buttons">
                        <button className="nav-btn custom-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="nav-btn custom-next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Blogbanner;
