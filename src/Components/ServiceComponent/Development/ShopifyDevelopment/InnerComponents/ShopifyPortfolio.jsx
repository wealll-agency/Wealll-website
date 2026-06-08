import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './shopify-dark.css';

// Using existing assets
import port1 from '../../../../../assets/images/portfolio_website1.jpg';
import port2 from '../../../../../assets/images/portfolio_website2.jpg';
import port3 from '../../../../../assets/images/portfolio_website3.jpg';
import port4 from '../../../../../assets/images/portfolio_website4.jpg';

const categories = ["All", "Shopify Plus", "Custom Themes", "App Integrations"];

const portfolioData = [
  { id: 1, title: 'Nordic Fashion Hub', category: 'Shopify Plus', img: port1 },
  { id: 2, title: 'Organic Glow Store', category: 'Custom Themes', img: port2 },
  { id: 3, title: 'FitSync App Connect', category: 'App Integrations', img: port3 },
  { id: 4, title: 'Urban Tech Shop', category: 'Custom Themes', img: port4 },
  { id: 5, title: 'Premium Decor Pro', category: 'Shopify Plus', img: port1 },
  { id: 6, title: 'Pure Green Mart', category: 'Custom Themes', img: port2 },
  { id: 7, title: 'Digital Asset Bridge', category: 'App Integrations', img: port3 },
  { id: 8, title: 'Elite Watch Gallery', category: 'Shopify Plus', img: port4 },
];

const ShopifyPortfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <section className="shopify-portfolio-section py-5" style={{ backgroundColor: '#070913' }}>
      <div className="container-fluid px-4 py-5">
        <div className="text-center mb-5 pb-3">
          <h2 className="display-4 fw-bold mb-3 text-white">
            Our Shopify <span className="shopify-title-gradient">Portfolio</span>
          </h2>
          <p className="text-secondary mx-auto fs-5 mb-2" style={{ maxWidth: '800px' }}>
             Showcasing our excellence in crafting world-class Shopify experiences.
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className="px-4 py-2"
              style={{ 
                borderRadius: '50px', 
                border: `1px solid ${activeTab === cat ? 'var(--shopify-accent)' : 'rgba(255,255,255,0.1)'}`, 
                background: activeTab === cat ? 'var(--shopify-accent)' : 'transparent', 
                color: activeTab === cat ? '#000' : '#fff', 
                transition: '0.3s',
                fontWeight: '600'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row gy-5 mx-0 w-100">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="col-12 col-md-6 col-lg-4 col-xl-3"
              >
                <div className="d-flex flex-column h-100 gap-3 group">
                  <div className="rounded-4 overflow-hidden position-relative" style={{ height: '400px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <img src={item.img} alt={item.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-opacity" style={{ background: 'rgba(149, 191, 71, 0.4)', pointerEvents: 'none' }}>
                        <span className="btn text-black rounded-pill px-4 py-2" style={{ background: 'var(--shopify-accent)', fontWeight: '700' }}>View Project</span>
                    </div>
                  </div>
                  <div className="px-2">
                    <span className="fw-semibold text-uppercase d-block mb-1" style={{ color: 'var(--shopify-accent)', fontSize: '13px', letterSpacing: '1px' }}>{item.category}</span>
                    <h3 className="fs-5 fw-bold text-white mb-0">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyPortfolio;
