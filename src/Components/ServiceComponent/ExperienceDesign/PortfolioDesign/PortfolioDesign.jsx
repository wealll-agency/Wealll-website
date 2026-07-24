import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import IndustryGrid from "./InnerComponents/IndustryGrid";
import PortfolioInclusions from "./InnerComponents/PortfolioInclusions"; // Will create next
import IndustryStrategy from "./InnerComponents/IndustryStrategy"; // Will create next
import PortfolioShowcase from "./InnerComponents/PortfolioShowcase"; // Reusing/Updating
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiFolder, FiLayout, FiAward, FiTrendingUp } from "react-icons/fi";

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
      <ServiceCTA 
        serviceName="Portfolio Design"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN PORTFOLIO DESIGN"
        title="Let's Showcase Your Brand"
        titlePreposition="with"
        titleHighlight="Portfolio Design"
        description="Present your work with a professionally designed portfolio that highlights your expertise, builds credibility, and leaves a lasting impression. We create visually engaging portfolios that help businesses, agencies, and professionals attract new opportunities."
        features={[
          { icon: <FiFolder />, text: "Project Showcase" },
          { icon: <FiLayout />, text: "Creative Layouts" },
          { icon: <FiAward />, text: "Build Credibility" },
          { icon: <FiTrendingUp />, text: "More Opportunities" }
        ]}
      />

      <BottomComponents />
    </>
  );
};

export default PortfolioDesign;
