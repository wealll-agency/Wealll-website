import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BannerComponent from '../../CommonComponents/BannerComponent'
import BottomComponents from '../../CommonComponents/BottomComponents'
import FbRecoveryHero from './InnerComponents/FbRecoveryHero'
import FbRecoveryProcess from './InnerComponents/FbRecoveryProcess'
import FbRecoveryTimelineWho from './InnerComponents/FbRecoveryTimelineWho'
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiUnlock, FiShield, FiUser, FiZap } from "react-icons/fi";
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
            <ServiceCTA 
                serviceName="Facebook Page Recovery"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN FACEBOOK PAGE RECOVERY"
                title="Recover Your"
                titleHighlight="Facebook Business Page"
                description="Regain control of your Facebook Business Page with our expert recovery services. Whether your page has been hacked, disabled, restricted, or you've lost admin access, we work to restore ownership, recover valuable business assets, and help your brand get back online quickly and securely."
                features={[
                    { icon: <FiUnlock />, text: "Page Recovery" },
                    { icon: <FiShield />, text: "Account Security" },
                    { icon: <FiUser />, text: "Admin Access" },
                    { icon: <FiZap />, text: "Quick Recovery" }
                ]}
            />
            <FbRecoveryCTA />
            <BottomComponents />
        </div>
    )
}

export default FacebookPageRecovery