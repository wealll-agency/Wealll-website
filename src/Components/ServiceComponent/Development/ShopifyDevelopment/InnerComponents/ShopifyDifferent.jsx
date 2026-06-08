import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUserCheck, FiTarget, FiStar, FiMaximize, FiZap, FiDollarSign, FiEye, FiMessageSquare } from 'react-icons/fi';
import './shopify-dark.css';

const diffData = [
  { icon: <FiHeart />, title: "Passionate", desc: "We hire Shopify experts who are not just tech enthusiasts but also love their work, ensuring the best results." },
  { icon: <FiUserCheck />, title: "Best Talent", desc: "Our team consists of developers with vast experience across various industries, ensuring high-quality output." },
  { icon: <FiTarget />, title: "Expertise", desc: "Our highly skilled developers focus on gaining skills in newer technologies to keep your store up-to-date." },
  { icon: <FiStar />, title: "Experience", desc: "Only highly experienced developers can truly value your investment and time. We bring a strong vision to every project." },
  { icon: <FiMaximize />, title: "Appropriate Size", desc: "Hire developers as per your requirement. We follow a scalable and flexible team model with transparent working." },
  { icon: <FiZap />, title: "Speedy Set-up", desc: "We can onboard projects quickly after finalizing requirements, initiating development in the minimum possible time." },
  { icon: <FiDollarSign />, title: "Cost Savings", desc: "Get highly cost-efficient Shopify developers with vast experience and quality expertise at We Alll." },
  { icon: <FiEye />, title: "Full Transparency", desc: "We follow agile methodology and sprint development with daily scrum meetings to ensure 100% transparency." },
  { icon: <FiMessageSquare />, title: "Easy Communication", desc: "Fluent communication across time zones. We are available on Skype, mail, or any platform you prefer." }
];

const ShopifyDifferent = () => {
  return (
    <section className="shopify-dark-section py-5">
      <div className="container py-5">
        <div className="row mb-5 align-items-end">
          <div className="col-lg-7">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="display-4 fw-bolder text-white mb-4"
            >
              What makes us <span className="shopify-title-gradient">different?</span>
            </motion.h2>
            <p className="text-secondary fs-5 mb-0">
              There are many Shopify Development Companies around the world. Here is why We Alll stands out from the competition.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
             <a href="#contact" className="shopify-btn-glow">
                TALK TO OUR EXPERTS
              </a>
          </div>
        </div>

        <div className="row g-4">
          {diffData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div 
                className="shopify-glow-card p-4 h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="shopify-diff-icon">
                  {item.icon}
                </div>
                <h4 className="fw-bold text-white mb-3">{item.title}</h4>
                <p className="text-secondary small lh-lg mb-0">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyDifferent;
