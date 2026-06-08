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
import EcommercePricing from './InnerComponents/EcommercePricing';

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
                <EcommercePricing />
            </div>

            <BottomComponents />
        </div>
    );
}

export default EcommerceDevelopment;