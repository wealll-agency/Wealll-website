import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import './Hero.css';

const kesri = mediaUrl("assets/images/case-studies/Kesri.png");
const bunny = mediaUrl("assets/images/case-studies/Bunny.png");
const maxglow = mediaUrl("assets/images/case-studies/Maxglow.png");
const karma = mediaUrl("assets/images/case-studies/Karma.png");
const philo = mediaUrl("assets/images/case-studies/Philo.png");
const khukumoni = mediaUrl("assets/images/case-studies/Khukumoni.png");
const beautech = mediaUrl("assets/images/case-studies/Beautech.png");
import { mediaUrl } from "../../config/media";

const words = ["Guaranteed Growth", "Better ROAS", "Smarter Scaling"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end of word
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const images = [
    kesri,
    bunny,
    maxglow,
    karma,
    philo,
    khukumoni,
    beautech
  ];



  return (
    <section className="ml-hero-section">
      <div className="ml-hero-container">
        {/* Left Column */}
        <div className="ml-hero-content">
          <h1 className="ml-hero-title">
            Scaling Brands Through <br />
            Digital Marketing  <br />
            <span className="ml-typing-text">{currentText}</span>
            <span className="ml-cursor">⦁</span>
          </h1>
          <p className="ml-hero-desc">
            Building a brand is hard, scaling it shouldn’t be. We turn ambitious D2C brands into industry leaders with custom strategies that maximize ROAS, increase AOV and drive sustainable, scalable growth.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="ml-hero-btn">
            SCHEDULE CALL
          </a>
        </div>

        {/* Right Column */}
        <div className="ml-hero-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            centeredSlides={true}
            breakpoints={{
              992: {
                centeredSlides: false
              }
            }}
            className="ml-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="ml-slide">
                <div className="ml-slide-item">
                  <img src={img} alt={`Case Study ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  );
};

export default Hero;
