import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiBarChart2, FiSettings } from 'react-icons/fi';
import './seo-dark.css';

const SEOProcess = () => {
  const steps = [
    {
      icon: <FiSearch size={40} />,
      title: "Keyword Research",
      desc: "To achieve success in SEO, using the right keywords is crucial. It's about optimizing your title tags and including relevant keywords throughout your content for maximum relevance. Add appropriate keywords in the alt text for any images uploaded to your website.",
      delay: 0.1,
      color: "#00f2fe"
    },
    {
      icon: <FiBarChart2 size={40} />,
      title: "Industry Analysis",
      desc: "SEO strategies focus on the tactics necessary for your specific website and extend beyond to analyze your target industry and competitors. Attain valuable insights into what works in the industry, competitive insights such as branding, usability, link popularity, and more.",
      delay: 0.3,
      color: "#b026ff"
    },
    {
      icon: <FiSettings size={40} />,
      title: "Technical Optimization",
      desc: "Technical SEO is all about ensuring search engines can easily find and crawl your website; this includes ensuring no errors, clean and efficient coding, and the necessary steps to index your site accurately in the search engine's databases.",
      delay: 0.5,
      color: "#4facfe"
    }
  ];

  return (
    <section className="seo-process-section">
      <div className="container position-relative z-2">
        <div className="text-center mb-5 pb-4">
          <h2 className="seo-section-title">
            How Does <span className="seo-title-gradient">SEO Work?</span>
          </h2>
          <p className="seo-normal-text mx-auto mt-3" style={{ maxWidth: '800px' }}>
            Search Engine Optimization is not a single-time effort and is more than simply hitting publish. It involves many important, ongoing tactics and strategies, including:
          </p>
        </div>

        <div className="row g-5 justify-content-center">
          {steps.map((step, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
                className="seo-isometric-card h-100"
                style={{ '--card-color': step.color }}
              >
                <div className="iso-card-border-top"></div>
                <div className="iso-card-icon-wrapper">
                  {step.icon}
                  <div className="iso-icon-glow"></div>
                </div>
                <h3 className="iso-card-title">{step.title}</h3>
                <p className="iso-card-desc">{step.desc}</p>
                <div className="iso-card-number">0{index + 1}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background grid texture */}
      <div className="seo-bg-grid-overlay"></div>
    </section>
  );
};

export default SEOProcess;
