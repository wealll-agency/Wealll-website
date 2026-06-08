import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import TvCommercialSections from "./InnerComponents/TvCommercialSections";
import TvCommercialPricing from "./InnerComponents/TvCommercialPricing";

const TelevisionCommercials = () => {
  return (
    <>
      <Intro
        title="Television Commercials"
        desc="Content is king, and we’re here to help you rule. Our television commercials production services are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Video Production"
        defaultBudget="50k - 1L"
      />
      <TvCommercialSections />
      <TvCommercialPricing />
      <BottomComponents />
    </>
  );
};

export default TelevisionCommercials;
