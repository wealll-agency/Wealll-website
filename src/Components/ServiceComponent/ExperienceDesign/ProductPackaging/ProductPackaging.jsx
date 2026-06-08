import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import PackagingFeatures from "./InnerComponents/PackagingFeatures";
import PackagingIndustries from "./InnerComponents/PackagingIndustries";
import PackagingStrategy from "./InnerComponents/PackagingStrategy";
import PackagingInclusions from "./InnerComponents/PackagingInclusions";
import PackagingPortfolio from "./InnerComponents/PackagingPortfolio";
import PackagingPricing from "./InnerComponents/PackagingPricing";

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
      <PackagingPricing />
      <BottomComponents />
    </>
  );
};

export default ProductPackaging;
