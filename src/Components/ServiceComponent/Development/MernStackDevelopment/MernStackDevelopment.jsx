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
import MernPricing from "./InnerComponents/MernPricing";
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
        <MernPricing />
      </div>

      <div style={{ backgroundColor: "#ffffff" }}>
        <BottomComponents />
      </div>
    </>
  );
};

export default MernStackDevelopment;
