import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import ArticleServices from "./InnerComponents/ArticleServices";
import ResearchProcess from "./InnerComponents/ResearchProcess";
import WritingStyle from "./InnerComponents/WritingStyle";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiFileText, FiSearch, FiAward, FiTrendingUp } from "react-icons/fi";

const WebContent = () => {
  return (
    <>
      <Intro
        title="Article Writing"
        desc="Content is king, and we’re here to help you rule. Our web content writing services are designed to create engaging, informative, and SEO-optimized web content that establishes your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="15k - 50k"
      />
      <ArticleServices />
      <ResearchProcess />
      <WritingStyle />
      <ServiceCTA 
        serviceName="Article Writing"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN ARTICLE WRITING"
        title="Let's Grow Your Brand"
        titlePreposition="with"
        titleHighlight="Article Writing"
        description="Establish your brand as an industry leader with professionally researched, engaging, and SEO-friendly articles. We create informative content that educates your audience, builds trust, and strengthens your online authority."
        features={[
          { icon: <FiFileText />, text: "Research-Based Articles" },
          { icon: <FiSearch />, text: "SEO Optimized" },
          { icon: <FiAward />, text: "Industry Authority" },
          { icon: <FiTrendingUp />, text: "Audience Growth" }
        ]}
      />

      <BottomComponents />
    </>
  );
};

export default WebContent;
