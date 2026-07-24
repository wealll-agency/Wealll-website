import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import PlatformOverview from './InnerComponents/PlatformOverview';
import PlatformFeatures from './InnerComponents/PlatformFeatures';
import PlatformOnboarding from './InnerComponents/PlatformOnboarding';
import PlatformAnimation from './InnerComponents/PlatformAnimation';
import PlatformConversion from './InnerComponents/PlatformConversion';
import PlatformOptimization from './InnerComponents/PlatformOptimization';
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiMonitor, FiVideo, FiUsers, FiTrendingUp } from "react-icons/fi";

const PlatformExplanatoryVideos = () => {
  return (
    <>
      <Intro
        title="Platform Explanatory Videos"
        desc="Content is king, and we’re here to help you rule. Our platform explanatory videos production services are designed to create engaging, informative, and SEO-optimized videos that establish your brand as a thought leader in your industry."
        defaultService="Video Production"
        defaultBudget="1L - 3L"
      />

      <PlatformOverview />
      <PlatformFeatures />
      <PlatformOnboarding />
      <PlatformAnimation />
      <PlatformConversion />
      <PlatformOptimization />
      <ServiceCTA 
        serviceName="Platform Explanatory Videos"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN PLATFORM EXPLANATORY VIDEOS"
        title="Let's Simplify Your Platform"
        titlePreposition="with"
        titleHighlight="Explainer Videos"
        description="Help your audience understand your platform with engaging explainer videos that simplify complex features and highlight real value. From SaaS products and mobile apps to websites and digital platforms, we create clear, visually compelling videos that improve user understanding, increase engagement, and drive conversions."
        features={[
          { icon: <FiMonitor />, text: "Platform Demo" },
          { icon: <FiVideo />, text: "Visual Storytelling" },
          { icon: <FiUsers />, text: "User Engagement" },
          { icon: <FiTrendingUp />, text: "Product Adoption" }
        ]}
      />

      <BottomComponents />
    </>
  );
};

export default PlatformExplanatoryVideos;
