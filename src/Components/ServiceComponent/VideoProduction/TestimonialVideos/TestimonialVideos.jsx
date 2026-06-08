import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import TestimonialSections from "./InnerComponents/TestimonialSections";
import TestimonialPricing from "./InnerComponents/TestimonialPricing";

const TestimonialVideos = () => {
  return (
    <>
      <Intro
        title="Testimonial Videos"
        desc="Turn satisfied clients into your best salespeople. Our testimonial video production services capture authentic stories and measurable results that build instant trust and drive deep conversions."
        defaultService="Video Production"
        defaultBudget="1L - 3L"
      />

      <TestimonialSections />
      <TestimonialPricing />
      <BottomComponents />
    </>
  );
};

export default TestimonialVideos;
