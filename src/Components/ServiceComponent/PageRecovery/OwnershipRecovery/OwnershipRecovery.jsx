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
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiUser, FiKey, FiShield, FiZap } from "react-icons/fi";
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
            <ServiceCTA
                serviceName="Ownership Recovery"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN OWNERSHIP RECOVERY"
                title="Recover Your"
                titleHighlight="Google Business Ownership"
                description="Lost access to your Google Business Profile? We help businesses recover ownership, restore admin access, and resolve ownership conflicts quickly and securely. Our experts guide you through Google's verification process to ensure you regain full control of your business listing and online presence."
                features={[
                    { icon: <FiUser />, text: "Ownership Recovery" },
                    { icon: <FiKey />, text: "Admin Access" },
                    { icon: <FiShield />, text: "Secure Verification" },
                    { icon: <FiZap />, text: "Quick Resolution" }
                ]}
            />

            <GmbRecoveryAddons />
            <BottomComponents />
        </div>
    )
}

export default OwnershipRecovery