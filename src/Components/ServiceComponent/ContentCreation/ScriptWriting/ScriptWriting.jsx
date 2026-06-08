import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
import ScriptProcess from "./Innercomponents/ScriptProcess";
import ScriptServices from "./Innercomponents/ScriptServices";
import ScriptStyles from "./Innercomponents/ScriptStyles";
import ScriptPricing from "./Innercomponents/ScriptPricing";

const ScriptWriting = () => {
  return (
    <>
      <Intro
        title="Script Writing"
        desc="Content is king, and we’re here to help you rule. Our video script writing services are designed to create engaging, informative, and SEO-optimized video scripts that establish your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="15k - 50k"
      />
      <BannerComponent />
      <ScriptServices />
      <ScriptProcess />
      <ScriptStyles />
      <ScriptPricing />
      <BottomComponents />
    </>
  );
};

export default ScriptWriting;
