import React from 'react';
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro';
import BannerComponent from '../../CommonComponents/BannerComponent';
import BottomComponents from '../../CommonComponents/BottomComponents';

// Inner Components
import WoocommerceWhyChoose from './InnerComponents/WoocommerceWhyChoose';
import WoocommerceExpertise from './InnerComponents/WoocommerceExpertise';
import WoocommerceBenefits from './InnerComponents/WoocommerceBenefits';
import WoocommerceServices from './InnerComponents/WoocommerceServices';
import WoocommerceApproach from './InnerComponents/WoocommerceApproach';
import WoocommercePortfolio from './InnerComponents/WoocommercePortfolio';
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiShoppingBag, FiCreditCard, FiSettings, FiTrendingUp } from "react-icons/fi";

const WoocommerceDevelopment = () => {
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <Intro
                title="Woocommerce Development"
                desc="Empower your brand with a feature-rich, high-performance WooCommerce store. From custom theme designs to complex plugin integrations, We Alll delivers end-to-end ecommerce excellence."
                defaultService="Development"
                defaultBudget="50K - 5L"
            />
            
            <div className="woo-page-wrapper">
                <WoocommerceWhyChoose />
                <WoocommerceExpertise />
                <WoocommerceBenefits />
                <WoocommerceServices />
                <WoocommerceApproach />
                <WoocommercePortfolio />
                <ServiceCTA 
                    serviceName="Woocommerce Development"
                    badgeIcon="⚡"
                    badgeText="RESULTS DRIVEN WOOCOMMERCE DEVELOPMENT"
                    title="Build Powerful"
                    titleHighlight="WooCommerce Stores"
                    description="Grow your online business with custom WooCommerce development tailored to your brand and customers. From theme customization and product management to secure payment gateways and performance optimization, we build scalable WooCommerce stores that deliver seamless shopping experiences and drive higher sales."
                    features={[
                        { icon: <FiShoppingBag />, text: "Custom Store" },
                        { icon: <FiCreditCard />, text: "Secure Checkout" },
                        { icon: <FiSettings />, text: "WooCommerce Setup" },
                        { icon: <FiTrendingUp />, text: "Sales Growth" }
                    ]}
                />
            </div>

            <BannerComponent />
            <BottomComponents />
        </div>
    );
}

export default WoocommerceDevelopment;