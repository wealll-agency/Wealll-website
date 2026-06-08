import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

import "./InnerComponents/instagram-dark.css";
import InstagramWhyWorks from "./InnerComponents/InstagramWhyWorks";
import InstagramStrategy from "./InnerComponents/InstagramStrategy";
import InstagramBenefits from "./InnerComponents/InstagramBenefits";
import InstagramPricing from "./InnerComponents/InstagramPricing";
import InstagramAddons from "./InnerComponents/InstagramAddons";

const InstagramReelCollaboration = () => {
    return (
        <>
            <Intro
                title="Instagram Reel Collaboration"
                desc="Create viral trends and engage audiences with short-form video content. We partner with Instagram creators to produce high-impact Reels for your brand."
                defaultService="Influencer Marketing"
                defaultBudget="30k - 1.5L"
            />
            <BannerComponent />

            {/* New Premium Instagram Components */}
            <InstagramWhyWorks />
            <InstagramStrategy />
            <InstagramBenefits />
            <InstagramPricing />
            <InstagramAddons />

            <BottomComponents />
        </>
    );
};

export default InstagramReelCollaboration;
