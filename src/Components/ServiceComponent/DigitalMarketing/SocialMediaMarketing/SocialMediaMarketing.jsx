import React from "react";
import Intro from "../DigitalMarketing/InnerComponents/Intro";
import BrandVisibility from "./InnerComponents/BrandVisibility";
// New Modern Component Imports
import PlatformsWeManage from "./InnerComponents/PlatformsWeManage";
import MarketingServices from "./InnerComponents/MarketingServices";
import GrowthStrategy from "./InnerComponents/GrowthStrategy";
import SMM_Portfolio from "./InnerComponents/SMM_Portfolio";
import SMM_Packages from "./InnerComponents/SMM_Packages";

import SocialMediaReach from "./InnerComponents/SocialMediaReach";
import CommercialAd from "./InnerComponents/CommercialAd";
import BottomComponents from "../../CommonComponents/BottomComponents";

import dm1 from "../../../../assets/images/dm1.jpeg";
import dm2 from "../../../../assets/images/dm2.jpeg";
import dm3 from "../../../../assets/images/dm3.jpeg";
import dm4 from "../../../../assets/images/dm4.jpeg";
import dm5 from "../../../../assets/images/dm5.jpeg";

const SocialMediaMarketing = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="Social Media Marketing"
        desc="We're not just another social media marketing company. We are your ticket to getting noticed - by the right people, at the right time."
        defaultService="Digital Marketing"
        defaultBudget="50k - 1L"
        sliderImages={sliderImages}
      />

      {/* 1. Preserved Brand Visibility (Black Section) */}
      <BrandVisibility title="Social Media Marketing" customTitle={<>We <span className="highlight-gradient">Make Your Brand</span> the One Everyone Finds First</>}>
        <p>
          As a <strong>Social Media Marketing company in Kolkata</strong>, <span className="brand-name">We Alll</span> turns your brand into the kind people actively search for, <span className="highlight-text">not just scroll past.</span> With our precision and the creativity expected from the best <strong>Social Media Marketing agency in Kolkata</strong>, we craft content that boosts visibility, builds trust, and fuels discoverability across every platform.
        </p>
      </BrandVisibility>

      {/* 2. New Modern Sections */}
      <PlatformsWeManage />

      <MarketingServices />

      <GrowthStrategy />

      {/* 3. Preserved Social Media Reach (Boost Section) */}
      <SocialMediaReach />

      {/* 4. More New Modern Sections */}
      <SMM_Portfolio />

      <SMM_Packages />

      {/* 5. Existing Bottom Components */}
      <CommercialAd />
      <BottomComponents />
    </>
  );
};

export default SocialMediaMarketing;
