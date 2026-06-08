import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import LogoServices from "./InnerComponents/LogoServices";
import LogoProcess from "./InnerComponents/LogoProcess";
import LogoStyles from "./InnerComponents/LogoStyles";
import LogoPortfolio from "./InnerComponents/LogoPortfolio";
import LogoPricing from "./InnerComponents/LogoPricing";

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
      <LogoPricing />
      <BottomComponents />
    </>
  );
};

export default LogoDesign;
