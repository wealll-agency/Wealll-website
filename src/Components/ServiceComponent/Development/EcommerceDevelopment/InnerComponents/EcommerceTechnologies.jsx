import React, { useState } from 'react';
import './ecommerce-dark.css';

const techData = {
  Frontend: [
    { name: 'React', desc: 'Component-driven UI', icon: '⚛️' },
    { name: 'Next.js', desc: 'Server-rendered React', icon: 'N' },
    { name: 'Vue.js', desc: 'Progressive framework', icon: 'V' },
    { name: 'AngularJS', desc: 'Enterprise UI solutions', icon: 'A' },
  ],
  Backend: [
    { name: 'PHP', desc: 'Dynamic web development', icon: '🐘' },
    { name: 'Node.js', desc: 'Real-time scalable apps', icon: '❇️' },
    { name: 'MySQL', desc: 'Robust database systems', icon: '🐬' },
    { name: 'MongoDB', desc: 'Flexible schema DB', icon: '🍃' },
  ],
  Integrations: [
    { name: 'Stripe', desc: 'Payment processing', icon: '💳' },
    { name: 'PayPal', desc: 'Global transactions', icon: 'P' },
    { name: 'Cloudinary', desc: 'Media management', icon: '🖼️' },
    { name: 'Algolia', desc: 'Search & discovery', icon: '⚡' },
  ],
  Cloud: [
    { name: 'AWS', desc: 'Amazon Web Services', icon: '☁️' },
    { name: 'Google Cloud', desc: 'GCP infrastructure', icon: 'G' },
    { name: 'Azure', desc: 'Microsoft Cloud Services', icon: 'A' },
    { name: 'Vercel', desc: 'Frontend deployment', icon: '▲' },
  ]
};

const tabs = ['Frontend', 'Backend', 'Integrations', 'Cloud'];

const EcommerceTechnologies = () => {
  const [activeTab, setActiveTab] = useState('Backend');

  return (
    <section className="ecom-tech-v3-section pb-5 pt-4">
      <div className="container position-relative z-1 pt-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bolder text-white mb-4">
            Technologies We Use For <br />
            <span className="ecom-title-gradient">E-commerce</span>
          </h2>
        </div>

        {/* 1:1 Reference Tabs Layout */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="ecom-horizontal-tabs">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`ecom-tech-tab-v3 ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="tab-label">{tab}</span>
                  {activeTab === tab && <div className="tab-indicator"></div>}
                </div>
              ))}
            </div>
            <div className="ecom-tab-spacer"></div>
          </div>
        </div>

        {/* Clean 4-Column Grid (Instant Swap) */}
        <div className="row g-4 mt-2">
          {techData[activeTab].map((tech, index) => (
            <div className="col-lg-3 col-md-6" key={`${activeTab}-${index}`}>
              <div className="ecom-tech-card-v3">
                <div className="p-4 h-100">
                  <div className="ecom-tech-icon-v3 mb-4">
                    {tech.icon}
                  </div>
                  <h4 className="fw-bold text-white mb-3">{tech.name}</h4>
                  <p className="text-secondary small mb-4">{tech.desc}</p>
                  <a href="#contact" className="ecom-tech-learn-more">
                    Learn more <span className="ms-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceTechnologies;
