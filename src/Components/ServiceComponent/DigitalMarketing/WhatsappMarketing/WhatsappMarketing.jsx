import React from "react";
import Intro from "../DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
import WhatsappProcess from "./InnerComponents/WhatsappProcess";
import WhatsappBenefits from "./InnerComponents/WhatsappBenefits";
import WhatsappStrategy from "./InnerComponents/WhatsappStrategy";

import dm1 from "../../../../assets/images/dm1.jpeg";
import dm2 from "../../../../assets/images/dm2.jpeg";
import dm3 from "../../../../assets/images/dm3.jpeg";
import dm4 from "../../../../assets/images/dm4.jpeg";
import dm5 from "../../../../assets/images/dm5.jpeg";

const WhatsappMarketing = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="WhatsApp Marketing Services"
        desc="Harness the power of WhatsApp marketing to connect with your audience on a personal level. Our services help you create engaging campaigns, automate messages, and drive conversions through this popular messaging platform."
        defaultService="Digital Marketing"
        defaultBudget="50k - 1L"
        sliderImages={sliderImages}
      />
      <BannerComponent />
      <WhatsappProcess />
      <WhatsappBenefits />
      <WhatsappStrategy />
      <BottomComponents />
    </>
  );
};

export default WhatsappMarketing;
