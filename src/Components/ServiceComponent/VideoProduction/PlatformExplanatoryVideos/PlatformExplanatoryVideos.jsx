import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import PlatformOverview from './InnerComponents/PlatformOverview';
import PlatformFeatures from './InnerComponents/PlatformFeatures';
import PlatformOnboarding from './InnerComponents/PlatformOnboarding';
import PlatformAnimation from './InnerComponents/PlatformAnimation';
import PlatformConversion from './InnerComponents/PlatformConversion';
import PlatformOptimization from './InnerComponents/PlatformOptimization';
import PlatformPricing from './InnerComponents/PlatformPricing';
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
      <PlatformPricing />

      <BottomComponents />
    </>
  );
};

export default PlatformExplanatoryVideos;
