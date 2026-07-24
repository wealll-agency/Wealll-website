import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

// Import Custom Premium Components
import "./InnerComponents/paid-dark.css";
import PaidIntro from "./InnerComponents/PaidIntro";
import PaidProblem from "./InnerComponents/PaidProblem";
import PaidProcess from "./InnerComponents/PaidProcess";
import PaidBenefits from "./InnerComponents/PaidBenefits";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiTarget, FiUsers, FiVolume2, FiTrendingUp } from "react-icons/fi";

const PaidCollaboration = () => {
    return (
        <div className="paid-collab-page">
            <Intro
                title="Paid Collaboration"
                desc="Paid influencer collaborations help you reach new audiences quickly and effectively. WEALLL manages the entire process—from finding the right creators to campaign execution and performance tracking—ensuring your brand grows with measurable impact."
                defaultService="Influencer Marketing"
                defaultBudget="25k - 1L"
            />
            <BannerComponent />

            {/* Custom Ultra-Premium Sections */}
            <PaidIntro />
            <PaidProblem />
            <PaidProcess />
            <PaidBenefits />
            <ServiceCTA 
                serviceName="Paid Collaboration"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN PAID COLLABORATION"
                title="Scale Your Brand"
                titlePreposition="with"
                titleHighlight="Paid Collaborations"
                description="Expand your brand's reach with strategic paid collaborations featuring trusted influencers and content creators. We connect your business with the right voices to create authentic sponsored content that increases brand awareness, drives engagement, and delivers measurable marketing results."
                features={[
                    { icon: <FiTarget />, text: "Targeted Creators" },
                    { icon: <FiUsers />, text: "Sponsored Campaigns" },
                    { icon: <FiVolume2 />, text: "Audience Reach" },
                    { icon: <FiTrendingUp />, text: "Campaign ROI" }
                ]}
            />

            <BottomComponents />
        </div>
    );
};

export default PaidCollaboration;
