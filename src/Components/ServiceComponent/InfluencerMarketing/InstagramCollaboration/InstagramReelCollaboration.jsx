import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

import "./InnerComponents/instagram-dark.css";
import InstagramWhyWorks from "./InnerComponents/InstagramWhyWorks";
import InstagramStrategy from "./InnerComponents/InstagramStrategy";
import InstagramBenefits from "./InnerComponents/InstagramBenefits";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiSmartphone, FiUsers, FiHeart, FiTrendingUp } from "react-icons/fi";
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
            <ServiceCTA 
                serviceName="Instagram Collaboration"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN INSTAGRAM COLLABORATION"
                title="Grow Your Brand"
                titlePreposition="Through"
                titleHighlight="Instagram Creators"
                description="Boost your brand's presence with strategic Instagram collaborations that connect you with trusted creators and engaged communities. From Reels, Stories, and Feed Posts to product launches and influencer campaigns, we create authentic partnerships that increase visibility, drive engagement, and turn followers into loyal customers."
                features={[
                    { icon: <FiSmartphone />, text: "Instagram Reels" },
                    { icon: <FiUsers />, text: "Creator Partnerships" },
                    { icon: <FiHeart />, text: "Audience Engagement" },
                    { icon: <FiTrendingUp />, text: "Brand Growth" }
                ]}
            />
            <InstagramAddons />

            <BottomComponents />
        </>
    );
};

export default InstagramReelCollaboration;
