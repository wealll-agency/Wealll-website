import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import AssetsWeDesign from "./InnerComponents/AssetsWeDesign";
import MultiPlatformFormats from "./InnerComponents/MultiPlatformFormats";
import CampaignStrategy from "./InnerComponents/CampaignStrategy";
import BrandConsistency from "./InnerComponents/BrandConsistency";
import CampaignPortfolio from "./InnerComponents/CampaignPortfolio";
import BottomComponents from "../../CommonComponents/BottomComponents";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiPenTool, FiVolume2, FiImage, FiTrendingUp } from "react-icons/fi";

const AdvertisingCampaignAssets = () => {
  return (
    <>
      <Intro
        title="Advertising Campaign Assets"
        desc="Content is king, and we’re here to help you rule. Our advertising campaign asset production services are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Experience Design"
        defaultBudget="50k - 1L"
      />
      <AssetsWeDesign />
      <MultiPlatformFormats />
      <CampaignStrategy />
      <BrandConsistency />
      <CampaignPortfolio />
      <ServiceCTA 
        serviceName="Advertising Campaign Assets"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN ADVERTISING CAMPAIGN ASSETS"
        title="Let's Power Your Brand"
        titlePreposition="with"
        titleHighlight="Campaign Assets"
        description="Bring every campaign to life with professionally designed advertising assets tailored for digital and print platforms. From social media creatives and display banners to ad visuals and promotional materials, we create compelling designs that capture attention, strengthen your brand, and improve campaign performance."
        features={[
          { icon: <FiPenTool />, text: "Creative Assets" },
          { icon: <FiVolume2 />, text: "Multi-Platform Ads" },
          { icon: <FiImage />, text: "Brand Consistency" },
          { icon: <FiTrendingUp />, text: "Campaign Performance" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default AdvertisingCampaignAssets;
