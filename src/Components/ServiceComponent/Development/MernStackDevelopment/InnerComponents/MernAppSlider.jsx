import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './mern-dark.css';

// Imported Recent Work images from Banao
const hobbycueImg = mediaUrl("assets/images/Hobbycue_Banner_latest_min.png");
const olineoImg = mediaUrl("assets/images/Olineo_Banner_latest_min.png");
const hummImg = mediaUrl("assets/images/HummcareImg.png");
const sensegrassImg = mediaUrl("assets/images/Sensegrass_Banner_latest_min.png");
const thingsEduImg = mediaUrl("assets/images/Things_Education_Banner_min.png");
const vrRealityImg = mediaUrl("assets/images/VrReality_Banner_latest_min.png");
import { mediaUrl } from "../../../../../config/media";

const recentWorks = [
  { id: 1, title: 'HOBBYCUE', category: 'SOCIAL MEDIA', image: hobbycueImg },
  { id: 2, title: 'O-LINE-O', category: 'E-COMMERCE', image: olineoImg },
  { id: 3, title: 'HUMMCARE', category: 'HEALTHCARE', image: hummImg },
  { id: 4, title: 'SENSEGRASS', category: 'AGRITECH', image: sensegrassImg },
  { id: 5, title: 'THINGS EDUCATION', category: 'EDTECH', image: thingsEduImg },
  { id: 6, title: 'VR REALITY', category: 'ENTERTAINMENT', image: vrRealityImg }
];

const MernAppSlider = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fcdcb8', overflow: 'hidden' }}>
      <div className="container-fluid py-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 50 },
            1400: { slidesPerView: 4.5, spaceBetween: 60 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-5"
          style={{ paddingLeft: '5%', paddingRight: '5%' }}
        >
          {recentWorks.map((work) => (
            <SwiperSlide key={work.id}>
              <div className="d-flex flex-column align-items-center">
                {/* CSS Mobile Frame */}
                <div 
                  className="mobile-mockup-frame"
                  style={{
                    width: '260px',
                    height: '520px',
                    borderRadius: '40px',
                    border: '10px solid #1c1c1e',
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    marginBottom: '1rem'
                  }}
                >
                  {/* Notch */}
                  <div className="position-absolute top-0 start-50 translate-middle-x" style={{
                    width: '120px',
                    height: '24px',
                    backgroundColor: '#1c1c1e',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    zIndex: 10
                  }}></div>
                  
                  {/* Image Container */}
                  <div style={{ width: '100%', height: '100%', overflow: 'hidden' }} className="mern-scroll-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-100 h-100" 
                      style={{ display: 'block', objectFit: 'cover', objectPosition: 'center' }} 
                    loading="lazy" />
                  </div>
                </div>

                {/* Subtitle / Information Row */}
                <div className="text-center mt-3">
                  <h4 className="fw-bold mb-1" style={{ color: '#1a1a1a', letterSpacing: '0.5px' }}>{work.title}</h4>
                  <a href="#" className="text-decoration-none fw-semibold" style={{ color: '#6b7280', fontSize: '13px', letterSpacing: '1px' }}>
                     {work.category}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .mern-scroll-hidden::-webkit-scrollbar {
          width: 0px;
          background: transparent; /* make scrollbar invisible */
        }
        .mern-scroll-hidden {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
        }
      `}</style>
    </section>
  );
};

export default MernAppSlider;
