import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { useEffect } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import DigitalMarketing from "./Components/ServiceComponent/DigitalMarketing/DigitalMarketing/DigitalMarketing";
import SocialMediaMarketing from "./Components/ServiceComponent/DigitalMarketing/SocialMediaMarketing/SocialMediaMarketing";
import ContentMarketing from "./Components/ServiceComponent/DigitalMarketing/ContentMarketing/ContentMarketing";
import EmailMarketing from "./Components/ServiceComponent/DigitalMarketing/EmailMarketing/EmailMarketing";
import SEO from "./Components/ServiceComponent/DigitalMarketing/SEO/SEO";
import VideoMarketing from "./Components/ServiceComponent/DigitalMarketing/VideoMarketing/VideoMarketing";
import WhatsappMarketing from "./Components/ServiceComponent/DigitalMarketing/WhatsappMarketing/WhatsappMarketing";
import Blogs from "./Components/ServiceComponent/ContentCreation/Blogs/Blogs";
import CaseStudies from "./Components/ServiceComponent/ContentCreation/CaseStudies/CaseStudies";
import ContentLocalisation from "./Components/ServiceComponent/ContentCreation/ContentLocalisation/ContentLocalisation";
import ContentModeration from "./Components/ServiceComponent/ContentCreation/ContentModeration/ContentModeration";
import CorporateThemeSongs from "./Components/ServiceComponent/ContentCreation/CorporateThemeSongs/CorporateThemeSongs";
import Ebooks from "./Components/ServiceComponent/ContentCreation/Ebooks/Ebooks";
import FilmSubtitling from "./Components/ServiceComponent/ContentCreation/FilmSubtitling/FilmSubtitling";
import Mailers from "./Components/ServiceComponent/ContentCreation/Mailers/Mailers";
import Newsletters from "./Components/ServiceComponent/ContentCreation/Newsletters/Newsletters";
import PressReleases from "./Components/ServiceComponent/ContentCreation/PressReleases/PressReleases";
import EcommerceProductDescription from "./Components/ServiceComponent/ContentCreation/EcommerceProductDescription/EcommerceProductDescription";
import SeoContent from "./Components/ServiceComponent/ContentCreation/SeoContent/SeoContent";
import SocialMediaManagement from "./Components/ServiceComponent/ContentCreation/SocialMediaManagement/SocialMediaManagement";
import Sops from "./Components/ServiceComponent/ContentCreation/Sops/Sops";
import ScriptWriting from "./Components/ServiceComponent/ContentCreation/ScriptWriting/ScriptWriting";
import WebContent from "./Components/ServiceComponent/ContentCreation/WebContent/WebContent";
import WhitePapers from "./Components/ServiceComponent/ContentCreation/WhitePapers/WhitePapers";
import AdFilms from "./Components/ServiceComponent/VideoProduction/AdFilms/AdFilms";
import CorporateFilms from "./Components/ServiceComponent/VideoProduction/CorporateFilms/CorporateFilms";
import Exhibitionvideos from "./Components/ServiceComponent/VideoProduction/Exhibitionvideos/Exhibitionvideos";
import PlatformExplanatoryVideos from "./Components/ServiceComponent/VideoProduction/PlatformExplanatoryVideos/PlatformExplanatoryVideos";
import PlatformFlagshipVideos from "./Components/ServiceComponent/VideoProduction/PlatformFlagshipVideos/PlatformFlagshipVideos";
import ProductFAQVideos from "./Components/ServiceComponent/VideoProduction/ProductFAQVideos/ProductFAQVideos";
import SuccessStories from "./Components/ServiceComponent/VideoProduction/SuccessStories/SuccessStories";
import TelevisionCommercials from "./Components/ServiceComponent/VideoProduction/TelevisionCommercials/TelevisionCommercials";
import TestimonialVideos from "./Components/ServiceComponent/VideoProduction/TestimonialVideos/TestimonialVideos";
import AdvertisingCampaignAssets from "./Components/ServiceComponent/ExperienceDesign/AdvertisingCampaignAssets/AdvertisingCampaignAssets";
import BrandManual from "./Components/ServiceComponent/ExperienceDesign/BrandManual/BrandManual";
import Catalogues from "./Components/ServiceComponent/ExperienceDesign/Catalogues/Catalogues";
import CommunicationCollaterals from "./Components/ServiceComponent/ExperienceDesign/CommunicationCollaterals/CommunicationCollaterals";
import CompanyProfile from "./Components/ServiceComponent/ExperienceDesign/CompanyProfile/CompanyProfile";
import EventBrandingAssets from "./Components/ServiceComponent/ExperienceDesign/EventBrandingAssets/EventBrandingAssets";
import ExhibitionKiosks from "./Components/ServiceComponent/ExperienceDesign/ExhibitionKiosks/ExhibitionKiosks";
import InvestorsDeck from "./Components/ServiceComponent/ExperienceDesign/InvestorsDeck/InvestorsDeck";
import BrandingDesign from "./Components/ServiceComponent/ExperienceDesign/BrandingDesign/BrandingDesign";
import LogoDesign from "./Components/ServiceComponent/ExperienceDesign/LogoDesign/LogoDesign";
import PortfolioDesign from "./Components/ServiceComponent/ExperienceDesign/PortfolioDesign/PortfolioDesign";
import Presentation from "./Components/ServiceComponent/ExperienceDesign/Presentation/Presentation";
import ProductPackaging from "./Components/ServiceComponent/ExperienceDesign/ProductPackaging/ProductPackaging";
import EcommerceDevelopment from "./Components/ServiceComponent/Development/EcommerceDevelopment/EcommerceDevelopment";
import WoocommerceDevelopment from "./Components/ServiceComponent/Development/WoocommerceDevelopment/WoocommerceDevelopment";
// import UiDevelopment from "./Components/ServiceComponent/Development/UiDevelopment/UiDevelopment";
import WebsiteDevelopment from "./Components/ServiceComponent/Development/WebsiteDevelopment/WebsiteDevelopment";
import MobileAppDevelopment from "./Components/ServiceComponent/Development/MobileAppDevelopment/MobileAppDevelopment";
import MernStackDevelopment from "./Components/ServiceComponent/Development/MernStackDevelopment/MernStackDevelopment";
import ShopifyDevelopment from "./Components/ServiceComponent/Development/ShopifyDevelopment/ShopifyDevelopment";
import FacebookPageRecovery from "./Components/ServiceComponent/PageRecovery/FacebookPageRecovery/FacebookPageRecovery";
import GmbSuspension from "./Components/ServiceComponent/PageRecovery/GmbSuspension/GmbSuspension";
import OwnershipRecovery from "./Components/ServiceComponent/PageRecovery/OwnershipRecovery/OwnershipRecovery";
import CrisisManagement from "./Components/ServiceComponent/PRServices/CrisisManagement/CrisisManagement";
import PressRelease from "./Components/ServiceComponent/PRServices/PressReleases/PressRelease";
import MediaRelations from "./Components/ServiceComponent/PRServices/MediaRelations/MediaRelations";
import ReputationManagement from "./Components/ServiceComponent/PRServices/ReputationManagement/ReputationManagement";
// import HTMLDevelopers from "./Components/ServiceComponent/Development/HTMLDevelopers/HTMLDevelopers";
import LaravelDeveloper from "./Components/ServiceComponent/Development/LaravelDeveloper/LaravelDeveloper";
import WordPressDeveloper from "./Components/ServiceComponent/Development/WordPressDeveloper/WordPressDeveloper";
import BarterCollaboration from "./Components/ServiceComponent/InfluencerMarketing/BarterCollaboration/BarterCollaboration";
import PaidCollaboration from "./Components/ServiceComponent/InfluencerMarketing/PaidCollaboration/PaidCollaboration";
import PodcastCollaboration from "./Components/ServiceComponent/InfluencerMarketing/PodcastCollaboration/PodcastCollaboration";
import AffiliateCollaboration from "./Components/ServiceComponent/InfluencerMarketing/AffiliateCollaboration/AffiliateCollaboration";
import UGCCollaboration from "./Components/ServiceComponent/InfluencerMarketing/UGCCollaboration/UGCCollaboration";
import InstagramReelCollaboration from "./Components/ServiceComponent/InfluencerMarketing/InstagramCollaboration/InstagramReelCollaboration";
import YouTubeIntegrationCollaboration from "./Components/ServiceComponent/InfluencerMarketing/YouTubeCollaboration/YouTubeIntegrationCollaboration";
import Blog from "./Components/BlogComponent/Blog";
import Career from "./Components/CareerComponent/Career";
import CareerDetails from "./Components/CareerComponent/InnerComponents/CareerDetails";
import BlogDetails from "./Components/BlogComponent/BlogDetails";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";


