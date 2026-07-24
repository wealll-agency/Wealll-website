import React, { useEffect } from 'react';
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'

import MobileAppHero from './InnerComponents/MobileAppHero';
import MobileAppWhyUs from './InnerComponents/MobileAppWhyUs';
import MobileAppServices from './InnerComponents/MobileAppServices';
import MobileAppTechStack from './InnerComponents/MobileAppTechStack';
import MobileAppPortfolio from './InnerComponents/MobileAppPortfolio';
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiSmartphone, FiLayout, FiLock, FiTrendingUp } from "react-icons/fi";
import './InnerComponents/mobile-dark.css';

const MobileAppDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Intro
                title="Mobile App Development"
                desc="Mobile apps that attract and engage audiences. As a company with a global presence, we create inspirational designs and provide innovative solutions."
                defaultService="Mobile App Development"
                defaultBudget="1L - 3L"
            />

            <div className="mobile-dark-wrapper">
                <MobileAppHero />
                <MobileAppWhyUs />
                <MobileAppServices />
                <MobileAppTechStack />
                <MobileAppPortfolio />
                <ServiceCTA 
                    serviceName="Mobile App Development"
                    badgeIcon="⚡"
                    badgeText="RESULTS DRIVEN MOBILE APP DEVELOPMENT"
                    title="Build Powerful Mobile Apps"
                    titleHighlight="That Drive Business Growth"
                    description="Bring your ideas to life with custom mobile app development for Android and iOS. We design and develop secure, scalable, and user-friendly mobile applications that deliver exceptional user experiences, streamline business operations, and help your brand connect with customers anytime, anywhere."
                    features={[
                        { icon: <FiSmartphone />, text: "Cross-Platform Apps" },
                        { icon: <FiLayout />, text: "Intuitive UI/UX" },
                        { icon: <FiLock />, text: "Secure Applications" },
                        { icon: <FiTrendingUp />, text: "Scalable Performance" }
                    ]}
                />
            </div>

            <BannerComponent />
            <BottomComponents />
        </>
    )
}

export default MobileAppDevelopment