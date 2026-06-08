import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import "./woocommerce-dark.css";

const WoocommerceWhyChoose = () => {
  return (
    <section className="woo-dark-section py-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          {/* Left Side */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h4
                className="text-primary fw-bold text-uppercase mb-3"
                style={{ letterSpacing: "2px", fontSize: "14px" }}
              >
                Elite WooCommerce Agency
              </h4>
              <h2 className="display-4 fw-bolder text-white mb-4">
                Why choose <span className="woo-title-gradient">We Alll</span>{" "}
                for WooCommerce?
              </h2>
              <p className="text-secondary fs-5 lh-lg mb-5">
                Build a store that converts. We combine technical excellence
                with strategic growth models to deliver stores that not only
                look premium but perform flawlessly.
              </p>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="row g-3">
              {[
                {
                  title: "Legacy of Excellence",
                  desc: "Trusted by global brands for over a decade, we deliver results-driven solutions.",
                },
                {
                  title: "Certified Developers",
                  desc: "Our team masters the ecosystem to build highly scalable online stores.",
                },
                {
                  title: "Conversion Focused",
                  desc: "Every decision is data-backed to ensure visitors become loyal customers.",
                },
                {
                  title: "Lifetime Support",
                  desc: "Long-term partners providing optimization and security to keep you ahead.",
                },
              ].map((item, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="woo-glow-card p-4 h-100">
                    <div className="d-flex align-items-center mb-3">
                      <FiCheckCircle className="text-primary fs-5 me-2 flex-shrink-0" />
                      <h6 className="fw-bold text-white mb-0">{item.title}</h6>
                    </div>
                    <p className="text-secondary small mb-0 opacity-75 lh-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoocommerceWhyChoose;
