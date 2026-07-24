import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import ProductDescriptionServices from "./InnerComponents/ProductDescriptionServices";
import ProductDescriptionStrategy from "./InnerComponents/ProductDescriptionStrategy";
import ProductDescriptionStyles from "./InnerComponents/ProductDescriptionStyles";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiShoppingBag, FiSearch, FiStar, FiTrendingUp } from "react-icons/fi";

const EcommerceProductDescription = () => {
  return (
    <>
      <Intro
        title="Product description"
        desc="Content is king, and we’re here to help you rule. Our ecommerce product description services are designed to create engaging, informative, and SEO-optimized content that establishes your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="50k - 1L"
      />

      <ProductDescriptionServices />
      <ProductDescriptionStrategy />
      <ProductDescriptionStyles />
      <ServiceCTA 
        serviceName="Ecommerce Product Descriptions"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN ECOMMERCE PRODUCT DESCRIPTIONS"
        title="Let's Grow Your Brand"
        titlePreposition="with"
        titleHighlight="Ecommerce Product Descriptions"
        description="Transform product listings into powerful sales tools with compelling, SEO-optimized product descriptions. We create persuasive copy that highlights key features, communicates customer benefits, and inspires confident purchase decisions."
        features={[
          { icon: <FiShoppingBag />, text: "Persuasive Copy" },
          { icon: <FiSearch />, text: "SEO Optimized" },
          { icon: <FiStar />, text: "Feature Highlights" },
          { icon: <FiTrendingUp />, text: "More Sales" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default EcommerceProductDescription;
