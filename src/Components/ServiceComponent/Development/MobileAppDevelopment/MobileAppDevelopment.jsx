import React, { useEffect } from 'react';
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'

import MobileAppHero from './InnerComponents/MobileAppHero';
import MobileAppWhyUs from './InnerComponents/MobileAppWhyUs';
import MobileAppServices from './InnerComponents/MobileAppServices';
import MobileAppTechStack from './InnerComponents/MobileAppTechStack';
import MobileAppPortfolio from './InnerComponents/MobileAppPortfolio';
import MobileAppPricing from './InnerComponents/MobileAppPricing';
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
                <MobileAppPricing />
            </div>

            <BannerComponent />
            <BottomComponents />
        </>
    )
}

export default MobileAppDevelopment