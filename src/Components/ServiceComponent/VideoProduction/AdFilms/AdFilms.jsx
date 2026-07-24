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
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiVideo, FiEdit3, FiTarget, FiTrendingUp } from "react-icons/fi";

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
      <ServiceCTA 
        serviceName="Ad Films"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN AD FILMS"
        title="Let's Tell Your Brand"
        titlePreposition="Story Through"
        titleHighlight="Ad Films"
        description="Bring your brand to life with professionally crafted ad films that capture attention, connect emotionally, and inspire action. From creative concepts and scripting to production and editing, we create high-impact commercials that strengthen your brand and drive measurable results."
        features={[
          { icon: <FiVideo />, text: "Cinematic Production" },
          { icon: <FiEdit3 />, text: "Creative Storytelling" },
          { icon: <FiTarget />, text: "Audience Engagement" },
          { icon: <FiTrendingUp />, text: "Brand Growth" }
        ]}
      />

      <BottomComponents />
    </>
  );
};

export default AdFilms;
