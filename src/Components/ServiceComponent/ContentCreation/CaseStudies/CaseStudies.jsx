import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

const CaseStudies = () => {
  return (
    <>
      <Intro
        title="Case Studies"
        desc="Content is king, and we’re here to help you rule. Our blog writing services are designed to create engaging, informative, and SEO-optimized content that establishes your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="15k - 50k"
      />
      <BannerComponent />
      <BottomComponents />
    </>
  );
};

export default CaseStudies;
