import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiBox, FiMapPin, FiHome, FiHeart } from 'react-icons/fi';
import './marketing360-dark.css';

const audiences = [
  { icon: <FiTarget />, name: "Startups", desc: "Aggressive growth scaling" },
  { icon: <FiBox />, name: "E-commerce", desc: "ROAS optimization & sales" },
  { icon: <FiMapPin />, name: "Local Businesses", desc: "Footfall & geo-targeting" },
  { icon: <FiHome />, name: "Real Estate", desc: "High-ticket lead generation" },
  { icon: <FiHeart />, name: "Clinics & Healthcare", desc: "Patient acquisition funnels" }
];

const Marketing360WhoNeeds = () => {
  return (
    <section className="mk360-target-section py-5 position-relative">
      <div className="container position-relative z-2 py-5">
        <h2 className="mk360-section-title text-center mb-5 pb-5 cust_padding">
          Who Should Choose a <span className="mk360-title-gradient">360° Agency?</span>
        </h2>

        {/* Holographic Radar Grid */}
        <div className="row g-4 justify-content-center px-lg-5">
          {audiences.map((aud, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mk360-target-reticle"
              >
                <div className="reticle-corners">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div className="reticle-icon mb-3">
                  {aud.icon}
                </div>
                <h5 className="text-white fw-bold mb-2">{aud.name}</h5>
                <p className="small m-0">{aud.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing360WhoNeeds;
