import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import TvCommercialSections from "./InnerComponents/TvCommercialSections";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiTv, FiVideo, FiGlobe, FiTrendingUp } from "react-icons/fi";

const TelevisionCommercials = () => {
  return (
    <>
      <Intro
        title="Television Commercials"
        desc="Content is king, and we’re here to help you rule. Our television commercials production services are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Video Production"
        defaultBudget="50k - 1L"
      />
      <TvCommercialSections />
      <ServiceCTA 
        serviceName="Television Commercials"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN TELEVISION COMMERCIALS"
        title="Reach Millions"
        titlePreposition="with"
        titleHighlight="Television Commercials"
        description="Capture the attention of millions with professionally produced television commercials that combine creative storytelling, cinematic visuals, and strategic messaging. We create high-impact TV ads that strengthen brand awareness, engage audiences, and inspire action across regional and national markets."
        features={[
          { icon: <FiTv />, text: "TV Commercials" },
          { icon: <FiVideo />, text: "Creative Production" },
          { icon: <FiGlobe />, text: "Mass Reach" },
          { icon: <FiTrendingUp />, text: "Brand Awareness" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default TelevisionCommercials;
