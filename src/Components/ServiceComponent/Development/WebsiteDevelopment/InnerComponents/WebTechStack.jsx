import React from 'react';
import { motion } from 'framer-motion';
import './website-dev-dark.css';

import {
  FaFigma,
  FaHtml5,
  FaPhp,
  FaWordpress,
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaShopify
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const CustomCanvaIcon = ({ size }) => (
  <div style={{
    width: size, height: size,
    borderRadius: '50%', background: 'linear-gradient(135deg, #00C4CC, #7D2AE8)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'white', fontSize: size * 0.65, fontWeight: 'bold', fontFamily: 'sans-serif', margin: '0 auto'
  }}>
    C
  </div>
);
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';

const technologies = [
  { name: 'Figma', title: <FaFigma size={50} />, color: '#F24E1E' },
  { name: 'Adobe Photoshop', title: <DiPhotoshop size={50} />, color: '#31A8FF' },
  { name: 'Adobe Illustrator', title: <DiIllustrator size={50} />, color: '#FF9A00' },
  { name: 'Canva', title: <CustomCanvaIcon size={50} />, color: '#00C4CC' },
  { name: 'HTML5', title: <FaHtml5 size={50} />, color: '#E34F26' },
  { name: 'PHP', title: <FaPhp size={50} />, color: '#777BB4' },
  { name: 'WordPress', title: <FaWordpress size={50} />, color: '#21759B' },
  { name: 'CSS3', title: <FaCss3Alt size={50} />, color: '#1572B6' },
  { name: 'JavaScript', title: <SiJavascript size={50} />, color: '#F7DF1E' },
  { name: 'React', title: <FaReact size={50} />, color: '#61DAFB' },
  { name: 'Laravel', title: <FaLaravel size={50} />, color: '#FF2D20' },
  { name: 'Shopify', title: <FaShopify size={50} />, color: '#95BF47' },
];

const WebTechStack = () => {
  return (
    <section className="py-5 position-relative our_technology" style={{ backgroundColor: '#0d0f1b' }}>
      <div className="container position-relative z-1 py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3 text-white">
            Technology and Platform <span className="web-dev-gradient-text">We Work With</span>
          </h2>
          <p className="fw-medium mb-3 fs-5" style={{ color: '#c084fc', letterSpacing: '1px' }}>
            Innovative Solutions, Diverse Platforms, Cutting-edge Technologies
          </p>
          <p className="text-secondary mx-auto fs-6" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
            From <strong>custom CMS development</strong> to <strong className="text-light">front-end development</strong>, we use the latest platforms to provide the best website services. Our stack includes HTML, CSS, JS Development, React, UI/UX tools, and more.
          </p>
        </motion.div>

        {/* 4x2 Bordered Grid matching the reference layout exactly, but dark */}
        <div className="mx-auto" style={{ maxWidth: '1100px' }}>
          <div className="tech-bordered-grid shadow-lg">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="tech-grid-cell"
              >
                <div
                  className="tech-grid-icon-lg fw-bolder d-flex align-items-center justify-content-center"
                  style={{ color: tech.color, textShadow: `0 0 20px ${tech.color}50` }}
                >
                  {tech.title}
                </div>
                <h4 className="tech-grid-name">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebTechStack;
