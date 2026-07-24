import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import TestimonialSections from "./InnerComponents/TestimonialSections";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiMessageSquare, FiStar, FiShield, FiTrendingUp } from "react-icons/fi";

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
      <ServiceCTA 
        serviceName="Testimonial Videos"
        badgeIcon="⚡"
        badgeText="RESULTS DRIVEN TESTIMONIAL VIDEOS"
        title="Let's Build Trust"
        titlePreposition="with"
        titleHighlight="Testimonial Videos"
        description="Turn satisfied customers into your strongest brand advocates with authentic testimonial videos. We capture genuine customer experiences that build trust, showcase your credibility, and inspire potential clients to choose your business with confidence."
        features={[
          { icon: <FiMessageSquare />, text: "Real Testimonials" },
          { icon: <FiStar />, text: "Customer Reviews" },
          { icon: <FiShield />, text: "Build Trust" },
          { icon: <FiTrendingUp />, text: "More Conversions" }
        ]}
      />
      <BottomComponents />
    </>
  );
};

export default TestimonialVideos;
