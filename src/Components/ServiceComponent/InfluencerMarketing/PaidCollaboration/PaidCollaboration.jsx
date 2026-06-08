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
import PaidPricing from "./InnerComponents/PaidPricing";

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
            <PaidPricing />

            <BottomComponents />
        </div>
    );
};

export default PaidCollaboration;
