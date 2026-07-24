import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import CrisisContent from "./InnerComponents/CrisisContent";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiShield, FiZap, FiRadio, FiHeart } from "react-icons/fi";

const CrisisManagement = () => {
  return (
    <>
      <Intro
        title="Crisis Management"
        desc="Effective crisis management is crucial for maintaining your brand's reputation. We provide rapid response and long-term protection strategies to safeguard your image and rebuild trust."
        defaultService="PR Services"
        defaultBudget="50k - 1L"
      />
      <CrisisContent />
      <ServiceCTA 
        serviceName="Crisis Management"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN CRISIS MANAGEMENT"
        title="Protect Your Brand"
        titlePreposition="with"
        titleHighlight="Crisis Management"
        description="Safeguard your brand with proactive crisis management strategies designed to minimize risks and protect your reputation. From rapid response planning and media communication to online reputation recovery, we help businesses navigate challenging situations with confidence and credibility."
        features={[
          { icon: <FiShield />, text: "Reputation Protection" },
          { icon: <FiZap />, text: "Rapid Response" },
          { icon: <FiRadio />, text: "Media Communication" },
          { icon: <FiHeart />, text: "Trust Recovery" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default CrisisManagement;
