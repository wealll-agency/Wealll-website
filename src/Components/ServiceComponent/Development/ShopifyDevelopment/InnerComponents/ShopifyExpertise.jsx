import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiPlusCircle, FiRepeat, FiSmartphone, FiShield, FiCode, FiArrowUpCircle, FiCornerRightUp, FiHeadphones } from 'react-icons/fi';
import './shopify-dark.css';

const expertise = [
  { icon: <FiLayout />, title: "Shopify Theme Development", desc: "Create a captivating user interface of your store front-end by allowing us to develop custom Shopify themes as per your industry niche." },
  { icon: <FiPlusCircle />, title: "Shopify Extensions Development", desc: "Do you need to extend the functionality of your Shopify Store? Let us develop custom Shopify extensions as per your requirement." },
  { icon: <FiRepeat />, title: "Migration to Shopify", desc: "Do you have an e-commerce store on any other platform and want to switch to Shopify? We can definitely migrate your existing store to the robust platform." },
  { icon: <FiSmartphone />, title: "Responsive Shopify Store", desc: "Nearly 50% of users are on mobile. We develop highly responsive Shopify stores for serving your mobile users faster and more effectively." },
  { icon: <FiShield />, title: "Custom Shopify Development", desc: "Whatever your requirements are, you can trust We Alll for delivering high-performance custom Shopify online portals tailored to your needs." },
  { icon: <FiCode />, title: "Shopify Module Development", desc: "Our expert Shopify developers can build custom modules for your store. These modules will distinguish yourself from your competitors." },
  { icon: <FiArrowUpCircle />, title: "Shopify Version Upgrade", desc: "Is your store running on an older version? Our Shopify developers can upgrade it to the latest version in the minimum possible time." },
  { icon: <FiCornerRightUp />, title: "Shopify Store From Scratch", desc: "If you wish to begin your e-commerce journey, Shopify is the best choice. We can help you in developing a robust Shopify store from the ground up." },
  { icon: <FiHeadphones />, title: "Support & Maintenance", desc: "We provide comprehensive support and maintenance services for keeping your store up to date and ensuring smooth, uninterrupted performance." }
];

const ShopifyExpertise = () => {
  return (
    <section className="shopify-dark-section py-5">
      <div className="container py-5">
        <div className="text-center mb-5 pb-3">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="display-5 fw-bolder text-white"
          >
            We Alll's Shopify E-commerce <span className="shopify-title-gradient">Developers Expertise</span>
          </motion.h2>
          <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '750px' }}>
            Our highly experienced & excellent team of certified Shopify experts creates swift and secure online stores for multifaceted businesses across the globe.
          </p>
        </div>

        <div className="row g-4">
          {expertise.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div 
                className="shopify-glow-card p-4 h-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="shopify-expert-icon">
                  {item.icon}
                </div>
                <h4 className="fw-bold text-white mb-3">{item.title}</h4>
                <p className="text-secondary small lh-lg">
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

export default ShopifyExpertise;
