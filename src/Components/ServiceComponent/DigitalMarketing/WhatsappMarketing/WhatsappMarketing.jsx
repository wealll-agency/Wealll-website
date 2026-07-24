import React from "react";
import Intro from "../DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
import WhatsappProcess from "./InnerComponents/WhatsappProcess";
import WhatsappBenefits from "./InnerComponents/WhatsappBenefits";
import WhatsappStrategy from "./InnerComponents/WhatsappStrategy";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiMessageSquare, FiCpu, FiUsers, FiTrendingUp } from "react-icons/fi";

const dm1 = mediaUrl("assets/images/dm1.jpeg");
const dm2 = mediaUrl("assets/images/dm2.jpeg");
const dm3 = mediaUrl("assets/images/dm3.jpeg");
const dm4 = mediaUrl("assets/images/dm4.jpeg");
const dm5 = mediaUrl("assets/images/dm5.jpeg");
import { mediaUrl } from "../../../../config/media";

const WhatsappMarketing = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="WhatsApp Marketing Services"
        desc="Harness the power of WhatsApp marketing to connect with your audience on a personal level. Our services help you create engaging campaigns, automate messages, and drive conversions through this popular messaging platform."
        defaultService="Digital Marketing"
        defaultBudget="50k - 1L"
        sliderImages={sliderImages}
      />
      <BannerComponent />
      <WhatsappProcess />
      <WhatsappBenefits />
      <WhatsappStrategy />
      <ServiceCTA 
        serviceName="WhatsApp Marketing"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN WHATSAPP MARKETING"
        title="Let's Grow Your Brand"
        titlePreposition="with"
        titleHighlight="WhatsApp Marketing"
        description="Connect with your audience through personalized WhatsApp campaigns, automated messaging, and real-time engagement. We help you generate quality leads, boost customer retention, and increase conversions with powerful WhatsApp marketing strategies."
        features={[
          { icon: <FiMessageSquare />, text: "Broadcast Campaigns" },
          { icon: <FiCpu />, text: "Smart Automation" },
          { icon: <FiUsers />, text: "Customer Engagement" },
          { icon: <FiTrendingUp />, text: "Higher Conversions" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default WhatsappMarketing;
