import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import MediaContent from "./InnerComponents/MediaContent";
import MediaPricing from "./InnerComponents/MediaPricing";
const MediaRelations = () => {
  return (
    <>
      <Intro
        title="Media Relations"
        desc="Media relations play a crucial role in shaping brand perception and building long-term credibility. As an AI-driven marketing agency and one of the best media relations companies in India, WEALLL connects brands with the right media platforms through strategic PR, ensuring impactful coverage, visibility, and trust across digital and traditional channels."
        defaultService="PR Services"
        defaultBudget="50k - 1L" />
      <MediaContent />
      <MediaPricing />
      <BottomComponents />
    </>
  );
};

export default MediaRelations;
