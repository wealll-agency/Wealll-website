import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

import "./InnerComponents/affiliate-dark.css";
import AffiliateContext from "./InnerComponents/AffiliateContext";
import AffiliateStrategy from "./InnerComponents/AffiliateStrategy";
import AffiliateBenefits from "./InnerComponents/AffiliateBenefits";
import AffiliatePricing from "./InnerComponents/AffiliatePricing";
import AffiliateAddons from "./InnerComponents/AffiliateAddons";

const AffiliateCollaboration = () => {
    return (
        <>
            <Intro
                title="Affiliate Collaboration"
                desc="Affiliate collaboration enables brands to drive revenue through performance-based partnerships. As an AI-driven marketing agency and one of the best influencer marketing agencies in India, WEALLL connects your brand with the right affiliates to generate targeted traffic, conversions, and scalable growth."
                defaultService="Influencer Marketing"
                defaultBudget="15k - 60k"
            />
            <BannerComponent />

            {/* New Tech-Strong Affiliate Components */}
            <AffiliateContext />
            <AffiliateStrategy />
            <AffiliateBenefits />
            <AffiliatePricing />
            <AffiliateAddons />

            <BottomComponents />
        </>
    );
};

export default AffiliateCollaboration;
