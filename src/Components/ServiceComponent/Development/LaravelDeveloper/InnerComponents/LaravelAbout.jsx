import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCode, FiLayers, FiCpu } from 'react-icons/fi';
import './laravel-dark.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const LaravelAbout = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="lar-dark-section py-5 position-relative">
      <BannerComponent />
      {/* Abstract Background Shapes */}
      <div className="lar-abstract-shape lar-shape-1"></div>
      <div className="lar-abstract-shape lar-shape-2"></div>

      <div className="container py-5 position-relative z-1">
        <div className="row g-5 align-items-center lar-about-perspective">

          {/* Left Content - Immersive 3D Text Block */}
          <div className="col-lg-6">
            <motion.div
              className="lar-about-content pe-lg-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-danger bg-opacity-25 text-danger rounded-pill px-3 py-2 fw-bold me-3 border border-danger border-opacity-50">
                  Top Rated
                </span>
                <span className="text-secondary fw-bold text-uppercase" style={{ letterSpacing: '2px', fontSize: '12px' }}>
                  Best Laravel Development Company In India
                </span>
              </div>

              <h2 className="display-4 fw-bolder text-white mb-4 lh-sm">
                Architecting the Future with
                <span className="lar-title-gradient"> Laravel PHP</span>
              </h2>

              <p className="text-secondary fs-5 lh-lg mb-4">
                We deliver result-oriented Laravel development services with the mastery of our expert developers. Whether it's a small-scale application or a large enterprise system, our robust PHP solutions provide the perfect foundation.
              </p>

              <p className="text-secondary fs-6 lh-lg mb-5 opacity-75">
                Leveraging Laravel's all-embracing testing environment and rapid application development capabilities, <strong className="text-white">We Alll</strong> deploys high-quality websites and web apps that strictly prioritize code guidelines, ensuring your requirements are met precisely under budget.
              </p>

              <div className="d-flex gap-4">
                <div className="d-flex flex-column">
                  <span className="display-6 fw-bold text-white mb-1">100+</span>
                  <span className="text-secondary text-uppercase small fw-bold" style={{ letterSpacing: '1px' }}>Projects Shipped</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div className="d-flex flex-column">
                  <span className="display-6 fw-bold text-white mb-1">100%</span>
                  <span className="text-secondary text-uppercase small fw-bold" style={{ letterSpacing: '1px' }}>Code Quality</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Asymmetric Monoliths Grid */}
          <div className="col-lg-6">
            <div className="lar-about-grid">
              {[
                { id: 1, icon: <FiLayers size={32} />, title: "MVC Architecture", delay: 0.2 },
                { id: 2, icon: <FiCpu size={32} />, title: "Eloquent ORM", delay: 0.4 },
                { id: 3, icon: <FiCode size={32} />, title: "Blade Templating", delay: 0.6 },
                { id: 4, icon: <FiLayers size={32} />, title: "Artisan CLI", delay: 0.8 }
              ].map((node, index) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: node.delay, type: 'spring', stiffness: 70 }}
                  className={`lar-about-wrapper wrapper-${index + 1}`}
                >
                  <div className="lar-about-card">
                    <div className="lar-about-top-accent"></div>
                    <div className="position-relative z-2">
                      <div className="lar-about-icon-box">
                        {node.icon}
                      </div>
                      <h5 className="text-white fw-bold mb-0">{node.title}</h5>
                    </div>
                    <div className="lar-about-deco-bg"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LaravelAbout;
