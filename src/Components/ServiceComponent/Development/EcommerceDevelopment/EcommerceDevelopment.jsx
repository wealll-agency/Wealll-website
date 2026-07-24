import React from 'react';
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro';
import BannerComponent from '../../CommonComponents/BannerComponent';
import BottomComponents from '../../CommonComponents/BottomComponents';

// Inner Components
import EcommerceImpact from './InnerComponents/EcommerceImpact';
import EcommerceServices from './InnerComponents/EcommerceServices';
import EcommerceTechnologies from './InnerComponents/EcommerceTechnologies';
import EcommercePlatforms from './InnerComponents/EcommercePlatforms';
import EcommerceVideoSection from './InnerComponents/EcommerceVideoSection';
import EcommerceSolutions from './InnerComponents/EcommerceSolutions';
import EcommerceAI from './InnerComponents/EcommerceAI';
import EcommerceWhyChooseUs from './InnerComponents/EcommerceWhyChooseUs';
import EcommercePortfolio from './InnerComponents/EcommercePortfolio';
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiShoppingCart, FiCreditCard, FiPackage, FiTrendingUp } from "react-icons/fi";

const EcommerceDevelopment = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Intro
                title="E-commerce Platform Development"
                desc="E-commerce Platform Development involves architecting and building highly scalable, secure, and robust online stores that drive massive sales and enhance your brand's digital presence."
                defaultService="Development"
                defaultBudget="1L - 3L"
            />
            {/* Banner is optional, but included to match the skeleton structure */}
            <BannerComponent />
            
            <EcommerceImpact />
            
            <div style={{ backgroundColor: '#070913' }}>
                <EcommerceServices />
                <EcommerceTechnologies />
                <EcommercePlatforms />
            </div>

            <EcommerceVideoSection />

            <div style={{ backgroundColor: '#070913' }}>
                <EcommerceSolutions />
                <EcommerceAI />
                <EcommerceWhyChooseUs />
                <EcommercePortfolio />
                <ServiceCTA 
                    serviceName="Ecommerce Development"
                    badgeIcon="⚡"
                    badgeText="RESULTS DRIVEN ECOMMERCE DEVELOPMENT"
                    title="Build eCommerce Stores"
                    titleHighlight="That Drive Sales"
                    description="Grow your online business with custom eCommerce solutions designed for performance, security, and scalability. From product catalogs and secure payment gateways to inventory management and mobile-friendly shopping experiences, we build online stores that maximize conversions and deliver exceptional customer experiences."
                    features={[
                        { icon: <FiShoppingCart />, text: "Custom Store" },
                        { icon: <FiCreditCard />, text: "Secure Payments" },
                        { icon: <FiPackage />, text: "Inventory Control" },
                        { icon: <FiTrendingUp />, text: "Higher Sales" }
                    ]}
                />
            </div>

            <BottomComponents />
        </div>
    );
}

export default EcommerceDevelopment;