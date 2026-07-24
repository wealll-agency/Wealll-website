import React from "react";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiEdit3, FiVideo, FiTarget, FiTrendingUp } from "react-icons/fi";

import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
import ScriptProcess from "./Innercomponents/ScriptProcess";
import ScriptServices from "./Innercomponents/ScriptServices";
import ScriptStyles from "./Innercomponents/ScriptStyles";


const ScriptWriting = () => {
  return (
    <>
      <Intro
        title="Script Writing"
        desc="Content is king, and we’re here to help you rule. Our video script writing services are designed to create engaging, informative, and SEO-optimized video scripts that establish your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="15k - 50k"
      />
      <BannerComponent />
      <ScriptServices />
      <ScriptProcess />
      <ScriptStyles />
      <ServiceCTA 
        serviceName="Script Writing"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN SCRIPT WRITING"
        title="Let's Grow Your Brand"
        titlePreposition="with"
        titleHighlight="Script Writing"
        description="Turn ideas into compelling stories with professionally written scripts for advertisements, corporate films, YouTube videos, social media reels, and promotional campaigns. We create engaging scripts that connect with your audience and inspire action."
        features={[
          { icon: <FiEdit3 />, text: "Creative Storytelling" },
          { icon: <FiVideo />, text: "Video & Ad Scripts" },
          { icon: <FiTarget />, text: "Audience Engagement" },
          { icon: <FiTrendingUp />, text: "Conversion Focused" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default ScriptWriting;
