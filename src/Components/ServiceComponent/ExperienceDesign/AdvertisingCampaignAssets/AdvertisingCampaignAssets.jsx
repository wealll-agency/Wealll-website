import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import AssetsWeDesign from "./InnerComponents/AssetsWeDesign";
import MultiPlatformFormats from "./InnerComponents/MultiPlatformFormats";
import CampaignStrategy from "./InnerComponents/CampaignStrategy";
import BrandConsistency from "./InnerComponents/BrandConsistency";
import CampaignPortfolio from "./InnerComponents/CampaignPortfolio";
import CampaignPackages from "./InnerComponents/CampaignPackages";
import BottomComponents from "../../CommonComponents/BottomComponents";

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
      <CampaignPackages />
      <BottomComponents />
    </>
  );
};

export default AdvertisingCampaignAssets;
