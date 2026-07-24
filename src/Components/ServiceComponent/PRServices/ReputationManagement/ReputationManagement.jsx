import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'
import RmContent from './InnerComponents/RmContent'
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiStar, FiShield, FiMessageSquare, FiTrendingUp } from "react-icons/fi";


const ReputationManagement = () => {
    return (
        <>
            <Intro
                title="Reputation Management"
                desc="Track what people are saying about your brand. We help you take control of your narrative and build sustainable brand credibility across all digital touchpoints."
                defaultService="PR Services"
                defaultBudget="50k - 1L"
            />
            <BannerComponent />
            <RmContent />
            <ServiceCTA 
                serviceName="Reputation Management"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN REPUTATION MANAGEMENT"
                title="Build Trust Through"
                titlePreposition=""
                titleHighlight="Reputation Management"
                description="Build and maintain a strong brand reputation with proactive reputation management strategies. We monitor your online presence, manage customer feedback, improve public perception, and help establish lasting trust that drives customer loyalty and long-term business growth."
                features={[
                    { icon: <FiStar />, text: "Review Management" },
                    { icon: <FiShield />, text: "Brand Protection" },
                    { icon: <FiMessageSquare />, text: "Customer Trust" },
                    { icon: <FiTrendingUp />, text: "Positive Reputation" }
                ]}
            />
            <BottomComponents />
        </>
    )
}

export default ReputationManagement