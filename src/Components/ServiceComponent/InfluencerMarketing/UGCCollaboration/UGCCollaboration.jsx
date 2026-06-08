import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";

// New Premium UGC Components
import UGCWhyWorks from "./InnerComponents/UGCWhyWorks";
import UGCStrategy from "./InnerComponents/UGCStrategy";
import UGCBenefits from "./InnerComponents/UGCBenefits";
import UGCPackages from "./InnerComponents/UGCPackages";
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
                <UGCPackages />
            </div>

            <BottomComponents />
        </div>
    );
};

export default UGCCollaboration;
