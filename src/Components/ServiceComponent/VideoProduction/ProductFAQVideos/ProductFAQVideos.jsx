import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import ProductFAQHero from "./InnerComponents/ProductFAQHero";
import FAQExplainer from "./InnerComponents/FAQExplainer";
import FeatureClarification from "./InnerComponents/FeatureClarification";
import TroubleshootingSupport from "./InnerComponents/TroubleshootingSupport";
import EcommerceFAQ from "./InnerComponents/EcommerceFAQ";
import KnowledgeBaseLibrary from "./InnerComponents/KnowledgeBaseLibrary";
import MarketingIntegration from "./InnerComponents/MarketingIntegration";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiHelpCircle, FiVideo, FiShield, FiTrendingUp } from "react-icons/fi";

const ProductFAQVideos = () => {
  return (
    <>
      <Intro
        title="Product FAQ Videos"
        desc="Content is king, and we’re here to help you rule. Our product FAQ videos production services are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Video Production"
        defaultBudget="1L - 3L"
      />
      <ProductFAQHero />
      <FAQExplainer />
      <FeatureClarification />
      <TroubleshootingSupport />
      <EcommerceFAQ />
      <KnowledgeBaseLibrary />
      <MarketingIntegration />
      <ServiceCTA 
        serviceName="Product FAQ Videos"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN PRODUCT FAQ VIDEOS"
        title="Let's Answer Customer"
        titlePreposition="Questions with"
        titleHighlight="FAQ Videos"
        description="Help customers make confident buying decisions with engaging Product FAQ videos. We create clear, informative videos that answer common questions, explain product features, address customer concerns, and reduce support requests while improving trust and conversions."
        features={[
          { icon: <FiHelpCircle />, text: "Common Questions" },
          { icon: <FiVideo />, text: "Product Demos" },
          { icon: <FiShield />, text: "Build Trust" },
          { icon: <FiTrendingUp />, text: "Higher Conversions" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default ProductFAQVideos;
