import React, { useEffect } from "react";
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro';
import BottomComponents from '../../CommonComponents/BottomComponents';

import LaravelAbout from './InnerComponents/LaravelAbout';
import LaravelReasons from './InnerComponents/LaravelReasons';
import LaravelWhyUs from './InnerComponents/LaravelWhyUs';
import LaravelIndustries from './InnerComponents/LaravelIndustries';
import LaravelTechStack from './InnerComponents/LaravelTechStack';
import LaravelPricing from './InnerComponents/LaravelPricing';
import './InnerComponents/laravel-dark.css';

const LaravelDeveloper = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="lar-page-wrapper">

            <Intro
                title="Laravel Development"
                desc="We are a premium Laravel Development Agency. Our expert Laravel developers create solutions that establish your brand as a thought leader."
                defaultService="Laravel Development"
                defaultBudget="1L - 3L"
            />

            <LaravelAbout />

            <LaravelReasons />

            <LaravelWhyUs />

            <LaravelIndustries />

            <LaravelTechStack />

            <LaravelPricing />

            <BottomComponents />

        </div>
    );
};

export default LaravelDeveloper;