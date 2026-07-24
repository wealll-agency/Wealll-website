import React from 'react'
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro'
import BottomComponents from '../../CommonComponents/BottomComponents'

// Inner Components
import './InnerComponents/gmb-suspension-dark.css'
import GmbSuspHero from './InnerComponents/GmbSuspHero'
import GmbSuspProcess from './InnerComponents/GmbSuspProcess'
import GmbSuspCaseStudy from './InnerComponents/GmbSuspCaseStudy'
import GmbSuspExpertiseTimeline from './InnerComponents/GmbSuspExpertiseTimeline'
import GmbSuspWhoWhy from './InnerComponents/GmbSuspWhoWhy'
import GmbSuspCTA from './InnerComponents/GmbSuspCTA'
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiRefreshCw, FiMapPin, FiShield, FiZap } from "react-icons/fi";

const GmbSuspension = () => {
    return (
        <div >
            <Intro
                title="GMB Suspension Recovery"
                desc="Is your Google Business Profile suspended? Seeing “Not Eligible for Display”? We help businesses get their listings reinstated and back on Google — fast, compliant, and result-driven."
                defaultService="Page Recovery"
                defaultBudget="15k - 50k"
            />



            <div className="gmb-susp-dark-bg">
                <GmbSuspHero />
                <GmbSuspProcess />
                <GmbSuspCaseStudy />
                <GmbSuspExpertiseTimeline />
                <GmbSuspWhoWhy />
                <GmbSuspCTA />
                <ServiceCTA 
                    serviceName="GMB Suspension Recovery"
                    badgeIcon="⚡"
                    badgeText="RESULTS DRIVEN GMB SUSPENSION RECOVERY"
                    title="Recover Your"
                    titleHighlight="Google Business Profile"
                    description="Get your suspended Google Business Profile back online with our expert recovery services. We identify suspension issues, resolve Google policy violations, prepare reinstatement requests, and help restore your business listing so you can regain visibility on Google Search and Maps."
                    features={[
                        { icon: <FiRefreshCw />, text: "Profile Recovery" },
                        { icon: <FiMapPin />, text: "Maps Visibility" },
                        { icon: <FiShield />, text: "Policy Compliance" },
                        { icon: <FiZap />, text: "Quick Recovery" }
                    ]}
                />

            </div>

            <BottomComponents />
        </div>
    )
}

export default GmbSuspension