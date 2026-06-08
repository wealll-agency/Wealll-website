import React from "react";
import Intro from "../DigitalMarketing/InnerComponents/Intro";
import SEOHeroWhoWeAre from "./InnerComponents/SEOHeroWhoWeAre";
import SEOWhyChoose from "./InnerComponents/SeoWhyChoose";
import SEOBenefits from "./InnerComponents/SEOBenefits";
import SEOStrategyVideo from "./InnerComponents/SEOStrategyVideo";
import SeoProcess from "./InnerComponents/SeoProcess";
import SEORanking from "./InnerComponents/SEORanking";
import SEOOtherServices from "./InnerComponents/SEOOtherServices";
import SEOPreferredPartner from "./InnerComponents/SEOPreferredPartner";
import SEOToolsAndAudit from "./InnerComponents/SEOToolsAndAudit";
import SEOPackages from "./InnerComponents/SEOPackages";
// Future imports will go here
import BottomComponents from "../../CommonComponents/BottomComponents";
import "./InnerComponents/seo-dark.css";

import dm1 from "../../../../assets/images/dm1.jpeg";
import dm2 from "../../../../assets/images/dm2.jpeg";
import dm3 from "../../../../assets/images/dm3.jpeg";
import dm4 from "../../../../assets/images/dm4.jpeg";
import dm5 from "../../../../assets/images/dm5.jpeg";

const SEO = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="SEO Services"
        desc="Elevate your brand's digital presence with data-driven Search Engine Optimization strategies tailored to conquer your specific market."
        defaultService="Digital Marketing"
        defaultBudget="25k - 75k"
        sliderImages={sliderImages}
      />

      {/* Premium Dark Theme Wrapper */}
      <div className="seo-dark-bg">
        <SEOHeroWhoWeAre />
        <SEOWhyChoose />
        <SEOBenefits />
        <SEOStrategyVideo />
        <SeoProcess />
        <SEORanking />
        <SEOOtherServices />
        {/* <SEOPreferredPartner /> */}
        <SEOToolsAndAudit />
        <SEOPackages />
        {/* Other sections will be added sequentially */}
      </div>

      <BottomComponents />
    </>
  );
};

export default SEO;
