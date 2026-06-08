import React from "react";
import Intro from "./InnerComponents/Intro";
import About from "./InnerComponents/About";
import BrandVisibility from "../SocialMediaMarketing/InnerComponents/BrandVisibility";
import GrowthSteps from "./InnerComponents/GrowthSteps";
import IndustriesWeServe from "./InnerComponents/IndustriesWeServe";
import BottomComponents from "../../CommonComponents/BottomComponents";

import dm1 from "../../../../assets/images/dm1.jpeg";
import dm2 from "../../../../assets/images/dm2.jpeg";
import dm3 from "../../../../assets/images/dm3.jpeg";
import dm4 from "../../../../assets/images/dm4.jpeg";
import dm5 from "../../../../assets/images/dm5.jpeg";

const DigitalMarketing = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="Digital Marketing"
        desc="We're not just another digital marketing company. We are your ticket to getting noticed - by the right people, at the right time."
        defaultService="Digital Marketing"
        defaultBudget="1L - 3L"
        sliderImages={sliderImages}
      />
      <BrandVisibility title="Digital Marketing" customTitle={<>Dominate <span className="highlight-gradient">Digital Presence</span> With Data-Driven Digital Marketing</>}>
        <p>
          As a premier <strong>Digital Marketing company in Kolkata</strong>, <span className="brand-name">We Alll</span> doesn't just rank your website; we secure your dominance. We blend technical precision with content mastery to ensure your brand answers the questions your customers are asking. Stop chasing algorithms and start <span className="highlight-text">leading the conversation.</span>
        </p>
      </BrandVisibility>
      <About />
      <GrowthSteps />
      <IndustriesWeServe />
      <BottomComponents />
    </>
  );
};

export default DigitalMarketing;
