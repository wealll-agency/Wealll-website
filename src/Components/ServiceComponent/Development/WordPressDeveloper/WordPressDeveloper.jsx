import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'

// Newly Designed WordPress Sub-components
import WPBenefits from './InnerComponents/WPBenefits'
import WPServices from './InnerComponents/WPServices'
import WPCompanyStats from './InnerComponents/WPCompanyStats'
import WPWhyLove from './InnerComponents/WPWhyLove'
import WPWhyUs from './InnerComponents/WPWhyUs'
import WPPortfolio from './InnerComponents/WPPortfolio'
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiLayout, FiSettings, FiSearch, FiSmartphone } from "react-icons/fi";

const WordPressDeveloper = () => {
    return (
        <div>
            {/* Top section explicitly left without the dark bg to maintain white background per new request */}
            <Intro
                title="WordPress Development"
                desc="WordPress is a simple, robust, result-driven, and scalable Content Management System that powers millions of websites. Experience top-tier development uniquely tailored to your brand."
                defaultService="Development"
                defaultBudget="1L - 3L"
            />
            <BannerComponent />
            
            {/* Wrapping all the remaining custom dark sections in the dark bg */}
            <div style={{ backgroundColor: '#0b0c10' }}>
            
            <WPBenefits />
            <WPServices />
            <WPCompanyStats />
            <WPWhyLove />
            <WPWhyUs />
            <WPPortfolio />
            <ServiceCTA 
                serviceName="WordPress Developer"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN WORDPRESS DEVELOPMENT"
                title="Build Powerful"
                titleHighlight="WordPress Websites"
                description="Build a professional WordPress website that's fast, secure, and easy to manage. From custom themes and plugin development to WooCommerce stores and SEO optimization, we create scalable WordPress solutions that enhance your online presence and help your business grow."
                features={[
                    { icon: <FiLayout />, text: "Custom Themes" },
                    { icon: <FiSettings />, text: "Plugin Integration" },
                    { icon: <FiSearch />, text: "SEO Optimized" },
                    { icon: <FiSmartphone />, text: "Easy Content Management" }
                ]}
            />
            </div>
            
            <BottomComponents />
        </div>
    )
}

export default WordPressDeveloper