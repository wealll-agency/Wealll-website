import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import MediaContent from "./InnerComponents/MediaContent";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiFileText, FiVolume2, FiUsers, FiGlobe } from "react-icons/fi";
const MediaRelations = () => {
  return (
    <>
      <Intro
        title="Media Relations"
        desc="Media relations play a crucial role in shaping brand perception and building long-term credibility. As an AI-driven marketing agency and one of the best media relations companies in India, WEALLL connects brands with the right media platforms through strategic PR, ensuring impactful coverage, visibility, and trust across digital and traditional channels."
        defaultService="PR Services"
        defaultBudget="50k - 1L" />
      <MediaContent />
      <ServiceCTA 
        serviceName="Media Relations"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN MEDIA RELATIONS"
        title="Build Strong Media"
        titlePreposition="Relationships That"
        titleHighlight="Matter"
        description="Strengthen your brand's public presence with strategic media relations that build meaningful connections with journalists, editors, and media outlets. We help secure positive media coverage, increase brand visibility, and position your business as a trusted industry leader."
        features={[
          { icon: <FiFileText />, text: "Press Coverage" },
          { icon: <FiVolume2 />, text: "Media Outreach" },
          { icon: <FiUsers />, text: "Media Partnerships" },
          { icon: <FiGlobe />, text: "Brand Visibility" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default MediaRelations;
