import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './portfolio-showcase.css';

const PortfolioShowcase = () => {
    const samples = [
        {
            title: "Business Portfolio",
            category: "Homepage Mockup",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            color: "#4CC9F0"
        },
        {
            title: "Services Page",
            category: "Inner Page Design",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
            color: "#FF3366"
        },
        {
            title: "Project Gallery",
            category: "Work Showcase",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
            color: "#00FFCC"
        },
        {
            title: "Mobile Responsive",
            category: "Mobile View",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
            color: "#FFCC00"
        },
        {
            title: "Contact & Inquiry",
            category: "Conversion Focused",
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
            color: "#9D4EDD"
        }
    ];

    return (
        <section className="portfolio-showcase-section">
            <div className="container">
                <div className="showcase-header text-center">
                    <h2>Our Portfolio Design <span className="highlight-text">Showcase</span></h2>
                    <p>Clean, modern, and high-converting designs tailored for every industry.</p>
                </div>

                <div className="showcase-clean-container">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1.2 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="clean-showcase-swiper"
                    >
                        {samples.map((sample, index) => (
                            <SwiperSlide key={index}>
                                <div className="clean-sample-card">
                                    <div className="card-image-box">
                                        <img src={sample.image} alt={sample.title} loading="lazy" />
                                        <div className="image-overlay">
                                            <button className="view-btn">View Design</button>
                                        </div>
                                    </div>
                                    <div className="card-content-box">
                                        <span className="sample-cat" style={{ color: sample.color }}>{sample.category}</span>
                                        <h3>{sample.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
