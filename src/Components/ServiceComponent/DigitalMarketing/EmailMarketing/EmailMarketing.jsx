import React from "react";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiMail, FiSettings, FiUsers, FiTrendingUp } from "react-icons/fi";

import Intro from "../DigitalMarketing/InnerComponents/Intro";
import EmailHeroSection from "./InnerComponents/EmailHeroSection";
import EmailWhatWeOffer from "./InnerComponents/EmailWhatWeOffer";
import EmailHowItWorks from "./InnerComponents/EmailHowItWorks";
import EmailFeatures from "./InnerComponents/EmailFeatures";
import EmailBenefits from "./InnerComponents/EmailBenefits";

import EmailAddons from "./InnerComponents/EmailAddons";
import BottomComponents from "../../CommonComponents/BottomComponents";
import "./InnerComponents/email-dark.css";

const dm1 = mediaUrl("assets/images/dm1.jpeg");
const dm2 = mediaUrl("assets/images/dm2.jpeg");
const dm3 = mediaUrl("assets/images/dm3.jpeg");
const dm4 = mediaUrl("assets/images/dm4.jpeg");
const dm5 = mediaUrl("assets/images/dm5.jpeg");
import { mediaUrl } from "../../../../config/media";

const EmailMarketing = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="Email Marketing"
        desc="We're not just another Email marketing company. We are your ticket to getting noticed - by the right people, at the right time."
        defaultService="Digital Marketing"
        defaultBudget="50k - 1L"
        sliderImages={sliderImages}
      />
      <div className="email-dark-bg">
        <EmailHeroSection />
        <EmailWhatWeOffer />
        <EmailHowItWorks />
        <EmailFeatures />
        <EmailBenefits />
        <ServiceCTA 
          serviceName="Email Marketing"
          badgeIcon="⚡"
          badgeText="RESULTS DRIVEN EMAIL MARKETING"
          title="Let's Grow Your Brand"
          titleHighlight="Email Marketing"
          description="No fixed packages. Just custom email marketing strategies that nurture leads, increase customer retention, and drive measurable revenue for your business."
          features={[
            { icon: <FiMail />, text: "Email Campaigns" },
            { icon: <FiSettings />, text: "Marketing Automation" },
            { icon: <FiUsers />, text: "Audience Segmentation" },
            { icon: <FiTrendingUp />, text: "Higher Conversions" }
          ]}
        />

        <EmailAddons />
      </div>
      <BottomComponents />
    </>
  );
};

export default EmailMarketing;
