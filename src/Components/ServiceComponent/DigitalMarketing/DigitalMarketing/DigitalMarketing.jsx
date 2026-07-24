import React from "react";
import { FiTarget, FiShare2, FiBarChart2, FiTrendingUp } from "react-icons/fi";
import Intro from "./InnerComponents/Intro";
import About from "./InnerComponents/About";
import BrandVisibility from "../SocialMediaMarketing/InnerComponents/BrandVisibility";
import GrowthSteps from "./InnerComponents/GrowthSteps";
import IndustriesWeServe from "./InnerComponents/IndustriesWeServe";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import BottomComponents from "../../CommonComponents/BottomComponents";

const dm1 = mediaUrl("assets/images/dm1.jpeg");
const dm2 = mediaUrl("assets/images/dm2.jpeg");
const dm3 = mediaUrl("assets/images/dm3.jpeg");
const dm4 = mediaUrl("assets/images/dm4.jpeg");
const dm5 = mediaUrl("assets/images/dm5.jpeg");
import { mediaUrl } from "../../../../config/media";

const DigitalMarketing = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="Digital Marketing"
        desc="We're not just another digital marketing company. We are your ticket to getting noticed - by the right people, at the right time."
        defaultService="Digital Marketing"
        defaultBudget="1L - 3L"
        sliderImages={sliderImages}
      />
      <BrandVisibility title="Digital Marketing" customTitle={<>Dominate <span className="highlight-gradient">Digital Presence</span> With Data-Driven Digital Marketing</>}>
        <p>
          As a premier <strong>Digital Marketing company in Kolkata</strong>, <span className="brand-name">We Alll</span> doesn't just rank your website; we secure your dominance. We blend technical precision with content mastery to ensure your brand answers the questions your customers are asking. Stop chasing algorithms and start <span className="highlight-text">leading the conversation.</span>
        </p>
      </BrandVisibility>
      <About />
      <GrowthSteps />
      <IndustriesWeServe />
      <ServiceCTA 
        serviceName="Digital Marketing"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN DIGITAL MARKETING"
        title="Let's Grow Your Brand"
        titlePreposition="with"
        titleHighlight="Digital Marketing"
        description="Accelerate your business with data-driven digital marketing strategies. From SEO and social media to paid advertising and content marketing, we help you attract the right audience, generate quality leads, and maximize your ROI."
        features={[
          { icon: <FiTarget />, text: "Digital Strategy" },
          { icon: <FiShare2 />, text: "Multi-Channel Reach" },
          { icon: <FiBarChart2 />, text: "Performance Analytics" },
          { icon: <FiTrendingUp />, text: "Business Growth" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default DigitalMarketing;
