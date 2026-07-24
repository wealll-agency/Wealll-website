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
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiPlayCircle, FiUsers, FiShield, FiTrendingUp } from "react-icons/fi";
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
      <ServiceCTA
        serviceName="YouTube Collaboration"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN YOUTUBE COLLABORATION"
        title="Grow Your Brand"
        titlePreposition="Through"
        titleHighlight="YouTube Creators"
        description="Expand your brand's reach through strategic YouTube collaborations with trusted creators and influencers. From product reviews and unboxing videos to tutorials, vlogs, and sponsored content, we create authentic partnerships that increase brand awareness, build audience trust, and drive meaningful business growth."
        features={[
          { icon: <FiPlayCircle />, text: "Video Campaigns" },
          { icon: <FiUsers />, text: "Creator Partnerships" },
          { icon: <FiShield />, text: "Audience Trust" },
          { icon: <FiTrendingUp />, text: "Brand Growth" }
        ]}
      />
      <YouTubeAddons />

      <BottomComponents />
    </>
  );
};

export default YouTubeIntegrationCollaboration;
