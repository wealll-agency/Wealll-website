import React from 'react';
import './mern-dark.css';

const MernCTA = () => {
  return (
    <section className="py-5 mern-cta-section position-relative" style={{ backgroundColor: '#030409', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
      
      {/* Animated Constellation Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0, opacity: 0.4 }}>
         {Array.from({ length: 40 }).map((_, i) => (
            <div 
              key={i} 
              className="position-absolute rounded-circle"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: i % 2 === 0 ? 'var(--mern-accent-blue)' : 'var(--mern-accent-green)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--mern-accent-blue)' : 'var(--mern-accent-green)'}`,
                animation: `float-particle ${Math.random() * 5 + 5}s infinite ease-in-out alternate`
              }}
            ></div>
         ))}
         {/* Connecting pseudo-lines using a subtle SVG or CSS lines could go here. For exact replication of nodes, we use radial gradients and floating points. */}
         <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
            opacity: 0.2
         }}></div>
      </div>

      <div className="container position-relative z-2">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <h2 className="display-3 fw-bold text-white mb-4">
              Overwhelmed by <span className="mern-gradient-text">Modern Web Development</span> Complexities?
            </h2>
            <p className="text-secondary fs-4 lh-lg mb-5 mx-auto" style={{ maxWidth: '800px' }}>
              Let our MERN stack developers handle the technical complexity while you focus on business growth. From React front-ends and database management to Node.js back-ends—we've got you covered.
            </p>
            <button className="btn px-5 py-3 fw-bold text-black rounded-pill" style={{ background: 'linear-gradient(135deg, var(--mern-accent-blue), var(--mern-accent-green))', fontSize: '1.2rem', transition: 'all 0.3s ease' }}>
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-particle {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
        }
        .mern-cta-section .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(97, 218, 251, 0.4);
        }
      `}</style>
    </section>
  );
};

export default MernCTA;
