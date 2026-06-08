import React from 'react';
import { motion } from 'framer-motion';
import './wordpress-dev-dark.css';

// Using a dummy image based on the user's previously validated path structure
import wpImage from '../../../../../assets/images/portfolio_website2.jpg';

const WPBenefits = () => {
  return (
    <section className="wp-dark-bg py-5 position-relative border-bottom about_wordpress" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="container position-relative z-1 py-5">
        <div className="row align-items-center gy-5">

          {/* Left Text Column */}
          <div className="col-lg-6 pe-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="d-inline-flex border border-secondary rounded-pill px-4 py-2 mb-3" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
                <span className="text-uppercase fw-semibold" style={{ color: '#38bdf8', letterSpacing: '2px', fontSize: '12px' }}>Benefits of WordPress</span>
              </div>
              <h2 className="display-4 fw-bolder text-white mb-4">
                WordPress is <span className="wp-gradient-text">Simple, Robust & Scalable!</span>
              </h2>
              <p className="text-secondary fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                We are your WordPress partner with the finest experience and expertise. WordPress is one of the most widely used Content Management Systems (CMS) globally, forming the backbone of almost <strong>75,000,000 websites</strong>.
              </p>
              <p className="text-light opacity-75 fs-6 mb-5" style={{ lineHeight: '1.7' }}>
                It is immensely easy to operate and user-friendly for creating new pages and building sections dynamically using WYSIWYG editor plugins. Many intimidating tasks of website development get easy with thousands of active plugins.
              </p>

              <div className="d-flex align-items-center gap-4">
                <button className="btn rounded-pill px-5 py-3 text-white fw-bold" style={{ background: 'linear-gradient(135deg, #38bdf8, #3b82f6)', border: 'none', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}>
                  Start Your Project
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Image Composition */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="position-relative ps-lg-4"
              style={{ perspective: '1000px' }}
            >
              {/* Glow Behind Image */}
              <div className="position-absolute top-50 start-50 translate-middle rounded-circle" style={{ width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }}></div>

              <div className="wp-benefit-img-container position-relative z-1" style={{ aspectRatio: '4/3' }}>
                <div className="w-100 h-100" style={{ backgroundImage: `url(${wpImage})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)' }}></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(45deg, rgba(11,12,16,0.8) 0%, rgba(11,12,16,0.1) 100%)' }}></div>
              </div>

              {/* Floating Statistic Badges */}
              <div className="wp-benefit-badge" style={{ top: '-20px', right: '20px', animationDelay: '0s' }}>
                <h3 className="m-0 fs-2 fw-bolder text-white">75M+</h3>
                <span className="text-secondary small">Active Sites globally</span>
              </div>

              <div className="wp-benefit-badge" style={{ bottom: '-20px', left: '-10px', animationDelay: '2s' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', fontSize: '20px' }}>⭐</div>
                  <div>
                    <h3 className="m-0 fs-5 fw-bolder text-white">Easy Interface</h3>
                    <span className="text-secondary small">WYSIWYG Editors</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WPBenefits;
