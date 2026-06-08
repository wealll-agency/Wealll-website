import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Import custom sections
import CorpBrandStory from "./InnerComponents/CorpBrandStory";
import CorpProfileFilms from "./InnerComponents/CorpProfileFilms";
import CorpDocumentary from "./InnerComponents/CorpDocumentary";
import CorpStrategicPlanning from "./InnerComponents/CorpStrategicPlanning";
import CorpProduction from "./InnerComponents/CorpProduction";
import CorpDistribution from "./InnerComponents/CorpDistribution";
import CorpPricing from "./InnerComponents/CorpPricing";

const CorporateFilms = () => {
  return (
    <>
      <Intro
        title="Corporate Films/Documentaries"
        desc="Tell your brand’s story with clarity and impact. Our corporate film production services are designed to create engaging, high-quality visual narratives that establish your brand as a leader in your industry."
        defaultService="Video Production"
        defaultBudget="3L - 5L"
      />
      <CorpBrandStory />
      <CorpProfileFilms />
      <CorpDocumentary />
      <CorpStrategicPlanning />
      <CorpProduction />
      <CorpDistribution />
      <CorpPricing />

      <BottomComponents />
    </>
  );
};

export default CorporateFilms;
