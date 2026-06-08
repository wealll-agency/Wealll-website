import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'
import RmContent from './InnerComponents/RmContent'
import RmPricing from './InnerComponents/RmPricing'

const ReputationManagement = () => {
    return (
        <>
            <Intro
                title="Reputation Management"
                desc="Track what people are saying about your brand. We help you take control of your narrative and build sustainable brand credibility across all digital touchpoints."
                defaultService="PR Services"
                defaultBudget="50k - 1L"
            />
            <BannerComponent />
            <RmContent />
            <RmPricing />
            <BottomComponents />
        </>
    )
}

export default ReputationManagement