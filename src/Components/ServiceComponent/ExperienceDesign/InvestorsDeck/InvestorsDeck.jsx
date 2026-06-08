import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import InvestorStrategy from "./InnerComponents/InvestorStrategy";
import InvestorTypes from "./InnerComponents/InvestorTypes";
import InvestorInclusions from "./InnerComponents/InvestorInclusions";
import InvestorMetrics from "./InnerComponents/InvestorMetrics";
import InvestorPortfolio from "./InnerComponents/InvestorPortfolio";
import InvestorPricing from "./InnerComponents/InvestorPricing";

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
      <InvestorPricing />
      <BottomComponents />
    </>
  );
};

export default InvestorsDeck;
