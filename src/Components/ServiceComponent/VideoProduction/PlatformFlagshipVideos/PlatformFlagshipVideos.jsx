import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import FlagshipVision from "./InnerComponents/FlagshipVision";
import HeroProductShowcase from "./InnerComponents/HeroProductShowcase";
import LaunchCampaign from "./InnerComponents/LaunchCampaign";
import CinematicExperience from "./InnerComponents/CinematicExperience";
import InvestorPresentation from "./InnerComponents/InvestorPresentation";
import MarketingIntegration from "./InnerComponents/MarketingIntegration";
import FlagshipPricing from "./InnerComponents/FlagshipPricing";

const PlatformFlagshipVideos = () => {
  return (
    <>
      <Intro
        title="Platform Flagship Videos"
        desc="Turn platform features into visual experiences. We create cinematic, narrative-driven videos that communicate your mission, innovation, and long-term vision in a compelling story format to establish your brand as a leader."
        defaultService="Video Production"
        defaultBudget="1L - 3L"
      />
      <FlagshipVision />
      <HeroProductShowcase />
      <LaunchCampaign />
      <CinematicExperience />
      <InvestorPresentation />
      <MarketingIntegration />
      <FlagshipPricing />
      <BottomComponents />
    </>
  );
};

export default PlatformFlagshipVideos;
