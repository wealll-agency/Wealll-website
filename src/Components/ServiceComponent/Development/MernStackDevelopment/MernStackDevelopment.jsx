import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";

// MERN Stack Custom Components
import MernWhyChoose from "./InnerComponents/MernWhyChoose";
import MernServices from "./InnerComponents/MernServices";
import MernProcess from "./InnerComponents/MernProcess";
import MernAppSlider from "./InnerComponents/MernAppSlider";
import MernCTA from "./InnerComponents/MernCTA";
import MernPortfolio from "./InnerComponents/MernPortfolio";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiCode, FiSettings, FiDatabase, FiTrendingUp } from "react-icons/fi";
import "./InnerComponents/mern-dark.css";

const MernStackDevelopment = () => {
  return (
    <>
      <Intro
        title="Mern Stack Development"
        desc="MERN Stack Development is a full-stack web development framework that uses JavaScript for both the front-end and back-end. It is a popular choice for building dynamic and interactive web applications."
        defaultService="Development"
        defaultBudget="1L - 3L"
      />


      <div className="mern-content-area" style={{ backgroundColor: "#070913" }}>
        <MernWhyChoose />
        <MernServices />
        <MernProcess />
        <MernAppSlider />
        <MernCTA />
      </div>

      <div style={{ backgroundColor: "#ffffff" }}>
        <MernPortfolio />
      </div>

      <div className="mern-pricing-area" style={{ backgroundColor: "#070913" }}>
        <ServiceCTA 
            serviceName="MERN Stack Development"
            badgeIcon="⚡"
            badgeText="RESULTS DRIVEN MERN STACK DEVELOPMENT"
            title="Build Modern Web Apps"
            titlePreposition="with"
            titleHighlight="MERN Stack"
            description="Build fast, scalable, and feature-rich web applications with our MERN Stack development services. Using MongoDB, Express.js, React, and Node.js, we create custom web solutions that deliver seamless user experiences, powerful backend functionality, and exceptional performance for businesses of all sizes."
            features={[
                { icon: <FiCode />, text: "React Development" },
                { icon: <FiSettings />, text: "Node.js APIs" },
                { icon: <FiDatabase />, text: "MongoDB Database" },
                { icon: <FiTrendingUp />, text: "Scalable Solutions" }
            ]}
        />
      </div>

      <div style={{ backgroundColor: "#ffffff" }}>
        <BottomComponents />
      </div>
    </>
  );
};

export default MernStackDevelopment;
