import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiLayers, FiEye, FiUserCheck, FiBox, FiPieChart } from 'react-icons/fi';
import './ecommerce-dark.css';

// User-provided Assets
import solutionImg1 from '../../../../../assets/images/solution_img1.webp';
import solutionImg2 from '../../../../../assets/images/solution_img2.webp';
import solutionImg3 from '../../../../../assets/images/solution_img3.webp';
import solutionImg4 from '../../../../../assets/images/solution_img4.webp';
import solutionImg5 from '../../../../../assets/images/solution_img5.webp';

const aiFeatures = [
  {
    id: 1,
    icon: <FiSearch />,
    title: "Advanced Search",
    desc: "WAC AI search incorporates the power of AI in advance search for accurate and lightning-fast results to the customers.",
    img: solutionImg1
  },
  {
    id: 2,
    icon: <FiLayers />,
    title: "AI-Enabled Similar Products",
    desc: "With similar product modules, we bring the most relevant similar products to the users. Our algorithm ranks top for the best accurate suggestions.",
    img: solutionImg2
  },
  {
    id: 3,
    icon: <FiEye />,
    title: "Visual Merchandising",
    desc: "Using a visual system, we make merchandising streamlined, easy, and seamless while making the store stand out and attract customers.",
    img: solutionImg3
  },
  {
    id: 4,
    icon: <FiUserCheck />,
    title: "Personalised Recommendations",
    desc: "Through an AI system, we recommend the most accurate products to the customers according to their buying behaviour.",
    img: solutionImg4
  },
  {
    id: 5,
    icon: <FiBox />,
    title: "Order Management System",
    desc: "WAC Order Management System helps businesses run complex omnichannel delivery operations accurately and in a well-managed manner.",
    img: solutionImg5
  },
  {
    id: 6,
    icon: <FiPieChart />,
    title: "Search Insights/Analytics",
    desc: "With the AI-based analytics and insights engine, we keep track of user searches which helps in designing strategic sales & marketing drives.",
    img: solutionImg1 
  }
];

const EcommerceAI = () => {
  const [activeId, setActiveId] = useState(1);
  const activeTab = aiFeatures.find(f => f.id === activeId);

  const handleTabClick = (id) => {
    setActiveId(id);
  };

  return (
    <section className="ecom-ai-v2-section py-5 z-1">
      <div className="container py-5">
        
        <div className="text-center mb-5 pb-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-4 fw-bolder text-white mb-4">
              Next-gen Ecommerce Solutions <br />
              <span className="ecom-title-gradient">with AI</span>
            </h2>
            <p className="fs-5 text-secondary mx-auto lh-lg" style={{ maxWidth: '800px' }}>
              WAC introduces an innovative yet high-value Adobe Commerce extension known as 'WAC Commerce', that powers the online stores to ensure extended functionalities and advanced technologies to help your business thrive in the modern digital age.
            </p>
          </motion.div>
        </div>

        <div className="row align-items-center mt-4">
          {/* Left Side: Vertical Tabs (Manual) */}
          <div className="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
            <div className="ecom-ai-v2-tabs">
              {aiFeatures.map((feature) => (
                <div 
                  key={feature.id}
                  className={`ecom-ai-v2-tab-item ${activeId === feature.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(feature.id)}
                >
                  <div className="d-flex align-items-start">
                    <div className="ecom-ai-v2-tab-icon me-3 mt-1">
                      {feature.icon}
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="ecom-ai-v2-tab-title mb-1">{feature.title}</h4>
                      
                      <div className="ecom-ai-v2-accordion-wrapper" style={{ 
                        height: activeId === feature.id ? 'auto' : '0',
                        opacity: activeId === feature.id ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.4s ease'
                      }}>
                        <p className="ecom-ai-v2-tab-desc mt-2 mb-3">
                           {feature.desc}
                        </p>
                        <div className="ecom-ai-v2-progress-bg">
                           <div className="ecom-ai-v2-progress-bar" style={{ width: activeId === feature.id ? '100%' : '0%' }}></div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Mockup Image Display */}
          <div className="col-lg-7 ps-lg-4">
            <div className="ecom-ai-v2-image-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-100 h-100 d-flex align-items-center justify-content-center"
                >
                  <img
                    src={activeTab.img}
                    alt={activeTab.title}
                    className="img-fluid ecom-mockup-shadow"
                    style={{ maxHeight: '500px', objectFit: 'contain' }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcommerceAI;
