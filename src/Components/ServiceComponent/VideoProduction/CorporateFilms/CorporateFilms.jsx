import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Import custom sections
import CorpBrandStory from "./InnerComponents/CorpBrandStory";
import CorpProfileFilms from "./InnerComponents/CorpProfileFilms";
import CorpDocumentary from "./InnerComponents/CorpDocumentary";
import CorpStrategicPlanning from "./InnerComponents/CorpStrategicPlanning";
import CorpProduction from "./InnerComponents/CorpProduction";
import CorpDistribution from "./InnerComponents/CorpDistribution";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiBriefcase, FiVideo, FiShield, FiTrendingUp } from "react-icons/fi";

const CorporateFilms = () => {
  return (
    <>
      <Intro
        title="Corporate Films/Documentaries"
        desc="Tell your brand’s story with clarity and impact. Our corporate film production services are designed to create engaging, high-quality visual narratives that establish your brand as a leader in your industry."
        defaultService="Video Production"
        defaultBudget="3L - 5L"
      />
      <CorpBrandStory />
      <CorpProfileFilms />
      <CorpDocumentary />
      <CorpStrategicPlanning />
      <CorpProduction />
      <CorpDistribution />
      <ServiceCTA
        serviceName="Corporate Films"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN CORPORATE FILMS"
        title="Let's Showcase Your Business "
        titlePreposition="Through"
        titleHighlight="Corporate Films"
        description="Tell your company's story with professionally produced corporate films that highlight your vision, values, achievements, and expertise. We create engaging videos that strengthen your brand image, build trust with clients, and communicate your business with confidence."
        features={[
          { icon: <FiBriefcase />, text: "Company Story" },
          { icon: <FiVideo />, text: "Professional Production" },
          { icon: <FiShield />, text: "Build Trust" },
          { icon: <FiTrendingUp />, text: "Business Growth" }
        ]}
      />

      <BottomComponents />
    </>
  );
};

export default CorporateFilms;
