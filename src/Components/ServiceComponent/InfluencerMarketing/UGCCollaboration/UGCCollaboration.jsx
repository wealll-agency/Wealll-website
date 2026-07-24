import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

// New Premium UGC Components
import UGCWhyWorks from "./InnerComponents/UGCWhyWorks";
import UGCStrategy from "./InnerComponents/UGCStrategy";
import UGCBenefits from "./InnerComponents/UGCBenefits";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiSmartphone, FiVideo, FiUsers, FiTrendingUp } from "react-icons/fi";
import "./InnerComponents/ugc-dark.css";

const UGCCollaboration = () => {
    return (
        <div>
            <Intro
                title="UGC Collaboration"
                desc="UGC collaborations help brands create authentic, high-performing content that resonates with modern audiences. As an AI-driven marketing agency and one of the best influencer marketing agencies in India, WEALLL works with creators to produce relatable content that drives engagement, builds trust, and improves conversion across digital platforms."
                defaultService="Influencer Marketing"
                defaultBudget="10k - 40k"
            />
            <BannerComponent />

            {/* Premium Dark Theme Wrapper */}
            <div className="ugc-dark-bg">
                <UGCWhyWorks />
                <UGCStrategy />
                <UGCBenefits />
                <ServiceCTA 
                    serviceName="UGC Collaboration"
                    badgeIcon="⚡"
                    badgeText="RESULTS DRIVEN UGC COLLABORATION"
                    title="Create Authentic Content"
                    titlePreposition="with"
                    titleHighlight="UGC Creators"
                    description="Build trust with authentic user-generated content created by skilled creators who bring your products and brand to life. We help you produce high-quality UGC videos and photos that increase engagement, strengthen credibility, and drive higher conversions across social media, websites, and paid advertising campaigns."
                    features={[
                        { icon: <FiSmartphone />, text: "Authentic Content" },
                        { icon: <FiVideo />, text: "Creator Videos" },
                        { icon: <FiUsers />, text: "Build Trust" },
                        { icon: <FiTrendingUp />, text: "Higher Conversions" }
                    ]}
                />
            </div>

            <BottomComponents />
        </div>
    );
};

export default UGCCollaboration;
