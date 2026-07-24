import React from "react";
import ServiceCTA from "../../CommonComponents/ServiceCTA";

import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import EmailServices from "./InnerComponents/EmailServices";
import EmailStrategy from "./InnerComponents/EmailStrategy";
import EmailStyles from "./InnerComponents/EmailStyles";


const Mailers = () => {
  return (
    <>
      <Intro
        title="Mails Content Writing"
        desc="Content is king, and we’re here to help you rule. Our mailers services are designed to create engaging, informative, and SEO-optimized content that establishes your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="50k - 1L"
      />

      <EmailServices />
      <EmailStrategy />
      <EmailStyles />
      <ServiceCTA serviceName="Mailers" />
      <BottomComponents />
    </>
  );
};

export default Mailers;
