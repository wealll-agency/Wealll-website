import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
const MarketingPitches = () => {
  return (
    <>
      <Intro
        title="Elevator/Sales/Marketing pitches"
        desc="Content is king, and we’re here to help you rule. Our Elevator/Sales/Marketing pitches are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Experience Design"
        defaultBudget="50k - 1L"
      />
      <BannerComponent />
      <BottomComponents />
    </>
  );
};

export default MarketingPitches;
