import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Import New Sections
import EventExhibition from "./InnerComponents/EventExhibition";
import EventSeminar from "./InnerComponents/EventSeminar";
import EventThemeBranding from "./InnerComponents/EventThemeBranding";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiCalendar, FiImage, FiTarget, FiStar } from "react-icons/fi";

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
      <ServiceCTA 
        serviceName="Event Branding Assets"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN EVENT BRANDING ASSETS"
        title="Let's Bring Your Events"
        titlePreposition="to Life with"
        titleHighlight="Branding"
        description="Create unforgettable event experiences with professionally designed branding assets. From stage backdrops and standees to event signage, digital displays, and promotional materials, we design cohesive visuals that strengthen your brand presence and captivate every attendee."
        features={[
          { icon: <FiCalendar />, text: "Event Identity" },
          { icon: <FiImage />, text: "Branding Assets" },
          { icon: <FiTarget />, text: "Audience Engagement" },
          { icon: <FiStar />, text: "Brand Experience" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default EventBrandingAssets;
