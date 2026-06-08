import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

const Sops = () => {
  return (
    <>
      <Intro
        title="SOPs"
        desc="Content is king, and we’re here to help you rule. Our SOP writing services are designed to create clear, concise, and comprehensive SOPs that streamline your business operations and ensure consistency across your organization."
        defaultService="Content Creation"
        defaultBudget="15k - 50k"
      />
      <BannerComponent />
      <BottomComponents />
    </>
  );
};

export default Sops;
