import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'
import FbRecoveryHero from './InnerComponents/FbRecoveryHero'
import FbRecoveryProcess from './InnerComponents/FbRecoveryProcess'
import FbRecoveryTimelineWho from './InnerComponents/FbRecoveryTimelineWho'
import FbRecoveryPricing from './InnerComponents/FbRecoveryPricing'
import FbRecoveryAddons from './InnerComponents/FbRecoveryAddons'
import FbRecoveryWhyUs from './InnerComponents/FbRecoveryWhyUs'
import FbRecoveryCTA from './InnerComponents/FbRecoveryCTA'
const FacebookPageRecovery = () => {
    return (
        <div className="fb-recovery-page">
            <Intro
                title="Facebook Page Recovery"
                desc="Professional recovery of hacked, lost, or disabled Facebook pages. We restore your digital control and secure your business assets."
                defaultService="Page Recovery"
                defaultBudget="10k - 30k"
            />
            <BannerComponent />
            <FbRecoveryHero />
            <FbRecoveryProcess />
            <FbRecoveryTimelineWho />
            <FbRecoveryWhyUs />
            <FbRecoveryCTA />
            <FbRecoveryPricing />
            <FbRecoveryCTA />
            <BottomComponents />
        </div>
    )
}

export default FacebookPageRecovery