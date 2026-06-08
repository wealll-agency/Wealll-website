import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import IndustryGrid from "./InnerComponents/IndustryGrid";
import PortfolioInclusions from "./InnerComponents/PortfolioInclusions"; // Will create next
import IndustryStrategy from "./InnerComponents/IndustryStrategy"; // Will create next
import PortfolioShowcase from "./InnerComponents/PortfolioShowcase"; // Reusing/Updating
import PortfolioPackages from "./InnerComponents/PortfolioPackages"; // Will create next

const PortfolioDesign = () => {
  return (
    <>
      <Intro
        title="Portfolio Designing"
        desc="Every business is unique. We design customized, industry-specific portfolio websites that build trust, showcase your work, and drive conversions."
        defaultService="Experience Design"
        defaultBudget="30k - 1L"
      />

      {/* 1. Industries We Serve */}
      <IndustryGrid />

      {/* 2. What Your Portfolio Includes */}
      <PortfolioInclusions />

      {/* 3. Industry-Based Strategy */}
      <IndustryStrategy />

      {/* 4. Portfolio Showcase */}
      <PortfolioShowcase />

      {/* 5. Portfolio Packages (Coming Soon) */}
      <PortfolioPackages />

      <BottomComponents />
    </>
  );
};

export default PortfolioDesign;
