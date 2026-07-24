import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

import "./InnerComponents/affiliate-dark.css";
import AffiliateContext from "./InnerComponents/AffiliateContext";
import AffiliateStrategy from "./InnerComponents/AffiliateStrategy";
import AffiliateBenefits from "./InnerComponents/AffiliateBenefits";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiUsers, FiDollarSign, FiTarget, FiTrendingUp } from "react-icons/fi";
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
            <ServiceCTA 
                serviceName="Affiliate Collaboration"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN AFFILIATE COLLABORATION"
                title="Grow Your Sales"
                titlePreposition="with"
                titleHighlight="Affiliate Partnerships"
                description="Drive measurable growth through strategic affiliate collaborations that reward performance. We connect your brand with trusted affiliates and creators who promote your products to the right audience, helping you increase sales, generate qualified leads, and maximize your marketing ROI."
                features={[
                    { icon: <FiUsers />, text: "Affiliate Network" },
                    { icon: <FiDollarSign />, text: "Performance Rewards" },
                    { icon: <FiTarget />, text: "Qualified Leads" },
                    { icon: <FiTrendingUp />, text: "Sales Growth" }
                ]}
            />
            <AffiliateAddons />

            <BottomComponents />
        </>
    );
};

export default AffiliateCollaboration;
