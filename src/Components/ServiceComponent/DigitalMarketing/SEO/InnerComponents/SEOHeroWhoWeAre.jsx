import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiSearch, FiAward } from 'react-icons/fi';
import './seo-dark.css';

const SEOHeroWhoWeAre = () => {
  return (
    <section className="seo-hero-section">
      <div className="container">
        <div className="seo-hero-grid">
          
          {/* Left: Content */}
          <div className="seo-hero-text-content">
            <h1 className="seo-hero-title">
              Who We Are?
            </h1>
            <h2 className="seo-hero-subtitle">
              We are Top <span className="seo-title-gradient">SEO Consultants</span> in India!
            </h2>
            
            <p className="seo-hero-desc">
              <strong>We Alll</strong>, established as a trusted and growing SEO company, is committed to delivering high-quality SEO and digital growth solutions for businesses. With our standardized approach, we focus on transparency, strategic execution, and measurable results that help brands strengthen their online presence and achieve sustainable business growth.
            </p>
            
            <p className="seo-hero-desc">
              <strong>We Alll</strong> is a premier SEO and digital marketing company that helps businesses improve search visibility, lead generation, and website performance. Our team works across technical SEO, content strategy, local SEO, and conversion-focused optimization to support measurable business growth. We combine practical execution with clear reporting so you understand what is being improved and why it matters.
            </p>

            <div className="seo-badges-row">
              <div className="seo-badge-item">
                <FiAward color="#4facfe" size={20} />
                <span>Certified Experts</span>
              </div>
              <div className="seo-badge-item">
                <FiTrendingUp color="#b026ff" size={20} />
                <span>Proven ROI</span>
              </div>
              <div className="seo-badge-item">
                <FiSearch color="#4facfe" size={20} />
                <span>Google Partners</span>
              </div>
            </div>
          </div>

          {/* Right: Search Intelligence Hub */}
          <div className="seo-search-hub">
            <div className="hub-perspective">
              
              {/* Main Holographic surface */}
              <div className="hub-surface">
                
                {/* Header Stats */}
                <div className="hub-header">
                  <div className="hub-badge">AI INSIGHTS</div>
                  <div className="hub-status">
                    <span className="status-dot"></span>
                    Live Analysis
                  </div>
                </div>

                {/* Main Graph Component */}
                <div className="hub-graph-container">
                  <div className="hub-graph-title">Keyword Dominance</div>
                  <div className="hub-main-viz">
                    <svg viewBox="0 0 400 150" className="hub-svg-graph">
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor: '#00f2fe', stopOpacity: 0.2}} />
                          <stop offset="100%" style={{stopColor: '#b026ff', stopOpacity: 0.8}} />
                        </linearGradient>
                      </defs>
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,120 Q50,110 80,40 T160,80 T240,20 T320,60 T400,10" 
                        fill="none" 
                        stroke="url(#grad)" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                      />
                      <motion.path 
                        style={{ opacity: 0.3 }}
                        d="M0,120 Q50,110 80,40 T160,80 T240,20 T320,60 T400,10 V150 H0 Z" 
                        fill="url(#grad)" 
                      />
                    </svg>
                    
                    {/* Floating Tooltips or data points */}
                    <div className="hub-data-point" style={{top: '25%', left: '20%'}}>
                      <div className="point-ring"></div>
                      <div className="point-card">TOP 1</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Metrics */}
                <div className="hub-footer">
                   <div className="hub-metric">
                      <span className="metric-label">Site Health</span>
                      <div className="metric-bar">
                        <div className="metric-fill" style={{width: '94%'}}></div>
                      </div>
                   </div>
                   <div className="hub-metric">
                      <span className="metric-label">ROI Impact</span>
                      <div className="metric-val">+320%</div>
                   </div>
                </div>

              </div>

              {/* Auxiliary Floating Elements */}
              <div className="hub-floating-card card-1">
                <FiTrendingUp color="#00f2fe" />
                <span>+45% MoM</span>
              </div>
              
              <div className="hub-floating-card card-2">
                <FiSearch color="#b026ff" />
                <span>High Intent</span>
              </div>

              {/* Ambient holographic particles */}
              <div className="hub-particle p-1"></div>
              <div className="hub-particle p-2"></div>
              <div className="hub-particle p-3"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOHeroWhoWeAre;
