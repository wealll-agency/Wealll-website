import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

const WhitePapers = () => {
  return (
    <>
      <Intro
        title="White Papers"
        desc="Content is king, and we’re here to help you rule. Our white paper writing services are designed to create engaging, informative, and SEO-optimized white papers that establish your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="15k - 50k"
      />
      <BannerComponent />
      <BottomComponents />
    </>
  );
};

export default WhitePapers;
