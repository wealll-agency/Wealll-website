import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Import New Sections
import EventExhibition from "./InnerComponents/EventExhibition";
import EventSeminar from "./InnerComponents/EventSeminar";
import EventThemeBranding from "./InnerComponents/EventThemeBranding";
import EventPackages from "./InnerComponents/EventPackages";

const EventBrandingAssets = () => {
  return (
    <>
      <Intro
        title="Event Branding Assets"
        desc="Your event is an experience, and the branding should be unforgettable. From highly customized 3D exhibition booths to holistic seminar and venue branding, we build premium assets that captivate attendees and drive true engagement."
        defaultService="Experience Design"
        defaultBudget="1L - 3L"
      />

      <EventExhibition />
      <EventSeminar />
      <EventThemeBranding />
      <EventPackages />
      <BottomComponents />
    </>
  );
};

export default EventBrandingAssets;
