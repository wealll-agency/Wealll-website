import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import "./shopify-dark.css";

const ShopifyWhyChoose = () => {
  const benefits = [
    {
      title: "eCommerce Expertise",
      desc: "Our eCommerce expertise can be traced back to more than 12+ years ago, ensuring accurate and prompt services.",
    },
    {
      title: "Certified Experts",
      desc: "Our team of Shopify eCommerce development experts will help you in offering an unmatchable shopping experience.",
    },
    {
      title: "End-to-End Services",
      desc: "We offer all kinds of Shopify services like Store Development, Theme Development, Custom Solutions, and more.",
    },
    {
      title: "Global Vision",
      desc: "Serving digital stores with accurate, affordable, and high-quality development solutions globally.",
    },
  ];

  return (
    <section className="shopify-dark-section py-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          {/* Left Side */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4
                className="text-uppercase mb-3"
                style={{ color: "var(--shopify-accent)", letterSpacing: "2px", fontSize: "14px", fontWeight: "700" }}
              >
                Premier Shopify Agency
              </h4>
              <h2 className="display-4 fw-bolder text-white mb-4">
                Why choose <span className="shopify-title-gradient">We Alll</span>{" "}
                for Shopify Development?
              </h2>
              <p className="text-secondary fs-5 lh-lg mb-4">
                Are you planning to build your dream eCommerce store? You are at the right place. We Alll, the leading Shopify Development Company, will give wings to your ideas for your dream store.
              </p>
              <p className="text-secondary fs-6 mb-5 opacity-75">
                We Alll provides end-to-end high quality Shopify Ecommerce Development Services. Our impeccable technical skills help you in offering an unmatchable shopping experience to the end-users.
              </p>
              <a href="#contact" className="shopify-btn-glow">
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="row g-3">
              {benefits.map((item, idx) => (
                <div className="col-md-6" key={idx}>
                  <motion.div 
                    className="shopify-glow-card p-4 h-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <FiCheckCircle style={{ color: "var(--shopify-accent)", fontSize: "1.25rem" }} className="me-2 flex-shrink-0" />
                      <h6 className="fw-bold text-white mb-0">{item.title}</h6>
                    </div>
                    <p className="text-secondary small mb-0 opacity-75 lh-base">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyWhyChoose;
