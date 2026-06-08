import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiTarget,
  FiLayers,
  FiEdit3,
  FiCheckCircle,
  FiSearch as FiSeo,
  FiLifeBuoy,
} from "react-icons/fi";
import "./shopify-dark.css";

const steps = [
  {
    id: 1,
    icon: <FiSearch />,
    label: "Discover",
    desc: "We Alll will gain an understanding of your goals and vision for your E-commerce business by examining various features and functionalities needed for your store.",
  },
  {
    id: 2,
    icon: <FiTarget />,
    label: "Strategise",
    desc: "After discovering your goals, we devise a strategy for accomplishing them. This entails determining the necessary actions and establishing a realistic timeline.",
  },
  {
    id: 3,
    icon: <FiLayers />,
    label: "Structure",
    desc: "During this phase, our development team works with you to determine the project scope, define requirements, and create a detailed plan for the development process.",
  },
  {
    id: 4,
    icon: <FiEdit3 />,
    label: "Create",
    desc: "The next crucial stage is the 'Creation' phase, during which we will transform your envisioned E-commerce Store into a tangible, high-performing reality.",
  },
  {
    id: 5,
    icon: <FiCheckCircle />,
    label: "Quality",
    desc: "We promise quality across all stages of your e-commerce project, ensuring a dependable, bug-free, and seamless online shopping experience.",
  },
  {
    id: 6,
    icon: <FiSeo />,
    label: "SEO",
    desc: "Enhance your digital presence with our tailored SEO strategies, attracting increased organic traffic and higher conversion rates to your e-commerce site.",
  },
  {
    id: 7,
    icon: <FiLifeBuoy />,
    label: "Support",
    desc: "We continue to provide comprehensive support services for your e-commerce store, even after launch, to ensure long-term stability and growth.",
  },
];

const ShopifyApproach = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="shopify-dark-section shopify-approach py-5">
      <div className="container py-5">
        <div className="text-center mb-5 pb-5">
          <h2 className="display-4 fw-bolder text-white">
            Our <span className="shopify-title-gradient">Approach</span>
          </h2>
          <p className="text-secondary mt-3">
            A systematic process to ensure your Shopify success.
          </p>
        </div>

        <div className="shopify-process-stepper mb-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="d-flex flex-column align-items-center"
              style={{ width: "120px", cursor: "pointer", zIndex: 2 }}
              onClick={() => setActiveTab(step.id)}
            >
              <div
                className={`shopify-step-dot ${activeTab === step.id ? "active" : ""}`}
                style={{
                  backgroundColor:
                    activeTab === step.id
                      ? "var(--shopify-accent)"
                      : "rgba(255,255,255,0.05)",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: activeTab === step.id ? "#000" : "#8b9bb4",
                  }}
                >
                  {step.icon}
                </span>
              </div>
              <span
                className={`mt-3 small fw-bold text-center ${activeTab === step.id ? "text-white" : "text-secondary"}`}
              >
                {step.label}
              </span>
            </div>
          ))}
          {/* Connector Line */}
          <div
            className="position-absolute w-100"
            style={{
              height: "2px",
              background: "var(--shopify-glass-border)",
              top: "25px",
              left: "0",
              zIndex: 1,
            }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="shopify-glow-card p-5 text-center">
              <div
                className="mb-4 d-inline-block p-3 rounded-circle"
                style={{
                  background: "var(--shopify-accent)",
                  color: "#000",
                  fontSize: "2rem",
                }}
              >
                {steps.find((s) => s.id === activeTab).icon}
              </div>
              <h3 className="fw-bold text-white mb-4">
                {steps.find((s) => s.id === activeTab).label} Phase
              </h3>
              <p className="text-secondary fs-5 lh-lg mb-0">
                {steps.find((s) => s.id === activeTab).desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyApproach;
