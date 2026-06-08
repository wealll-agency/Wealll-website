import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BottomComponents from '../../CommonComponents/BottomComponents'

// Custom Website Development Sections
import WebServices from './InnerComponents/WebServices';
import WebProcess from './InnerComponents/WebProcess';
import WebPortfolio from './InnerComponents/WebPortfolio';
import WebWhyChooseUs from './InnerComponents/WebWhyChooseUs';
import WebTechStack from './InnerComponents/WebTechStack';
import WebPricing from './InnerComponents/WebPricing';

const WebsiteDevelopment = () => {
    return (
        <>
            <Intro
                title="Website Development"
                desc="Website Development is a full-stack web development framework that uses JavaScript for both the front-end and back-end. It is a popular choice for building dynamic and interactive web applications."
                defaultService="Development"
                defaultBudget="1L - 3L"
            />

            <WebServices />
            <WebProcess />
            <WebPortfolio />
            <WebWhyChooseUs />
            <WebTechStack />
            <WebPricing />


            <BottomComponents />
        </>
    )
}

export default WebsiteDevelopment