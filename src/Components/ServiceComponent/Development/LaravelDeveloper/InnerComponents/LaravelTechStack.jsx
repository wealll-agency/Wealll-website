import React from 'react';
import { motion } from 'framer-motion';
import './laravel-dark.css';

import {
  FaHtml5,
  FaPhp,
  FaCss3Alt,
  FaLaravel,
} from 'react-icons/fa';
import { SiJavascript, SiJquery, SiMysql } from 'react-icons/si';

const technologies = [
  { name: 'HTML5', title: <FaHtml5 size={50} />, color: '#E34F26' },
  { name: 'CSS3', title: <FaCss3Alt size={50} />, color: '#1572B6' },
  { name: 'Vanilla JS', title: <SiJavascript size={50} />, color: '#F7DF1E' },
  { name: 'AJAX', title: <span style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'monospace' }}>AJAX</span>, color: '#0052cc' },
  { name: 'jQuery', title: <SiJquery size={50} />, color: '#0769AD' },
  { name: 'PHP', title: <FaPhp size={50} />, color: '#777BB4' },
  { name: 'MySQL', title: <SiMysql size={50} />, color: '#4479A1' },
  { name: 'Laravel', title: <FaLaravel size={50} />, color: '#FF2D20' },
];

const LaravelTechStack = () => {
  return (
    <section className="lar-dark-section py-5 position-relative border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="container position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <div className="d-flex justify-content-center mb-3">
            <span className="badge bg-danger bg-opacity-25 text-danger rounded-pill px-3 py-2 fw-bold border border-danger border-opacity-50 text-uppercase" style={{ letterSpacing: '1px' }}>
              Technologies
            </span>
          </div>
          <h2 className="display-4 fw-bolder text-white mb-4 lh-sm">
            Our Laravel Development Team is Equipped <br />with the Following <span className="lar-title-gradient">Technologies</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 lh-lg" style={{ maxWidth: '900px' }}>
            We leverage a full suite of foundational and advanced technologies to build world-class, custom Laravel web applications and APIs.
          </p>
        </motion.div>

        {/* 4x2 Bordered Grid matching the Website Development configuration exactly */}
        <div className="mx-auto" style={{ maxWidth: '1100px' }}>
          <div className="lar-tech-bordered-grid shadow-lg">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="lar-tech-grid-cell">
                <div
                  className="lar-tech-grid-icon-lg fw-bolder d-flex align-items-center justify-content-center"
                  style={{ color: tech.color, textShadow: `0 0 20px ${tech.color}50` }}
                >
                  {tech.title}
                </div>
                <h4 className="lar-tech-grid-name">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LaravelTechStack;
