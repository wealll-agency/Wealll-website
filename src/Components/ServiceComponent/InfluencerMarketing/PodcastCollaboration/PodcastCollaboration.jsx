import React from "react";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
// Inner Components
import PodcastIntro from "./InnerComponents/PodcastIntro";
import PodcastWhy from "./InnerComponents/PodcastWhy";
import PodcastStrategy from "./InnerComponents/PodcastStrategy";
import PodcastPricing from "./InnerComponents/PodcastPricing";

// Styles
import "./InnerComponents/podcast-dark.css";

const PodcastCollaboration = () => {
    return (
        <>
            <Intro
                title="Podcast Collaboration"
                desc="Podcast collaborations help brands build authority, trust, and deeper audience connections through long-form content. As an AI-driven marketing agency and one of the best influencer marketing agencies in India, WEALLL connects your brand with relevant podcasts to amplify your voice, share your story, and reach highly engaged audiences."
                defaultService="Influencer Marketing"
                defaultBudget="1L - 3L"
            />
            <div className="podcast-dark-root">
                <BannerComponent />
                <PodcastIntro />
                <PodcastWhy />
                <PodcastStrategy />
                <PodcastPricing />
                <BottomComponents />
            </div>

        </>
    );
};

export default PodcastCollaboration;
