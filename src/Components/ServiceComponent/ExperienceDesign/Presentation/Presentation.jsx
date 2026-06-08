import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import PresentationServices from "./InnerComponents/PresentationServices";
import PresentationIncludes from "./InnerComponents/PresentationIncludes";
import PresentationStrategy from "./InnerComponents/PresentationStrategy";
import PresentationIndustries from "./InnerComponents/PresentationIndustries";
import PresentationPortfolio from "./InnerComponents/PresentationPortfolio";
import PresentationPricing from "./InnerComponents/PresentationPricing";

const Presentation = () => {
  return (
    <>
      <Intro
        title="Presentation"
        desc="Content is king, and we’re here to help you rule. Our Presentation are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Experience Design"
        defaultBudget="50k - 1L"
      />

      <PresentationServices />
      <PresentationIncludes />
      <PresentationStrategy />
      <PresentationIndustries />
      <PresentationPortfolio />
      <PresentationPricing />
      <BottomComponents />
    </>
  );
};

export default Presentation;
