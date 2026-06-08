import React from 'react';
import { motion } from 'framer-motion';
import { SiGoogleanalytics, SiGoogle, SiGooglechrome, SiSemrush } from 'react-icons/si';
import { FiTrendingUp, FiActivity } from 'react-icons/fi';
import './seo-dark.css';

const seoTools = [
  { name: 'Google Analytics', title: <SiGoogleanalytics size={50} />, color: '#F4B400' },
  { name: 'Search Console', title: <SiGoogle size={50} />, color: '#4285F4' },
  { name: 'Google Trends', title: <SiGooglechrome size={50} />, color: '#0F9D58' },
  { name: 'SE Ranking', title: <FiTrendingUp size={50} />, color: '#4facfe' },
  { name: 'SEMRUSH', title: <SiSemrush size={50} />, color: '#E87722' },
  { name: 'MOZ', title: <FiActivity size={50} />, color: '#33AAA6' },
];

const SEOToolsAndAudit = () => {
  return (
    <section className="seo-tools-section py-5 position-relative border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="container position-relative z-1 py-5">

        {/* --- Tools Grid exactly replicating Laravel pattern --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bolder text-white mb-4 lh-sm">
            Top Rated Tools we use to <span className="seo-title-gradient">Rank you Better</span>
          </h2>
        </motion.div>

        {/* 3x2 Bordered Grid matching the precise structural logic of LaravelTechStack.jsx */}
        <div className="mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="seo-tech-bordered-grid shadow-lg">
            {seoTools.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="seo-tech-grid-cell"
              >
                <div
                  className="seo-tech-grid-icon-lg fw-bolder d-flex align-items-center justify-content-center"
                  style={{ color: tech.color, textShadow: `0 0 20px ${tech.color}50` }}
                >
                  {tech.title}
                </div>
                <h4 className="seo-tech-grid-name">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Free Website Audit Form --- */}
        <div className="mx-auto text-center mt-5 pt-5 free_audit" style={{ maxWidth: '800px' }}>
          <h2 className="display-5 fw-bolder text-white mb-5">
            Get <span className="seo-title-gradient">Free Website Audit</span>
          </h2>
          <form className="seo-audit-form d-flex flex-column flex-md-row gap-3 justify-content-center">
            <input type="text" className="seo-form-input" placeholder="Full Name *" required />
            <input type="tel" className="seo-form-input" placeholder="Phone No *" required />
            <button type="button" className="seo-primary-btn ms-md-2">Get Report</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default SEOToolsAndAudit;
