import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiGlobe, FiDatabase, FiTrendingUp, FiAward, FiSearch } from 'react-icons/fi';
import './seo-dark.css';

const SEOWhyChoose = () => {
  return (
    <section className="seo-whychoose-section position-relative">
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          
          {/* Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <h2 className="seo-section-title mb-4">
              Why Choose an <span className="seo-title-gradient">SEO Company</span><br/>in India?
            </h2>
            
            <p className="seo-lead-text mb-4">
              Do you have any further questions about hiring an SEO agency? The simple answer is that SEO effectively generates traffic, leads, and sales. Don't worry; the long answer has research and data, not just empty claims.
            </p>
            
            <p className="seo-normal-text mb-4">
              SEOs must actively pursue search-specific metrics like SERPs (search engine results pages), ranks, and organic traffic. The reality is that SEOs need to focus on the same objectives as any other digital marketing discipline: leads, sales, and customers.
            </p>
            
            <p className="seo-normal-text mb-4">
              SEO isn't going away anytime soon. It's only becoming more important as Google continues to refine its algorithm and personalizes search results even further.
            </p>

            {/* Quick value props beneath text */}
            <div className="d-flex flex-wrap gap-4 mt-5">
              <div className="d-flex align-items-center gap-3">
                <div className="seo-icon-box">
                  <FiTarget size={24} color="#00f2fe" />
                </div>
                <span className="fw-bold fs-6">Targeted Leads</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="seo-icon-box">
                  <FiGlobe size={24} color="#4facfe" />
                </div>
                <span className="fw-bold fs-6">Global SERP</span>
              </div>
            </div>
          </div>

          {/* Static SEO Intelligence Console */}
          <div className="col-lg-6">
            <div className="seo-console-viewport">
              
              {/* Technical Blueprint Backdrop */}
              <div className="console-blueprint-grid"></div>

              <div className="console-main-frame">
                
                {/* Header HUD */}
                <div className="console-hud-header">
                  <div className="hud-line"></div>
                  <div className="hud-label">SEO ANALYTICS v4.0</div>
                  <div className="hud-line"></div>
                </div>

                {/* Intelligence Tile Grid */}
                <div className="console-tile-grid">
                  
                  <div className="console-tile tile-1">
                    <div className="tile-icon-wrap"><FiDatabase /></div>
                    <div className="tile-content">
                      <span className="tile-label">BIG DATA INDEX</span>
                      <span className="tile-value">99.8%</span>
                    </div>
                  </div>

                  <div className="console-tile tile-2">
                    <div className="tile-icon-wrap"><FiTarget /></div>
                    <div className="tile-content">
                      <span className="tile-label">SEARCH VELOCITY</span>
                      <span className="tile-value">+145%</span>
                    </div>
                  </div>

                  <div className="console-tile tile-3">
                    <div className="tile-icon-wrap"><FiGlobe /></div>
                    <div className="tile-content">
                      <span className="tile-label">GLOBAL REACH</span>
                      <span className="tile-value">TOP 3</span>
                    </div>
                  </div>
                  
                  {/* Center Hub Overlay */}
                  <div className="console-center-hub">
                    <div className="hub-outer">
                      <div className="hub-inner">
                        <span className="hub-text">SEO</span>
                        <div className="hub-ring"></div>
                      </div>
                    </div>
                  </div>

                  <div className="console-tile tile-4">
                    <div className="tile-icon-wrap"><FiTrendingUp /></div>
                    <div className="tile-content">
                      <span className="tile-label">ROI IMPACT</span>
                      <span className="tile-value">3.5x</span>
                    </div>
                  </div>

                  <div className="console-tile tile-5">
                    <div className="tile-icon-wrap"><FiAward /></div>
                    <div className="tile-content">
                      <span className="tile-label">TRUST SCORE</span>
                      <span className="tile-value">A+</span>
                    </div>
                  </div>

                  <div className="console-tile tile-6">
                    <div className="tile-icon-wrap"><FiSearch /></div>
                    <div className="tile-content">
                      <span className="tile-label">LATENCY INDEX</span>
                      <span className="tile-value">0.4s</span>
                    </div>
                  </div>

                </div>

                {/* Footer Digital Readout */}
                <div className="console-footer-readout">
                   <div className="readout-item">
                      <div className="dot"></div>
                      SYSTEM STABLE
                   </div>
                   <div className="readout-item">
                      <div className="dot active"></div>
                      DATA SYNCED
                   </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background ambient light */}
      <div className="seo-ambient-light" style={{ top: '20%', right: '10%', background: 'rgba(0, 242, 254, 0.05)' }}></div>
    </section>
  );
};

export default SEOWhyChoose;
