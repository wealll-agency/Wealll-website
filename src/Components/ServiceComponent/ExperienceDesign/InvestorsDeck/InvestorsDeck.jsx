import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import InvestorStrategy from "./InnerComponents/InvestorStrategy";
import InvestorTypes from "./InnerComponents/InvestorTypes";
import InvestorInclusions from "./InnerComponents/InvestorInclusions";
import InvestorMetrics from "./InnerComponents/InvestorMetrics";
import InvestorPortfolio from "./InnerComponents/InvestorPortfolio";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiBriefcase, FiBarChart2, FiDollarSign, FiTrendingUp } from "react-icons/fi";

const InvestorsDeck = () => {
  return (
    <>
      <Intro
        title="Investor's Deck"
        desc="An investor deck is not just a slide presentation — it is your fundraising story. We design strategic, data-driven investor decks that clearly communicate your vision, growth potential, and scalability."
        defaultService="Experience Design"
        defaultBudget="1L - 3L"
      />
      <InvestorStrategy />
      <InvestorTypes />
      <InvestorInclusions />
      <InvestorMetrics />
      <InvestorPortfolio />
      <ServiceCTA 
        serviceName="Investors Deck"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN INVESTOR DECK DESIGN"
        title="Let's Turn Your Vision"
        titlePreposition="into"
        titleHighlight="Investor Confidence"
        description="Secure investor attention with professionally designed pitch decks that communicate your vision, business model, market opportunity, and growth potential. We create compelling investor presentations that build confidence, inspire trust, and help you raise funding successfully."
        features={[
          { icon: <FiBriefcase />, text: "Fundraising Ready" },
          { icon: <FiBarChart2 />, text: "Business Insights" },
          { icon: <FiDollarSign />, text: "Investor Trust" },
          { icon: <FiTrendingUp />, text: "Growth Potential" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default InvestorsDeck;
