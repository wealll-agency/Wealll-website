import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import PresentationServices from "./InnerComponents/PresentationServices";
import PresentationIncludes from "./InnerComponents/PresentationIncludes";
import PresentationStrategy from "./InnerComponents/PresentationStrategy";
import PresentationIndustries from "./InnerComponents/PresentationIndustries";
import PresentationPortfolio from "./InnerComponents/PresentationPortfolio";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiPieChart, FiImage, FiTarget, FiTrendingUp } from "react-icons/fi";

const Presentation = () => {
  return (
    <>
      <Intro
        title="Presentation"
        desc="Content is king, and we’re here to help you rule. Our Presentation are designed to create engaging, informative, and SEO-optimized ad films that establish your brand as a thought leader in your industry."
        defaultService="Experience Design"
        defaultBudget="50k - 1L"
      />

      <PresentationServices />
      <PresentationIncludes />
      <PresentationStrategy />
      <PresentationIndustries />
      <PresentationPortfolio />
      <ServiceCTA 
        serviceName="Presentation Design"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN PRESENTATION DESIGN"
        title="Let's Present Your Brand"
        titlePreposition="with"
        titleHighlight="Powerful Designs"
        description="Deliver your ideas with confidence through professionally designed presentations that captivate audiences and communicate your message clearly. We create visually compelling slides for business meetings, investor pitches, sales presentations, and corporate events that leave a lasting impression."
        features={[
          { icon: <FiPieChart />, text: "Professional Slides" },
          { icon: <FiImage />, text: "Visual Storytelling" },
          { icon: <FiTarget />, text: "Persuasive Content" },
          { icon: <FiTrendingUp />, text: "Business Impact" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default Presentation;
