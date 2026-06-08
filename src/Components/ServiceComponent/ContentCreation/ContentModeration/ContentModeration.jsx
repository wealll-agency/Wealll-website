import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

const ContentModeration = () => {
  return (
    <>
      <Intro
        title="Content Moderation"
        desc="Content is king, and we’re here to help you rule. Our content moderation services are designed to create engaging, informative, and SEO-optimized content that establishes your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="1L - 3L"
      />
      <BannerComponent />
      <BottomComponents />
    </>
  );
};

export default ContentModeration;
