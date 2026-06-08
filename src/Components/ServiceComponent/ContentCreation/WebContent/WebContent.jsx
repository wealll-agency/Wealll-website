import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import ArticleServices from "./InnerComponents/ArticleServices";
import ResearchProcess from "./InnerComponents/ResearchProcess";
import WritingStyle from "./InnerComponents/WritingStyle";
import ArticlePricing from "./InnerComponents/ArticlePricing";

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
      <ArticlePricing />

      <BottomComponents />
    </>
  );
};

export default WebContent;
