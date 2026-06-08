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
import ProductFAQPricing from "./InnerComponents/ProductFAQPricing";

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
      <ProductFAQPricing />
      <BottomComponents />
    </>
  );
};

export default ProductFAQVideos;
