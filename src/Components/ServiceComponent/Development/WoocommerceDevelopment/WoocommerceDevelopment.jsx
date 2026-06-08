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
import WoocommercePricing from './InnerComponents/WoocommercePricing';

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
                <WoocommercePricing />
            </div>

            <BannerComponent />
            <BottomComponents />
        </div>
    );
}

export default WoocommerceDevelopment;