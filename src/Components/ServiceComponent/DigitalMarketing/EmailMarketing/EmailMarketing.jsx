import React from "react";
import Intro from "../DigitalMarketing/InnerComponents/Intro";
import EmailHeroSection from "./InnerComponents/EmailHeroSection";
import EmailWhatWeOffer from "./InnerComponents/EmailWhatWeOffer";
import EmailHowItWorks from "./InnerComponents/EmailHowItWorks";
import EmailFeatures from "./InnerComponents/EmailFeatures";
import EmailBenefits from "./InnerComponents/EmailBenefits";
import EmailPackages from "./InnerComponents/EmailPackages";
import EmailAddons from "./InnerComponents/EmailAddons";
import BottomComponents from "../../CommonComponents/BottomComponents";
import "./InnerComponents/email-dark.css";

import dm1 from "../../../../assets/images/dm1.jpeg";
import dm2 from "../../../../assets/images/dm2.jpeg";
import dm3 from "../../../../assets/images/dm3.jpeg";
import dm4 from "../../../../assets/images/dm4.jpeg";
import dm5 from "../../../../assets/images/dm5.jpeg";

const EmailMarketing = () => {
  const sliderImages = [dm1, dm2, dm5, dm3, dm4, dm1, dm2, dm5, dm3, dm4];
  return (
    <>
      <Intro
        title="Email Marketing"
        desc="We're not just another Email marketing company. We are your ticket to getting noticed - by the right people, at the right time."
        defaultService="Digital Marketing"
        defaultBudget="50k - 1L"
        sliderImages={sliderImages}
      />
      <div className="email-dark-bg">
        <EmailHeroSection />
        <EmailWhatWeOffer />
        <EmailHowItWorks />
        <EmailFeatures />
        <EmailBenefits />
        <EmailPackages />
        <EmailAddons />
      </div>
      <BottomComponents />
    </>
  );
};

export default EmailMarketing;
