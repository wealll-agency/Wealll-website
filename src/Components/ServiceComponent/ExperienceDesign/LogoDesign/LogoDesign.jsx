import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import LogoServices from "./InnerComponents/LogoServices";
import LogoProcess from "./InnerComponents/LogoProcess";
import LogoStyles from "./InnerComponents/LogoStyles";
import LogoPortfolio from "./InnerComponents/LogoPortfolio";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiPenTool, FiEdit3, FiHexagon, FiStar } from "react-icons/fi";

const LogoDesign = () => {
  return (
    <>
      <Intro
        title="Logo Designing"
        desc="A logo is the face of your brand. I design unique, modern, and memorable logos that represent your business identity and build strong brand recognition."
        defaultService="Experience Design"
        defaultBudget="1L - 3L"
      />

      <LogoServices />
      <LogoProcess />
      <LogoStyles />
      <LogoPortfolio />
      <ServiceCTA 
        serviceName="Logo Design"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN LOGO DESIGN"
        title="Let's Build Your Brand"
        titlePreposition="with"
        titleHighlight="Logo Design"
        description="Create a distinctive logo that captures your brand's personality and leaves a lasting impression. Our custom logo designs combine creativity, strategy, and timeless aesthetics to help your business stand out in a competitive market."
        features={[
          { icon: <FiPenTool />, text: "Custom Branding" },
          { icon: <FiEdit3 />, text: "Creative Concepts" },
          { icon: <FiHexagon />, text: "Unique Designs" },
          { icon: <FiStar />, text: "Brand Recognition" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default LogoDesign;
