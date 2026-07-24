import React from "react";
import BannerComponent from "../../CommonComponents/BannerComponent";
import BottomComponents from "../../CommonComponents/BottomComponents";
import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro";
// Inner Components
import PodcastIntro from "./InnerComponents/PodcastIntro";
import PodcastWhy from "./InnerComponents/PodcastWhy";
import PodcastStrategy from "./InnerComponents/PodcastStrategy";
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiMic, FiHeadphones, FiMessageCircle, FiTrendingUp } from "react-icons/fi";

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
                <ServiceCTA 
                    serviceName="Podcast Collaboration"
                    badgeIcon="⚡"
                    badgeText="RESULTS DRIVEN PODCAST COLLABORATION"
                    title="Amplify Your Brand"
                    titlePreposition="with"
                    titleHighlight="Podcast Collaborations"
                    description="Connect with highly engaged audiences through strategic podcast collaborations. We help your brand partner with relevant podcast creators and hosts to share your story, build credibility, and increase brand awareness through authentic conversations that inspire trust and lasting engagement."
                    features={[
                        { icon: <FiMic />, text: "Podcast Partnerships" },
                        { icon: <FiHeadphones />, text: "Engaged Audience" },
                        { icon: <FiMessageCircle />, text: "Brand Storytelling" },
                        { icon: <FiTrendingUp />, text: "Industry Authority" }
                    ]}
                />
                <BottomComponents />
            </div>

        </>
    );
};

export default PodcastCollaboration;
