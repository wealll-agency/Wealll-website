import Intro from "../../DigitalMarketing/DigitalMarketing/InnerComponents/Intro"
import BottomComponents from "../../CommonComponents/BottomComponents"
import ServiceCTA from "../../CommonComponents/ServiceCTA"
import { FiTag, FiBook, FiStar, FiTrendingUp } from "react-icons/fi";

// Import all inner components for Branding Design
import BrandIdentityFramework from "./InnerComponents/BrandIdentityFramework";
import VisualIdentitySystem from "./InnerComponents/VisualIdentitySystem";
import BrandApplicationRules from "./InnerComponents/BrandApplicationRules";
import BrandCommunicationGuidelines from "./InnerComponents/BrandCommunicationGuidelines";
import DesignConsistencyGuidelines from "./InnerComponents/DesignConsistencyGuidelines";
import DigitalBrandAdaptation from "./InnerComponents/DigitalBrandAdaptation";
import CorporateBrochure from "./InnerComponents/CorporateBrochure";
import ProductCatalogue from "./InnerComponents/ProductCatalogue";
import MarketingBrochure from "./InnerComponents/MarketingBrochure";
import CorporateStationery from "./InnerComponents/CorporateStationery";
import SalesMarketingCollaterals from "./InnerComponents/SalesMarketingCollaterals";
import DigitalCommunicationAssets from "./InnerComponents/DigitalCommunicationAssets";
import CompanyProfileStrategy from "./InnerComponents/CompanyProfileStrategy";
import VisualPresentationDesign from "./InnerComponents/VisualPresentationDesign";
import CompanyProfileMarketing from "./InnerComponents/CompanyProfileMarketing";


const BrandingDesign = () => {
    return (
        <>

            <Intro
                title="Branding Design"
                desc="In today’s fast-paced digital landscape, your brand is your most valuable asset. It’s the first impression you make, the promise you keep, and the foundation of every interaction your audience has with your business. At WeAlll, we don’t just create logos; we craft identities that tell stories, spark connections, and drive real business impact."
                defaultService="Experience Design"
                defaultBudget="15k - 50k"
            />


            <div style={{ background: '#111' }}>

                <BrandIdentityFramework />
                <VisualIdentitySystem />
                <BrandApplicationRules />
                <BrandCommunicationGuidelines />
                <DesignConsistencyGuidelines />

                <DigitalBrandAdaptation />
                <CorporateBrochure />
                <ProductCatalogue />
                <MarketingBrochure />

                <CorporateStationery />
                <SalesMarketingCollaterals />
                <DigitalCommunicationAssets />

                <CompanyProfileStrategy />
                <VisualPresentationDesign />
                <CompanyProfileMarketing />

            </div>

            <ServiceCTA 
                serviceName="Branding Design"
                badgeIcon="⚡"
                badgeText="RESULTS DRIVEN BRANDING DESIGN"
                title="Let's Build a Brand"
                titlePreposition="People"
                titleHighlight="Remember"
                description="Build a powerful brand identity that inspires trust and leaves a lasting impression. From brand strategy and visual identity to marketing collateral and brand guidelines, we create cohesive branding solutions that help your business stand out in a competitive market."
                features={[
                  { icon: <FiTag />, text: "Brand Identity" },
                  { icon: <FiBook />, text: "Brand Guidelines" },
                  { icon: <FiStar />, text: "Visual Consistency" },
                  { icon: <FiTrendingUp />, text: "Brand Growth" }
                ]}
            />

            <BottomComponents />

        </>

    )
}

export default BrandingDesign
