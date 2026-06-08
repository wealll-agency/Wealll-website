import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'

// Inner Components
import ShopifyWhyChoose from './InnerComponents/ShopifyWhyChoose'
import ShopifyExpertise from './InnerComponents/ShopifyExpertise'
import ShopifyApproach from './InnerComponents/ShopifyApproach'
import ShopifyStats from './InnerComponents/ShopifyStats'
import ShopifyDifferent from './InnerComponents/ShopifyDifferent'
import ShopifyPortfolio from './InnerComponents/ShopifyPortfolio'
import ShopifyPricing from './InnerComponents/ShopifyPricing'

import './InnerComponents/shopify-dark.css'

const ShopifyDevelopment = () => {
    return (
        <div className="shopify-page-wrapper" style={{ backgroundColor: '#ffffff' }}>
            <div style={{ backgroundColor: '#ffffff' }}>
                <Intro
                    title="Shopify Development"
                    desc="Empower your brand with a high-performance, conversion-driven Shopify store. From custom theme development to complex app integrations, We Alll delivers end-to-end Shopify excellence."
                    defaultService="Development"
                    defaultBudget="45K - 5L"
                />
                <BannerComponent />
            </div>

            <div className="shopify-content-area" style={{ backgroundColor: '#070913' }}>
                <ShopifyWhyChoose />
                <ShopifyExpertise />
                <ShopifyApproach />
                <ShopifyStats />
                <ShopifyDifferent />
                <ShopifyPortfolio />
                <ShopifyPricing />
            </div>

            <div style={{ backgroundColor: '#ffffff' }}>
                <BottomComponents />
            </div>
        </div>
    )
}

export default ShopifyDevelopment