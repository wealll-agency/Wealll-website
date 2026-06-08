import React from "react";

import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

// New Inner Components
import BlogServices from "./InnerComponents/BlogServices";
import BlogStrategy from "./InnerComponents/BlogStrategy";
import BlogQuality from "./InnerComponents/BlogQuality";
import BlogPricing from "./InnerComponents/BlogPricing";

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
      <BlogPricing />

      <BottomComponents />
    </>
  );
};

export default Blogs;
