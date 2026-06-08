import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BottomComponents from '../../CommonComponents/BottomComponents'
import PrHero from './InnerComponents/PrHero'
import PrConfidence from './InnerComponents/PrConfidence'
import PrGlobalize from './InnerComponents/PrGlobalize'
import PrNetwork from './InnerComponents/PrNetwork'
import PrClients from './InnerComponents/PrClients'

const PressRelease = () => {
    return (
        <>
            <Intro
                title="Press releases (Print/Digital)"
                desc="Content is king, and we’re here to help you rule. Our Press Releases are designed to create engaging and informative announcements that establish your brand as a thought leader in your industry."
                defaultService="PR Services"
                defaultBudget="50k - 1L"
            />
            <div className="pr-dark-wrapper">
                <PrHero />
                <PrConfidence />
                <PrGlobalize />
                <PrNetwork />
                <PrClients />
            </div>
            <BottomComponents />
        </>
    )
}

export default PressRelease