function App() {
  useEffect(() => {
    const scripts = [
      "./assets/js/swiper.min.js",
      "./assets/js/TweenMax.min.js",
      "./assets/js/pix-js.js",
      "./assets/js/main.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false; // maintains order
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) document.body.removeChild(script);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route
          path="/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route path="/content-marketing" element={<ContentMarketing />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/seo-services" element={<SEO />} />
        <Route path="/360-marketing" element={<VideoMarketing />} />
        <Route path="/whatsapp-marketing" element={<WhatsappMarketing />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/content-localisation" element={<ContentLocalisation />} />
        <Route path="/content-moderation" element={<ContentModeration />} />
        <Route
          path="/corporate-theme-songs"
          element={<CorporateThemeSongs />}
        />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/film-subtitling" element={<FilmSubtitling />} />
        <Route path="/mailers" element={<Mailers />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/press-releases" element={<PressReleases />} />
        <Route
          path="/ecommerce-product-description"
          element={<EcommerceProductDescription />}
        />
        <Route path="/seo-content" element={<SeoContent />} />
        <Route
          path="/social-media-management"
          element={<SocialMediaManagement />}
        />
        <Route path="/sops" element={<Sops />} />
        <Route path="/script-writing" element={<ScriptWriting />} />
        <Route path="/article-writing" element={<WebContent />} />
        <Route path="/white-papers" element={<WhitePapers />} />
        <Route path="/ad-films" element={<AdFilms />} />
        <Route
          path="/corporate-films-documentaries"
          element={<CorporateFilms />}
        />
        <Route path="/exhibition-videos" element={<Exhibitionvideos />} />
        <Route
          path="/platform-explanatory-videos"
          element={<PlatformExplanatoryVideos />}
        />
        <Route
          path="/platform-flagship-videos"
          element={<PlatformFlagshipVideos />}
        />
        <Route path="/product-faq-videos" element={<ProductFAQVideos />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route
          path="/television-commercials"
          element={<TelevisionCommercials />}
        />
        <Route path="/testimonial-videos" element={<TestimonialVideos />} />
        <Route
          path="/advertising-campaign-assets"
          element={<AdvertisingCampaignAssets />}
        />
        <Route
          path="/brand-manual-brand-guidelines"
          element={<BrandManual />}
        />
        <Route path="/catalogues-brochures" element={<Catalogues />} />
        <Route
          path="/communication-collaterals"
          element={<CommunicationCollaterals />}
        />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/event-branding-assets" element={<EventBrandingAssets />} />
        <Route path="/exhibition-kiosks" element={<ExhibitionKiosks />} />
        <Route path="/investors-deck" element={<InvestorsDeck />} />
        <Route path="/branding-design" element={<BrandingDesign />} />
        <Route path="/logo-designing" element={<LogoDesign />} />
        <Route path="/portfolio-design" element={<PortfolioDesign />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/product-packaging" element={<ProductPackaging />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/woocommerce-development" element={<WoocommerceDevelopment />} />
        {/* <Route path="/ui-development" element={<UiDevelopment />} /> */}
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/facebook-page-recovery" element={<FacebookPageRecovery />} />
        <Route path="/gmb-suspension" element={<GmbSuspension />} />
        <Route path="/ownership-recovery" element={<OwnershipRecovery />} />
        <Route path="/barter-collaboration" element={<BarterCollaboration />} />
        <Route path="/paid-collaboration" element={<PaidCollaboration />} />
        <Route path="/podcast-collaboration" element={<PodcastCollaboration />} />
        <Route path="/affiliate-collaboration" element={<AffiliateCollaboration />} />
        <Route path="/ugc-collaboration" element={<UGCCollaboration />} />
        <Route path="/instagram-reel-collaboration" element={<InstagramReelCollaboration />} />
        <Route path="/youtube-integration-collaboration" element={<YouTubeIntegrationCollaboration />} />
        <Route path="/crisis-management" element={<CrisisManagement />} />
        <Route path="/media-relations" element={<MediaRelations />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/reputation-management" element={<ReputationManagement />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/shopify-development" element={<ShopifyDevelopment />} />
        <Route path="/mern-stack-development" element={<MernStackDevelopment />} />
        {/* <Route path="/html-developers" element={<HTMLDevelopers />} /> */}
        <Route path="/laravel-developer" element={<LaravelDeveloper />} />
        <Route path="/wordpress-developer" element={<WordPressDeveloper />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career-details" element={<CareerDetails />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
