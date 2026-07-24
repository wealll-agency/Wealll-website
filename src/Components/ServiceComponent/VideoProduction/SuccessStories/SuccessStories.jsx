import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import SuccessStoryHero from "./InnerComponents/SuccessStoryHero";
import ClientGrowth from "./InnerComponents/ClientGrowth";
import CampaignStrategy from "./InnerComponents/CampaignStrategy";
import PerformanceComparison from "./InnerComponents/PerformanceComparison";
import IndustrySuccess from "./InnerComponents/IndustrySuccess";
import ClientTestimonials from "./InnerComponents/ClientTestimonials";
import MarketingInsights from "./InnerComponents/MarketingInsights";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiVideo, FiStar, FiShield, FiTrendingUp } from "react-icons/fi";

import BottomComponents from "../../CommonComponents/BottomComponents";

const SuccessStories = () => {
  return (
    <>
      <Intro
        title="Success Stories"
        desc="Content is king, and we’re here to help you rule. Our success stories production services are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Video Production"
        defaultBudget="1L - 3L"
      />
      <div style={{ backgroundColor: '#030305' }}>
        <SuccessStoryHero />
        <ClientGrowth />
        <CampaignStrategy />
        <PerformanceComparison />
        <IndustrySuccess />
        <ClientTestimonials />
        <MarketingInsights />
        <ServiceCTA 
          serviceName="Success Stories"
          badgeIcon="⚡"
          badgeText="RESULTS DRIVEN SUCCESS STORIES"
          title="Let's Turn Your Success"
          titlePreposition="Into Inspiring"
          titleHighlight="Stories"
          description="Build credibility with authentic success story videos that highlight real customer experiences and measurable business results. We transform client journeys into compelling stories that inspire trust, strengthen your brand reputation, and encourage potential customers to take action."
          features={[
            { icon: <FiVideo />, text: "Customer Stories" },
            { icon: <FiStar />, text: "Client Testimonials" },
            { icon: <FiShield />, text: "Build Trust" },
            { icon: <FiTrendingUp />, text: "Proven Results" }
          ]}
        />
      </div>
      <BottomComponents />
    </>
  );
};

export default SuccessStories;
