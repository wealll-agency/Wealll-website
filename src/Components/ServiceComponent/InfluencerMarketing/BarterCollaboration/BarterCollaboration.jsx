import React from "react";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiGift, FiUsers, FiSmartphone, FiTrendingUp } from "react-icons/fi";

import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import BarterStrategy from "./InnerComponents/BarterStrategy";
import BarterWhy from "./InnerComponents/BarterWhy";

import "./InnerComponents/barter-dark.css";

const BarterCollaboration = () => {
    return (
        <div className="barter-collab-page">
            <Intro
                title="Barter Collaboration"
                desc="Barter collaborations are a powerful way for brands to build authentic visibility without heavy ad spend. WEALLL connects your brand with the right creators to drive real engagement, trust, and organic reach through strategic product-based partnerships."
                defaultService="Influencer Marketing"
                defaultBudget="10k - 50k"
            />

            {/* Premium Dark Theme Wrapper */}
            <div className="barter-dark-bg">
                <BarterStrategy />
                <BarterWhy />
                <ServiceCTA 
                    serviceName="Barter Collaboration"
                    badgeIcon="⚡"
                    badgeText="RESULTS DRIVEN BARTER COLLABORATION"
                    title="Grow Your Brand"
                    titlePreposition="with"
                    titleHighlight="Barter Collaborations"
                    description="Build authentic partnerships with creators through strategic barter collaborations. We connect your brand with relevant influencers who exchange genuine product experiences for engaging content, helping you increase brand awareness, reach targeted audiences, and create lasting customer trust."
                    features={[
                        { icon: <FiGift />, text: "Product Exchange" },
                        { icon: <FiUsers />, text: "Creator Partnerships" },
                        { icon: <FiSmartphone />, text: "Authentic Content" },
                        { icon: <FiTrendingUp />, text: "Brand Growth" }
                    ]}
                />
            </div>

            <BottomComponents />
        </div>
    );
};

export default BarterCollaboration;
