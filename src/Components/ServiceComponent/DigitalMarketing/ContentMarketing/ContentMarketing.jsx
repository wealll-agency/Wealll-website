import React from "react";
import Intro from "../DigitalMarketing/InnerComponents/Intro";
import BrandVisibility from "../SocialMediaMarketing/InnerComponents/BrandVisibility";
import ContentMastery from "./InnerComponents/ContentMastery";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Phase 11: Mass Dark Theme Ecosystem Components
import './InnerComponents/content-marketing-dark.css';
import ContentMarketingWhy from "./InnerComponents/ContentMarketingWhy";
import ContentMarketingServices from "./InnerComponents/ContentMarketingServices";
import ContentMarketingHire from "./InnerComponents/ContentMarketingHire";
import ContentMarketingQualities from "./InnerComponents/ContentMarketingQualities";
import ContentMarketingSpectrum from "./InnerComponents/ContentMarketingSpectrum";
import ContentMarketingPackages from "./InnerComponents/ContentMarketingPackages";
import ContentMarketingAddons from "./InnerComponents/ContentMarketingAddons";

const ContentMarketing = () => {
  return (
    <>
      <Intro
        title="Content Marketing"
        desc="We're not just another Content marketing company. We are your ticket to getting noticed - by the right people, at the right time."
        defaultService="Digital Marketing"
        defaultBudget="15k - 50k"
      />
      {/* <BrandVisibility title="Content Marketing" customTitle={<>Dominate <span className="highlight-gradient">Content Marketing</span> With Data-Driven Content Marketing</>}>
        <p>
          As a premier <strong>Content Marketing company in Kolkata</strong>, <span className="brand-name">We Alll</span> doesn't just rank your website; we secure your dominance. We blend technical precision with content mastery to ensure your brand answers the questions your customers are asking. Stop chasing algorithms and start <span className="highlight-text">leading the conversation.</span>
        </p>
      </BrandVisibility> */}

      {/* Dark Theme Ecosystem Flow */}
      <ContentMarketingWhy />
      <ContentMarketingServices />
      <ContentMarketingHire />
      <ContentMastery />
      <ContentMarketingQualities />
      <ContentMarketingSpectrum />
      <ContentMarketingPackages />
      <ContentMarketingAddons />

      <BottomComponents />
    </>
  );
};

export default ContentMarketing;
