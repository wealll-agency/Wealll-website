import React from "react";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
import BottomComponents from "../../CommonComponents/BottomComponents";
import BarterStrategy from "./InnerComponents/BarterStrategy";
import BarterWhy from "./InnerComponents/BarterWhy";
import BarterPricing from "./InnerComponents/BarterPricing";
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
                <BarterPricing />
            </div>

            <BottomComponents />
        </div>
    );
};

export default BarterCollaboration;
