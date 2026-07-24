import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BottomComponents from '../../CommonComponents/BottomComponents'

// Custom Website Development Sections
import WebServices from './InnerComponents/WebServices';
import WebProcess from './InnerComponents/WebProcess';
import WebPortfolio from './InnerComponents/WebPortfolio';
import WebWhyChooseUs from './InnerComponents/WebWhyChooseUs';
import WebTechStack from './InnerComponents/WebTechStack';
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiMonitor, FiZap, FiSmartphone, FiTrendingUp } from "react-icons/fi";

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
            <ServiceCTA 
                serviceName="Website Development"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN WEBSITE DEVELOPMENT"
                title="Build High-Performing"
                titleHighlight="Websites That Convert"
                description="Transform your online presence with custom website development tailored to your business goals. We build fast, responsive, SEO-friendly, and conversion-focused websites that deliver exceptional user experiences, strengthen your brand, and turn visitors into loyal customers."
                features={[
                    { icon: <FiMonitor />, text: "Custom Development" },
                    { icon: <FiZap />, text: "Fast Performance" },
                    { icon: <FiSmartphone />, text: "Responsive Design" },
                    { icon: <FiTrendingUp />, text: "Higher Conversions" }
                ]}
            />


            <BottomComponents />
        </>
    )
}

export default WebsiteDevelopment