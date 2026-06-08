import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiSearch, FiLayout, FiSettings, FiEdit3, FiLink } from 'react-icons/fi';
import './seo-dark.css';

const SEORanking = () => {
  const rankingTasks = [
    { title: "Competitor Analysis", icon: <FiTrendingUp size={30} />, delay: 0 },
    { title: "Keyword Research", icon: <FiSearch size={30} />, delay: 0.1 },
    { title: "ON-Page Optimization", icon: <FiLayout size={30} />, delay: 0.2 },
    { title: "Technical SEO", icon: <FiSettings size={30} />, delay: 0.3 },
    { title: "Content Optimization", icon: <FiEdit3 size={30} />, delay: 0.4 },
    { title: "OFF Page Optimization", icon: <FiLink size={30} />, delay: 0.5 },
  ];

  return (
    <section className="seo-ranking-section">
      <div className="container position-relative z-2">
        <div className="text-center mb-5 pb-3">
          <h2 className="seo-section-title text-white mb-4">
            Ranking Your Business on the <br/>
            <span className="seo-title-gradient">1st Page of Google</span>
          </h2>
          <p className="seo-normal-text mx-auto" style={{ maxWidth: '900px' }}>
            SEO is an ongoing process that needs consistent efforts. We Alll's online marketing team stays updated with the latest trends and innovative ideas in the industry, ensuring the best business growth. 
          </p>
          <p className="seo-normal-text mx-auto mt-2" style={{ maxWidth: '900px' }}>
            Being one of the most trusted <strong>SEO companies</strong>, we accept your business's challenges for seamless growth. Our expert consultants and professionals bring various SEO Services with proven capacities to increase revenue and sales.
          </p>
        </div>

        {/* 6 Grid layout */}
        <div className="row g-4 justify-content-center">
          {rankingTasks.map((task, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: task.delay }}
                className="seo-space-card d-flex align-items-center"
              >
                <div className="space-card-icon">
                  {task.icon}
                </div>
                <h4 className="space-card-title m-0 ps-3">{task.title}</h4>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 pt-3">
          <button className="seo-primary-btn">Talk to our SEO experts today!</button>
        </div>
      </div>
    </section>
  );
};

export default SEORanking;
