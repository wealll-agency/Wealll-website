import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import './WhiteLabelPartnerships.css';

const WhiteLabelPartnerships = () => {
    useEffect(() => {
        document.title = "White-Label Partnerships | We Alll";
    }, []);

    return (
        <main className="wlp-page">
            <HeroSection />
            {/* Future sections will go here */}
        </main>
    );
};

export default WhiteLabelPartnerships;
