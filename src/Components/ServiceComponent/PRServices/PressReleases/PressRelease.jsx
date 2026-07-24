import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BottomComponents from '../../CommonComponents/BottomComponents'
import PrHero from './InnerComponents/PrHero'
import PrConfidence from './InnerComponents/PrConfidence'
import PrGlobalize from './InnerComponents/PrGlobalize'
import PrNetwork from './InnerComponents/PrNetwork'
import PrClients from './InnerComponents/PrClients'
import ServiceCTA from '../../CommonComponents/ServiceCTA'
import { FiFileText, FiGlobe, FiAward, FiTrendingUp } from "react-icons/fi";

const PressRelease = () => {
    return (
        <>
            <Intro
                title="Press releases (Print/Digital)"
                desc="Content is king, and we’re here to help you rule. Our Press Releases are designed to create engaging and informative announcements that establish your brand as a thought leader in your industry."
                defaultService="PR Services"
                defaultBudget="50k - 1L"
            />
            <div className="pr-dark-wrapper">
                <PrHero />
                <PrConfidence />
                <PrGlobalize />
                {/* <PrNetwork /> */}
                <PrClients />
            </div>
            <ServiceCTA 
                serviceName="Press Releases"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN PRESS RELEASES"
                title="Make Every Announcement"
                titlePreposition=""
                titleHighlight="Newsworthy"
                description="Share your company's milestones with professionally written press releases that capture media attention and strengthen your brand's credibility. From product launches and business achievements to partnerships and corporate announcements, we craft compelling press releases that maximize visibility and reach the right audience."
                features={[
                    { icon: <FiFileText />, text: "News Announcements" },
                    { icon: <FiGlobe />, text: "Media Distribution" },
                    { icon: <FiAward />, text: "Brand Authority" },
                    { icon: <FiTrendingUp />, text: "Greater Reach" }
                ]}
            />
            <BottomComponents />
        </>
    )
}

export default PressRelease