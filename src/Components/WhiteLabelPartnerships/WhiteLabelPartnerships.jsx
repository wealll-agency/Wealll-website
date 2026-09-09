import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import PartnershipModelSection from './PartnershipModelSection';
import TargetAudienceSection from './TargetAudienceSection';
import ServiceEngineSection from './ServiceEngineSection';
import './WhiteLabelPartnerships.css';

const WhiteLabelPartnerships = () => {
    useEffect(() => {
        document.title = "White-Label Partnerships | We Alll";
    }, []);

    return (
        <main className="wlp-page">
            <HeroSection />
            <FeaturesSection />
            <PartnershipModelSection />
            <TargetAudienceSection />
            <ServiceEngineSection />
            {/* Future sections will go here */}
        </main>
    );
};

export default WhiteLabelPartnerships;
