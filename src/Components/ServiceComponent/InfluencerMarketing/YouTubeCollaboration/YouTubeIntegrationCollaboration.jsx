import React from "react";
import "./InnerComponents/youtube-dark.css";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
import YouTubeWhyWorks from "./InnerComponents/YouTubeWhyWorks";
import YouTubeStrategy from "./InnerComponents/YouTubeStrategy";
import YouTubeContentIntegration from "./InnerComponents/YouTubeContentIntegration";
import YouTubeExecution from "./InnerComponents/YouTubeExecution";
import YouTubeAnalysisDash from "./InnerComponents/YouTubeAnalysisDash";
import YouTubeBenefits from "./InnerComponents/YouTubeBenefits";
import YouTubePricing from "./InnerComponents/YouTubePricing";
import YouTubeAddons from "./InnerComponents/YouTubeAddons";

const YouTubeIntegrationCollaboration = () => {
  return (
    <>
      <Intro
        title="YouTube Integration Collaboration"
        desc="Leverage the reach of YouTube stars with dedicated videos or integrated mentions. Perfect for in-depth product reviews, tutorials, and brand storytelling."
        defaultService="Influencer Marketing"
        defaultBudget="50k - 2L"
      />
      <BannerComponent />

      {/* Premium YouTube Components */}
      <YouTubeWhyWorks />
      <YouTubeStrategy />
      <YouTubeContentIntegration />
      <YouTubeExecution />
      <YouTubeAnalysisDash />
      <YouTubeBenefits />
      <YouTubePricing />
      <YouTubeAddons />

      <BottomComponents />
    </>
  );
};

export default YouTubeIntegrationCollaboration;
