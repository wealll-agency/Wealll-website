import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ecommerce-dark.css';

const EcommerceVideoSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="ecom-hej-video-section py-5">
      <h2 className="hej-text-left">Hej!</h2>
      <h2 className="hej-text-right">Hej!</h2>

      <div className="container position-relative z-1 pt-5 pb-5">
        <div className="hej-phones-wrapper">
          
          {/* Left Phone (IKEA style) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hej-phone left-phone"
          >
            <div className="hej-top-bar">
              <span className="fw-bolder" style={{ color: '#0058a3' }}>IKEA</span>
              <span className="text-secondary small">📍 The Dubai Mall</span>
            </div>
            
            <div className="hej-app-content p-0">
              <div className="position-relative" style={{ height: '220px', backgroundColor: '#e2f0d9' }}>
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400" alt="Plant Balls" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                <div className="position-absolute bottom-0 start-0 p-3 w-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                  <div className="badge bg-white text-dark mb-2">🚚 FREE delivery*</div>
                  <h4 className="text-white mb-0" style={{ fontSize: '1.2rem' }}>Plant Balls (500g)</h4>
                  <p className="text-white fw-bold mb-0">Dhs 22</p>
                </div>
              </div>
              
              <div className="p-3">
                <div className="d-flex gap-2 mb-3 overflow-hidden">
                  <span className="badge bg-dark rounded-pill px-3 py-2">Featured</span>
                  <span className="badge bg-light text-dark border rounded-pill px-3 py-2">Ready to eat</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0">Best Seller</h6>
                  <span className="text-primary small">View All</span>
                </div>
                
                <div className="d-flex gap-3">
                  <div className="card border-0 shadow-sm" style={{ width: '120px' }}>
                    <div style={{ padding: '20px', background: '#f8f9fa' }}>
                      <img src="https://images.unsplash.com/photo-1582281172669-715bd5bce0a1?auto=format&fit=crop&q=80&w=200" alt="Jar" className="img-fluid mix-blend-multiply" loading="lazy" />
                    </div>
                    <div className="card-body p-2 text-center">
                      <p className="small text-muted mb-0">IKEA Family Price</p>
                      <p className="fw-bold small mb-0">SILL SENAP</p>
                    </div>
                  </div>
                  <div className="card border-0 shadow-sm" style={{ width: '120px' }}>
                     <div style={{ padding: '20px', background: '#f8f9fa' }}>
                      <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=200" alt="Jar" className="img-fluid mix-blend-multiply" loading="lazy" />
                    </div>
                    <div className="card-body p-2 text-center">
                      <p className="small text-muted mb-0">IKEA Family Price</p>
                      <p className="fw-bold small mb-0">SIMPLY</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Nav */}
            <div className="position-absolute bottom-0 w-100 bg-white border-top d-flex justify-content-around py-3">
              <span className="text-dark">🏠</span>
              <span className="text-secondary">🔍</span>
              <span className="text-secondary">❤️</span>
              <span className="text-secondary">🛒</span>
            </div>
          </motion.div>

          {/* Right Phone (Starbucks style) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hej-phone right-phone"
          >
            <div className="position-relative" style={{ height: '180px' }}>
              <img src="https://images.unsplash.com/photo-1414445839132-4467554ee5d1?auto=format&fit=crop&q=80&w=400" alt="Food" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              <div className="position-absolute top-0 start-0 m-3 bg-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '35px', height: '35px' }}>
                <span className="fw-bold">←</span>
              </div>
            </div>

            <div className="p-3">
              <h4 className="fw-bold mb-1">Coffee & Beverages</h4>
              <p className="text-secondary small mb-4">Select your favorite roast</p>

              <div className="d-flex border rounded p-2 mb-3 align-items-center shadow-sm">
                <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=150" alt="Coffee" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' }} loading="lazy" />
                <div className="ms-3 flex-grow-1">
                  <span className="badge bg-danger mb-1" style={{ fontSize: '0.6rem' }}>New</span>
                  <p className="text-success fw-bold small mb-0">STARBUCKS</p>
                  <p className="fw-bold small mb-0 lh-1">Starbucks House<br/>Blend Roast Coffee</p>
                  <div className="d-flex justify-content-between align-items-end mt-2">
                     <p className="fw-bolder mb-0">Dhs <span className="fs-5">55</span></p>
                     <div className="border rounded px-2 py-1 small cursor-pointer bg-light">Add on ▼</div>
                  </div>
                </div>
              </div>

              <div className="d-flex border rounded p-2 align-items-center shadow-sm">
                <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=150" alt="Coffee" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' }} loading="lazy" />
                <div className="ms-3 flex-grow-1">
                  <span className="badge bg-danger mb-1" style={{ fontSize: '0.6rem' }}>New</span>
                  <p className="text-danger fw-bold small mb-0">COMMUNITY</p>
                  <p className="fw-bold small mb-0 lh-1">Community coffee<br/>roast Blend</p>
                  <div className="d-flex justify-content-between align-items-end mt-2">
                     <p className="fw-bolder mb-0">Dhs <span className="fs-5">35</span></p>
                     <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                       <span>+</span>
                     </div>
                  </div>
                </div>
              </div>

            </div>
             {/* Bottom Nav */}
             <div className="position-absolute bottom-0 w-100 bg-white border-top d-flex justify-content-around py-3">
              <span className="text-secondary">🏠</span>
              <span className="text-secondary">🔍</span>
              <span className="text-dark">🛍️</span>
              <span className="text-secondary">👤</span>
            </div>
          </motion.div>

          {/* Play Button - Fixed to the exact center in the flex container intersecting phones */}
          <button className="hej-play-btn" onClick={() => setModalOpen(true)}>
            <div style={{ marginLeft: '5px' }}>▶</div>
          </button>
        </div>
      </div>

      {/* Video Modal remains the same */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ecom-video-modal-backdrop"
            onClick={() => setModalOpen(false)}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="ecom-video-modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ width: '90%', maxWidth: '800px', aspectRatio: '16/9', position: 'relative' }}
            >
              <div 
                className="ecom-modal-close" 
                onClick={() => setModalOpen(false)}
                style={{ position: 'absolute', top: '-40px', right: 0, color: '#fff', fontSize: '30px', cursor: 'pointer' }}
              >✕</div>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
                title="Ecommerce Platform Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default EcommerceVideoSection;
