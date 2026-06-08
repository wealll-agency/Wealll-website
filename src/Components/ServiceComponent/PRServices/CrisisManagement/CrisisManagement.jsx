import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import CrisisContent from "./InnerComponents/CrisisContent";
import CrisisPricing from "./InnerComponents/CrisisPricing";

const CrisisManagement = () => {
  return (
    <>
      <Intro
        title="Crisis Management"
        desc="Effective crisis management is crucial for maintaining your brand's reputation. We provide rapid response and long-term protection strategies to safeguard your image and rebuild trust."
        defaultService="PR Services"
        defaultBudget="50k - 1L"
      />
      <CrisisContent />
      <CrisisPricing />
      <BottomComponents />
    </>
  );
};

export default CrisisManagement;
