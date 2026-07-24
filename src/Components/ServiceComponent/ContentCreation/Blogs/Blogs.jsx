import React from "react";

import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

// New Inner Components
import BlogServices from "./InnerComponents/BlogServices";
import BlogStrategy from "./InnerComponents/BlogStrategy";
import BlogQuality from "./InnerComponents/BlogQuality";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiEdit, FiSearch, FiUsers, FiTrendingUp } from "react-icons/fi";

const Blogs = () => {
  return (
    <>
      <Intro
        title="Blog Writing"
        desc="Content is king, and we’re here to help you rule. Our blog writing services are designed to create engaging, informative, and SEO-optimized content that establishes your brand as a thought leader in your industry."
        defaultService="Content Creation"
        defaultBudget="50k - 1L"
      />
      <BannerComponent />

      {/* New Blog Writing Sections */}
      <BlogServices />
      <BlogStrategy />
      <BlogQuality />
      <ServiceCTA 
        serviceName="Blog Writing"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN BLOG WRITING"
        title="Let's Grow Your Brand"
        titlePreposition="with"
        titleHighlight="Blog Writing"
        description="Boost your online presence with high-quality, SEO-friendly blog content that educates your audience, builds trust, and drives organic traffic. We create engaging blogs that strengthen your brand authority and turn readers into customers."
        features={[
          { icon: <FiEdit />, text: "SEO Blog Writing" },
          { icon: <FiSearch />, text: "Keyword Research" },
          { icon: <FiUsers />, text: "Audience Engagement" },
          { icon: <FiTrendingUp />, text: "Organic Traffic" }
        ]}
      />

      <BottomComponents />
    </>
  );
};

export default Blogs;
