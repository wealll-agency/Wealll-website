import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import './seo-dark.css';

const SEOStrategyVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="seo-strategy-section">
      <div className="container position-relative z-2">
        <div className="row align-items-center flex-lg-row-reverse">
          
          {/* Right: Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0 ps-lg-5">
            <h2 className="seo-section-title mb-4">
              What is the <span className="seo-title-gradient">Best SEO Strategy</span><br/>for your Organization?
            </h2>
            
            <p className="seo-normal-text mb-4">
              First, you should know how to create a website that will deliver an exceptional user experience. It's essential to offer good <strong>SEO services</strong>, too. Developing and implementing a successful SEO campaign requires finding the accurate balance of content, site organization, backend structure, and off-site search engine marketing.
            </p>
            
            <p className="seo-normal-text">
              Finding the right SEO agency can make or break a website. With more mentions online, authoritative backlinks, and laser-focused keyword targeting, you will attract more potential visitors and ultimately convert them into loyal brand advocates.
            </p>
          </div>

          {/* Left: Cinematic Video Projection */}
          <div className="col-lg-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="seo-video-container shadow-lg"
            >
              {isPlaying ? (
                <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                  <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="SEO Strategy Video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="seo-video-thumbnail" onClick={() => setIsPlaying(true)}>
                  <div className="thumbnail-overlay"></div>
                  {/* Dummy thumbnail visual using pure CSS gradients */}
                  <div className="thumbnail-digital-grid"></div>
                  <button className="seo-play-button">
                    <FiPlay size={40} className="ms-2" />
                    <div className="play-pulse"></div>
                  </button>
                  <div className="video-duration">03:45</div>
                  <div className="video-title-bar">
                    <span className="fw-bold">We Alll's Ultimate SEO Blueprint</span>
                  </div>
                </div>
              )}
              {/* Outer Glow */}
              <div className="seo-video-glow"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOStrategyVideo;
