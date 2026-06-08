import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'

/* NEW GMB RECOVERY IMPORTS */
import GmbRecoveryHero from './InnerComponents/GmbRecoveryHero'
import GmbRecoveryProcess from './InnerComponents/GmbRecoveryProcess'
import GmbRecoveryCaseStudy from './InnerComponents/GmbRecoveryCaseStudy'
import GmbRecoveryTimelineWho from './InnerComponents/GmbRecoveryTimelineWho'
import GmbRecoveryWhyUs from './InnerComponents/GmbRecoveryWhyUs'
import GmbRecoveryPricing from './InnerComponents/GmbRecoveryPricing'
import GmbRecoveryAddons from './InnerComponents/GmbRecoveryAddons'
import GmbRecoveryComboCTA from './InnerComponents/GmbRecoveryComboCTA'
import GmbRecoverySeoMeta from './InnerComponents/GmbRecoverySeoMeta'
import GmbRecoveryNextSteps from './InnerComponents/GmbRecoveryNextSteps'


const OwnershipRecovery = () => {
    return (
        <div className="gmb-recovery-page">
            <Intro
                title="GMB Ownership Recovery"
                desc="Lost access to your Google Business Profile? Whether it was an employee departure, a rogue agency, or an unauthorized bypass, we restore your digital ownership securely."
                defaultService="Page Recovery"
                defaultBudget="15k - 50k"
            />
            <BannerComponent />

            <GmbRecoveryHero />
            <GmbRecoveryProcess />
            <GmbRecoveryCaseStudy />
            <GmbRecoveryTimelineWho />
            <GmbRecoveryWhyUs />
            <GmbRecoveryComboCTA />
            <GmbRecoveryNextSteps />
            <GmbRecoverySeoMeta />
            <GmbRecoveryPricing />
            <GmbRecoveryAddons />
            <BottomComponents />
        </div>
    )
}

export default OwnershipRecovery