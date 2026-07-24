import React from "react";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiSearch, FiTrendingUp, FiGlobe, FiBarChart2 } from "react-icons/fi";
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
// Future imports will go here
import BottomComponents from "../../CommonComponents/BottomComponents";
import "./InnerComponents/seo-dark.css";

const dm1 = mediaUrl("assets/images/dm1.jpeg");
const dm2 = mediaUrl("assets/images/dm2.jpeg");
const dm3 = mediaUrl("assets/images/dm3.jpeg");
const dm4 = mediaUrl("assets/images/dm4.jpeg");
const dm5 = mediaUrl("assets/images/dm5.jpeg");
import { mediaUrl } from "../../../../config/media";

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
        <ServiceCTA 
          serviceName="SEO Services"
          badgeIcon="⚡"
          badgeText="RESULTS DRIVEN SEO"
          title="Let's Grow Your Brand"
          titlePreposition="with"
          titleHighlight="SEO"
          description="Increase your online visibility with data-driven SEO strategies. We optimize your website to rank higher on search engines, attract qualified organic traffic, and convert visitors into loyal customers."
          features={[
            { icon: <FiSearch />, text: "Keyword Research" },
            { icon: <FiTrendingUp />, text: "Higher Rankings" },
            { icon: <FiGlobe />, text: "Organic Traffic" },
            { icon: <FiBarChart2 />, text: "Performance Tracking" }
          ]}
        />
        {/* Other sections will be added sequentially */}
      </div>

      <BottomComponents />
    </>
  );
};

export default SEO;
