import React from 'react';
import Intro from '../DigitalMarketing/InnerComponents/Intro';
import BottomComponents from '../../CommonComponents/BottomComponents';
import './InnerComponents/marketing360-dark.css';
import Marketing360Problem from './InnerComponents/Marketing360Problem';
import Marketing360Solution from './InnerComponents/Marketing360Solution';
import Marketing360Stack from './InnerComponents/Marketing360Stack';
import Marketing360Flow from './InnerComponents/Marketing360Flow';
import Marketing360Framework from './InnerComponents/Marketing360Framework';
import Marketing360CaseStudy from './InnerComponents/Marketing360CaseStudy';
import Marketing360WhoNeeds from './InnerComponents/Marketing360WhoNeeds';
import Marketing360VsTraditional from './InnerComponents/Marketing360VsTraditional';
import Marketing360Addons from './InnerComponents/Marketing360Addons';
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiGlobe, FiVolume2, FiBarChart2, FiTrendingUp } from "react-icons/fi";

const dm1 = mediaUrl("assets/images/dm1.jpeg");
const dm2 = mediaUrl("assets/images/dm2.jpeg");
const dm3 = mediaUrl("assets/images/dm3.jpeg");
const dm4 = mediaUrl("assets/images/dm4.jpeg");
const dm5 = mediaUrl("assets/images/dm5.jpeg");
import { mediaUrl } from "../../../../config/media";

const VideoMarketing = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="360° Marketing Services"
        desc="A unified ecosystem where Traffic, Engagement, Conversion, and Retention operate in absolute synergy to scale your brand."
        defaultService="Digital Marketing"
        defaultBudget="25k - 75k"
        sliderImages={sliderImages}
      />

      {/* 360 Marketing Ultra-Premium Dark Theme Wrapper */}
      <div className="mk360-dark-bg">
        <Marketing360Problem />
        <Marketing360Solution />
        <Marketing360Stack />
        <Marketing360Flow />
        <Marketing360Framework />
        <Marketing360CaseStudy />
        <Marketing360WhoNeeds />
        <Marketing360VsTraditional />
        <ServiceCTA 
          serviceName="360° Marketing"
          badgeIcon="⚡"
          badgeText="RESULTS DRIVEN 360° MARKETING"
          title="Let's Grow Your Brand"
          titlePreposition="with"
          titleHighlight="360° Marketing"
          description="Grow your business with a complete 360° marketing strategy that unifies SEO, social media, paid advertising, content, email, and branding. We create integrated campaigns that increase visibility, generate quality leads, and drive sustainable business growth."
          features={[
            { icon: <FiGlobe />, text: "Omnichannel Reach" },
            { icon: <FiVolume2 />, text: "Integrated Campaigns" },
            { icon: <FiBarChart2 />, text: "Performance Insights" },
            { icon: <FiTrendingUp />, text: "Business Growth" }
          ]}
        />
        <Marketing360Addons />
      </div>

      <BottomComponents />
    </>
  );
};

export default VideoMarketing;
