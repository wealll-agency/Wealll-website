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
import GmbSuspPricing from './InnerComponents/GmbSuspPricing'

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
                <GmbSuspPricing />

            </div>

            <BottomComponents />
        </div>
    )
}

export default GmbSuspension