import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Import Custom Exhibition Components
import ExhibBoothHighlight from "./InnerComponents/ExhibBoothHighlight";
import ExhibProductDemo from "./InnerComponents/ExhibProductDemo";
import ExhibTestimonials from "./InnerComponents/ExhibTestimonials";
import ExhibTeaserCampaign from "./InnerComponents/ExhibTeaserCampaign";
import ExhibPostEvent from "./InnerComponents/ExhibPostEvent";
import ExhibMarketingStrategy from "./InnerComponents/ExhibMarketingStrategy";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiVideo, FiMonitor, FiUsers, FiTrendingUp } from "react-icons/fi";

const Exhibitionvideos = () => {
  return (
    <>
      <Intro
        title="Exhibition Videos"
        desc="Your exhibition presence deserves to be seen by the world. We create compelling exhibition highlight films, product demos, and strategic video campaigns that transform your trade show investment into lasting marketing assets."
        defaultService="Video Production"
        defaultBudget="1L - 3L"
      />

      <ExhibBoothHighlight />
      <ExhibProductDemo />
      <ExhibTestimonials />
      <ExhibTeaserCampaign />
      <ExhibPostEvent />
      <ExhibMarketingStrategy />
      <ServiceCTA 
        serviceName="Exhibitionvideos"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN EXHIBITION VIDEOS"
        title="Let's Showcase Your Brand"
        titlePreposition="Through"
        titleHighlight="Exhibition Videos"
        description="Bring your exhibitions and trade shows to life with professionally produced videos that capture every key moment. From event highlights and booth showcases to customer interactions and product demonstrations, we create engaging exhibition videos that extend your brand's reach beyond the event floor."
        features={[
          { icon: <FiVideo />, text: "Event Coverage" },
          { icon: <FiMonitor />, text: "Booth Showcase" },
          { icon: <FiUsers />, text: "Audience Engagement" },
          { icon: <FiTrendingUp />, text: "Brand Visibility" }
        ]}
      />

      <BottomComponents />
    </>
  );
};

export default Exhibitionvideos;
