import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import PackagingFeatures from "./InnerComponents/PackagingFeatures";
import PackagingIndustries from "./InnerComponents/PackagingIndustries";
import PackagingStrategy from "./InnerComponents/PackagingStrategy";
import PackagingInclusions from "./InnerComponents/PackagingInclusions";
import PackagingPortfolio from "./InnerComponents/PackagingPortfolio";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiPackage, FiTag, FiStar, FiTrendingUp } from "react-icons/fi";

const ProductPackaging = () => {
  return (
    <>
      <Intro
        title="Product Packaging"
        desc="As an SEO & Digital Marketing company, we design product packaging that supports your branding, positioning, and conversion goals. Your packaging is your silent salesperson — both on retail shelves and online marketplaces."
        defaultService="Experience Design"
        defaultBudget="50k - 1L"
      />
      <PackagingFeatures />
      <PackagingIndustries />
      <PackagingStrategy />
      <PackagingInclusions />
      <PackagingPortfolio />
      <ServiceCTA 
        serviceName="Product Packaging"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN PRODUCT PACKAGING"
        title="Let's Make Your Products"
        titlePreposition="Stand Out on"
        titleHighlight="Every Shelf"
        description="Transform your products with premium packaging that captures attention, communicates your brand story, and influences buying decisions. We design creative, functional, and market-ready packaging that enhances customer experience and helps your products stand out from the competition."
        features={[
          { icon: <FiPackage />, text: "Premium Packaging" },
          { icon: <FiTag />, text: "Brand Identity" },
          { icon: <FiStar />, text: "Shelf Appeal" },
          { icon: <FiTrendingUp />, text: "Sales Growth" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default ProductPackaging;
