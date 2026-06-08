import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Import Custom Exhibition Components
import ExhibBoothHighlight from "./InnerComponents/ExhibBoothHighlight";
import ExhibProductDemo from "./InnerComponents/ExhibProductDemo";
import ExhibTestimonials from "./InnerComponents/ExhibTestimonials";
import ExhibTeaserCampaign from "./InnerComponents/ExhibTeaserCampaign";
import ExhibPostEvent from "./InnerComponents/ExhibPostEvent";
import ExhibMarketingStrategy from "./InnerComponents/ExhibMarketingStrategy";
import ExhibPricing from "./InnerComponents/ExhibPricing";

const Exhibitionvideos = () => {
  return (
    <>
      <Intro
        title="Exhibition Videos"
        desc="Your exhibition presence deserves to be seen by the world. We create compelling exhibition highlight films, product demos, and strategic video campaigns that transform your trade show investment into lasting marketing assets."
        defaultService="Video Production"
        defaultBudget="1L - 3L"
      />

      <ExhibBoothHighlight />
      <ExhibProductDemo />
      <ExhibTestimonials />
      <ExhibTeaserCampaign />
      <ExhibPostEvent />
      <ExhibMarketingStrategy />
      <ExhibPricing />

      <BottomComponents />
    </>
  );
};

export default Exhibitionvideos;
