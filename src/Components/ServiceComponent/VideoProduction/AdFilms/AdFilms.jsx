import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Import all AdFilms InnerComponents
import BrandPromotionalFilms from "./InnerComponents/BrandPromotionalFilms";
import PortfolioCorporateFilms from "./InnerComponents/PortfolioCorporateFilms";
import AdFilmStrategy from "./InnerComponents/AdFilmStrategy";
import ProductionExecution from "./InnerComponents/ProductionExecution";
import PlatformAdaptation from "./InnerComponents/PlatformAdaptation";
import CampaignPerformance from "./InnerComponents/CampaignPerformance";
import AdFilmsPricing from "./InnerComponents/AdFilmsPricing";

const AdFilms = () => {
  return (
    <>
      <Intro
        title="Ad films (Promotionals & Portfolio)"
        desc="Content is king, and we’re here to help you rule. Our ad film production services are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Video Production"
        defaultBudget="50k - 1L"
      />

      <BrandPromotionalFilms />
      <PortfolioCorporateFilms />
      <AdFilmStrategy />
      <ProductionExecution />
      <PlatformAdaptation />
      <CampaignPerformance />
      <AdFilmsPricing />

      <BottomComponents />
    </>
  );
};

export default AdFilms;
