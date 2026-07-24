import React, { useEffect } from "react";
import Intro from '../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro';
import BottomComponents from '../../CommonComponents/BottomComponents';

import LaravelAbout from './InnerComponents/LaravelAbout';
import LaravelReasons from './InnerComponents/LaravelReasons';
import LaravelWhyUs from './InnerComponents/LaravelWhyUs';
import LaravelIndustries from './InnerComponents/LaravelIndustries';
import LaravelTechStack from './InnerComponents/LaravelTechStack';
import ServiceCTA from "../../CommonComponents/ServiceCTA";
import { FiSettings, FiLock, FiLink, FiTrendingUp } from "react-icons/fi";
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

            <ServiceCTA
                serviceName="Laravel Developer"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN LARAVEL DEVELOPMENT"
                title="Build Powerful Business"
                titlePreposition="with"
                titleHighlight="Laravel"
                description="Build secure, scalable, and high-performance web applications with our Laravel development services. From custom business portals and CRM systems to enterprise software and RESTful APIs, we develop robust Laravel solutions that streamline operations, improve efficiency, and support your business growth."
                features={[
                    { icon: <FiSettings />, text: "Custom Development" },
                    { icon: <FiLock />, text: "Secure Backend" },
                    { icon: <FiLink />, text: "API Integration" },
                    { icon: <FiTrendingUp />, text: "Scalable Solutions" }
                ]}
            />

            <BottomComponents />

        </div>
    );
};

export default LaravelDeveloper;