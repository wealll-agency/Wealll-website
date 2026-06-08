import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
const ExhibitionKiosks = () => {
  return (
    <>
      <Intro
        title="Exhibition Kiosks"
        desc="Content is king, and we’re here to help you rule. Our Exhibition Kiosks are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Experience Design"
        defaultBudget="1L - 3L"
      />
      <BannerComponent />
      <BottomComponents />
    </>
  );
};

export default ExhibitionKiosks;
