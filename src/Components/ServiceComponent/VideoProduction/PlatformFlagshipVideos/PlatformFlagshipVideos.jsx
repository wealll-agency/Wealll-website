import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import FlagshipVision from "./InnerComponents/FlagshipVision";
import HeroProductShowcase from "./InnerComponents/HeroProductShowcase";
import LaunchCampaign from "./InnerComponents/LaunchCampaign";
import CinematicExperience from "./InnerComponents/CinematicExperience";
import InvestorPresentation from "./InnerComponents/InvestorPresentation";
import MarketingIntegration from "./InnerComponents/MarketingIntegration";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiVideo, FiSend, FiStar, FiTrendingUp } from "react-icons/fi";

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
      <ServiceCTA 
        serviceName="Platform Flagship Videos"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN PLATFORM FLAGSHIP VIDEOS"
        title="Launch Your Platform"
        titlePreposition="with"
        titleHighlight="Flagship Videos"
        description="Showcase your platform with cinematic flagship videos designed to captivate audiences and elevate your brand. From product launches and feature unveilings to brand campaigns and promotional films, we create visually stunning videos that communicate your platform's value and leave a lasting impression."
        features={[
          { icon: <FiVideo />, text: "Premium Production" },
          { icon: <FiSend />, text: "Launch Campaigns" },
          { icon: <FiStar />, text: "Brand Storytelling" },
          { icon: <FiTrendingUp />, text: "Market Impact" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default PlatformFlagshipVideos;
